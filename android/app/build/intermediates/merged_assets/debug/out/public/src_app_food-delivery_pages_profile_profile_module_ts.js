(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_food-delivery_pages_profile_profile_module_ts"],{

/***/ 65504:
/*!***********************************************************************!*\
  !*** ./src/app/food-delivery/pages/profile/profile-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 26640);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
            },
            {
                path: 'my-orders',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_food-delivery_pages_my-orders_my-orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../my-orders/my-orders.module */ 80662)).then((m) => m.MyOrdersPageModule),
            },
        ],
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

/***/ 34119:
/*!***************************************************************!*\
  !*** ./src/app/food-delivery/pages/profile/profile.module.ts ***!
  \***************************************************************/
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
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 65504);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 26640);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 26640:
/*!*************************************************************!*\
  !*** ./src/app/food-delivery/pages/profile/profile.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 21110);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 30311);







let ProfilePage = class ProfilePage {
    constructor(_authService, _commonService, _router) {
        this._authService = _authService;
        this._commonService = _commonService;
        this._router = _router;
        this.listItems = [];
        this.isLoading = false;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.user = yield this._authService.getUser().toPromise();
            if (this.user) {
                this.listItems = [
                    { key: 'email', value: '', seperate: true },
                    { key: 'name', value: '', seperate: true },
                    { key: 'surname', value: '', seperate: true },
                ];
                this.listItems.forEach((item) => (item.value = this.user[item.key] ? this.user[item.key] : ''));
                this.listItems = this.listItems.concat([
                    {
                        key: 'my_orders',
                        value: 'My Orders',
                        seperate: false,
                        link: 'my-orders',
                    }
                ]);
            }
            this.isLoading = false;
        });
    }
    logout() {
        this._authService.logout();
        this.user = undefined;
    }
    nvigateToHome() {
        this._router.navigateByUrl('/food-delivery/home', {
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
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 472:
/*!***************************************************************!*\
  !*** ./src/app/food-delivery/pages/profile/profile.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 21110:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/pages/profile/profile.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"food-delivery\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"user\">Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-container *ngIf=\"user\">\n    <spica-user-profile-picture\n      *ngIf=\"!isLoading\"\n      [imageEditable]=\"true\"\n      [image]=\"user?.profile_picture\"\n    ></spica-user-profile-picture>\n    <spica-item-list\n      *ngIf=\"listItems.length>0  && !isLoading\"\n      [items]=\"listItems\"\n      (logout)=\"logout()\"\n    ></spica-item-list>\n    <ion-spinner\n      *ngIf=\"isLoading\"\n      class=\"spinner-center-page\"\n      name=\"crescent\"\n    ></ion-spinner>\n  </ng-container>\n  <spica-authorization\n    *ngIf=\"!user && !isLoading\"\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n  ></spica-authorization>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_food-delivery_pages_profile_profile_module_ts.js.map