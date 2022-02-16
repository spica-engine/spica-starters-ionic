(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_chat_pages_friends_friends_module_ts"],{

/***/ 7701:
/*!**************************************************************!*\
  !*** ./src/app/chat/pages/friends/friends-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsPageRoutingModule": () => (/* binding */ FriendsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends.page */ 14752);




const routes = [
    {
        path: '',
        children: [
            { path: '', component: _friends_page__WEBPACK_IMPORTED_MODULE_0__.FriendsPage },
            {
                path: 'profile',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 5215)).then((m) => m.ProfilePageModule),
            },
        ],
    },
];
let FriendsPageRoutingModule = class FriendsPageRoutingModule {
};
FriendsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FriendsPageRoutingModule);



/***/ }),

/***/ 65878:
/*!******************************************************!*\
  !*** ./src/app/chat/pages/friends/friends.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsPageModule": () => (/* binding */ FriendsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _friends_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friends-routing.module */ 7701);
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.page */ 14752);







let FriendsPageModule = class FriendsPageModule {
};
FriendsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _friends_routing_module__WEBPACK_IMPORTED_MODULE_0__.FriendsPageRoutingModule
        ],
        declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_1__.FriendsPage]
    })
], FriendsPageModule);



/***/ }),

/***/ 14752:
/*!****************************************************!*\
  !*** ./src/app/chat/pages/friends/friends.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsPage": () => (/* binding */ FriendsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_friends_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./friends.page.html */ 71764);
/* harmony import */ var _friends_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.page.scss */ 8084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 71537);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 78548);







let FriendsPage = class FriendsPage {
    constructor(_userService, _commonService) {
        this._userService = _userService;
        this._commonService = _commonService;
        this.default_image = _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
        this.searchedText = '';
        this.personAvailable = false;
        this.loading = false;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let me = yield this._userService.getActiveUser();
            this.friends = me.friends;
        });
    }
    getUserBySearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            if (this.searchedText == '') {
                this.loading = false;
                this.personAvailable = false;
                return;
            }
            let users = yield this._userService.getUserByUsername(this.searchedText);
            this.searchedUser = users[0];
            if (!this.searchedUser) {
                this._commonService.presentToast(`No person named ${this.searchedText} was found`, 1000);
                this.loading = false;
                return;
            }
            if (this.friends.some((item) => item._id == this.searchedUser._id))
                this._commonService.presentToast(`${this.searchedText} is already your friend`, 1000);
            else
                this.personAvailable = true;
            this.loading = false;
        });
    }
    addPerson() {
        if (this.searchedUser) {
            this._userService.me.friends.push(this.searchedUser);
            this._userService.updateProfile(this._userService.me);
            this._commonService.presentToast(`${this.searchedText} succesfully added`, 2000);
            this.searchedText = '';
            this.searchedUser = undefined;
            this.personAvailable = false;
        }
    }
};
FriendsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
FriendsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-friends',
        template: _raw_loader_friends_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_friends_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FriendsPage);



/***/ }),

/***/ 8084:
/*!******************************************************!*\
  !*** ./src/app/chat/pages/friends/friends.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .my-friends ion-list-header {\n  padding-left: 10px;\n}\n:host .my-friends ion-item {\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7QUFETjtBQUdJO0VBQ0UsaUJBQUE7QUFETiIsImZpbGUiOiJmcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLm15LWZyaWVuZHMge1xuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 71764:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/pages/friends/friends.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Friends</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"my-friends\">\n    <ion-list>\n      <ion-item>\n        <ion-searchbar\n          mode=\"ios\"\n          animated\n          debounce=\"1000\"\n          placeholder=\"Add User By Username\"\n          [(ngModel)]=\"searchedText\"\n          (ngModelChange)=\"getUserBySearch()\"\n        ></ion-searchbar>\n        <ion-icon *ngIf=\"personAvailable && !this.loading\" (click)=\"addPerson()\" name=\"person-add-outline\"></ion-icon>\n        <ion-spinner *ngIf=\"this.loading\" name=\"crescent\"></ion-spinner>\n      </ion-item>\n      <ion-item\n        *ngFor=\"let friend of friends\"\n        [routerLink]=\"['profile',friend['_id']]\"\n      >\n        <ion-avatar slot=\"start\">\n          <img [src]=\"friend['thumbnail'] ||default_image \" />\n        </ion-avatar>\n        <ion-label> {{friend['username']}} </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_pages_friends_friends_module_ts.js.map