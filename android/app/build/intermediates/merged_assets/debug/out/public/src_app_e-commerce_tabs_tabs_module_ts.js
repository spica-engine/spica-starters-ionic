(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_tabs_tabs_module_ts"],{

/***/ 67190:
/*!********************************************************!*\
  !*** ./src/app/e-commerce/tabs/tabs-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 42646);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_e-commerce_services_auth_service_ts"), __webpack_require__.e("src_app_e-commerce_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/home.module */ 28731)).then(m => m.HomePageModule)
            },
            {
                path: 'category',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_e-commerce_services_auth_service_ts"), __webpack_require__.e("src_app_e-commerce_pages_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/category/category.module */ 52881)).then(m => m.CategoryPageModule)
            },
            {
                path: 'basket',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_e-commerce_services_auth_service_ts"), __webpack_require__.e("src_app_e-commerce_pages_basket_basket_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/basket/basket.module */ 33362)).then(m => m.BasketPageModule)
            },
            {
                path: 'favorite',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_e-commerce_services_auth_service_ts"), __webpack_require__.e("src_app_e-commerce_pages_favorite_favorite_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/favorite/favorite.module */ 10036)).then(m => m.FavoritePageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_e-commerce_services_auth_service_ts"), __webpack_require__.e("src_app_e-commerce_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/profile/profile.module */ 41231)).then(m => m.ProfilePageModule)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 29523:
/*!************************************************!*\
  !*** ./src/app/e-commerce/tabs/tabs.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 67190);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 42646);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 42646:
/*!**********************************************!*\
  !*** ./src/app/e-commerce/tabs/tabs.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 5562);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 62745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 62745:
/*!************************************************!*\
  !*** ./src/app/e-commerce/tabs/tabs.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5562:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/tabs/tabs.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"home\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"category\">\n        <ion-icon name=\"apps\"></ion-icon>\n        <ion-label>Category</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"basket\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-label>Basket</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"favorite\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-label>Favorite</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"profile\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_tabs_tabs_module_ts.js.map