(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_discover_discover-routing_module_ts-src_app_social-media_pages_dis-7ee031"],{

/***/ 58455:
/*!************************************************************************!*\
  !*** ./src/app/social-media/pages/discover/discover-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageRoutingModule": () => (/* binding */ DiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover.page */ 20970);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage,
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6").then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
            },
            {
                path: ':search',
                children: [
                    {
                        path: '',
                        component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage,
                    },
                    {
                        path: 'profile',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6").then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
                    },
                    {
                        path: 'discover',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../discover/discover.module */ 79314)).then((m) => m.DiscoverPageModule),
                    },
                ],
            },
        ],
    },
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ 79314:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/discover/discover.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageModule": () => (/* binding */ DiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover-routing.module */ 58455);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page */ 20970);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);









let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscoverPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild()
        ],
        declarations: [
            _discover_page__WEBPACK_IMPORTED_MODULE_1__.DiscoverPage,
        ]
    })
], DiscoverPageModule);



/***/ }),

/***/ 20970:
/*!**************************************************************!*\
  !*** ./src/app/social-media/pages/discover/discover.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPage": () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discover.page.html */ 44146);
/* harmony import */ var _discover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page.scss */ 121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/bucket */ 63648);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/post.service */ 59439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_hashtag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/hashtag.service */ 14260);










let DiscoverPage = class DiscoverPage {
    constructor(_postService, _router, _activatedRoute, _hashtagService) {
        this._postService = _postService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._hashtagService = _hashtagService;
        this.posts = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.loading = true;
        this.showMentions = true;
        this.scroll_params = {
            skip: 0,
            limit: 9,
        };
        this.hasTags = [];
        this.showedSegment = 0;
        this.discarded_post = '';
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.posts = [];
            this.showMentions = false;
            this.hashtagId = yield this._activatedRoute.snapshot.paramMap.get('search');
            if (this.hashtagId) {
                this.posts = yield this._postService.getPosts({
                    filter: { hashtags: { $in: [this.hashtagId] } },
                    sort: { _id: -1 },
                });
                this.searchedText =
                    '#' +
                        this.posts[0].hashtags.filter((i) => i['_id'] == this.hashtagId)[0]['hashtag'];
                this.loading = false;
            }
            else {
                this.content.scrollToTop(0);
                if (this.infiniteScroll)
                    this.infiniteScroll.disabled = true;
                this.setInitialSettings();
                this.getPosts();
            }
        });
    }
    getPosts() {
        let subs;
        if (this.hashtagId) {
            subs = this._postService.getPosts({
                filter: {
                    hashtags: { $in: [this.hashtagId] },
                },
                sort: { _id: -1 },
                skip: this.scroll_params.skip,
                limit: this.scroll_params.limit,
            });
        }
        else if (this.searchedText && this.searchedText != '') {
            subs = this._postService.getPosts({
                filter: {
                    'hashtags._id': { $ne: [] },
                    'hashtags.hashtag': { $regex: this.searchedText, $options: 'i' },
                },
                sort: { _id: -1 },
                skip: this.scroll_params.skip,
                limit: this.scroll_params.limit,
            });
        }
        else {
            subs = this._postService
                .getExplorePosts(this.scroll_params.limit)
                .toPromise();
        }
        subs.then((data) => {
            var _a, _b;
            this.loading = false;
            this.posts = this.posts.concat(data.filter((item) => !this.posts.some((item2) => item2._id == item._id)));
            (_a = this.ionRefresher) === null || _a === void 0 ? void 0 : _a.complete();
            (_b = this.infiniteScroll) === null || _b === void 0 ? void 0 : _b.complete();
            if (this.infiniteScroll)
                this.infiniteScroll.disabled = false;
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
        this.scroll_params.skip = 0;
    }
    goToUser(user) {
        this._router.navigate([`profile/${user._id}`], {
            relativeTo: this._activatedRoute,
        });
    }
    searchPostsWithTag(tag) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.showMentions = false;
            this.hashtagId = tag._id;
            this.setInitialSettings();
            this.getPosts();
            this.searchedText = '#' + tag.hashtag;
        });
    }
    deletedPost(event) {
        this.loading = true;
        this.discarded_post = event;
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.post.remove(event).then((_) => {
            this.posts = this.posts.filter((item) => item._id != event);
            this.loading = false;
            this.content.scrollToTop(0);
            this.discarded_post = '';
        });
    }
    editedPost(event) {
        let index = this.posts.findIndex((i) => i._id == event._id);
        if (index > 0)
            this.posts[index] = event;
        this.posts = JSON.parse(JSON.stringify(this.posts));
        this.content.scrollToTop(0);
    }
    checkTagCreate(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.hasTags = yield this._hashtagService.checkTagCreate(text, this.hasTags);
        });
    }
    getPostByHashTag(event) {
        if (this.searchedText == '') {
            this.loading = true;
            this.mentionText = '';
            this.hashtagId = undefined;
            this.scroll_params.skip = 0;
            this.getPosts();
            this.showMentions = false;
            this.searchedText = undefined;
            this.showedSegment = 0;
            return;
        }
        this.showMentions = true;
        if (this.searchedText.substr(0, 1) == '#') {
            this.hashtagId = undefined;
            this.mentionText = event;
            this.setInitialSettings();
            this.getPosts();
            this.showedSegment = 1;
        }
        else {
            this.mentionText = event.substr(0, 1) == '@' ? event : '@' + event;
        }
    }
    doRefresh() {
        this.setInitialSettings();
        this.loading = false;
        this.getPosts();
    }
    segmentChanged(event) {
        this.showedSegment = event;
        let text = '';
        switch (event) {
            case 0:
                text =
                    this.mentionText.substr(0, 1) == '#'
                        ? this.mentionText.substr(1)
                        : this.mentionText;
                break;
            case 1:
                text =
                    this.mentionText.substr(0, 1) == '@'
                        ? '#' + this.mentionText.substr(1)
                        : this.mentionText;
                break;
        }
        this.searchedText = text;
        this.getPostByHashTag(text);
    }
    reportedPost(post) {
        this.discarded_post = post._id;
        setTimeout(() => {
            this.posts = this.posts.filter((item) => item._id != post._id);
            this.discarded_post = '';
        }, 300);
    }
};
DiscoverPage.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_hashtag_service__WEBPACK_IMPORTED_MODULE_4__.HashtagService }
];
DiscoverPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll,] }],
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRefresher,] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, static: false },] }]
};
DiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-discover',
        template: _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscoverPage);



/***/ }),

/***/ 121:
/*!****************************************************************!*\
  !*** ./src/app/social-media/pages/discover/discover.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-buttons {\n  align-self: center;\n}\n:host ion-content ion-fab {\n  margin: 10px;\n}\n:host ion-content .posts {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\n:host ion-content .posts post-card {\n  margin: 5px 0px;\n  transition: all 0.3s ease-out;\n}\n:host ion-content .posts post-card:last-of-type {\n  border-bottom: 0px;\n}\n:host ion-content .posts post-card.discarded {\n  transform: translateX(50px);\n  opacity: 0;\n}\n:host ion-content .picked-for-you {\n  transform: translateX(-15px);\n  width: calc(100% + 30px);\n  margin-bottom: 40px;\n}\n:host ion-content .picked-for-you ion-list-header {\n  margin-bottom: 10px;\n}\n:host ion-content .picked-for-you ion-item {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n:host mentions {\n  display: block;\n  position: relative;\n  padding: 10px 15px;\n}\n:host ion-searchbar {\n  padding: 0px 15px;\n}\n:host ::ng-deep post-card.image-only {\n  padding: 2px 0px;\n  margin: unset !important;\n  border: 0px !important;\n  padding-bottom: 0px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 1) {\n  width: 33%;\n  padding-right: 3px !important;\n  padding-left: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 2) {\n  width: 33%;\n  padding-left: 3px !important;\n  padding-right: 3px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 3) {\n  width: 33%;\n  padding-left: 3px !important;\n  padding-right: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 4) {\n  width: 66%;\n  padding-right: 3px !important;\n  padding-left: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 5) {\n  width: 33%;\n  padding-left: 3px !important;\n  padding-right: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 6) {\n  width: 33%;\n  padding-right: 3px !important;\n  padding-left: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 7) {\n  width: 33%;\n  padding-right: 3px !important;\n  padding-left: 3px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 8) {\n  width: 33%;\n  padding-left: 3px !important;\n  padding-right: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n + 9) {\n  width: 33%;\n  padding-right: 3px !important;\n  padding-left: 10px !important;\n}\n:host ::ng-deep post-card.image-only:nth-of-type(10n) {\n  width: 66%;\n  padding-left: 3px !important;\n  padding-right: 10px !important;\n}\n:host ::ng-deep post-card.image-only .header {\n  display: none !important;\n}\n:host ::ng-deep post-card.image-only .message {\n  display: none !important;\n}\n:host ::ng-deep post-card.image-only .image-container {\n  pointer-events: none;\n}\n:host ::ng-deep post-card.image-only .image-container video,\n:host ::ng-deep post-card.image-only .image-container img,\n:host ::ng-deep post-card.image-only .image-container iframe {\n  background: #efefef;\n  width: 100% !important;\n  height: calc(33vw - 13px) !important;\n  max-height: calc(33vw - 13px) !important;\n  margin: 0px !important;\n  border-radius: 20px !important;\n  min-height: calc(33vw - 13px) !important;\n}\n:host ::ng-deep post-card.image-only .image-container .shadow {\n  display: none;\n}\n:host ::ng-deep post-card.image-only .actions {\n  display: none !important;\n}\n:host ::ng-deep post-card.image-only .created-at {\n  display: none;\n}\n:host .divider {\n  width: 100% !important;\n  font-weight: bold !important;\n  font-size: 1.3rem;\n  padding: 20px 10px;\n}\n:host .segments {\n  padding: 0 5px 15px 5px;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n  background: var(--background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0FBRE47QUFLSTtFQUNFLFlBQUE7QUFITjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUhOO0FBSU07RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFGUjtBQUdRO0VBQ0Usa0JBQUE7QUFEVjtBQUdRO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0FBRFY7QUFLSTtFQUNFLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQUhOO0FBSU07RUFDRSxtQkFBQTtBQUZSO0FBSU07RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBRlI7QUFPRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFRRTtFQUNFLGlCQUFBO0FBTko7QUFXSTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBVE47QUFVTTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBUlI7QUFVTTtFQUNFLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FBUlI7QUFVTTtFQUNFLHdCQUFBO0FBUlI7QUFVTTtFQUNFLHdCQUFBO0FBUlI7QUFVTTtFQUNFLG9CQUFBO0FBUlI7QUFTUTs7O0VBR0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QUFQVjtBQVNRO0VBQ0UsYUFBQTtBQVBWO0FBVU07RUFDRSx3QkFBQTtBQVJSO0FBVU07RUFDRSxhQUFBO0FBUlI7QUFhRTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWEo7QUFhRTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQVhKIiwiZmlsZSI6ImRpc2NvdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWhlYWRlciB7XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgaW9uLWZhYiB7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIC5wb3N0cyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgcG9zdC1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICAmLmRpc2NhcmRlZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwcHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnBpY2tlZC1mb3IteW91IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtZW50aW9ucyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxuXG4gIGlvbi1zZWFyY2hiYXIge1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAkcGFkZGluZzogM3B4O1xuICAgIHBvc3QtY2FyZC5pbWFnZS1vbmx5IHtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gICAgICBtYXJnaW46IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgJjpudGgtb2YtdHlwZSgxMG4gKyAxKSB7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgJjpudGgtb2YtdHlwZSgxMG4gKyAyKSB7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogJHBhZGRpbmcgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmcgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTBuICsgMykge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTBuICsgNCkge1xuICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZyAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTBuICsgNSkge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTBuICsgNikge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZyAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgICY6bnRoLW9mLXR5cGUoMTBuICsgNykge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkcGFkZGluZyAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEwbiArIDgpIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAkcGFkZGluZyAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEwbiArIDkpIHtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHBhZGRpbmcgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKDEwbikge1xuICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAubWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgdmlkZW8sXG4gICAgICAgIGltZyxcbiAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwyMzksMjM5KTtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogY2FsYygzM3Z3IC0gMTNweCkgIWltcG9ydGFudDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDMzdncgLSAxM3B4KSAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMzN2dyAtIDEzcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNoYWRvdyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuY3JlYXRlZC1hdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpdmlkZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cbiAgLnNlZ21lbnRzIHtcbiAgICBwYWRkaW5nOiAwIDVweCAxNXB4IDVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 44146:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/discover/discover.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar\n      mode=\"ios\"\n      [(ngModel)]=\"searchedText\"\n      (ngModelChange)=\"getPostByHashTag($event)\"\n      debounce=\"500\"\n      [placeholder]=\"'search' | translate\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"segments\" *ngIf=\"showMentions\">\n    <app-segmenttab\n      [segments]=\"['users','hashtags']\"\n      [type]=\"showedSegment\"\n      (typeChange)=\"segmentChanged($event)\"\n    ></app-segmenttab>\n  </div>\n\n  <ion-refresher\n    slot=\"fixed\"\n    pullFactor=\"0.5\"\n    pullMin=\"100\"\n    pullMax=\"200\"\n    (ionRefresh)=\"doRefresh()\"\n  >\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-spinner\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n    *ngIf=\"loading\"\n  ></ion-spinner>\n  <mentions\n    [searchedText]=\"mentionText\"\n    (userSelected)=\"goToUser($event)\"\n    (tagSelected)=\"searchPostsWithTag($event)\"\n    *ngIf=\"showMentions\"\n  >\n  </mentions>\n  <div *ngIf=\"!hashtagId && !searchedText\" class=\"posts\">\n    <post-card\n      *ngFor=\"let post of posts;let index = index\"\n      [post]=\"post\"\n      (deletedPost)=\"deletedPost($event)\"\n      (editedPost)=\"editedPost($event)\"\n      [userFollowable]=\"true\"\n      [class.discarded]=\"discarded_post==post._id\"\n    >\n    </post-card>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData()\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div *ngIf=\"hashtagId && searchedText\" class=\"posts\">\n    <ng-container *ngFor=\"let post of posts\">\n      <post-card\n        [post]=\"post\"\n        (deletedPost)=\"deletedPost($event)\"\n        (editedPost)=\"editedPost($event)\"\n        (rePorted)=\"reportedPost($event)\"\n        [userFollowable]=\"true\"\n        [class.discarded]=\"discarded_post==post._id\"\n      >\n      </post-card>\n    </ng-container>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_discover_discover-routing_module_ts-src_app_social-media_pages_dis-7ee031.js.map