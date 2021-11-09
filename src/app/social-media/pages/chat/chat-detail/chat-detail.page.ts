import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FollowingUsersComponent } from 'src/app/social-media/components/chat/following-users/following-users.component';
import { DataService } from 'src/app/social-media/services/data.service';
import { environment } from 'src/app/social-media/services/environment';
import { ImageService } from 'src/app/social-media/services/image.service';
// import { FollowingUsersComponent } from "src/app/components/chat/following-users/following-users.component";
// import { ConfirmationModalComponent } from "src/app/components/generics/confirmation-modal/confirmation-modal.component";
import { Chat, User, chat, user } from '../../../services/bucket';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  me: User;
  groupId: string;
  chatGroup: Chat;
  loading = {
    name: false,
    image: false,
  };
  users: User[] = [];
  user_img_empty = environment.user_img;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
    private modalController: ModalController,
    private translateService: TranslateService,
    private actionSheetCtrl: ActionSheetController,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    this.me = await this.userService.getActiveUser().toPromise();
    if (!this.chatGroup) {
      this.chatGroup = JSON.parse(
        this.route.snapshot.paramMap.get('chat')
      ) as Chat;
      this.chatGroup.last_active.forEach((item) => {
        if (item.user._id != this.me._id && item.status == 'active')
          this.users.push(item.user);
      });
      this.users.unshift(this.me);
    }
  }

  async deleteGroup() {
    let managers = [];
    if (this.chatGroup.managers.length > 1) {
      managers = (this.chatGroup.managers as string[]).filter(
        (user) => user != this.me._id
      );
    } else {
      let activeUsers = this.chatGroup.last_active.find(
        (la) => la.status == 'active'
      );
      if (activeUsers) {
        managers = [activeUsers.user._id];
      }
    }
    await chat.patch({ managers: managers, _id: this.chatGroup._id });
    await this.removeUser(this.me);
    this.router.navigateByUrl('home/chats/list');
  }
  updateGroup() {
    this.loading.name = true;
    let lastActive = [...this.chatGroup.last_active];
    lastActive = lastActive.map((item) => {
      item.user = (item.user._id as User) || item.user;
      return item;
    });

    chat
      .patch({
        image: this.chatGroup.image,
        name: this.chatGroup.name,
        managers: this.chatGroup.managers as any,
        last_active: lastActive,
        _id: this.chatGroup._id,
      })
      .then(() => {
        this.loading.name = false;
        this.router.navigate(['home/chats/list']);
      });
  }
  changeImage(data) {
    this.loading.image = true;
    let file_buf = this.imageService.toBuffer(data, 'jpeg');
    let bufWithMeta = {
      contentType: 'image/jpeg',
      data: file_buf,
      name: 'image',
    };
    let imageId;
    let defaultImageId: any = environment.user_img.split('/');
    defaultImageId = defaultImageId[defaultImageId.length - 1].split('?')[0];
    if (this.chatGroup['image']) {
      let splitArr = this.chatGroup['image'].split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
      if (defaultImageId == imageId) {
        imageId = null;
      }
    }
    this.imageService
      .insert(bufWithMeta, imageId)
      .then(async (res) => {
        this.chatGroup['image'] =
          res.url + `&timestamp=${new Date().getTime()}`;
        this.loading.image = false;
        let toast = await this.toastController.create({
          header: this.translateService.instant('chatGroup.change_image_info'),
          duration: 3000,
          cssClass: 'toast-custom-class',
        });
        toast.present();
      })
      .catch((e) => {
        console.log('error : ', e);
        this.loading.image = false;
      });
  }
  addManager(user) {
    setTimeout(async () => {
      this.chatGroup.managers.push(user._id);
      this.updateLastActive();
      let toast = await this.toastController.create({
        header: this.translateService.instant('chatGroup.add_manager_info'),
        duration: 3000,
        cssClass: 'toast-custom-class',
      });
      toast.present();
    }, 1000);
  }
  deleteManager(user, informTheUser = true) {
    let index = this.chatGroup.managers.findIndex((item) => item == user._id);
    setTimeout(async () => {
      if (index != -1) this.chatGroup.managers.splice(index, 1);
      if (
        this.chatGroup.managers.length == 0 &&
        this.chatGroup.last_active.length > 0
      )
        this.chatGroup.managers.push(
          this.chatGroup.last_active[0].user._id as any
        );
      this.updateLastActive();
      if (informTheUser) {
        let toast = await this.toastController.create({
          header: this.translateService.instant(
            'chatGroup.delete_manager_info'
          ),
          duration: 3000,
          cssClass: 'toast-custom-class',
        });
        toast.present();
      }
    }, 1000);
  }
  async addUsers() {
    const modal = await this.modalController.create({
      component: FollowingUsersComponent,
      componentProps: {
        extract_users: this.chatGroup.last_active
          .filter((item) => item.status == 'active')
          .map((la) => la.user),
      },
    });

    await modal.present();
    const { data } = (await modal.onWillDismiss()) as {
      data: { users: User[] };
    };
    if (data.users.length) {
      data.users.forEach(async (item: User) => {
        let oldUser = this.chatGroup.last_active.filter(
          (la) => la.user._id == item._id
        )[0];
        if (oldUser) oldUser.status = 'active';
        else this.chatGroup.last_active.push({ user: item, status: 'active' });
        this.users.push(item);
        this.updateLastActive();
        let tranlate_key =
          data.users.length == 1
            ? 'chatGroup.add_user_info'
            : 'chatGroup.add_users_info';
        let toast = await this.toastController.create({
          header: this.translateService.instant(tranlate_key),
          duration: 3000,
          cssClass: 'toast-custom-class',
        });
        toast.present();
      });
    }
  }

  async showActions(user) {
    if (
      user._id == this.me._id ||
      !this.chatGroup.managers.includes(this.me._id as any)
    )
      return;

    let action_buttons = [
      {
        text: this.translateService.instant('remove-user'),
        handler: () => {
          this.removeUser(user);
        },
      },
      {
        text: this.translateService.instant('cancel'),
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ];
    if (this.chatGroup.managers.includes(user._id))
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: this.translateService.instant('delete-manager'),
        handler: () => {
          this.deleteManager(user);
        },
      });
    else
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: this.translateService.instant('add-manager'),
        handler: () => {
          this.addManager(user);
        },
      });

    let actionSheet = await this.actionSheetCtrl.create({
      buttons: action_buttons,
    });

    actionSheet.present();
  }
  async updateLastActive() {
    let lastActive = JSON.parse(JSON.stringify(this.chatGroup.last_active));
    lastActive.forEach((element) => {
      element.user = element.user._id as User;
    });
    await chat.patch({
      last_active: lastActive,
      managers: this.chatGroup.managers,
      _id: this.chatGroup._id,
    });
  }
  async removeUser(user) {
    this.chatGroup.last_active.filter(
      (la) => la.user._id == user._id
    )[0].status = 'deleted';
    this.deleteManager(user, false);
    this.users = this.users.filter((item) => item._id != user._id);
    this.updateLastActive();
    let toast = await this.toastController.create({
      header: this.translateService.instant('chatGroup.remove_user_info'),
      duration: 3000,
      cssClass: 'toast-custom-class',
    });
    toast.present();
  }
}
