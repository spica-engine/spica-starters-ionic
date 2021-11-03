import { Component } from '@angular/core';
import { User } from '../../services/bucket';
import {
  ActionSheetController,
  ModalController,
  ToastController,
} from '@ionic/angular';
// import { ConfirmationModalComponent } from 'src/app/components/generics/confirmation-modal/confirmation-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  me: User;
  visibilities = ['public', 'private'];
  expand_terms: boolean = false;
  user_lang: string;
  dark_mode: boolean = false;
  languages=["en", "tr", "ru"]

  constructor(
    private _userService: UserService,
    public modalController: ModalController,
    private translateService: TranslateService,
    private authService: AuthService,
    public toastController: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dark_mode = localStorage.getItem('theme') == 'dark';
  }
  async ionViewWillEnter() {
    this.me = await this._userService.getActiveUser().toPromise();
    this.user_lang = this.me.language;
  }
  async logOut() {
    // const modal = await this.modalController.create({
    //   component: ConfirmationModalComponent,
    //   componentProps: {
    //     title: 'sign-out',
    //     body: 'sign-out-confirmation',
    //   },
    //   cssClass: 'confirmation-modal-background',
    // });

    // await modal.present();
    // const { data } = await modal.onWillDismiss();
    // if (data.verify) {
    //   this.authService.logOut();
    // }
  }
  async ionViewWillLeave() {
    await this._userService.updateProfile(this.me);
  }
  reloadLanguage() {
    this.translateService.use(this.me.language);
    this.translateService.setDefaultLang(this.me.language);
    this.translateService.currentLang = this.me.language;
  }

  async deleteAccount() {
    // const modal = await this.modalController.create({
    //   component: ConfirmationModalComponent,
    //   componentProps: {
    //     title: 'account',
    //     body: 'delete_account_info',
    //   },
    //   cssClass: 'confirmation-modal-background',
    // });
    // await modal.present();
    // const { data } = await modal.onWillDismiss();
    // if (data.verify) {
    //   await this.authService.deleteAccont(this.me._id);
    //   this.authService.logOut();
    // }
  }

  async openAccountSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this.translateService.instant('delete_account'),
          handler: () => {
            this.deleteAccount();
          },
        },
        {
          text: this.translateService.instant('blocked_users'),
          handler: () => {
            this.router.navigate(['blockeds'], {
              relativeTo: this.activatedRoute,
            });
          },
        },
        {
          text: this.translateService.instant('cancel'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
  async openTermsSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this.translateService.instant('terms'),
          handler: () => {
            window.location.href = 'https://cloockie.com/terms';
          },
        },
        {
          text: this.translateService.instant('privacy'),
          handler: () => {
            window.location.href = 'https://cloockie.com/privacy';
          },
        },
        {
          text: this.translateService.instant('cancel'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
