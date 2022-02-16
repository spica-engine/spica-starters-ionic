(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_rent-a-car_pages_car-details_car-details_module_ts"],{

/***/ 88768:
/*!****************************************************************************!*\
  !*** ./src/app/rent-a-car/pages/car-details/car-details-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPageRoutingModule": () => (/* binding */ CarDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details.page */ 91053);




const routes = [
    {
        path: ':id',
        component: _car_details_page__WEBPACK_IMPORTED_MODULE_0__.CarDetailsPage
    }
];
let CarDetailsPageRoutingModule = class CarDetailsPageRoutingModule {
};
CarDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarDetailsPageRoutingModule);



/***/ }),

/***/ 41074:
/*!********************************************************************!*\
  !*** ./src/app/rent-a-car/pages/car-details/car-details.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPageModule": () => (/* binding */ CarDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _car_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-details-routing.module */ 88768);
/* harmony import */ var _car_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-details.page */ 91053);







let CarDetailsPageModule = class CarDetailsPageModule {
};
CarDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarDetailsPageRoutingModule
        ],
        declarations: [_car_details_page__WEBPACK_IMPORTED_MODULE_1__.CarDetailsPage]
    })
], CarDetailsPageModule);



/***/ }),

/***/ 91053:
/*!******************************************************************!*\
  !*** ./src/app/rent-a-car/pages/car-details/car-details.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarDetailsPage": () => (/* binding */ CarDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_car_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./car-details.page.html */ 29001);
/* harmony import */ var _car_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-details.page.scss */ 29962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 94596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/rent/rent.component */ 62464);








let CarDetailsPage = class CarDetailsPage {
    constructor(modalController, _route) {
        this.modalController = modalController;
        this._route = _route;
        this.isLoading = true;
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: "fskk1akvi1elv0" });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this._route.snapshot.params.id;
            this.getCar();
        });
    }
    getCar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.car = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.cars.get(this.id, { queryParams: { relation: true } });
            this.isLoading = false;
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_3__.RentComponent,
                swipeToClose: true,
                componentProps: {
                    'carId': this.id,
                }
            });
            return yield modal.present();
        });
    }
};
CarDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
CarDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-car-details',
        template: _raw_loader_car_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_car_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarDetailsPage);



/***/ }),

/***/ 29962:
/*!********************************************************************!*\
  !*** ./src/app/rent-a-car/pages/car-details/car-details.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .car-detail {\n  width: 100%;\n}\n:host .car-detail ion-slides ::ng-deep .swiper-pagination-bullet-active {\n  background-color: black;\n}\n:host .car-detail ion-slides ::ng-deep .swiper-pagination-bullet {\n  background-color: black;\n}\n:host .car-detail ion-slides ion-slide {\n  padding-bottom: 20px;\n}\n:host .car-detail .car-img {\n  width: 100%;\n  height: 200px;\n  margin: 10px;\n}\n:host .car-detail .car-img img {\n  width: 100%;\n  height: 100%;\n}\n:host .car-detail .description {\n  padding: 15px;\n}\n:host .car-detail .description ion-label {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n:host .car-detail .description ion-label h2 {\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n:host .car-detail .description ion-label span {\n  font-size: 0.9rem;\n  color: gray;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7QUFBUjtBQUdnQjtFQUNJLHVCQUFBO0FBRHBCO0FBR2dCO0VBQ0ksdUJBQUE7QUFEcEI7QUFJWTtFQUNJLG9CQUFBO0FBRmhCO0FBS1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFIWjtBQUlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFGaEI7QUFLUTtFQUNJLGFBQUE7QUFIWjtBQUlZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUZoQjtBQUdnQjtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFEcEI7QUFHZ0I7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURwQiIsImZpbGUiOiJjYXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNhci1kZXRhaWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaW9uLXNsaWRlc3tcbiAgICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2FyLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 29001:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/pages/car-details/car-details.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Car Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<div *ngIf=\"!isLoading\">\n  <div class=\"car-detail\" *ngIf=\"car\">\n    <ion-slides pager=\"true\">\n      <ion-slide *ngFor=\"let image of car.images\">\n        <div class=\"car-img\">\n          <img [src]=\"image\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <div class=\"description\">\n      <ion-label>\n        <h2>{{car.name}}</h2>\n        <span>{{car.category.name}}</span>\n        <span>{{car.price}} $</span>\n      </ion-label>\n      <ion-accordion-group>\n        <ion-accordion value=\"features\">\n          <ion-item lines=\"none\" slot=\"header\">\n            <ion-label>Features</ion-label>\n          </ion-item>\n          <ion-list slot=\"content\">\n            <ion-item lines=\"none\" *ngFor=\"let features of car.features\">\n              <ion-label>{{features}}</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-accordion>\n        <ion-accordion value=\"terms\">\n          <ion-item lines=\"none\" slot=\"header\">\n            <ion-label>Terms</ion-label>\n          </ion-item>\n          <ion-list slot=\"content\">\n            <ion-item lines=\"none\" *ngFor=\"let terms of car.terms\">\n              <ion-label>{{terms}}</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-accordion>\n      </ion-accordion-group>\n  \n      <ion-button mode=\"ios\" (click)=\"presentModal()\" expand=\"block\">Rent</ion-button>\n    </div>\n  </div>\n</div>\n</ion-content>\n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>");

/***/ })

}]);
//# sourceMappingURL=src_app_rent-a-car_pages_car-details_car-details_module_ts.js.map