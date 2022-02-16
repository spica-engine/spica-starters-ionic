(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_rent-a-car_app_module_ts"],{

/***/ 64796:
/*!**************************************************!*\
  !*** ./src/app/rent-a-car/app-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentACarRoutingModule": () => (/* binding */ RentACarRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("default-src_app_rent-a-car_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_rent-a-car_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 51600)).then((m) => m.HomePageModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("default-src_app_rent-a-car_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_rent-a-car_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 51600)).then((m) => m.HomePageModule),
    },
    {
        path: 'cars',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("src_app_rent-a-car_pages_cars_cars_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cars/cars.module */ 58919)).then(m => m.CarsPageModule)
    },
    {
        path: 'car-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_rent-a-car_pages_car-details_car-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/car-details/car-details.module */ 41074)).then(m => m.CarDetailsPageModule)
    },
    {
        path: 'car-selection',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("src_app_rent-a-car_pages_car-selection_car-selection_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/car-selection/car-selection.module */ 93872)).then(m => m.CarSelectionPageModule)
    },
    {
        path: 'extras',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("src_app_rent-a-car_pages_extras_extras_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/extras/extras.module */ 75414)).then(m => m.ExtrasPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("default-src_app_rent-a-car_services_auth_service_ts"), __webpack_require__.e("default-src_app_rent-a-car_pages_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 93448)).then(m => m.PaymentPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("default-src_app_rent-a-car_services_auth_service_ts"), __webpack_require__.e("src_app_rent-a-car_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 19199)).then(m => m.ProfilePageModule)
    },
    {
        path: 'contact',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("src_app_rent-a-car_pages_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 58741)).then(m => m.ContactPageModule)
    },
    {
        path: 'payment-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("src_app_rent-a-car_pages_payment-details_payment-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-details/payment-details.module */ 28057)).then(m => m.PaymentDetailsPageModule)
    },
    {
        path: 'user-rents',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_rent-a-car_services_bucket_ts"), __webpack_require__.e("src_app_rent-a-car_pages_user-rents_user-rents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user-rents/user-rents.module */ 71910)).then(m => m.UserRentsPageModule)
    },
];
let RentACarRoutingModule = class RentACarRoutingModule {
};
RentACarRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], RentACarRoutingModule);



/***/ }),

/***/ 93797:
/*!******************************************!*\
  !*** ./src/app/rent-a-car/app.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentACarModule": () => (/* binding */ RentACarModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 64796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let RentACarModule = class RentACarModule {
};
RentACarModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.RentACarRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [],
    })
], RentACarModule);



/***/ })

}]);
//# sourceMappingURL=src_app_rent-a-car_app_module_ts.js.map