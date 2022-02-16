(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_social-media_components_components_module_ts"],{

/***/ 98908:
/*!*******************************************************************************************!*\
  !*** ./src/app/social-media/components/activity/activity-card/activity-card.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCardComponent": () => (/* binding */ ActivityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_activity_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./activity-card.component.html */ 3310);
/* harmony import */ var _activity_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-card.component.scss */ 31558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);







let ActivityCardComponent = class ActivityCardComponent {
    constructor(_router, _translateService, _route) {
        this._router = _router;
        this._translateService = _translateService;
        this._route = _route;
        this.default_user_image = src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_2__.environment.user_img;
        this.actionText = '';
    }
    ngOnInit() {
        switch (this.activity.action) {
            case 'like':
                this.actionText = this._translateService.instant('activity_card.has-liked-post');
                break;
            case 'comment':
                this.actionText = this._translateService.instant('activity_card.has-commented-post');
                break;
            case 'follow_user':
                this.actionText = this._translateService.instant('activity_card.has-following-user');
                break;
            case 'tag_in_comment':
                this.actionText = this._translateService.instant('activity_card.tagged-in-comment');
                break;
            case 'tag_in_post':
                this.actionText = this._translateService.instant('activity_card.tagged-in-post');
                break;
            case 'request_user':
                this.actionText = this._translateService.instant('activity_card.request_user');
                break;
            default:
                break;
        }
    }
    navigateToPost(posId) {
        this._router.navigate([`post-detail/${posId}`], {
            relativeTo: this._route,
        });
    }
};
ActivityCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ActivityCardComponent.propDecorators = {
    activity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ActivityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'activity-card',
        template: _raw_loader_activity_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_activity_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActivityCardComponent);



/***/ }),

/***/ 5371:
/*!*******************************************************************************************!*\
  !*** ./src/app/social-media/components/chat/following-users/following-users.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowingUsersComponent": () => (/* binding */ FollowingUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_following_users_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./following-users.component.html */ 78235);
/* harmony import */ var _following_users_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./following-users.component.scss */ 53642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/user.service */ 4957);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/data.service */ 14911);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/bucket */ 63648);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);








let FollowingUsersComponent = class FollowingUsersComponent {
    constructor(userService, dataService, modalController) {
        this.userService = userService;
        this.dataService = dataService;
        this.modalController = modalController;
        this.choosenUsers = [];
        this.loading = true;
        this.addComment = false; // come to dm post
        this.extract_users = [];
        this.searchedText = "";
        this.showedUsers = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.userService.getActiveUser().toPromise();
            this.allUsers = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.follow.getAll({
                queryParams: {
                    filter: { follower: this.user._id },
                    relation: "following",
                },
            });
            this.loading = false;
            if (this.extract_users.length) {
                this.allUsers = this.allUsers.filter((item) => !this.extract_users.some((eu) => eu._id == item.following['_id']));
            }
            this.showedUsers = [...this.allUsers];
        });
    }
    toggleUser(user) {
        if (this.choosenUsers.filter((choosenUser) => choosenUser._id == user._id)
            .length) {
            this.choosenUsers.splice(this.choosenUsers.map((user) => user._id).indexOf(user._id), 1);
        }
        else {
            this.choosenUsers.push(user);
        }
    }
    selectUser(user) {
        this.choosenUsers = [];
        this.choosenUsers.push(user);
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            users: this.choosenUsers,
            dm_comment: this.dm_comment == "" ? null : this.dm_comment,
        });
    }
    cancle() {
        this.modalController.dismiss({
            users: [],
            dm_comment: null,
        });
    }
    getUserBySearch() {
        this.showedUsers = this.allUsers.filter((item) => item.following['username']
            .toLowerCase()
            .includes(this.searchedText.toLocaleLowerCase()));
    }
};
FollowingUsersComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
FollowingUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-following-users",
        template: _raw_loader_following_users_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_following_users_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FollowingUsersComponent);



/***/ }),

/***/ 97945:
/*!*****************************************************************************************!*\
  !*** ./src/app/social-media/components/chat/message-single/message-single.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageSingleComponent": () => (/* binding */ MessageSingleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_message_single_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./message-single.component.html */ 44772);
/* harmony import */ var _message_single_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-single.component.scss */ 41357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);
/* harmony import */ var src_app_social_media_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/social-media/tabs/tabs.service */ 36126);






let MessageSingleComponent = class MessageSingleComponent {
    constructor(_tabService) {
        this._tabService = _tabService;
        this.mode = "social";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.avatar = this.avatar || src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_2__.environment.user_img;
        });
    }
    clickImage() {
        this._tabService.backDropImage = this.image;
    }
};
MessageSingleComponent.ctorParameters = () => [
    { type: src_app_social_media_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_3__.TabsService }
];
MessageSingleComponent.propDecorators = {
    isCurrentUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    date: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    recurring: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
MessageSingleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "message-single",
        template: _raw_loader_message_single_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_message_single_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MessageSingleComponent);



/***/ }),

/***/ 65700:
/*!**************************************************************!*\
  !*** ./src/app/social-media/components/components.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _user_minified_card_minified_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/minified-card/minified-card.component */ 95759);
/* harmony import */ var _chat_following_users_following_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/following-users/following-users.component */ 5371);
/* harmony import */ var _generics_mentionarea_mentionarea_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generics/mentionarea/mentionarea.component */ 34106);
/* harmony import */ var _generics_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generics/action-icon/action-icon.component */ 5085);
/* harmony import */ var _post_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post-card/post-card.component */ 46606);
/* harmony import */ var _users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-modal/users-modal.component */ 61836);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _activity_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity/activity-card/activity-card.component */ 98908);
/* harmony import */ var _pages_post_create_post_create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/post-create/post-create.page */ 83437);
/* harmony import */ var _generics_mentions_mentions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generics/mentions/mentions.component */ 1777);
/* harmony import */ var _generics_segmenttab_segmenttab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generics/segmenttab/segmenttab.component */ 30576);
/* harmony import */ var _chat_message_single_message_single_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/message-single/message-single.component */ 97945);
/* harmony import */ var _post_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/post-comment/post-comment.component */ 39642);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _directives_mention_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/mention.directive */ 17236);






















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _user_minified_card_minified_card_component__WEBPACK_IMPORTED_MODULE_0__.MinifiedCardComponent,
            _chat_following_users_following_users_component__WEBPACK_IMPORTED_MODULE_1__.FollowingUsersComponent,
            _generics_mentionarea_mentionarea_component__WEBPACK_IMPORTED_MODULE_2__.MentionareaComponent,
            _generics_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_3__.ActionIconComponent,
            _users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_5__.UsersModalComponent,
            _post_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_4__.PostCardComponent,
            _activity_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_6__.ActivityCardComponent,
            _pages_post_create_post_create_page__WEBPACK_IMPORTED_MODULE_7__.PostCreatePage,
            _generics_mentions_mentions_component__WEBPACK_IMPORTED_MODULE_8__.MentionsComponent,
            _generics_segmenttab_segmenttab_component__WEBPACK_IMPORTED_MODULE_9__.SegmenttabComponent,
            _chat_message_single_message_single_component__WEBPACK_IMPORTED_MODULE_10__.MessageSingleComponent,
            _post_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__.PostCommentComponent,
            _directives_mention_directive__WEBPACK_IMPORTED_MODULE_13__.MentionDirective,
        ],
        exports: [
            _user_minified_card_minified_card_component__WEBPACK_IMPORTED_MODULE_0__.MinifiedCardComponent,
            _chat_following_users_following_users_component__WEBPACK_IMPORTED_MODULE_1__.FollowingUsersComponent,
            _generics_mentionarea_mentionarea_component__WEBPACK_IMPORTED_MODULE_2__.MentionareaComponent,
            _generics_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_3__.ActionIconComponent,
            _users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_5__.UsersModalComponent,
            _post_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_4__.PostCardComponent,
            _activity_activity_card_activity_card_component__WEBPACK_IMPORTED_MODULE_6__.ActivityCardComponent,
            _pages_post_create_post_create_page__WEBPACK_IMPORTED_MODULE_7__.PostCreatePage,
            _generics_mentions_mentions_component__WEBPACK_IMPORTED_MODULE_8__.MentionsComponent,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            _generics_segmenttab_segmenttab_component__WEBPACK_IMPORTED_MODULE_9__.SegmenttabComponent,
            _chat_message_single_message_single_component__WEBPACK_IMPORTED_MODULE_10__.MessageSingleComponent,
            _post_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_11__.PostCommentComponent,
            _directives_mention_directive__WEBPACK_IMPORTED_MODULE_13__.MentionDirective,
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_12__.SpicaComponentsModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule],
    })
], ComponentsModule);



/***/ }),

/***/ 5085:
/*!***************************************************************************************!*\
  !*** ./src/app/social-media/components/generics/action-icon/action-icon.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIconComponent": () => (/* binding */ ActionIconComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_action_icon_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./action-icon.component.html */ 96262);
/* harmony import */ var _action_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-icon.component.scss */ 21242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ActionIconComponent = class ActionIconComponent {
    constructor() {
        this.count = 0;
        this.icon = "add-outline";
        this.disabled = false;
        this.iconClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.numberClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    iconClicked$() {
        this.iconClicked.emit(true);
    }
    numberClicked$() {
        this.numberClicked.emit(this.count);
    }
};
ActionIconComponent.ctorParameters = () => [];
ActionIconComponent.propDecorators = {
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    numberClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ActionIconComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'action-icon',
        template: _raw_loader_action_icon_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_action_icon_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActionIconComponent);



/***/ }),

/***/ 34106:
/*!***************************************************************************************!*\
  !*** ./src/app/social-media/components/generics/mentionarea/mentionarea.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentionareaComponent": () => (/* binding */ MentionareaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mentionarea_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mentionarea.component.html */ 71811);
/* harmony import */ var _mentionarea_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentionarea.component.scss */ 15124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/user.service */ 4957);





let MentionareaComponent = class MentionareaComponent {
    constructor(ref, _userService) {
        this.ref = ref;
        this._userService = _userService;
        this.maxCharacter = 160;
        this.textArray = [];
        this.lastTextArray = [];
        this.changeRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.clicked_more = false;
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser().toPromise();
            if (this.text) {
                this.textArray = (_a = this.text) === null || _a === void 0 ? void 0 : _a.slice(0, this.maxCharacter);
                this.textArray = this.textArray.replace(/\n/g, ' [**br**] ').split(' ');
            }
            this.setLastTextArray();
        });
    }
    isHashtag(text) {
        if (this.hashtags)
            return this.hashtags.filter((h) => text == '#' + h.hashtag);
        return [];
    }
    isTag(text) {
        if (this.tags)
            return this.tags.filter((u) => text == '@' + u.username);
        return [];
    }
    isTaggedUserGroup(text) {
        if (this.tag_groups) {
            return this.tag_groups.filter((u) => text == '@' + u.name);
        }
        return [];
    }
    isLink(text) {
        const regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
        return text.match(regex) ? true : false;
    }
    openExternalLink(word) {
        window.open(word, '_blank');
    }
    setRoute(route, param) {
        this.changeRoute.emit(`${route}/${param}`);
    }
    setMore() {
        this.textArray = this.text.slice(0).replace(/\n/g, ' [**br**] ').split(' ');
        this.clicked_more = true;
        this.setLastTextArray();
    }
    setLastTextArray() {
        this.lastTextArray = [];
        this.textArray.forEach((element) => {
            if (this.isTag(element).length) {
                this.lastTextArray.push({
                    word: element,
                    state: 'tag',
                    param: this.isTag(element)[0]._id,
                });
            }
            else if (this.isHashtag(element).length) {
                this.lastTextArray.push({
                    word: element,
                    state: 'hashtag',
                    param: this.isHashtag(element)[0]._id,
                });
            }
            else if (this.isLink(element)) {
                this.lastTextArray.push({
                    word: element,
                    state: 'link',
                });
            }
            else if (this.isTaggedUserGroup(element).length) {
                this.lastTextArray.push({
                    word: element,
                    state: 'tagged_group',
                    param: this.isTaggedUserGroup(element)[0]._id,
                });
            }
            else {
                this.lastTextArray.push({
                    word: element,
                    state: 'none',
                });
            }
        });
    }
};
MentionareaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef },
    { type: src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
MentionareaComponent.propDecorators = {
    tags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    tag_groups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    hashtags: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    maxCharacter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    changeRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
MentionareaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mentionarea',
        template: _raw_loader_mentionarea_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mentionarea_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MentionareaComponent);



/***/ }),

/***/ 1777:
/*!*********************************************************************************!*\
  !*** ./src/app/social-media/components/generics/mentions/mentions.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentionsComponent": () => (/* binding */ MentionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mentions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mentions.component.html */ 42927);
/* harmony import */ var _mentions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mentions.component.scss */ 94899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/bucket */ 63648);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);
/* harmony import */ var src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/social-media/services/user.service */ 4957);







let MentionsComponent = class MentionsComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.friends = [];
        this.followings = [];
        this.hashtags = [];
        this.loadedHashtags = [];
        this.loading = true;
        this.mentioning = '';
        this.sub_mentioning = 'user';
        this.user_img_empty = src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
        this.isMinimized = false;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.tagSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._userService.getActiveUser().toPromise();
            this.followings = this._userService.followingUsers;
        });
    }
    ngOnChanges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            if (this.searchedText && this.searchedText[0] != '#' && this.friends) {
                this.mentioning = 'friend';
                if (this.searchedText.length > 1) {
                    this.friends = this.followings.filter((user) => {
                        var _a, _b;
                        return user.username
                            .toLowerCase()
                            .includes(this.searchedText[0] == '@'
                            ? this.searchedText.substr(1).toLowerCase()
                            : this.searchedText.toLowerCase()) ||
                            (((_a = user.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) + ((_b = user.surname) === null || _b === void 0 ? void 0 : _b.toLowerCase())).includes(this.searchedText[0] == '@'
                                ? this.searchedText.split(' ').join('').substr(1).toLowerCase()
                                : this.searchedText.split(' ').join('').toLowerCase());
                    });
                    if (!this.friends.length ||
                        (this.friends.length && this.friends.length < 6)) {
                        this.friends = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.getAll({
                            queryParams: {
                                filter: {
                                    username: {
                                        $regex: this.searchedText[0] == '@'
                                            ? this.escapeRegex(this.searchedText.substr(1))
                                            : this.escapeRegex(this.searchedText),
                                        $options: 'i',
                                    },
                                },
                            },
                        });
                    }
                }
            }
            else if (this.searchedText && this.searchedText[0] == '#') {
                this.mentioning = 'hashtag';
                if (!this.loadedHashtags.some((tag) => tag.hashtag.includes(this.searchedText.substr(1))) &&
                    this.searchedText.length > 1) {
                    let tags = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.hashtag.getAll({
                        queryParams: {
                            filter: {
                                hashtag: {
                                    $regex: this.escapeRegex(this.searchedText.substr(1)),
                                    $options: 'i',
                                },
                            },
                        },
                    });
                    tags = tags.filter((t) => !this.loadedHashtags.some((ht) => t._id == ht._id));
                    this.loadedHashtags = this.loadedHashtags.concat(tags);
                }
                this.hashtags = this.loadedHashtags.filter((hastags) => hastags.hashtag
                    .toLowerCase()
                    .includes(this.searchedText.substr(1).toLowerCase()));
            }
            this.loading = false;
        });
    }
    mentionUser(user) {
        this.userSelected.emit(user);
    }
    addHashtag(tag) {
        this.tagSelected.emit(tag);
    }
    escapeRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
};
MentionsComponent.ctorParameters = () => [
    { type: src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
MentionsComponent.propDecorators = {
    isMinimized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['isMinimized',] }],
    searchedText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input, args: ['searchedText',] }],
    userSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output, args: ['userSelected',] }],
    tagSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output, args: ['tagSelected',] }]
};
MentionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'mentions',
        template: _raw_loader_mentions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mentions_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MentionsComponent);



/***/ }),

/***/ 30576:
/*!*************************************************************************************!*\
  !*** ./src/app/social-media/components/generics/segmenttab/segmenttab.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmenttabComponent": () => (/* binding */ SegmenttabComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_segmenttab_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./segmenttab.component.html */ 59728);
/* harmony import */ var _segmenttab_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segmenttab.component.scss */ 95305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SegmenttabComponent = class SegmenttabComponent {
    constructor() {
        this.type = 0;
        this.segments = [];
        this.typeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    changeType(type) {
        this.typeChange.emit(type);
    }
};
SegmenttabComponent.ctorParameters = () => [];
SegmenttabComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    segments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    typeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SegmenttabComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: "app-segmenttab",
        template: _raw_loader_segmenttab_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_segmenttab_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SegmenttabComponent);



/***/ }),

/***/ 46606:
/*!*******************************************************************************!*\
  !*** ./src/app/social-media/components/post/post-card/post-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCardComponent": () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-card.component.html */ 81073);
/* harmony import */ var _post_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-card.component.scss */ 80037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-comment/post-comment.component */ 39642);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/data.service */ 14911);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/user.service */ 4957);
/* harmony import */ var _chat_following_users_following_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chat/following-users/following-users.component */ 5371);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../users-modal/users-modal.component */ 61836);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/bucket */ 63648);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);
/* harmony import */ var src_app_social_media_services_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/social-media/services/post.service */ 59439);
/* harmony import */ var src_app_social_media_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/social-media/tabs/tabs.service */ 36126);
/* harmony import */ var src_app_social_media_services_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/social-media/services/chat.service */ 44010);
/* harmony import */ var src_app_social_media_pages_post_create_post_create_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/social-media/pages/post-create/post-create.page */ 83437);


















let PostCardComponent = class PostCardComponent {
    constructor(_dataService, _userService, _postService, _modalController, _toastController, _tabService, _router, _activatedRoute, _actionSheetCtrl, _translateService, _chatService, el, platform) {
        this._dataService = _dataService;
        this._userService = _userService;
        this._postService = _postService;
        this._modalController = _modalController;
        this._toastController = _toastController;
        this._tabService = _tabService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._actionSheetCtrl = _actionSheetCtrl;
        this._translateService = _translateService;
        this._chatService = _chatService;
        this.el = el;
        this.platform = platform;
        this.action = true;
        this.skeleton = false;
        this.userFollowable = false;
        this.imageClickable = true;
        this.with_router = true;
        this.liked = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.deletedPost = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.editedPost = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.rePorted = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.followUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
        this.mediaIsMuted = 'muted';
        this.isIntersecting = false;
        this.isImageLoaded = false;
        this.isModalPresented = false;
        this.percentage = 0;
        this.loading = false;
        this.follow_disabled = false;
        this.default_user_image = src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_8__.environment.user_img;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._userService.getActiveUser().toPromise();
        });
    }
    ngAfterViewInit() {
        this.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true) {
                this.toggleMedia(true);
                this.isIntersecting = true;
            }
            else {
                this.toggleMedia(false);
                this.isIntersecting = false;
            }
        }, {
            threshold: 0.75,
        });
        this.observer.observe(this.el.nativeElement);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
    handleEvent(e) {
        //console.log(e);
    }
    like() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (this.post['liked'] && this.post['liked_id']) {
                this.post['liked'] = false;
                this.post.like_count = this.post.like_count -= 1;
                _services_bucket__WEBPACK_IMPORTED_MODULE_7__.liked_post.remove(this.post['liked_id']).then(() => {
                    this._userService.userLikes = this._userService.userLikes.filter((ul) => ul._id != this.post['liked_id']);
                    delete this.post['liked_id'];
                });
            }
            if (!this.post['liked'] && !this.post['liked_id']) {
                this.post['liked'] = true;
                this.post.like_count = this.post.like_count += 1;
                let didUserLiked = this._userService.userLikes.filter((ul) => ul.post['_id'] == this.post._id);
                if (!didUserLiked.length) {
                    _services_bucket__WEBPACK_IMPORTED_MODULE_7__.liked_post.insert({ post: this.post, user: this.user })
                        .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                        this.post['liked_id'] = data._id;
                        data.post = this.post;
                        this._userService.userLikes.push(data);
                        this.liked.emit(this.post._id);
                    }));
                }
                else {
                    this.post['liked_id'] = didUserLiked[0]._id;
                }
            }
        });
    }
    sharePost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this._toastController.create({
                header: this._translateService.instant('shared-post'),
                duration: 3000,
                cssClass: 'toast-custom-class',
            });
            toast.present();
        });
    }
    sendPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isModalPresented) {
                this.isModalPresented = true;
                const modal = yield this._modalController.create({
                    component: _chat_following_users_following_users_component__WEBPACK_IMPORTED_MODULE_5__.FollowingUsersComponent,
                    componentProps: {
                        addComment: true,
                    },
                });
                yield modal.present();
                const { data } = (yield modal.onWillDismiss());
                this.isModalPresented = false;
                if (data.users.length) {
                    this.loading = true;
                    let name;
                    if (data.users.length == 1)
                        name = data.users[0].username;
                    else
                        name = 'Chat Group ' + Math.round(Math.random() * 100);
                    data.users.unshift(this.user);
                    let chatExists = yield this._chatService.isChatExists(data.users);
                    if (!chatExists.result) {
                        this._chatService
                            .createChat({
                            name: name,
                            is_group: data.users.length > 2,
                            last_active: data.users.map((user) => {
                                return { user: user._id };
                            }),
                        })
                            .then((newChat) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.messageOperation(newChat._id, data.dm_comment);
                            this._dataService
                                .setOnline('chat', {
                                chat: newChat._id,
                                last_message: data.dm_comment || 'send a post',
                            }, this.user._id)
                                .toPromise();
                        }));
                    }
                    else {
                        chatExists.chat['last_active'] = chatExists.chat['last_active'].map((item) => {
                            item.user = item.user._id || item.user;
                            if (!chatExists.chat['is_group'] &&
                                item.user == this.user._id &&
                                item.status == 'deleted')
                                item.status = 'active';
                            return item;
                        });
                        yield this.messageOperation(chatExists.chat['_id'], data.dm_comment);
                        yield this._dataService
                            .setOnline('chat', {
                            chat: chatExists.chat['_id'],
                            last_message: data.dm_comment || 'send a post',
                        }, this.user._id)
                            .toPromise();
                    }
                    this.loading = false;
                }
            }
        });
    }
    messageOperation(chatGroup, dm) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            yield this.sendDm({
                chat: chatGroup,
                owner: this.user,
                post: this.post._id,
            });
            if (dm) {
                yield this.sendDm({
                    chat: chatGroup,
                    owner: this.user,
                    message: dm,
                });
            }
        });
    }
    sendDm(obj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_7__.message.insert(obj);
        });
    }
    showActions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let action_buttons = [
                {
                    text: this._translateService.instant('share-post'),
                    handler: () => {
                        this.sharePost();
                    },
                },
                {
                    text: this._translateService.instant('copy-link'),
                    handler: () => {
                        this.copyLink();
                    },
                },
                {
                    text: this._translateService.instant('cancel'),
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    },
                },
            ];
            if (this.post.user['_id'] != this.user._id) {
                action_buttons.splice(action_buttons.length - 1, 0, {
                    text: this._translateService.instant('report'),
                    handler: () => {
                        this.reportPost();
                    },
                });
            }
            else {
                action_buttons.splice(action_buttons.length - 1, 0, {
                    text: this._translateService.instant('edit-post'),
                    handler: () => {
                        this.editPost();
                    },
                });
                action_buttons.splice(action_buttons.length - 1, 0, {
                    text: this._translateService.instant('delete-post'),
                    handler: () => {
                        this.deletePost();
                    },
                });
            }
            let actionSheet = yield this._actionSheetCtrl.create({
                buttons: action_buttons,
            });
            actionSheet.present();
        });
    }
    copyLink() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this._toastController.create({
                header: this._translateService.instant('copied'),
                duration: 3000,
                cssClass: 'toast-custom-class',
            });
            toast.present();
        });
    }
    deletePost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.deletedPost.emit(this.post._id);
        });
    }
    editPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isModalPresented) {
                this.isModalPresented = true;
                const modal = yield this._modalController.create({
                    component: src_app_social_media_pages_post_create_post_create_page__WEBPACK_IMPORTED_MODULE_12__.PostCreatePage,
                    swipeToClose: true,
                    componentProps: {
                        user: this.user,
                        post: this.post,
                    },
                });
                yield modal.present();
                let dismissData = yield modal.onDidDismiss();
                this.isModalPresented = false;
                if (dismissData.data.refresh && dismissData.data.editpost) {
                    this.editedPost.emit(this.post);
                    yield _services_bucket__WEBPACK_IMPORTED_MODULE_7__.post.update(this.post);
                }
                else
                    this.post = JSON.parse(JSON.stringify(dismissData.data.editpost));
            }
        });
    }
    clickedMentions(event) {
        this._router.navigate([event], { relativeTo: this._activatedRoute });
    }
    clickedImage(mimeType, image) {
        if (mimeType.includes('video') && this.imageClickable) {
            this.mediaIsMuted = this.mediaIsMuted == '' ? 'muted' : '';
        }
        else if (mimeType.includes('image') && this.imageClickable) {
            this._tabService.backDropImage = image;
        }
    }
    openLikedModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isModalPresented) {
                this.isModalPresented = true;
                const modal = yield this._modalController.create({
                    component: _users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_6__.UsersModalComponent,
                    swipeToClose: true,
                    componentProps: {
                        post: this.post,
                    },
                });
                yield modal.present();
                let dismissData = yield modal.onDidDismiss();
                this.isModalPresented = false;
                if (dismissData.data['route']) {
                    this._router.navigate([dismissData.data['route']], {
                        relativeTo: this._activatedRoute,
                    });
                }
                if (dismissData.data['is_followed']) {
                    this.followUsers.emit();
                }
            }
        });
    }
    showComments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isModalPresented) {
                this.isModalPresented = true;
                const modal = yield this._modalController.create({
                    component: _post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_2__.PostCommentComponent,
                    swipeToClose: true,
                    componentProps: {
                        post: this.post,
                    },
                });
                yield modal.present();
                const { data } = yield modal.onWillDismiss();
                this.isModalPresented = false;
                if (data === null || data === void 0 ? void 0 : data.route) {
                    console.log("rote");
                    this._router.navigate([`${data.route}`, data.param], {
                        relativeTo: this._activatedRoute,
                    });
                }
            }
        });
    }
    toggleMedia(is_played) {
        if (this.media) {
            is_played
                ? this.media.nativeElement.play()
                : this.media.nativeElement.pause();
        }
    }
    reportPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this._postService.reportPost(this.post).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                this.rePorted.emit(this.post);
                this.loading = false;
                let toast = yield this._toastController.create({
                    header: this._translateService.instant('reported-post'),
                    duration: 3000,
                    cssClass: 'toast-custom-class',
                });
                toast.present();
            }));
        });
    }
};
PostCardComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_social_media_services_post_service__WEBPACK_IMPORTED_MODULE_9__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController },
    { type: src_app_social_media_tabs_tabs_service__WEBPACK_IMPORTED_MODULE_10__.TabsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ActionSheetController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService },
    { type: src_app_social_media_services_chat_service__WEBPACK_IMPORTED_MODULE_11__.ChatService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform }
];
PostCardComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    skeleton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    userFollowable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    imageClickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    with_router: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    shareImageShadow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['shareImageShadow', { static: false },] }],
    liked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    deletedPost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    editedPost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    rePorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    followUsers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output }],
    media: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['media',] }]
};
PostCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'post-card',
        template: _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostCardComponent);



/***/ }),

/***/ 39642:
/*!*************************************************************************************!*\
  !*** ./src/app/social-media/components/post/post-comment/post-comment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCommentComponent": () => (/* binding */ PostCommentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_comment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-comment.component.html */ 68675);
/* harmony import */ var _post_comment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-comment.component.scss */ 23292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);
/* harmony import */ var src_app_social_media_services_hashtag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/social-media/services/hashtag.service */ 14260);
/* harmony import */ var src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/social-media/services/user.service */ 4957);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/bucket */ 63648);









let PostCommentComponent = class PostCommentComponent {
    constructor(modalController, _userService, _hashtagService) {
        this.modalController = modalController;
        this._userService = _userService;
        this._hashtagService = _hashtagService;
        this.comments = [];
        this.default_user_image = src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_2__.environment.user_img;
        this.searchedText = null;
        this.scroll_params = {
            skip: 0,
            limit: 20,
        };
        this.tags = [];
        this.hasTags = [];
        this.loadings = {
            main: true,
            deleteComment: false,
        };
    }
    ngOnInit() {
        this._userService
            .getActiveUser()
            .toPromise()
            .then((data) => (this.user = data));
        this.getComments();
    }
    ionViewWillEnter() {
        this.infiniteScroll.disabled = true;
    }
    close(withroute = null) {
        this.modalController.dismiss(withroute);
    }
    getComments() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_5__.comment.getAll({
            queryParams: {
                filter: { post: this.post._id },
                relation: true,
                sort: { _id: -1 },
                limit: this.scroll_params.limit,
                skip: this.scroll_params.skip,
            },
        })
            .then((data) => {
            this.comments = this.comments.concat(data);
            this.comments = this.comments.sort((a, b) => a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0);
            this.loadings.main = false;
            this.infiniteScroll.complete();
            if (this.scroll_params.skip == 0)
                setTimeout(() => {
                    this.content.scrollToBottom();
                }, 100);
            if (data.length >= this.scroll_params.limit) {
                this.infiniteScroll.disabled = false;
            }
            else
                this.infiniteScroll.disabled = true;
        });
    }
    sendComment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.my_comment && this.my_comment != '') {
                yield this.checkTagCreate();
                let comment_data = {
                    post: this.post,
                    user: this.user,
                    comment: this.my_comment,
                    tags: this.tags,
                    hastags: this.hasTags,
                };
                this.post.comment_count += 1;
                _services_bucket__WEBPACK_IMPORTED_MODULE_5__.comment.insert(comment_data).then((res) => {
                    comment_data['_id'] = res._id;
                    comment_data['date'] = res.date;
                    comment_data['user'] = this.user;
                    this.tags = [];
                    this.hasTags = [];
                    this.comments.push(comment_data);
                    setTimeout(() => {
                        this.content.scrollToBottom();
                    }, 100);
                });
                this.my_comment = '';
            }
        });
    }
    updatePost(update_post) {
        _services_bucket__WEBPACK_IMPORTED_MODULE_5__.post.update(update_post);
    }
    deleteComment(id) {
        this.deleted_row = id;
        let index = this.comments.findIndex((item) => item._id == id);
        this.comments.splice(index, 1);
        this.post.comment_count -= 1;
        _services_bucket__WEBPACK_IMPORTED_MODULE_5__.comment.remove(id).then();
    }
    mentioning($event) {
        this.searchedText = $event.text;
        this.lastCaretPosition = $event.caret + 1;
    }
    mentionUser(user) {
        this.searchedText = null;
        this.tags.push(user);
        let lastMention = this.my_comment.substr(0, this.lastCaretPosition);
        let lastMentionStartsAt = lastMention.lastIndexOf('@');
        this.my_comment =
            this.my_comment.substr(0, lastMentionStartsAt) +
                '@' +
                user.username +
                this.my_comment.substr(this.lastCaretPosition);
    }
    hashtagSelected(hashtag) {
        this.searchedText = null;
        this.hasTags.push(hashtag);
        let lastMention = this.my_comment.substr(0, this.lastCaretPosition);
        let lastMentionStartsAt = lastMention.lastIndexOf('#');
        this.my_comment =
            this.my_comment.substr(0, lastMentionStartsAt) +
                '#' +
                hashtag.hashtag +
                this.my_comment.substr(this.lastCaretPosition);
    }
    stopped() {
        this.searchedText = null;
    }
    setRoute(route, param) {
        this.close({ route, param });
    }
    clickMention(event) {
        let newRoute = event.split('/');
        this.setRoute(newRoute[0], newRoute[1]);
    }
    checkTagCreate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.hasTags = yield this._hashtagService.checkTagCreate(this.my_comment, this.hasTags);
        });
    }
    loadData() {
        this.scroll_params.skip =
            this.scroll_params.limit + this.scroll_params.skip;
        this.getComments();
    }
};
PostCommentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_social_media_services_hashtag_service__WEBPACK_IMPORTED_MODULE_3__.HashtagService }
];
PostCommentComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll, { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, static: false },] }]
};
PostCommentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'post-comment',
        template: _raw_loader_post_comment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_comment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostCommentComponent);



/***/ }),

/***/ 95759:
/*!***************************************************************************************!*\
  !*** ./src/app/social-media/components/user/minified-card/minified-card.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinifiedCardComponent": () => (/* binding */ MinifiedCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_minified_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./minified-card.component.html */ 89097);
/* harmony import */ var _minified_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minified-card.component.scss */ 9713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/user.service */ 4957);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);








let MinifiedCardComponent = class MinifiedCardComponent {
    constructor(_userService, _router, _activatedRoute) {
        this._userService = _userService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.type = 'vertical'; // "vertical", "horizontal";
        this.with_router = true;
        this.followable = false;
        this.onFollow = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.isFollowing = false;
        this.default_user_image = src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
        this.followLoading = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user)
                //Otherwise skeleton
                this._userService
                    .getActiveUser()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                    .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    var _a;
                    this.me = data;
                    if (this.followable) {
                        this.isFollowing = this._userService.isFollowingUser(this.user);
                        if (this.user.visibility == 'private' && !this.isFollowing) {
                            let waitingRequestData = yield this._userService.getWaitingRequest(this.user);
                            this.wait_request_id = waitingRequestData && ((_a = waitingRequestData[0]) === null || _a === void 0 ? void 0 : _a._id);
                            if (this.wait_request_id)
                                this.isFollowing = true;
                        }
                        if (this._userService.blockedUsers.filter((item) => item.blocked['_id'] == this.user._id)[0])
                            this.followable = false;
                    }
                }));
        });
    }
    followUser() {
        if (!this.followLoading) {
            this.followLoading = true;
            if (this.user.visibility == 'private') {
                this._userService.sendRequest(this.user).then(() => {
                    this.onFollow.emit(this.user);
                    this.isFollowing = true;
                    this.followLoading = false;
                });
            }
            else {
                this._userService.followUser(this.user).then(() => {
                    this.isFollowing = true;
                    this.onFollow.emit(this.user);
                    this.followLoading = false;
                });
            }
        }
    }
    routeUser() {
        this.onRoute.emit(this.user);
        if (this.with_router) {
            this._router.navigate(['profile', this.user._id], {
                relativeTo: this._activatedRoute,
            });
        }
    }
};
MinifiedCardComponent.ctorParameters = () => [
    { type: src_app_social_media_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
MinifiedCardComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    with_router: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    followable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onFollow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
MinifiedCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'user-minified-card',
        template: _raw_loader_minified_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_minified_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MinifiedCardComponent);



/***/ }),

/***/ 61836:
/*!******************************************************************************!*\
  !*** ./src/app/social-media/components/users-modal/users-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModalComponent": () => (/* binding */ UsersModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_users_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./users-modal.component.html */ 61093);
/* harmony import */ var _users_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-modal.component.scss */ 71933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 63648);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ 14911);







let UsersModalComponent = class UsersModalComponent {
    constructor(_dataService, modalController) {
        this._dataService = _dataService;
        this.modalController = modalController;
        this.likedUsers = [];
        this.follow_some_users = false;
        this.scroll_params = {
            skip: 0,
            limit: 10,
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getlikedPosts();
        });
    }
    getlikedPosts() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.liked_post.getAll({
            queryParams: {
                filter: { post: this.post._id },
                relation: "user",
                limit: this.scroll_params.limit,
                skip: this.scroll_params.skip,
                sort: { _id: -1 },
            },
        })
            .then((data) => {
            this.likedUsers = this.likedUsers.concat(data.map((item) => item.user));
            this.infiniteScroll.complete();
            if (data.length < this.scroll_params.limit)
                this.infiniteScroll.disabled = true;
        });
    }
    close() {
        this.modalController.dismiss({ is_followed: this.follow_some_users });
    }
    loadData() {
        this.scroll_params.skip =
            this.scroll_params.limit + this.scroll_params.skip;
        this.getlikedPosts();
    }
    followUser() {
        this.follow_some_users = true;
    }
    routeUser(user) {
        this.modalController.dismiss({ is_followed: this.follow_some_users, route: `profile/${user._id}` });
    }
};
UsersModalComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
UsersModalComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll, { static: false },] }]
};
UsersModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-users-modal",
        template: _raw_loader_users_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_users_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UsersModalComponent);



/***/ }),

/***/ 17236:
/*!**************************************************************!*\
  !*** ./src/app/social-media/directives/mention.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentionDirective": () => (/* binding */ MentionDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


let MentionDirective = class MentionDirective {
    constructor(element) {
        this.element = element;
        this.searchedText = "";
        this.mentioning = false;
        this.mentioned = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.stopped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    search(e) {
        if (e.data == "@") {
            this.searchedText = "";
            this.mentioning = true;
        }
        else if (e.data == "#") {
            this.searchedText = "";
            this.mentioning = true;
        }
        else if (e.data == " " && this.mentioning == true) {
            this.stopped.emit(true);
            this.mentioning = false;
            this.searchedText = "";
        }
        else if (e.inputType == "deleteContentBackward") {
            this.searchedText = this.searchedText.slice(0, -1);
            let isTagging = this.isContinueTagging(e.target.selectionStart);
            if (isTagging.continue) {
                this.mentioning = true;
                this.searchedText = isTagging.tag;
            }
            this.mentioned.emit({ text: this.searchedText, caret: e.target.selectionStart });
            if (this.searchedText == "") {
                this.stopped.emit(true);
            }
        }
        if (this.mentioning && e.data) {
            this.searchedText += e.data;
            this.mentioned.emit({ text: this.searchedText, caret: e.target.selectionStart });
        }
    }
    isContinueTagging(caretPosition) {
        let splittedPhrase = this.element.nativeElement.value.slice(0, caretPosition);
        let tag = splittedPhrase.split(" ");
        tag = tag[tag.length - 1];
        if (tag[0] == "@" || tag[0] == "#") {
            return { continue: true, tag };
        }
        return { continue: false };
    }
};
MentionDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
MentionDirective.propDecorators = {
    mentioned: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    stopped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['document:input', ['$event'],] }]
};
MentionDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[mention]'
    })
], MentionDirective);



/***/ }),

/***/ 83437:
/*!********************************************************************!*\
  !*** ./src/app/social-media/pages/post-create/post-create.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCreatePage": () => (/* binding */ PostCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-create.page.html */ 41057);
/* harmony import */ var _post_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-create.page.scss */ 61117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 63648);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/image.service */ 70251);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _services_hashtag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/hashtag.service */ 14260);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/environment */ 19874);










let PostCreatePage = class PostCreatePage {
    constructor(_modalController, _imageService, _hashtagService, _toastController, _translateService) {
        this._modalController = _modalController;
        this._imageService = _imageService;
        this._hashtagService = _hashtagService;
        this._toastController = _toastController;
        this._translateService = _translateService;
        this.loading = false;
        this.uploadingImage = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.post && this.post._id) {
                this.tempPost = JSON.parse(JSON.stringify(this.post));
            }
            else {
                this.post = {
                    text: undefined,
                    file: {
                        url: undefined,
                        mimetype: undefined,
                    },
                    user: this.user,
                    tags: [],
                    hashtags: [],
                };
            }
        });
    }
    close(refresh = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.post._id && !refresh)
                this.post = JSON.parse(JSON.stringify(this.tempPost));
            yield this._modalController.dismiss({
                refresh: refresh,
                editpost: this.post,
            });
            this.loading = false;
        });
    }
    userUploadedImage(data) {
        this.uploadingImage = true;
        let mimetype = data.split(';')[0].split(':')[1];
        this.saveImage(data, mimetype);
    }
    saveImage(data, mimetype) {
        let file_buf = this._imageService.toBuffer(data);
        let bufWithMeta = {
            contentType: mimetype,
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.post.file.url &&
            this.post.file.url.includes(_services_environment__WEBPACK_IMPORTED_MODULE_5__.environment.project_id)) {
            let splitArr = this.post.file.url.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this._imageService.insert(bufWithMeta, imageId).then((res) => {
            this.post.file.url = res.url + `&timestamp=${new Date().getTime()}`;
            this.post.file.mimetype = res.content.type;
            this.uploadingImage = false;
        });
    }
    newPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.checkTagCreate();
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.post.insert(this.post).then((newPost) => {
                this.post = newPost;
                this.close(true);
            }, (err) => console.log(err));
        });
    }
    mentioning($event) {
        this.searchedText = $event.text;
        this.lastCaretPosition = $event.caret + 1;
    }
    mentionUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.searchedText = null;
            //-----------------------------avoiding for duplicate user
            let existUser;
            if (this.post.tags.length) {
                if (this.post.tags.filter((item) => item['_id'] == user._id)[0])
                    existUser = user;
            }
            if (existUser) {
                let toast = yield this._toastController.create({
                    color: 'warning',
                    header: this._translateService.instant('dublicate_tag'),
                    duration: 3000,
                });
                toast.present();
                return;
            }
            //-----------------------------------------------------------
            this.post.tags.push(user);
            let lastMention = this.post.text.substr(0, this.lastCaretPosition);
            let lastMentionStartsAt = lastMention.lastIndexOf('@');
            this.post.text =
                this.post.text.substr(0, lastMentionStartsAt) +
                    '@' +
                    (user.owner ? user.name : user.username) +
                    this.post.text.substr(this.lastCaretPosition);
            this.postTextChange();
        });
    }
    hashtagSelected(hashtag) {
        this.searchedText = null;
        this.post.hashtags.push(hashtag);
        let lastMention = this.post.text.substr(0, this.lastCaretPosition);
        let lastMentionStartsAt = lastMention.lastIndexOf('#');
        this.post.text =
            this.post.text.substr(0, lastMentionStartsAt) +
                '#' +
                hashtag.hashtag +
                this.post.text.substr(this.lastCaretPosition);
    }
    savePost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.checkTagCreate();
            this.close(true);
        });
    }
    checkTagCreate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.post.hashtags = yield this._hashtagService.checkTagCreate(this.post.text, this.post.hashtags);
        });
    }
    postTextChange() {
        //--tag
        this.post.tags.forEach((element) => {
            let tag = !this.post.text.includes('@' + element.username)
                ? element
                : undefined;
            if (tag)
                this.post.tags = this.post.tags.filter((item) => item._id != tag._id);
        });
        //--hashtag
        let hashtag = this.post.hashtags.filter((item) => !this.post.text.includes('#' + item.hashtag))[0];
        if (hashtag)
            this.post.hashtags = this.post.hashtags.filter((item) => item._id != hashtag['_id']);
    }
};
PostCreatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService },
    { type: _services_hashtag_service__WEBPACK_IMPORTED_MODULE_4__.HashtagService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
PostCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-post-create',
        template: _raw_loader_post_create_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_create_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostCreatePage);



/***/ }),

/***/ 14260:
/*!**********************************************************!*\
  !*** ./src/app/social-media/services/hashtag.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashtagService": () => (/* binding */ HashtagService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 63648);



let HashtagService = class HashtagService {
    constructor() { }
    checkTagCreate(content, tagsArr) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (content) {
                content = content.replace(/\n/g, " ").replace(/\r/g, " ");
                let words = content.split(" ");
                words = words
                    .filter((item) => item.startsWith("#") && item.length > 3)
                    .map((item) => item.split("#").join(""));
                tagsArr.forEach((tag) => {
                    words = words.filter((item) => item != tag.hashtag);
                });
                for (let word of words) {
                    let tag = yield _services_bucket__WEBPACK_IMPORTED_MODULE_0__.hashtag.getAll({ queryParams: { filter: { hashtag: word } } });
                    if (tag.length == 0) {
                        let newTag = yield _services_bucket__WEBPACK_IMPORTED_MODULE_0__.hashtag.insert({ hashtag: word, times_used: 1 });
                        tagsArr.push(newTag);
                    }
                    else {
                        tagsArr.push(tag[0]);
                    }
                }
            }
            return tagsArr;
        });
    }
};
HashtagService.ctorParameters = () => [];
HashtagService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: "root",
    })
], HashtagService);



/***/ }),

/***/ 70251:
/*!********************************************************!*\
  !*** ./src/app/social-media/services/image.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _spica_devkit_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spica-devkit/storage */ 66840);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 19874);




let ImageService = class ImageService {
    constructor() { }
    init() {
        let initializeConfig;
        if (localStorage.getItem('socialmedia_spica_token')) {
            initializeConfig = {
                publicUrl: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url,
                identity: localStorage.getItem('socialmedia_spica_token'),
            };
        }
        else {
            initializeConfig = {
                publicUrl: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url,
                apikey: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.public_apikey,
            };
        }
        _spica_devkit_storage__WEBPACK_IMPORTED_MODULE_1__.initialize(initializeConfig);
    }
    insert(storageObject, imageId) {
        this.init();
        if (imageId) {
            return _spica_devkit_storage__WEBPACK_IMPORTED_MODULE_1__.update(imageId, storageObject);
        }
        else {
            return _spica_devkit_storage__WEBPACK_IMPORTED_MODULE_1__.insert(storageObject).then((v) => (v = v[0]));
        }
    }
    toBuffer(base64, type = '') {
        base64 = base64.split(',')[1];
        const binaryString = window.atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }
};
ImageService.ctorParameters = () => [];
ImageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], ImageService);



/***/ }),

/***/ 59439:
/*!*******************************************************!*\
  !*** ./src/app/social-media/services/post.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 63648);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 4957);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ 14911);






let PostService = class PostService {
    constructor(_dataService, _userService) {
        this._dataService = _dataService;
        this._userService = _userService;
    }
    getPosts(filterParams = {}) {
        filterParams['relation'] = [
            ...(filterParams['relation'] || []),
            ...['user', 'hashtags', 'tags'],
        ];
        filterParams = this.confFilterParam(filterParams);
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.post.getAll({
            queryParams: filterParams,
        })
            .then((data) => {
            data.map((post) => {
                let index_liked = this._userService.userLikes.findIndex((liked) => liked.post['_id'] == post._id);
                if (index_liked != -1) {
                    post['liked_id'] = this._userService.userLikes[index_liked]._id;
                    post['liked'] = true;
                }
                return post;
            });
            return data;
        });
    }
    confFilterParam(filterParams) {
        let reportedPosts = this._userService.reportedPosts;
        if (filterParams['filter']['_id'])
            Object.assign(filterParams['filter']['_id'], {
                $nin: reportedPosts,
            });
        else
            Object.assign(filterParams['filter'], {
                _id: { $nin: reportedPosts },
            });
        return filterParams;
    }
    getExplorePosts(limit) {
        return this._dataService.getExplorePosts(limit).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((data) => {
            return this.getPosts({
                filter: { _id: { $in: data.posts.map((item) => item._id) } },
                sort: { _id: -1 },
            });
        }));
    }
    reportPost(post) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.reported_post.insert({
            user: this._userService.me,
            post: post,
        })
            .then((data) => this._userService.reportedPosts.push(data.post));
    }
};
PostService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService }
];
PostService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], PostService);



/***/ }),

/***/ 31558:
/*!*********************************************************************************************!*\
  !*** ./src/app/social-media/components/activity/activity-card/activity-card.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n}\n:host .activity-card {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n}\n:host .activity-card .metadata {\n  display: flex;\n  align-items: center;\n}\n:host .activity-card .metadata ion-avatar {\n  min-width: 48px;\n  width: 48px;\n  height: 48px;\n}\n:host .activity-card .metadata .info {\n  margin: 0 10px;\n}\n:host .activity-card .metadata .info .sub-info {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n:host .activity-card .metadata .info .sub-info :first-child {\n  font-weight: bold;\n}\n:host .activity-card .metadata .info .sub-info :last-child {\n  padding-left: 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n}\n:host .activity-card .action .post {\n  width: 48px;\n  height: 48px;\n  vertical-align: middle;\n  text-align: center;\n}\n:host .activity-card .action .post.post-text {\n  min-width: 48px !important;\n  max-width: 100px !important;\n  display: table-cell;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n:host .activity-card .action .post img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFFSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRU47QUFETTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdSO0FBQU07RUFDRSxjQUFBO0FBRVI7QUFEUTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFHVjtBQUZVO0VBQ0UsaUJBQUE7QUFJWjtBQUZVO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFJWjtBQUVNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFWO0FBRVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFWIiwiZmlsZSI6ImFjdGl2aXR5LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICAuYWN0aXZpdHktY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgLm1ldGFkYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1pbi13aWR0aDogNDhweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgLnN1Yi1pbmZvIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFjdGlvbiB7XG4gICAgICAucG9zdCB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAmLnBvc3QtdGV4dCB7XG4gICAgICAgICAgbWluLXdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 53642:
/*!*********************************************************************************************!*\
  !*** ./src/app/social-media/components/chat/following-users/following-users.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-item {\n  transition: all 0.1s ease-out;\n}\n:host .choosen {\n  --background: rgba(117, 113, 113, 0.1);\n}\n:host .choosen::after {\n  content: \"\";\n  position: absolute;\n  right: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 10px;\n  height: 10px;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n:host .no-item {\n  text-align: center;\n  color: var(--ion-text-color);\n  opacity: 0.5;\n  width: 100%;\n  font-size: 0.8em;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvd2luZy11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0FBQUo7QUFFRTtFQUNFLHNDQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6ImZvbGxvd2luZy11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWl0ZW0ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2Utb3V0O1xuICB9XG4gIC5jaG9vc2VuIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTE3LCAxMTMsIDExMywgMC4xKTtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDUlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cbiAgLm5vLWl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 41357:
/*!*******************************************************************************************!*\
  !*** ./src/app/social-media/components/chat/message-single/message-single.component.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  position: relative;\n  display: block;\n}\n:host ion-content {\n  position: relative;\n}\n:host .container {\n  display: flex;\n  align-items: flex-end;\n  padding: 16px 10px 0px;\n  position: relative;\n  width: 100%;\n}\n:host .container .message-text {\n  width: 100%;\n  word-break: break-all;\n}\n:host .container.recurring {\n  padding: 2px 10px 0px;\n}\n:host .container.recurring .message {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n:host .container.recurring .message:before {\n  background: transparent;\n}\n:host .container.current-user {\n  flex-direction: row-reverse;\n}\n:host .container.current-user .avatar {\n  flex-direction: row-reverse;\n}\n:host .container.current-user .message:not(.post) {\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 20px !important;\n  border-top-left-radius: 20px !important;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n}\n:host .container.current-user.recurring .message {\n  border-top-right-radius: 5px;\n}\n:host .container ::ng-deep app-mentionarea span {\n  font-size: 0.9rem;\n  line-height: 1.4rem;\n}\n:host .container ::ng-deep app-mentionarea .link {\n  color: inherit !important;\n  text-decoration: underline;\n}\n:host .container .avatar {\n  min-width: 50px;\n  display: flex;\n}\n:host .container .avatar img {\n  border-radius: 100%;\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n}\n:host .container .message {\n  padding: 10px 12px;\n  background: var(--cd-divider-color);\n  position: relative;\n  border-radius: 20px;\n  border-bottom-left-radius: 5px;\n}\n:host .container .message.post {\n  background: transparent;\n  border: 1px solid #eaeaea;\n  width: 0px;\n  flex: 1;\n}\n:host .container .message.post::before {\n  content: none;\n}\n:host .container .content {\n  position: relative;\n  z-index: 999;\n  word-break: break-word;\n  display: inline-block;\n}\n:host .container .content.image img {\n  width: 100%;\n  object-fit: contain;\n  border-radius: 5px;\n  border: 1px solid var(--cd-divider-color);\n}\n:host .container .time {\n  float: right;\n  transform: translateY(10px);\n  color: var(--cd-component-text-color);\n  font-size: 0.7rem;\n  display: none;\n  bottom: 15px;\n  right: 10px;\n}\n:host .container .scale-image .message {\n  display: none;\n}\n:host .container .scale-image .message .content.image img {\n  transform: scale(1.7);\n}\n:host ::ng-deep post-card {\n  border-bottom: unset;\n}\n:host ::ng-deep post-card .message {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Utc2luZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBSUUsa0JBQUE7RUFDQSxjQUFBO0FBSEY7QUFERTtFQUNFLGtCQUFBO0FBR0o7QUFDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQUVOO0FBQUk7RUFDRSxxQkFBQTtBQUVOO0FBQU07RUFDRSwyQkFyQmdCO0VBc0JoQiw4QkF0QmdCO0FBd0J4QjtBQURRO0VBQ0UsdUJBQUE7QUFHVjtBQUNJO0VBQ0UsMkJBQUE7QUFDTjtBQUFNO0VBQ0UsMkJBQUE7QUFFUjtBQUFNO0VBQ0UsK0JBbENnQjtFQW1DaEIsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7QUFFUjtBQUNRO0VBQ0UsNEJBMUNjO0FBMkN4QjtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS007RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBSFI7QUFNSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBSk47QUFLTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUhSO0FBTUk7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQXhFa0I7QUFvRXhCO0FBS007RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7QUFIUjtBQUlRO0VBQ0UsYUFBQTtBQUZWO0FBTUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBSk47QUFNUTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQTVGYztFQTZGZCx5Q0FBQTtBQUpWO0FBUUk7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTk47QUFTTTtFQUNFLGFBQUE7QUFQUjtBQVVZO0VBQ0UscUJBQUE7QUFSZDtBQWdCSTtFQUNFLG9CQUFBO0FBZE47QUFlTTtFQUNFLGdCQUFBO0FBYlIiLCJmaWxlIjoibWVzc2FnZS1zaW5nbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWVzc2FnZS1ib3JkZXItcmFkaXVzOiA1cHg7XG46aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMTZweCAxMHB4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLm1lc3NhZ2UtdGV4dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG4gICAgJi5yZWN1cnJpbmcge1xuICAgICAgcGFkZGluZzogMnB4IDEwcHggMHB4O1xuICAgICAgLy8gZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkbWVzc2FnZS1ib3JkZXItcmFkaXVzO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkbWVzc2FnZS1ib3JkZXItcmFkaXVzO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJi5jdXJyZW50LXVzZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgLmF2YXRhciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cbiAgICAgIC5tZXNzYWdlOm5vdCgucG9zdCkge1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJG1lc3NhZ2UtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICB9XG4gICAgICAmLnJlY3VycmluZyB7XG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJG1lc3NhZ2UtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCBhcHAtbWVudGlvbmFyZWEge1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xuICAgICAgfVxuICAgICAgLmxpbmsge1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmF2YXRhciB7XG4gICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNkLWRpdmlkZXItY29sb3IpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRtZXNzYWdlLWJvcmRlci1yYWRpdXM7XG4gICAgICAmLnBvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAmLmltYWdlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRtZXNzYWdlLWJvcmRlci1yYWRpdXM7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2QtZGl2aWRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnRpbWUge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgY29sb3I6IHZhcigtLWNkLWNvbXBvbmVudC10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuc2NhbGUtaW1hZ2Uge1xuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgJi5pbWFnZSB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIDo6bmctZGVlcCB7XG4gICAgcG9zdC1jYXJkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 21242:
/*!*****************************************************************************************!*\
  !*** ./src/app/social-media/components/generics/action-icon/action-icon.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  display: block;\n  float: left;\n}\n:host .action-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n:host .action-icon .icon {\n  background: transparent;\n  border-radius: 100%;\n  width: 24px;\n  height: 30px;\n  overflow: hidden;\n  transition: 0.2s all ease-out;\n  text-align: center;\n  align-items: center;\n  display: flex;\n}\n:host .action-icon .icon ion-icon {\n  margin: auto;\n  font-size: 1.25rem;\n}\n:host .action-icon .icon.disabled {\n  opacity: 0.5;\n}\n:host .action-icon .icon.disabled ion-icon {\n  pointer-events: none;\n}\n:host .action-icon .count {\n  font-size: 15px;\n  margin-left: 4px;\n  text-align: left;\n  min-width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQURRO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR1o7QUFGWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUZZO0VBSUksWUFBQTtBQUNoQjtBQUpnQjtFQUNJLG9CQUFBO0FBTXBCO0FBQVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFWiIsImZpbGUiOiJhY3Rpb24taWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICAuYWN0aW9uLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZS1vdXQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 15124:
/*!*****************************************************************************************!*\
  !*** ./src/app/social-media/components/generics/mentionarea/mentionarea.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n  word-break: break-all;\n}\n:host span {\n  margin-right: 4px;\n  font-size: 0.76rem;\n  line-height: 1.1rem;\n  display: inline-block;\n}\n:host .link {\n  white-space: unset;\n}\n:host .hashtag-word,\n:host .tag-word {\n  color: var(--ion-color-primary);\n}\n:host .no-padding {\n  position: relative;\n  margin-left: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRpb25hcmVhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFDRTs7RUFFRSwrQkFBQTtBQUNKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoibWVudGlvbmFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAvLyAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDAuNzZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmxpbmsge1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgfVxuICAuaGFzaHRhZy13b3JkLFxuICAudGFnLXdvcmQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgLm5vLXBhZGRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 94899:
/*!***********************************************************************************!*\
  !*** ./src/app/social-media/components/generics/mentions/mentions.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  background: var(--cd-background-color);\n  padding-top: 5px;\n  width: 100%;\n}\n:host .friend {\n  margin-bottom: 5px;\n}\n:host .friend .tagged_user_groups {\n  display: flex;\n}\n:host .friend .tagged_user_groups ion-label {\n  padding-left: 10px;\n}\n:host .friend .tagged_user_groups ion-label h2 {\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n:host .friend .tagged_user_groups ion-label span {\n  font-size: 0.7rem;\n  color: var(--cd-text-color);\n  opacity: 0.8;\n}\n:host .friend .tagged_user_groups ion-label span span {\n  opacity: 0.6;\n}\n:host .tag {\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n}\n:host .tag .hashtag-circle {\n  width: 3.3rem;\n  height: 3.3rem;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n:host .tag .hashtag-content span {\n  font-size: small;\n  color: var(--cd-text-color);\n  opacity: 0.6;\n}\n:host .tag .hashtag-content.create-post {\n  display: flex !important;\n  align-items: center !important;\n  margin-left: 0 !important;\n}\n:host .tag .hashtag-content.create-post span {\n  margin-left: 10px;\n}\n:host .nonResult {\n  color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtBQUdOO0FBRk07RUFDRSxrQkFBQTtBQUlSO0FBSFE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBS1Y7QUFIUTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBS1Y7QUFKVTtFQUNFLFlBQUE7QUFNWjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRU07RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFSO0FBRU07RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUNRO0VBQ0UsaUJBQUE7QUFDVjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6Im1lbnRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC5mcmllbmQge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAudGFnZ2VkX3VzZXJfZ3JvdXBzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY2QtdGV4dC1jb2xvcik7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudGFnIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5oYXNodGFnLWNpcmNsZSB7XG4gICAgICB3aWR0aDogMy4zcmVtO1xuICAgICAgaGVpZ2h0OiAzLjNyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAuaGFzaHRhZy1jb250ZW50IHtcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgICAgJi5jcmVhdGUtcG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubm9uUmVzdWx0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 95305:
/*!***************************************************************************************!*\
  !*** ./src/app/social-media/components/generics/segmenttab/segmenttab.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .tab-container {\n  display: flex;\n  align-items: center;\n}\n:host .tab-container > * {\n  padding: 10px;\n  flex: 1;\n  text-align: center;\n  color: var(--cd-component-text-color);\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease-out;\n  opacity: 0.7;\n}\n:host .tab-container > *.active {\n  opacity: 1;\n  color: var(--cd-text-color);\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ21lbnR0YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDTjtBQUFNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7QUFFUiIsImZpbGUiOiJzZWdtZW50dGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAudGFiLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgID4gKiB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1jZC1jb21wb25lbnQtdGV4dC1jb2xvcik7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNkLXRleHQtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 80037:
/*!*********************************************************************************!*\
  !*** ./src/app/social-media/components/post/post-card/post-card.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  display: flex;\n  width: 100%;\n}\n:host ion-card {\n  padding: 3px 0px;\n  background: var(--cd-component-background-color);\n  width: 100%;\n}\n:host ion-card .header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n}\n:host ion-card .header .author {\n  padding-left: 10px;\n  padding-right: 5px;\n}\n:host ion-card .header .tag {\n  color: var(--cd-component-text-color);\n  font-size: 0.9rem;\n}\n:host ion-card .image-container {\n  position: relative;\n}\n:host ion-card .image-container img,\n:host ion-card .image-container video {\n  width: calc(100% - 20px);\n  margin: 0 10px;\n  z-index: 2;\n  position: relative;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n:host ion-card .image-container video {\n  height: auto !important;\n  max-height: 400px;\n  object-fit: contain;\n  background: black;\n}\n:host ion-card .image-container img {\n  max-height: 250px;\n  object-fit: cover;\n  opacity: 0;\n  transition: opacity 0.4s ease-out;\n}\n:host ion-card .image-container img.opaque {\n  opacity: 1;\n}\n:host ion-card .image-container + .actions {\n  align-items: flex-end;\n}\n:host ion-card .actions {\n  z-index: 5;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 10px;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n}\n:host ion-card .actions > div:last-of-type action-icon {\n  float: right;\n}\n:host .actions action-icon {\n  flex: 1 1 0px;\n}\n:host .actions ::ng-deep .send-icon .action-icon .icon {\n  width: 20px;\n  transform: rotate(-30deg);\n  height: 26px;\n}\n:host .actions div:last-child action-icon {\n  margin-left: 10px;\n}\n:host .message {\n  padding: 0px 10px 10px;\n}\n:host .message span {\n  margin-right: 5px;\n}\n:host .created-at {\n  font-size: 0.7rem;\n  color: var(--cd-text-color);\n  padding: 5px 10px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUZNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRk07RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0FBSVI7QUFESTtFQUNFLGtCQUFBO0FBR047QUFGTTs7RUFFRSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJUjtBQURNO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURNO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQUdSO0FBRE07RUFDRSxVQUFBO0FBR1I7QUFBSTtFQUVFLHFCQUFBO0FBQ047QUFHSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUdRO0VBQ0UsWUFBQTtBQURWO0FBT0k7RUFDRSxhQUFBO0FBTE47QUFVVTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFSWjtBQWNNO0VBQ0UsaUJBQUE7QUFaUjtBQWdCRTtFQUNFLHNCQUFBO0FBZEo7QUFlSTtFQUNFLGlCQUFBO0FBYk47QUFnQkU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBZEoiLCJmaWxlIjoicG9zdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaW9uLWNhcmQge1xuICAgIHBhZGRpbmc6IDNweCAwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2QtY29tcG9uZW50LWJhY2tncm91bmQtY29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5oZWFkZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgIC5hdXRob3Ige1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC50YWcge1xuICAgICAgICBjb2xvcjogdmFyKC0tY2QtY29tcG9uZW50LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG5cbiAgICAgIHZpZGVvIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2Utb3V0O1xuICAgICAgfVxuICAgICAgaW1nLm9wYXF1ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbWFnZS1jb250YWluZXIgKyAuYWN0aW9ucyB7XG4gICAgICAvL21hcmdpbi10b3A6IC02MHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICB6LWluZGV4OiA1O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgYWN0aW9uLWljb24ge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWN0aW9ucyB7XG4gICAgYWN0aW9uLWljb24ge1xuICAgICAgZmxleDogMSAxIDBweDtcbiAgICB9XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5zZW5kLWljb24ge1xuICAgICAgICAuYWN0aW9uLWljb24ge1xuICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgYWN0aW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHg7XG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbiAgLmNyZWF0ZWQtYXQge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jZC10ZXh0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 23292:
/*!***************************************************************************************!*\
  !*** ./src/app/social-media/components/post/post-comment/post-comment.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  margin-right: 10px;\n}\n:host ion-content {\n  border-top: 1px solid var(--cd-divider-color);\n}\n:host ::ng-deep post-card {\n  padding: 0px !important;\n  box-shadow: unset !important;\n  border-top: unset !important;\n}\n:host ::ng-deep post-card .actions {\n  display: none !important;\n}\n:host .comment-card {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding: 5px 0;\n  flex: auto;\n}\n:host .comment-card .metadata {\n  display: flex;\n  align-items: center;\n}\n:host .comment-card .metadata ion-avatar {\n  min-width: 48px;\n  align-self: flex-start;\n}\n:host .comment-card .metadata .info {\n  margin: 0 10px;\n}\n:host .comment-card .metadata .info .sub-info :first-child {\n  font-weight: bold;\n}\n:host .comment-card .metadata .info .sub-info .activity-date {\n  width: 100%;\n  color: var(--cd-text-color);\n  font-size: 10px;\n  padding-top: 3px;\n  opacity: 0.8;\n}\n:host .comment-card .action {\n  align-self: center;\n}\n:host mentions {\n  position: absolute;\n  bottom: 40px;\n  left: 0px;\n  width: 100%;\n  padding: 20px;\n}\n:host .hashtag-word,\n:host .tag-word {\n  color: var(--ion-color-primary);\n}\n:host ion-infinite-scroll-content {\n  min-height: 5px;\n}\n:host ion-footer ion-toolbar {\n  --border-color: var(--cd-divider-color);\n}\n:host ion-footer ion-icon {\n  align-self: center;\n}\n:host ion-footer ion-icon.clear-text {\n  font-size: 18px;\n  background: transparent;\n  color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n:host ion-footer ::ng-deep .textarea-wrapper {\n  height: 40px !important;\n}\n:host ion-footer ::ng-deep .textarea-wrapper textarea {\n  height: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FBQUo7QUFFRTtFQUNFLDZDQUFBO0FBQUo7QUFHSTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUROO0FBRU07RUFDRSx3QkFBQTtBQUFSO0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFGSjtBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRE47QUFFTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQUFSO0FBR007RUFDRSxjQUFBO0FBRFI7QUFHVTtFQUNFLGlCQUFBO0FBRFo7QUFHVTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFEWjtBQU1JO0VBQ0Usa0JBQUE7QUFKTjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBTEo7QUFPRTs7RUFFRSwrQkFBQTtBQUxKO0FBT0U7RUFDRSxlQUFBO0FBTEo7QUFRSTtFQUNFLHVDQUFBO0FBTk47QUFRSTtFQUNFLGtCQUFBO0FBTk47QUFPTTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMmJBQUE7QUFMUjtBQVFJO0VBQ0UsdUJBQUE7QUFOTjtBQU9NO0VBQ0UsdUJBQUE7QUFMUiIsImZpbGUiOiJwb3N0LWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1saXN0e1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNkLWRpdmlkZXItY29sb3IpO1xuICB9XG4gIDo6bmctZGVlcCB7XG4gICAgcG9zdC1jYXJkIHtcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbW1lbnQtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGZsZXg6IGF1dG87XG4gICAgLm1ldGFkYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1pbi13aWR0aDogNDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmluZm8ge1xuICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgLnN1Yi1pbmZvIHtcbiAgICAgICAgICA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3Rpdml0eS1kYXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNkLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFjdGlvbiB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIG1lbnRpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5oYXNodGFnLXdvcmQsXG4gIC50YWctd29yZCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDVweDtcbiAgfVxuICBpb24tZm9vdGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY2QtZGl2aWRlci1jb2xvcik7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICYuY2xlYXItdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDUxMiUyMDUxMic+PHBhdGglMjBmaWxsPSd2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsJTIwJTIzNjY2NjY2KSclMjBkPSdNNDAzLjEsMTA4LjljLTgxLjItODEuMi0yMTIuOS04MS4yLTI5NC4yLDBzLTgxLjIsMjEyLjksMCwyOTQuMmM4MS4yLDgxLjIsMjEyLjksODEuMiwyOTQuMiwwUzQ4NC4zLDE5MC4xLDQwMy4xLDEwOC45eiUyME0zNTIsMzQwLjJMMzQwLjIsMzUybC04NC40LTg0LjJsLTg0LDgzLjhMMTYwLDMzOS44bDg0LTgzLjhsLTg0LTgzLjhsMTEuOC0xMS44bDg0LDgzLjhsODQuNC04NC4ybDExLjgsMTEuOEwyNjcuNiwyNTZMMzUyLDM0MC4yeicvPjwvc3ZnPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgOjpuZy1kZWVwIC50ZXh0YXJlYS13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 9713:
/*!*****************************************************************************************!*\
  !*** ./src/app/social-media/components/user/minified-card/minified-card.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n  margin: 5px 0px;\n  overflow: hidden;\n}\n:host .minified-card .name {\n  color: var(--cd-text-color);\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host .minified-card .sub-info {\n  color: var(--ion-color-primary);\n}\n:host .minified-card.vertical {\n  width: 60px;\n  text-align: center;\n}\n:host .minified-card.vertical ion-avatar {\n  margin: auto;\n}\n:host .minified-card.vertical .metadata {\n  margin-top: 10px;\n  width: 100%;\n}\n:host .minified-card.vertical .metadata .name {\n  width: 100%;\n  font-size: 1rem;\n}\n:host .minified-card.vertical .metadata .sub-info {\n  font-size: 0.7rem;\n  width: 100%;\n  margin-left: 0px;\n}\n:host .minified-card.horizontal {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n:host .minified-card.horizontal ion-avatar {\n  display: block;\n  float: left;\n  min-width: 48px;\n}\n:host .minified-card.horizontal .metadata {\n  height: 48px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  flex: 1;\n}\n:host .minified-card.horizontal .metadata .name {\n  width: 100%;\n  padding-bottom: 2px;\n  font-size: 0.9rem;\n}\n:host .minified-card.horizontal .metadata .sub-info {\n  font-size: 0.7rem;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmlmaWVkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDSTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUNJO0VBQ0UsK0JBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBQ047QUFDTTtFQUNFLFlBQUE7QUFDUjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFBUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBRVY7QUFBUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRVY7QUFFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUNNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ1I7QUFDTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQUNSO0FBQVE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVWO0FBQVE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFFViIsImZpbGUiOiJtaW5pZmllZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAubWluaWZpZWQtY2FyZCB7XG4gICAgLm5hbWUge1xuICAgICAgY29sb3I6IHZhcigtLWNkLXRleHQtY29sb3IpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgICAuc3ViLWluZm8ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgJi52ZXJ0aWNhbCB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgICAgIC5tZXRhZGF0YSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmhvcml6b250YWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1pbi13aWR0aDogNDhweDtcbiAgICAgIH1cbiAgICAgIC5tZXRhZGF0YSB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 71933:
/*!********************************************************************************!*\
  !*** ./src/app/social-media/components/users-modal/users-modal.component.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtBQUFKIiwiZmlsZSI6InVzZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tbGlzdCB7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 61117:
/*!**********************************************************************!*\
  !*** ./src/app/social-media/pages/post-create/post-create.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .new .on-center-image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 20px;\n  transform: translate(-50%, -50%);\n}\n:host .new ion-skeleton-text {\n  height: 150px;\n  border-radius: 5px;\n}\n:host .new .file-content {\n  display: flex;\n  width: 100%;\n}\n:host .new .file-content .file-side {\n  flex: 1;\n}\n:host .new .file-content .actions-side {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 5px;\n}\n:host .new .file-content .actions-side ::ng-deep spica-upload-image ion-icon {\n  font-size: 22px;\n}\n:host .new .file-content .actions-side ion-icon {\n  font-size: 22px;\n}\n:host .new .file-content .actions-side .deleteImage {\n  border-top: 1px solid var(--border-color);\n  margin-top: 5px;\n  padding-top: 5px;\n}\n:host .old {\n  display: none;\n}\n:host ion-toolbar {\n  --border-color: transparent;\n}\n:host textarea {\n  width: 100%;\n  height: 100px;\n  padding: 3px;\n  background: var(--cd-component-background-color);\n  resize: none;\n  border: none;\n  --placeholder-color: var(--cd-component-text-color);\n  --color: var(--cd-text-color);\n}\n:host .datetime-list ion-list-header {\n  margin: 10px 15px 0 15px;\n  padding: 0;\n}\n:host .datetime-list ion-list-header ion-icon {\n  padding-right: 10px;\n}\n:host .datetime-list .passive {\n  color: var(--cd-component-text-color);\n  opacity: 0.4;\n}\n:host ion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  border-radius: 5px;\n  margin: 10px 15px 0 15px;\n}\n:host ion-item > ion-icon {\n  padding-right: 10px;\n}\n:host ion-item img,\n:host ion-item video,\n:host ion-item iframe {\n  width: 100%;\n  z-index: 2;\n  position: relative;\n  border-radius: 5px;\n  margin-top: 0px;\n}\n:host ion-item iframe {\n  min-height: 190px;\n}\n:host ion-item video {\n  height: auto !important;\n  max-height: 400px;\n  object-fit: contain;\n  background: black;\n  min-height: 150px;\n}\n:host ion-item img {\n  max-height: 250px;\n  object-fit: cover;\n}\n:host .item-card {\n  padding: 0 6px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n:host .item-card .field {\n  flex: 1;\n  color: var(--cd-component-text-color);\n}\n:host .item-card .value {\n  flex: 1;\n}\n:host .item-card .value * {\n  float: right;\n  max-width: unset;\n}\n:host .header-field {\n  font-size: large;\n  font-weight: 600;\n  color: var(--cd-text-color) !important;\n}\n:host mentions {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  padding: 5px 15px 0px;\n  border-top: 1px solid var(--cd-divider-color);\n  max-height: 10rem;\n  overflow: scroll;\n}\n:host ion-backdrop {\n  opacity: 0.3;\n  z-index: 11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY3JlYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBRE47QUFHSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBRE47QUFFTTtFQUNFLE9BQUE7QUFBUjtBQUVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQVI7QUFHWTtFQUNFLGVBQUE7QUFEZDtBQUtRO0VBQ0UsZUFBQTtBQUhWO0FBS1E7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhWO0FBUUU7RUFDRSxhQUFBO0FBTko7QUFRRTtFQUNFLDJCQUFBO0FBTko7QUFRRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtFQUNBLDZCQUFBO0FBUEo7QUFVSTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQVJOO0FBU007RUFDRSxtQkFBQTtBQVBSO0FBVUk7RUFDRSxxQ0FBQTtFQUNBLFlBQUE7QUFSTjtBQVdFO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFUSjtBQVVJO0VBQ0UsbUJBQUE7QUFSTjtBQVdJOzs7RUFHRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVE47QUFXSTtFQUNFLGlCQUFBO0FBVE47QUFXSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFUTjtBQVdJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQVROO0FBWUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVZKO0FBV0k7RUFDRSxPQUFBO0VBQ0EscUNBQUE7QUFUTjtBQVdJO0VBQ0UsT0FBQTtBQVROO0FBVU07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FBVko7QUFhRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWEo7QUFhRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBWEoiLCJmaWxlIjoicG9zdC1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubmV3IHtcbiAgICAub24tY2VudGVyLWltYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5maWxlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmZpbGUtc2lkZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAuYWN0aW9ucy1zaWRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgc3BpY2EtdXBsb2FkLWltYWdlIHtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWxldGVJbWFnZSB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm9sZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jZC1jb21wb25lbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1jZC1jb21wb25lbnQtdGV4dC1jb2xvcik7XG4gICAgLS1jb2xvcjogdmFyKC0tY2QtdGV4dC1jb2xvcik7XG4gIH1cbiAgLmRhdGV0aW1lLWxpc3Qge1xuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBtYXJnaW46IDEwcHggMTVweCAwIDE1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAucGFzc2l2ZSB7XG4gICAgICBjb2xvcjogdmFyKC0tY2QtY29tcG9uZW50LXRleHQtY29sb3IpO1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgfVxuICBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHggMTVweCAwIDE1cHg7XG4gICAgPiBpb24taWNvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIGltZyxcbiAgICB2aWRlbyxcbiAgICBpZnJhbWUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICBpZnJhbWUge1xuICAgICAgbWluLWhlaWdodDogMTkwcHg7XG4gICAgfVxuICAgIHZpZGVvIHtcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICB9XG4gIC5pdGVtLWNhcmQge1xuICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuZmllbGQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jZC1jb21wb25lbnQtdGV4dC1jb2xvcik7XG4gICAgfVxuICAgIC52YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgKiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmhlYWRlci1maWVsZCB7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1jZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgbWVudGlvbnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHggMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jZC1kaXZpZGVyLWNvbG9yKTtcbiAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gIGlvbi1iYWNrZHJvcCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHotaW5kZXg6IDExO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 3310:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/activity/activity-card/activity-card.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"activity-card\">\n  <div class=\"metadata\">\n    <ion-avatar [routerLink]=\"['profile', activity?.user['_id']]\">\n      <img\n        [src]=\"\n          activity?.user['thumbnail']\n            ? activity?.user['thumbnail']\n            : default_user_image\n        \"\n      />\n    </ion-avatar>\n    <div class=\"info\">\n      <div class=\"sub-info\">\n        <span [routerLink]=\"['profile', activity?.user['_id']]\"\n          >{{ activity?.user[\"username\"] }}\n        </span>\n        <span>{{ actionText }}</span>\n        <span *ngIf=\"activity['action'] == 'comment'\"\n          >: {{ activity.metadata }}\n        </span>\n        <span class=\"activity-date\"\n          >{{ activity.created_at | date: \"shortDate\" }}\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"action\" *ngIf=\"activity['action'] != 'follow_user'\">\n    <div\n      class=\"post\"\n      *ngIf=\"activity?.post\"\n      [class.post-text]=\"!activity?.post['image']\"\n    >\n      <img *ngIf=\"activity?.post['image']\" [src]=\"activity?.post['image']\" />\n      <span *ngIf=\"!activity?.post['image']\">{{ activity?.post[\"text\"] }}</span>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 78235:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/chat/following-users/following-users.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancle()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ \"users\" | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n    <ion-list-header *ngIf=\"!addComment\">\n      <ion-label>{{ \"all-users\" | translate }}</ion-label>\n    </ion-list-header>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-searchbar\n        mode=\"ios\"\n        animated\n        debounce=\"500\"\n        [placeholder]=\"'search' | translate\"\n        [(ngModel)]=\"searchedText\"\n        (ngModelChange)=\"getUserBySearch()\"\n      ></ion-searchbar>\n    </ion-item>\n    <ion-item *ngIf=\"addComment && showedUsers.length > 0\">\n      <ion-textarea\n        [(ngModel)]=\"dm_comment\"\n        [placeholder]=\"'enter-comment' | translate\"\n      ></ion-textarea>\n    </ion-item>\n    <div class=\"no-item\" *ngIf=\"showedUsers.length == 0\">\n      {{ \"non-user\" | translate }}\n    </div>\n    <ion-item\n      detail=\"false\"\n      *ngFor=\"let user of showedUsers\"\n      (click)=\"\n        addComment ? selectUser(user.following) : toggleUser(user.following)\n      \"\n      [class.choosen]=\"choosenUsers.includes(user.following)\"\n    >\n      <user-minified-card\n        [with_router]=\"false\"\n        [user]=\"user.following\"\n        [type]=\"'horizontal'\"\n      ></user-minified-card>\n    </ion-item>\n  </ion-list>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ }),

/***/ 44772:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/chat/message-single/message-single.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"container\"\n  [class.recurring]=\"recurring\"\n  [class.current-user]=\"isCurrentUser\"\n>\n  <div class=\"avatar\" [routerLink]=\"['profile', id]\">\n    <img [src]=\"avatar\" *ngIf=\"avatar != 'none'\" />\n  </div>\n  <div class=\"message\" *ngIf=\"!post && !image\">\n    <app-mentionarea\n      *ngIf=\"mode == 'social'\"\n      [text]=\"message\"\n    ></app-mentionarea>\n    <div class=\"message-text\" *ngIf=\"mode == 'chat'\">{{ message }} </div>\n    <div class=\"time\">{{ date | date: \"hh:mm\" }}</div>\n  </div>\n  <div *ngIf=\"image\" class=\"content image\">\n    <img [src]=\"image\" (click)=\"clickImage()\" />\n  </div>\n  <div class=\"message post\" *ngIf=\"post && post._id && mode == 'social'\">\n    <post-card [post]=\"post\" [action]=\"false\"></post-card>\n  </div>\n</div>\n");

/***/ }),

/***/ 96262:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/generics/action-icon/action-icon.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"action-icon\">\n  <div class=\"icon\" [class.disabled]=\"disabled\" (click)=\"iconClicked$()\">\n    <ion-icon [name]=\"icon\"></ion-icon>\n  </div>\n  <div (click)=\"numberClicked$()\" class=\"count\" *ngIf=\"count >= 0\">{{count < 1000 ? count : (count/1000).toFixed(1) + \"k\"}}</div>\n</div>");

/***/ }),

/***/ 71811:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/generics/mentionarea/mentionarea.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngFor=\"let item of lastTextArray; let i = index\">\n  <span\n    *ngIf=\"item.state == 'tag'\"\n    class=\"tag-word\"\n    (click)=\"setRoute('profile', item.param)\"\n    >{{ item.word }}</span\n  >\n  <span\n    *ngIf=\"item.state == 'tagged_group'\"\n    class=\"tag-word\"\n    (click)=\"\n      setRoute(\n        'profile/' + me?._id + '/settings/tagged-user-group/',\n        item.param\n      )\n    \"\n    >{{ item.word }}</span\n  >\n  <span\n    *ngIf=\"item.state == 'hashtag'\"\n    class=\"hashtag-word\"\n    (click)=\"setRoute('discover', item.param)\"\n    >{{ item.word }}</span\n  >\n  <span\n    *ngIf=\"item.state == 'link'\"\n    class=\"hashtag-word link\"\n    (click)=\"openExternalLink(item.word)\"\n    >{{ item.word }}</span\n  >\n  <br *ngIf=\"item.word == '[**br**]'\" />\n  <span *ngIf=\"item.word != '[**br**]' && item.state == 'none'\">{{\n    item.word\n  }}</span>\n</ng-container>\n<span\n  class=\"no-padding\"\n  *ngIf=\"text && text.length > maxCharacter && !clicked_more\"\n  (click)=\"setMore()\"\n>\n  ...{{ \"show_more\" | translate }}\n</span>\n");

/***/ }),

/***/ 42927:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/generics/mentions/mentions.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container\n  *ngIf=\"\n    friends.length &&\n    friends.length > 0 &&\n    searchedText &&\n    mentioning == 'friend'\n  \"\n>\n  <div\n    class=\"friend\"\n    *ngFor=\"let friend of friends\"\n    (click)=\"mentionUser(friend)\"\n  >\n    <user-minified-card\n      type=\"horizontal\"\n      [user]=\"friend\"\n      [with_router]=\"false\"\n      *ngIf=\"!friend['owner']\"\n    ></user-minified-card>\n  </div>\n</ng-container>\n<div\n  *ngIf=\"\n    (searchedText && mentioning == 'hashtag' && hashtags.length == 0) ||\n    (mentioning == 'friend' && friends.length == 0 && !loading)\n  \"\n  class=\"nonResult\"\n>\n  {{ \"non_result\" | translate }}\n</div>\n<ng-container\n  *ngIf=\"\n    hashtags.length &&\n    hashtags.length > 0 &&\n    searchedText &&\n    mentioning == 'hashtag'\n  \"\n>\n  <div class=\"tag\" *ngFor=\"let tag of hashtags\" (click)=\"addHashtag(tag)\">\n    <div class=\"hashtag-content\" [class.create-post]=\"isMinimized\">\n      <div>#{{ tag.hashtag }}</div>\n      <span>{{ tag.times_used }} {{ \"times used\" | translate }}</span>\n    </div>\n  </div>\n</ng-container>\n");

/***/ }),

/***/ 59728:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/generics/segmenttab/segmenttab.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tab-container\">\n  <div\n    *ngFor=\"let item of segments; let i = index\"\n    (click)=\"changeType(i)\"\n    [class.active]=\"type == i\"\n  >\n    {{ item | translate }}\n  </div>\n</div>\n");

/***/ }),

/***/ 81073:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/post/post-card/post-card.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-spinner class=\"spinner-center-page\" name=\"crescent\" *ngIf=\"loading\"></ion-spinner>\n\n<ion-card>\n  <div class=\"header\">\n    <user-minified-card [with_router]=\"with_router\" [user]=\"post?.user\" [type]=\"'horizontal'\" [followable]=\"userFollowable\"></user-minified-card>\n    <action-icon *ngIf=\"action\" (click)=\"showActions()\" \n      [icon]=\"'ellipsis-vertical-outline'\" [count]=\"-1\">\n    </action-icon>\n  </div>\n  <div class=\"message\">\n    <app-mentionarea [tags]=\"post.tags\" [hashtags]=\"post.hashtags\" [text]=\"post.text\"\n      (changeRoute)=\"clickedMentions($event)\"></app-mentionarea>\n  </div>\n  <div class=\"image-container\" *ngIf=\"post?.file?.url\" (click)=\"clickedImage(post?.file?.mimetype, post?.file?.url)\">\n    <img *ngIf=\"post.file.mimetype.includes('image')\" [src]=\"post.file.url\" (load)=\"isImageLoaded = true\" [class.opaque]=\"isImageLoaded\" />\n    <video playsinline preload=\"metadata\" [muted]=\"mediaIsMuted\" [loop]=\"isIntersecting\"\n      poster=\"../../../../assets/social-media/png/play.png\" *ngIf=\"post.file.mimetype.includes('video')\" #media>\n      <source [src]=\"post.file.url\" [type]=\"post.file.mimetype\" />\n    </video>\n  </div>\n  <div class=\"image-container\" *ngIf=\"!post?._id\">\n    <ion-skeleton-text animated></ion-skeleton-text>\n  </div>\n  <div class=\"actions\" *ngIf=\"user && post?._id\">\n    <div *ngIf=\"action\">\n      <action-icon [icon]=\"'chatbubble-outline'\" [count]=\"post.comment_count\" (click)=\"showComments()\"></action-icon>\n      <action-icon [class.active]=\"post['liked']\" class=\"like-icon\" (iconClicked)=\"like()\"\n        (numberClicked)=\"openLikedModal()\" [icon]=\"!post['liked'] ? 'heart-outline' : 'heart'\"\n        [count]=\"post.like_count\">\n      </action-icon>\n    </div>\n\n    <div *ngIf=\"action\">\n      <action-icon class=\"send-icon\" [icon]=\"'send-outline'\" (click)=\"sendPost()\" [count]=\"-1\"></action-icon>\n    </div>\n  </div>\n  <div class=\"created-at\" *ngIf=\"post?._id && action\">\n    {{ \"published\" | translate }} {{ post.created_at | date:\"shortDate\"}}\n  </div>\n</ion-card>");

/***/ }),

/***/ 68675:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/post/post-comment/post-comment.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>{{ \"comments\" | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <post-card\n    [action]=\"false\"\n    [post]=\"post\"\n    [userFollowable]=\"false\"\n    class=\"featured\"\n    [imageClickable]=\"false\"\n  ></post-card>\n  <ion-infinite-scroll\n    position=\"top\"\n    threshold=\"0px\"\n    (ionInfinite)=\"loadData()\"\n  >\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-list>\n    <div class=\"empty-placeholder\" *ngIf=\"!loadings.main && !comments.length\">\n      {{ \"no-comment\" | translate }}\n    </div>\n    <ion-item *ngFor=\"let comment of comments\">\n      <div class=\"comment-card\">\n        <div class=\"metadata\">\n          <ion-avatar (click)=\"setRoute('profile', comment?.user['_id'])\">\n            <img\n              [src]=\"\n                comment?.user['thumbnail']\n                  ? comment?.user['thumbnail']\n                  : default_user_image\n              \"\n            />\n          </ion-avatar>\n          <div class=\"info\">\n            <div class=\"sub-info\">\n              <span (click)=\"setRoute('profile', comment?.user['_id'])\"\n                >{{ comment?.user[\"username\"] }}\n              </span>\n              <app-mentionarea\n                (changeRoute)=\"clickMention($event)\"\n                [tags]=\"comment.tags\"\n                [hashtags]=\"comment.hastags\"\n                [text]=\"comment.comment\"\n              >\n              </app-mentionarea>\n              <div class=\"activity-date\">\n                {{ comment.date | date:\"shortDate\"}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div\n          class=\"action\"\n          *ngIf=\"comment.user['_id'] == user._id || post.user['_id'] == user._id\"\n          (click)=\"deleteComment(comment._id)\"\n        >\n          <ion-icon name=\"trash-outline\"></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<mentions\n  *ngIf=\"searchedText\"\n  [searchedText]=\"searchedText\"\n  (userSelected)=\"mentionUser($event)\"\n  [isMinimized]=\"true\"\n  (tagSelected)=\"hashtagSelected($event)\"\n>\n</mentions>\n<ion-footer>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <!-- <ion-input [(ngModel)]=\"my_comment\" (keyup.enter)=\"sendComment()\" [placeholder]=\"'send-comment' | translate\"\n        enterkeyhint=\"send\" clearInput=\"true\" mention (mentioned)=\"mentioning($event)\"\n        (stopped)=\"stopped()\" ></ion-input> -->\n      <ion-textarea\n        [(ngModel)]=\"my_comment\"\n        (keyup.enter)=\"sendComment()\"\n        [placeholder]=\"'send-comment' | translate\"\n        enterkeyhint=\"send\"\n        autoGrow=\"true\"\n        rows=\"1\"\n        mention\n        (mentioned)=\"mentioning($event)\"\n      ></ion-textarea>\n      <ion-icon\n        class=\"clear-text\"\n        *ngIf=\"my_comment\"\n        (click)=\"my_comment = ''\"\n        name=\"close-circle-outline\"\n      ></ion-icon>\n      <ion-icon\n        name=\"send-outline\"\n        slot=\"end\"\n        (click)=\"sendComment()\"\n      ></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n<ion-spinner\n  *ngIf=\"loadings.main\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>\n");

/***/ }),

/***/ 89097:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/user/minified-card/minified-card.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  *ngIf=\"user\"\n  class=\"minified-card\"\n  [class.horizontal]=\"type == 'horizontal'\"\n  [class.vertical]=\"type == 'vertical'\"\n>\n  <ion-avatar (click)=\"routeUser()\">\n    <img [src]=\"user?.thumbnail ? user?.thumbnail : default_user_image\" />\n  </ion-avatar>\n  <div class=\"metadata\">\n    <div class=\"name\" (click)=\"routeUser()\">\n      {{ user?.username }}\n    </div>\n    <div\n      class=\"sub-info\"\n      *ngIf=\"\n        followable &&\n        !isFollowing &&\n        me &&\n        me._id != user._id\n      \"\n      (click)=\"followUser()\"\n    >\n      {{ \"follow\" | translate }}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 61093:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/components/users-modal/users-modal.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>{{ \"liked_users\" | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n    <ion-item *ngFor=\"let item of likedUsers\">\n      <user-minified-card\n        [user]=\"item\"\n        [type]=\"'horizontal'\"\n        [followable]=\"true\"\n        (onFollow)=\"followUser()\"\n        [with_router]=\"false\"\n        (onRoute)=\"routeUser($event)\"\n      ></user-minified-card>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData()\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ 41057:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/post-create/post-create.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close(false)\">\n        <ion-icon slot=\"start\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title\n      >{{post?._id ? (\"edit-post\" | translate) : (\"create-post\" |\n      translate)}}</ion-title\n    >\n    <ion-buttons slot=\"end\">\n      <ion-button\n        (click)=\"post._id ? savePost():newPost()\"\n        [disabled]=\"loading || !(post.text || post.file.url)\"\n      >\n        <ion-icon slot=\"start\" name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar\n    *ngIf=\"uploadingImage\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n  <ion-list class=\"new\">\n    <ion-item *ngIf=\"!post?.file?.url\">\n      <ion-skeleton-text> </ion-skeleton-text>\n      <div class=\"on-center-image\">\n        <spica-upload-image\n          (change)=\"userUploadedImage($event)\"\n        ></spica-upload-image>\n      </div>\n    </ion-item>\n    <ion-item *ngIf=\"post?.file?.url\">\n      <div class=\"file-content\">\n        <div class=\"file-side\">\n          <img\n            *ngIf=\"post.file.mimetype.includes('image')\"\n            [src]=\"post.file.url\"\n          />\n          <video\n            height=\"300\"\n            poster=\"../../../../assets/social-media/png/play.png\"\n            controls\n            controlsList=\"nodownload\"\n            playsinline\n            preload=\"metadata\"\n            *ngIf=\"post.file.mimetype.includes('video')\"\n          >\n            <source [src]=\"post.file.url\" [type]=\"post.file.mimetype\" />\n          </video>\n        </div>\n        <div class=\"actions-side\">\n          <spica-upload-image\n            (change)=\"userUploadedImage($event)\"\n            [icon]=\"'refresh-outline'\"\n          ></spica-upload-image>\n          <ion-icon\n            class=\"deleteImage\"\n            name=\"remove-circle-outline\"\n            (click)=\"post.file.url=undefined\"\n          ></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n    <ion-item class=\"posttext\">\n      <textarea\n        [(ngModel)]=\"post.text\"\n        [placeholder]=\"'enter-more-information' | translate\"\n        mention\n        (mentioned)=\"mentioning($event)\"\n        (stopped)=\"searchedText = null\"\n        [autofocus]=\"true\"\n        (ngModelChange)=\"postTextChange()\"\n      ></textarea>\n    </ion-item>\n  </ion-list>\n\n  <mentions\n    [searchedText]=\"searchedText\"\n    (userSelected)=\"mentionUser($event)\"\n    (tagSelected)=\"hashtagSelected($event)\"\n    [isMinimized]=\"true\"\n  >\n  </mentions>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_social-media_components_components_module_ts.js.map