import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { ImageService } from 'src/app/services/image.service';
import { AuthService } from '../../services/auth.service';
import { User, user } from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: User;
  listItems: Item[] = [];
  isLoading: boolean = false;
  isLoadingImage: boolean = false;
  constructor(
    private _authService: AuthService,
    private _imageService: ImageService
  ) {}

  async ionViewWillEnter() {
    this.isLoading = true;
    this.user = await this._authService.getUser().toPromise();
    console.log(this.user);
    

    if (this.user) {
      this.listItems = [
        { key: 'username', value: '', seperate: true },
        { key: 'name', value: '', seperate: true },
        { key: 'surname', value: '', seperate: true },
      ];
      this.listItems.forEach(
        (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
      );
      this.listItems = this.listItems.concat([
        {
          key: 'likes_you',
          value: 'Likes You',
          seperate: false,
          link: 'likes-you',
        },
      ]);
    }
    this.isLoading = false;
  }

  logout() {
    this._authService.logout();
    this.user = undefined;
  }

  changeImage(data) {
    this.isLoadingImage = true;
    this._imageService.compressImage(data, 1080).then((croppedData) => {
      let file_buf = this._imageService.toBuffer(croppedData, "jpeg");
      let bufWithMeta = {
        contentType: "image/jpeg",
        data: file_buf,
        name: "image",
      };
      let imageId;
      if (this.user.profile_photo && this.user.profile_photo.includes(environment.serverName)) {
        let splitArr = this.user.profile_photo.split("/");
        imageId = splitArr[splitArr.length - 1].split("?")[0];
      }
      this._imageService
        .insert(bufWithMeta, imageId)
        .then((res) => {
          this.user.profile_photo = res.url + `&timestamp=${new Date().getTime()}`;
          this.updateProfile();
        })
        .catch((e) => {
          console.log("error : ", e);
        }).finally(() => {
          this.isLoadingImage = false;
        })
    }).catch(err => {
      console.log("ERR", err);
      this.isLoadingImage = false;
    })
  }

  async updateProfile(){
    await user.patch({_id: this.user._id, profile_photo: this.user.profile_photo})
    this.user = await this._authService.getUser(true).toPromise();
  }
}
