import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Food, Order } from '../../services/bucket';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  order: Order;
  constructor(private _orderService: OrderService) {}

  ngOnInit() {
    this.order = this._orderService.getOrder();
  }

  remove(i:number) {
    this._orderService.removeFromOrder(i);
  }

  add(food: Food) {
    this._orderService.addToOrder(food, 1);
  }

  sendOrder() {
    console.log("ordered.");
  }
}