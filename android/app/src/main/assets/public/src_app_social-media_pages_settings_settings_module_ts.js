(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_settings_settings_module_ts"],{

/***/ 50391:
/*!************************************************************************!*\
  !*** ./src/app/social-media/pages/blocked-users/blocked-users.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockedUsersPage": () => (/* binding */ BlockedUsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_blocked_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./blocked-users.page.html */ 66703);
/* harmony import */ var _blocked_users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocked-users.page.scss */ 34962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 4957);





let BlockedUsersPage = class BlockedUsersPage {
    constructor(_userService) {
        this._userService = _userService;
        this.loading = false;
        this.blocks = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser().toPromise();
            this.blocks = yield this._userService.getBlockedUsers();
        });
    }
    removeBlock(entry) {
        this.loading = true;
        this._userService
            .unBlockUser(entry)
            .then(() => {
            this.blocks = this.blocks.filter((item) => item._id != entry._id);
            this.loading = false;
        });
    }
};
BlockedUsersPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
BlockedUsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-blocked-users",
        template: _raw_loader_blocked_users_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blocked_users_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlockedUsersPage);



/***/ }),

/***/ 62113:
/*!************************************************************************!*\
  !*** ./src/app/social-media/pages/settings/settings-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _blocked_users_blocked_users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocked-users/blocked-users.page */ 50391);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 56846);





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage,
            },
            {
                path: 'blockeds',
                children: [
                    {
                        path: '',
                        component: _blocked_users_blocked_users_page__WEBPACK_IMPORTED_MODULE_0__.BlockedUsersPage,
                    },
                    // {
                    //   path: 'profile',
                    //   loadChildren: () =>
                    //     import('../profile/profile.module').then(
                    //       (m) => m.ProfilePageModule
                    //     ),
                    // },
                ],
            },
            // {
            //   path: "profile",
            //   loadChildren: () =>
            //     import("./pages/profile/profile.module").then(
            //       (m) => m.ProfilePageModule
            //     ),
            // },
            // {
            //   path: "discover",
            //   loadChildren: () =>
            //     import("./pages/discover/discover.module").then(
            //       (m) => m.DiscoverPageModule
            //     ),
            // },
            // {
            //   path: "activity",
            //   loadChildren: () =>
            //     import("./pages/activity/activity.module").then(
            //       (m) => m.ActivityPageModule
            //     ),
            // },
        ],
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 54034:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/settings/settings.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 62113);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 56846);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
                },
                extend: true,
            }),
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage],
    })
], SettingsPageModule);



/***/ }),

/***/ 56846:
/*!**************************************************************!*\
  !*** ./src/app/social-media/pages/settings/settings.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 15128);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 77480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 4957);





// import { ConfirmationModalComponent } from 'src/app/components/generics/confirmation-modal/confirmation-modal.component';



let SettingsPage = class SettingsPage {
    constructor(_userService, _modalController, _translateService, _toastController, _actionSheetCtrl, _router, _activatedRoute) {
        this._userService = _userService;
        this._modalController = _modalController;
        this._translateService = _translateService;
        this._toastController = _toastController;
        this._actionSheetCtrl = _actionSheetCtrl;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.visibilities = ['public', 'private'];
        this.expand_terms = false;
        this.languages = ['en', 'tr', 'ru'];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser().toPromise();
        });
    }
    logOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this._userService.logOut();
            this._router.navigate(['/home'], { replaceUrl: true });
        });
    }
    ionViewWillLeave() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this._userService.updateProfile(this.me);
        });
    }
    openAccountSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this._actionSheetCtrl.create({
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: this._translateService.instant('blocked_users'),
                        handler: () => {
                            this._router.navigate(['blockeds'], {
                                relativeTo: this._activatedRoute,
                            });
                        },
                    },
                    {
                        text: this._translateService.instant('cancel'),
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    openTermsSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this._actionSheetCtrl.create({
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: this._translateService.instant('terms'),
                        handler: () => {
                            window.open('https://google.com', 'blank');
                        },
                    },
                    {
                        text: this._translateService.instant('privacy'),
                        handler: () => {
                            window.open('https://google.com', 'blank');
                        },
                    },
                    {
                        text: this._translateService.instant('cancel'),
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 34962:
/*!**************************************************************************!*\
  !*** ./src/app/social-media/pages/blocked-users/blocked-users.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list ion-item {\n  padding: 3px 10px;\n}\n:host ion-list ion-item .no-item {\n  text-align: center;\n  color: var(--ion-text-color);\n  opacity: 0.5;\n  width: 100%;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrZWQtdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsaUJBQUE7QUFETjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBUiIsImZpbGUiOiJibG9ja2VkLXVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgLm5vLWl0ZW0ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 77480:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/settings/settings.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .input {\n  border-bottom: 1px solid var(--ion-color-light-tint);\n}\n:host .setting-card {\n  background: var(--cd-component-background-color);\n  padding: 10px 15px;\n  display: flex;\n  align-items: center;\n  color: var(--cd-text-color);\n}\n:host .setting-card .setting {\n  flex: 1;\n}\n:host .setting-card .value {\n  flex: 1;\n}\n:host .setting-card .value * {\n  float: right;\n}\n:host .setting-card.center {\n  justify-content: center;\n}\n:host .setting-card.center ion-icon {\n  padding-left: 5px;\n  width: 20px;\n  height: 20px;\n  color: var(--ion-color-primary);\n}\n:host .footer-item {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n  color: var(--ion-color-primary, #3880ff);\n}\n:host .collapsable .collapse-header {\n  padding: 10px 15px;\n}\n:host .collapsable .collapse {\n  height: 0px;\n  overflow: hidden;\n  transition: height 0.2s ease;\n}\n:host .collapsable .collapse.expand {\n  height: 150px !important;\n  overflow: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9EQUFBO0FBQUo7QUFFRTtFQUNFLGdEQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUFKO0FBQ0k7RUFDRSxPQUFBO0FBQ047QUFDSTtFQUNFLE9BQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtBQUVSO0FBQ0k7RUFDRSx1QkFBQTtBQUNOO0FBQU07RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFFUjtBQUVFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQUo7QUFHSTtFQUNFLGtCQUFBO0FBRE47QUFHSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBRE47QUFFTTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFBUiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5pbnB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgfVxuICAuc2V0dGluZy1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jZC1jb21wb25lbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2QtdGV4dC1jb2xvcik7XG4gICAgLnNldHRpbmcge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgLnZhbHVlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAqIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICAmLmNlbnRlciB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mb290ZXItaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG4gIH1cbiAgLmNvbGxhcHNhYmxlIHtcbiAgICAuY29sbGFwc2UtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG4gICAgLmNvbGxhcHNlIHtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2U7XG4gICAgICAmLmV4cGFuZCB7XG4gICAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 66703:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/blocked-users/blocked-users.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"blocked_users\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"me\">\n  <ion-list lines=\"full\">\n    <ion-item class=\"ion-no-padding\" *ngIf=\"blocks.length==0\">\n      <div class=\"no-item\">{{\"non_blocked_users\" |translate}}</div>\n    </ion-item>\n    <ion-item class=\"ion-no-padding\" *ngFor=\"let item of blocks\">\n      <user-minified-card\n        [user]=\"item['blocked']\"\n        [type]=\"'horizontal'\"\n        [with_router]=\"true\"\n      ></user-minified-card>\n      <div class=\"actions\">\n        <div>\n          <ion-button (click)=\"removeBlock(item)\" [fill]=\"'outline'\">\n            {{\"unblock\" |translate}}\n          </ion-button>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content> -->\n");

/***/ }),

/***/ 15128:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/settings/settings.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"settings\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"me\">\n  <div class=\"input\">\n    <div class=\"setting-card\">\n      <div class=\"setting\">{{\"receive-notifications\" | translate}}</div>\n      <div class=\"value\">\n        <ion-toggle name=\"notification\" [(ngModel)]=\"me.notification\">\n        </ion-toggle>\n      </div>\n    </div>\n  </div>\n  <div class=\"input\">\n    <div class=\"setting-card\">\n      <div class=\"setting\">{{\"visibility\" | translate}}</div>\n      <div class=\"value\">\n        <ion-select\n          [placeholder]=\"'select-one' | translate\"\n          [(ngModel)]=\"me.visibility\"\n          interface=\"popover\"\n        >\n          <ion-select-option *ngFor=\"let item of visibilities\" [value]=\"item\"\n            >{{item | translate}}\n          </ion-select-option>\n        </ion-select>\n      </div>\n    </div>\n  </div>\n  <div class=\"input\">\n    <div class=\"setting-card\">\n      <div class=\"setting\">{{\"language\" | translate}}</div>\n      <div class=\"value\">\n        <ion-select\n          [placeholder]=\"'select-one' | translate\"\n          interface=\"popover\"\n        >\n          <ion-select-option *ngFor=\"let item of languages\" [value]=\"item\"\n            >{{\"languages.\"+item | translate}}\n          </ion-select-option>\n        </ion-select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"input\" (click)=\"openAccountSheet()\">\n    <div class=\"setting-card\">\n      <div class=\"setting\">{{\"account\" | translate}}</div>\n    </div>\n  </div>\n  <div class=\"input\" (click)=\"openTermsSheet()\">\n    <div class=\"setting-card\">\n      <div class=\"setting\">{{\"terms_of_use\" | translate}}</div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"input\" (click)=\"logOut()\">\n    <div class=\"setting-card center\">\n      {{\"logout\" | translate}}\n      <ion-icon name=\"power-outline\"></ion-icon>\n    </div>\n  </div>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_settings_settings_module_ts.js.map