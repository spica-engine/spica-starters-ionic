(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_home_home_module_ts"],{

/***/ 25642:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/home/home-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 76152);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6").then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
            },
            // {
            //   path: "discover",
            //   loadChildren: () =>
            //     import("./pages/discover/discover.module").then(
            //       (m) => m.DiscoverPageModule
            //     ),
            // },
            {
                path: 'chats',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_chat_chats_chats_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chats/chats.module */ 40089)).then((m) => m.ChatsPageModule),
            },
            {
                path: 'activity',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_activity_activity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../activity/activity.module */ 72997)).then((m) => m.ActivityPageModule),
            },
        ],
    },
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

/***/ 27290:
/*!********************************************************!*\
  !*** ./src/app/social-media/pages/home/home.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 25642);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 76152);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
                extend: true,
            }),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 76152:
/*!******************************************************!*\
  !*** ./src/app/social-media/pages/home/home.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 81499);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 22448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ 59439);
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/activity.service */ 51194);
/* harmony import */ var _services_hashtag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/hashtag.service */ 14260);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/chat.service */ 44010);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 4957);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/bucket */ 63648);
/* harmony import */ var _post_create_post_create_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-create/post-create.page */ 83437);













let HomePage = class HomePage {
    constructor(_userService, _postService, _activityService, _hashtagService, modalController, _chatService, _toastController, _translateService) {
        this._userService = _userService;
        this._postService = _postService;
        this._activityService = _activityService;
        this._hashtagService = _hashtagService;
        this.modalController = modalController;
        this._chatService = _chatService;
        this._toastController = _toastController;
        this._translateService = _translateService;
        this.posts = [];
        this.loading = true;
        this.scroll_params = {
            skip: 0,
            limit: 10,
        };
        this.hasTags = [];
        this.discarded_post = '';
        this.unreadMessages = 0;
        this.user_followers = [];
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_7__.initialize)({ identity: localStorage.getItem('socialmedia_spica_token') });
    }
    ngOnInit() {
        this.activitySubscribe = this._activityService
            .getUnseenActivity()
            .subscribe((data) => (this.unseenActivities = data));
        this.chatSubscribe = this._chatService
            .getUnreadMessageCount()
            .subscribe((data) => (this.unreadMessages = data));
        this.userSubscription = this._userService
            .getActiveUser()
            .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (data && !this.me) {
                this.me = data;
                yield this.setFollowers();
                this.getPosts();
            }
        }));
    }
    ngOnDestroy() {
        this.activitySubscribe.unsubscribe();
        this.chatSubscribe.unsubscribe();
        this.userSubscription.unsubscribe();
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    }
    setFollowers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let followers = yield this.getUserFollowing();
            this.user_followers = followers.map((item) => (item = item.following));
            this.user_followers.push(this.me._id);
        });
    }
    getUserFollowing() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_7__.follow.getAll({
            queryParams: {
                filter: {
                    follower: this.me._id,
                },
            },
        });
    }
    getPosts() {
        this._postService
            .getPosts({
            filter: { user: { $in: this.user_followers } },
            sort: { _id: -1 },
            skip: this.scroll_params.skip,
            limit: this.scroll_params.limit,
        })
            .then((data) => {
            this.posts = this.posts.concat(data);
            this.loading = false;
            this.ionRefresher.complete();
            if (this.infiniteScroll)
                this.infiniteScroll.complete();
        });
    }
    loadData() {
        this.scroll_params.skip += this.scroll_params.limit;
        this.getPosts();
    }
    setInitialSettings() {
        if (this.infiniteScroll)
            this.infiniteScroll.disabled = false;
        this.scroll_params.skip = 0;
    }
    deletedPost(event) {
        this.discarded_post = event;
        _services_bucket__WEBPACK_IMPORTED_MODULE_7__.post.remove(event).then(() => {
            this.posts = this.posts.filter((item) => item._id != event);
            this.discarded_post = '';
            this.content.scrollToTop(0);
        });
    }
    checkTagCreate(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.hasTags = yield this._hashtagService.checkTagCreate(text, this.hasTags);
        });
    }
    editedPost(event) {
        let index = -1;
        index = this.posts.findIndex((i) => i._id == event._id);
        if (index != -1) {
            this.posts[index] = event;
            this.posts = JSON.parse(JSON.stringify(this.posts));
        }
    }
    doRefresh() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.posts = [];
            yield this.setFollowers();
            this.setInitialSettings();
            this.loading = false;
            this.getPosts();
        });
    }
    reportedPost(post) {
        this.discarded_post = post._id;
        this.posts = this.posts.filter((item) => item._id != post._id);
        this.discarded_post = '';
    }
    addPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _post_create_post_create_page__WEBPACK_IMPORTED_MODULE_8__.PostCreatePage,
                swipeToClose: true,
                componentProps: {
                    user: this.me,
                },
            });
            yield modal.present();
            let resData = yield modal.onDidDismiss();
            if (resData.data.refresh) {
                this._postService
                    .getPosts({ filter: { _id: { $in: [resData.data.editpost._id] } } })
                    .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    this.posts.unshift(data[0]);
                    this.content.scrollToTop();
                    let toast = yield this._toastController.create({
                        header: this._translateService.instant('post-create-info'),
                        duration: 3000,
                        cssClass: 'toast-custom-class',
                    });
                    toast.present();
                }));
                this.content.scrollToTop();
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_3__.ActivityService },
    { type: _services_hashtag_service__WEBPACK_IMPORTED_MODULE_4__.HashtagService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService }
];
HomePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInfiniteScroll, { static: false },] }],
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRefresher,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 22448:
/*!********************************************************!*\
  !*** ./src/app/social-media/pages/home/home.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .logo {\n  align-items: center;\n  display: flex;\n  color: var(--cd-logo-color);\n  font-weight: bold;\n}\n:host .logo ion-icon {\n  padding-right: 10px;\n}\n:host ion-toolbar {\n  --border-color: var(--cd-divider-color);\n}\n:host ion-toolbar ion-icon {\n  width: 30px;\n  height: 30px;\n}\n:host ion-toolbar .with_badge ion-icon {\n  padding-right: 3px;\n}\n:host ion-toolbar .with_badge ion-badge {\n  position: absolute;\n  top: 0;\n  right: -5px;\n}\n:host ion-fab-button {\n  font-size: 2rem;\n}\n:host .premium-explores {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n}\n:host .premium-explores .title {\n  font-weight: bold;\n  font-size: 1.2rem;\n  padding: 0px 10px;\n}\n:host .premium-explores .cards {\n  display: flex;\n  position: relative;\n  padding: 15px 10px 30px;\n  border-bottom: 1px solid var(--cd-divider-color);\n  overflow-x: auto;\n}\n:host .premium-explores .cards .user-card {\n  padding: 0px 3px;\n}\n:host .home-posts {\n  display: flex;\n  flex-direction: column;\n}\n:host .home-posts post-card {\n  transition: all 0.3s ease-out;\n  scroll-snap-align: start;\n}\n:host .home-posts post-card:last-of-type {\n  border-bottom: 0px;\n}\n:host .home-posts post-card.discarded {\n  transform: translateX(50px);\n  opacity: 0;\n}\n:host .discover-seperator {\n  font-weight: bold;\n  font-size: 1.2rem;\n  padding: 15px;\n}\n:host .info-backdrop {\n  opacity: 0.3;\n}\n:host .spica-card .body-content .image img {\n  border-radius: 4px;\n  max-height: 250px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBR0U7RUFDRSx1Q0FBQTtBQURKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFOO0FBR007RUFDRSxrQkFBQTtBQURSO0FBR007RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRFI7QUFLRTtFQUNFLGVBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdCQUFBO0FBSE47QUFJTTtFQUNFLGdCQUFBO0FBRlI7QUFNRTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtBQUxKO0FBTUk7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0FBSk47QUFLTTtFQUNFLGtCQUFBO0FBSFI7QUFLTTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUhSO0FBT0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0FBTko7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVRKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubG9nbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1jZC1sb2dvLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBpb24taWNvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY2QtZGl2aWRlci1jb2xvcik7XG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC53aXRoX2JhZGdlIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgfVxuICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5wcmVtaXVtLWV4cGxvcmVzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB9XG5cbiAgICAuY2FyZHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweCAzMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNkLWRpdmlkZXItY29sb3IpO1xuICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIC51c2VyLWNhcmQge1xuICAgICAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG9tZS1wb3N0cyB7XG4gICAgLy9wYWRkaW5nOiAxNXB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zdC1jYXJkIHtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XG4gICAgICB9XG4gICAgICAmLmRpc2NhcmRlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHB4KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRpc2NvdmVyLXNlcGVyYXRvciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5pbmZvLWJhY2tkcm9wIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAuc3BpY2EtY2FyZCAuYm9keS1jb250ZW50IC5pbWFnZSBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 81499:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/home/home.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <div class=\"logo\">\n        <ion-icon name=\"logo-ionic\"></ion-icon>\n        {{\"Social Media\" |translate}}\n      </div>\n    </ion-buttons>\n    <ion-title> </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"with_badge\" [routerLink]=\"['chats/list']\">\n        <ion-icon name=\"mail-outline\"></ion-icon>\n        <ion-badge color=\"primary\" *ngIf=\"unreadMessages\"\n          >{{unreadMessages}}</ion-badge\n        >\n      </ion-button>\n      <ion-button [routerLink]=\"['activity']\" class=\"with_badge\">\n        <ion-icon name=\"notifications-outline\"></ion-icon>\n        <ion-badge color=\"primary\" *ngIf=\"unseenActivities\"\n          >{{unseenActivities}}</ion-badge\n        >\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen [scrollEvents]=\"true\">\n  <div class=\"home-posts\">\n    <ion-refresher\n      slot=\"fixed\"\n      pullFactor=\"0.5\"\n      pullMin=\"100\"\n      pullMax=\"200\"\n      (ionRefresh)=\"doRefresh()\"\n    >\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ng-container>\n      <ng-container *ngFor=\"let post of posts;let index = index\">\n        <post-card\n          [class.discarded]=\"discarded_post==post._id\"\n          [post]=\"post\"\n          (deletedPost)=\"deletedPost($event)\"\n          (editedPost)=\"editedPost($event)\"\n          (rePorted)=\"reportedPost($event)\"\n        >\n        </post-card>\n      </ng-container>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData()\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ng-container>\n\n    <ion-spinner\n      *ngIf=\"loading\"\n      class=\"spinner-center-page\"\n      name=\"crescent\"\n    ></ion-spinner>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addPost()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_home_home_module_ts.js.map