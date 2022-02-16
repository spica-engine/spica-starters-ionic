(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_dating_pages_likes-you_likes-you_module_ts"],{

/***/ 90133:
/*!********************************************************************!*\
  !*** ./src/app/dating/pages/likes-you/likes-you-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikesYouPageRoutingModule": () => (/* binding */ LikesYouPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _likes_you_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes-you.page */ 557);




const routes = [
    {
        path: '',
        component: _likes_you_page__WEBPACK_IMPORTED_MODULE_0__.LikesYouPage
    }
];
let LikesYouPageRoutingModule = class LikesYouPageRoutingModule {
};
LikesYouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LikesYouPageRoutingModule);



/***/ }),

/***/ 50151:
/*!************************************************************!*\
  !*** ./src/app/dating/pages/likes-you/likes-you.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikesYouPageModule": () => (/* binding */ LikesYouPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _likes_you_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes-you-routing.module */ 90133);
/* harmony import */ var _likes_you_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes-you.page */ 557);
/* harmony import */ var _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dating-components.module */ 33357);








let LikesYouPageModule = class LikesYouPageModule {
};
LikesYouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _likes_you_routing_module__WEBPACK_IMPORTED_MODULE_0__.LikesYouPageRoutingModule,
            _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__.DatingComponentModule
        ],
        declarations: [_likes_you_page__WEBPACK_IMPORTED_MODULE_1__.LikesYouPage]
    })
], LikesYouPageModule);



/***/ }),

/***/ 557:
/*!**********************************************************!*\
  !*** ./src/app/dating/pages/likes-you/likes-you.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikesYouPage": () => (/* binding */ LikesYouPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_likes_you_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./likes-you.page.html */ 29526);
/* harmony import */ var _likes_you_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes-you.page.scss */ 4041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 83954);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 8298);






let LikesYouPage = class LikesYouPage {
    constructor(_authService) {
        this._authService = _authService;
        this.likesYou = [];
        this.isLoading = true;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._authService.getUser().toPromise();
            this.likesYou = yield this.getLikesYou();
            this.isLoading = false;
        });
    }
    getLikesYou() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.likes.getAll({
            queryParams: { filter: { user: this.me._id }, relation: true },
        });
    }
};
LikesYouPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LikesYouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-likes-you',
        template: _raw_loader_likes_you_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_likes_you_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LikesYouPage);



/***/ }),

/***/ 4041:
/*!************************************************************!*\
  !*** ./src/app/dating/pages/likes-you/likes-you.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .users-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0 15px;\n}\n:host ion-content .users-container ion-item {\n  width: 100%;\n}\n:host ion-content .users-container ion-item .empty {\n  width: 100%;\n  text-align: center;\n  font-size: smaller;\n}\n:host ion-content .users-container user-card {\n  width: calc(50% - 5px);\n  height: 230px;\n  margin-top: 15px;\n}\n:host ion-content .users-container user-card ::ng-deep ion-card {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpa2VzLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUROO0FBR007RUFDRSxXQUFBO0FBRFI7QUFFUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVY7QUFJTTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFJVTtFQUNFLFNBQUE7QUFGWiIsImZpbGUiOiJsaWtlcy15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLnVzZXJzLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuXG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuZW1wdHkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXNlci1jYXJkIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNXB4KTtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 29526:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/pages/likes-you/likes-you.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Likes You</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"users-container\" *ngIf=\"!isLoading\">\n    <user-card\n      *ngFor=\"let likes of likesYou\"\n      [details]=\"false\"\n      [user]=\"likes.liked_user\"\n      [matched]=\"likes.matched\"\n      [routerLink]=\"['/dating/user-details/'+likes.liked_user['_id']]\"\n      [queryParams]=\"{isMatched: likes.matched ? 'true' : 'false' }\"\n    ></user-card>\n    <ion-item *ngIf=\"!likesYou.length\">\n      <div class=\"empty\">There is no likes yet</div>\n    </ion-item>\n  </div>\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dating_pages_likes-you_likes-you_module_ts.js.map