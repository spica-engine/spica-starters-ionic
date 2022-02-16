(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_rent-a-car_pages_extras_extras_module_ts"],{

/***/ 2927:
/*!******************************************************************!*\
  !*** ./src/app/rent-a-car/pages/extras/extras-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrasPageRoutingModule": () => (/* binding */ ExtrasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _extras_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras.page */ 50137);




const routes = [
    {
        path: '',
        children: [
            {
                path: 'payment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_rent-a-car_services_auth_service_ts"), __webpack_require__.e("default-src_app_rent-a-car_pages_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../payment/payment.module */ 93448)).then(m => m.PaymentPageModule)
            },
            {
                path: '',
                component: _extras_page__WEBPACK_IMPORTED_MODULE_0__.ExtrasPage,
            },
        ]
    }
];
let ExtrasPageRoutingModule = class ExtrasPageRoutingModule {
};
ExtrasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExtrasPageRoutingModule);



/***/ }),

/***/ 75414:
/*!**********************************************************!*\
  !*** ./src/app/rent-a-car/pages/extras/extras.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrasPageModule": () => (/* binding */ ExtrasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _extras_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extras-routing.module */ 2927);
/* harmony import */ var _extras_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras.page */ 50137);







let ExtrasPageModule = class ExtrasPageModule {
};
ExtrasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _extras_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrasPageRoutingModule,
        ],
        declarations: [_extras_page__WEBPACK_IMPORTED_MODULE_1__.ExtrasPage]
    })
], ExtrasPageModule);



/***/ }),

/***/ 50137:
/*!********************************************************!*\
  !*** ./src/app/rent-a-car/pages/extras/extras.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrasPage": () => (/* binding */ ExtrasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_extras_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./extras.page.html */ 96680);
/* harmony import */ var _extras_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extras.page.scss */ 20709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 94596);







let ExtrasPage = class ExtrasPage {
    constructor(_route, _router, alertController) {
        this._route = _route;
        this._router = _router;
        this.alertController = alertController;
        this.isLoading = true;
        this.additional_products = [];
        this.car_packet = [];
        this.data = {};
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: "fskk1akvi1elv0" });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this._route.queryParams.subscribe((res) => {
                this.data = res;
            });
            this.data = JSON.parse(JSON.stringify(this.data));
            yield this.checkOffice();
            if (this.data.totalPrice) {
                this.data.price = this.data.totalPrice;
            }
            this.totalPrice = Number(this.data.price);
            this.getAdditional_Products();
            this.getCar_Packet();
        });
    }
    getAdditional_Products() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.additional_products.getAll().then((res) => {
            this.additional_products = res;
        });
    }
    getCar_Packet() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.car_packet.getAll().then((res) => {
            this.car_packet = res;
            this.isLoading = false;
        });
    }
    addProduct(productId, productPrice) {
        this.data.price = Number(this.data.price);
        this.data['additional_products'] = this.data['additional_products'] || [];
        let existProduct = this.data.additional_products.filter((product) => product == productId)[0];
        if (existProduct) {
            this.data.additional_products = this.data.additional_products.filter((product) => product != productId);
            this.totalPrice -= Number(productPrice);
        }
        else {
            this.data['additional_products'].push(productId);
            this.totalPrice += Number(productPrice);
        }
    }
    addPacket(packetId, packetPrice) {
        this.data.price = Number(this.data.price);
        this.data['packets'] = this.data['packets'] || [];
        let existPacket = this.data.packets.filter((packet) => packet == packetId)[0];
        if (existPacket) {
            this.data.packets = this.data.packets.filter((packet) => packet != packetId);
            this.totalPrice -= Number(packetPrice);
        }
        else {
            this.data['packets'].push(packetId);
            this.totalPrice += Number(packetPrice);
        }
    }
    navigateBack() {
        this._router.navigate(['cars']);
    }
    navigate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.data['totalPrice'] = this.totalPrice;
            this._router.navigate(['rent-a-car/payment-details'], { queryParams: Object.assign({}, this.data) });
        });
    }
    checkOffice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.office = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.office.get(this.data.office_to_take);
            if (!this.office.cars.includes(this.data.car)) {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    message: 'The office you have chosen does not have the vehicle you want. Click OK to go to Cars',
                    buttons: ['OK']
                });
                yield alert.present();
                yield alert.onDidDismiss();
                this.data.car = "";
                yield this._router.navigate(['rent-a-car/cars']);
                this.isLoading = false;
            }
        });
    }
};
ExtrasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ExtrasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-extras',
        template: _raw_loader_extras_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_extras_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExtrasPage);

// 


/***/ }),

/***/ 20709:
/*!**********************************************************!*\
  !*** ./src/app/rent-a-car/pages/extras/extras.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content h1 {\n  font-weight: 600;\n  font-size: 1.4rem;\n  text-align: left;\n  background-color: white;\n  position: absolute;\n  z-index: 1;\n  margin-top: -13px;\n  margin-left: 20px;\n  padding: 0 10px;\n}\n:host ion-content .test {\n  position: relative;\n  border: 2px solid #b3b3b370;\n  border-radius: 8px;\n  margin: 50px 10px;\n}\n:host ion-content .test ion-card {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 15px;\n  margin: 20px 15px;\n}\n:host ion-content .test ion-card ion-accordion-group ion-accordion ion-item {\n  color: gray;\n}\n:host ion-content .test ion-card .extra-item {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-content .test ion-card .extra-item .extra-item-info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  color: gray;\n}\n:host ion-content .test ion-card .extra-item .extra-item-info h2 {\n  font-size: 1.1rem;\n}\n:host ion-content .test ion-card .extra-item .extra-item-info span {\n  font-size: 0.9rem;\n}\n:host ion-content .test ion-card .extra-item .add {\n  display: flex;\n  align-items: center;\n}\n:host ion-content .payment {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 15px 35px 15px;\n}\n:host ion-content .payment ion-text {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  font-weight: 600;\n  margin-left: 5px;\n}\n:host ion-content .payment ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dHJhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFo7QUFJUTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRlo7QUFHWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFJd0I7RUFDSSxXQUFBO0FBRjVCO0FBTWdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUpwQjtBQUtvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUh4QjtBQUl3QjtFQUNJLGlCQUFBO0FBRjVCO0FBSXdCO0VBQ0ksaUJBQUE7QUFGNUI7QUFLb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFIeEI7QUFRUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFOWjtBQU9ZO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBT1k7RUFDSSxXQUFBO0FBTGhCIiwiZmlsZSI6ImV4dHJhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlc3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2IzYjNiMzcwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IDEwcHg7XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMTVweDtcbiAgICAgICAgICAgICAgICBpb24tYWNjb3JkaW9uLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWFjY29yZGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4dHJhLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAuZXh0cmEtaXRlbS1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBheW1lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjowIDE1cHggMzVweCAxNXB4O1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 96680:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/pages/extras/extras.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar>\n    <ion-back-button defaultHref=\"rent-a-car/cars\" slot=\"start\"></ion-back-button>\n    <ion-title>Add Extras</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"!isLoading\">\n  \n    <div class=\"test\">\n      <h1>Additional Product</h1>\n      <ion-card mode=\"ios\" *ngFor=\"let product of additional_products\">\n          <div class=\"extra-item\">\n            <div class=\"extra-item-info\">\n              <h2>{{product.name}}</h2>\n              <span>{{product.price}} USD</span>\n            </div>\n            <div class=\"add\">\n              <ion-button [color]=\"data.additional_products?.includes(product._id) ? 'danger' : 'success'\" (click)=\"addProduct(product._id,product.price)\" slot=\"end\">\n                <ion-icon [name]=\"data.additional_products?.includes(product._id) ? 'close-circle' : 'add-circle'\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n          <ion-accordion-group mode=\"md\">\n            <ion-accordion value=\"additional_products\">\n              <ion-item lines=\"none\" slot=\"header\">\n                <ion-label>Detail</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-item lines=\"none\">\n                  <p>{{product.description}}</p>\n                </ion-item>\n              </ion-list>\n            </ion-accordion>\n          </ion-accordion-group>\n      </ion-card>\n    </div>\n  \n    \n    <div class=\"test\">\n      <h1>Car Packets</h1>\n      <ion-card mode=\"ios\" *ngFor=\"let packet of car_packet\">\n          <div class=\"extra-item\">\n            <div class=\"extra-item-info\">\n              <h2>{{packet.name}}</h2>\n              <span>{{packet.price}} USD</span>\n            </div>\n            <div class=\"add\">\n              <ion-button [color]=\"data.packets?.includes(packet._id) ? 'danger' : 'success'\" (click)=\"addPacket(packet._id,packet.price)\" slot=\"end\">\n                <ion-icon [name]=\"data.packets?.includes(packet._id) ? 'close-circle' : 'add-circle'\"></ion-icon>\n              </ion-button>\n            </div>\n          </div>\n          <ion-accordion-group mode=\"md\">\n            <ion-accordion value=\"car-packet\">\n              <ion-item lines=\"none\" slot=\"header\">\n                <ion-label>Detail</ion-label>\n              </ion-item>\n              <ion-list slot=\"content\">\n                <ion-item lines=\"none\" *ngFor=\"let features of packet.features\">\n                  <p>{{features}}</p>\n                </ion-item>\n              </ion-list>\n            </ion-accordion>\n          </ion-accordion-group>\n      </ion-card>\n    </div>\n  \n    <div class=\"payment\">\n      <ion-button mode=\"ios\" (click)=\" navigate()\" color=\"dark\">Payment</ion-button>\n      <ion-text>{{totalPrice}}$</ion-text>\n    </div>\n  </div>\n  </ion-content>\n  \n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>");

/***/ })

}]);
//# sourceMappingURL=src_app_rent-a-car_pages_extras_extras_module_ts.js.map