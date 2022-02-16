(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_authorization_authorization_module_ts"],{

/***/ 62277:
/*!***************************************************************************!*\
  !*** ./src/app/forum/pages/authorization/authorization-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPageRoutingModule": () => (/* binding */ AuthorizationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _authorization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization.page */ 95775);




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

/***/ 52826:
/*!*******************************************************************!*\
  !*** ./src/app/forum/pages/authorization/authorization.module.ts ***!
  \*******************************************************************/
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
/* harmony import */ var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization-routing.module */ 62277);
/* harmony import */ var _authorization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.page */ 95775);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AuthorizationPageModule = class AuthorizationPageModule {
};
AuthorizationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizationPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_authorization_page__WEBPACK_IMPORTED_MODULE_1__.AuthorizationPage]
    })
], AuthorizationPageModule);



/***/ }),

/***/ 95775:
/*!*****************************************************************!*\
  !*** ./src/app/forum/pages/authorization/authorization.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPage": () => (/* binding */ AuthorizationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./authorization.page.html */ 29833);
/* harmony import */ var _authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.page.scss */ 60125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);








let AuthorizationPage = class AuthorizationPage {
    constructor(_formBuilder, _authService, _router, _commonService) {
        this._formBuilder = _formBuilder;
        this._authService = _authService;
        this._router = _router;
        this._commonService = _commonService;
        this.screen = 'login';
        this.isLoading = false;
        this._authService.initBucket();
        this.loginForm = this._formBuilder.group({
            email: '',
            password: '',
            termsOfUse: '',
        });
    }
    ngOnInit() { }
    login(loginData) {
        this.isLoading = true;
        this._authService
            .login(loginData.email, loginData.password)
            .toPromise()
            .then(() => {
            this.isLoading = false;
            this._authService.initBucket();
            this._router.navigate(['/forum'], { replaceUrl: true });
        })
            .catch((err) => {
            this.isLoading = false;
            this._commonService.presentToast(err.message, 1500);
        });
    }
    register(registerData) {
        this.isLoading = true;
        delete registerData['termsOfUse'];
        this._authService
            .register(Object.assign({}, registerData))
            .then((res) => {
            this.isLoading = false;
            this.login(registerData);
            this._commonService.presentToast(res['message'], 1500);
        })
            .catch((err) => {
            this.isLoading = false;
            this._commonService.presentToast(err.error.message, 1500);
        });
    }
    clickMenuItem(event) {
        if (event == '/') {
            this._router.navigateByUrl(`/forum/${event}`, { replaceUrl: true });
        }
    }
};
AuthorizationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
AuthorizationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-authorization',
        template: _raw_loader_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthorizationPage);



/***/ }),

/***/ 60125:
/*!*******************************************************************!*\
  !*** ./src/app/forum/pages/authorization/authorization.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .spinner-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFSIiwiZmlsZSI6ImF1dGhvcml6YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG59Il19 */");

/***/ }),

/***/ 29833:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/authorization/authorization.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"forum\" [routeble]=\"false\" (clickMenuItem)=\"clickMenuItem($event)\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <spica-authorization\n    *ngIf=\"!isLoading\"\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n  >\n  </spica-authorization>\n  <div class=\"spinner-container\" *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_authorization_authorization_module_ts.js.map