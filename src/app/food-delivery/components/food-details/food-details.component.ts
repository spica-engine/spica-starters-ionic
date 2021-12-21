import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { Food, Ingredient } from '../../services/bucket';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
})
export class FoodDetailsComponent implements OnInit {
  @Input() food: Food;

  orderFood: any = {};

  extras: string[] = [];
  removeds: string[] = [];
  count = 1;

  constructor(
    private _orderService: OrderService,
    private _modalController: ModalController,
    private _commonService: CommonService
  ) {}

  ngOnInit() {
    this.orderFood = {
      _id: this.food._id,
      name: this.food.name,
      ingredients: this.food.ingredients.map((i) => i['name']),
      price: this.food.price,
      image: this.food.image,
    };
  }

  addToOrder() {
    this._commonService.presentToast('Successfully added to cart.', 2000)

    this.normalizeIngredients();
    this._orderService.addToOrder({ ...this.orderFood }, this.count);
    this.clearOrder();
    this.onDismiss();
  }

  normalizeIngredients() {
    this.orderFood.ingredients.push(...this.extras);
    this.orderFood.ingredients = this.orderFood.ingredients.filter(
      (i: string) => !this.removeds.includes(i)
    );
  }

  updateIngredients(name: string, _target: 'extras' | 'removeds') {
    const target = _target == 'extras' ? this.extras : this.removeds;

    const index = target.findIndex((i) => i == name);

    if (index == -1) {
      target.push(name);
    } else {
      target.splice(index, 1);
    }
  }

  clearOrder() {
    this.orderFood = {};
  }

  onDismiss() {
    this.orderFood = {};
    this._modalController.dismiss();
  }
}
