(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_dating_dating_module_ts"],{

/***/ 78247:
/*!*************************************************!*\
  !*** ./src/app/dating/dating-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatingRoutingModule": () => (/* binding */ DatingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_dating_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dating_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 45032)).then(m => m.TabsPageModule)
    },
    {
        path: 'user-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_dating_components_dating-components_module_ts"), __webpack_require__.e("default-src_app_dating_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dating_pages_user-details_user-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user-details/user-details.module */ 30062)).then(m => m.UserDetailsPageModule)
    },
    {
        path: 'chat-single',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_dating_components_dating-components_module_ts"), __webpack_require__.e("default-src_app_dating_services_auth_service_ts"), __webpack_require__.e("default-src_app_dating_pages_chat-single_chat-single_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat-single/chat-single.module */ 35547)).then(m => m.ChatSinglePageModule)
    },
    {
        path: 'authorization',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_dating_services_auth_service_ts"), __webpack_require__.e("src_app_dating_pages_authorization_authorization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/authorization/authorization.module */ 2934)).then(m => m.AuthorizationPageModule)
    },
];
let DatingRoutingModule = class DatingRoutingModule {
};
DatingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], DatingRoutingModule);



/***/ }),

/***/ 80305:
/*!*****************************************!*\
  !*** ./src/app/dating/dating.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatingModule": () => (/* binding */ DatingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _dating_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dating-routing.module */ 78247);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let DatingModule = class DatingModule {
};
DatingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dating_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatingRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [],
    })
], DatingModule);



/***/ })

}]);
//# sourceMappingURL=src_app_dating_dating_module_ts.js.map