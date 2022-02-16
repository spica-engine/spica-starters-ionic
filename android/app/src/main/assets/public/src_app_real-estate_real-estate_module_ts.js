(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_real-estate_real-estate_module_ts"],{

/***/ 86738:
/*!***********************************************************!*\
  !*** ./src/app/real-estate/real-estate-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateRoutingModule": () => (/* binding */ RealEstateRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'adversts',
        pathMatch: 'full',
    },
    {
        path: 'adverst-detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_real-estate_services_auth_service_ts"), __webpack_require__.e("default-src_app_real-estate_components_real-estate-components_module_ts"), __webpack_require__.e("src_app_real-estate_pages_adverst-detail_adverst-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/adverst-detail/adverst-detail.module */ 10241)).then(m => m.AdverstDetailPageModule)
    },
    {
        path: 'adversts',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_real-estate_services_auth_service_ts"), __webpack_require__.e("default-src_app_real-estate_components_real-estate-components_module_ts"), __webpack_require__.e("src_app_real-estate_pages_adversts_adversts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/adversts/adversts.module */ 51459)).then(m => m.AdverstsPageModule)
    },
    {
        path: 'announcement',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_real-estate_services_auth_service_ts"), __webpack_require__.e("src_app_real-estate_pages_announcement_announcement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/announcement/announcement.module */ 34120)).then(m => m.AnnouncementPageModule)
    },
    {
        path: 'consultants',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_real-estate_services_auth_service_ts"), __webpack_require__.e("default-src_app_real-estate_components_real-estate-components_module_ts"), __webpack_require__.e("src_app_real-estate_pages_consultants_consultants_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/consultants/consultants.module */ 60680)).then(m => m.ConsultantsPageModule)
    },
    {
        path: 'about',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_real-estate_services_auth_service_ts"), __webpack_require__.e("src_app_real-estate_pages_about-us_about-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about-us/about-us.module */ 48991)).then(m => m.AboutUsPageModule)
    },
];
let RealEstateRoutingModule = class RealEstateRoutingModule {
};
RealEstateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], RealEstateRoutingModule);



/***/ }),

/***/ 38278:
/*!***************************************************!*\
  !*** ./src/app/real-estate/real-estate.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateModule": () => (/* binding */ RealEstateModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./real-estate-routing.module */ 86738);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 45642);





let RealEstateModule = class RealEstateModule {
};
RealEstateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealEstateRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.SpicaComponentsModule],
    })
], RealEstateModule);



/***/ })

}]);
//# sourceMappingURL=src_app_real-estate_real-estate_module_ts.js.map