(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_dating_pages_user-details_user-details_module_ts"],{

/***/ 44592:
/*!**************************************************************************!*\
  !*** ./src/app/dating/pages/user-details/user-details-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageRoutingModule": () => (/* binding */ UserDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details.page */ 81761);




const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPage
    }
];
let UserDetailsPageRoutingModule = class UserDetailsPageRoutingModule {
};
UserDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDetailsPageRoutingModule);



/***/ }),

/***/ 30062:
/*!******************************************************************!*\
  !*** ./src/app/dating/pages/user-details/user-details.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPageModule": () => (/* binding */ UserDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-details-routing.module */ 44592);
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page */ 81761);
/* harmony import */ var _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dating-components.module */ 33357);








let UserDetailsPageModule = class UserDetailsPageModule {
};
UserDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailsPageRoutingModule,
            _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__.DatingComponentModule
        ],
        declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_1__.UserDetailsPage]
    })
], UserDetailsPageModule);



/***/ }),

/***/ 81761:
/*!****************************************************************!*\
  !*** ./src/app/dating/pages/user-details/user-details.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailsPage": () => (/* binding */ UserDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-details.page.html */ 65547);
/* harmony import */ var _user_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-details.page.scss */ 45839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 83954);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 8298);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ 11214);
/* harmony import */ var _services_choise_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/choise-action.service */ 61358);










let UserDetailsPage = class UserDetailsPage {
    constructor(_route, _authService, _choiceService, commonService, _chatService, _router) {
        this._route = _route;
        this._authService = _authService;
        this._choiceService = _choiceService;
        this.commonService = commonService;
        this._chatService = _chatService;
        this._router = _router;
        this.showMatch = false;
        this.isMatched = false;
        this.isChoosed = true;
        this.isLoading = true;
        this._authService.initBucket;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let userId = this._route.snapshot.params.id;
            this._route.queryParams.subscribe((param) => {
                this.isMatched = param.isMatched == 'true' ? true : false;
            });
            this.user = yield this.getUser(userId);
            this.me = yield this._authService.getUser().toPromise();
            this.user.gallery = this.user.gallery || [];
            this.user.gallery.push(this.user.profile_photo);
            this.checkLike();
            this.isLoading = false;
        });
    }
    getUser(id) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.user.get(id);
    }
    checkLike() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let like = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.likes.getAll({
                queryParams: { filter: { user: this.user._id, liked_user: this.me._id } },
            });
            if (!like.length) {
                let unlike = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.unlikes.getAll({
                    queryParams: {
                        filter: { user: this.user._id, unliked_user: this.me._id },
                    },
                });
                if (!unlike.length) {
                    this.isChoosed = false;
                    return;
                }
            }
        });
    }
    choice(value) {
        this._choiceService.insertChoice(value, this.user._id, this.me._id);
        if (value == 'like') {
            this.showMatch = true;
        }
        else {
            this.isChoosed = true;
        }
    }
    matchAction(value) {
        if (value == 'message') {
            this.sendSms();
        }
        this.showMatch = false;
        this.isMatched = true;
        this.isChoosed = true;
    }
    sendSms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let chatUsers = [this.me, this.user];
            let name = `${chatUsers[0].username}, ${chatUsers[1].username}...`;
            let chatExists = yield this._chatService.isChatExists(chatUsers);
            if (!chatExists.result) {
                if (chatUsers.length == 2) {
                    this.navigateToChat();
                }
                else
                    this._chatService.createChat({
                        managers: [this.user._id],
                        name: name,
                        is_group: chatUsers.length > 2,
                        informations: chatUsers.map((user) => {
                            return { user: user._id };
                        }),
                    });
            }
            else {
                this._router.navigate([
                    `dating/tabs/chats/${chatExists.chat['_id']}`,
                    { chat: JSON.stringify(chatExists.chat) },
                ]);
            }
        });
    }
    navigateToChat() {
        this._router.navigate([
            `dating/tabs/chats/${undefined}`,
            { user: JSON.stringify(this.user) },
        ]);
    }
};
UserDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_choise_action_service__WEBPACK_IMPORTED_MODULE_6__.ChoiseActionService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
UserDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-details',
        template: _raw_loader_user_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserDetailsPage);



/***/ }),

/***/ 45839:
/*!******************************************************************!*\
  !*** ./src/app/dating/pages/user-details/user-details.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .gallery-slide {\n  height: 260px;\n  max-height: 260px;\n}\n:host ion-content .gallery-slide ion-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host ion-content .user-info {\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .user-info ion-button {\n  margin-bottom: 15px;\n}\n:host ion-content .user-info ion-label {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  color: gray;\n}\n:host ion-content .user-info ion-label ion-text {\n  margin-left: 7px;\n}\n:host ion-content .user-info p {\n  color: gray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUlRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZWO0FBT0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBTE47QUFNTTtFQUNFLG1CQUFBO0FBSlI7QUFNTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSlI7QUFLUTtFQUNFLGdCQUFBO0FBSFY7QUFNTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBSlIiLCJmaWxlIjoidXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC5nYWxsZXJ5LXNsaWRlIHtcbiAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiAyNjBweDtcblxuICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1pbmZve1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgICAgaW9uLWxhYmVse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBpb24tdGV4dHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwe1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 65547:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/pages/user-details/user-details.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"!isLoading && user\">\n    <ion-slides [pager]=\"user.gallery?.length > 1\" class=\"gallery-slide\">\n      <ion-slide *ngFor=\"let image of user.gallery\">\n        <img [src]=\"image\" />\n      </ion-slide>\n    </ion-slides>\n    <div class=\"user-info\">\n      <h5>\n        {{user.name + ' ' + user.surname + ', ' +\n        commonService.calculateAge(user.birthday)}}\n      </h5>\n      <ion-button *ngIf=\"isMatched\" (click)=\"sendSms()\">Send Message</ion-button>\n      <ion-label *ngIf=\"user.school\"><ion-icon name=\"school\"></ion-icon> <ion-text>{{user.school}}</ion-text></ion-label>\n      <ion-label *ngIf=\"user.job\"><ion-icon name=\"briefcase\"></ion-icon><ion-text>{{user.job}}</ion-text></ion-label>\n      <p>{{user.description}}</p>\n    </div>\n  </ng-container>\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" *ngIf=\"!isLoading && !isChoosed\">\n  <ion-toolbar>\n    <action-bar (choiseAction)=\"choice($event)\"></action-bar>\n  </ion-toolbar>\n</ion-footer>\n\n<match-dialog *ngIf=\"me && user && showMatch\" [users]=\"[me, user]\" (action)=\"matchAction($event)\"></match-dialog>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dating_pages_user-details_user-details_module_ts.js.map