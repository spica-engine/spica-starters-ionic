import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FoodDetailsComponent } from '../../components/food-details/food-details.component';
import { AuthService } from '../../services/auth.service';
import { Category, category, Food, food} from '../../services/bucket';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  foods: Food[] = [];
  basketCount: number = 0;
  categories: Category[] = [];
  isLoading: boolean = true;

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
    this.categories = await this.getCategories();
    this.isLoading = false;
  }

  getFoods(catId=undefined) {
    return food.getAll({ queryParams: { relation: true, filter: {categories: catId}, sort: {_id:-1} } });
  }

  getCategories(){
    return category.getAll()
  }

  async openModal(food: Food) {
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

  navigateToBasket(){
    this._router.navigate(['/food-delivery/basket'], {replaceUrl: true})
  }

  async setCategory(value){
    this.isLoading = true;
    if(value == 'all'){
      this.foods = await this.getFoods();
    } else {
      this.foods = await this.getFoods(value);
    }
    this.isLoading = false;
  }
}
