(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_job-portal_pages_saved-jobs_saved-jobs_module_ts"],{

/***/ 22413:
/*!**************************************************************************!*\
  !*** ./src/app/job-portal/pages/saved-jobs/saved-jobs-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedJobsPageRoutingModule": () => (/* binding */ SavedJobsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _saved_jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-jobs.page */ 63310);




const routes = [
    {
        path: '',
        component: _saved_jobs_page__WEBPACK_IMPORTED_MODULE_0__.SavedJobsPage
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
let SavedJobsPageRoutingModule = class SavedJobsPageRoutingModule {
};
SavedJobsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SavedJobsPageRoutingModule);



/***/ }),

/***/ 27666:
/*!******************************************************************!*\
  !*** ./src/app/job-portal/pages/saved-jobs/saved-jobs.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedJobsPageModule": () => (/* binding */ SavedJobsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _saved_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-jobs-routing.module */ 22413);
/* harmony import */ var _saved_jobs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-jobs.page */ 63310);
/* harmony import */ var _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-portal-components.module */ 83234);








let SavedJobsPageModule = class SavedJobsPageModule {
};
SavedJobsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _saved_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.SavedJobsPageRoutingModule,
            _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule
        ],
        declarations: [_saved_jobs_page__WEBPACK_IMPORTED_MODULE_1__.SavedJobsPage]
    })
], SavedJobsPageModule);



/***/ }),

/***/ 63310:
/*!****************************************************************!*\
  !*** ./src/app/job-portal/pages/saved-jobs/saved-jobs.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedJobsPage": () => (/* binding */ SavedJobsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_saved_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./saved-jobs.page.html */ 97862);
/* harmony import */ var _saved_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-jobs.page.scss */ 97796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 43421);






let SavedJobsPage = class SavedJobsPage {
    constructor(_userService) {
        this._userService = _userService;
        this.discardedJob = '';
        this.loading = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.get(this._userService.me._id, {
                queryParams: { relation: 'saved_jobs.company' },
            });
            this.loading = false;
        });
    }
    savedEmitter(job) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.discardedJob = job._id;
            setTimeout(() => {
                this.me.saved_jobs = this.me.saved_jobs.filter((item) => item._id != job._id);
            }, 400);
        });
    }
};
SavedJobsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
SavedJobsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-saved-jobs',
        template: _raw_loader_saved_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_saved_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SavedJobsPage);



/***/ }),

/***/ 97796:
/*!******************************************************************!*\
  !*** ./src/app/job-portal/pages/saved-jobs/saved-jobs.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .discarded ::ng-deep ion-card {\n  transform: translateX(200px);\n  opacity: 0.5;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLWpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFGUiIsImZpbGUiOiJzYXZlZC1qb2JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmRpc2NhcmRlZCB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 97862:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/saved-jobs/saved-jobs.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Saved Jobs</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-container *ngFor=\"let job of me?.saved_jobs\">\n    <job-card\n      [class.discarded]=\"discardedJob==job['_id']\"\n      [job]=\"job\"\n      (clickSaved)=\"savedEmitter($event)\"\n    ></job-card>\n  </ng-container>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_job-portal_pages_saved-jobs_saved-jobs_module_ts.js.map