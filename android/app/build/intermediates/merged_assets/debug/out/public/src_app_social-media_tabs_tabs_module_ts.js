(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_tabs_tabs_module_ts"],{

/***/ 51194:
/*!***********************************************************!*\
  !*** ./src/app/social-media/services/activity.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityService": () => (/* binding */ ActivityService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 63648);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 14911);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 4957);






let ActivityService = class ActivityService {
    constructor(_dataService, _userService) {
        this._dataService = _dataService;
        this._userService = _userService;
        this.activities = [];
        this.last_unseen_index = 0;
        this.$activities = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.$unseenActivityCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(0);
    }
    initialize() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._userService.getActiveUser().toPromise();
            let queryParams = {};
            queryParams['filter'] = { owner: this.user._id };
            queryParams['limit'] = 20;
            queryParams['sort'] = { _id: -1 };
            queryParams['relation'] = ['user', 'post'];
            _services_bucket__WEBPACK_IMPORTED_MODULE_0__.activity.getAll({
                queryParams,
            })
                .then((activities) => {
                this.activities = activities;
                let unseen_activities_count = 0;
                this.activities.forEach((activity) => {
                    if (new Date(activity.created_at) > new Date(this.user.last_online_date)) {
                        unseen_activities_count += 1;
                    }
                });
                this.last_unseen_index =
                    this.activities.length - unseen_activities_count;
                this.$unseenActivityCount.next(unseen_activities_count);
                this.$activities.next(this.activities);
            })
                .catch((err) => console.log(err));
        });
    }
    updateSeen() {
        this.$activities.next(this.activities);
        this.$unseenActivityCount.next(0);
    }
    getUnseenActivity() {
        return this.$unseenActivityCount;
    }
    getActivities() {
        return this.$activities;
    }
    getNewActivities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._userService.getActiveUser().toPromise();
            let queryParams = {};
            let newActivities;
            queryParams['filter'] = {
                owner: this.user._id,
                _id: {
                    $gt: this.activities.length > 0 ? this.activities[0]._id : undefined,
                },
            };
            queryParams['limit'] = 20;
            queryParams['sort'] = { _id: -1 };
            queryParams['relation'] = ['user', 'post'];
            this.last_unseen_index = this.activities.length;
            newActivities = yield _services_bucket__WEBPACK_IMPORTED_MODULE_0__.activity.getAll({
                queryParams,
            })
                .catch((err) => console.log(err));
            let newActivitiesArr = newActivities;
            if (newActivitiesArr.length > 0) {
                this.activities = newActivitiesArr.concat(this.activities);
            }
            this.activities = [
                ...new Map(this.activities.map((item) => [item['_id'], item])).values(),
            ];
            this.$activities.next(this.activities);
        });
    }
};
ActivityService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ActivityService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], ActivityService);



/***/ }),

/***/ 56634:
/*!**********************************************************!*\
  !*** ./src/app/social-media/tabs/tabs-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 50504);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_social-media_components_components_module_ts"), __webpack_require__.e("src_app_social-media_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/home.module */ 27290)).then((m) => m.HomePageModule),
            },
            {
                path: 'discover',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_social-media_components_components_module_ts"), __webpack_require__.e("src_app_social-media_pages_discover_discover-routing_module_ts-src_app_social-media_pages_dis-7ee031")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/discover/discover.module */ 79314)).then((m) => m.DiscoverPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_social-media_components_components_module_ts"), __webpack_require__.e("default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 40442:
/*!**************************************************!*\
  !*** ./src/app/social-media/tabs/tabs.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 56634);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 50504);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 50504:
/*!************************************************!*\
  !*** ./src/app/social-media/tabs/tabs.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 10367);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 83363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bucket */ 63648);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 4957);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chat.service */ 44010);
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/activity.service */ 51194);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ 14911);
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.service */ 36126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ 68965);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/common.service */ 5620);














let TabsPage = class TabsPage {
    constructor(_userService, _chatService, _activityService, _tabsService, _translateService, _dataService, _router, _authService, _commonService) {
        this._userService = _userService;
        this._chatService = _chatService;
        this._activityService = _activityService;
        this._tabsService = _tabsService;
        this._translateService = _translateService;
        this._dataService = _dataService;
        this._router = _router;
        this._authService = _authService;
        this._commonService = _commonService;
        this.isOldUser = false;
        this.selectedTab = 'home';
        this.unreadMessages = 0;
        this.loading = true;
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize)({ identity: localStorage.getItem('socialmedia_spica_token') });
    }
    ngOnInit() {
        this.getMe();
    }
    getMe() {
        this.userSubscribe = this._userService.getActiveUser(true).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var _a;
            if (data && !this.me) {
                this.me = data;
                this.loading = false;
                this._router.navigate(['/social-media/tabs/home'], {
                    replaceUrl: true,
                });
                this.isOldUser =
                    new Date(this.me.created_at).getTime() <
                        new Date().getTime() - 600 * 1000;
                this._chatService.initialize();
                this._activityService.initialize();
                this._translateService.setDefaultLang('en');
                this._translateService.currentLang = 'en';
                yield this._dataService
                    .setOnline('user', {}, (_a = this === null || this === void 0 ? void 0 : this.me) === null || _a === void 0 ? void 0 : _a._id)
                    .toPromise();
            }
            else
                this.loading = false;
        }), (err) => console.log('err :', err));
        this._tabsService
            .watchBackdropImage()
            .subscribe((data) => (this.backDropImage = data));
        document.addEventListener('ionBackButton', (ev) => {
            this.backDropImage = null;
        });
        this._router.events.subscribe((e) => {
            if (e.hasOwnProperty('url')) {
                this.selectedTab = e['url'].split('/');
                this.selectedTab = this.selectedTab[3];
            }
            this._tabsService.selectedTab = this.selectedTab;
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.userSubscribe.unsubscribe();
    }
    login(loginData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this._authService
                .login(loginData.email, loginData.password)
                .toPromise()
                .then((_) => {
                this._userService.$userRequest = undefined;
                this.getMe();
            }, (err) => {
                this.loading = false;
                this._commonService.presentToast(err.message, 1500);
            });
        });
    }
    register(registerData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this._authService
                .register(Object.assign({}, registerData))
                .toPromise()
                .then((res) => {
                this.login(registerData);
                this._commonService.presentToast(res['message'], 1500);
            })
                .catch((err) => {
                this._commonService.presentToast(err.error.message, 1500);
            });
        });
    }
    routeTab(route) {
        this._router.navigateByUrl('/social-media/tabs/' + route, {
            replaceUrl: true,
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService },
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_5__.ActivityService },
    { type: _tabs_service__WEBPACK_IMPORTED_MODULE_7__.TabsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_9__.CommonService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 83363:
/*!**************************************************!*\
  !*** ./src/app/social-media/tabs/tabs.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tab-selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsK0JBQUE7QUFBSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItc2VsZWN0ZWQge1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 10367:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/tabs/tabs.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-tabs *ngIf=\"me && !loading\">\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button\n        [class.tab-selected]=\"selectedTab=='home'\"\n        (click)=\"routeTab('home')\"\n      >\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n      <ion-tab-button\n        (click)=\"routeTab('discover')\"\n        [class.tab-selected]=\"selectedTab=='discover'\"\n      >\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <ion-label>Discover</ion-label>\n      </ion-tab-button>\n      <ion-tab-button\n        (click)=\"selectedTab = 'profile' ; routeTab('profile/' + this.me?._id)\"\n        [class.tab-selected]=\"selectedTab=='profile'\"\n      >\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  <spica-authorization\n    *ngIf=\"!me && !loading\"\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n  ></spica-authorization>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_tabs_tabs_module_ts.js.map