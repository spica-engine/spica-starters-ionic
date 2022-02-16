(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6"],{

/***/ 52578:
/*!************************************************************************************!*\
  !*** ./src/app/social-media/pages/social-profile/social-profile-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialProfilePageRoutingModule": () => (/* binding */ SocialProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _social_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-profile.page */ 78341);




const routes = [
    {
        path: '',
        children: [
            {
                path: ':userId',
                children: [
                    {
                        path: '',
                        component: _social_profile_page__WEBPACK_IMPORTED_MODULE_0__.SocialProfilePage,
                    },
                    {
                        path: 'friends',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_friend_friend_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../friend/friend.module */ 34323)).then((m) => m.FriendPageModule),
                    },
                    {
                        path: 'settings',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 54034)).then((m) => m.SettingsPageModule),
                    },
                    {
                        path: 'profile-edit',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_profile-edit_profile-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile-edit/profile-edit.module */ 26731)).then((m) => m.ProfileEditPageModule),
                    },
                    {
                        path: 'chats',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_social-media_pages_chat_chats_chats_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chats/chats.module */ 40089)).then((m) => m.ChatsPageModule),
                    },
                    {
                        path: 'profile',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
                    },
                ],
            },
        ],
    },
];
let SocialProfilePageRoutingModule = class SocialProfilePageRoutingModule {
};
SocialProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SocialProfilePageRoutingModule);



/***/ }),

/***/ 3107:
/*!****************************************************************************!*\
  !*** ./src/app/social-media/pages/social-profile/social-profile.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SocialProfilePageModule": () => (/* binding */ SocialProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _social_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-profile-routing.module */ 52578);
/* harmony import */ var _social_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-profile.page */ 78341);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
let SocialProfilePageModule = class SocialProfilePageModule {
};
SocialProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _social_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.SocialProfilePageRoutingModule,
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
        declarations: [_social_profile_page__WEBPACK_IMPORTED_MODULE_1__.SocialProfilePage],
    })
], SocialProfilePageModule);



/***/ }),

/***/ 78341:
/*!**************************************************************************!*\
  !*** ./src/app/social-media/pages/social-profile/social-profile.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialProfilePage": () => (/* binding */ SocialProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_social_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./social-profile.page.html */ 37439);
/* harmony import */ var _social_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-profile.page.scss */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 63648);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 4957);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ 59439);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ 44010);
/* harmony import */ var _services_hashtag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/hashtag.service */ 14260);
/* harmony import */ var _tabs_tabs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tabs/tabs.service */ 36126);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/environment */ 19874);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);





// import { ActivatedRoute, Router } from '@angular/router';


// import { ConfirmationModalComponent } from "src/app/components/generics/confirmation-modal/confirmation-modal.component";







let SocialProfilePage = class SocialProfilePage {
    constructor(_userService, _postService, activatedRoute, router, modalController, _chatService, _hashtagService, _tabService, actionSheetCtrl, translateService) {
        this._userService = _userService;
        this._postService = _postService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalController = modalController;
        this._chatService = _chatService;
        this._hashtagService = _hashtagService;
        this._tabService = _tabService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translateService = translateService;
        this.posts = [];
        this.likedPosts = [];
        this.loading = true;
        this.privateAccount = false;
        this.scroll_params = {
            skip: 0,
            limit: 5,
        };
        this.is_followed_person = false;
        this.default_user_image = _services_environment__WEBPACK_IMPORTED_MODULE_8__.environment.user_img;
        this.hasTags = [];
        this.progress_user = {
            follow: false,
            message: false,
        };
        this.discarded_post = '';
        this.is_blocked_me = false;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.setInitialSettings();
            this.infiniteScroll ? (this.infiniteScroll.disabled = true) : '';
            this.me = yield this._userService.getActiveUser().toPromise();
            this.user = yield this._userService.getUserById(this.activatedRoute.snapshot.paramMap.get('userId'));
            this.user.thumbnail = this.user.thumbnail || this.default_user_image;
            this.blocked_entry = this._userService.blockedUsers.filter((item) => item.blocked['_id'] == this.user._id)[0];
            let blockMe = yield this._userService.checkBlockedMe(this.user);
            this.is_blocked_me = blockMe[0] ? true : false;
            yield this.setFollowParams();
            if (this.blocked_entry) {
                this.loading = false;
            }
            else {
                if (!this.privateAccount)
                    this.getPosts();
                else {
                    this._userService.getWaitingRequest(this.user).then((requestData) => {
                        var _a;
                        this.wait_request_id = (_a = requestData[0]) === null || _a === void 0 ? void 0 : _a._id;
                        this.loading = false;
                    });
                }
            }
        });
    }
    getPosts() {
        this._postService
            .getPosts({
            filter: {
                user: this.user._id,
            },
            sort: { _id: -1 },
            skip: this.scroll_params.skip,
            limit: this.scroll_params.limit,
        })
            .then((data) => {
            var _a, _b;
            this.posts = this.posts.concat(data);
            this.loading = false;
            (_a = this.infiniteScroll) === null || _a === void 0 ? void 0 : _a.complete();
            (_b = this.ionRefresher) === null || _b === void 0 ? void 0 : _b.complete();
        }, (err) => {
            console.log('error while getting posts in profile :', err);
            this.loading = false;
        });
    }
    setFollowParams() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let follows = {
                follower: 0,
                following: 0,
            };
            this.follows_data = yield this.getFollows(this.user);
            this.follows_data.forEach((item) => {
                if (item.follower == this.user._id)
                    follows.following += 1;
                if (item.following == this.user._id)
                    follows.follower += 1;
                if (item.follower == this.me._id &&
                    item.following == this.user._id &&
                    !this.is_followed_person) {
                    this.follow_entry = item;
                    this.is_followed_person = true;
                }
            });
            this.user.follower_count = follows.follower;
            this.user.following_count = follows.following;
            if (!this.blocked_entry)
                this.privateAccount =
                    this.me._id != this.user._id &&
                        !this.is_followed_person &&
                        ((_a = this.user) === null || _a === void 0 ? void 0 : _a.visibility) == 'private';
        });
    }
    getFollows(user_data) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.follow.getAll({
            queryParams: {
                filter: {
                    $or: [{ follower: user_data._id }, { following: user_data._id }],
                },
            },
        });
    }
    followUser() {
        this.progress_user.follow = true;
        this.user = JSON.parse(JSON.stringify(this.user));
        if (this.blocked_entry) {
            this._userService.unBlockUser(this.blocked_entry).then(() => {
                var _a;
                this.blocked_entry = undefined;
                this.progress_user.follow = false;
                this.privateAccount =
                    this.me._id != this.user._id &&
                        !this.is_followed_person &&
                        ((_a = this.user) === null || _a === void 0 ? void 0 : _a.visibility) == 'private';
            });
        }
        else {
            if (this.privateAccount) {
                if (this.wait_request_id)
                    this.deleteWaitingRequest().then(() => {
                        this.wait_request_id = undefined;
                        this.progress_user.follow = false;
                    });
                else
                    this._userService.sendRequest(this.user).then((requestData) => {
                        this.wait_request_id = requestData._id;
                        this.progress_user.follow = false;
                    });
            }
            else {
                this.is_followed_person = true;
                this.user.follower_count += 1;
                this._userService.followUser(this.user).then((data) => {
                    this.follow_entry = data;
                    this.progress_user.follow = false;
                });
            }
        }
    }
    unFollowUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.progress_user.follow = true;
            this.is_followed_person = false;
            this.user.follower_count -= 1;
            yield this._userService.unFollowUser(this.follow_entry);
            if (this.user.visibility == 'private' && !this.blocked_entry)
                this.privateAccount = true;
            this.progress_user.follow = false;
        });
    }
    loadData() {
        this.scroll_params.skip =
            this.scroll_params.limit + this.scroll_params.skip;
        this.getPosts();
    }
    setInitialSettings() {
        this.loading = true;
        this.posts = [];
        this.likedPosts = [];
        if (this.infiniteScroll)
            this.infiniteScroll.disabled = false;
        this.scroll_params.skip = 0;
    }
    deletedPost(event) {
        this.loading = true;
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.post.remove(event).then(() => {
            this.posts = this.posts.filter((item) => item._id != event);
            this.loading = false;
            this.content.scrollToTop(0);
        });
    }
    editedPost(event) {
        let index = this.posts.findIndex((i) => i._id == event._id);
        if (index > 0)
            this.posts[index] = event;
        this.posts = JSON.parse(JSON.stringify(this.posts));
    }
    checkTagCreate(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.hasTags = yield this._hashtagService.checkTagCreate(text, this.hasTags);
        });
    }
    doRefresh(loading = false) {
        this.setInitialSettings();
        this.loading = loading;
        this.getPosts();
    }
    sendMessage() {
        this.progress_user.message = true;
        this._chatService.getChatByUserWithMe(this.user._id).then((data) => {
            this.progress_user.message = false;
            data[0]
                ? this.router.navigate([
                    `chats/${data[0]._id}`,
                    {
                        chat: JSON.stringify(data[0]),
                    },
                ], { relativeTo: this.activatedRoute })
                : this.navigateToChat();
        });
    }
    navigateToChat() {
        this.router.navigate([`chats/${undefined}`, { user: JSON.stringify(this.user) }], { relativeTo: this.activatedRoute });
    }
    followUsers() {
        this.setFollowParams();
    }
    userProcess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: this.translateService.instant('block_user'),
                        handler: () => {
                            // this.blockUser();
                            console.log('Cancel clicked');
                        },
                    },
                    {
                        text: this.translateService.instant('cancel'),
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
    // async blockUser() {
    //   const modal = await this.modalController.create({
    //     component: ConfirmationModalComponent,
    //     componentProps: {
    //       title: 'block_user',
    //       body: 'block_user_info',
    //     },
    //     cssClass: 'confirmation-modal-background',
    //   });
    //   await modal.present();
    //   const { data } = await modal.onWillDismiss();
    //   if (data.verify) {
    //     this.loading = true;
    //     this.blocked_entry = await this.userService
    //       .blockUser(this.user)
    //       .toPromise();
    //     if (this.is_followed_person) {
    //       await this.unFollowUser();
    //     }
    //     let followerData = this.follows_data.filter(
    //       (item) =>
    //         item.following == this.me._id && item.follower == this.user._id
    //     )[0];
    //     if (followerData) {
    //       await follow.remove(followerData._id).toPromise();
    //       this.userService.followerUsers = this.userService.followingUsers.filter(
    //         (item) => item._id != this.user._id
    //       );
    //     }
    //     if (this.wait_request_id) {
    //       await this.deleteWaitingRequest().toPromise();
    //       this.wait_request_id = undefined;
    //       this.progress_user.follow = false;
    //     }
    //     this.userService.userLikes = this.userService.userLikes.filter(
    //       (item) => item.post.user != this.user._id
    //     );
    //     this.privateAccount = false;
    //     this.loading = false;
    //   }
    // }
    deleteWaitingRequest() {
        return this._userService.deleteRequest(this.wait_request_id);
    }
    reportedPost(post, type) {
        this.discarded_post = post._id;
        setTimeout(() => {
            switch (type) {
                case 'post':
                    this.posts = this.posts.filter((item) => item._id != post._id);
                    break;
                case 'liked':
                    this.likedPosts = this.likedPosts.filter((item) => item._id != post._id);
                    break;
            }
            this.discarded_post = '';
        }, 300);
    }
    clickedImage() {
        if (!this.is_blocked_me)
            this._tabService.backDropImage = this.user.thumbnail;
    }
};
SocialProfilePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _services_hashtag_service__WEBPACK_IMPORTED_MODULE_6__.HashtagService },
    { type: _tabs_tabs_service__WEBPACK_IMPORTED_MODULE_7__.TabsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService }
];
SocialProfilePage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInfiniteScroll,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, static: false },] }],
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRefresher,] }]
};
SocialProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-social-profile',
        template: _raw_loader_social_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_social_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SocialProfilePage);



/***/ }),

/***/ 8047:
/*!****************************************************************************!*\
  !*** ./src/app/social-media/pages/social-profile/social-profile.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host.can-go-back ion-fab {\n  margin-left: 15px;\n}\n:host ion-fab {\n  margin-left: -10px;\n  height: 33px;\n  margin-top: 5px;\n  top: calc(10px + var(--ion-safe-area-top, 0px));\n}\n:host ion-fab ion-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n:host ion-fab-button[size=small] {\n  --size: 32px;\n  --color: var(--cd-text-color);\n  --background: var(--cd-background-color);\n}\n:host ion-fab-button {\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n}\n:host ion-fab-button.active {\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n:host ion-fab-list {\n  margin: 30px 0;\n}\n:host ion-fab-list ion-button {\n  background: var(--cd-background-color) !important;\n  color: var(--cd-text-color);\n  border-radius: 100px;\n  font-size: 0.8rem;\n}\n:host .custom-fab {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n:host .custom-fab ion-button {\n  height: 30px;\n  text-transform: none;\n  flex: 1;\n}\n:host ion-content {\n  --padding: 15px;\n}\n:host ion-content .user-posts {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .user-posts post-card {\n  transition: all 0.3s ease-out;\n}\n:host ion-content .user-posts post-card:last-of-type {\n  border-bottom: 0px;\n}\n:host ion-content .user-posts post-card.discarded {\n  transform: translateX(50px);\n  opacity: 0;\n}\n:host ion-content .user-posts .no-item {\n  text-align: center;\n  color: var(--ion-text-color);\n  opacity: 0.5;\n  width: 100%;\n  font-size: 0.8em;\n  padding-top: 30px;\n}\n:host .user_action_icon {\n  font-size: 1.25rem;\n  padding-right: 10px;\n}\n:host .profile-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 10px;\n}\n:host .profile-card .primary {\n  border-radius: 5px;\n  width: 100%;\n}\n:host .profile-card .primary .image-container {\n  text-align: center;\n  width: 100%;\n}\n:host .profile-card .primary .image-container .image {\n  position: relative;\n  height: 90px;\n  width: 90px;\n  border-radius: 100%;\n  object-fit: cover;\n  border: 4px solid var(--ion-color-primary);\n  margin: auto;\n}\n:host .profile-card .primary .user-info {\n  text-align: center;\n}\n:host .profile-card .primary .user-info .name {\n  padding: 5px 10px 5px;\n  color: var(--cd-text-color);\n}\n:host .profile-card .primary .user-info .business_mark {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  color: var(--ion-color-secondary);\n  font-size: 0.8rem;\n  font-weight: bold;\n  align-items: center;\n  padding-top: 5px;\n}\n:host .profile-card .primary .user-info .business_mark ion-icon {\n  color: var(--ion-color-secondary);\n  font-size: 1rem;\n  margin-right: 5px;\n}\n:host .profile-card .primary .user-info .tag {\n  padding: 5px 10px 10px;\n  color: var(--cd-component-text-color);\n}\n:host .profile-card .primary .personal-text {\n  margin: 0px 15px;\n}\n:host .profile-card .primary .personal-text pre {\n  text-align: center;\n  text-decoration: none;\n  font-family: unset;\n  margin: 0px;\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n}\n:host .profile-card .quick-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  justify-self: center;\n  width: 100%;\n  padding: 5px 10px;\n  margin-top: 10px;\n}\n:host .profile-card .quick-actions ion-button {\n  flex: 1;\n  height: 30px;\n}\n:host .profile-card .quick-actions ion-button ion-spinner {\n  width: 20px;\n  color: unset;\n}\n:host .profile-card .quick-actions action-icon {\n  margin: 0px 10px;\n  border: 1px solid var(--cd-divider-color);\n  border-radius: 100%;\n  width: 32px;\n  transform: rotateZ(-30deg);\n}\n:host .profile-card .quick-actions action-icon ::ng-deep ion-icon {\n  font-size: 1rem;\n}\n:host .profile-card .quick-actions.me .cell {\n  flex: 1 !important;\n}\n:host .profile-card .quick-actions .cell {\n  flex-basis: 25%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  font-size: 0.8rem;\n}\n:host .profile-card .quick-actions .cell .identifier {\n  color: var(--ion-color-medium);\n  margin-left: 5px;\n}\n:host .profile-card .quick-actions .cell:first-of-type:after {\n  content: \"|\";\n  position: absolute;\n  right: -2px;\n  color: var(--cd-divider-color);\n}\n:host ion-skeleton-text {\n  width: 2rem;\n  height: 1em;\n}\n:host ion-skeleton-text.identifier {\n  width: 4em;\n}\n:host ion-skeleton-text.personal-text {\n  margin: auto !important;\n  width: 12em;\n  height: 2em;\n  position: relative;\n  top: 3px;\n}\n:host ion-skeleton-text.name {\n  height: 1.2em;\n  width: 6em;\n  margin: auto;\n  margin-top: 10px;\n}\n:host .private-section,\n:host .blocked-section {\n  text-align: center;\n  margin: 10px;\n}\n:host .private-section ion-icon,\n:host .blocked-section ion-icon {\n  border: 1px solid;\n  border-radius: 50%;\n  padding: 10px;\n  font-weight: 500;\n  font-size: 30px;\n  text-align: center;\n}\n:host .private-section h6,\n:host .blocked-section h6 {\n  font-weight: 600;\n}\n:host .private-section > div,\n:host .blocked-section > div {\n  font-size: 15px;\n  padding-top: 5px;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUNFLGlCQUFBO0FBRFI7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtBQUZOO0FBSVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRlY7QUFNSTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0FBSk47QUFNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQUtNO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtBQUhSO0FBTUk7RUFDRSxjQUFBO0FBSk47QUFLTTtFQUNFLGlEQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFMTjtBQU9JO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsT0FBQTtBQUxOO0FBT0k7RUFDRSxlQUFBO0FBTE47QUFPTTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBTFI7QUFNUTtFQUNFLDZCQUFBO0FBSlY7QUFLVTtFQUNFLGtCQUFBO0FBSFo7QUFLVTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUhaO0FBTVE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSlY7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU5OO0FBT007RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFMUjtBQU1RO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBSlY7QUFLVTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBSFo7QUFPUTtFQUNFLGtCQUFBO0FBTFY7QUFNVTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUFKWjtBQU1VO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQUtZO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFIZDtBQU1VO0VBQ0Usc0JBQUE7RUFDQSxxQ0FBQTtBQUpaO0FBT1E7RUFDRSxnQkFBQTtBQUxWO0FBTVU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUpaO0FBU007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFQUjtBQVFRO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUFOVjtBQU9VO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMWjtBQVFRO0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBTlY7QUFPVTtFQUNFLGVBQUE7QUFMWjtBQVVVO0VBQ0Usa0JBQUE7QUFSWjtBQVlRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVlY7QUFXVTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7QUFUWjtBQVlZO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBVmQ7QUFnQkk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWROO0FBZU07RUFDRSxVQUFBO0FBYlI7QUFlTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFiUjtBQWVNO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWdCSTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUFkTjtBQWVNOztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWNNOztFQUNFLGdCQUFBO0FBWFI7QUFhTTs7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVZSIiwiZmlsZSI6InNvY2lhbC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAmLmNhbi1nby1iYWNrIHtcbiAgICAgIGlvbi1mYWIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWZhYiB7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB0b3A6IGNhbGMoMTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKTtcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1mYWItYnV0dG9uW3NpemU9XCJzbWFsbFwiXSB7XG4gICAgICAtLXNpemU6IDMycHg7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1jZC10ZXh0LWNvbG9yKTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY2QtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZmFiLWxpc3Qge1xuICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2QtYmFja2dyb3VuZC1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNkLXRleHQtY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuY3VzdG9tLWZhYiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY3VzdG9tLWZhYiBpb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1wYWRkaW5nOiAxNXB4O1xuICBcbiAgICAgIC51c2VyLXBvc3RzIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwb3N0LWNhcmQge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5kaXNjYXJkZWQge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5vLWl0ZW0ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnVzZXJfYWN0aW9uX2ljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLnByb2ZpbGUtY2FyZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIC5wcmltYXJ5IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY2QtdGV4dC1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXNpbmVzc19tYXJrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC50YWcge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jZC1jb21wb25lbnQtdGV4dC1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wZXJzb25hbC10ZXh0IHtcbiAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xuICAgICAgICAgIHByZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogdW5zZXQ7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIC5xdWljay1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBpb24tc3Bpbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2QtZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTMwZGVnKTtcbiAgICAgICAgICA6Om5nLWRlZXAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgJi5tZSB7XG4gICAgICAgICAgLmNlbGwge1xuICAgICAgICAgICAgZmxleDogMSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgLmNlbGwge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAuaWRlbnRpZmllciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwifFwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMnB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY2QtZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAmLmlkZW50aWZpZXIge1xuICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgfVxuICAgICAgJi5wZXJzb25hbC10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMmVtO1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgIH1cbiAgICAgICYubmFtZSB7XG4gICAgICAgIGhlaWdodDogMS4yZW07XG4gICAgICAgIHdpZHRoOiA2ZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnByaXZhdGUtc2VjdGlvbixcbiAgICAuYmxvY2tlZC1zZWN0aW9uIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICA+IGRpdiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 37439:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/social-profile/social-profile.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{user?.username}} </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"me?._id==user?._id\">\n      <ion-button [routerLink]=\"['profile-edit',me?._id]\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </ion-button>\n      <ion-button [routerLink]=\"['settings']\">\n        <ion-icon name=\"cog-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons\n      *ngIf=\"!loading&& me?._id!=user?._id && !blocked_entry && !is_blocked_me\"\n      slot=\"end\"\n    >\n      <ion-icon\n        class=\"user_action_icon\"\n        name=\"ellipsis-vertical-outline\"\n        (click)=\"userProcess()\"\n      ></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div class=\"user-profile\">\n    <div class=\"profile-card\">\n      <div class=\"primary\">\n        <div class=\"image-container\">\n          <img\n            (click)=\"clickedImage()\"\n            class=\"image\"\n            *ngIf=\"user?.thumbnail\"\n            [src]=\"is_blocked_me ? default_user_image : user?.thumbnail\"\n          />\n        </div>\n        <div class=\"user-info\" *ngIf=\"!is_blocked_me\">\n          <div *ngIf=\"user\" class=\"name\">\n            {{(user.name ? user.name + \" \" : '') + (user.surname ? user.surname\n            :'')}}\n          </div>\n        </div>\n        <div class=\"personal-text\" *ngIf=\"!is_blocked_me\">\n          <pre *ngIf=\"user\">{{user.headline}}</pre>\n        </div>\n      </div>\n      <div\n        class=\"quick-actions\"\n        [class.private]=\"privateAccount\"\n        [class.me]=\"me && me?._id==user?._id\"\n        *ngIf=\"!is_blocked_me\"\n      >\n        <ion-button\n          *ngIf=\"me && me?._id!=user?._id && user?.hasOwnProperty('following_count')\"\n          [disabled]=\"progress_user.follow\"\n          (click)=\"is_followed_person ? unFollowUser() : followUser()\"\n          >{{(is_followed_person ? 'unfollow' :(blocked_entry ? 'unblock' : (\n          wait_request_id ? 'send_request' : 'follow'))) | translate}}\n          <ion-spinner\n            class=\"spinner-center-page\"\n            *ngIf=\"progress_user.follow\"\n          ></ion-spinner>\n        </ion-button>\n        <action-icon\n          *ngIf=\"me && me?._id!=user?._id && !privateAccount &&!blocked_entry&& user?.hasOwnProperty('following_count')\"\n          [disabled]=\"progress_user.message\"\n          fill=\"outline\"\n          (click)=\"sendMessage()\"\n          [icon]=\"'send-outline'\"\n          [count]=\"-1\"\n        ></action-icon>\n        <div\n          *ngIf=\"user?.hasOwnProperty('follower_count')\"\n          class=\"cell\"\n          [routerLink]=\"['friends',user?._id,0]\"\n        >\n          <div>{{user['follower_count']}}</div>\n          <div class=\"identifier\">{{\"followers\" | translate}}</div>\n        </div>\n        <div\n          *ngIf=\"user?.hasOwnProperty('following_count')\"\n          class=\"cell\"\n          [routerLink]=\"['friends',user?._id,1]\"\n        >\n          <div>{{user['following_count']}}</div>\n          <div class=\"identifier\">{{\"following\" | translate}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n  <div\n    class=\"user-posts\"\n    *ngIf=\"!loading && !(privateAccount || blocked_entry) && !is_blocked_me\"\n  >\n    <ion-refresher\n      slot=\"fixed\"\n      pullFactor=\"0.5\"\n      pullMin=\"100\"\n      pullMax=\"200\"\n      (ionRefresh)=\"doRefresh()\"\n    >\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <post-card\n      *ngFor=\"let post of posts\"\n      [post]=\"post\"\n      [class.discarded]=\"discarded_post==post._id\"\n      (deletedPost)=\"deletedPost($event)\"\n      (editedPost)=\"editedPost($event)\"\n      (followUsers)=\"followUsers()\"\n      (rePorted)=\"reportedPost($event,'post')\"\n      [with_router]=\"false\"\n    >\n    </post-card>\n    <div class=\"no-item\" *ngIf=\"posts.length==0&& !loading\">\n      {{\"non-posts\" |translate}}\n    </div>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData()\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div\n    *ngIf=\"!loading &&privateAccount && !is_blocked_me\"\n    class=\"private-section\"\n  >\n    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n    <h6>{{\"private_account_info.title\" |translate}}</h6>\n    <div class=\"info-body\">{{\"private_account_info.body\" |translate}}</div>\n  </div>\n  <div\n    *ngIf=\"!loading &&blocked_entry&&  !is_blocked_me\"\n    class=\"blocked-section\"\n  >\n    <ion-icon name=\"information-outline\"></ion-icon>\n    <h6>{{\"blocked_account_info.title\" |translate}}</h6>\n    <div class=\"info-body\">{{\"blocked_account_info.body\" |translate}}</div>\n  </div>\n  <div *ngIf=\"is_blocked_me\" class=\"blocked-section\">\n    <ion-icon name=\"information-outline\"></ion-icon>\n    <h6>{{\"blocking_account_info\" |translate}}</h6>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6.js.map