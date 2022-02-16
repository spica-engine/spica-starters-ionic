(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_job-portal_pages_create-advert_create-advert_module_ts"],{

/***/ 67112:
/*!********************************************************************************!*\
  !*** ./src/app/job-portal/pages/create-advert/create-advert-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAdvertPageRoutingModule": () => (/* binding */ CreateAdvertPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_advert_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-advert.page */ 21377);




const routes = [
    {
        path: '',
        children: [
            { path: '', component: _create_advert_page__WEBPACK_IMPORTED_MODULE_0__.CreateAdvertPage },
            {
                path: 'company',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_pages_company_company_module_ts"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c3")]).then(__webpack_require__.bind(__webpack_require__, /*! ../company/company.module */ 57600)).then((m) => m.CompanyPageModule),
            },
        ],
    },
];
let CreateAdvertPageRoutingModule = class CreateAdvertPageRoutingModule {
};
CreateAdvertPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateAdvertPageRoutingModule);



/***/ }),

/***/ 57001:
/*!************************************************************************!*\
  !*** ./src/app/job-portal/pages/create-advert/create-advert.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAdvertPageModule": () => (/* binding */ CreateAdvertPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _create_advert_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-advert-routing.module */ 67112);
/* harmony import */ var _create_advert_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-advert.page */ 21377);
/* harmony import */ var _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-portal-components.module */ 83234);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let CreateAdvertPageModule = class CreateAdvertPageModule {
};
CreateAdvertPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _create_advert_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateAdvertPageRoutingModule,
            _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_create_advert_page__WEBPACK_IMPORTED_MODULE_1__.CreateAdvertPage]
    })
], CreateAdvertPageModule);



/***/ }),

/***/ 21377:
/*!**********************************************************************!*\
  !*** ./src/app/job-portal/pages/create-advert/create-advert.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAdvertPage": () => (/* binding */ CreateAdvertPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_advert_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-advert.page.html */ 87688);
/* harmony import */ var _create_advert_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-advert.page.scss */ 85474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_create_advert_create_advert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/create-advert/create-advert.component */ 87116);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 43421);








let CreateAdvertPage = class CreateAdvertPage {
    constructor(_userService, _modalController) {
        this._userService = _userService;
        this._modalController = _modalController;
        this.companies = [];
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_3__.initialize)({ identity: localStorage.getItem('job-portal_spica_token') });
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
    openAdvertModal(company) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_create_advert_create_advert_component__WEBPACK_IMPORTED_MODULE_2__.CreateAdvertComponent,
                cssClass: 'my-custom-class',
                componentProps: { company },
            });
            modal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res.data) {
                }
            }));
            return yield modal.present();
        });
    }
};
CreateAdvertPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
CreateAdvertPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-advert',
        template: _raw_loader_create_advert_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_advert_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateAdvertPage);



/***/ }),

/***/ 85474:
/*!************************************************************************!*\
  !*** ./src/app/job-portal/pages/create-advert/create-advert.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list-header {\n  padding-bottom: 10px;\n  padding-left: 10px;\n  font-size: 18px;\n}\n:host ion-item {\n  padding-left: 20px;\n}\n:host ion-item.none-item {\n  font-size: 14px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hZHZlcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDTiIsImZpbGUiOiJjcmVhdGUtYWR2ZXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGlvbi1pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgJi5ub25lLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 87688:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/create-advert/create-advert.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"job-portal\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Company List</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header> Select Company </ion-list-header>\n    <ion-item lines=\"none\" class=\"none-item\" *ngIf=\"companies.length==0\">\n      You do not have a company to create a Job Advert. Please create company from your profile.\n    </ion-item>\n    <ion-item\n      *ngFor=\"let company of companies\"\n      [detail]=\"true\"\n      (click)=\"openAdvertModal(company._id)\"\n    >\n      <!-- <ion-checkbox slot=\"start\"></ion-checkbox> -->\n      <ion-thumbnail slot=\"start\">\n        <img\n          [src]=\"company.logo || '../../../../assets/job-portal/broken-image.png'\"\n        />\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{company['title']}}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_job-portal_pages_create-advert_create-advert_module_ts.js.map