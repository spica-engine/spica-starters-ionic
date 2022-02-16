(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_dating_pages_home_home_module_ts"],{

/***/ 35066:
/*!**********************************************************!*\
  !*** ./src/app/dating/pages/home/home-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 94435);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
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

/***/ 95969:
/*!**************************************************!*\
  !*** ./src/app/dating/pages/home/home.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 35066);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 94435);
/* harmony import */ var _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dating-components.module */ 33357);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__.DatingComponentModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 94435:
/*!************************************************!*\
  !*** ./src/app/dating/pages/home/home.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 4840);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 1385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 83954);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 8298);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat.service */ 11214);
/* harmony import */ var _services_choise_action_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/choise-action.service */ 61358);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 97437);










let HomePage = class HomePage {
    constructor(_userService, _authService, _choiceService, _router, _chatService) {
        this._userService = _userService;
        this._authService = _authService;
        this._choiceService = _choiceService;
        this._router = _router;
        this._chatService = _chatService;
        this.isDisabled = false;
        this.playgroundDisable = false;
        this.active_user = [];
        this.showMatch = false;
        this.likesYou = [];
        this.isLoading = true;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._authService.getUser().toPromise();
            if (!this.me) {
                this._router.navigate(['/dating/authorization', { replaceUrl: true }]);
                return;
            }
            yield this.nextUser();
            yield this.getLikesYou();
            this.isLoading = false;
        });
    }
    nextUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.active_user.shift();
            if (this.active_user.length <= 1) {
                this.active_user = this.active_user.concat(yield this._userService.getUsers());
            }
        });
    }
    choice(value) {
        if (this.isDisabled || this.playgroundDisable)
            return;
        this.action = value;
        this.isDisabled = true;
        setTimeout(() => {
            this.action = undefined;
            this.isDisabled = false;
            this.nextUser();
        }, 1500);
        if (value == 'like') {
            if (this.likesYou.includes(this.active_user[0]._id)) {
                this.matchedUser = JSON.parse(JSON.stringify(this.active_user[0]));
                this.showMatch = true;
            }
        }
        this._choiceService.insertChoice(value, this.active_user[0]._id, this.me._id);
    }
    getLikesYou() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.likes.getAll({
                queryParams: { filter: { user: this.me._id } },
            })
                .then((res) => {
                res.forEach((el) => {
                    this.likesYou.push(el.liked_user);
                });
            });
        });
    }
    userDetails(userId) {
        this._router.navigate(['/dating/user-details/' + userId]);
    }
    matchAction(value) {
        if (value == 'message') {
            this.sendSms();
        }
        this.showMatch = false;
    }
    sendSms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let chatUsers = [this.me, this.matchedUser];
            let name = `${chatUsers[0].username}, ${chatUsers[1].username}...`;
            let chatExists = yield this._chatService.isChatExists(chatUsers);
            if (!chatExists.result) {
                if (chatUsers.length == 2) {
                    this.navigateToChat();
                }
                else
                    this._chatService.createChat({
                        managers: [this.matchedUser._id],
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
            { user: JSON.stringify(this.matchedUser) },
        ]);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_choise_action_service__WEBPACK_IMPORTED_MODULE_5__.ChoiseActionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 97437:
/*!*************************************************!*\
  !*** ./src/app/dating/services/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 83954);
/* harmony import */ var _bucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bucket */ 8298);




let UserService = class UserService {
    constructor(_authService) {
        this._authService = _authService;
        this.users = [];
        this.notListedUsers = [];
        this._authService.initBucket();
        this._authService
            .getUser()
            .toPromise()
            .then((res) => (this.me = res));
    }
    getUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getNotListedUsers();
            this.notListedUsers.push(this.me._id);
            this.users = yield _bucket__WEBPACK_IMPORTED_MODULE_1__.user.getAll({
                queryParams: { filter: { _id: { $nin: this.notListedUsers } } },
            });
            return this.users;
        });
    }
    getNotListedUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield _bucket__WEBPACK_IMPORTED_MODULE_1__.likes.getAll({ queryParams: { filter: { liked_user: this.me._id } } }).then(res => {
                res.forEach(el => {
                    this.notListedUsers.push(el.user);
                });
            });
            yield _bucket__WEBPACK_IMPORTED_MODULE_1__.unlikes.getAll({ queryParams: { filter: { unliked_user: this.me._id } } }).then(res => {
                res.forEach(el => {
                    this.notListedUsers.push(el.user);
                });
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ 1385:
/*!**************************************************!*\
  !*** ./src/app/dating/pages/home/home.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .logo {\n  align-items: center;\n  display: flex;\n  color: var(--cd-logo-color);\n  font-weight: bold;\n}\n:host .logo ion-icon {\n  padding-right: 10px;\n}\n:host ion-content ion-item {\n  width: 100%;\n}\n:host ion-content ion-item .empty {\n  width: 100%;\n  text-align: center;\n  font-size: smaller;\n}\n:host ion-content .users {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n:host ion-content .users .user-container {\n  top: 0;\n  left: 0;\n  position: absolute;\n  padding: 15px;\n  width: 100%;\n  height: calc(100% - 30px);\n}\n:host ion-content .users .user-container.second {\n  transform: rotate(5deg);\n  opacity: 1;\n}\n:host ion-content .users .user-container.third {\n  transform: rotate(-5deg);\n  opacity: 1;\n}\n:host ion-content .users .user-container.shadow {\n  transform: rotate(-5deg);\n  opacity: 1;\n}\n:host ion-content .users.card-animation .main-card-aninamation {\n  transition-delay: 1s;\n  opacity: 0;\n}\n:host ion-content .users.card-animation .first {\n  transition-duration: 1.5s;\n}\n:host ion-content .users.card-animation .first.like {\n  transition: all 1.5s cubic-bezier(0.43, 0.92, 0.58, 0.99);\n  transform: translateX(120%) translateY(130px) rotate(65deg);\n  opacity: 0;\n}\n:host ion-content .users.card-animation .first.dislike {\n  transition: all 1.5s cubic-bezier(0.43, 0.92, 0.58, 0.99);\n  opacity: 0;\n  transform: translateX(-120%) translateY(130px) rotate(-65deg);\n}\n:host ion-content .users.card-animation .second {\n  transition: transform 1.5s linear;\n  transform: rotate(0deg);\n}\n:host ion-content .users.card-animation .shadow {\n  transition: all 1.5s linear;\n  transform: rotate(5deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDRSxtQkFBQTtBQUROO0FBS0k7RUFDRSxXQUFBO0FBSE47QUFJTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFITjtBQUtNO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFIUjtBQUtRO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0FBSFY7QUFLUTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtBQUhWO0FBS1E7RUFDRSx3QkFBQTtFQUNBLFVBQUE7QUFIVjtBQVFRO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0FBTlY7QUFRUTtFQUNFLHlCQXRETztBQWdEakI7QUFPVTtFQUNFLHlEQUFBO0VBQ0EsMkRBQUE7RUFDQSxVQUFBO0FBTFo7QUFPVTtFQUNFLHlEQUFBO0VBQ0EsVUFBQTtFQUNBLDZEQUFBO0FBTFo7QUFRUTtFQUNFLGlDQUFBO0VBQ0EsdUJBQUE7QUFOVjtBQVFRO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtBQU5WIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvblNwZWVkOiAxLjVzO1xuXG46aG9zdCB7XG4gIC5sb2dvIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWNkLWxvZ28tY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICBpb24taXRlbSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5lbXB0eSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnVzZXJzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgXG4gICAgICAudXNlci1jb250YWluZXIge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG5cbiAgICAgICAgJi5zZWNvbmQge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgJi50aGlyZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgJi5zaGFkb3cge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuY2FyZC1hbmltYXRpb24ge1xuICAgICAgICAubWFpbi1jYXJkLWFuaW5hbWF0aW9uIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5maXJzdCB7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJGFuaW1hdGlvblNwZWVkO1xuICAgICAgICAgICYubGlrZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJGFuaW1hdGlvblNwZWVkIGN1YmljLWJlemllcigwLjQzLCAwLjkyLCAwLjU4LCAwLjk5KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjAlKSB0cmFuc2xhdGVZKDEzMHB4KSByb3RhdGUoNjVkZWcpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5kaXNsaWtlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uU3BlZWQgY3ViaWMtYmV6aWVyKDAuNDMsIDAuOTIsIDAuNTgsIDAuOTkpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSkgdHJhbnNsYXRlWSgxMzBweCkgcm90YXRlKC02NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZWNvbmQge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkYW5pbWF0aW9uU3BlZWQgbGluZWFyO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIC5zaGFkb3cge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uU3BlZWQgbGluZWFyO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 4840:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/pages/home/home.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <div class=\"logo\">\n      <ion-icon name=\"logo-ionic\"></ion-icon>\n      Dating\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"active_user.length\">\n    <div class=\"users\" [class.card-animation]=\"isDisabled\">\n      <div class=\"user-container shadow\">\n        <user-card ></user-card>\n      </div>\n      <div class=\"user-container third\" *ngIf=\"active_user[2]\">\n        <user-card [user]=\"active_user[2]\"></user-card>\n      </div>\n      <div class=\"user-container second\" *ngIf=\"active_user[1]\">\n        <user-card [user]=\"active_user[1]\"></user-card>\n      </div>\n      <!-- <div\n        class=\"user-container main-card\"\n        [class.main-card-aninamation]=\"action\"\n      >\n        <user-card [user]=\"active_user[0]\"></user-card>\n      </div> -->\n      <div\n        class=\"user-container first {{action}}\"\n        (swipeleft)=\"choice('dislike')\"\n        (swiperight)=\"choice('like')\"\n      >\n        <user-card\n          (clickedInfo)=\"userDetails(active_user[0]._id)\"\n          [user]=\"active_user[0]\"\n        ></user-card>\n      </div>\n    </div>\n  </ng-container>\n  <ion-item *ngIf=\"!isLoading && !active_user.length\">\n    <div class=\"empty\">There is no user yet</div>\n  </ion-item>\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n<ion-footer class=\"ion-no-border\" *ngIf=\"active_user.length\">\n  <ion-toolbar>\n    <action-bar (choiseAction)=\"choice($event)\"></action-bar>\n  </ion-toolbar>\n</ion-footer>\n<match-dialog\n  *ngIf=\"me && matchedUser && showMatch\"\n  [users]=\"[me, matchedUser]\"\n  (action)=\"matchAction($event)\"\n></match-dialog>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dating_pages_home_home_module_ts.js.map