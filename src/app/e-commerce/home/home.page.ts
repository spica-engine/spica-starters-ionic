import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Bucket from '../services/bucket';

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

  categories: Bucket.E_Com_Product_Category[] = [];
  campaignProducts: Bucket.E_Com_Campaign_Product[] = [];

  constructor(private router: Router) {
    Bucket.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {
    Bucket.e_com_product_category
      .getAll({ queryParams: { filter: { is_sub_category: false } } })
      .then((res) => {
        this.categories = res;
      });

    Bucket.e_com_campaing_product.getAll({queryParams: {sort: {_id: -1}}}).then((res) => {
      this.campaignProducts = res;
    });
  }

  navigateToProducts(id) {
    this.router.navigate(['/e-commerce/products/'], { queryParams:  { cat_id: id } });
  }
}
