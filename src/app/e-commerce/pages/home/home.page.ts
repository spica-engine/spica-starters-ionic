import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 4,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  categories: DataService.Category[] = [];
  campaignProducts: DataService.Campaign_Product[] = [];
  searchTerm: string;
  products: DataService.Product[] = [];

  constructor(private _router: Router, private _authService: AuthService) {
    this._authService.initBucket();
  }

  ngOnInit() {
    DataService.category
      .getAll({ queryParams: { filter: { is_sub_category: false } } })
      .then((res) => {
        this.categories = res;
      });

    DataService.campaign_product
      .getAll()
      .then((res) => {
        this.campaignProducts = res;
      });
  }

  navigateToProducts(id) {
    this._router.navigate(['/e-commerce/products/'], {
      queryParams: { cat_id: id },
    });
  }

  async searchProduct(terms) {
    this.products = await DataService.product.getAll({
      queryParams: {
        filter: {
          $or: [
            { title: { $regex: terms, $options: 'i' } },
            { sub_title: { $regex: terms, $options: 'i' } },
          ],
          is_available: true,
        },
        limit: 7,
      },
    });
  }

  goToProduct(id){
    this._router.navigate([`/e-commerce/products/product-detail/${id}`], {
      queryParams: { cat_id: id },
    });
  }

  ionViewDidLeave(){
    this.searchTerm = "";
  }
}
