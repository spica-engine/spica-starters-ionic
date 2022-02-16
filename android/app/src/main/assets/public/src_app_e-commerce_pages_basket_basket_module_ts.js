(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_pages_basket_basket_module_ts"],{

/***/ 49989:
/*!******************************************************************!*\
  !*** ./src/app/e-commerce/pages/basket/basket-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPageRoutingModule": () => (/* binding */ BasketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.page */ 32303);




const routes = [
    {
        path: '',
        component: _basket_page__WEBPACK_IMPORTED_MODULE_0__.BasketPage
    }
];
let BasketPageRoutingModule = class BasketPageRoutingModule {
};
BasketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BasketPageRoutingModule);



/***/ }),

/***/ 33362:
/*!**********************************************************!*\
  !*** ./src/app/e-commerce/pages/basket/basket.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPageModule": () => (/* binding */ BasketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-routing.module */ 49989);
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.page */ 32303);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let BasketPageModule = class BasketPageModule {
};
BasketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _basket_routing_module__WEBPACK_IMPORTED_MODULE_0__.BasketPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_basket_page__WEBPACK_IMPORTED_MODULE_1__.BasketPage]
    })
], BasketPageModule);



/***/ }),

/***/ 32303:
/*!********************************************************!*\
  !*** ./src/app/e-commerce/pages/basket/basket.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPage": () => (/* binding */ BasketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_basket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./basket.page.html */ 33574);
/* harmony import */ var _basket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.page.scss */ 71114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_components_spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/spica-confirm-shopping/spica-confirm-shopping.component */ 1261);
/* harmony import */ var src_app_components_spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/spica-shipping-address/spica-shipping-address.component */ 14067);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 46225);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_spica_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/spica-function.service */ 34286);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ 9838);
/* harmony import */ var src_app_components_spica_stripe_payment_spica_stripe_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/spica-stripe-payment/spica-stripe-payment.component */ 3702);













let BasketPage = class BasketPage {
    constructor(_router, _modalController, _commonService, _authService, _spicaFunctionService) {
        this._router = _router;
        this._modalController = _modalController;
        this._commonService = _commonService;
        this._authService = _authService;
        this._spicaFunctionService = _spicaFunctionService;
        this.quantity = [...Array(10).keys()];
        this.totalPrice = 0;
        this.paymentMethods = [];
        this.isLoading = false;
        this.basket = [];
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.presentStripePaymentModal();
            this.isLoading = true;
            this.paymentMethods = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.payment_method.getAll();
            this.user = yield this.getActiveUser();
            if (this.user) {
                this.basket = yield this.getBasketData();
            }
            if ((_b = (_a = this.basket) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.length) {
                this.calculateTotalPrice();
            }
            this.isLoading = false;
        });
    }
    getActiveUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return this._authService.getUser().toPromise();
        });
    }
    getBasketData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.basket.getAll({
                queryParams: {
                    filter: { user: this.user._id, is_completed: false },
                    relation: true,
                },
            });
            if (data[0]) {
                for (let product of data[0].products) {
                    let metadata = data[0].metadata.find((el) => {
                        return el.product_id == product['_id'];
                    });
                    product['quantity'] = metadata.quantity;
                    product['selected_attribute'] = JSON.parse(metadata.selected_attribute || '{}');
                }
            }
            return data[0];
        });
    }
    removeFromBasket(id) {
        this.basket.products = this.basket.products.filter((el) => {
            return el._id !== id;
        });
        this.basket.metadata = this.basket.metadata.filter((el) => {
            return el.product_id != id;
        });
        this.patchBasketData();
    }
    changeQuantity(quantity, id) {
        this.basket.products.map((el) => {
            if (el._id == id) {
                el['quantity'] = quantity;
            }
        });
        this.basket.metadata = this.prepareMetadata(this.basket.products);
        this.patchBasketData();
        this.calculateTotalPrice();
    }
    patchBasketData() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_4__.basket.patch({
            products: this.basket.products,
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
        this.basket.products.forEach((el) => {
            if (el.discounted_price) {
                this.totalPrice += el.discounted_price * el.quantity;
            }
            else {
                this.totalPrice += el.normal_price * el.quantity;
            }
        });
    }
    validateCoupone() {
        this._spicaFunctionService
            .validateCoupone(this.couponCode, this.user._id)
            .then((res) => {
            this._commonService.presentToast(res['message'], 1500);
        });
    }
    confirmBasket() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let spica_token = this._authService.getActiveToken();
            if (!spica_token) {
                this._router.navigate(['/e-commerce/tabs/profile']);
            }
            else {
                this.presentConfirmShoppingModal(this.user.address || []);
            }
        });
    }
    presentShippingAddressModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_3__.SpicaShippingAddressComponent,
                cssClass: 'my-custom-class',
            });
            modal.onWillDismiss().then((res) => {
                if (res.data.value == 'close') {
                    return;
                }
                this.saveAddress(res.data.shippingData);
            });
            return yield modal.present();
        });
    }
    presentConfirmShoppingModal(addresses) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_2__.SpicaConfirmShoppingComponent,
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
                }
                else if (res.data.value == 'add_new_address') {
                    this.presentShippingAddressModal();
                }
                else if (res.data.value == 'pay') {
                    if (res.data.shoppingData.paymentMethod == 'Payment By Card') {
                        this.presentStripePaymentModal();
                    }
                    else {
                        this.createOrder(res.data.shoppingData);
                    }
                }
            });
            return yield modal.present();
        });
    }
    saveAddress(data) {
        this.user.address = this.user.address || [];
        this.user.address.push(data);
        _services_bucket__WEBPACK_IMPORTED_MODULE_4__.user.patch({
            address: this.user.address,
            _id: this.user._id,
        });
        this.presentConfirmShoppingModal(this.user.address);
    }
    createOrder(shoppingData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let selectedPaymentMethod = this.paymentMethods.find((el) => {
                return el.title == shoppingData.paymentMethod;
            });
            const address = this.user.address[shoppingData.addressIndex];
            let invoiceData = {
                name: this.user.name,
                surname: this.user.surname,
                address: Object.assign({}, address),
                phone: address.phone,
                email: this.user.email,
                payment_method: selectedPaymentMethod._id,
                basket: this.basket._id,
            };
            const invoice = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.invoice.insert(invoiceData);
            let orderData = {
                title: 'Order',
                basket: this.basket._id,
                invoice: invoice._id,
            };
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.order.insert(orderData).then((_) => {
                this._commonService.presentToast('Your order has been received successfully', 2000);
                this._router.navigate(['e-commerce/tabs/profile']);
            });
            this.isLoading = false;
        });
    }
    presentStripePaymentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_stripe_payment_spica_stripe_payment_component__WEBPACK_IMPORTED_MODULE_8__.SpicaStripePaymentComponent,
                componentProps: {
                    totalPrice: this.totalPrice,
                    currency: 'USD',
                },
                cssClass: 'my-custom-class',
            });
            modal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (res.data.value == 'close') {
                    return;
                }
                else if (res.data.value == 'pay') {
                    const cardToken = yield this._spicaFunctionService.createCardToken(res.data.cardData);
                    let data = {
                        cardToken: cardToken,
                        currency: 'USD',
                        totalPrice: this.totalPrice,
                        email: this.user.email
                    };
                    yield this._spicaFunctionService.payByStripe(data);
                    this.createOrder(res.data.shoppingData);
                }
            }));
            return yield modal.present();
        });
    }
};
BasketPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: _services_spica_function_service__WEBPACK_IMPORTED_MODULE_6__.SpicaFuntionService }
];
BasketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-basket',
        template: _raw_loader_basket_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_basket_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BasketPage);



/***/ }),

/***/ 34286:
/*!***************************************************************!*\
  !*** ./src/app/e-commerce/services/spica-function.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaFuntionService": () => (/* binding */ SpicaFuntionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 98056);




let SpicaFuntionService = class SpicaFuntionService {
    constructor(http) {
        this.http = http;
    }
    setHeader() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            authorization: 'IDENTITY ' + localStorage.getItem('ecommerce_spica_token'),
        });
        return header;
    }
    validateCoupone(couponCode, userId) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fn-execute/validateCoupone`, { couponCode, userId }, {
            headers: this.setHeader(),
        })
            .toPromise();
    }
    payByStripe(data) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fn-execute/payByStripe`, { data }, {
            headers: this.setHeader(),
        })
            .toPromise();
    }
    createCardToken(card) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/fn-execute/createCardToken`, { card }, {
            headers: this.setHeader(),
        })
            .toPromise();
    }
};
SpicaFuntionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SpicaFuntionService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], SpicaFuntionService);



/***/ }),

/***/ 71114:
/*!**********************************************************!*\
  !*** ./src/app/e-commerce/pages/basket/basket.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .spinner-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content .empty-container {\n  margin: auto;\n  width: 85%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host ion-content .empty-container ion-label {\n  font-weight: 500;\n  font-size: 17px;\n  margin-top: 20px;\n}\n:host ion-content .empty-container p {\n  margin: 40px 0;\n  text-align: center;\n}\n:host ion-content .empty-container ion-button {\n  width: 150px;\n  --border-radius: 10px;\n}\n:host ion-content ion-list ion-item {\n  padding: 15px;\n}\n:host ion-content ion-list ion-item ion-avatar {\n  width: 65px;\n  height: 65px;\n  --border-radius: 5px;\n}\n:host ion-content ion-list ion-item ion-label .title-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host ion-content ion-list ion-item ion-label .title-container h2 {\n  width: calc(100% - 35px);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n:host ion-content ion-list ion-item ion-label .title-container ion-icon {\n  font-size: 22px;\n}\n:host ion-content ion-list ion-item ion-label .price-contaniner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n}\n:host ion-content ion-list ion-item ion-label .price-contaniner ion-select {\n  max-width: 100px;\n  height: 35px;\n  background: var(--ion-color-light-tint);\n  border: 1px solid var(--ion-color-medium-tint);\n  border-radius: 5px;\n  position: relative;\n}\n:host ion-content ion-list ion-item ion-label .price-contaniner .product-price .discounted-price {\n  font-size: 15px;\n  font-weight: 600;\n}\n:host ion-content ion-list ion-item ion-label .price-contaniner .product-price .normal-price {\n  margin-left: 10px;\n  font-size: 12px;\n  text-decoration: line-through;\n  color: var(--ion-color-medium-tint);\n}\n:host ion-content .divider {\n  width: 100%;\n  height: 8px;\n  background: #d6d6d6;\n}\n:host ion-content .coupon-container {\n  padding: 0 15px;\n  margin-bottom: 70px;\n}\n:host ion-content .coupon-container ion-item {\n  margin: 10px 0;\n}\n:host ion-content .coupon-container ion-item ion-label {\n  margin-left: 10px;\n}\n:host ion-content .coupon-container ion-item ion-input {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 50px;\n  border: 1px solid var(--ion-color-medium-tint);\n  border-radius: 5px;\n}\n:host ion-content .coupon-container ion-item ion-button {\n  height: 50px;\n  width: 100px;\n  --border-radius: 5px;\n  margin-left: 15px;\n  font-size: 16px;\n  font-weight: 500;\n}\n:host ion-content .total-container {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  padding: 5px 0;\n  border-top: 1px solid var(--ion-color-medium-tint);\n  background: white;\n  z-index: 1;\n}\n:host ion-content .total-container .total-price-container {\n  margin-left: 15px;\n  font-size: 14px;\n}\n:host ion-content .total-container .total-price-container .totla-price {\n  font-size: 16px;\n  font-weight: 700;\n  color: green;\n}\n:host ion-content .total-container ion-button {\n  height: 45px;\n  min-width: 150px;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  --border-radius: 5px;\n  margin-left: 15px;\n  font-size: 16px;\n  font-weight: 500;\n  --background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUROO0FBSU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1NO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBSlI7QUFTTTtFQUNFLGFBQUE7QUFQUjtBQVFRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5WO0FBU1U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFQWjtBQVNZO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFQZDtBQVNZO0VBQ0UsZUFBQTtBQVBkO0FBV1U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVFo7QUFXWTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVGQ7QUFhYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVhoQjtBQWFjO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQVhoQjtBQW1CSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFqQk47QUFvQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFtQk07RUFDRSxjQUFBO0FBakJSO0FBa0JRO0VBQ0UsaUJBQUE7QUFoQlY7QUFtQlE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7QUFqQlY7QUFtQlE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQlY7QUFzQkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0RBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFwQk47QUFzQk07RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFwQlI7QUFxQlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbkJWO0FBc0JNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXBCUiIsImZpbGUiOiJiYXNrZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmVtcHR5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICBcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA2NXB4OyAgICAgIFxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJpY2UtY29udGFuaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgICAuZGlzY291bnRlZC1wcmljZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5vcm1hbC1wcmljZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRpdmlkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMTQsIDIxNCwgMjE0KTtcbiAgICB9XG5cbiAgICAuY291cG9uLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudG90YWwtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgei1pbmRleDogMTtcblxuICAgICAgLnRvdGFsLXByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC50b3RsYS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 33574:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/basket/basket.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>basket</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"!basket?.products?.length && !isLoading\">\n    <div class=\"empty-container\">\n      <img\n        src=\"https://pngimg.com/uploads/shopping_bag/small/shopping_bag_PNG6371.png\"\n        alt=\"\"\n      />\n      <ion-label>Basket Is Empty</ion-label>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt\n      </p>\n      <ion-button [routerLink]=\"['/e-commerce']\">Start shopping</ion-button>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"basket?.products?.length && !isLoading\">\n    <ion-list>\n      <ion-item *ngFor=\"let product of basket.products\" lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"product.cover_image\">\n          </ion-avatar>\n          <ion-label>\n            <div class=\"title-container\">\n              <h2>{{product.title}}</h2>\n              <ion-icon name=\"close\" (click)=\"removeFromBasket(product._id)\"></ion-icon>\n            </div>\n            <p *ngFor=\"let attribute of product.selected_attribute | keyvalue\"> {{attribute.key}}: {{attribute.value }}</p>\n            <div class=\"price-contaniner\">\n              <ion-select interface=\"popover\" [value]=\"product['quantity'] || 1\" (ionChange)=\"changeQuantity($event.target['value'], product._id)\">\n                <ion-select-option *ngFor=\"let value of quantity\" [value]=\"value+1\">{{value+1}}</ion-select-option>\n              </ion-select>\n              <div class=\"product-price\">\n                <ion-label class=\"normal-price\">{{product.normal_price * product['quantity'] | number : '1.2-2'}} USD</ion-label>\n                <ion-label class=\"discounted-price\" *ngIf=\"product.discounted_price\">{{product.discounted_price * product['quantity'] | number : '1.2-2'}} USD</ion-label>\n              </div>\n            </div>\n          </ion-label>\n      </ion-item>\n    </ion-list>\n    <div class=\"divider\"></div>\n\n    <div class=\"coupon-container\">\n      <ion-item lines=\"none\">\n        <ion-icon name=\"pricetag-outline\"></ion-icon>\n        <ion-label>Use discount coupon</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input placeholder=\"Coupon Code\" [(ngModel)]=\"couponCode\"></ion-input>\n        <ion-button (click)=\"validateCoupone()\" [disabled]=\"!couponCode\">Validate</ion-button>\n      </ion-item>\n    </div>\n\n    <div class=\"divider\"></div>\n\n    <ion-item class=\"total-container\" lines=\"none\">\n      <div class=\"total-price-container\">\n        <ion-label>Total</ion-label>\n        <ion-label class=\"totla-price\">{{totalPrice | number : '1.2-2'}} USD</ion-label>\n      </div>\n      <ion-button slot=\"end\" (click)=\"confirmBasket()\">Confirm Basket</ion-button>\n    </ion-item>\n  </ng-container>\n\n\n  <div class=\"spinner-container\" *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_pages_basket_basket_module_ts.js.map