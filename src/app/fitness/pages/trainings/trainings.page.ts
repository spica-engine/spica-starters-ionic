import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../services/environment';
import { training, Training, initialize } from '../../services/bucket';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {
  id: any;
  training: Training[];
  text: any;
  constructor(private router: ActivatedRoute) {
    initialize({ identity:  localStorage.getItem('fitness_spica_token')});
  }
  async ionViewWillEnter() {
    this.training = await this.getTraining();

    if (this.training?.length <= 0) {
      this.text = 'Training not found'
    }
  }
  async ngOnInit() {
    this.id = this.router.snapshot.params.id;
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
