import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { ImageService } from 'src/app/social-media/services/image.service';
import { User } from '../../services/bucket';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  me: User;
  listItems: Item[] = [
    { key: 'name', value: '', seperate: true },
    { key: 'surname', value: '', seperate: true },
    { key: 'email', value: '', seperate: true },
  ];
  constructor(
    private _userService: UserService,
    private _imageService: ImageService,
  ) {}
  // gotoLink(route) {
  //   this._router.navigateByUrl(route, {
  //     replaceUrl: true,
  //   });
  // }
  async ngOnInit() {
    this.me = await this._userService.getActiveUser();
    this.listItems.forEach((item) => {
      item.value = this.me[item.key];
      return item;
    });
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
      this.me.profile_picture &&
      this.me.profile_picture.includes(environment.project_id)
    ) {
      let splitArr = this.me.profile_picture.split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
    }
    this._imageService.insert(bufWithMeta, imageId).then((res) => {
      this.me.profile_picture = res.url + `&timestamp=${new Date().getTime()}`;
    });
  }
}
