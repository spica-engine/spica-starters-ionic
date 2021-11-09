import { Component } from '@angular/core';
import { User } from '../../services/bucket';
import { UserService } from './../../services/user.service';
import { ImageService } from './../../services/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage {
  me: User;
  validUsername: boolean = true;
  loading = {
    main: true,
    image_uploading_loading: true,
    username_check: false,
  };
  constructor(
    private userService: UserService,
    private imageService: ImageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ionViewWillEnter() {
    this.loading.image_uploading_loading = false;
    let user_id = this.activatedRoute.snapshot.paramMap.get('id');
    if (user_id == 'add') {
      this.me = {
        identity: this.userService.me.identity,
        last_online_date: this.userService.me.last_online_date,
        language: this.userService.me.language,
        notification: this.userService.me.notification,
        visibility: 'public',
        username: '',
      };
    } else this.me = await this.userService.getUserById(user_id);
    this.loading.main = false;
  }

  userUploadedImage(data) {
    this.loading.image_uploading_loading = true;

    let file_buf = this.imageService.toBuffer(data, 'jpeg');
    let bufWithMeta = {
      contentType: 'image/jpeg',
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
    this.imageService
      .insert(bufWithMeta, imageId)
      .then(async (res) => {
        this.me.thumbnail = res.url + `&timestamp=${new Date().getTime()}`;
        await this.userService.updateProfilePhoto(this.me.thumbnail);
        this.loading.image_uploading_loading = false;
      })
      .catch((e) => {
        console.log('error : ', e);
        this.loading.image_uploading_loading = false;
      });
  }
  updateProfile() {
    this.loading.main = true;

    this.userService
      .updateProfile(this.me)
      .then((_) => this.router.navigate(['profile', this.me._id]));
  }
  checkUserName() {
    this.validUsername = false;
    this.loading.username_check = true;
    this.userService.getUserByUsername(this.me.username).then((user) => {
      this.validUsername =
        (!user[0] || this.me._id == user[0]?._id) &&
        !this.me.username.split(' ')[1];
      this.loading.username_check = false;
    });
  }
  isInvalidFieldExist() {
    return this.me ? this.me.username.length < 5 : false;
  }
}
