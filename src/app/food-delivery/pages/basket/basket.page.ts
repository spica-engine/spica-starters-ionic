import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Food, Order, order, User, user } from '../../services/bucket';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { SpicaConfirmShoppingComponent } from 'src/app/components/spica-confirm-shopping/spica-confirm-shopping.component';
import { SpicaShippingAddressComponent } from 'src/app/components/spica-shipping-address/spica-shipping-address.component';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  order: Order;
  user: User;
  isLoading: boolean = false;
  
  constructor(
    private _orderService: OrderService,
    private _router: Router,
    private _authService: AuthService,
    private _modalController: ModalController,
    private _commonService: CommonService
    ) {}

  async ngOnInit() {
    this.order = this._orderService.getOrder();
    this.user = await this._authService.getUser().toPromise()
  }

  remove(i:number) {
    this._orderService.removeFromOrder(i);
  }

  add(food: Food) {
    this._orderService.addToOrder(food, 1);
  }

  async confirmOrder() {
    this.presentConfirmModal(this.user.address || []);
  }

  async presentConfirmModal(addresses) {
    const modal = await this._modalController.create({
      component: SpicaConfirmShoppingComponent,
      componentProps: {
        addresses: addresses,
        totalPrice: this.order.price,
        currency: 'USD',
        paymentMethods: [
          {title: "Cash"},
          {title: "Credit Card"},
          {title: "Online"},
        ],
      },
      cssClass: 'my-custom-class',
    });

    modal.onWillDismiss().then((res) => {
      if (res.data.value == 'close') {
        return;
      } else if (res.data.value == 'add_new_address') {
        this.presentShippingAddressModal();
      } else if (res.data.value == 'pay') {
        this.createOrder(res.data.shoppingData);
      }
    });
    return await modal.present();
  }

  async presentShippingAddressModal() {
    const modal = await this._modalController.create({
      component: SpicaShippingAddressComponent,
      cssClass: 'my-custom-class',
    });

    modal.onWillDismiss().then((res) => {
      if (res.data.value == 'close') {
        this.presentConfirmModal(this.user.address);
        return;
      }
      this.saveAddress(res.data.shippingData);
    });
    return await modal.present();
  }

  saveAddress(data) {
    this.user.address = this.user.address || [];
    this.user.address.push(data);

    user.patch({
      address: this.user.address,
      _id: this.user._id,
    });

    this.presentConfirmModal(this.user.address);
  }

  async createOrder(shoppingData) {
    this.isLoading = true;
    this.order.user = this.user._id;
    this.order.address = this.user.address[shoppingData.addressIndex];
    this.order.payment_method = shoppingData.paymentMethod.replace(' ', '_').toLowerCase()
    
    await order.insert(this.order).then((_) => {
      this._commonService.presentToast(
        'Your order has been received successfully',
        2000
      );
      this._orderService.clearOrder();
      this.navigateToHome();
    })

    this.isLoading = false;
  }

  navigateToHome(){
    this._router.navigate(['/food-delivery/home'], {replaceUrl: true})
  }
}