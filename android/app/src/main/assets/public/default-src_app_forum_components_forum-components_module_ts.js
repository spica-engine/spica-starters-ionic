(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_forum_components_forum-components_module_ts"],{

/***/ 51621:
/*!***********************************************************************************!*\
  !*** ./src/app/forum/components/add-comment-modal/add-comment-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCommentModalComponent": () => (/* binding */ AddCommentModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_comment_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-comment-modal.component.html */ 64412);
/* harmony import */ var _add_comment_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-comment-modal.component.scss */ 66119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);







let AddCommentModalComponent = class AddCommentModalComponent {
    constructor(modal, _authService) {
        this.modal = modal;
        this._authService = _authService;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUser();
            yield this.getComment();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
        });
    }
    getComment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.comment = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.get(this.commentId);
        });
    }
    getItems(textarea) {
        var q = textarea.srcElement.value;
        this.textSearch = q;
    }
    addInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.newComment = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.insert({
                user: this.user._id,
                content: this.textSearch,
                is_post: false,
            });
            this.comment.comments = this.comment.comments || [];
            this.comment.comments.push(this.newComment._id);
            _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.patch({
                _id: this.comment._id,
                comments: this.comment.comments,
            });
            this._dismiss();
        });
    }
    _dismiss() {
        this.modal.dismiss({
            comment: this.newComment,
        });
    }
};
AddCommentModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AddCommentModalComponent.propDecorators = {
    commentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
AddCommentModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-comment-modal',
        template: _raw_loader_add_comment_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_comment_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddCommentModalComponent);



/***/ }),

/***/ 75797:
/*!*************************************************************!*\
  !*** ./src/app/forum/components/forum-components.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumComponentModule": () => (/* binding */ ForumComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _add_comment_modal_add_comment_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-comment-modal/add-comment-modal.component */ 51621);
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-card/post-card.component */ 86032);
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/date-ago.pipe */ 46059);
/* harmony import */ var _users_list_modal_users_list_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-list-modal/users-list-modal.component */ 44519);











let ForumComponentModule = class ForumComponentModule {
};
ForumComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _users_list_modal_users_list_modal_component__WEBPACK_IMPORTED_MODULE_3__.UsersListModalComponent,
            _add_comment_modal_add_comment_modal_component__WEBPACK_IMPORTED_MODULE_0__.AddCommentModalComponent,
            _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__.PostCardComponent,
            _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.DateAgoPipe
        ],
        exports: [
            _users_list_modal_users_list_modal_component__WEBPACK_IMPORTED_MODULE_3__.UsersListModalComponent,
            _add_comment_modal_add_comment_modal_component__WEBPACK_IMPORTED_MODULE_0__.AddCommentModalComponent,
            _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_1__.PostCardComponent
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
    })
], ForumComponentModule);



/***/ }),

/***/ 86032:
/*!*******************************************************************!*\
  !*** ./src/app/forum/components/post-card/post-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCardComponent": () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-card.component.html */ 21302);
/* harmony import */ var _post_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-card.component.scss */ 21974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/environment */ 18189);








let PostCardComponent = class PostCardComponent {
    constructor(_authService, _alertController) {
        this._authService = _authService;
        this._alertController = _alertController;
        this.details = false;
        this.isComment = false;
        this.defaultAvatar = _services_environment__WEBPACK_IMPORTED_MODULE_4__.environment.user_img;
        this.isLoading = true;
        this._authService.initBucket();
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if ((_a = this.user) === null || _a === void 0 ? void 0 : _a._id) {
                let isDisliked = this.comment.dislikes.find((el) => {
                    return el._id == this.user._id;
                });
                if (isDisliked) {
                    this.myAction = 'disliked';
                }
                else {
                    let isLiked = this.comment.likes.find((el) => {
                        return el._id == this.user._id;
                    });
                    if (isLiked) {
                        this.myAction = 'liked';
                    }
                }
                if (this._authService.followingUsers.includes(this.comment.user._id)) {
                    this.comment['is_followed'] = true;
                }
            }
            this.isLoading = false;
        });
    }
    likeDislike(action) {
        this.myAction = `${action}d`;
        let dislikes = this.comment.dislikes;
        let likes = this.comment.likes;
        let actionArr = this.comment[`${action}s`] || [];
        let oppositeArr = action == 'like' ? dislikes : likes;
        let myAction = actionArr.find((el) => {
            return el._id == this.user._id;
        });
        if (!myAction) {
            actionArr.push(this.user);
            oppositeArr = oppositeArr.filter((el) => {
                return el._id !== this.user._id;
            });
        }
        else {
            this.myAction = undefined;
            actionArr = actionArr.filter((el) => {
                return el._id !== this.user._id;
            });
        }
        this.comment.likes = action == 'like' ? actionArr : oppositeArr;
        this.comment.dislikes = action == 'dislike' ? actionArr : oppositeArr;
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.patch({
            _id: this.comment._id,
            likes: this.comment.likes,
            dislikes: this.comment.dislikes,
        });
    }
    follow() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this._authService.followingUsers.includes(this.comment.user._id)) {
                this.comment['is_followed'] = false;
                this._authService.unfollowUser(this.comment.user._id);
                this.comment.user.followers = this.comment.user.followers.filter((el) => {
                    return el !== this.user._id;
                });
            }
            else {
                this.comment['is_followed'] = true;
                this._authService.followUser(this.comment.user._id);
                this.comment.user.followers = this.comment.user.followers || [];
                this.comment.user.followers.push(this.user._id);
            }
            _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({
                _id: this.user._id,
                followings: this._authService.followingUsers,
            });
            _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({
                _id: this.comment.user._id,
                followers: this.comment.user.followers,
            });
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                header: 'Alert',
                message: 'Are you sure delete the comment',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            alert.dismiss(false);
                        },
                    },
                    {
                        text: 'Okay',
                        role: 'okay',
                        handler: () => {
                            alert.dismiss(true);
                        },
                    },
                ],
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            if (result) {
                if (result.role == 'okay') {
                    this.isLoading = true;
                    yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.remove(this.comment._id);
                }
            }
        });
    }
};
PostCardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
PostCardComponent.propDecorators = {
    comment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    isComment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
PostCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'post-card',
        template: _raw_loader_post_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostCardComponent);



/***/ }),

/***/ 44519:
/*!*********************************************************************************!*\
  !*** ./src/app/forum/components/users-list-modal/users-list-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListModalComponent": () => (/* binding */ UsersListModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_users_list_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./users-list-modal.component.html */ 34430);
/* harmony import */ var _users_list_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-list-modal.component.scss */ 28222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);







let UsersListModalComponent = class UsersListModalComponent {
    constructor(_modal, _authService) {
        this._modal = _modal;
        this._authService = _authService;
        this.users = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            yield this.getUser();
            (_b = this.user[this.operation]) === null || _b === void 0 ? void 0 : _b.forEach(el => {
                this.users.push(el);
            });
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.get(this.userId, {
                queryParams: { relation: true },
            });
        });
    }
    action(id) {
        this.user[this.operation] = this.user[this.operation].filter((el) => {
            return el['_id'] != id;
        });
        this.users = this.user[this.operation];
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({
            _id: this.user._id,
            [this.operation]: this.user[this.operation],
        });
    }
    _dismiss() {
        this._modal.dismiss();
    }
};
UsersListModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
UsersListModalComponent.propDecorators = {
    operation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
UsersListModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-users-list-modal',
        template: _raw_loader_users_list_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_users_list_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UsersListModalComponent);



/***/ }),

/***/ 46059:
/*!**********************************************!*\
  !*** ./src/app/forum/pipes/date-ago.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'dateAgo'
    })
], DateAgoPipe);



/***/ }),

/***/ 66119:
/*!*************************************************************************************!*\
  !*** ./src/app/forum/components/add-comment-modal/add-comment-modal.component.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  margin: 0;\n  min-height: 100%;\n}\n:host ion-card ion-card-header h1 {\n  text-align: center;\n  font-weight: 600;\n}\n:host ion-card ion-card-content {\n  padding: 5px;\n}\n:host ion-card ion-card-content ion-textarea {\n  --background:#f0f3f5;\n  padding: 8px;\n  border-radius: 10px;\n}\n:host ion-card ion-card-content ion-button {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb21tZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBaEI7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQUVZO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBaEI7QUFFWTtFQUNJLGdCQUFBO0FBQWhCIiwiZmlsZSI6ImFkZC1jb21tZW50LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0YXJlYXtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDojZjBmM2Y1O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 21974:
/*!*********************************************************************!*\
  !*** ./src/app/forum/components/post-card/post-card.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  margin: 10px !important;\n  padding: 0 !important;\n}\n:host ion-card ion-card-header {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n:host ion-card ion-card-header ion-avatar {\n  display: flex;\n  justify-content: center;\n}\n:host ion-card ion-card-header ion-avatar img {\n  width: 40px;\n  height: 40px;\n}\n:host ion-card ion-card-header .nick {\n  margin-left: 3px;\n  margin-right: 10px;\n  font-weight: 600;\n}\n:host ion-card ion-card-header .created-at {\n  right: 0;\n  margin-right: 20px;\n  position: absolute;\n  font-weight: 600;\n  display: flex;\n}\n:host ion-card ion-card-header .created-at ion-icon {\n  margin-right: 3px;\n}\n:host ion-card ion-card-header .trash {\n  right: 0;\n  position: absolute;\n  --background: none;\n  color: #aa0000;\n}\n:host ion-card ion-card-header .follow-button {\n  color: var(--ion-color-primary);\n  margin-right: 10px;\n}\n:host ion-card ion-card-header ion-button {\n  --padding-start: 5px;\n}\n:host ion-card ion-card-content ion-label p {\n  font-weight: 600;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n:host ion-card ion-card-content ion-label p.details {\n  overflow: unset;\n  display: block;\n  margin-bottom: 20px;\n  color: #5f5e5e;\n}\n:host ion-card ion-card-content ion-button {\n  font-size: 12px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  margin-top: 8px;\n  --border-radius: 8px;\n  --background: var(--ion-color-light-tint);\n  color: black;\n}\n:host ion-card ion-card-content ion-button ion-icon {\n  margin-right: 3px;\n}\n:host ion-card ion-card-content ion-button.active {\n  color: red;\n}\n:host ion-card ion-card-content .right {\n  position: absolute;\n  right: 0;\n  margin-right: 1rem;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQURRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHVjtBQUFNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFDTTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ1I7QUFBUTtFQUNFLGlCQUFBO0FBRVY7QUFFTTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBR007RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFJTTtFQUNFLG9CQUFBO0FBRlI7QUFPUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFMVjtBQU9VO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFMWjtBQVNNO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUFQUjtBQVFRO0VBQ0UsaUJBQUE7QUFOVjtBQVNRO0VBQ0UsVUFBQTtBQVBWO0FBVU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFSUiIsImZpbGUiOiJwb3N0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5uaWNrIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuXG4gICAgICAuY3JlYXRlZC1hdCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50cmFzaHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiKDE3MCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIC5mb2xsb3ctYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXG4gICAgICAgICAgJi5kZXRhaWxzIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiB1bnNldDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoOTUsIDk0LCA5NCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucmlnaHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 28222:
/*!***********************************************************************************!*\
  !*** ./src/app/forum/components/users-list-modal/users-list-modal.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-toolbar ion-icon {\n  font-size: 20px;\n}\n:host ion-content ion-item {\n  margin: 5px;\n}\n:host ion-content ion-item ion-label {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n}\n:host ion-content ion-item ion-label h2 {\n  font-weight: 600;\n}\n:host ion-content ion-item ion-label ion-button {\n  font-size: 12px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  margin-top: 8px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWxpc3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUdRO0VBQ0ksV0FBQTtBQURaO0FBRVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksZ0JBQUE7QUFDcEI7QUFDZ0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNwQiIsImZpbGUiOiJ1c2Vycy1saXN0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 64412:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/components/add-comment-modal/add-comment-modal.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-card-header>\n    <ion-label>\n      <h1>New Comment</h1>\n    </ion-label>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-textarea [(ngModel)]=\"commentText\" rows=\"16\" cols=\"16\" (ionInput)=\"getItems($event)\" placeholder=\"Enter any notes here...\"></ion-textarea>\n    <ion-button expand=\"block\" [disabled]=\"!commentText\" (click)=\"addInfo()\" color=\"primary\">Send Comment</ion-button>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ 21302:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/components/post-card/post-card.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card *ngIf=\"!isLoading\">\n  <ion-card-header>\n    <ion-avatar>\n      <img [src]=\"comment.user['profile_picture'] || defaultAvatar\" >\n    </ion-avatar>\n    <span class=\"nick\">{{comment.user['nick']}}</span>\n    <span class=\"follow-button\" *ngIf=\"user && comment?.user['_id'] != user?._id\" size=\"small\" fill=\"clear\" (click)=\"follow()\">{{comment['is_followed'] ? 'Followed' : 'Folow'}}</span>\n    <span *ngIf=\"!details || isComment\">{{comment.date | dateAgo}}</span>\n    <ion-text *ngIf=\"details && !isComment\" class=\"created-at\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      {{comment.date | date:'dd/MM/yyyy'}}\n    </ion-text>\n    <ion-button *ngIf=\"!details && comment?.user['_id'] == user?._id\" (click)=\"presentAlert()\" class=\"trash\">\n      <ion-icon name=\"trash-outline\"></ion-icon>\n    </ion-button>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-label>\n      <p [class.details]=\"details\">{{comment.content}}</p>\n    </ion-label>\n    <ion-button [disabled]=\"!user\" (click)=\"likeDislike('like')\" [class.active]=\"myAction=='liked'\">\n      <ion-icon name=\"thumbs-up-outline\"></ion-icon> \n      {{comment?.likes?.length}}\n    </ion-button>\n    <ion-button [disabled]=\"!user\"  (click)=\"likeDislike('dislike')\" [class.active]=\"myAction=='disliked'\">\n      <ion-icon name=\"thumbs-down-outline\"></ion-icon>\n      {{comment?.dislikes?.length}}\n    </ion-button>\n    <ion-button  [disabled]=\"!user\" *ngIf=\"!isComment\" >\n      <ion-icon name=\"chatbox-outline\"></ion-icon>\n      {{comment?.comments?.length}}\n    </ion-button>\n    <ion-button *ngIf=\"!details\" color=\"primary\" class=\"right\" [routerLink]=\"['/forum/forum-details/' + comment?._id]\">Read More</ion-button>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ 34430:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/components/users-list-modal/users-list-modal.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>{{operation | titlecase}}</ion-title>\n    <ion-icon name=\"close\" slot=\"end\" (click)=\"_dismiss()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list >\n    <ion-item *ngFor=\"let user of users\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"user?.profile_picture\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{user?.username}}</h2>\n        <ion-button color=\"light\" slot=\"end\" (click)=\"action(user?._id)\">{{operation=='followings' ? 'Unfollow' : 'Remove'}}</ion-button>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_forum_components_forum-components_module_ts.js.map