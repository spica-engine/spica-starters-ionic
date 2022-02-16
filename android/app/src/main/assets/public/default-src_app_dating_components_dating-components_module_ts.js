(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_dating_components_dating-components_module_ts"],{

/***/ 30066:
/*!**********************************************************************!*\
  !*** ./src/app/dating/components/action-bar/action-bar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionBarComponent": () => (/* binding */ ActionBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_action_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./action-bar.component.html */ 70375);
/* harmony import */ var _action_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-bar.component.scss */ 52958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ActionBarComponent = class ActionBarComponent {
    constructor() {
        this.choiseAction = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    choice(value) {
        this.choiseAction.emit(value);
    }
};
ActionBarComponent.ctorParameters = () => [];
ActionBarComponent.propDecorators = {
    choiseAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ActionBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'action-bar',
        template: _raw_loader_action_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_action_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActionBarComponent);



/***/ }),

/***/ 33357:
/*!***************************************************************!*\
  !*** ./src/app/dating/components/dating-components.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatingComponentModule": () => (/* binding */ DatingComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-card/user-card.component */ 46208);
/* harmony import */ var _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-bar/action-bar.component */ 30066);
/* harmony import */ var _match_dialog_match_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match-dialog/match-dialog.component */ 71158);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message/message.component */ 83929);











let DatingComponentModule = class DatingComponentModule {
};
DatingComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_0__.UserCardComponent, _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__.ActionBarComponent, _match_dialog_match_dialog_component__WEBPACK_IMPORTED_MODULE_2__.MatchDialogComponent, _message_message_component__WEBPACK_IMPORTED_MODULE_3__.MessageComponent],
        exports: [_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_0__.UserCardComponent, _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__.ActionBarComponent, _match_dialog_match_dialog_component__WEBPACK_IMPORTED_MODULE_2__.MatchDialogComponent, _message_message_component__WEBPACK_IMPORTED_MODULE_3__.MessageComponent],
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
], DatingComponentModule);



/***/ }),

/***/ 71158:
/*!**************************************************************************!*\
  !*** ./src/app/dating/components/match-dialog/match-dialog.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchDialogComponent": () => (/* binding */ MatchDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_match_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./match-dialog.component.html */ 87728);
/* harmony import */ var _match_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match-dialog.component.scss */ 265);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let MatchDialogComponent = class MatchDialogComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
    }
    btnClicked(value) {
        this.action.emit(value);
    }
};
MatchDialogComponent.ctorParameters = () => [];
MatchDialogComponent.propDecorators = {
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
MatchDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'match-dialog',
        template: _raw_loader_match_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_match_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MatchDialogComponent);



/***/ }),

/***/ 83929:
/*!****************************************************************!*\
  !*** ./src/app/dating/components/message/message.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./message.component.html */ 74480);
/* harmony import */ var _message_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.component.scss */ 53201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/environment */ 40709);
/* harmony import */ var _services_tabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tabs.service */ 42838);






let MessageComponent = class MessageComponent {
    constructor(_tabService) {
        this._tabService = _tabService;
        this.mode = "social";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.avatar = this.avatar || _services_environment__WEBPACK_IMPORTED_MODULE_2__.environment.user_img;
        });
    }
    clickImage() {
        this._tabService.backDropImage = this.image;
    }
};
MessageComponent.ctorParameters = () => [
    { type: _services_tabs_service__WEBPACK_IMPORTED_MODULE_3__.TabsService }
];
MessageComponent.propDecorators = {
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
MessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'message',
        template: _raw_loader_message_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_message_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MessageComponent);



/***/ }),

/***/ 46208:
/*!********************************************************************!*\
  !*** ./src/app/dating/components/user-card/user-card.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCardComponent": () => (/* binding */ UserCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-card.component.html */ 79375);
/* harmony import */ var _user_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-card.component.scss */ 92284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 40709);






let UserCardComponent = class UserCardComponent {
    constructor(_commonService) {
        this._commonService = _commonService;
        this.details = true;
        this.matched = false;
        this.clickedInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.photoPlaceholder = _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
    }
    ngOnInit() {
        var _a;
        this.age = this._commonService.calculateAge((_a = this.user) === null || _a === void 0 ? void 0 : _a.birthday);
    }
    userDetails() {
        this.clickedInfo.emit();
    }
};
UserCardComponent.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
UserCardComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    details: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    matched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    clickedInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
UserCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'user-card',
        template: _raw_loader_user_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserCardComponent);



/***/ }),

/***/ 42838:
/*!*************************************************!*\
  !*** ./src/app/dating/services/tabs.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsService": () => (/* binding */ TabsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);



let TabsService = class TabsService {
    constructor() {
        this.$backDropImage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.$backDropVideo = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.$activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    listenTabClick() {
        return this.$activeTab;
    }
    watchBackdropImage() {
        return this.$backDropImage;
    }
    set backDropImage(value) {
        this.$backDropImage.next(value);
    }
};
TabsService.ctorParameters = () => [];
TabsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TabsService);



/***/ }),

/***/ 52958:
/*!************************************************************************!*\
  !*** ./src/app/dating/components/action-bar/action-bar.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .action-buttons {\n  width: 100%;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n}\n:host .action-buttons ion-icon {\n  padding: 7px;\n  border-radius: 100%;\n  font-size: 30px;\n  box-shadow: 0px 0px 4px 0px #cdcdcd;\n  margin: 0 15px;\n}\n:host .action-buttons :first-child {\n  color: green;\n}\n:host .action-buttons :last-child {\n  color: #aa0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0FBQU47QUFFSTtFQUNFLFlBQUE7QUFBTjtBQVFJO0VBQ0UsY0FBQTtBQU5OIiwiZmlsZSI6ImFjdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICNjZGNkY2Q7XG4gICAgICBtYXJnaW46IDAgMTVweDtcbiAgICB9XG4gICAgOmZpcnN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAvLyA6bnRoLWNoaWxkKDIpIHtcbiAgICAvLyAgIG1hcmdpbjogMCAyNXB4O1xuICAgIC8vICAgY29sb3I6IHJnYigyNTUsIDIwOCwgMCk7XG4gICAgLy8gfVxuXG4gICAgOmxhc3QtY2hpbGQge1xuICAgICAgY29sb3I6IHJnYigxNzAsIDAsIDApO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 265:
/*!****************************************************************************!*\
  !*** ./src/app/dating/components/match-dialog/match-dialog.component.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n}\n:host .container {\n  padding: 20px;\n  padding-top: 50px;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n:host .container ion-text {\n  font-size: 36px;\n  font-weight: bold;\n  font-family: cursive;\n}\n:host .container .users {\n  display: flex;\n  align-items: center;\n  margin: 50px 0;\n}\n:host .container .users img {\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  border: 2px solid white;\n  object-fit: cover;\n}\n:host .container .users ion-icon {\n  margin: 0 8px;\n  font-size: 26px;\n  color: #ffd000;\n}\n:host .container ion-button {\n  width: 200px;\n  height: 45px;\n  --background: none;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.5);\n  border: 1px solid white;\n}\n:host .container ion-button ion-icon {\n  margin-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRVI7QUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRVI7QUFFSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUFBTjtBQUVNO0VBQ0ksaUJBQUE7QUFBViIsImZpbGUiOiJtYXRjaC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC44KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICB9XG5cbiAgICAudXNlcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDUwcHggMDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGNvbG9yOiAjZmZkMDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjUpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cbiAgICAgIGlvbi1pY29ue1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 53201:
/*!******************************************************************!*\
  !*** ./src/app/dating/components/message/message.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  position: relative;\n  display: block;\n}\n:host ion-content {\n  position: relative;\n}\n:host .container {\n  display: flex;\n  align-items: flex-end;\n  padding: 16px 10px 0px;\n  position: relative;\n  width: 100%;\n}\n:host .container .message-text {\n  width: 100%;\n  word-break: break-all;\n}\n:host .container.recurring {\n  padding: 2px 10px 0px;\n}\n:host .container.recurring .message {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n:host .container.recurring .message:before {\n  background: transparent;\n}\n:host .container.current-user {\n  flex-direction: row-reverse;\n}\n:host .container.current-user .avatar {\n  flex-direction: row-reverse;\n}\n:host .container.current-user .message:not(.post) {\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 20px !important;\n  border-top-left-radius: 20px !important;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n}\n:host .container.current-user.recurring .message {\n  border-top-right-radius: 5px;\n}\n:host .container ::ng-deep app-mentionarea span {\n  font-size: 0.9rem;\n  line-height: 1.4rem;\n}\n:host .container ::ng-deep app-mentionarea .link {\n  color: inherit !important;\n  text-decoration: underline;\n}\n:host .container .avatar {\n  min-width: 50px;\n  display: flex;\n}\n:host .container .avatar img {\n  border-radius: 100%;\n  height: 40px;\n  width: 40px;\n  object-fit: cover;\n}\n:host .container .message {\n  padding: 10px 12px;\n  background: var(--cd-divider-color);\n  position: relative;\n  border-radius: 20px;\n  border-bottom-left-radius: 5px;\n}\n:host .container .message.post {\n  background: transparent;\n  border: 1px solid #eaeaea;\n  width: 0px;\n  flex: 1;\n}\n:host .container .message.post::before {\n  content: none;\n}\n:host .container .content {\n  position: relative;\n  z-index: 999;\n  word-break: break-word;\n  display: inline-block;\n}\n:host .container .content.image img {\n  width: 100%;\n  object-fit: contain;\n  border-radius: 5px;\n  border: 1px solid var(--cd-divider-color);\n}\n:host .container .time {\n  float: right;\n  transform: translateY(10px);\n  color: var(--cd-component-text-color);\n  font-size: 0.7rem;\n  display: none;\n  bottom: 15px;\n  right: 10px;\n}\n:host .container .scale-image .message {\n  display: none;\n}\n:host .container .scale-image .message .content.image img {\n  transform: scale(1.7);\n}\n:host ::ng-deep post-card {\n  border-bottom: unset;\n}\n:host ::ng-deep post-card .message {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFJRSxrQkFBQTtFQUNBLGNBQUE7QUFIRjtBQURFO0VBQ0Usa0JBQUE7QUFHSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRU47QUFBSTtFQUNFLHFCQUFBO0FBRU47QUFBTTtFQUNFLDJCQXJCZ0I7RUFzQmhCLDhCQXRCZ0I7QUF3QnhCO0FBRFE7RUFDRSx1QkFBQTtBQUdWO0FBQ0k7RUFDRSwyQkFBQTtBQUNOO0FBQU07RUFDRSwyQkFBQTtBQUVSO0FBQU07RUFDRSwrQkFsQ2dCO0VBbUNoQiwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtBQUVSO0FBQ1E7RUFDRSw0QkExQ2M7QUEyQ3hCO0FBS007RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSFI7QUFLTTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFIUjtBQU1JO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFKTjtBQUtNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBeEVrQjtBQW9FeEI7QUFLTTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtBQUhSO0FBSVE7RUFDRSxhQUFBO0FBRlY7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFKTjtBQU1RO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBNUZjO0VBNkZkLHlDQUFBO0FBSlY7QUFRSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFOTjtBQVNNO0VBQ0UsYUFBQTtBQVBSO0FBVVk7RUFDRSxxQkFBQTtBQVJkO0FBZ0JJO0VBQ0Usb0JBQUE7QUFkTjtBQWVNO0VBQ0UsZ0JBQUE7QUFiUiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1lc3NhZ2UtYm9yZGVyLXJhZGl1czogNXB4O1xuOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDE2cHggMTBweCAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5tZXNzYWdlLXRleHQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuICAgICYucmVjdXJyaW5nIHtcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4IDBweDtcbiAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJG1lc3NhZ2UtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJG1lc3NhZ2UtYm9yZGVyLXJhZGl1cztcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYuY3VycmVudC11c2VyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIC5hdmF0YXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG4gICAgICAubWVzc2FnZTpub3QoLnBvc3QpIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRtZXNzYWdlLWJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgfVxuICAgICAgJi5yZWN1cnJpbmcge1xuICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRtZXNzYWdlLWJvcmRlci1yYWRpdXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgYXBwLW1lbnRpb25hcmVhIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgIH1cbiAgICAgIC5saW5rIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5hdmF0YXIge1xuICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jZC1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkbWVzc2FnZS1ib3JkZXItcmFkaXVzO1xuICAgICAgJi5wb3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgJi5pbWFnZSB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAkbWVzc2FnZS1ib3JkZXItcmFkaXVzO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNkLWRpdmlkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC50aW1lIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jZC1jb21wb25lbnQtdGV4dC1jb2xvcik7XG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBib3R0b206IDE1cHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICB9XG4gICAgLnNjYWxlLWltYWdlIHtcbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICYuaW1hZ2Uge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICA6Om5nLWRlZXAge1xuICAgIHBvc3QtY2FyZCB7XG4gICAgICBib3JkZXItYm90dG9tOiB1bnNldDtcbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 92284:
/*!**********************************************************************!*\
  !*** ./src/app/dating/components/user-card/user-card.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  height: 100%;\n}\n:host ion-card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host ion-card .match {\n  position: absolute;\n  border: 3px solid #31cb26;\n  border-radius: 5px;\n  top: 15px;\n  left: 5px;\n  padding: 5px;\n  color: #31cb26;\n  font-weight: bold;\n  transform: rotate(-25deg);\n}\n:host ion-card .about {\n  position: absolute;\n  bottom: 0;\n  color: white;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0));\n  width: 100%;\n  padding: 15px;\n  height: 140px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n:host ion-card .about p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n:host ion-card .about ion-label {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n}\n:host ion-card .about ion-label :first-child {\n  font-size: 18px;\n  font-weight: 700;\n  margin-right: 10px;\n}\n:host ion-card .about ion-label ion-icon {\n  font-size: 20px;\n  align-self: flex-end;\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMkVBQUE7RUFLQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUhOO0FBS007RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBSFI7QUFNTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpSO0FBTVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpWO0FBT1E7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFMViIsImZpbGUiOiJ1c2VyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5tYXRjaCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjMzFjYjI2O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgbGVmdDogNXB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6ICMzMWNiMjY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XG4gICAgfVxuICAgIC5hYm91dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDBkZWcsXG4gICAgICAgIHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNykgMzAlLFxuICAgICAgICByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwKVxuICAgICAgKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIHAge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIH1cblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 70375:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/components/action-bar/action-bar.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"action-buttons\">\n  <ion-icon name=\"close\" (click)=\"choice('dislike')\"></ion-icon>\n  <!-- <ion-icon name=\"star\"></ion-icon> -->\n  <ion-icon name=\"checkmark\" (click)=\"choice('like')\"></ion-icon>\n</div>");

/***/ }),

/***/ 87728:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/components/match-dialog/match-dialog.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-text>It's a Match!</ion-text>\n  <div class=\"users\">\n    <img [src]=\"users[0].profile_photo\" alt=\"\">\n    <ion-icon name=\"star\"></ion-icon>\n    <img [src]=\"users[1].profile_photo\" alt=\"\">\n  </div>\n  <ion-button (click)=\"btnClicked('message')\"><ion-icon name=\"chatbubble-ellipses\"></ion-icon>Send a Message</ion-button>\n  <ion-button (click)=\"btnClicked('playing')\"><ion-icon name=\"copy\"></ion-icon>Keep Playing</ion-button>\n</div>");

/***/ }),

/***/ 74480:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/components/message/message.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"container\"\n  [class.recurring]=\"recurring\"\n  [class.current-user]=\"isCurrentUser\"\n>\n  <div class=\"avatar\" [routerLink]=\"['profile', id]\">\n    <img [src]=\"avatar\" *ngIf=\"avatar != 'none'\" />\n  </div>\n  <div class=\"message\" *ngIf=\"!post && !image\">\n    <app-mentionarea\n      *ngIf=\"mode == 'social'\"\n      [text]=\"message\"\n    ></app-mentionarea>\n    <div class=\"message-text\" *ngIf=\"mode == 'chat'\">{{ message }} </div>\n    <div class=\"time\">{{ date | date: \"hh:mm\" }}</div>\n  </div>\n  <div *ngIf=\"image\" class=\"content image\">\n    <img [src]=\"image\" (click)=\"clickImage()\" />\n  </div>\n  <div class=\"message post\" *ngIf=\"post && post._id && mode == 'social'\">\n    <post-card [post]=\"post\" [action]=\"false\"></post-card>\n  </div>\n</div>\n");

/***/ }),

/***/ 79375:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/components/user-card/user-card.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <img [src]=\"user?.profile_photo || photoPlaceholder\" />\n  <ng-container *ngIf=\"user\">\n    <div class=\"match\" *ngIf=\"matched\">MATCH</div>\n    <div class=\"about\">\n      <ion-label>\n        <ion-text>{{ user.name }}</ion-text>\n        <ion-text>{{ age }}</ion-text>\n        <ion-icon\n          (click)=\"userDetails()\"\n          *ngIf=\"details\"\n          name=\"information-circle\"\n        ></ion-icon>\n      </ion-label>\n      <p *ngIf=\"details\">{{ user.description }}</p>\n    </div>\n  </ng-container>\n</ion-card>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_dating_components_dating-components_module_ts.js.map