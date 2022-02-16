(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_buyed-videos_buyed-videos_module_ts"],{

/***/ 9402:
/*!***************************************************************************!*\
  !*** ./src/app/fitness/pages/buyed-videos/buyed-videos-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyedVideosPageRoutingModule": () => (/* binding */ BuyedVideosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _buyed_videos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyed-videos.page */ 8473);




const routes = [
    {
        path: '',
        component: _buyed_videos_page__WEBPACK_IMPORTED_MODULE_0__.BuyedVideosPage
    }
];
let BuyedVideosPageRoutingModule = class BuyedVideosPageRoutingModule {
};
BuyedVideosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyedVideosPageRoutingModule);



/***/ }),

/***/ 11181:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/buyed-videos/buyed-videos.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyedVideosPageModule": () => (/* binding */ BuyedVideosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _buyed_videos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyed-videos-routing.module */ 9402);
/* harmony import */ var _buyed_videos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyed-videos.page */ 8473);
/* harmony import */ var _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/fitness-components.module */ 88613);








let BuyedVideosPageModule = class BuyedVideosPageModule {
};
BuyedVideosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _buyed_videos_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyedVideosPageRoutingModule,
            _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_2__.FitnessComponentModule
        ],
        declarations: [_buyed_videos_page__WEBPACK_IMPORTED_MODULE_1__.BuyedVideosPage]
    })
], BuyedVideosPageModule);



/***/ }),

/***/ 8473:
/*!*****************************************************************!*\
  !*** ./src/app/fitness/pages/buyed-videos/buyed-videos.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyedVideosPage": () => (/* binding */ BuyedVideosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_buyed_videos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./buyed-videos.page.html */ 72889);
/* harmony import */ var _buyed_videos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyed-videos.page.scss */ 10970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 43443);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 86629);






let BuyedVideosPage = class BuyedVideosPage {
    constructor(_authService) {
        this._authService = _authService;
        this.loading = true;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.getBuyedVideos();
        });
    }
    getBuyedVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.videos = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.video.getAll({ queryParams: { filter: { _id: { $in: this.user.buyed_videos } }, relation: true } });
            this.loading = false;
        });
    }
};
BuyedVideosPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
BuyedVideosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-buyed-videos',
        template: _raw_loader_buyed_videos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buyed_videos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BuyedVideosPage);



/***/ }),

/***/ 10970:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/buyed-videos/buyed-videos.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .videos {\n  display: flex;\n  flex-flow: wrap;\n}\n:host ion-content .videos app-video-card {\n  width: 50% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWVkLXZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQURaO0FBRVk7RUFDRSxxQkFBQTtBQUFkIiwiZmlsZSI6ImJ1eWVkLXZpZGVvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBpb24tY29udGVudHtcbiAgICAgICAgLnZpZGVvcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiB3cmFwO1xuICAgICAgICAgICAgYXBwLXZpZGVvLWNhcmQge1xuICAgICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */");

/***/ }),

/***/ 72889:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/buyed-videos/buyed-videos.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"!loading\">\n  <ion-toolbar mode=\"ios\">\n    <ion-back-button defaultHref=\"/\" slot=\"start\"></ion-back-button>\n    <ion-title>Buyed Videos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"videos\" *ngIf=\"!loading\">\n    <app-video-card\n      *ngFor=\"let video of videos\"\n      [video]=\"video\"\n      [user]=\"user\"\n    ></app-video-card>\n  </div>\n</ion-content>\n<ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_buyed-videos_buyed-videos_module_ts.js.map