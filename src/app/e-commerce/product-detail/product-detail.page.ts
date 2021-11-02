import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import * as Bucket from '../services/bucket';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  recommendedslideOpts = {
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  allDetail: boolean = false;

  recommendedProducts = [
    {
      _id: '1',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '2',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '3',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '4',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '5',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
    {
      _id: '6',
      title: 'Title',
      sub_title: 'Sub Title',
      discounted_price: 290,
      normal_price: 320,
      is_free_delivery: true,
      cover_image:
        'https://m.media-amazon.com/images/I/71kyWvvGwiL._UL1500_.jpg',
    },
  ];

  productId: string;
  product: Bucket.E_Com_Product;

  basketItemCount: number = 0;
  selectedAttribute = { Size: '39', Color: 'red' };

  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {
    Bucket.initialize({ apikey: '5ks9718kiybw51i' });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params.productId;

    // this.basketItemCount = JSON.parse(localStorage.getItem('basket'))?.length;
    this.basketItemCount = this.storageService.getLocalStorageParsedData('basket').length

    Bucket.e_com_product
      .get(this.productId, { queryParams: { relation: true } })
      .then((res) => {
        this.product = res;
        if (!this.product.gallery) {
          this.product.gallery = [];
        }
        this.product.gallery.unshift(this.product.cover_image);
      })
      .catch((err) => console.log(err));
  }

  likeChanged(value, id) {
    // if (this.product._id == id) {
    //   this.product.is_liked = !this.product.is_liked;
    // }
  }

  addToBasket(id) {
    // if(this.product.attribute.length != Object.keys(this.selectedAttribute).length){
    // !TODO
    // }
    this.commonService.presentToast('Product added to basket', 800);

    let basketArr = this.storageService.getLocalStorageParsedData('basket');
    
    // let basketData = localStorage.getItem('basket');

    // if (basketData) {
    //   basketArr = JSON.parse(basketData);
    // }

    this.product['selected_attribute'] = this.selectedAttribute;
    this.product['quantity'] = 1;

    let exists = false;
    basketArr.forEach((el) => {
      if (el._id == this.product._id) {
        el['quantity'] += 1;
        exists = true;
      }
    });

    if (!exists) {
      basketArr.push(this.product);
    }

    this.storageService.setLocalStorageStringifyData('basket', basketArr);

    // localStorage.setItem('basket', JSON.stringify(basketArr));

    this.basketItemCount = basketArr.length;
  }
}
