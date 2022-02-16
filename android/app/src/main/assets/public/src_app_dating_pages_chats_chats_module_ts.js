(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_dating_pages_chats_chats_module_ts"],{

/***/ 88243:
/*!************************************************************!*\
  !*** ./src/app/dating/pages/chats/chats-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageRoutingModule": () => (/* binding */ ChatsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats.page */ 59700);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _chats_page__WEBPACK_IMPORTED_MODULE_0__.ChatsPage,
            },
            {
                path: ':chat_id',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_dating_components_dating-components_module_ts"), __webpack_require__.e("default-src_app_dating_pages_chat-single_chat-single_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../chat-single/chat-single.module */ 35547)).then((m) => m.ChatSinglePageModule),
                    }
                ],
            },
        ],
    },
];
let ChatsPageRoutingModule = class ChatsPageRoutingModule {
};
ChatsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatsPageRoutingModule);



/***/ }),

/***/ 30593:
/*!****************************************************!*\
  !*** ./src/app/dating/pages/chats/chats.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageModule": () => (/* binding */ ChatsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-routing.module */ 88243);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.page */ 59700);







let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsPageRoutingModule
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_1__.ChatsPage]
    })
], ChatsPageModule);



/***/ }),

/***/ 59700:
/*!**************************************************!*\
  !*** ./src/app/dating/pages/chats/chats.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPage": () => (/* binding */ ChatsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chats.page.html */ 57258);
/* harmony import */ var _chats_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.page.scss */ 39312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 83954);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 8298);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat.service */ 11214);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/environment */ 40709);









let ChatsPage = class ChatsPage {
    constructor(_authService, _chatService, _router) {
        this._authService = _authService;
        this._chatService = _chatService;
        this._router = _router;
        this.chats = [];
        this.searchedChats = [];
        this.singleChats = [];
        this.selectedChats = [];
        this.user_img_empty = _services_environment__WEBPACK_IMPORTED_MODULE_5__.environment.user_img;
        this.open_to_select = false;
        this.loading = true;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.getChats();
        });
    }
    ionViewWillLeave() {
        this.$chats.unsubscribe();
    }
    getChats() {
        this.$chats = this._chatService.getChats().subscribe((data) => {
            this.chats = data;
            this.chats.forEach((item) => {
                if (!item.is_group) {
                    let informations_user_date = item.informations.filter((active) => active.user['_id'] != this.user._id)[0].date;
                    item['seen'] =
                        item['new_message_count'] == 0 &&
                            item.last_message_owner == this.user._id &&
                            new Date(item.last_message_time).getTime() <
                                new Date(informations_user_date).getTime();
                }
                if (!this.searchedText)
                    this.searchedChats = [...this.chats];
                else
                    this.getChatBySearch();
            });
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        });
    }
    navigateToChat(user) {
        this._router.navigate([
            `dating/tabs/chats/${undefined}`,
            { user: JSON.stringify(user) },
        ]);
    }
    deleteChats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            let selectedChats = this.chats.filter((cg) => this.selectedChats.some((sc) => cg._id == sc));
            for (let chat_item of selectedChats) {
                chat_item.informations.filter((la) => la.user['_id'] == this.user._id)[0].status = 'deleted';
                chat_item.informations = chat_item.informations.map((item) => {
                    item.user = item.user['_id'];
                    return item;
                });
                if (chat_item.is_group &&
                    !chat_item.informations.filter((item) => item.status == 'active' &&
                        chat_item.managers.includes(item.user))[0]) {
                    chat_item.managers = [
                        chat_item.informations.filter((item) => item.status == 'active')[0]
                            .user,
                    ];
                }
                _services_bucket__WEBPACK_IMPORTED_MODULE_3__.chat.update(chat_item).then();
                this.chats = this.chats.filter((chatGroup) => chatGroup._id != chat_item._id);
                this.selectedChats = [];
            }
            this.open_to_select = false;
            this.searchedChats = this.chats;
        });
    }
    selectToRemove(chatID) {
        let isExists = this.selectedChats.filter((chat) => chat == chatID);
        if (isExists.length) {
            this.selectedChats = this.selectedChats.filter((chat) => chat != chatID);
        }
        else {
            this.selectedChats.push(chatID);
        }
    }
    clickedToChat(chat) {
        if (this.selectedChats.length || this.open_to_select) {
            this.selectToRemove(chat._id);
        }
        else {
            this.searchedText = '';
            this._router.navigate([
                `/dating/tabs/chats/${chat._id}`,
                { chat: JSON.stringify(chat) },
            ]);
        }
    }
    getChatBySearch() {
        this.searchedChats = this.chats.filter((item) => item.name.toLowerCase().includes(this.searchedText.toLocaleLowerCase()));
    }
    openSelection() {
        this.open_to_select = !this.open_to_select;
        if (!this.open_to_select)
            this.selectedChats = [];
    }
};
ChatsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ChatsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatsPage);



/***/ }),

/***/ 39312:
/*!****************************************************!*\
  !*** ./src/app/dating/pages/chats/chats.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .empty_chat {\n  width: 100%;\n  text-align: center;\n  font-size: smaller;\n}\n:host .chats-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n:host .chats-content ion-list {\n  overflow: auto;\n  flex: 1;\n  padding: 0 10px;\n}\n:host .chats-content ion-list ion-item {\n  touch-action: pan-y !important;\n}\n:host .chat-group ion-avatar {\n  width: 48px;\n  height: 48px;\n  margin-right: 10px;\n}\n:host .chat-group .chat-header {\n  display: flex;\n  width: 100%;\n}\n:host .chat-group .chat-header h3 {\n  font-weight: 600;\n}\n:host .chat-group .chat-header span {\n  font-size: 11px;\n  padding-left: 10px;\n  padding-top: 2px;\n  font-weight: 300;\n  color: var(--ion-color-medium-shade);\n}\n:host .chat-group p {\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n:host .chat-group .empty-chat {\n  font-weight: 400;\n  font-style: italic;\n}\n:host .selected {\n  background: var(--ion-color-light-shade);\n}\n:host ion-label .message p {\n  color: var(--ion-color-medium-shade);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBTjtBQUNNO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBQ1I7QUFBUTtFQUNFLDhCQUFBO0FBRVY7QUFHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFEUjtBQUVRO0VBQ0UsZ0JBQUE7QUFBVjtBQUVRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBQVY7QUFHTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDRSx3Q0FBQTtBQUZOO0FBTVE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFKViIsImZpbGUiOiJjaGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmVtcHR5X2NoYXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgfVxuICAgIC5jaGF0cy1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgaW9uLWxpc3Qge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jaGF0LWdyb3VwIHtcbiAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICAuY2hhdC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmVtcHR5LWNoYXQge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ 57258:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/pages/chats/chats.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chats</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"selectedChats.length\" (click)=\"deleteChats()\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"chats-content\">\n    <ion-item\n      *ngIf=\"searchedChats.length || searchedText\"\n      lines=\"none\"\n      class=\"ion-no-padding\"\n      mode=\"ios\"\n    >\n      <ion-searchbar\n        mode=\"ios\"\n        animated\n        debounce=\"500\"\n        placeholder=\"Search\"\n        [(ngModel)]=\"searchedText\"\n        (ngModelChange)=\"getChatBySearch()\"\n      ></ion-searchbar>\n      <ion-label (click)=\"openSelection()\" slot=\"end\">\n        {{open_to_select ? \"cancel\" : \"select\"}}\n      </ion-label>\n    </ion-item>\n    <ion-list *ngIf=\"!loading\">\n      <ion-item *ngIf=\"!searchedChats.length && !searchedText\">\n        <div class=\"empty_chat\">There is no chat yet</div>\n      </ion-item>\n      <ion-item\n        class=\"chat-group\"\n        [class.selected]=\"selectedChats.includes(chat._id)\"\n        *ngFor=\"let chat of searchedChats\"\n        (click)=\"clickedToChat(chat)\"\n        detail=\"true\"\n      >\n        <ion-checkbox\n          *ngIf=\"open_to_select\"\n          slot=\"start\"\n          value=\"buford\"\n        ></ion-checkbox>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"chat.image ? chat.image : user_img_empty\" />\n        </ion-avatar>\n        <ion-label>\n          <div class=\"chat-header\">\n            <h3>{{chat.name}}</h3>\n            <span *ngIf=\"chat.last_message && !chat['seen']\"\n              >{{chat.last_message_time|date:\"shortDate\"}}\n            </span>\n          </div>\n          <p class=\"empty-chat\" *ngIf=\"chat.last_message&&chat['seen']\">Seen</p>\n          <div class=\"message\" *ngIf=\"chat.last_message&&!chat['seen']\">\n            <p>{{ chat.last_message}}</p>\n          </div>\n          <p class=\"empty-chat\" *ngIf=\"!chat.last_message\">\n            No message in this chat\n          </p>\n        </ion-label>\n        <ion-badge *ngIf=\"chat['new_message_count']\" slot=\"end\" color=\"success\"\n          >{{chat['new_message_count']}}\n        </ion-badge>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dating_pages_chats_chats_module_ts.js.map