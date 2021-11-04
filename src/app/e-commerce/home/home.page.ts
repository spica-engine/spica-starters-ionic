import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as dataService from '../services/bucket';

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

  categories: dataService.E_Com_Product_Category[] = [];
  campaignProducts: dataService.E_Com_Campaign_Product[] = [];

  constructor(private router: Router, private authService: AuthService) {
    dataService.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {
    dataService.e_com_product_category
      .getAll({ queryParams: { filter: { is_sub_category: false } } })
      .then((res) => {
        this.categories = res;
      });

    dataService.e_com_campaing_product
      .getAll({ queryParams: { sort: { _id: -1 } } })
      .then((res) => {
        this.campaignProducts = res;
      });
  }

  navigateToProducts(id) {
    this.router.navigate(['/e-commerce/products/'], {
      queryParams: { cat_id: id },
    });
  }
}
