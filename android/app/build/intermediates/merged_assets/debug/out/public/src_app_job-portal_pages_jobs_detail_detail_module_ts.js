(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_job-portal_pages_jobs_detail_detail_module_ts"],{

/***/ 53129:
/*!***********************************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/detail/detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageRoutingModule": () => (/* binding */ DetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page */ 91151);




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_0__.DetailPage
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ 1538:
/*!***************************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/detail/detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageModule": () => (/* binding */ DetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 53129);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page */ 91151);
/* harmony import */ var src_app_job_portal_components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/job-portal/components/job-portal-components.module */ 83234);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let DetailPageModule = class DetailPageModule {
};
DetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule,
            src_app_job_portal_components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
    })
], DetailPageModule);



/***/ }),

/***/ 91151:
/*!*************************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/detail/detail.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPage": () => (/* binding */ DetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detail.page.html */ 76485);
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page.scss */ 66716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/job-portal/services/bucket */ 58652);
/* harmony import */ var src_app_job_portal_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/job-portal/services/user.service */ 43421);







let DetailPage = class DetailPage {
    constructor(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let jobId = yield this._route.snapshot.paramMap.get('id');
            this.job = yield src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__.job_advert.get(jobId, { queryParams: { relation: true } });
            this.me = yield this._userService.getActiveUser();
            this.selectedCriterias = Object.keys(this.job.criterias);
        });
    }
    apply() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.me.applied_jobs = this.me.applied_jobs ? this.me.applied_jobs : [];
            this.me.applied_jobs.push(this.job._id);
            yield src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.patch({
                _id: this.me._id,
                applied_jobs: this.me.applied_jobs,
            });
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_job_portal_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
DetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailPage);



/***/ }),

/***/ 66716:
/*!***************************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/detail/detail.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .metadata {\n  margin: 20px;\n}\n:host .metadata ion-item {\n  margin: 10px 0;\n}\n:host .metadata ion-item h3 {\n  margin: 0;\n}\n:host .metadata ion-item ion-button {\n  height: 30px;\n  width: 70px;\n}\n:host .metadata .address {\n  opacity: 0.6;\n  font-size: 11px;\n}\n:host .metadata .job-info {\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 10px;\n}\n:host .metadata .criterias {\n  padding-top: 5px;\n  margin-top: 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n:host .metadata .criterias h2 {\n  padding-bottom: 10px;\n}\n:host .metadata .criterias .section {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding-left: 10px;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFXRSxZQUFBO0FBVko7QUFBSTtFQUNFLGNBQUE7QUFFTjtBQURNO0VBQ0UsU0FBQTtBQUdSO0FBRE07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUdSO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQ0k7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUNOO0FBQU07RUFDRSxvQkFBQTtBQUVSO0FBQU07RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFFUiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWV0YWRhdGEge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC5hZGRyZXNzIHtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmpvYi1pbmZvIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuY3JpdGVyaWFzIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGgyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAuc2VjdGlvbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 76485:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/jobs/detail/detail.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"job\" class=\"metadata\">\n    <ion-item [detail]=\"false\" lines=\"none\">\n      <ion-avatar [routerLink]=\"['company',job.company['_id']]\" slot=\"start\">\n        <img\n          [src]=\"job.company['logo'] || '../../../../assets/job-portal/broken-image.png'\"\n          alt=\"\"\n        />\n      </ion-avatar>\n      <h3 [routerLink]=\"['company',job.company['_id']]\">\n        {{job.company['title']}}\n      </h3>\n      <ion-button *ngIf=\"!me?.companies?.includes(job.company['_id'])\"\n        [disabled]=\"me?.applied_jobs?.includes(job._id)\"\n        slot=\"end\"\n        (click)=\"apply()\"\n        >{{me?.applied_jobs?.includes(job._id) ? 'Applied' : 'Apply'}}\n      </ion-button>\n    </ion-item>\n    <div class=\"address\">\n      {{job.company['address']['city']}}/{{job.company['address']['country']}}\n    </div>\n    <div class=\"job-info\">\n      <h5>{{job.header}}</h5>\n      <div [innerHTML]=\"job.description\"></div>\n    </div>\n    <div class=\"criterias\">\n      <h2>Criterias</h2>\n      <div class=\"section\" *ngFor=\"let criter of selectedCriterias\">\n        <h5>{{criter | revokedUnderline |titlecase}}</h5>\n        <ion-chip *ngFor=\"let item of job.criterias[criter]\">\n          <ion-label color=\"primary\"\n            >{{item |revokedUnderline|titlecase}}</ion-label\n          >\n        </ion-chip>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_job-portal_pages_jobs_detail_detail_module_ts.js.map