(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_friend_friend_module_ts"],{

/***/ 70218:
/*!********************************************************************!*\
  !*** ./src/app/social-media/pages/friend/friend-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendPageRoutingModule": () => (/* binding */ FriendPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _friend_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend.page */ 65484);




const routes = [
    {
        path: '',
        children: [
            {
                path: ':userId',
                children: [
                    {
                        path: "",
                        component: _friend_page__WEBPACK_IMPORTED_MODULE_0__.FriendPage,
                    },
                    {
                        path: ':type',
                        children: [
                            {
                                path: "",
                                component: _friend_page__WEBPACK_IMPORTED_MODULE_0__.FriendPage
                            },
                            {
                                path: "profile",
                                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../social-profile/social-profile.module */ 3107)).then(m => m.SocialProfilePageModule),
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
let FriendPageRoutingModule = class FriendPageRoutingModule {
};
FriendPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FriendPageRoutingModule);



/***/ }),

/***/ 34323:
/*!************************************************************!*\
  !*** ./src/app/social-media/pages/friend/friend.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "FriendPageModule": () => (/* binding */ FriendPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _friend_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend-routing.module */ 70218);
/* harmony import */ var _friend_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend.page */ 65484);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
let FriendPageModule = class FriendPageModule {
};
FriendPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _friend_routing_module__WEBPACK_IMPORTED_MODULE_0__.FriendPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient],
                },
                extend: true,
            }),
        ],
        declarations: [
            _friend_page__WEBPACK_IMPORTED_MODULE_1__.FriendPage,
        ]
    })
], FriendPageModule);



/***/ }),

/***/ 65484:
/*!**********************************************************!*\
  !*** ./src/app/social-media/pages/friend/friend.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendPage": () => (/* binding */ FriendPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_friend_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./friend.page.html */ 25543);
/* harmony import */ var _friend_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend.page.scss */ 19253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 63648);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ 4957);







let FriendPage = class FriendPage {
    constructor(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
        this.type = 0;
        this.user_follows_arr = [];
        this.loading = true;
        this.myFollows = [];
        this.allUsers = [];
        this.showedUsers = [];
        this.sendedRequests = [];
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.userFollows = undefined;
            this.me = yield this._userService.getActiveUser().toPromise();
            this.query_user_id = yield this._route.snapshot.paramMap.get("userId");
            this.type = (yield this._route.snapshot.params.type) || 0;
            if (this.me._id == this.query_user_id) {
                this.user = this.me;
            }
            else
                this.user = yield this._userService
                    .getUserById(this.query_user_id);
            // if (this.user._id != this.me._id) this.myFollows = await this.getMyFollows().toPromise()
            this.setUserFollowParams();
            this.sendedRequests = yield this._userService
                .getAllSendedRequests();
        });
    }
    getFollows() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.follow.getAll({
            queryParams: {
                filter: {
                    $or: [{ follower: this.user._id }, { following: this.user._id }],
                },
                relation: true,
                sort: { _id: -1 },
            },
        });
    }
    setUserFollowParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user_follows_arr = [];
            this.progress_user = "";
            this.userFollows = this.userFollows || (yield this.getFollows());
            if (this.user._id == this.me._id)
                this.myFollows = JSON.parse(JSON.stringify(this.userFollows));
            else
                this.myFollows = yield this.getMyFollows();
            this.userFollows.forEach((item) => {
                if (item.follower['_id'] == this.user._id)
                    this.user_follows_arr.push({
                        user: item.following,
                        type: 1,
                        _id: item._id,
                    });
                if (item.following['_id'] == this.user._id)
                    this.user_follows_arr.push({
                        user: item.follower,
                        type: 0,
                        _id: item._id,
                    });
            });
            this.myFollows = this.myFollows.map((my_follow) => {
                my_follow.follower = my_follow.follower._id || my_follow.follower;
                my_follow.following = my_follow.following._id || my_follow.following;
                return my_follow;
            });
            this.user_follows_arr.forEach((item) => {
                let follow_item = this.myFollows.filter((my_items) => my_items.follower == item.user._id ||
                    my_items.following == item.user._id);
                switch (follow_item.length) {
                    case 2:
                        if (this.me._id == this.user._id)
                            item.user["follow_state"] = this.type == 0 ? "mutual" : "unfollow";
                        else
                            item.user["follow_state"] = "none";
                        break;
                    case 1:
                        if (follow_item[0].follower == item.user._id)
                            item.user["follow_state"] = "follow";
                        if (follow_item[0].following == item.user._id &&
                            this.me._id == this.user._id) {
                            //unfollow only in my profile
                            item.user["follow_state"] = "unfollow";
                        }
                        if (!item.user["follow_state"]) {
                            item.user["follow_state"] = "none";
                        }
                        break;
                    case 0:
                        item.user["follow_state"] = "follow";
                        break;
                    default:
                        item.user["follow_state"] = "none";
                        break;
                }
                if (item.user["follow_state"] == "follow" &&
                    this.sendedRequests.length > 0) {
                    item.user["follow_state"] = this.sendedRequests.filter((sended) => sended.reciever == item.user["_id"])[0]
                        ? "send_request"
                        : "follow";
                }
            });
            this.loading = false;
            this.allUsers = this.user_follows_arr.filter((item) => this.type == item.type);
            if (!this.searchedText)
                this.showedUsers = [...this.allUsers];
            else
                this.getUserBySearch();
        });
    }
    changeType(type) {
        this.loading = true;
        this.type = type;
        setTimeout(() => {
            this.setUserFollowParams();
        }, 500);
    }
    getMyFollows() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.follow.getAll({
            queryParams: {
                filter: {
                    $or: [{ follower: this.me._id }, { following: this.me._id }],
                },
            },
        });
    }
    followOperation(item) {
        this.progress_user = item._id;
        if (item.user.follow_state == "follow")
            this.followUser(item);
        if (item.user.follow_state == "unfollow")
            this.unFollowUser(item);
        if (item.user.follow_state == "mutual")
            this.removeFollow(item);
        if (item.user.follow_state == "send_request")
            this.cancelRequest(item);
    }
    cancelRequest(item) {
        this._userService
            .deleteRequest(this.sendedRequests.filter((sended) => sended.reciever == item.user["_id"])[0]._id)
            .then(() => {
            this.sendedRequests = this.sendedRequests.filter((sended) => sended.reciever != item.user["_id"]);
            this.userFollows = undefined;
            this.setUserFollowParams();
        });
    }
    removeFollow(entry) {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.follow.remove(entry._id)
            .then(() => {
            this.userFollows = undefined;
            this._userService.followerUsers = this._userService.followerUsers.filter((item) => item._id != entry.user._id);
            this.setUserFollowParams();
        });
    }
    followUser(entry) {
        entry.user["visibility"] == "private"
            ? this._userService
                .sendRequest(entry.user._id)
                .then((requestData) => {
                this.userFollows = undefined;
                this.sendedRequests.push(requestData);
                this.setUserFollowParams();
            })
            : this._userService
                .followUser(entry.user)
                .then(() => {
                this.userFollows = undefined;
                this.setUserFollowParams();
            });
    }
    unFollowUser(entry) {
        this._userService
            .unFollowUser(entry)
            .then(() => {
            this.userFollows = undefined;
            this.setUserFollowParams();
        });
    }
    getUserBySearch() {
        this.showedUsers = this.allUsers.filter((item) => item.user.username
            .toLowerCase()
            .includes(this.searchedText.toLocaleLowerCase()));
    }
};
FriendPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
FriendPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-friend',
        template: _raw_loader_friend_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_friend_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FriendPage);



/***/ }),

/***/ 19253:
/*!************************************************************!*\
  !*** ./src/app/social-media/pages/friend/friend.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header .actions {\n  --padding-bottom: 0px;\n  --min-height: 0px;\n}\n:host ion-spinner {\n  width: 20px;\n  color: unset;\n}\n:host .d-flex {\n  display: flex;\n}\n:host ion-list {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBRE47QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFJRTtFQUNFLGFBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKIiwiZmlsZSI6ImZyaWVuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIge1xuICAgIC5hY3Rpb25zIHtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgIC0tbWluLWhlaWdodDogMHB4O1xuICAgIH1cbiAgfVxuICBpb24tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgY29sb3I6IHVuc2V0O1xuICB9XG4gIC5kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 25543:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/friend/friend.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{user?.username}} </ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"actions\">\n    <app-segmenttab\n      [segments]=\"['followers','following']\"\n      [type]=\"type\"\n      (typeChange)=\"changeType($event)\"\n    ></app-segmenttab>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\" class=\"ion-no-padding\">\n    <ion-searchbar\n      mode=\"ios\" \n      animated\n      debounce=\"500\"\n      [placeholder]=\"'search'|translate\"\n      [(ngModel)]=\"searchedText\"\n      (ngModelChange)=\"getUserBySearch()\"\n    ></ion-searchbar>\n  </ion-item>\n  <ion-spinner\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n    *ngIf=\"loading\"\n  ></ion-spinner>\n  <ion-list lines=\"full\" *ngIf=\"!loading\">\n    <ion-item class=\"ion-no-padding\" detail=\"false\" *ngFor=\"let item of showedUsers\">\n      <user-minified-card\n        [user]=\"item.user\"\n        [type]=\"'horizontal'\"\n      ></user-minified-card>\n      <div class=\"d-flex\" *ngIf=\"me._id!=item.user._id\">\n        <ion-button\n          color=\"primary\"\n          *ngIf=\"item.user['follow_state']=='mutual' || (user?._id==me._id && type==0)\"\n          (click)=\"item.user['follow_state']=='mutual' ? followOperation(item):removeFollow(item)\"\n          [disabled]=\"progress_user==item['_id']\"\n        >\n          <span> {{\"mutual\" | translate}}</span>\n          <ion-spinner\n            class=\"spinner-center-page\"\n            *ngIf=\"progress_user==item['_id'] && item.user['follow_state']=='mutual'\"\n          ></ion-spinner>\n        </ion-button>\n        <ion-button\n          color=\"primary\"\n          [attr.fill]=\"item.user['follow_state'] == 'unfollow' ? 'solid' : 'outline'\"\n          *ngIf=\"item.user['follow_state'] == 'unfollow' || item.user['follow_state'] == 'follow' || item.user['follow_state'] == 'send_request'\"\n          (click)=\"followOperation(item)\"\n          [disabled]=\"progress_user==item['_id']\"\n        >\n          <span> {{item.user['follow_state'] | translate}}</span>\n          <ion-spinner\n            class=\"spinner-center-page\"\n            *ngIf=\"progress_user==item['_id']\"\n          ></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_friend_friend_module_ts.js.map