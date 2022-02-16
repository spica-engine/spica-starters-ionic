(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_store-listing_app_module_ts"],{

/***/ 65983:
/*!*****************************************************!*\
  !*** ./src/app/store-listing/app-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreListingRoutingModule": () => (/* binding */ StoreListingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_store-listing_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 1391)).then(m => m.HomePageModule)
    },
    {
        path: 'store-detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_store-listing_pages_store-detail_store-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/store-detail/store-detail.module */ 974)).then(m => m.StoreDetailPageModule)
    },
    {
        path: 'create-store',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_store-listing_pages_create-store_create-store_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/create-store/create-store.module */ 7032)).then(m => m.CreateStorePageModule)
    },
    // {
    //   path: '',
    //   redirectTo: 'tabs',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'tabs',
    //   loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
    // },
    // {
    //   path: 'profile',
    //   loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
    // },
];
let StoreListingRoutingModule = class StoreListingRoutingModule {
};
StoreListingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], StoreListingRoutingModule);



/***/ }),

/***/ 60646:
/*!*********************************************!*\
  !*** ./src/app/store-listing/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreListingModule": () => (/* binding */ StoreListingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 65983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let StoreListingModule = class StoreListingModule {
};
StoreListingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreListingRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [],
    })
], StoreListingModule);



/***/ })

}]);
//# sourceMappingURL=src_app_store-listing_app_module_ts.js.map