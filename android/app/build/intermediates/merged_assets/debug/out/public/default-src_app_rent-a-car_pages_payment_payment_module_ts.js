(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_rent-a-car_pages_payment_payment_module_ts"],{

/***/ 83433:
/*!********************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment/payment-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 43855);




const routes = [
    {
        path: '',
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

/***/ 93448:
/*!************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment/payment.module.ts ***!
  \************************************************************/
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
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 83433);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 43855);







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

/***/ 43855:
/*!**********************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment/payment.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment.page.html */ 7334);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 80799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 18029);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 94596);









let PaymentPage = class PaymentPage {
    constructor(_formBuilder, toastController, _route, _router, _authService) {
        this._formBuilder = _formBuilder;
        this.toastController = toastController;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this.clicked = false;
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.initialize({ apikey: "fskk1akvi1elv0" });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this._route.queryParams.subscribe((res) => {
                this.data = res;
            });
            this.data = JSON.parse(JSON.stringify(this.data));
            this.form();
            yield this.getUser();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
        });
    }
    form() {
        this.paymentForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            mail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                ]),],
            passport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(10000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(99999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[ 0-9]*$'),
                ]),],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[ 0-9]*$')
                ]),],
            birthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.clicked = true;
            if (this.clicked) {
                this.data.price = Number(this.data.totalPrice);
                this.data.start = new Date(this.data.start);
                this.data.end = new Date(this.data.end);
                this.data.packets = this.data.packets || [];
                this.data.additional_products = this.data.additional_products || [];
                this.data['name'] = this.paymentForm.value.name;
                this.data['surname'] = this.paymentForm.value.surname;
                this.data['passport'] = String(this.paymentForm.value.passport);
                this.data['birthday'] = new Date(this.paymentForm.value.birthday);
                if (this.user) {
                    this.data['user'] = this.user._id;
                }
                this.newRent = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.rent_a_car.insert(this.data);
                const toast = yield this.toastController.create({
                    message: 'PAYMENT SUCCESSFUL',
                    duration: 2500
                });
                toast.present();
                if (this.newRent) {
                    this._router.navigateByUrl('/rent-a-car/home', {
                        replaceUrl: true,
                    });
                }
            }
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentPage);



/***/ }),

/***/ 80799:
/*!************************************************************!*\
  !*** ./src/app/rent-a-car/pages/payment/payment.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .address {\n  padding: 15px;\n}\n:host ion-content .address ion-item {\n  margin: 5px 0 15px 0;\n  border-radius: 3px;\n  border: 1px solid #bdc5cc;\n}\n:host ion-content .address ion-item ion-icon {\n  font-size: 1.2rem;\n  margin-right: 5px;\n}\n:host ion-content .address ion-item ion-textarea {\n  height: 120px;\n}\n:host ion-content .address span {\n  font-size: 0.8rem;\n  color: gray;\n}\n:host ion-content .address .city {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-content .address .city ion-item {\n  width: 45%;\n}\n:host ion-content .payment {\n  padding: 15px;\n}\n:host ion-content .payment .payment-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host ion-content .payment .payment-header h2 {\n  font-size: 1.6rem;\n}\n:host ion-content .payment .payment-header ion-text {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n:host ion-content .payment span {\n  font-size: 0.8rem;\n  color: gray;\n}\n:host ion-content .payment ion-item {\n  margin: 10px 0;\n  border-radius: 25px;\n  border: 1px solid #bdc5cc;\n}\n:host ion-content .payment ion-item ion-icon {\n  margin-right: 5px;\n}\n:host ion-content .payment .payment-detail {\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-content .payment .payment-detail .payment-month {\n  display: flex;\n  align-items: center;\n}\n:host ion-content .payment .payment-detail .payment-month ion-item {\n  margin-right: 5px;\n}\n:host ion-content .payment .payment-detail .cvv {\n  width: 20%;\n}\n:host ion-content .payment .payment-detail .cvv ion-label {\n  color: gray;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksYUFBQTtBQURaO0FBRVk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBaEI7QUFDZ0I7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksYUFBQTtBQUNwQjtBQUVZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBQWhCO0FBRVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksVUFBQTtBQUNwQjtBQUdRO0VBQ0ksYUFBQTtBQURaO0FBRVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUFoQjtBQUNnQjtFQUNJLGlCQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ3BCO0FBRVk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFBaEI7QUFFWTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksaUJBQUE7QUFDcEI7QUFFWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFoQjtBQUNnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNwQjtBQUFvQjtFQUNJLGlCQUFBO0FBRXhCO0FBQ2dCO0VBQ0ksVUFBQTtBQUNwQjtBQUFvQjtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBRXhCIiwiZmlsZSI6InBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwIDE1cHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzVjYztcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaXR5IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wYXltZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAucGF5bWVudC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGM1Y2M7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGF5bWVudC1kZXRhaWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIC5wYXltZW50LW1vbnRoIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN2diB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 7334:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/pages/payment/payment.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-back-button [routerLink]=\"['/rent-a-car/extras']\"  queryParamsHandling=\"merge\" slot=\"start\" ></ion-back-button>\n    <ion-title>Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div [formGroup]=\"paymentForm\">\n  <div class=\"address\">\n    <span [style]=\"paymentForm.controls['name'].dirty && paymentForm.controls['name'].invalid? 'color:red' :'color:gray'\">Name</span>\n    <ion-item lines=\"none\">\n      <ion-input [readonly]=\"user\" formControlName=\"name\" type=\"text\" [value]=\"user? user.name : ''\"></ion-input>\n    </ion-item>\n    <span [style]=\"paymentForm.controls['surname'].dirty && paymentForm.controls['surname'].invalid? 'color:red' :'color:gray'\">Surname</span>\n    <ion-item lines=\"none\">\n      <ion-input [readonly]=\"user\" formControlName=\"surname\" type=\"text\" [value]=\"user? user.surname : ''\"></ion-input>\n    </ion-item>\n    <span [style]=\"paymentForm.controls['mail'].dirty && paymentForm.controls['mail'].invalid? 'color:red' :'color:gray'\">* E-mail</span>\n    <ion-item lines=\"none\">\n      <ion-input [readonly]=\"user\" type=\"text\" formControlName=\"mail\" [value]=\"user? user.email : ''\"></ion-input>\n    </ion-item>\n    <span [style]=\"paymentForm.controls['passport'].dirty && paymentForm.controls['passport'].invalid? 'color:red' :'color:gray'\">* ID No</span>\n    <ion-item lines=\"none\">\n      <ion-input [readonly]=\"user\" type=\"number\" formControlName=\"passport\" [value]=\"user? user.passport : ''\" onKeyPress=\"if(this.value.length==11) return false;\"></ion-input>\n    </ion-item>\n    <span [style]=\"paymentForm.controls['phone'].dirty && paymentForm.controls['phone'].invalid? 'color:red' :'color:gray'\">Phone</span>\n    <ion-item lines=\"none\">\n      <ion-input [readonly]=\"user\" type=\"number\" formControlName=\"phone\" [value]=\"user? user.phone : ''\"></ion-input>\n    </ion-item>\n    <span [style]=\"paymentForm.controls['birthday'].dirty && paymentForm.controls['birthday'].invalid? 'color:red' :'color:gray'\">Birthday</span>\n    <ion-item lines=\"none\">\n      <ion-input [readonly]=\"user\" [type]=\"user? 'datetime-locale':'date'\" formControlName=\"birthday\" [value]=\"user? user.birthday : ''\"></ion-input>\n    </ion-item>\n  </div>\n\n    <div class=\"payment\">\n      <span [style]=\"paymentForm.controls['card'].dirty && paymentForm.controls['card'].invalid? 'color:red' :'color:gray'\">Credit Card Number</span>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"card-outline\"></ion-icon>\n        <ion-input placeholder=\"0000 0000 0000 0000\" formControlName=\"card\" type=\"number\" onKeyPress=\"if(this.value.length==16) return false;\"></ion-input>\n      </ion-item>\n      <div class=\"payment-detail\">\n        <div class=\"payment-month\">\n          <ion-item mode=\"ios\" lines=\"none\" class=\"month\">\n            <ion-select formControlName=\"date1\" placeholder=\"--\">\n              <ion-select-option value=\"01\">01</ion-select-option>\n              <ion-select-option value=\"02\">02</ion-select-option>\n              <ion-select-option value=\"03\">03</ion-select-option>\n              <ion-select-option value=\"04\">04</ion-select-option>\n              <ion-select-option value=\"05\">05</ion-select-option>\n              <ion-select-option value=\"06\">06</ion-select-option>\n              <ion-select-option value=\"07\">07</ion-select-option>\n              <ion-select-option value=\"08\">08</ion-select-option>\n              <ion-select-option value=\"09\">09</ion-select-option>\n              <ion-select-option value=\"10\">10</ion-select-option>\n              <ion-select-option value=\"11\">11</ion-select-option>\n              <ion-select-option value=\"12\">12</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item mode=\"ios\" lines=\"none\">\n            <ion-select formControlName=\"date2\" placeholder=\"----\">\n              <ion-select-option value=\"2022\">2022</ion-select-option>\n              <ion-select-option value=\"2023\">2023</ion-select-option>\n              <ion-select-option value=\"2024\">2024</ion-select-option>\n              <ion-select-option value=\"2025\">2025</ion-select-option>\n              <ion-select-option value=\"2026\">2026</ion-select-option>\n              <ion-select-option value=\"2027\">2027</ion-select-option>\n              <ion-select-option value=\"2028\">2028</ion-select-option>\n              <ion-select-option value=\"2029\">2029</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n        <ion-item lines=\"none\" class=\"cvv\">\n          <ion-input formControlName=\"cvv\" type=\"number\" onKeyPress=\"if(this.value.length==3) return false;\" placeholder=\"CVV\"></ion-input>\n        </ion-item>\n      </div>\n      <ion-button mode=\"ios\" [disabled]=\"paymentForm.invalid || clicked\" expand=\"block\" color=\"dark\" (click)=\"payment()\">Pay &nbsp;&nbsp;{{this.data.totalPrice}} $</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_rent-a-car_pages_payment_payment_module_ts.js.map