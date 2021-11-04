import { Injectable } from '@angular/core';
import * as dataService from '../services/bucket';
import { environment } from '../services/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private authService: AuthService) {
    dataService.initialize({ apikey: environment.apikey });

    if (this.authService.isUserLoggedIn()) {
      this.authService
        .getUser()
        .toPromise()
        .then((res) => {
          this.activeUser = res;
        });
    }
  }
  activeUser: dataService.E_Com_User;

  getLocalStorageParsedData(key) {
    let data = localStorage.getItem(key);
    let parsedData = [];

    if (data) {
      parsedData = JSON.parse(data);
    }

    return parsedData;
  }

  setLocalStorageStringifyData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }


  private async insertAddressToLocalStorage() {
    let dataArr = [];
    const addressData = this.getLocalStorageParsedData('addresses');

    const spicaAddressData = this.activeUser.address;

    if (spicaAddressData.length) {
      dataArr = addressData.concat(spicaAddressData);
    } else {
      dataArr = addressData;
    }

    this.setLocalStorageStringifyData('addresses', dataArr);
  }

  async insertAddressToSpica() {
    if (!this.authService.isUserLoggedIn()) {
      return;
    }

    const addressData = this.getLocalStorageParsedData('addresses');

    dataService.e_com_user.patch({
      address: addressData,
      _id: this.activeUser._id,
    });
  }












  async insertBasketToSpica(spicaBasketData) {
    if (!this.authService.isUserLoggedIn()) {
      return;
    }
    const metadata = [];

    for (let data of spicaBasketData) {
      let obj = {
        product_id: data._id,
        quantity: data.quantity,
        selected_attribute: JSON.stringify(data.selected_attribute),
      };

      metadata.push(obj);
    }

    let data = {
      product: spicaBasketData,
      user: this.activeUser._id,
      metadata: metadata,
      title: 'Basket',
    };

    if (spicaBasketData[0]?._id) {
      dataService.e_com_basket.patch({
        product: data.product,
        _id: spicaBasketData[0]._id,
      });
    } else {
      dataService.e_com_basket.insert(data);
    }
  }
}
