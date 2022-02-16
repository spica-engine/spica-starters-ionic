(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_profile_profile_module_ts"],{

/***/ 87293:
/*!***************************************************************!*\
  !*** ./src/app/forum/pages/profile/profile-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 56249);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 5397:
/*!*******************************************************!*\
  !*** ./src/app/forum/pages/profile/profile.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 87293);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 56249);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _components_forum_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forum-components.module */ 75797);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule,
            _components_forum_components_module__WEBPACK_IMPORTED_MODULE_3__.ForumComponentModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 56249:
/*!*****************************************************!*\
  !*** ./src/app/forum/pages/profile/profile.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 85260);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 60786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 49078);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 18189);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _components_users_list_modal_users_list_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/users-list-modal/users-list-modal.component */ 44519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let ProfilePage = class ProfilePage {
    constructor(_modal, _authService, _alertController, _router) {
        this._modal = _modal;
        this._authService = _authService;
        this._alertController = _alertController;
        this._router = _router;
        this.postIsLoading = true;
        this.comments = [];
        this.defaultAvatar = _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
        this.queryParams = { relation: true, sort: { _id: -1 } };
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            if (!this.userId) {
                this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
            }
            else {
                yield this.getUser();
                this.segmentChanged('posts');
            }
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.get(this.userId, {
                queryParams: { relation: true },
            });
        });
    }
    segmentChanged(value) {
        this.postIsLoading = true;
        if (value == 'comments') {
            this.queryParams['filter'] = { 'comments.user': this.user._id };
        }
        else if (value == 'liked') {
            this.queryParams['filter'] = {
                $or: [{ likes: this.user._id }, { dislikes: this.user._id }],
            };
        }
        else if (value == 'posts') {
            this.queryParams['filter'] = { user: this.user._id, is_post: true };
        }
        this.getData();
    }
    getData() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.comment.getAll({ queryParams: this.queryParams })
            .then((res) => {
            this.postIsLoading = false;
            this.comments = res;
        });
    }
    usersListModal(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _components_users_list_modal_users_list_modal_component__WEBPACK_IMPORTED_MODULE_5__.UsersListModalComponent,
                swipeToClose: true,
                componentProps: {
                    operation: value,
                },
            });
            return yield modal.present();
        });
    }
    logOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                message: 'Are you sure you want to log out',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            alert.dismiss(false);
                        },
                    },
                    {
                        text: 'Log Out',
                        role: 'okay',
                        handler: () => {
                            this._authService.logout();
                            this._router.navigateByUrl('/home', { replaceUrl: true });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 60786:
/*!*******************************************************!*\
  !*** ./src/app/forum/pages/profile/profile.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-toolbar ion-icon {\n  color: #aa0000;\n  font-size: 28px;\n}\n:host ion-content .spinner-container {\n  width: 100%;\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content .spinner-container.post {\n  margin-top: 40px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n:host ion-content .user {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n:host ion-content .user ion-avatar {\n  width: 90px;\n  height: 90px;\n  margin-top: 10px;\n}\n:host ion-content .user ion-label {\n  text-align: center;\n  margin: 5px;\n}\n:host ion-content .user ion-label h1 {\n  font-weight: 600;\n}\n:host ion-content .user ion-label p {\n  color: gray;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.65rem;\n  margin-bottom: 5px;\n}\n:host ion-content .user ion-label span {\n  color: #8888f3;\n  margin: 3px;\n  font-size: 10px;\n  border: 1px solid;\n  border-radius: 20px;\n  padding: 4px;\n  font-weight: 700;\n  border-color: rgba(27, 142, 243, 0.4);\n}\n:host ion-content .user ion-segment {\n  margin-top: 20px;\n}\n:host ion-content .comments ion-card ion-card-content ion-label p {\n  font-weight: 600;\n}\n:host ion-content .comments ion-card ion-card-content ion-button {\n  font-size: 12px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  margin-top: 8px;\n}\n:host ion-content .comments ion-card ion-card-content ion-button ion-icon {\n  margin-right: 3px;\n}\n:host ion-content .comments ion-card ion-card-content .trash {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNOO0FBR0k7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFEUjtBQUlJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZOO0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQURSO0FBRVE7RUFDRSxnQkFBQTtBQUFWO0FBRVE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBVjtBQUVRO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBQVY7QUFHTTtFQUNFLGdCQUFBO0FBRFI7QUFRWTtFQUNFLGdCQUFBO0FBTmQ7QUFTVTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVBaO0FBUVk7RUFDRSxpQkFBQTtBQU5kO0FBU1U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVBaIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHJnYigxNzAsIDAsIDApO1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICYucG9zdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMzYsIDEzNiwgMjQzKTtcclxuICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMTQyLCAyNDMsIDAuNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tbWVudHMge1xyXG4gICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudHJhc2gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 85260:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/profile/profile.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"forum\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-icon slot=\"end\" name=\"log-out-outline\" (click)=\"logOut()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"spinner-container\" *ngIf=\"!user\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ng-container *ngIf=\"user\">\n    <div class=\"user\">\n      <ion-avatar>\n        <img [src]=\"this.user.profile_picture || defaultAvatar\" >\n      </ion-avatar>\n      <ion-label>\n        <h1>{{this.user.username}}</h1>\n        <p>RANK: {{this.user.level}}</p>\n        <span (click)=\"usersListModal('followers')\">{{this.user.followers.length}} Followers</span>\n        <span (click)=\"usersListModal('followings')\">{{this.user.followings.length}} Followings</span>\n      </ion-label>\n      <ion-segment value=\"posts\" (ionChange)=\"segmentChanged($event.target['value'])\">\n        <ion-segment-button value=\"posts\">\n          <ion-label>Posts</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"comments\">\n          <ion-label>Comments</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"liked\">\n          <ion-label>Likeds</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div class=\"spinner-container post\" *ngIf=\"postIsLoading\">\n      <ion-spinner></ion-spinner>\n    </div>\n    <div class=\"comments\" *ngIf=\"!postIsLoading\">\n      <post-card [comment]=\"item\" *ngFor=\"let item of this.comments\" [user]=\"user\"></post-card>\n    </div>\n  </ng-container>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_profile_profile_module_ts.js.map