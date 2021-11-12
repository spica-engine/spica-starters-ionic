import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { CommonService } from 'src/app/services/common.service';
import { ImageService } from 'src/app/social-media/services/image.service';
import { User, user } from '../../services/bucket';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: User;
  me: User;
  searchedText: string = '';
  listItems: Item[] = [];
  isFriend: boolean = false;
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _imageService: ImageService,
    private _commonService: CommonService
  ) {}

  async ionViewWillEnter() {
    this.me = await this._userService.getActiveUser();
    let queryParam = await this._route.snapshot.paramMap.get('userId');
    if (queryParam && this.me._id != queryParam) {
      this.user = await this._userService.getUserById(queryParam, true);
      this.isFriend = this.me.friends.some(
        (item) => item['_id'] == this.user._id
      );
    } else this.user = this.me;

    this.listItems = [
      { key: 'username', value: '', seperate: true },
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
      { key: 'email', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
    );
    if (this.user._id == this.me._id) {
      this.listItems.push({
        key: 'my_friends',
        value: 'My Friends',
        seperate: false,
        link: 'friends',
      });
    }
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
      this.me.thumbnail &&
      this.me.thumbnail.includes(environment.project_id)
    ) {
      let splitArr = this.me.thumbnail.split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
    }
    this._imageService.insert(bufWithMeta, imageId).then((res) => {
      this.me.thumbnail = res.url + `&timestamp=${new Date().getTime()}`;
    });
  }
  async personProcess() {
    if (this.isFriend) {
      this.me.friends = this.me.friends.filter(
        (item) => item['_id'] != this.user._id
      );
      this._commonService.presentToast(
        `${this.user.username} succesfully deleted`,
        2000
      );
      this.isFriend = false;
    } else {
      this.me.friends.push(this.user as any);
      this._commonService.presentToast(
        `${this.searchedText} succesfully added`,
        2000
      );
      this.isFriend = true;
    }
    this._userService.me = this.me;
    await user.patch(JSON.parse(JSON.stringify(this.me)) as any);
  }
}
