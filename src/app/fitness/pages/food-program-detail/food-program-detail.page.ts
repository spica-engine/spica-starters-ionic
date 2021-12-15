import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { food_program } from '../../services/bucket';

@Component({
  selector: 'app-food-program-detail',
  templateUrl: './food-program-detail.page.html',
  styleUrls: ['./food-program-detail.page.scss'],
})
export class FoodProgramDetailPage implements OnInit {
  id: any;
  program: any;
  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.program = await this.getProgram();
  }
  async getProgram() {
    return food_program.get(this.id);
  }
  slideOpts = {
    initialSlide: 0,
    sliderPerView: 1,
    spaceBetween: 0,
  };
}
