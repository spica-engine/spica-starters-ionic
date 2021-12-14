import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../services/environment';
import { training, Training, initialize } from '../../services/bucket';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {
  id: any;
  training: Training[];
  constructor(private _route: ActivatedRoute, private _authService: AuthService) {
    this._authService.initBucket();
  }
  async ionViewWillEnter() {
    this.training = await this.getTraining();
  }
  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
  }
  async getTraining() {
    return training.getAll({ queryParams: { filter: { user: this.id }, relation: "packet.videos" } });
  }
  slideOpts = {
    initialSlide: 0,
    sliderPerView: 1,
    spaceBetween: 0,
    speed: 400,
    autoplay: true
  }

}
