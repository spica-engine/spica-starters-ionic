(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_music-streaming_pages_authorization_authorization_module_ts"],{

/***/ 63356:
/*!*************************************************************************************!*\
  !*** ./src/app/music-streaming/pages/authorization/authorization-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPageRoutingModule": () => (/* binding */ AuthorizationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _authorization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization.page */ 70262);




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

/***/ 8905:
/*!*****************************************************************************!*\
  !*** ./src/app/music-streaming/pages/authorization/authorization.module.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization-routing.module */ 63356);
/* harmony import */ var _authorization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.page */ 70262);
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

/***/ 70262:
/*!***************************************************************************!*\
  !*** ./src/app/music-streaming/pages/authorization/authorization.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationPage": () => (/* binding */ AuthorizationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./authorization.page.html */ 71947);
/* harmony import */ var _authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization.page.scss */ 36861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);







let AuthorizationPage = class AuthorizationPage {
    constructor(_authService, _router, _commonService) {
        this._authService = _authService;
        this._router = _router;
        this._commonService = _commonService;
        this.isLoading = false;
        this._authService.initBucket();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let user = yield this._authService.getUser().toPromise();
            this.isLoading = false;
            if (user) {
                this.nvigateToHome();
            }
        });
    }
    nvigateToHome() {
        this._router.navigateByUrl('/music-streaming/tabs/home', {
            replaceUrl: true,
        });
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
};
AuthorizationPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
AuthorizationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-authorization',
        template: _raw_loader_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthorizationPage);



/***/ }),

/***/ 36861:
/*!*****************************************************************************!*\
  !*** ./src/app/music-streaming/pages/authorization/authorization.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .spinner-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUROIiwiZmlsZSI6ImF1dGhvcml6YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 71947:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/pages/authorization/authorization.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <spica-authorization\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n    *ngIf=\"!isLoading\"\n  >\n  </spica-authorization>\n  <div class=\"spinner-container\" *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_music-streaming_pages_authorization_authorization_module_ts.js.map