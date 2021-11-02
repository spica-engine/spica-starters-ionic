import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SpicaConfirmShoppingComponent } from 'src/app/components/spica-confirm-shopping/spica-confirm-shopping.component';
import { SpicaShippingAddressComponent } from 'src/app/components/spica-shipping-address/spica-shipping-address.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController
  ) {}

  basket: any = [];
  quantity = [...Array(10).keys()];
  totalPrice: number = 0;

  ngOnInit() {
    // this.presentConfirmShoppingModal(
    //   JSON.parse(localStorage.getItem('addresses'))
    // );
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe((param) => {
      if (param.type == 'confirm_basket') {
        this.presentConfirmShoppingModal(
          JSON.parse(localStorage.getItem('addresses'))
        );
        this.router.navigate([]);
      }
    });

    if (localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket'));
      this.calculateTotalPrice();
    }
  }


  removeFromBasket(id) {
    this.basket = this.basket.filter((el) => {
      return el._id !== id;
    });
    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  changeQuantity(quantity, id) {
    this.basket.map((el) => {
      if (el._id == id) {
        el['quantity'] = quantity;
      }
    });
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.basket.forEach((el) => {
      if (el.discounted_price) {
        this.totalPrice += el.discounted_price * el.quantity;
      } else {
        this.totalPrice += el.normal_price * el.quantity;
      }
    });
  }

  confirmBasket() {
    let spica_token = localStorage.getItem('spica_token');

    if (!spica_token) {
      this.router.navigate(['/e-commerce/tabs/profile'], {
        queryParams: { from_basket: true },
        queryParamsHandling: 'merge',
      });
    }
  }

  async presentShippingAddressModal() {
    const modal = await this.modalController.create({
      component: SpicaShippingAddressComponent,
      cssClass: 'my-custom-class',
    });

    modal.onWillDismiss().then((res) => {
      if (res.data.value == 'close') {
        return;
      }
      this.saveAddress(res.data.shippingData);
    });
    return await modal.present();
  }

  async presentConfirmShoppingModal(addresses) {
    const modal = await this.modalController.create({
      component: SpicaConfirmShoppingComponent,
      componentProps: {
        addresses: addresses,
      },
      cssClass: 'my-custom-class',
    });

    modal.onWillDismiss().then((res) => {
      if (res.data.value == 'close') {
        return;
      } else if (res.data.value == 'add_new_address') {
        this.presentShippingAddressModal();
      }
    });
    return await modal.present();
  }

  saveAddress(data) {
    let addresses = [];
    let addressesData = localStorage.getItem('addresses');
    if (addressesData) {
      addresses = JSON.parse(addressesData);
    }

    addresses.push(data);

    localStorage.setItem('addresses', JSON.stringify(addresses));

    this.presentConfirmShoppingModal(addresses);
  }
}
