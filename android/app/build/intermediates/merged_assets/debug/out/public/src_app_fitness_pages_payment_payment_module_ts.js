(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_payment_payment_module_ts"],{

/***/ 77968:
/*!*****************************************************************!*\
  !*** ./src/app/fitness/pages/payment/payment-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 27392);




const routes = [
    {
        path: ':id',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 14333:
/*!*********************************************************!*\
  !*** ./src/app/fitness/pages/payment/payment.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 77968);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 27392);







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
    })
], PaymentPageModule);



/***/ }),

/***/ 27392:
/*!*******************************************************!*\
  !*** ./src/app/fitness/pages/payment/payment.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment.page.html */ 91986);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 64978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 43443);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 86629);









let PaymentPage = class PaymentPage {
    constructor(_route, _router, _authService, _formBuilder, toastController) {
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this._formBuilder = _formBuilder;
        this.toastController = toastController;
        this.loading = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.form();
            this.videoId = this._route.snapshot.params.id;
            this.video = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.video.get(this.videoId, { queryParams: { relation: true } });
            this.user = yield this._authService.getUser().toPromise();
            this.loading = false;
        });
    }
    form() {
        this.paymentForm = this._formBuilder.group({
            card: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1000000000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(9999999999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[ 0-9]*$')
                ]),],
            date1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            date2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            cvv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(999), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(100)
                ]),],
        });
    }
    payment() {
        this.loading = true;
        this.user.buyed_videos.push(this.video._id);
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({ _id: this.user._id, buyed_videos: this.user.buyed_videos });
        this.succsesToast();
        this._router.navigate(['/fitness'], { replaceUrl: true });
    }
    succsesToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Successful.',
                duration: 2000
            });
            toast.present();
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentPage);



/***/ }),

/***/ 64978:
/*!*********************************************************!*\
  !*** ./src/app/fitness/pages/payment/payment.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .container ion-card {\n  margin: 0;\n  box-shadow: none !important;\n}\n:host ion-content .container ion-card ion-card-header span {\n  color: gray;\n  font-size: 0.8rem;\n}\n:host ion-content .container ion-card ion-card-header h2 {\n  font-size: 1.5rem;\n}\n:host ion-content .container ion-card ion-card-content div {\n  width: 100%;\n  height: 200px;\n}\n:host ion-content .container ion-card ion-card-content div img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host ion-content .payment {\n  padding: 15px;\n}\n:host ion-content .payment .payment-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host ion-content .payment .payment-header h2 {\n  font-size: 1.6rem;\n}\n:host ion-content .payment .payment-header ion-text {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n:host ion-content .payment span {\n  font-size: 0.8rem;\n  color: gray;\n}\n:host ion-content .payment ion-item {\n  margin: 10px 0;\n  border-radius: 25px;\n  border: 1px solid #bdc5cc;\n}\n:host ion-content .payment ion-item ion-icon {\n  margin-right: 5px;\n}\n:host ion-content .payment .payment-detail {\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-content .payment .payment-detail .payment-month {\n  display: flex;\n  align-items: center;\n}\n:host ion-content .payment .payment-detail .payment-month ion-item {\n  margin-right: 5px;\n}\n:host ion-content .payment .payment-detail .cvv {\n  width: 21%;\n}\n:host ion-content .payment .payment-detail .cvv ion-label {\n  color: gray;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksU0FBQTtFQUNBLDJCQUFBO0FBRmhCO0FBSW9CO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRnhCO0FBSW9CO0VBQ0ksaUJBQUE7QUFGeEI7QUFNb0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUp4QjtBQUt3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFINUI7QUFTUTtFQUNJLGFBQUE7QUFQWjtBQVFZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFOaEI7QUFPZ0I7RUFDSSxpQkFBQTtBQUxwQjtBQU9nQjtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxwQjtBQVFZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBTmhCO0FBUVk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQU5oQjtBQU9nQjtFQUNJLGlCQUFBO0FBTHBCO0FBUVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFOaEI7QUFPZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFMcEI7QUFNb0I7RUFDSSxpQkFBQTtBQUp4QjtBQU9nQjtFQUNJLFVBQUE7QUFMcEI7QUFNb0I7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQUp4QiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wYXltZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAucGF5bWVudC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM1Y2M7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGF5bWVudC1kZXRhaWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIC5wYXltZW50LW1vbnRoIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN2diB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMSU7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 91986:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/payment/payment.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"!loading\">\n  <ion-toolbar mode=\"ios\">\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title>Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loading\">\n\n    <div class=\"container\">\n      <ion-card mode=\"ios\">\n        <ion-card-header>\n          <span>{{video?.category.name}}</span>\n          <h2>{{video?.name}}</h2>\n        </ion-card-header>\n        <ion-card-content>\n          <div>\n            <img [src]=\"video?.image\">\n          </div>\n      </ion-card-content>\n    </ion-card>\n    \n  </div>\n  <div class=\"payment\" [formGroup]=\"paymentForm\">\n    <span [style]=\"paymentForm.controls['card'].dirty && paymentForm.controls['card'].invalid? 'color:red' :'color:gray'\">Credit Card Number</span>\n    <ion-item lines=\"none\">\n      <ion-icon name=\"card-outline\"></ion-icon>\n      <ion-input placeholder=\"0000 0000 0000 0000\" formControlName=\"card\" type=\"number\" onKeyPress=\"if(this.value.length==16) return false;\"></ion-input>\n    </ion-item>\n    <div class=\"payment-detail\">\n      <div class=\"payment-month\">\n        <ion-item mode=\"ios\" lines=\"none\" class=\"month\">\n          <ion-select formControlName=\"date1\" placeholder=\"--\">\n            <ion-select-option value=\"01\">01</ion-select-option>\n            <ion-select-option value=\"02\">02</ion-select-option>\n            <ion-select-option value=\"03\">03</ion-select-option>\n            <ion-select-option value=\"04\">04</ion-select-option>\n            <ion-select-option value=\"05\">05</ion-select-option>\n            <ion-select-option value=\"06\">06</ion-select-option>\n            <ion-select-option value=\"07\">07</ion-select-option>\n            <ion-select-option value=\"08\">08</ion-select-option>\n            <ion-select-option value=\"09\">09</ion-select-option>\n            <ion-select-option value=\"10\">10</ion-select-option>\n            <ion-select-option value=\"11\">11</ion-select-option>\n            <ion-select-option value=\"12\">12</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item mode=\"ios\" lines=\"none\">\n          <ion-select formControlName=\"date2\" placeholder=\"----\">\n            <ion-select-option value=\"2022\">2022</ion-select-option>\n            <ion-select-option value=\"2023\">2023</ion-select-option>\n            <ion-select-option value=\"2024\">2024</ion-select-option>\n            <ion-select-option value=\"2025\">2025</ion-select-option>\n            <ion-select-option value=\"2026\">2026</ion-select-option>\n            <ion-select-option value=\"2027\">2027</ion-select-option>\n            <ion-select-option value=\"2028\">2028</ion-select-option>\n            <ion-select-option value=\"2029\">2029</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <ion-item lines=\"none\" class=\"cvv\">\n        <ion-input formControlName=\"cvv\" type=\"number\" onKeyPress=\"if(this.value.length==3) return false;\" placeholder=\"CVV\"></ion-input>\n      </ion-item>\n    </div>\n    <ion-button mode=\"ios\" [disabled]=\"paymentForm.invalid || loading\" expand=\"block\" color=\"dark\" (click)=\"payment()\">Pay &nbsp;&nbsp;{{video?.price}} $</ion-button>\n  </div>\n</div>\n</ion-content>\n<ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_payment_payment_module_ts.js.map