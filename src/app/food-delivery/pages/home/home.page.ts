import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FoodDetailsComponent } from '../../components/food-details/food-details.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  foods: DataService.Food[] = [];
  basketCount: number = 0;

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController,
    private _orderService: OrderService,
    private _router: Router
  ) {
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.foods = await this.getFoods();
  }

  getFoods() {
    return DataService.food.getAll({ queryParams: { relation: true } });
  }

  async openModal(food: DataService.Food) {
    const modal = await this._modalController.create({
      component: FoodDetailsComponent,
      cssClass: 'modal',
      componentProps: {
        food,
      },
    });

    modal.onWillDismiss().then((_) => {
      this.getBasketCount();
    });

    return await modal.present();
  }

  getBasketCount() {
    this.basketCount = this._orderService.getOrder()?.foods?.length;
  }

  navigateToOrder(){
    this._router.navigate(['/food-delivery/order'], {replaceUrl: true})
  }
}
