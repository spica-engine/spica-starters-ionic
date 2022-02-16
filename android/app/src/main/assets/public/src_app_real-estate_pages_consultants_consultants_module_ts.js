(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_real-estate_pages_consultants_consultants_module_ts"],{

/***/ 51921:
/*!*****************************************************************************!*\
  !*** ./src/app/real-estate/pages/consultants/consultants-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultantsPageRoutingModule": () => (/* binding */ ConsultantsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _consultants_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultants.page */ 27812);




const routes = [
    {
        path: '',
        component: _consultants_page__WEBPACK_IMPORTED_MODULE_0__.ConsultantsPage
    }
];
let ConsultantsPageRoutingModule = class ConsultantsPageRoutingModule {
};
ConsultantsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultantsPageRoutingModule);



/***/ }),

/***/ 60680:
/*!*********************************************************************!*\
  !*** ./src/app/real-estate/pages/consultants/consultants.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultantsPageModule": () => (/* binding */ ConsultantsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _consultants_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consultants-routing.module */ 51921);
/* harmony import */ var _consultants_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultants.page */ 27812);
/* harmony import */ var _components_real_estate_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/real-estate-components.module */ 90723);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let ConsultantsPageModule = class ConsultantsPageModule {
};
ConsultantsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _consultants_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultantsPageRoutingModule,
            _components_real_estate_components_module__WEBPACK_IMPORTED_MODULE_2__.RealEstateComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_consultants_page__WEBPACK_IMPORTED_MODULE_1__.ConsultantsPage]
    })
], ConsultantsPageModule);



/***/ }),

/***/ 27812:
/*!*******************************************************************!*\
  !*** ./src/app/real-estate/pages/consultants/consultants.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultantsPage": () => (/* binding */ ConsultantsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_consultants_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consultants.page.html */ 6264);
/* harmony import */ var _consultants_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultants.page.scss */ 60016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 56010);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 82766);






let ConsultantsPage = class ConsultantsPage {
    constructor(_authService) {
        this._authService = _authService;
        this.consultants = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.consultants = yield this.getConsultants();
        });
    }
    getConsultants() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.consultant.getAll();
    }
};
ConsultantsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ConsultantsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-consultants',
        template: _raw_loader_consultants_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consultants_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultantsPage);



/***/ }),

/***/ 60016:
/*!*********************************************************************!*\
  !*** ./src/app/real-estate/pages/consultants/consultants.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25zdWx0YW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6264:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/pages/consultants/consultants.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"real-estate\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Our Consultants</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <consultant-card [data]=\"consultant\" *ngFor=\"let consultant of consultants\" [showEmail]=\"true\"></consultant-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_real-estate_pages_consultants_consultants_module_ts.js.map