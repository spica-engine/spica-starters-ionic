(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_rent-a-car_pages_cars_cars_module_ts"],{

/***/ 26125:
/*!**************************************************************!*\
  !*** ./src/app/rent-a-car/pages/cars/cars-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsPageRoutingModule": () => (/* binding */ CarsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cars_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars.page */ 87624);




const routes = [
    {
        path: '',
        children: [
            {
                path: '', component: _cars_page__WEBPACK_IMPORTED_MODULE_0__.CarsPage
            },
            {
                path: ':id', component: _cars_page__WEBPACK_IMPORTED_MODULE_0__.CarsPage
            }
        ]
    }
];
let CarsPageRoutingModule = class CarsPageRoutingModule {
};
CarsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarsPageRoutingModule);



/***/ }),

/***/ 58919:
/*!******************************************************!*\
  !*** ./src/app/rent-a-car/pages/cars/cars.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsPageModule": () => (/* binding */ CarsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _cars_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars-routing.module */ 26125);
/* harmony import */ var _cars_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars.page */ 87624);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CarsPageModule = class CarsPageModule {
};
CarsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cars_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_cars_page__WEBPACK_IMPORTED_MODULE_1__.CarsPage]
    })
], CarsPageModule);



/***/ }),

/***/ 87624:
/*!****************************************************!*\
  !*** ./src/app/rent-a-car/pages/cars/cars.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsPage": () => (/* binding */ CarsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cars_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cars.page.html */ 4650);
/* harmony import */ var _cars_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars.page.scss */ 54831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 94596);






let CarsPage = class CarsPage {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
        this.cars = [];
        this.option = {
            speed: 500,
            autoplay: true,
        };
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: "fskk1akvi1elv0" });
    }
    ngOnInit() {
        this.catId = this._route.snapshot.params.id;
        this.getCars();
    }
    getCars() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.cars.getAll({ queryParams: { relation: true, filter: { category: this.catId } } }).then((res) => {
            this.cars = res;
            this.isLoading = false;
        });
    }
    onChange(value) {
        if (value == "lowest_price") {
            this.cars.sort((a, b) => {
                return a.price - b.price;
            });
        }
        else if (value == "highest_price") {
            this.cars.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (value == "all") {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.cars.getAll({ queryParams: { relation: true, filter: { category: this.catId } }, }).then((res) => {
                this.cars = res;
            });
        }
    }
    navigateCar(carId) {
        this._router.navigate(['/rent-a-car/car-details/', carId]);
    }
    searchCar(terms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.cars = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.cars.getAll({
                queryParams: {
                    filter: { name: { $regex: terms, $options: 'i' }, category: this.catId },
                    limit: 7,
                },
            });
        });
    }
};
CarsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CarsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cars',
        template: _raw_loader_cars_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cars_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarsPage);



/***/ }),

/***/ 54831:
/*!******************************************************!*\
  !*** ./src/app/rent-a-car/pages/cars/cars.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .cars {\n  width: 100%;\n}\n:host ion-content .cars ion-label {\n  margin: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #b4b4b482;\n}\n:host ion-content .cars ion-label span {\n  display: flex;\n  align-items: center;\n  font-size: 1.1rem;\n}\n:host ion-content ion-card {\n  --background: #f0f0f0;\n}\n:host ion-content ion-card ion-card-content {\n  padding: 0 0 0 20px;\n}\n:host ion-content ion-card ion-card-content span {\n  color: gray;\n  font-size: 0.8rem;\n}\n:host ion-content ion-card ion-card-content h2 {\n  font-size: 1.5rem;\n}\n:host ion-content ion-card ion-card-content ion-button {\n  float: right;\n  margin: 0;\n  --border-radius: 15px 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksV0FBQTtBQURaO0FBRVk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUFBaEI7QUFDZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNwQjtBQUdRO0VBQ0kscUJBQUE7QUFEWjtBQUVZO0VBQ0ksbUJBQUE7QUFBaEI7QUFDZ0I7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSxpQkFBQTtBQUNwQjtBQUVnQjtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFBcEIiLCJmaWxlIjoiY2Fycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBpb24tY29udGVudHtcbiAgICAgICAgLmNhcnMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjRiNGI0ODI7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4IDAgMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 4650:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/pages/cars/cars.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <spica-menu-bar *ngIf=\"!isLoading\" project=\"rent-a-car\"></spica-menu-bar>\n  <ion-header *ngIf=\"!isLoading\">\n    <ion-toolbar mode=\"ios\">\n      <ion-title>Cars</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content >\n  <div *ngIf=\"!isLoading\">\n    <ion-searchbar mode=\"ios\" (ionChange)=\"searchCar($event.target['value'])\"></ion-searchbar>\n    <div class=\"cars\">\n      <ion-label>\n        <span>\n          <ion-icon name=\"car-sport-outline\"></ion-icon>\n          &nbsp;Cars\n        </span>\n        <ion-item lines=\"none\">\n          <span>\n            <ion-icon name=\"arrow-down-outline\"></ion-icon>\n            &nbsp;Sort by&nbsp;\n          </span>\n          <ion-select value=\"all\" (ionChange)=\"onChange($event.target['value'])\">\n            <ion-select-option value=\"all\">All</ion-select-option>\n            <ion-select-option value=\"lowest_price\">Lowest Price</ion-select-option>\n            <ion-select-option value=\"highest_price\">Highest Price</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-label>\n  \n      <ion-card mode=\"ios\" *ngFor=\"let car of cars\">\n        <ion-card-header>\n          <img [src]=\"car?.images[0]\">\n        </ion-card-header>\n        <ion-card-content>\n          <span>{{car?.category.name}}</span>\n          <h2>{{car?.name}}</h2>\n          <p>{{car?.price}} USD</p>\n          <ion-button (click)=\"navigateCar(car?._id)\">More&nbsp;<ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n   \n  </ion-content>\n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_rent-a-car_pages_cars_cars_module_ts.js.map