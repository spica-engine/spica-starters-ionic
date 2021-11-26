import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FollowableModalComponent } from '../../components/followable-modal/followable-modal.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 2.4,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  user: DataService.Music_User;
  recommended: DataService.Music_Artist[] = [];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _modalController: ModalController
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    await this.getUser();
    if (!this.user.followed_artists.length) {
      this.followableModal();
    }
    this.recommended = await this.getRecommended();
  }

  async getUser() {
    this.user = await DataService.music_user.get('619e151dc76489002e9b7910', {
      queryParams: { relation: true },
    });
  }

  navigateToList(id) {
    this._router.navigate([`/music-streaming/tabs/home/list/${id}`], {
      queryParams: { type: 'artist' },
    });
  }

  getRecommended() {
    return DataService.music_artist.getAll();
  }

  async followableModal() {
    const modal = await this._modalController.create({
      component: FollowableModalComponent,
    });

    modal.onWillDismiss().then((res) => {
      if (!res.data) {
        return;
      }
      this.getUser();
    });

    return await modal.present();
  }
}
