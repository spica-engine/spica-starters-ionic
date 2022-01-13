import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { video, Video, initialize, User, user } from '../../services/bucket';
import { environment } from '../../services/environment';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {

  @Input() video: Video;
  @Input() user: User;
  constructor(private _roter: Router, private alertController: AlertController, private toastController: ToastController) {

  }
  ngOnInit() {
  }
  navigateToVideo() {
    
    if(!this.video.permissions.length){
      if(this.video.price>=1){
        if(this.user.buyed_videos.includes(this.video._id)){
          this._roter.navigate(['fitness/video-details', this.video._id]);
        }
        else{
          this.notAuthorizedPrice();
        }
      }
    }
    else{
      if(this.video.permissions.includes(this.user.membership_level)){
        this._roter.navigate(['fitness/video-details', this.video._id]);
      }
      else{
        this.notAuthorizedRank();
      }
    }
    
    
  }
  async notAuthorizedPrice() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'You need to buy to see this video. Click OK to payment page',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("Cancel");
        },
      },
      {
        text: 'Ok',
        role: 'ok',
        handler: () => {
          this._roter.navigate(['fitness/payment', this.video._id]);
        },
      }]
    });
    alert.present();
  }
  async notAuthorizedRank() {
    const toast = await this.toastController.create({
      message: 'You are not authorized.',
      duration: 2000
    });
    toast.present();
  }
}
