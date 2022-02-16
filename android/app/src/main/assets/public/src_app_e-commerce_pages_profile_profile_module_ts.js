(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_pages_profile_profile_module_ts"],{

/***/ 33215:
/*!********************************************************************!*\
  !*** ./src/app/e-commerce/pages/profile/profile-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 30290);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 41231:
/*!************************************************************!*\
  !*** ./src/app/e-commerce/pages/profile/profile.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 33215);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page */ 30290);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.SpicaComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_2__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 30290:
/*!**********************************************************!*\
  !*** ./src/app/e-commerce/pages/profile/profile.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 50605);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 49020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 9838);







let ProfilePage = class ProfilePage {
    constructor(_authService, _router, _commonService) {
        this._authService = _authService;
        this._router = _router;
        this._commonService = _commonService;
        this.isLoading = true;
        this.listItems = [];
        this._authService.initBucket();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        if (this._authService.getActiveToken()) {
            this.getUser();
        }
        else {
            this.isLoading = false;
        }
    }
    getUser() {
        this._authService
            .getUser()
            .toPromise()
            .then((user) => {
            this.user = user;
            this.isLoading = false;
            this.listItems = [
                { key: 'name', value: '', seperate: true },
                { key: 'surname', value: '', seperate: true },
                { key: 'email', value: '', seperate: true },
            ];
            this.listItems.forEach((item) => (item.value = this.user[item.key] ? this.user[item.key] : ''));
            this.listItems = this.listItems.concat([
                {
                    key: 'order',
                    value: 'Orders',
                    seperate: false,
                    link: '',
                },
                {
                    key: 'addresses',
                    value: 'Addresses',
                    seperate: false,
                    link: '',
                },
            ]);
        });
    }
    login(loginData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this._authService
                .login(loginData.email, loginData.password)
                .toPromise()
                .then((_) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.getUser();
                this._commonService.presentToast('Login Successful !', 1500);
            }), (err) => {
                this._commonService.presentToast(err.message, 1500);
            });
        });
    }
    register(registerData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this._authService
                .register(Object.assign({}, registerData))
                .then((res) => {
                this._commonService.presentToast(res['message'], 1500);
                this.login(registerData);
            })
                .catch((err) => {
                this._commonService.presentToast(err.error.message, 1500);
            });
        });
    }
    logout() {
        this.isLoading = true;
        this.user = undefined;
        this._authService.logout();
    }
    navigateToBasket() {
        this._router.navigate(['/e-commerce/tabs/basket'], {
            queryParams: { type: 'confirm_basket' },
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 49020:
/*!************************************************************!*\
  !*** ./src/app/e-commerce/pages/profile/profile.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .spinner-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content .auth-container .nav-container {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid black;\n}\n:host ion-content .auth-container .nav-container ion-label {\n  flex: 1;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 15px 0;\n}\n:host ion-content .auth-container .nav-container ion-label.active {\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n:host ion-content .auth-container .form-container {\n  padding: 15px;\n}\n:host ion-content .auth-container .form-container ion-input {\n  margin-top: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 60px;\n  border: 1px solid var(--ion-color-medium-tint);\n  border-radius: 5px;\n}\n:host ion-content .auth-container .form-container ion-input ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  padding: 0 10px;\n}\n:host ion-content .auth-container .form-container p {\n  font-size: 14px;\n  margin: 20px 0;\n  text-align: end;\n}\n:host ion-content .auth-container .form-container .agreement {\n  margin: 20px 0;\n}\n:host ion-content .auth-container .form-container ion-button {\n  width: 100%;\n  height: 60px;\n  --border-radius: 5px;\n}\n:host ion-content .profile-content .user-metadata {\n  padding: 0 15px;\n}\n:host ion-content .profile-content .user-metadata .welcome-box .welcome-text {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host ion-content .profile-content .nav-title {\n  margin-left: 15px;\n}\n:host ion-content .profile-content .nav-item {\n  padding: 10px 15px;\n  border-bottom: 1px solid gray;\n}\n:host ion-content .profile-content .nav-item ion-label span {\n  margin-left: 10px;\n}\n:host ion-content .profile-content .nav-item ion-label ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUROO0FBSU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRlI7QUFJUTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGVjtBQUlVO0VBQ0UsaURBQUE7QUFGWjtBQU9NO0VBQ0UsYUFBQTtBQUxSO0FBT1E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQUxWO0FBT1U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUxaO0FBU1E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFQVjtBQVVRO0VBQ0UsY0FBQTtBQVJWO0FBV1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBVFY7QUFnQk07RUFDRSxlQUFBO0FBZFI7QUFnQlU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFkWjtBQW9CTTtFQUNFLGlCQUFBO0FBbEJSO0FBb0JNO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQWxCUjtBQXFCVTtFQUNFLGlCQUFBO0FBbkJaO0FBcUJVO0VBQ0UsK0JBQUE7QUFuQloiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuYXV0aC1jb250YWluZXIge1xuICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZ3JlZW1lbnQge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2ZpbGUtY29udGVudCB7XG5cbiAgICAgIC51c2VyLW1ldGFkYXRhe1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIC53ZWxjb21lLWJveCB7XG4gICAgICAgICAgLndlbGNvbWUtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC5uYXYtdGl0bGV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgICAgLm5hdi1pdGVte1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuXG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 50605:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/profile/profile.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\" *ngIf=\"user\">\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"auth-container\" *ngIf=\"!user && !isLoading\">\n    <spica-authorization\n      (clickLogin)=\"login($event)\"\n      (clickRegister)=\"register($event)\"\n    ></spica-authorization>\n  </div>\n  <spica-user-profile-picture\n    *ngIf=\"!isLoading && user\"\n    [imageEditable]=\"false\"\n    [image]=\"user?.picture\"\n  ></spica-user-profile-picture>\n  <spica-item-list\n    *ngIf=\"listItems.length>0&& !isLoading && user\"\n    [items]=\"listItems\"\n    (logout)=\"logout()\"\n  ></spica-item-list>\n\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_pages_profile_profile_module_ts.js.map