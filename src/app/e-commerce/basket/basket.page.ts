import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SpicaConfirmShoppingComponent } from 'src/app/components/spica-confirm-shopping/spica-confirm-shopping.component';
import { SpicaShippingAddressComponent } from 'src/app/components/spica-shipping-address/spica-shipping-address.component';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import * as dataService from '../services/bucket';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private storageService: StorageService,
    private authServices: AuthService,
    private commonService: CommonService,
    private authService: AuthService
  ) {
    dataService.initialize({ apikey: '5ks9718kiybw51i' });
  }

  quantity = [...Array(10).keys()];
  totalPrice: number = 0;
  paymentMethods: dataService.E_Com_Payment_Method[] = [];
  isLoading: boolean = false;

  user: dataService.E_Com_User;
  basket: any = [];

  async ngOnInit() {
    this.paymentMethods = await dataService.e_com_payment_method.getAll();

    this.user = await this.getActiveUser();
    this.basket = await this.getBasketData();
    this.calculateTotalPrice();
  }

  async ionViewWillEnter() {
    // this.route.queryParams.subscribe((param) => {
    //   if (param.type == 'confirm_basket') {
    //     this.presentConfirmShoppingModal(
    //       JSON.parse(localStorage.getItem('addresses')) || []
    //     );
    //     this.router.navigate([]);
    //   }
    // });
    // if (localStorage.getItem('basket')) {
    //   this.basket = JSON.parse(localStorage.getItem('basket'));
    //   this.calculateTotalPrice();
    // }
    // if (!this.user) {
    //   this.user = await this.getActiveUser()
    //   if(!this.user){
    //     this.router.navigate(['e-commerce/tabs/profile'])
    //   }
    // } else {
    // this.basket = await this.getBasketData();
    // }
  }

  async getActiveUser() {
    return this.authService.getUser().toPromise();
  }

  async getBasketData() {
    const data = await dataService.e_com_basket.getAll({
      queryParams: {
        filter: { user: this.user._id, is_completed: false },
        relation: true,
      },
    });

    for (let product of data[0].product) {
      let metadata = data[0].metadata.find((el) => {
        return el.product_id == product['_id'];
      });

      product['quantity'] = metadata.quantity;
      product['selected_attribute'] = JSON.parse(metadata.selected_attribute);
    }

    return data[0];
  }

  removeFromBasket(id) {
    this.basket.product = this.basket.product.filter((el) => {
      return el._id !== id;
    });

    this.basket.metadata = this.basket.metadata.filter((el) => {
      return el.product_id != id;
    });

    this.patchBasketData();
  }

  changeQuantity(quantity, id) {
    this.basket.product.map((el) => {
      if (el._id == id) {
        el['quantity'] = quantity;
      }
    });

    this.basket.metadata = this.prepareMetadata(this.basket.product);

    this.patchBasketData();
    this.calculateTotalPrice();
  }

  patchBasketData() {
    dataService.e_com_basket.patch({
      product: this.basket.product,
      metadata: this.basket.metadata,
      _id: this.basket._id,
    });
  }

  prepareMetadata(basketData) {
    const metadata = [];
    for (let data of basketData) {
      let obj = {
        product_id: data._id,
        quantity: data.quantity,
        selected_attribute: JSON.stringify(data.selected_attribute),
      };

      metadata.push(obj);
    }
    return metadata;
  }

  calculateTotalPrice() {
    this.totalPrice = 0;
    this.basket.product.forEach((el) => {
      if (el.discounted_price) {
        this.totalPrice += el.discounted_price * el.quantity;
      } else {
        this.totalPrice += el.normal_price * el.quantity;
      }
    });
  }

  async confirmBasket() {
    let spica_token = this.authServices.getActiveToken();

    if (!spica_token) {
      this.router.navigate(['/e-commerce/tabs/profile'], {
        queryParams: { from_basket: true },
        queryParamsHandling: 'merge',
      });
    } else {
      this.presentConfirmShoppingModal(this.user.address || []);
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
        totalPrice: this.totalPrice,
        currency: 'USD',
        paymentMethods: this.paymentMethods,
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

  saveAddress(data) {
    this.user.address.push(data);

    dataService.e_com_user.patch({
      address: this.user.address,
      _id: this.user._id,
    });

    this.presentConfirmShoppingModal(this.user.address);
  }

  async createOrder(shoppingData) {
    this.isLoading = true;
    let selectedPaymentMethod = this.paymentMethods.find((el) => {
      return el.title == shoppingData.paymentMethod;
    });

    const address = this.user.address[shoppingData.addressIndex];

    let invoiceData = {
      name: this.user.name,
      surname: this.user.surname,
      address: { ...address },
      phone: address.phone,
      email: this.user.email,
      payment_method: selectedPaymentMethod._id,
      basket: this.basket._id,
    };

    const invoice = await dataService.e_com_invoice.insert(invoiceData);

    let orderData = {
      title: 'Order',
      basket: this.basket._id,
      invoice: invoice._id,
    };

    await dataService.e_com_order.insert(orderData).then((_) => {
      this.commonService.presentToast(
        'Your order has been received successfully',
        2000
      );
      this.router.navigate(['e-commerce/tabs/profile']);
    });
    this.isLoading = false;
  }
}
