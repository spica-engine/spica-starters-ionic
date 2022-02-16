(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_e-commerce_pages_product-detail_product-detail_module_ts"],{

/***/ 25616:
/*!**********************************************************************************!*\
  !*** ./src/app/e-commerce/pages/product-detail/product-detail-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageRoutingModule": () => (/* binding */ ProductDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 22107);




const routes = [
    {
        path: '',
        children: [
            {
                path: ":productId",
                component: _product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage,
            },
        ]
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ 80866:
/*!**************************************************************************!*\
  !*** ./src/app/e-commerce/pages/product-detail/product-detail.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageModule": () => (/* binding */ ProductDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail-routing.module */ 25616);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page */ 22107);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailPage]
    })
], ProductDetailPageModule);



/***/ }),

/***/ 22107:
/*!************************************************************************!*\
  !*** ./src/app/e-commerce/pages/product-detail/product-detail.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPage": () => (/* binding */ ProductDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-detail.page.html */ 23248);
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss */ 65796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 9838);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 46225);








let ProductDetailPage = class ProductDetailPage {
    constructor(_commonService, _route, _authService, _router) {
        this._commonService = _commonService;
        this._route = _route;
        this._authService = _authService;
        this._router = _router;
        this.slideOpts = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this.recommendedslideOpts = {
            slidesPerView: 2,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this.allDetail = false;
        this.recommendedProducts = [];
        this.likedProducts = [];
        this.basketItemCount = 0;
        this.selectedAttribute = {};
        this.disableAddToBasket = true;
        this.isLiked = false;
        this._authService.initBucket();
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.productId = this._route.snapshot.params.productId;
            this.basketItemCount = (_a = this.basket) === null || _a === void 0 ? void 0 : _a.products.length;
            this.user = yield this.getActiveUser();
            if (this.user) {
                {
                    let baskets = yield this.getBasketData();
                    this.basket = baskets[0];
                }
                yield this.getLikedData();
            }
            _services_bucket__WEBPACK_IMPORTED_MODULE_4__.product.get(this.productId, { queryParams: { relation: true } })
                .then((res) => {
                this.product = res;
                if (!this.product.gallery) {
                    this.product.gallery = [];
                }
                this.product.gallery.unshift(this.product.cover_image);
                let isLiked = this.likedProducts.find((el) => {
                    return el == this.product._id;
                });
                if (isLiked) {
                    this.isLiked = true;
                }
                if (!this.product.attributes || !this.product.attributes.length) {
                    this.disableAddToBasket = false;
                }
            })
                .catch((err) => console.log(err));
            this.getRecommendedProducts();
        });
    }
    getActiveUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return this._authService.getUser().toPromise();
        });
    }
    getBasketData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.basket.getAll({
                queryParams: {
                    filter: { user: this.user._id, is_completed: false },
                    relation: true,
                },
            });
        });
    }
    getRecommendedProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.product.getAll({
                queryParams: {
                    limit: 10,
                    relation: true,
                    filter: { is_available: true },
                },
            })
                .then((res) => {
                this.recommendedProducts = res;
                if (this.likedProducts.length) {
                    this.likedProducts.forEach((id) => {
                        this.recommendedProducts.map((el) => {
                            if (el._id == id) {
                                return (el['is_liked'] = true);
                            }
                        });
                    });
                }
            });
        });
    }
    getLikedData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.liked_product.getAll({
                queryParams: { filter: { user: this.user._id }, relation: true },
            })
                .then((res) => {
                if (res.length) {
                    this.likedDataId = res[0]._id;
                    if (res[0].products.length) {
                        this.likedProducts = res[0].products.map((el) => {
                            return el['_id'];
                        });
                    }
                }
            });
        });
    }
    seletAttribute(key, value) {
        this.selectedAttribute[key] = value;
        if (Object.keys(this.selectedAttribute).length ==
            this.product.attributes.length) {
            this.disableAddToBasket = false;
        }
    }
    likeChanged(value, id) {
        if (!this._authService.getActiveToken()) {
            this._router.navigate(['e-commerce/tabs/profile']);
            return;
        }
        this.isLiked = !this.isLiked;
        if (value) {
            this.likedProducts.push(id);
        }
        else {
            this.likedProducts.forEach((el) => {
                if (el == id) {
                    this.likedProducts = this.likedProducts.filter((product) => {
                        return product !== id;
                    });
                }
            });
        }
        if (this.likedDataId) {
            _services_bucket__WEBPACK_IMPORTED_MODULE_4__.liked_product.patch({
                products: this.likedProducts,
                _id: this.likedDataId,
            });
        }
        else {
            _services_bucket__WEBPACK_IMPORTED_MODULE_4__.liked_product.insert({
                products: this.likedProducts,
                user: this.user._id,
            })
                .then((res) => {
                this.likedDataId = res._id;
            });
        }
    }
    addToBasket() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.user) {
                this._router.navigate(['e-commerce/tabs/profile'], { replaceUrl: true });
                return;
            }
            this._commonService.presentToast('Product added to basket', 800);
            this.product['selected_attribute'] = this.selectedAttribute;
            this.product['quantity'] = 1;
            if (this.basket) {
                let index = this.basket.products.findIndex((item) => item._id == this.product._id);
                if (index >= 0) {
                    {
                        let metaQuantity = this.basket.metadata.filter((item) => item.product_id == this.product._id)[0].quantity;
                        this.basket.products[index]['quantity'] = metaQuantity + 1;
                    }
                }
                else {
                    this.basket.products.push(Object.assign(Object.assign({}, this.product), { quantity: 1, selected_attribute: JSON.stringify(this.product.selected_attribute) }));
                }
                this.basket.metadata = this.prepareMetadata(this.basket.products);
                _services_bucket__WEBPACK_IMPORTED_MODULE_4__.basket.patch({
                    products: this.basket.products,
                    metadata: this.basket.metadata,
                    _id: this.basket._id,
                });
            }
            else {
                let data = {
                    products: [this.product],
                    user: this.user._id,
                    title: 'Basket',
                };
                data['metadata'] = this.prepareMetadata(data.products);
                yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.basket.insert(data).then((res) => {
                    this.basket = res;
                });
            }
            this.basketItemCount = ((_a = this.basket.products) === null || _a === void 0 ? void 0 : _a.length) && 0;
        });
    }
    prepareMetadata(basketData) {
        const metadata = [];
        for (let data of basketData) {
            let obj = {
                product_id: data._id,
                quantity: data.quantity || 1,
                selected_attribute: JSON.stringify(data.selected_attribute),
            };
            metadata.push(obj);
        }
        return metadata;
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailPage);



/***/ }),

/***/ 65796:
/*!**************************************************************************!*\
  !*** ./src/app/e-commerce/pages/product-detail/product-detail.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-header ion-toolbar .basket-container {\n  position: relative;\n  width: 35px;\n}\n:host ion-header ion-toolbar .basket-container ion-icon {\n  font-size: 28px;\n}\n:host ion-header ion-toolbar .basket-container .badge {\n  position: absolute;\n  top: 0;\n  left: 1px;\n  font-size: 10px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 100%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: red;\n  color: white;\n}\n:host ion-content ion-item {\n  --padding-start: 0;\n}\n:host ion-content .gallery-slide {\n  height: 100vw;\n  max-height: 350px;\n}\n:host ion-content .title-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  padding: 0 10px;\n}\n:host ion-content .title-container :first-child {\n  font-size: 18px;\n  font-weight: 500;\n}\n:host ion-content .title-container :last-child {\n  font-size: 14px;\n  color: gray;\n}\n:host ion-content .attributes {\n  padding: 10px;\n}\n:host ion-content .divider {\n  width: 100%;\n  height: 8px;\n  background: #d6d6d6;\n}\n:host ion-content .details-container {\n  padding: 10px;\n}\n:host ion-content .details-container .description {\n  height: -moz-fit-content;\n  height: fit-content;\n  max-height: 100px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n:host ion-content .details-container .description.all-detail {\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n:host ion-content .details-container ion-button {\n  margin-top: 10px;\n  height: 30px;\n  --border-radius: 5px;\n  --background: rgb(206, 206, 206);\n}\n:host ion-content .container-title {\n  font-size: 18px;\n}\n:host ion-content .recommended-container {\n  padding: 10px;\n  margin-bottom: 10px;\n}\n:host ion-content .recommended-container ion-slide {\n  min-width: calc(50% - 10px) !important;\n  max-width: calc(50% - 10px) !important;\n  margin: 10px;\n}\n:host ion-content .recommended-container spica-product-card {\n  margin: 5px;\n  max-width: 100% !important;\n}\n:host ion-content .recommended-container spica-product-card ::ng-deep img {\n  max-height: 175px !important;\n  height: calc(100vw * 0.55) !important;\n}\n:host ion-footer {\n  height: 60px;\n}\n:host ion-footer ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-footer ion-toolbar .price {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n:host ion-footer ion-toolbar .price .discounted-price {\n  font-size: 16px;\n  font-weight: 700;\n  color: green;\n}\n:host ion-footer ion-toolbar .price .normal-price {\n  margin-left: 10px;\n  font-size: 12px;\n  text-decoration: line-through;\n  color: gray;\n}\n:host ion-footer ion-toolbar ion-button {\n  --border-radius: 5px;\n  --background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7QUFETjtBQUdNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRFI7QUFFUTtFQUNFLGVBQUE7QUFBVjtBQUVRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBVjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQU9JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBTE47QUFPSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTE47QUFPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUxSO0FBT007RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUxSO0FBU0k7RUFDRSxhQUFBO0FBUE47QUFVSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFSTjtBQVdJO0VBQ0UsYUFBQTtBQVROO0FBV007RUFDRSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVFI7QUFXUTtFQUNFLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBVFY7QUFZTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFWUjtBQWNJO0VBQ0UsZUFBQTtBQVpOO0FBZUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0Usc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUFiUjtBQWdCTTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQWRSO0FBaUJVO0VBQ0UsNEJBQUE7RUFDQSxxQ0FBQTtBQWZaO0FBc0JFO0VBQ0UsWUFBQTtBQXBCSjtBQXFCSTtFQUNFLGVBQUE7QUFuQk47QUFxQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQW5CUjtBQXFCUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFuQlY7QUFxQlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFuQlY7QUF1Qk07RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBckJSIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuXG4gICAgICAuYmFza2V0LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICB9XG4gICAgLmdhbGxlcnktc2xpZGUge1xuICAgICAgaGVpZ2h0OiAxMDB2dztcbiAgICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgIH1cbiAgICAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgIDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYXR0cmlidXRlcyB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE0LCAyMTQsIDIxNCk7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICYuYWxsLWRldGFpbCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDIwNiwgMjA2LCAyMDYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb250YWluZXItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5yZWNvbW1lbmRlZC1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYyg1MCUgLSAxMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTBweCkgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBzcGljYS1wcm9kdWN0LWNhcmQge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTc1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2dyAqIDAuNTUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWZvb3RlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgLnByaWNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLmRpc2NvdW50ZWQtcHJpY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICAubm9ybWFsLXByaWNlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 23248:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/product-detail/product-detail.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <div class=\"basket-container\" slot=\"end\" [routerLink]=\"['/e-commerce/tabs/basket']\">\n      <ion-icon name=\"basket-outline\"></ion-icon>\n      <div class=\"badge\" *ngIf=\"basketItemCount\">{{basketItemCount}}</div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <ng-container *ngIf=\"this.product\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"gallery-slide\">\n      <ion-slide *ngFor=\"let image of product.gallery\">\n        <img [src]=\"image\" />\n      </ion-slide>\n    </ion-slides>\n\n    <ion-item lines=\"none\">\n      <div class=\"title-container\">\n        <ion-label>{{product.title}}</ion-label>\n        <ion-label>{{product.sub_title}}</ion-label>\n      </div>\n      <ion-icon [name]=\"isLiked ? 'heart' : 'heart-outline'\" slot=\"end\" (click)=\"likeChanged(!isLiked, product._id)\"></ion-icon>\n    </ion-item>\n\n    <ion-list class=\"attributes\">\n      <ion-item lines=\"none\" *ngFor=\"let attribute of product.attributes\">\n        <ion-label>Select {{attribute['name']}}</ion-label>\n        <ion-select interface=\"popover\" (ionChange)=\"seletAttribute(attribute['name'], $event.target['value'])\">\n          <ion-select-option *ngFor=\"let value of attribute['value']\" [value]=\"value\">{{value}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n\n    <div class=\"divider\"></div>\n\n    <div class=\"details-container\">\n      <ion-label class=\"container-title\">Product Details</ion-label>\n      <div #getHeight [innerHTML]=\"product.description\" class=\"description\" [class.all-detail]=\"allDetail\"></div>\n      <ion-button *ngIf=\"getHeight.offsetHeight>99\" slot=\"end\" (click)=\"allDetail = !allDetail\">{{allDetail ? 'Less' : 'More'}}</ion-button>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <div class=\"recommended-container\">\n      <ion-label class=\"container-title\">Recommended Products</ion-label>\n      <ion-slides [options]=\"recommendedslideOpts\">\n        <ion-slide *ngFor=\"let product of recommendedProducts\">\n          <spica-product-card [data]=\"product\" (likeChanged)=\"likeChanged($event, product._id)\"></spica-product-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ng-container>\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar *ngIf=\"this.product\">\n      <div class=\"price\">\n        <ion-label class=\"normal-price\">{{product.normal_price}} USD</ion-label>\n        <ion-label class=\"discounted-price\">{{product.discounted_price}} USD</ion-label>\n      </div>\n      <ion-button slot=\"end\" (click)=\"addToBasket()\" [disabled]=\"disableAddToBasket\">Add To Basket</ion-button>\n    </ion-toolbar>\n  </ion-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_e-commerce_pages_product-detail_product-detail_module_ts.js.map