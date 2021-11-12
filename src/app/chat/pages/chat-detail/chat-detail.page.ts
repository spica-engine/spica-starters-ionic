import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
} from '@ionic/angular';
import { SpicaUserSelectionComponent } from 'src/app/components/spica-user-selection/spica-user-selection.component';
import { CommonService } from 'src/app/services/common.service';
// import { FollowingUsersComponent } from 'src/app/social-media/components/chat/following-users/following-users.component';
import { ImageService } from 'src/app/social-media/services/image.service';
// import { FollowingUsersComponent } from "src/app/components/chat/following-users/following-users.component";
// import { ConfirmationModalComponent } from "src/app/components/generics/confirmation-modal/confirmation-modal.component";
import { Chat, User, chat, user } from '../../services/bucket';
import { environment } from '../../services/environment';
import { UserService } from '../../services/user.service';

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
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _imageService: ImageService,
    private _modalController: ModalController,
    private _actionSheetCtrl: ActionSheetController,
    private _commonService: CommonService
  ) {}

  async ngOnInit() {
    this.me = await this._userService.getActiveUser();
    if (!this.chatGroup) {
      this.chatGroup = JSON.parse(
        this._route.snapshot.paramMap.get('chat')
      ) as Chat;
      this.chatGroup.informations.forEach((item) => {
        if (item.user['_id'] != this.me._id && item.status == 'active')
          this.users.push(item.user as User);
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
      let activeUsers = this.chatGroup.informations.find(
        (la) => la.status == 'active'
      );
      if (activeUsers) {
        managers = [activeUsers.user['_id']];
      }
    }
    await chat.patch({ managers: managers, _id: this.chatGroup._id });
    await this.removeUser(this.me);
    this._router.navigateByUrl('chat/tabs/chats');
  }
  updateGroup() {
    this.loading.name = true;
    let lastActive = [...this.chatGroup.informations];
    lastActive = lastActive.map((item) => {
      item.user = item.user['_id'] || item.user;
      return item;
    });

    chat
      .patch({
        image: this.chatGroup.image,
        name: this.chatGroup.name,
        managers: this.chatGroup.managers as any,
        informations: lastActive,
        _id: this.chatGroup._id,
      })
      .then(() => {
        this.loading.name = false;
        this._router.navigate(['chat/tabs/chats']);
      });
  }
  changeImage(data) {
    this.loading.image = true;
    let file_buf = this._imageService.toBuffer(data, 'jpeg');
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
    this._imageService
      .insert(bufWithMeta, imageId)
      .then(async (res) => {
        this.chatGroup['image'] =
          res.url + `&timestamp=${new Date().getTime()}`;
        this.loading.image = false;
        this._commonService.presentToast(
          'Picture changed. Click the save',
          3000
        );
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
      this._commonService.presentToast('Appointed as manager', 2000);
    }, 1000);
  }
  deleteManager(user, informTheUser = true) {
    let index = this.chatGroup.managers.findIndex((item) => item == user._id);
    setTimeout(async () => {
      if (index != -1) this.chatGroup.managers.splice(index, 1);
      if (
        this.chatGroup.managers.length == 0 &&
        this.chatGroup.informations.length > 0
      )
        this.chatGroup.managers.push(
          this.chatGroup.informations[0].user['_id']
        );
      this.updateLastActive();
      if (informTheUser) {
        this._commonService.presentToast('Removed from management', 2000);
      }
    }, 1000);
  }
  async addUsers() {
    const modal = await this._modalController.create({
      component: SpicaUserSelectionComponent,
      componentProps: {
        users: this.chatGroup.informations
          .filter((item) => item.status != 'active')
          .map((la) => la.user),
      },
    });

    await modal.present();
    const { data } = (await modal.onWillDismiss()) as {
      data: { users: User[] };
    };
    if (data.users.length) {
      data.users.forEach(async (item: User) => {
        let oldUser = this.chatGroup.informations.filter(
          (la) => la.user['_id'] == item._id
        )[0];
        if (oldUser) oldUser.status = 'active';
        else
          this.chatGroup.informations.push({
            user: item as string,
            status: 'active',
          });
        this.users.push(item);
        this.updateLastActive();
        data.users.length == 1
          ? this._commonService.presentToast('User added', 2000)
          : this._commonService.presentToast('Users added', 2000);
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
        text: 'Remove From Group',
        handler: () => {
          this.removeUser(user);
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ];
    if (this.chatGroup.managers.includes(user._id))
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: 'Demote To User',
        handler: () => {
          this.deleteManager(user);
        },
      });
    else
      action_buttons.splice(action_buttons.length - 1, 0, {
        text: 'Add Manager',
        handler: () => {
          this.addManager(user);
        },
      });

    let actionSheet = await this._actionSheetCtrl.create({
      buttons: action_buttons,
    });

    actionSheet.present();
  }
  async updateLastActive() {
    let lastActive = JSON.parse(JSON.stringify(this.chatGroup.informations));
    lastActive.forEach((element) => {
      element.user = element.user._id as User;
    });
    await chat.patch({
      informations: lastActive,
      managers: this.chatGroup.managers,
      _id: this.chatGroup._id,
    });
  }
  async removeUser(user) {
    this.chatGroup.informations.filter(
      (la) => la.user['_id'] == user._id
    )[0].status = 'deleted';
    this.deleteManager(user, false);
    this.users = this.users.filter((item) => item._id != user._id);
    this.updateLastActive();
    this._commonService.presentToast('User removed', 2000);
  }
}
