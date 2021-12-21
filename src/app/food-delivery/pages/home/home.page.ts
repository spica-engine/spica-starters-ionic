import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FoodDetailsComponent } from '../../components/food-details/food-details.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  foods: DataService.Food[] = [];

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController
  ) { 
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.foods = await this.getFoods();
  }

  getFoods(){
    return DataService.food.getAll({queryParams: {relation: true}});
  }

  openModal(food: DataService.Food) {
    this._modalController
      .create({
        component: FoodDetailsComponent,
        cssClass: "modal",
        componentProps: {
          food,
        },
      })
      .then((modal) => modal.present());
  }
}
