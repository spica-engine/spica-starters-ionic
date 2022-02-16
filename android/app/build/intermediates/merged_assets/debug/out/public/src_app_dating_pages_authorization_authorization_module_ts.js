(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_dating_pages_authorization_authorization_module_ts"],{

/***/ 47558:
/*!****************************************************************************!*\
  !*** ./src/app/dating/pages/authorization/authorization-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPageRoutingModule": () => (/* binding */ AuthorizationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _authorization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization.page */ 69514);




const routes = [
    {
        path: '',
        component: _authorization_page__WEBPACK_IMPORTED_MODULE_0__.AuthorizationPage
    }
];
let AuthorizationPageRoutingModule = class AuthorizationPageRoutingModule {
};
AuthorizationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthorizationPageRoutingModule);



/***/ }),

/***/ 2934:
/*!********************************************************************!*\
  !*** ./src/app/dating/pages/authorization/authorization.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPageModule": () => (/* binding */ AuthorizationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization-routing.module */ 47558);
/* harmony import */ var _authorization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.page */ 69514);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AuthorizationPageModule = class AuthorizationPageModule {
};
AuthorizationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizationPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_authorization_page__WEBPACK_IMPORTED_MODULE_1__.AuthorizationPage]
    })
], AuthorizationPageModule);



/***/ }),

/***/ 69514:
/*!******************************************************************!*\
  !*** ./src/app/dating/pages/authorization/authorization.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPage": () => (/* binding */ AuthorizationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./authorization.page.html */ 3438);
/* harmony import */ var _authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.page.scss */ 91587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 83954);







let AuthorizationPage = class AuthorizationPage {
    constructor(_authService, _router, _commonService) {
        this._authService = _authService;
        this._router = _router;
        this._commonService = _commonService;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    login(loginData) {
        this.isLoading = true;
        this._authService
            .login(loginData.email, loginData.password)
            .toPromise()
            .then((res) => {
            this.isLoading = false;
            this.nvigateToHome();
        })
            .catch((err) => {
            this.isLoading = false;
            this._commonService.presentToast(err.message, 1500);
        });
    }
    register(registerData) {
        this.isLoading = true;
        this._authService
            .register(Object.assign({}, registerData))
            .then((res) => {
            this._commonService.presentToast(res['message'], 1500);
            this.login({
                email: registerData.email,
                password: registerData.password,
            });
        })
            .catch((err) => {
            this.isLoading = false;
            this._commonService.presentToast(err.error.message, 1500);
        });
    }
    nvigateToHome() {
        this._router.navigate(['/dating/tabs/profile']);
    }
};
AuthorizationPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
AuthorizationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-authorization',
        template: _raw_loader_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthorizationPage);



/***/ }),

/***/ 91587:
/*!********************************************************************!*\
  !*** ./src/app/dating/pages/authorization/authorization.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpemF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3438:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/pages/authorization/authorization.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <spica-authorization\n    *ngIf=\"!isLoading\"\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n  ></spica-authorization>\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dating_pages_authorization_authorization_module_ts.js.map