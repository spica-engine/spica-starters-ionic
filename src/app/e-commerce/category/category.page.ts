import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Bucket from '../services/bucket';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: Bucket.E_Com_Product_Category[] = [];
  constructor(private router: Router) {
    Bucket.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {
    Bucket.e_com_product_category
      .getAll({ queryParams: { filter: { is_sub_category: false } } })
      .then((res) => {
        this.categories = res;
      });
  }

  navigateToProducts(id) {
    this.router.navigate(['/e-commerce/products/'], { queryParams:  { cat_id: id } });
  }
}
