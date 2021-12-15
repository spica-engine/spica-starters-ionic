import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { ImageService } from 'src/app/social-media/services/image.service';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: DataService.Employee;
  listItems: Item[] = [];
  isLoading: boolean = true;
  constructor(
    private _authService: AuthService,
    private _imageService: ImageService
  ) {
    this._authService.initBucket();
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.isLoading = true;
    this.user = await this._authService.getUser().toPromise();

    this.listItems = [
      { key: 'username', value: '', seperate: true },
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
    );
    this.isLoading = false;
  }

  logout() {
    this.isLoading = true;
    this._authService.logout();
  }
  imageChange(data) {
    let mimetype = data.split(';')[0].split(':')[1];
    let file_buf = this._imageService.toBuffer(data);
    let bufWithMeta = {
      contentType: mimetype,
      data: file_buf,
      name: 'image',
    };
    let imageId;
    if (
      this.user.picture &&
      this.user.picture.includes(environment.project_id)
    ) {
      let splitArr = this.user.picture.split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
    }
    this._imageService.insert(bufWithMeta, imageId).then(async (res) => {
      this.user.picture = res.url + `&timestamp=${new Date().getTime()}`;
      await DataService.employee.patch({
        _id: this.user._id,
        picture: this.user.picture,
      });
    });
  }
}
