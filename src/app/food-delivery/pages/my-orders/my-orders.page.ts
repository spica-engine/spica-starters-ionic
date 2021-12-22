import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Order, order, User } from '../../services/bucket';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  user: User;
  orders: Order[] = [];
  constructor(
    private _authService: AuthService
  ) { 
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()
    this.orders = await this.getMyOrders();
    console.log(this.orders)
  }

  // async ionViewWillEnter(){
  //   this.orders = await this.getMyOrders();
  // }

  getMyOrders(){
    return order.getAll({queryParams: {filter: {user: this.user._id}}})
  }

}
