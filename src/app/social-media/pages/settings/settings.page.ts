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
  languages = ['en', 'tr', 'ru'];
  constructor(
    private _userService: UserService,
    public _modalController: ModalController,
    private _translateService: TranslateService,
    public _toastController: ToastController,
    private _actionSheetCtrl: ActionSheetController,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  async ionViewWillEnter() {
    this.me = await this._userService.getActiveUser().toPromise();
  }
  async logOut() {
    this._userService.logOut();
    this._router.navigate(['/home'], { replaceUrl: true });
  }
  async ionViewWillLeave() {
    await this._userService.updateProfile(this.me);
  }
  async openAccountSheet() {
    const actionSheet = await this._actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this._translateService.instant('blocked_users'),
          handler: () => {
            this._router.navigate(['blockeds'], {
              relativeTo: this._activatedRoute,
            });
          },
        },
        {
          text: this._translateService.instant('cancel'),
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
    const actionSheet = await this._actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: this._translateService.instant('terms'),
          handler: () => {
            window.open('https://google.com', 'blank');
          },
        },
        {
          text: this._translateService.instant('privacy'),
          handler: () => {
            window.open('https://google.com', 'blank');
          },
        },
        {
          text: this._translateService.instant('cancel'),
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
