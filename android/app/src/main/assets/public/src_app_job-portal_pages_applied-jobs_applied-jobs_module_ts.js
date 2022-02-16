(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_job-portal_pages_applied-jobs_applied-jobs_module_ts"],{

/***/ 22190:
/*!******************************************************************************!*\
  !*** ./src/app/job-portal/pages/applied-jobs/applied-jobs-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedJobsPageRoutingModule": () => (/* binding */ AppliedJobsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _applied_jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applied-jobs.page */ 58980);




const routes = [
    {
        path: '',
        component: _applied_jobs_page__WEBPACK_IMPORTED_MODULE_0__.AppliedJobsPage,
    },
    {
        path: 'jobs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../jobs/jobs.module */ 63290)).then((m) => m.JobsPageModule),
    },
    {
        path: 'company',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_job-portal_pages_company_company_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../company/company.module */ 57600)).then((m) => m.CompanyPageModule),
    },
];
let AppliedJobsPageRoutingModule = class AppliedJobsPageRoutingModule {
};
AppliedJobsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppliedJobsPageRoutingModule);



/***/ }),

/***/ 88083:
/*!**********************************************************************!*\
  !*** ./src/app/job-portal/pages/applied-jobs/applied-jobs.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedJobsPageModule": () => (/* binding */ AppliedJobsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _applied_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applied-jobs-routing.module */ 22190);
/* harmony import */ var _applied_jobs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applied-jobs.page */ 58980);
/* harmony import */ var _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-portal-components.module */ 83234);








let AppliedJobsPageModule = class AppliedJobsPageModule {
};
AppliedJobsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _applied_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppliedJobsPageRoutingModule,
            _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule
        ],
        declarations: [_applied_jobs_page__WEBPACK_IMPORTED_MODULE_1__.AppliedJobsPage]
    })
], AppliedJobsPageModule);



/***/ }),

/***/ 58980:
/*!********************************************************************!*\
  !*** ./src/app/job-portal/pages/applied-jobs/applied-jobs.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppliedJobsPage": () => (/* binding */ AppliedJobsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_applied_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./applied-jobs.page.html */ 83483);
/* harmony import */ var _applied_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applied-jobs.page.scss */ 52680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 43421);






let AppliedJobsPage = class AppliedJobsPage {
    constructor(_userService) {
        this._userService = _userService;
        this.loading = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.get(this._userService.me._id, {
                queryParams: { relation: 'applied_jobs.company' },
            });
            this.loading = false;
        });
    }
};
AppliedJobsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
AppliedJobsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-applied-jobs',
        template: _raw_loader_applied_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_applied_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppliedJobsPage);



/***/ }),

/***/ 52680:
/*!**********************************************************************!*\
  !*** ./src/app/job-portal/pages/applied-jobs/applied-jobs.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWVkLWpvYnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 83483:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/applied-jobs/applied-jobs.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Applied Jobs</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-container *ngFor=\"let job of me?.applied_jobs\">\n    <job-card [job]=\"job\"></job-card>\n  </ng-container>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_job-portal_pages_applied-jobs_applied-jobs_module_ts.js.map