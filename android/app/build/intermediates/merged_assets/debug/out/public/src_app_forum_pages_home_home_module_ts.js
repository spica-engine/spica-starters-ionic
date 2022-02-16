(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_home_home_module_ts"],{

/***/ 24204:
/*!*********************************************************!*\
  !*** ./src/app/forum/pages/home/home-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 63557);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'forum-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forum_pages_forum-details_forum-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../forum-details/forum-details.module */ 23033)).then(m => m.ForumDetailsPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 66579:
/*!*************************************************!*\
  !*** ./src/app/forum/pages/home/home.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 24204);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 63557);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _components_forum_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forum-components.module */ 75797);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule,
            _components_forum_components_module__WEBPACK_IMPORTED_MODULE_3__.ForumComponentModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 63557:
/*!***********************************************!*\
  !*** ./src/app/forum/pages/home/home.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49459);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 87294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);







let HomePage = class HomePage {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.categories = [];
        this.comments = [];
        this.titles = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            if (this.userId) {
                yield this.getUser();
            }
            yield this.getCategory();
            this.getComments();
            this.getTitles();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.get(this.userId, {
                queryParams: { relation: true },
            });
        });
    }
    getCategory() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.category.getAll().then((res) => {
            this.categories = res;
        });
    }
    getComments(catId = undefined) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (catId == 'all') {
                catId = undefined;
            }
            this.comments = [];
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.getAll({
                queryParams: {
                    limit: 10,
                    relation: true,
                    sort: { _id: -1 },
                    filter: { is_post: true, category: catId },
                },
            })
                .then((res) => {
                this.comments = res;
            });
        });
    }
    getTitles() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.title.getAll().then((res) => {
            this.titles = res;
        });
    }
    newPostModa() {
        if (this.userId) {
            this._router.navigate(['/forum/create-forum']);
        }
        else {
            this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
        }
    }
    clickMenuItem() {
        if (!this.userId) {
            this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 87294:
/*!*************************************************!*\
  !*** ./src/app/forum/pages/home/home.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .category {\n  display: flex;\n  overflow-x: auto;\n  padding: 20px 10px 10px;\n  position: sticky;\n  top: 0;\n  z-index: 12;\n  background: white;\n}\n:host ion-content .category ion-button {\n  --border-radius: 8px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n:host ion-content .comments {\n  padding-bottom: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUVNO0VBQ0Usb0JBQUE7RUFDQSw0REFBQTtBQUFSO0FBR0k7RUFDRSxvQkFBQTtBQUROIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDEyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb21tZW50cyB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 49459:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/home/home.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"forum\" [routeble]=\"userId ? true : false\" (clickMenuItem)=\"clickMenuItem()\"></spica-menu-bar>\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-menu-button color=\"dark\" menu=\"main-menu\" slot=\"start\"></ion-menu-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <spica-scroll-category [categories]=\"categories\" *ngIf=\"categories.length\" (action)=\"getComments($event)\"></spica-scroll-category>\n\n  <div class=\"comments\">\n    <ion-spinner\n    *ngIf=\"!comments.length\"\n    class=\"spinner-center-page\"\n  ></ion-spinner>\n    <post-card [comment]=\"comment\" *ngFor=\"let comment of comments\" [user]=\"user\"></post-card>\n  </div>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"newPostModa()\">\n  <ion-fab-button>\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_home_home_module_ts.js.map