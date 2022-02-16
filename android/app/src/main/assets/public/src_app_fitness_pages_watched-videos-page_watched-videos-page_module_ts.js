(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_watched-videos-page_watched-videos-page_module_ts"],{

/***/ 26614:
/*!*****************************************************************************************!*\
  !*** ./src/app/fitness/pages/watched-videos-page/watched-videos-page-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchedVideosPagePageRoutingModule": () => (/* binding */ WatchedVideosPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _watched_videos_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watched-videos-page.page */ 42911);




const routes = [
    {
        path: ':id',
        // component: WatchedVideosPagePage
        children: [
            { path: '', component: _watched_videos_page_page__WEBPACK_IMPORTED_MODULE_0__.WatchedVideosPagePage },
            {
                path: 'video-details',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../video-details/video-details.module */ 75184)).then((m) => m.VideoDetailsPageModule),
            },
            {
                path: 'teacher-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../teacher-page/teacher-page.module */ 91683)).then((m) => m.TeacherPagePageModule),
            },
        ],
    },
];
let WatchedVideosPagePageRoutingModule = class WatchedVideosPagePageRoutingModule {
};
WatchedVideosPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WatchedVideosPagePageRoutingModule);



/***/ }),

/***/ 69797:
/*!*********************************************************************************!*\
  !*** ./src/app/fitness/pages/watched-videos-page/watched-videos-page.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchedVideosPagePageModule": () => (/* binding */ WatchedVideosPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _watched_videos_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watched-videos-page-routing.module */ 26614);
/* harmony import */ var _watched_videos_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watched-videos-page.page */ 42911);
/* harmony import */ var _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/fitness-components.module */ 88613);








let WatchedVideosPagePageModule = class WatchedVideosPagePageModule {
};
WatchedVideosPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _watched_videos_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.WatchedVideosPagePageRoutingModule,
            _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_2__.FitnessComponentModule
        ],
        declarations: [_watched_videos_page_page__WEBPACK_IMPORTED_MODULE_1__.WatchedVideosPagePage]
    })
], WatchedVideosPagePageModule);



/***/ }),

/***/ 42911:
/*!*******************************************************************************!*\
  !*** ./src/app/fitness/pages/watched-videos-page/watched-videos-page.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatchedVideosPagePage": () => (/* binding */ WatchedVideosPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_watched_videos_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./watched-videos-page.page.html */ 17068);
/* harmony import */ var _watched_videos_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watched-videos-page.page.scss */ 70929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 43443);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 86629);







let WatchedVideosPagePage = class WatchedVideosPagePage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.watchedVideos = yield this.getWatchedVideos();
            if (((_a = this.watchedVideos) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
                this.text = 'The video you watched was not found';
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this._route.snapshot.params.id;
        });
    }
    getWatchedVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.watched_video.getAll({
                queryParams: {
                    filter: { user: this.id },
                    relation: ['video.teacher'],
                    limit: 3,
                    sort: { watched_date: -1 },
                },
            });
        });
    }
};
WatchedVideosPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
WatchedVideosPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-watched-videos-page',
        template: _raw_loader_watched_videos_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_watched_videos_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WatchedVideosPagePage);



/***/ }),

/***/ 70929:
/*!*********************************************************************************!*\
  !*** ./src/app/fitness/pages/watched-videos-page/watched-videos-page.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  border-radius: 3px;\n}\n:host ion-card ion-icon {\n  position: absolute;\n  top: 20%;\n  left: 40%;\n  color: white;\n  font-size: 90px;\n}\n:host ion-card img {\n  width: 100%;\n}\n:host ion-card-content {\n  padding: 5px;\n}\n:host ion-card-content ion-label {\n  margin-left: 5px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNoZWQtdmlkZW9zLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFDTTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNWO0FBQ007RUFDRSxXQUFBO0FBQ1I7QUFHTTtFQUNFLFlBQUE7QUFEUjtBQUVRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQVYiLCJmaWxlIjoid2F0Y2hlZC12aWRlb3MtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jYXJkIHtcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgICAgfVxuICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiAgICAgICJdfQ== */");

/***/ }),

/***/ 17068:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/watched-videos-page/watched-videos-page.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar >\n    <ion-title>Watched Video</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-video-card [user]=\"user\" [video]=\"watched.video\" *ngFor=\"let watched of watchedVideos\"></app-video-card>\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"!watchedVideos\"></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_watched-videos-page_watched-videos-page_module_ts.js.map