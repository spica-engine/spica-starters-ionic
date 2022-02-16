(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_job-portal_job-portal_module_ts"],{

/***/ 80642:
/*!*********************************************************!*\
  !*** ./src/app/job-portal/job-portal-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPortalRoutingModule": () => (/* binding */ JobPortalRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full',
    },
    {
        path: 'jobs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_services_user_service_ts"), __webpack_require__.e("default-src_app_job-portal_components_job-portal-components_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/jobs/jobs.module */ 63290)).then((m) => m.JobsPageModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_services_user_service_ts"), __webpack_require__.e("default-src_app_job-portal_components_job-portal-components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 51925)).then((m) => m.ProfilePageModule),
    },
    {
        path: 'company',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_services_user_service_ts"), __webpack_require__.e("default-src_app_job-portal_pages_company_company_module_ts"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c1")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/company/company.module */ 57600)).then(m => m.CompanyPageModule)
    },
    {
        path: 'create-advert',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_services_user_service_ts"), __webpack_require__.e("default-src_app_job-portal_components_job-portal-components_module_ts"), __webpack_require__.e("src_app_job-portal_pages_create-advert_create-advert_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/create-advert/create-advert.module */ 57001)).then(m => m.CreateAdvertPageModule)
    },
];
let JobPortalRoutingModule = class JobPortalRoutingModule {
};
JobPortalRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], JobPortalRoutingModule);



/***/ }),

/***/ 81091:
/*!*************************************************!*\
  !*** ./src/app/job-portal/job-portal.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPortalModule": () => (/* binding */ JobPortalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _job_portal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-portal-routing.module */ 80642);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 45642);





let JobPortalModule = class JobPortalModule {
};
JobPortalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _job_portal_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobPortalRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.SpicaComponentsModule],
    })
], JobPortalModule);



/***/ })

}]);
//# sourceMappingURL=src_app_job-portal_job-portal_module_ts.js.map