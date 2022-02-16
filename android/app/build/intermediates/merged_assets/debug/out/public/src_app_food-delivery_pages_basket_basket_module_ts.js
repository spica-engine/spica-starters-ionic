(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_food-delivery_pages_basket_basket_module_ts"],{

/***/ 17153:
/*!*********************************************************************!*\
  !*** ./src/app/food-delivery/pages/basket/basket-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPageRoutingModule": () => (/* binding */ BasketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket.page */ 56191);




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

/***/ 64324:
/*!*************************************************************!*\
  !*** ./src/app/food-delivery/pages/basket/basket.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-routing.module */ 17153);
/* harmony import */ var _basket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.page */ 56191);
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

/***/ 56191:
/*!***********************************************************!*\
  !*** ./src/app/food-delivery/pages/basket/basket.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasketPage": () => (/* binding */ BasketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_basket_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./basket.page.html */ 251);
/* harmony import */ var _basket_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket.page.scss */ 17416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ 9670);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 79708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 30311);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_components_spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/spica-confirm-shopping/spica-confirm-shopping.component */ 1261);
/* harmony import */ var src_app_components_spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/spica-shipping-address/spica-shipping-address.component */ 14067);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ 5620);












let BasketPage = class BasketPage {
    constructor(_orderService, _router, _authService, _modalController, _commonService) {
        this._orderService = _orderService;
        this._router = _router;
        this._authService = _authService;
        this._modalController = _modalController;
        this._commonService = _commonService;
        this.isLoading = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.order = this._orderService.getOrder();
            this.user = yield this._authService.getUser().toPromise();
        });
    }
    remove(i) {
        this._orderService.removeFromOrder(i);
    }
    add(food) {
        this._orderService.addToOrder(food, 1);
    }
    confirmOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.presentConfirmModal(this.user.address || []);
        });
    }
    presentConfirmModal(addresses) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_5__.SpicaConfirmShoppingComponent,
                componentProps: {
                    addresses: addresses,
                    totalPrice: this.order.price,
                    currency: 'USD',
                    paymentMethods: [
                        { title: "Cash" },
                        { title: "Credit Card" },
                        { title: "Online" },
                    ],
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
                    this.createOrder(res.data.shoppingData);
                }
            });
            return yield modal.present();
        });
    }
    presentShippingAddressModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_6__.SpicaShippingAddressComponent,
                cssClass: 'my-custom-class',
            });
            modal.onWillDismiss().then((res) => {
                if (res.data.value == 'close') {
                    this.presentConfirmModal(this.user.address);
                    return;
                }
                this.saveAddress(res.data.shippingData);
            });
            return yield modal.present();
        });
    }
    saveAddress(data) {
        this.user.address = this.user.address || [];
        this.user.address.push(data);
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({
            address: this.user.address,
            _id: this.user._id,
        });
        this.presentConfirmModal(this.user.address);
    }
    createOrder(shoppingData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.order.user = this.user._id;
            this.order.address = this.user.address[shoppingData.addressIndex];
            this.order.payment_method = shoppingData.paymentMethod.replace(' ', '_').toLowerCase();
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.order.insert(this.order).then((_) => {
                this._commonService.presentToast('Your order has been received successfully', 2000);
                this._orderService.clearOrder();
                this.navigateToHome();
            });
            this.isLoading = false;
        });
    }
    navigateToHome() {
        this._router.navigate(['/food-delivery/home'], { replaceUrl: true });
    }
};
BasketPage.ctorParameters = () => [
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService }
];
BasketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-basket',
        template: _raw_loader_basket_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_basket_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BasketPage);



/***/ }),

/***/ 17416:
/*!*************************************************************!*\
  !*** ./src/app/food-delivery/pages/basket/basket.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content > ion-list {\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  min-height: 200px;\n}\n:host ion-content .empty-container {\n  margin: auto;\n  width: 85%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host ion-content .empty-container ion-label {\n  font-weight: 500;\n  font-size: 17px;\n  margin-top: 20px;\n}\n:host ion-content .empty-container ion-button {\n  width: 150px;\n  margin-top: 20px;\n  --border-radius: 10px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label {\n  display: flex;\n  align-items: center;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label ion-avatar {\n  --border-radius: 10px;\n  width: 90px;\n  height: 90px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows {\n  width: 70%;\n  margin-left: 10px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.name {\n  font-weight: 500;\n  font-size: 16px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.ingredients {\n  margin: 2px 0px 5px 0px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.ingredients > span {\n  font-weight: 350;\n  font-size: 12px;\n  white-space: initial;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details div.amount {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details div.amount * {\n  margin: 5px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details div.price {\n  margin-right: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details span {\n  font-size: 13px !important;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details > span {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n:host ion-content ion-list ion-item:not(.total-price) ion-label div.rows div.details > span > span {\n  margin-left: 5px;\n}\n:host ion-content ion-list ion-item.total-price div {\n  text-align: end;\n  margin-right: 15px;\n  color: var(--ion-color-primary);\n}\n:host ion-content ion-list ion-item.total-price div span {\n  font-size: 16px !important;\n}\n:host ion-content ion-list ion-item.total-price div span:first-of-type {\n  margin-right: 10px;\n}\n:host ion-content ion-list ion-item.header > ion-label:last-of-type {\n  text-align: center;\n}\n:host .total-container {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  padding: 5px 0;\n  border-top: 1px solid var(--ion-color-medium-tint);\n  background: white;\n}\n:host .total-container .total-price-container {\n  margin-left: 15px;\n  font-size: 14px;\n}\n:host .total-container .total-price-container .totla-price {\n  font-size: 16px;\n  font-weight: 700;\n}\n:host .total-container ion-button {\n  height: 45px;\n  min-width: 150px;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  --border-radius: 5px;\n  margin-left: 15px;\n  font-size: 16px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2tldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBRk47QUFLTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFVUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVJWO0FBU1U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUFo7QUFTVTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVBaO0FBUVk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFOZDtBQVFZO0VBQ0UsdUJBQUE7QUFOZDtBQU9jO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFMaEI7QUFTWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBUGQ7QUFTYztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUGhCO0FBUWdCO0VBQ0UsV0FBQTtBQU5sQjtBQVVjO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFSaEI7QUFXYztFQUNFLDBCQUFBO0FBVGhCO0FBWWM7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVZoQjtBQVdnQjtFQUNFLGdCQUFBO0FBVGxCO0FBa0JRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFoQlY7QUFrQlU7RUFDRSwwQkFBQTtBQWhCWjtBQWlCWTtFQUNFLGtCQUFBO0FBZmQ7QUFxQk07RUFDRSxrQkFBQTtBQW5CUjtBQXlCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrREFBQTtFQUNBLGlCQUFBO0FBdkJKO0FBeUJJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBdkJOO0FBd0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBdEJSO0FBeUJJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF2Qk4iLCJmaWxlIjoiYmFza2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgID4gaW9uLWxpc3Qge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmVtcHR5LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICBcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgaW9uLWl0ZW06bm90KC50b3RhbC1wcmljZSkge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYucm93cyB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBkaXYubmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdi5pbmdyZWRpZW50cyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4IDBweCA1cHggMHB4O1xuICAgICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzNTA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpdi5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgIGRpdi5hbW91bnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpdi5wcmljZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA+IHNwYW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgPiBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1pdGVtLnRvdGFsLXByaWNlIHtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpb24taXRlbS5oZWFkZXIgPiBpb24tbGFiZWw6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLnRvdGFsLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIC50b3RhbC1wcmljZS1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAudG90bGEtcHJpY2Uge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 251:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/pages/basket/basket.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"food-delivery\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Basket</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-container *ngIf=\"!order.foods.length && !isLoading\">\n    <div class=\"empty-container\">\n      <img\n        src=\"https://cdn.dribbble.com/users/1168645/screenshots/3152485/media/9beceb082a92006c310a72aa8e2fdfaa.png?compress=1&resize=400x300\"\n        alt=\"\"\n      />\n      <ion-label>There is no food</ion-label>\n      <ion-button (click)=\"navigateToHome()\">Food List</ion-button>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"order.foods.length && !isLoading\">\n    <ion-list>\n      <ion-item *ngFor=\"let food of order.foods; index as i\" lines=\"full\">\n        <ion-label>\n          <ion-avatar slot=\"start\">\n            <img [src]=\"food['image']\" alt=\"\" />\n          </ion-avatar>\n          <div class=\"rows\">\n            <div class=\"name\">{{ food.name }}</div>\n            <div class=\"ingredients\">\n              <span> {{ food.ingredients.join(\", \") }} </span>\n            </div>\n            <div class=\"details\">\n              <div class=\"amount\">\n                <ion-icon\n                  (click)=\"remove(i)\"\n                  name=\"remove-circle-outline\"\n                ></ion-icon>\n                <span> {{ food.count }} </span>\n                <ion-icon\n                  (click)=\"add(food)\"\n                  name=\"add-circle-outline\"\n                ></ion-icon>\n              </div>\n              <div class=\"price\">${{ food.price * food.count }}</div>\n            </div>\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item class=\"total-container\" lines=\"none\">\n      <div class=\"total-price-container\">\n        <ion-label>Total</ion-label>\n        <ion-label class=\"totla-price\"\n          >{{order.price | number : '1.2-2'}} USD</ion-label\n        >\n      </div>\n      <ion-button slot=\"end\" (click)=\"confirmOrder()\">Confirm Order</ion-button>\n    </ion-item>\n  </ng-container>\n  <ion-spinner *ngIf=\"isLoading\" class=\"spinner-center-page\"></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_food-delivery_pages_basket_basket_module_ts.js.map