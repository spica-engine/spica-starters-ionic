(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_job-portal_pages_my-companies_my-companies_module_ts"],{

/***/ 98679:
/*!******************************************************************************!*\
  !*** ./src/app/job-portal/pages/my-companies/my-companies-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCompaniesPageRoutingModule": () => (/* binding */ MyCompaniesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_companies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-companies.page */ 4547);




const routes = [
    {
        path: '',
        children: [
            { path: '', component: _my_companies_page__WEBPACK_IMPORTED_MODULE_0__.MyCompaniesPage },
            {
                path: ':id',
                children: [
                    { path: '', component: _my_companies_page__WEBPACK_IMPORTED_MODULE_0__.MyCompaniesPage },
                    {
                        path: 'profile',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 51925)).then((m) => m.ProfilePageModule),
                    },
                ],
            },
            {
                path: 'company',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_job-portal_pages_company_company_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../company/company.module */ 57600)).then((m) => m.CompanyPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 51925)).then((m) => m.ProfilePageModule),
            },
        ],
    },
];
let MyCompaniesPageRoutingModule = class MyCompaniesPageRoutingModule {
};
MyCompaniesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyCompaniesPageRoutingModule);



/***/ }),

/***/ 75305:
/*!**********************************************************************!*\
  !*** ./src/app/job-portal/pages/my-companies/my-companies.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCompaniesPageModule": () => (/* binding */ MyCompaniesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _my_companies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-companies-routing.module */ 98679);
/* harmony import */ var _my_companies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-companies.page */ 4547);
/* harmony import */ var _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-portal-components.module */ 83234);








let MyCompaniesPageModule = class MyCompaniesPageModule {
};
MyCompaniesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_companies_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyCompaniesPageRoutingModule,
            _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule
        ],
        declarations: [_my_companies_page__WEBPACK_IMPORTED_MODULE_1__.MyCompaniesPage]
    })
], MyCompaniesPageModule);



/***/ }),

/***/ 4547:
/*!********************************************************************!*\
  !*** ./src/app/job-portal/pages/my-companies/my-companies.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCompaniesPage": () => (/* binding */ MyCompaniesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_companies_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-companies.page.html */ 19167);
/* harmony import */ var _my_companies_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-companies.page.scss */ 9499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_job_applies_job_applies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-applies/job-applies.component */ 67367);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 43421);









let MyCompaniesPage = class MyCompaniesPage {
    constructor(_userService, _route, _modalController, _router) {
        this._userService = _userService;
        this._route = _route;
        this._modalController = _modalController;
        this._router = _router;
        this.companies = [];
        this.loading = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let companyId = yield this._route.snapshot.paramMap.get('id');
            if (companyId) {
                this.company = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.company.get(companyId, {
                    queryParams: { relation: true },
                });
                this.jobs = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.job_advert.getAll({
                    queryParams: { filter: { company: companyId }, relation: true },
                });
            }
            this.loading = false;
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this._userService.me.companies &&
                this._userService.me.companies.length > 0)
                this.companies = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.company.getAll({
                    queryParams: {
                        filter: {
                            _id: { $in: this._userService.me.companies.map((item) => item) },
                        },
                    },
                });
        });
    }
    clickedJob(job) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_job_applies_job_applies_component__WEBPACK_IMPORTED_MODULE_2__.JobAppliesComponent,
                cssClass: 'my-custom-class',
                componentProps: { job },
            });
            modal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log('res :', res);
                if (res.data) {
                    if (res.data.user) {
                        this._router.navigate(['profile/' + res.data.user._id], {
                            relativeTo: this._route,
                        });
                    }
                }
            }));
            return yield modal.present();
        });
    }
};
MyCompaniesPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
MyCompaniesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-my-companies',
        template: _raw_loader_my_companies_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_companies_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyCompaniesPage);



/***/ }),

/***/ 9499:
/*!**********************************************************************!*\
  !*** ./src/app/job-portal/pages/my-companies/my-companies.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  padding-bottom: 10px;\n  margin-top: 15px;\n  padding-left: 10px;\n  font-size: 18px;\n}\n:host ion-list ion-item {\n  padding-left: 20px;\n}\n:host ion-list ion-item.new-one {\n  margin-top: 20px;\n}\n:host .cover-img {\n  height: 100px;\n  box-shadow: 22px 2px 32px -12px rgba(0, 0, 0, 0.43);\n}\n:host .cover-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host .broken-img {\n  object-fit: contain !important;\n}\n:host .company-infos {\n  margin: 10px;\n}\n:host .company-infos ion-item {\n  margin-top: 20px;\n}\n:host .company-infos a {\n  font-size: 12px;\n  margin: 10px 20px;\n}\n:host .company-infos .address {\n  opacity: 0.6;\n  font-size: 11px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: 10px;\n  margin: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBhbmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0FBRVI7QUFHRTtFQUNFLGFBQUE7RUFDQSxtREFBQTtBQURKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQU47QUFHRTtFQUNFLDhCQUFBO0FBREo7QUFHRTtFQUNFLFlBQUE7QUFESjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47QUFFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQU4iLCJmaWxlIjoibXktY29tcGFuaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBpb24taXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAmLm5ldy1vbmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb3Zlci1pbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm94LXNoYWRvdzogMjJweCAycHggMzJweCAtMTJweCByZ2IoMCAwIDAgLyA0MyUpO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuICAuYnJva2VuLWltZyB7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xuICB9XG4gIC5jb21wYW55LWluZm9zIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICB9XG4gICAgLmFkZHJlc3Mge1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgbWFyZ2luOiA1cHggMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 19167:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/my-companies/my-companies.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{company ? company.title :'Company List'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngIf=\"!company && !loading\">\n    <ion-item\n      *ngFor=\"let company of companies\"\n      [detail]=\"true\"\n      [routerLink]=\"[company._id]\"\n    >\n      <ion-thumbnail slot=\"start\">\n        <img\n          [src]=\"company.logo || '../../../../assets/job-portal/broken-image.png'\"\n        />\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{company['title']}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item\n      [routerLink]=\"['company/add']\"\n      class=\"new-one\"\n      [detail]=\"false\"\n      lines=\"none\"\n    >\n      <ion-icon slot=\"start\" name=\"add\"> </ion-icon>\n      <ion-label>\n        <h2>Add New One</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <div *ngIf=\"company && !loading\">\n    <div class=\"cover-img\">\n      <img\n        [class.broken-img]=\"!company.cover_photo\"\n        [src]=\"company.cover_photo || '../../../../assets/job-portal/broken-image.png'\"\n        alt=\"\"\n      />\n    </div>\n    <div class=\"company-infos\">\n      <ion-item [detail]=\"false\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img\n            [src]=\"company['logo'] || '../../../../assets/job-portal/broken-image.png'\"\n            alt=\"\"\n          />\n        </ion-avatar>\n        <h3>{{company['title']}}</h3>\n      </ion-item>\n      <a [href]=\"company.web_site\" target=\"_blank\" rel=\"noopener noreferrer\"\n        >{{company.web_site}}\n      </a>\n      <div class=\"address\">\n        {{company['address']['city']}}/{{company['address']['country']}}\n      </div>\n      <h5>My Adverts</h5>\n    </div>\n  </div>\n  <job-card\n    *ngFor=\"let item of jobs\"\n    [job]=\"item\"\n    [routable]=\"false\"\n    (clickJob)=\"clickedJob($event)\"\n  ></job-card>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_job-portal_pages_my-companies_my-companies_module_ts.js.map