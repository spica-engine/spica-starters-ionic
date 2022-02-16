import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: DataService.Category[] = [];
  products: DataService.Product[] = [];
  searchTerm: string;


  constructor(private _router: Router, private _authService: AuthService) {
    this._authService.initBucket();
  }

  ngOnInit() {
    DataService.Category
      .getAll({ queryParams: { filter: { is_sub_category: false }, relation: true } })
      .then((res) => {
        this.categories = res;
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
