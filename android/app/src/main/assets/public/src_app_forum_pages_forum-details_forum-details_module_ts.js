(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_forum-details_forum-details_module_ts"],{

/***/ 50466:
/*!***************************************************************************!*\
  !*** ./src/app/forum/pages/forum-details/forum-details-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumDetailsPageRoutingModule": () => (/* binding */ ForumDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forum_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum-details.page */ 9577);




const routes = [
    {
        path: ':id',
        component: _forum_details_page__WEBPACK_IMPORTED_MODULE_0__.ForumDetailsPage
    }
];
let ForumDetailsPageRoutingModule = class ForumDetailsPageRoutingModule {
};
ForumDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForumDetailsPageRoutingModule);



/***/ }),

/***/ 23033:
/*!*******************************************************************!*\
  !*** ./src/app/forum/pages/forum-details/forum-details.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumDetailsPageModule": () => (/* binding */ ForumDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _forum_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forum-details-routing.module */ 50466);
/* harmony import */ var _forum_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum-details.page */ 9577);
/* harmony import */ var _components_forum_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/forum-components.module */ 75797);








let ForumDetailsPageModule = class ForumDetailsPageModule {
};
ForumDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forum_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForumDetailsPageRoutingModule,
            _components_forum_components_module__WEBPACK_IMPORTED_MODULE_2__.ForumComponentModule
        ],
        declarations: [_forum_details_page__WEBPACK_IMPORTED_MODULE_1__.ForumDetailsPage]
    })
], ForumDetailsPageModule);



/***/ }),

/***/ 9577:
/*!*****************************************************************!*\
  !*** ./src/app/forum/pages/forum-details/forum-details.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumDetailsPage": () => (/* binding */ ForumDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forum_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forum-details.page.html */ 32085);
/* harmony import */ var _forum_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forum-details.page.scss */ 68602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 49078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_add_comment_modal_add_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-comment-modal/add-comment-modal.component */ 51621);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 19533);









let ForumDetailsPage = class ForumDetailsPage {
    constructor(_activatedRoute, _modalController, _authService) {
        this._activatedRoute = _activatedRoute;
        this._modalController = _modalController;
        this._authService = _authService;
        this._authService.initBucket();
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this._activatedRoute.snapshot.params.id;
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            if (this.userId) {
                this.getUser();
            }
            this.getComment();
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.get(this.userId, {
                queryParams: { relation: true },
            });
        });
    }
    getComment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.comment = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.comment.get(this.id, {
                queryParams: {
                    relation: [
                        'comments.user',
                        'user',
                        'likes',
                        'dislikes',
                        'comments.likes',
                        'comments.dislikes',
                    ],
                },
            });
        });
    }
    addCommentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const commentModal = yield this._modalController.create({
                component: _components_add_comment_modal_add_comment_modal_component__WEBPACK_IMPORTED_MODULE_3__.AddCommentModalComponent,
                swipeToClose: true,
                componentProps: {
                    commentId: this.id,
                },
            });
            commentModal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (!res.data || res.data.action == 'close') {
                    return;
                }
                else {
                    res.data.comment['user'] = this.user;
                    this.comment.comments = this.comment.comments || [];
                    this.comment.comments.push(res.data.comment);
                }
            }));
            return yield commentModal.present();
        });
    }
};
ForumDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService }
];
ForumDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forum-details',
        template: _raw_loader_forum_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forum_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForumDetailsPage);



/***/ }),

/***/ 68602:
/*!*******************************************************************!*\
  !*** ./src/app/forum/pages/forum-details/forum-details.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .main-comment .add-comment {\n  margin: 10px;\n  --border-radius:18px;\n  font-weight: 600;\n}\n:host .comment-answers ion-card {\n  margin: 5px 8px 0 14px;\n}\n:host .comment-answers ion-card ion-card-header {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n:host .comment-answers ion-card ion-card-header ion-avatar {\n  display: flex;\n  justify-content: center;\n}\n:host .comment-answers ion-card ion-card-header ion-avatar img {\n  width: 40px;\n  height: 40px;\n}\n:host .comment-answers ion-card ion-card-header .nick {\n  margin-left: 3px;\n  font-weight: 600;\n}\n:host .comment-answers ion-card ion-card-header ion-button {\n  --padding-start: 5px;\n}\n:host .comment-answers ion-card ion-card-content ion-label p {\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n:host .comment-answers ion-card ion-card-content ion-button {\n  font-size: 12px;\n  --padding-start: 10px;\n  --padding-end:10px;\n  --border-radius:8px;\n}\n:host .comment-answers ion-card ion-card-content ion-button ion-icon {\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7QUFRUTtFQUNJLHNCQUFBO0FBTlo7QUFPWTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMaEI7QUFNZ0I7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFKbEI7QUFLa0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhwQjtBQU1nQjtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKbEI7QUFNZ0I7RUFDRSxvQkFBQTtBQUpsQjtBQVNrQjtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFQcEI7QUFVZ0I7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUmxCO0FBU2tCO0VBQ0UsaUJBQUE7QUFQcEIiLCJmaWxlIjoiZm9ydW0tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGlvbi1jb250ZW50e1xyXG4gICAgICAgIC5tYWluLWNvbW1lbnR7XHJcbiAgICAgICAgICAgIC5hZGQtY29tbWVudHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czoxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5jb21tZW50LWFuc3dlcnN7XHJcbiAgICAgICAgaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDhweCAwIDE0cHg7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmljayB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 32085:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/forum-details/forum-details.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button defaultHref=\"forum\" slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"comment\">\n    <div class=\"main-comment\">\n      <post-card [comment]=\"comment\" [details]=\"true\" [user]=\"user\"></post-card>\n      <ion-button\n        expand=\"block\"\n        color=\"primary\"\n        fill=\"outline\"\n        class=\"add-comment\"\n        (click)=\"addCommentModal()\"\n        [disabled]=\"!user\"\n        >Add a comment</ion-button\n      >\n    </div>\n    <post-card\n      [comment]=\"answer\"\n      [isComment]=\"true\"\n      [details]=\"true\"\n      [user]=\"user\"\n      *ngFor=\"let answer of this.comment.comments\"\n    ></post-card>\n  </ng-container>\n  <ion-spinner *ngIf=\"!comment\" class=\"spinner-center-page\"></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_forum-details_forum-details_module_ts.js.map