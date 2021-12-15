import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { ImageService } from 'src/app/social-media/services/image.service';
import { User, user } from '../../services/bucket';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  me: User;
  listItems: Item[] = [];
  isLoading: boolean = true;
  constructor(
    private _userService: UserService,
    private _imageService: ImageService,
    private _route: ActivatedRoute
  ) {}
  async ngOnInit() {
    this.me = await this._userService.getActiveUser();
    let queryParam = await this._route.snapshot.paramMap.get('userId');
    if (queryParam && queryParam != 'me' && this.me._id != queryParam)
      this.user = await this._userService.getUserById(queryParam, true);
    else this.user = this.me;

    this.listItems = [
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
      { key: 'email', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) => (item.value = this.user[item.key] ? this.user[item.key] : '')
    );
    if (this.user._id == this.me._id) {
      this.listItems = this.listItems.concat([
        {
          key: 'saved_jobs',
          value: 'Saved Jobs',
          seperate: false,
          link: 'saved-jobs',
        },
        {
          key: 'applied_jobs',
          value: 'Applied Jobs',
          seperate: false,
          link: 'applied-jobs',
        },
        {
          key: 'companies',
          value: 'My Companies',
          seperate: false,
          link: 'my-companies',
        },
      ]);
    }
    this.isLoading = false;
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
    this._imageService.insert(bufWithMeta, imageId).then(async (res) => {
      this.me.profile_picture = res.url + `&timestamp=${new Date().getTime()}`;
      await user.patch({
        _id: this.me._id,
        profile_picture: this.me.profile_picture,
      });
    });
  }
  logout() {
    this.isLoading = true;
    this._userService.logOut();
  }
}
