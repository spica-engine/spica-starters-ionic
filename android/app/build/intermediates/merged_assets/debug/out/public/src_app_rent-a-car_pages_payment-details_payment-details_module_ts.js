(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_rent-a-car_pages_payment-details_payment-details_module_ts"],{

/***/ 39831:
/*!************************************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment-details/payment-details-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPageRoutingModule": () => (/* binding */ PaymentDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details.page */ 83418);




const routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPage
    }
];
let PaymentDetailsPageRoutingModule = class PaymentDetailsPageRoutingModule {
};
PaymentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentDetailsPageRoutingModule);



/***/ }),

/***/ 28057:
/*!****************************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment-details/payment-details.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPageModule": () => (/* binding */ PaymentDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-details-routing.module */ 39831);
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page */ 83418);







let PaymentDetailsPageModule = class PaymentDetailsPageModule {
};
PaymentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDetailsPageRoutingModule
        ],
        declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_1__.PaymentDetailsPage]
    })
], PaymentDetailsPageModule);



/***/ }),

/***/ 83418:
/*!**************************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment-details/payment-details.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailsPage": () => (/* binding */ PaymentDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-details.page.html */ 86647);
/* harmony import */ var _payment_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-details.page.scss */ 73604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 94596);






let PaymentDetailsPage = class PaymentDetailsPage {
    constructor(_router, _route) {
        this._router = _router;
        this._route = _route;
        this.additional = [];
        this.packets = [];
        this.isLoading = true;
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: "fskk1akvi1elv0" });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this._route.queryParams.subscribe((res) => {
                this.data = res;
            });
            this.data = JSON.parse(JSON.stringify(this.data));
            this.getAdditionalProducts();
            this.getCar();
            yield this.getPackets();
            this.isLoading = false;
        });
    }
    getCar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.car = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.cars.get(this.data.car, { queryParams: { relation: true } });
        });
    }
    getAdditionalProducts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.data.additional_products = this.data.additional_products || [];
            this.additional = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.additional_products.getAll({ queryParams: { filter: { _id: { $in: this.data.additional_products } } } });
            this.additional.forEach(el => {
                this.additionalPrice += el.price;
            });
        });
    }
    getPackets() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.data.packets = this.data.packets || [];
            this.packets = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.car_packet.getAll({ queryParams: { filter: { _id: { $in: this.data.packets } } } });
            this.packets.forEach(el => {
                this.packetPrice += el.price;
            });
        });
    }
    navigate() {
        this._router.navigate(['rent-a-car/payment'], { queryParams: Object.assign({}, this.data) });
    }
};
PaymentDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
PaymentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-payment-details',
        template: _raw_loader_payment_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentDetailsPage);



/***/ }),

/***/ 73604:
/*!****************************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment-details/payment-details.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  background-color: #f6f6f6;\n  padding: 10px;\n}\n:host .container ion-card {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n:host .container ion-card ion-card-header {\n  padding-bottom: 0;\n}\n:host .container ion-card ion-card-header span {\n  color: gray;\n  font-size: 0.8rem;\n}\n:host .container ion-card ion-card-header h2 {\n  margin-top: 0;\n  font-size: 1.5rem;\n}\n:host .container ion-card ion-card-content div {\n  width: 100%;\n}\n:host .container ion-card ion-card-content div img {\n  width: 100%;\n  height: 100%;\n}\n:host .container ion-card h1 {\n  margin-top: 5px;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n:host .container ion-card .diviber {\n  border-top: 1px solid #bdbdbd;\n  padding: 15px 0 0 0;\n}\n:host .container ion-card .diviber span {\n  font-weight: 600;\n}\n:host .container ion-card ion-label {\n  display: flex;\n  margin: 10px 0;\n  justify-content: space-between;\n}\n:host .container ion-card ion-label h2 {\n  font-weight: 600;\n}\n:host .container ion-button {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNaO0FBQVk7RUFDSSxpQkFBQTtBQUVoQjtBQURnQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUdwQjtBQURnQjtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUdwQjtBQUNnQjtFQUNJLFdBQUE7QUFDcEI7QUFBb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUV4QjtBQUdZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEaEI7QUFHWTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7QUFEaEI7QUFFZ0I7RUFDSSxnQkFBQTtBQUFwQjtBQUdZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQURoQjtBQUVnQjtFQUNJLGdCQUFBO0FBQXBCO0FBSVE7RUFDSSxjQUFBO0FBRloiLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXZpYmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 86647:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/pages/payment-details/payment-details.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <ion-header *ngIf=\"!isLoading\">\n    <ion-toolbar>\n      <ion-back-button slot=\"start\"[routerLink]=\"['/rent-a-car/extras']\"  queryParamsHandling=\"merge\"></ion-back-button>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n    <div *ngIf=\"!isLoading\" class=\"container\">\n      <ion-card mode=\"ios\">\n        <ion-card-header>\n          <span>{{car?.category.name}}</span>\n          <h2>{{car?.name}}</h2>\n        </ion-card-header>\n        <ion-card-content>\n          <div>\n            <img [src]=\"car?.images[0]\">\n          </div>\n        </ion-card-content>\n      </ion-card>\n    \n      <ion-card mode=\"ios\" >\n        <h1>Pay Now</h1>\n        <ion-label>\n          <span>Car Price</span>\n          <span>{{car?.price}} $</span>\n        </ion-label>\n        <ion-label *ngFor=\"let product of additional\">\n          <span>{{product.name}}</span>\n          <span>{{product.price}} $</span>\n        </ion-label>\n        <ion-label *ngFor=\"let packet of packets\">\n          <span>{{packet.name}}</span>\n          <span>{{packet.price}} $</span>\n        </ion-label>\n        <ion-label class=\"diviber\">\n          <h2>Total</h2>\n          <span>{{data.totalPrice}} $</span>\n        </ion-label>\n      </ion-card>\n      <ion-button mode=\"ios\" expand=\"block\" (click)=\"navigate()\" color=\"dark\">Next</ion-button>\n    </div>\n  </ion-content>\n  \n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>");

/***/ })

}]);
//# sourceMappingURL=src_app_rent-a-car_pages_payment-details_payment-details_module_ts.js.map