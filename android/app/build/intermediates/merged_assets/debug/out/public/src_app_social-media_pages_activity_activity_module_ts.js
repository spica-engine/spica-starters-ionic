(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_activity_activity_module_ts"],{

/***/ 74604:
/*!************************************************************************!*\
  !*** ./src/app/social-media/pages/activity/activity-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityPageRoutingModule": () => (/* binding */ ActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity.page */ 51277);




const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _activity_page__WEBPACK_IMPORTED_MODULE_0__.ActivityPage,
            },
            {
                path: "profile",
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6").then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
            },
            {
                path: "waiting-requests",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_waiting-requests_waiting-requests_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../waiting-requests/waiting-requests.module */ 18675)).then((m) => m.WaitingRequestsPageModule),
            },
        ],
    },
];
let ActivityPageRoutingModule = class ActivityPageRoutingModule {
};
ActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActivityPageRoutingModule);



/***/ }),

/***/ 72997:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/activity/activity.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityPageModule": () => (/* binding */ ActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-routing.module */ 74604);
/* harmony import */ var _activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.page */ 51277);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);









let ActivityPageModule = class ActivityPageModule {
};
ActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivityPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [
            _activity_page__WEBPACK_IMPORTED_MODULE_1__.ActivityPage,
        ]
    })
], ActivityPageModule);



/***/ }),

/***/ 51277:
/*!**************************************************************!*\
  !*** ./src/app/social-media/pages/activity/activity.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityPage": () => (/* binding */ ActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./activity.page.html */ 57156);
/* harmony import */ var _activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity.page.scss */ 53816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/activity.service */ 51194);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 19874);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 4957);








let ActivityPage = class ActivityPage {
    constructor(_activityService, _userService) {
        this._activityService = _activityService;
        this._userService = _userService;
        this.activities = [];
        this.loading = true;
        this.showNew = false;
        this.last_unseen_index = 0;
        this.default_user_image = _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
        this.scroll_params = {
            skip: 0,
            limit: 10,
        };
        this.user_requests = [];
    }
    ngOnInit() {
        this._activityService
            .getUnseenActivity()
            .toPromise()
            .then((data) => (this.last_unseen_index = data));
        this.getActivities();
    }
    ionViewWillEnter() {
        this._activityService.getNewActivities();
        this._userService
            .getAllWaitingRequests()
            .then((requestsData) => (this.user_requests = requestsData.map((item) => item.sender)));
    }
    ionViewWillLeave() {
        this.$activities.unsubscribe();
    }
    getActivities() {
        this.$activities = this._activityService
            .getActivities()
            .subscribe((activities) => {
            var _a;
            this.activities = activities;
            this.showNew = false;
            if (this._activityService.last_unseen_index != this.activities.length &&
                this._activityService.last_unseen_index != 0) {
                this.showNew = true;
                this.activities[this.activities.length - this._activityService.last_unseen_index]['border'] = true;
            }
            this.loading = false;
            (_a = this.ionRefresher) === null || _a === void 0 ? void 0 : _a.complete();
        });
    }
    getNewActivities() {
        this._activityService.getNewActivities();
    }
    changeSeenStatus() {
        this._activityService.updateSeen();
    }
    ionViewDidLeave() {
        this.changeSeenStatus();
    }
    doRefresh() {
        this.loading = false;
        this.changeSeenStatus();
        this.getNewActivities();
    }
};
ActivityPage.ctorParameters = () => [
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_2__.ActivityService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
ActivityPage.propDecorators = {
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresher,] }]
};
ActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-activity',
        template: _raw_loader_activity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActivityPage);



/***/ }),

/***/ 53816:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/activity/activity.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host p {\n  text-align: center;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n  margin: 0;\n}\n:host ion-list {\n  margin: 10px;\n}\n:host ion-list p {\n  font-size: 12px !important;\n}\n:host ion-list ion-item {\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  padding: 10px;\n}\n:host .requests {\n  display: flex;\n  padding: 10px 15px;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  margin: 10px 5px;\n  border-radius: 5px;\n}\n:host .requests .requests-users {\n  display: flex;\n  margin-right: 20px;\n}\n:host .requests .requests-users .user {\n  width: 40px;\n  height: 40px;\n  margin-right: -10px;\n}\n:host .requests .requests-users .user img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n:host .requests .requests-users .user.with-count {\n  background: var(--ion-color-light-shade);\n  position: relative;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n:host .requests .requests-users .user.with-count span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 18px;\n}\n:host .requests .action {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  font-size: 15px;\n  min-height: 40px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0FBQUo7QUFDSTtFQUNFLDBCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBQ047QUFFRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBR1Y7QUFEUTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBR1Y7QUFGVTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSVo7QUFDSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNOIiwiZmlsZSI6ImFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG4gIC5yZXF1ZXN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC5yZXF1ZXN0cy11c2VycyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgLnVzZXIge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgJi53aXRoLWNvdW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 57156:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/activity/activity.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"activity\" | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-refresher\n    slot=\"fixed\"\n    pullFactor=\"0.5\"\n    pullMin=\"100\"\n    pullMax=\"200\"\n    (ionRefresh)=\"doRefresh()\"\n  >\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"requests\" *ngIf=\"user_requests.length>0\">\n    <div class=\"requests-users\">\n      <div class=\"user\" *ngFor=\"let user of user_requests |slice:0:3\">\n        <img [src]=\"user.thumbnail || default_user_image\" alt=\"\" />\n      </div>\n      <div class=\"user with-count\" *ngIf=\"user_requests.length>3\">\n        <span>+{{user_requests.length-3}}</span>\n      </div>\n    </div>\n    <div class=\"action\" [routerLink]=\"['waiting-requests']\">\n      {{\"follow_requests\"|translate}}\n      <ion-icon\n        name=\"chevron-forward-outline\"\n      ></ion-icon>\n    </div>\n  </div>\n  <ion-list *ngIf=\"activities.length > 0\">\n    <p *ngIf=\"showNew\">{{\"new\" | translate }}</p>\n    <ion-item\n      class=\"ion-no-padding\"\n      lines=\"none\"\n      *ngFor=\"let activity of activities\"\n    >\n      <activity-card [activity]=\"activity\"></activity-card>\n    </ion-item>\n  </ion-list>\n  <p *ngIf=\"activities.length == 0\">{{\"no-activity\" | translate }}</p>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_activity_activity_module_ts.js.map