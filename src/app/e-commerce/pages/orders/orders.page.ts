import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  loading:boolean=true;
  user: DataService.User;
  orders: DataService.Order[];

  constructor(private _authService: AuthService,private modalController: ModalController) {
    this._authService.initBucket();
   }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()    
    this.getOrders()
  }
  async getOrders(){
    this.orders = await DataService.order.getAll({queryParams:{relation:['basket','basket.products'],filter:{'basket.user':this.user._id},sort:{ "created_at":-1 } }})    
    this.loading=false;
  }
  async order(id){
    const modal = await this.modalController.create({
      component: OrderDetailsComponent,
      swipeToClose: true,
      componentProps:{
        id: id,
        cssClass: 'my-custom-class',
      }
    });
    return await modal.present();
  }
}
