(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_waiting-requests_waiting-requests_module_ts"],{

/***/ 32776:
/*!****************************************************************************************!*\
  !*** ./src/app/social-media/pages/waiting-requests/waiting-requests-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingRequestsPageRoutingModule": () => (/* binding */ WaitingRequestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _waiting_requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-requests.page */ 68582);




const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _waiting_requests_page__WEBPACK_IMPORTED_MODULE_0__.WaitingRequestsPage,
            },
            {
                path: "profile",
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6").then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
            },
        ],
    },
];
let WaitingRequestsPageRoutingModule = class WaitingRequestsPageRoutingModule {
};
WaitingRequestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WaitingRequestsPageRoutingModule);



/***/ }),

/***/ 18675:
/*!********************************************************************************!*\
  !*** ./src/app/social-media/pages/waiting-requests/waiting-requests.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingRequestsPageModule": () => (/* binding */ WaitingRequestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _waiting_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-requests-routing.module */ 32776);
/* harmony import */ var _waiting_requests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-requests.page */ 68582);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);









let WaitingRequestsPageModule = class WaitingRequestsPageModule {
};
WaitingRequestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _waiting_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitingRequestsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [_waiting_requests_page__WEBPACK_IMPORTED_MODULE_1__.WaitingRequestsPage]
    })
], WaitingRequestsPageModule);



/***/ }),

/***/ 68582:
/*!******************************************************************************!*\
  !*** ./src/app/social-media/pages/waiting-requests/waiting-requests.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingRequestsPage": () => (/* binding */ WaitingRequestsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_waiting_requests_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./waiting-requests.page.html */ 78551);
/* harmony import */ var _waiting_requests_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-requests.page.scss */ 38272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ 4957);





let WaitingRequestsPage = class WaitingRequestsPage {
    constructor(_userService) {
        this._userService = _userService;
        this.user_requests = [];
        this.showed_requests = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.getUserRequests();
    }
    doRefresh() {
        this.loading = true;
        this.getUserRequests();
    }
    getUserRequests() {
        this._userService
            .getAllWaitingRequests()
            .then((requestsData) => {
            this.user_requests = requestsData;
            this.showed_requests = [...this.user_requests];
            this.loading = false;
        });
    }
    acceptRequest(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this._userService.receiveRequest(item.sender, item._id);
            this.removeFromRequests(item._id);
            this.loading = false;
        });
    }
    deleteRequest(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this._userService.deleteRequest(item._id);
            this.removeFromRequests(item._id);
            this.loading = false;
        });
    }
    removeFromRequests(id) {
        this.user_requests = this.user_requests.filter((item) => item._id != id);
        this.showed_requests = this.showed_requests.filter((item) => item._id != id);
    }
    getUserBySearch() {
        this.showed_requests = this.user_requests.filter((item) => item.sender.username
            .toLowerCase()
            .includes(this.searchedText.toLocaleLowerCase()));
    }
};
WaitingRequestsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
WaitingRequestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-waiting-requests",
        template: _raw_loader_waiting_requests_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_waiting_requests_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WaitingRequestsPage);



/***/ }),

/***/ 38272:
/*!********************************************************************************!*\
  !*** ./src/app/social-media/pages/waiting-requests/waiting-requests.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list ion-item {\n  padding: 3px 10px;\n}\n:host ion-list .actions {\n  display: flex;\n  align-items: center;\n}\n:host ion-list .actions ion-icon {\n  font-size: 22px;\n}\n:host ion-list .actions ion-icon.passive {\n  color: var(--ion-color-light-shade);\n}\n:host ion-list .actions span {\n  margin: 0 10px;\n  color: var(--ion-color-light-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmctcmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsaUJBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRE47QUFFTTtFQUNFLGVBQUE7QUFBUjtBQUNRO0VBQ0UsbUNBQUE7QUFDVjtBQUVNO0VBQ0UsY0FBQTtFQUNBLG1DQUFBO0FBQVIiLCJmaWxlIjoid2FpdGluZy1yZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbXtcbiAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAmLnBhc3NpdmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 78551:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/waiting-requests/waiting-requests.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"follow_requests\" | translate | titlecase }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-refresher\n    slot=\"fixed\"\n    pullFactor=\"0.5\"\n    pullMin=\"100\"\n    pullMax=\"200\"\n    (ionRefresh)=\"doRefresh()\"\n  >\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-item lines=\"none\" class=\"ion-no-padding\">\n    <ion-searchbar\n      mode=\"ios\"\n      animated\n      debounce=\"500\"\n      [placeholder]=\"'search'|translate\"\n      [(ngModel)]=\"searchedText\"\n      (ngModelChange)=\"getUserBySearch()\"\n    ></ion-searchbar>\n  </ion-item>\n  <ion-list lines=\"full\">\n    <ion-item class=\"ion-no-padding\" *ngFor=\"let item of showed_requests\">\n      <user-minified-card\n        [user]=\"item['sender']\"\n        [type]=\"'horizontal'\"\n        [with_router]=\"true\"\n      ></user-minified-card>\n      <div class=\"actions\">\n        <div>\n          <ion-icon\n            (click)=\"acceptRequest(item)\"\n            name=\"checkmark-outline\"\n          ></ion-icon>\n        </div>\n        <span>|</span>\n        <div>\n          <ion-icon\n            (click)=\"deleteRequest(item)\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_waiting-requests_waiting-requests_module_ts.js.map