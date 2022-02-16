(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_dating_pages_chat-single_chat-single_module_ts"],{

/***/ 77756:
/*!************************************************************************!*\
  !*** ./src/app/dating/pages/chat-single/chat-single-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatSinglePageRoutingModule": () => (/* binding */ ChatSinglePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_single_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-single.page */ 8220);




const routes = [
    {
        path: '',
        component: _chat_single_page__WEBPACK_IMPORTED_MODULE_0__.ChatSinglePage
    }
];
let ChatSinglePageRoutingModule = class ChatSinglePageRoutingModule {
};
ChatSinglePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatSinglePageRoutingModule);



/***/ }),

/***/ 35547:
/*!****************************************************************!*\
  !*** ./src/app/dating/pages/chat-single/chat-single.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatSinglePageModule": () => (/* binding */ ChatSinglePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _chat_single_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-single-routing.module */ 77756);
/* harmony import */ var _chat_single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-single.page */ 8220);
/* harmony import */ var _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dating-components.module */ 33357);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let ChatSinglePageModule = class ChatSinglePageModule {
};
ChatSinglePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _chat_single_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatSinglePageRoutingModule,
            _components_dating_components_module__WEBPACK_IMPORTED_MODULE_2__.DatingComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_chat_single_page__WEBPACK_IMPORTED_MODULE_1__.ChatSinglePage]
    })
], ChatSinglePageModule);



/***/ }),

/***/ 8220:
/*!**************************************************************!*\
  !*** ./src/app/dating/pages/chat-single/chat-single.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatSinglePage": () => (/* binding */ ChatSinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_single_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat-single.page.html */ 51430);
/* harmony import */ var _chat_single_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-single.page.scss */ 26600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 78345);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 83954);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 8298);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat.service */ 11214);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/image.service */ 40153);











let ChatSinglePage = class ChatSinglePage {
    constructor(_authService, activatedRoute, imageService, _chatService) {
        this._authService = _authService;
        this.activatedRoute = activatedRoute;
        this.imageService = imageService;
        this._chatService = _chatService;
        this.message = '';
        this.messages = [];
        this.chatGroup = {};
        this.usersInChatGroup = {};
        this.loading = true;
        this.loading_image = false;
        this.scroll_params = {
            skip: 0,
            limit: 20,
        };
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.chatId = this.activatedRoute.snapshot.paramMap.get('chat_id');
            this.me = yield this._authService.getUser().toPromise();
            if (this.chatId != 'undefined') {
                this.chatGroup = JSON.parse(this.activatedRoute.snapshot.paramMap.get('chat'));
                if (!this.chatGroup.is_group) {
                    this.singleUserId = this.chatGroup.informations.filter((item) => item.user['_id'] != this.me._id)[0].user['_id'];
                }
                this.getMessagesAndUpdateChat();
                this.chatGroupSubscription = this._chatService.$chatGroups.subscribe((chatGroups) => {
                    let chatGroup = chatGroups.filter((ch) => ch._id == this.chatGroup._id);
                    if (chatGroup.length) {
                        this.chatGroup = chatGroup[0];
                    }
                    else {
                        this.usersInChatGroup[this.me._id].status = 'deleted';
                    }
                });
            }
            else {
                this.loading = false;
                this.opponent = JSON.parse(this.activatedRoute.snapshot.paramMap.get('user'));
                this.chatGroup['name'] = `${this.opponent.username}`;
            }
            this.infiniteScroll.disabled = true;
        });
    }
    ionViewWillLeave() {
        if (this.messagesSubscription)
            this.messagesSubscription.unsubscribe();
        if (this.chatGroupSubscription)
            this.chatGroupSubscription.unsubscribe();
    }
    getMessagesAndUpdateChat() {
        this.chatGroup.informations.forEach((item) => {
            this.usersInChatGroup[item.user['_id']] = item;
        });
        if ((this.chatGroup.is_group &&
            this.usersInChatGroup[this.me._id].status == 'active') ||
            !this.chatGroup.is_group) {
            this.$messages = _services_bucket__WEBPACK_IMPORTED_MODULE_3__.message.realtime.getAll({
                filter: { chat: this.chatId },
                limit: this.scroll_params.limit,
                skip: this.scroll_params.skip,
                sort: { _id: -1 },
            });
            this.messagesSubscription = this.$messages
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((messages) => messages.sort((a, b) => a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)())
                .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.scroll_params.skip = 0;
                this._authService
                    .setOnline('chat', {
                    chat: this.chatGroup._id,
                }, this.me._id)
                    .toPromise();
                this.loading = false;
                if (data.length >= this.scroll_params.limit) {
                    this.infiniteScroll.disabled = false;
                }
                let messages = yield this.setFirstLastMessage(data);
                this.messages = [...messages];
                setTimeout(() => {
                    this.content.scrollToBottom(300);
                }, 200);
            }));
            this.chatGroup['new_message_count'] = 0;
        }
    }
    setFirstLastMessage(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let currentMessage, previousMessage;
            let messages = [];
            for (let [index, message] of data.entries()) {
                previousMessage = Object.assign({}, (data[index - 1] || null));
                currentMessage = Object.assign({}, message);
                currentMessage['first_message'] = false;
                currentMessage['recurring'] = false;
                if (index == 0 ||
                    new Date(currentMessage.created_at).getDate() !=
                        new Date(previousMessage.created_at).getDate())
                    currentMessage['first_message'] = true;
                if (previousMessage._id && previousMessage.owner == currentMessage.owner)
                    currentMessage['recurring'] = true;
                messages.push(currentMessage);
            }
            return messages;
        });
    }
    sendImage(data) {
        this.loading_image = true;
        let file_buf = this.imageService.toBuffer(data, 'jpeg');
        let bufWithMeta = {
            contentType: 'image/jpeg',
            data: file_buf,
            name: 'image',
        };
        this.imageService.insert(bufWithMeta, undefined).then((res) => {
            this.image_message = res.url;
            this.loading_image = false;
        });
    }
    cancelImage() {
        (this.image_message = undefined), (this.loading_image = false);
    }
    sendMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if ((/\S/.test(this.message) && this.message != '') || this.image_message) {
                if (this.chatId == 'undefined') {
                    yield this.createChat();
                    this.getMessagesAndUpdateChat();
                }
                this.$messages.insert({
                    message: this.message,
                    owner: this.me._id,
                    chat: this.chatId,
                    image: this.image_message,
                });
                this.chatGroup = this._chatService.chatGroups.some((item) => item._id == this.chatGroup._id)
                    ? this._chatService.chatGroups.filter((item) => item._id == this.chatGroup._id)[0]
                    : this.chatGroup;
                this._authService
                    .setOnline('chat', {
                    chat: this.chatGroup._id,
                    last_message: this.message || (this.image_message ? 'send photo to you' : ''),
                }, this.me._id)
                    .toPromise();
                this.message = '';
                this.image_message = undefined;
            }
        });
    }
    createChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let users = [this.me, this.opponent];
            const data = yield this._chatService
                .createChat({
                name: `${this.opponent.name} ${this.opponent.surname}`,
                informations: users.map((user) => {
                    return { user: user._id };
                }),
                managers: [this.me._id],
            })
                .catch((err) => console.log(err));
            this.chatGroup = data;
            this.chatGroup.informations = this.chatGroup.informations.map((item) => {
                item.user = users.find((i) => i._id == item.user);
                return item;
            });
            this.chatId = data['_id'];
        });
    }
    loadData() {
        this.scroll_params.skip =
            this.scroll_params.limit + this.scroll_params.skip;
        this.getMessages().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.messages = this.messages.concat(data);
            this.messages = this.messages.sort((a, b) => a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0);
            let messages = yield this.setFirstLastMessage(this.messages);
            this.messages = [...messages];
            if (data.length < this.scroll_params.limit)
                this.infiniteScroll.disabled = true;
            this.infiniteScroll.complete();
        }));
    }
    getMessages() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.message.getAll({
            queryParams: {
                filter: { chat: this.chatId },
                limit: this.scroll_params.limit,
                skip: this.scroll_params.skip,
                sort: { _id: -1 },
            },
        });
    }
};
ChatSinglePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService }
];
ChatSinglePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, static: false },] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInfiniteScroll, { static: false },] }]
};
ChatSinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-chat-single',
        template: _raw_loader_chat_single_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_single_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatSinglePage);



/***/ }),

/***/ 40153:
/*!**************************************************!*\
  !*** ./src/app/dating/services/image.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _spica_devkit_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spica-devkit/storage */ 66840);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 40709);




let ImageService = class ImageService {
    constructor() { }
    init() {
        let initializeConfig;
        if (localStorage.getItem('socialmedia_spica_token')) {
            initializeConfig = {
                publicUrl: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl,
                identity: localStorage.getItem('socialmedia_spica_token'),
            };
        }
        else {
            initializeConfig = {
                publicUrl: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl,
                apikey: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.apikey,
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

/***/ 26600:
/*!****************************************************************!*\
  !*** ./src/app/dating/pages/chat-single/chat-single.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .messages-content {\n  padding: 15px 0px;\n  display: flex;\n  flex-direction: column;\n}\n:host .date-divider {\n  position: relative;\n  margin: auto;\n  color: var(--cd-component-text-color);\n  font-size: 0.8rem;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n}\n:host ion-backdrop {\n  opacity: 1;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 10;\n  position: fixed;\n}\n:host spica-upload-image {\n  margin-right: 10px;\n  align-self: center;\n}\n:host ion-toolbar .send_image {\n  width: calc(100% - 20px);\n  object-fit: cover;\n  margin: 10px;\n  max-height: 400px;\n}\n:host ion-footer ion-icon {\n  align-self: center;\n}\n:host ion-footer ion-icon.clear-text {\n  font-size: 18px;\n  background: transparent;\n  color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n:host ion-infinite-scroll-content {\n  min-height: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtc2luZ2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQU47QUFFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQU47QUFFSTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFOO0FBRUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFHTTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUtNO0VBQ0Usa0JBQUE7QUFIUjtBQUlRO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyYkFBQTtBQUZWO0FBTUk7RUFDRSxlQUFBO0FBSk4iLCJmaWxlIjoiY2hhdC1zaW5nbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5tZXNzYWdlcy1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5kYXRlLWRpdmlkZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgY29sb3I6IHZhcigtLWNkLWNvbXBvbmVudC10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBpb24tYmFja2Ryb3Age1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB9XG4gICAgc3BpY2EtdXBsb2FkLWltYWdlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgLnNlbmRfaW1hZ2Uge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tZm9vdGVyIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAmLmNsZWFyLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDUxMiUyMDUxMic+PHBhdGglMjBmaWxsPSd2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsJTIwJTIzNjY2NjY2KSclMjBkPSdNNDAzLjEsMTA4LjljLTgxLjItODEuMi0yMTIuOS04MS4yLTI5NC4yLDBzLTgxLjIsMjEyLjksMCwyOTQuMmM4MS4yLDgxLjIsMjEyLjksODEuMiwyOTQuMiwwUzQ4NC4zLDE5MC4xLDQwMy4xLDEwOC45eiUyME0zNTIsMzQwLjJMMzQwLjIsMzUybC04NC40LTg0LjJsLTg0LDgzLjhMMTYwLDMzOS44bDg0LTgzLjhsLTg0LTgzLjhsMTEuOC0xMS44bDg0LDgzLjhsODQuNC04NC4ybDExLjgsMTEuOEwyNjcuNiwyNTZMMzUyLDM0MC4yeicvPjwvc3ZnPlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgbWluLWhlaWdodDogNXB4O1xuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 51430:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dating/pages/chat-single/chat-single.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dating/tabs/chats\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      *ngIf=\"chatGroup\"\n      [routerLink]=\"chatGroup.is_group ? ['chat_detail'] : ['profile',singleUserId]\"\n      >{{chatGroup.name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-infinite-scroll\n    position=\"top\"\n    threshold=\"0px\"\n    (ionInfinite)=\"loadData()\"\n  >\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ng-container\n    *ngIf=\"(usersInChatGroup && me) && ((chatGroup.is_group && usersInChatGroup[me._id]?.status == 'active') || !chatGroup.is_group)\"\n  >\n    <ng-container *ngFor=\"let message of messages;let index = index\">\n      <div class=\"date-divider\" *ngIf=\"message['first_message']\">\n        {{message.created_at | date: \"dd/MM/YYYY\"}}\n      </div>\n      <message\n        [date]=\"message.created_at\"\n        [recurring]=\"message['recurring']\"\n        [avatar]=\"!messages[(index + 1)] || messages[(index + 1)].owner != message.owner ? usersInChatGroup[message.owner].user.profile_photo : 'none'\"\n        [message]=\"message.message\"\n        [isCurrentUser]=\"message.owner == me._id\"\n        [image]=\"message.image\"\n        [id]=\"usersInChatGroup[message.owner].user._id\"\n        mode=\"chat\"\n      ></message>\n    </ng-container>\n  </ng-container>\n  <ng-container\n    *ngIf=\"(usersInChatGroup && me) && usersInChatGroup[me._id]?.status != 'active' && chatGroup.is_group\"\n  >\n    <div class=\"empty-placeholder\">\n      You can't see any message because you are not in this chat group anymore\n    </div>\n  </ng-container>\n\n  <ion-spinner\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n    *ngIf=\"loading\"\n  ></ion-spinner>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar\n    *ngIf=\"(usersInChatGroup && me) && ((usersInChatGroup[me._id]?.status == 'active' && chatGroup.is_group) || !chatGroup.is_group)\"\n  >\n    <ion-item *ngIf=\"image_message\">\n      <img class=\"send_image\" [src]=\"image_message\" />\n    </ion-item>\n    <ion-item lines=\"none\">\n      <spica-upload-image slot=\"start\"\n        *ngIf=\"!loading_image &&!message && !image_message\"\n        (change)=\"sendImage($event)\"\n      ></spica-upload-image>\n      <ion-textarea\n        *ngIf=\"!image_message\"\n        [(ngModel)]=\"message\"\n        placeholder=\"Send Message\"\n        enterkeyhint=\"send\"\n        autoGrow=\"true\"\n        rows=\"1\"\n      ></ion-textarea>\n      <ion-icon\n        class=\"clear-text\"\n        *ngIf=\"message\"\n        (click)=\"message=''\"\n        name=\"close-circle-outline\"\n      ></ion-icon>\n      <ion-spinner\n        *ngIf=\"loading_image\"\n        name=\"crescent\"\n        slot=\"end\"\n      ></ion-spinner>\n      <ion-icon\n        *ngIf=\"!loading_image && !message && image_message\"\n        name=\"close\"\n        slot=\"end\"\n        (click)=\"cancelImage()\"\n      >\n      </ion-icon>\n      <ion-icon\n        *ngIf=\"!loading_image\"\n        name=\"send-outline\"\n        slot=\"end\"\n        (click)=\"sendMessage()\"\n      ></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_dating_pages_chat-single_chat-single_module_ts.js.map