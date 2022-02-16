(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_real-estate_pages_about-us_about-us_module_ts"],{

/***/ 65917:
/*!***********************************************************************!*\
  !*** ./src/app/real-estate/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 35398);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 48991:
/*!***************************************************************!*\
  !*** ./src/app/real-estate/pages/about-us/about-us.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 65917);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 35398);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage]
    })
], AboutUsPageModule);



/***/ }),

/***/ 35398:
/*!*************************************************************!*\
  !*** ./src/app/real-estate/pages/about-us/about-us.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about-us.page.html */ 80109);
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss */ 27794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 56010);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 82766);






let AboutUsPage = class AboutUsPage {
    constructor(_authService) {
        this._authService = _authService;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.about = yield this.getAboutInfo();
        });
    }
    getAboutInfo() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.about_us.getAll().then((res) => {
            return res[0] || null;
        });
    }
};
AboutUsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutUsPage);



/***/ }),

/***/ 27794:
/*!***************************************************************!*\
  !*** ./src/app/real-estate/pages/about-us/about-us.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host p {\n  padding: 10px;\n}\n:host ion-card {\n  margin-top: 15px;\n}\n:host ion-card h6 {\n  background: #f0f0f0;\n  margin: 0;\n  padding: 15px;\n}\n:host ion-card .content {\n  padding: 15px;\n}\n:host ion-card .content ion-label {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n:host ion-card .content ion-label ion-icon {\n  margin-right: 5px;\n}\n:host ion-card .content spica-map-iframe ::ng-deep iframe {\n  margin-top: 10px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSjtBQUVFO0VBQ0ksZ0JBQUE7QUFBTjtBQUNJO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUNOO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFBTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLGlCQUFBO0FBR1Y7QUFFWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFBaEIiLCJmaWxlIjoiYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIGlvbi1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgaDYge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3BpY2EtbWFwLWlmcmFtZXtcbiAgICAgICAgICA6Om5nLWRlZXB7XG4gICAgICAgICAgICBpZnJhbWV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 80109:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"real-estate\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>About Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"about\">\n    <p>{{about.about}}</p>\n\n    <ion-card *ngFor=\"let office of about.offices\">\n      <h6>{{office.title}}</h6>\n      <div class=\"content\">\n        <ion-label>\n          <ion-icon name=\"call-outline\"></ion-icon>\n          <ion-text>{{office.phone}}</ion-text>\n        </ion-label>\n        <ion-label>\n          <ion-icon name=\"mail-outline\"></ion-icon>\n          <ion-text>{{office.email}}</ion-text>\n        </ion-label>\n        <spica-map-iframe [data]=\"office.location\"></spica-map-iframe>\n      </div>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_real-estate_pages_about-us_about-us_module_ts.js.map