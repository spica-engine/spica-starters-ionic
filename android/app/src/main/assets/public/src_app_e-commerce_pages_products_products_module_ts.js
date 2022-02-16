(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_pages_products_products_module_ts"],{

/***/ 60190:
/*!**********************************************************************!*\
  !*** ./src/app/e-commerce/pages/products/products-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 66652);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage,
            },
            {
                path: ':promotionId',
                component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage,
            },
            {
                path: 'product-detail',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_e-commerce_pages_product-detail_product-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../product-detail/product-detail.module */ 80866)).then(m => m.ProductDetailPageModule)
            },
        ],
    },
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 60614:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/products/products.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 60190);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 66652);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 66652:
/*!************************************************************!*\
  !*** ./src/app/e-commerce/pages/products/products.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products.page.html */ 86836);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 58970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 46225);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_spica_sort_modal_spica_sort_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/spica-sort-modal/spica-sort-modal.component */ 84704);
/* harmony import */ var src_app_components_spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/spica-filter-modal/spica-filter-modal.component */ 63526);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ 9838);










let ProductsPage = class ProductsPage {
    constructor(_route, _modalController, _authService, _router) {
        this._route = _route;
        this._modalController = _modalController;
        this._authService = _authService;
        this._router = _router;
        this.products = [];
        this.filter = { is_available: true };
        this.sort = {};
        this.likedProducts = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.promotionId = this._route.snapshot.params.promotionId;
            this._route.queryParams.subscribe((res) => {
                if (res.cat_id) {
                    this.filter['categories'] = res.cat_id;
                }
            });
            this.user = yield this.getActiveUser();
            if (this.user) {
                yield this.getLikedData();
            }
            this.getData();
        });
    }
    getData() {
        if (this.promotionId) {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.campaign_product.get(this.promotionId, {
                queryParams: { relation: true, sort: Object.assign({}, this.sort) },
            })
                .then((res) => {
                this.products = res.products;
            });
        }
        else {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.product.getAll({
                queryParams: { filter: Object.assign({}, this.filter), sort: Object.assign({}, this.sort) },
            })
                .then((res) => {
                this.products = res;
                if (this.likedProducts.length) {
                    this.likedProducts.forEach((id) => {
                        this.products.map((el) => {
                            if (el._id == id) {
                                return (el['is_liked'] = true);
                            }
                        });
                    });
                }
            });
        }
    }
    getActiveUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return this._authService.getUser().toPromise();
        });
    }
    getLikedData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.liked_product.getAll({
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
    ionViewWillLeave() {
        this.promotionId = undefined;
    }
    presentSortModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const sortModal = yield this._modalController.create({
                component: _components_spica_sort_modal_spica_sort_modal_component__WEBPACK_IMPORTED_MODULE_3__.SpicaSortModalComponent,
                cssClass: 'spica-sort-modal-style',
                swipeToClose: true,
                componentProps: {
                    items: [
                        { title: 'Highest Price', key: 'highest_price' },
                        { title: 'Lowest Price', key: 'lower_price' },
                        { title: 'Latest Products', key: 'latest_products' },
                        { title: 'Oldest Products', key: 'oldest_products' },
                    ],
                },
            });
            sortModal.onWillDismiss().then((res) => {
                if (!res.data) {
                    return;
                }
                if (res.data.sort_key == 'highest_price') {
                    this.sort = { normal_price: -1 };
                }
                else if (res.data.sort_key == 'lower_price') {
                    this.sort = { normal_price: 1 };
                }
                else if (res.data.sort_key == 'latest_products') {
                    this.sort = { created_at: -1 };
                }
                else if (res.data.sort_key == 'oldest_products') {
                    this.sort = { created_at: 1 };
                }
                else {
                    this.sort = {};
                }
                this.getData();
            });
            return yield sortModal.present();
        });
    }
    presentFilterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const attributes = yield this.getAttributes();
            const filterModal = yield this._modalController.create({
                component: src_app_components_spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_4__.SpicaFilterModalComponent,
                cssClass: 'spica-filter-modal-style',
                swipeToClose: true,
                componentProps: {
                    attributes: attributes,
                    price_range: { lower: 10, upper: 100 },
                    currency: 'USD',
                },
            });
            filterModal.onWillDismiss().then((res) => {
                var _a;
                if (!res.data) {
                    return;
                }
                if ((_a = res.data.filter) === null || _a === void 0 ? void 0 : _a.length) {
                    res.data.filter.forEach((el) => {
                        if (el.name == 'price_range') {
                            console.log(el);
                            this.filter['discounted_price'] = {
                                $gte: el.value.lower,
                                $lte: el.value.upper,
                            };
                        }
                        else {
                            this.filter[el.name] = { $in: el.value };
                        }
                    });
                }
                if (res.data.action == 'clear_filter' && attributes.length) {
                    attributes.forEach((el) => {
                        delete this.filter[el.name];
                    });
                    delete this.filter['discounted_price'];
                }
                this.getData();
            });
            return yield filterModal.present();
        });
    }
    likeChanged(value, id) {
        if (!this._authService.getActiveToken()) {
            this._router.navigate(['e-commerce/tabs/profile']);
            return;
        }
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
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.liked_product.patch({
                products: this.likedProducts,
                _id: this.likedDataId,
            });
        }
        else {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.liked_product.insert({
                products: this.likedProducts,
                user: this.user._id,
            })
                .then((res) => {
                this.likedDataId = res._id;
            });
        }
    }
    getAttributes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.attribute.getAll();
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsPage);



/***/ }),

/***/ 58970:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/products/products.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar ion-row ion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-header ion-toolbar ion-row ion-col ion-icon {\n  font-size: 20px;\n}\n:host ion-header ion-toolbar ion-row ion-col ion-label {\n  margin-left: 10px;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n:host ion-content .products {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n:host ion-content .products spica-product-card {\n  margin: 5px;\n  min-width: calc(50% - 10px) !important;\n  max-width: calc(50% - 10px) !important;\n}\n:host ion-content .products spica-product-card ::ng-deep img {\n  max-height: 175px !important;\n  height: calc(100vw * 0.55) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSFY7QUFLVTtFQUNFLGVBQUE7QUFIWjtBQUtVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFIWjtBQVdJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVROO0FBV007RUFDRSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtBQVRSO0FBWVU7RUFDRSw0QkFBQTtFQUNBLHFDQUFBO0FBVloiLCJmaWxlIjoicHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAucHJvZHVjdHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICBzcGljYS1wcm9kdWN0LWNhcmQge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgbWluLXdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAxMHB4KSAhaW1wb3J0YW50O1xuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE3NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgKiAwLjU1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 86836:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/products/products.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>products</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" (click)=\"presentSortModal()\">\n        <ion-icon name=\"reorder-four-outline\"></ion-icon>\n        <ion-label>sort</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" (click)=\"presentFilterModal()\">\n        <ion-icon name=\"funnel-outline\"></ion-icon>\n        <ion-label>filter</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"products\">\n    <spica-product-card\n      *ngFor=\"let product of products\"\n      [data]=\"product\"\n      (likeChanged)=\"likeChanged($event, product._id )\"\n    ></spica-product-card>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_pages_products_products_module_ts.js.map