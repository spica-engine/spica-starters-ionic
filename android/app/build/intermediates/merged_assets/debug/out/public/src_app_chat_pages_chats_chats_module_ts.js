(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_chat_pages_chats_chats_module_ts"],{

/***/ 4000:
/*!************************************************************!*\
  !*** ./src/app/chat/pages/chat-detail/chat-detail.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatDetailPage": () => (/* binding */ ChatDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat-detail.page.html */ 49423);
/* harmony import */ var _chat_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-detail.page.scss */ 25231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_components_spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/spica-user-selection/spica-user-selection.component */ 47772);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/social-media/services/image.service */ 70251);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bucket */ 84865);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/environment */ 71537);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ 78548);








// import { FollowingUsersComponent } from 'src/app/social-media/components/chat/following-users/following-users.component';

// import { FollowingUsersComponent } from "src/app/components/chat/following-users/following-users.component";
// import { ConfirmationModalComponent } from "src/app/components/generics/confirmation-modal/confirmation-modal.component";



let ChatDetailPage = class ChatDetailPage {
    constructor(_userService, _route, _router, _imageService, _modalController, _actionSheetCtrl, _commonService) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this._imageService = _imageService;
        this._modalController = _modalController;
        this._actionSheetCtrl = _actionSheetCtrl;
        this._commonService = _commonService;
        this.loading = {
            name: false,
            image: false,
        };
        this.users = [];
        this.user_img_empty = _services_environment__WEBPACK_IMPORTED_MODULE_6__.environment.user_img;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser();
            if (!this.chatGroup) {
                this.chatGroup = JSON.parse(this._route.snapshot.paramMap.get('chat'));
                this.chatGroup.informations.forEach((item) => {
                    if (item.user['_id'] != this.me._id && item.status == 'active')
                        this.users.push(item.user);
                });
                this.users.unshift(this.me);
            }
        });
    }
    deleteGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let managers = [];
            if (this.chatGroup.managers.length > 1) {
                managers = this.chatGroup.managers.filter((user) => user != this.me._id);
            }
            else {
                let activeUsers = this.chatGroup.informations.find((la) => la.status == 'active');
                if (activeUsers) {
                    managers = [activeUsers.user['_id']];
                }
            }
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_5__.chat.patch({ managers: managers, _id: this.chatGroup._id });
            yield this.removeUser(this.me);
            this._router.navigateByUrl('chat/tabs/chats');
        });
    }
    updateGroup() {
        this.loading.name = true;
        let lastActive = [...this.chatGroup.informations];
        lastActive = lastActive.map((item) => {
            item.user = item.user['_id'] || item.user;
            return item;
        });
        _services_bucket__WEBPACK_IMPORTED_MODULE_5__.chat.patch({
            image: this.chatGroup.image,
            name: this.chatGroup.name,
            managers: this.chatGroup.managers,
            informations: lastActive,
            _id: this.chatGroup._id,
        })
            .then(() => {
            this.loading.name = false;
            this._router.navigate(['chat/tabs/chats']);
        });
    }
    changeImage(data) {
        this.loading.image = true;
        let file_buf = this._imageService.toBuffer(data, 'jpeg');
        let bufWithMeta = {
            contentType: 'image/jpeg',
            data: file_buf,
            name: 'image',
        };
        let imageId;
        let defaultImageId = _services_environment__WEBPACK_IMPORTED_MODULE_6__.environment.user_img.split('/');
        defaultImageId = defaultImageId[defaultImageId.length - 1].split('?')[0];
        if (this.chatGroup['image']) {
            let splitArr = this.chatGroup['image'].split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
            if (defaultImageId == imageId) {
                imageId = null;
            }
        }
        this._imageService
            .insert(bufWithMeta, imageId)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.chatGroup['image'] =
                res.url + `&timestamp=${new Date().getTime()}`;
            this.loading.image = false;
            this._commonService.presentToast('Picture changed. Click the save', 3000);
        }))
            .catch((e) => {
            console.log('error : ', e);
            this.loading.image = false;
        });
    }
    addManager(user) {
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.chatGroup.managers.push(user._id);
            this.updateLastActive();
            this._commonService.presentToast('Appointed as manager', 2000);
        }), 1000);
    }
    deleteManager(user, informTheUser = true) {
        let index = this.chatGroup.managers.findIndex((item) => item == user._id);
        setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (index != -1)
                this.chatGroup.managers.splice(index, 1);
            if (this.chatGroup.managers.length == 0 &&
                this.chatGroup.informations.length > 0)
                this.chatGroup.managers.push(this.chatGroup.informations[0].user['_id']);
            this.updateLastActive();
            if (informTheUser) {
                this._commonService.presentToast('Removed from management', 2000);
            }
        }), 1000);
    }
    addUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_2__.SpicaUserSelectionComponent,
                componentProps: {
                    users: this.chatGroup.informations
                        .filter((item) => item.status != 'active')
                        .map((la) => la.user),
                },
            });
            yield modal.present();
            const { data } = (yield modal.onWillDismiss());
            if (data.users.length) {
                data.users.forEach((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    let oldUser = this.chatGroup.informations.filter((la) => la.user['_id'] == item._id)[0];
                    if (oldUser)
                        oldUser.status = 'active';
                    else
                        this.chatGroup.informations.push({
                            user: item,
                            status: 'active',
                        });
                    this.users.push(item);
                    this.updateLastActive();
                    data.users.length == 1
                        ? this._commonService.presentToast('User added', 2000)
                        : this._commonService.presentToast('Users added', 2000);
                }));
            }
        });
    }
    showActions(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (user._id == this.me._id ||
                !this.chatGroup.managers.includes(this.me._id))
                return;
            let action_buttons = [
                {
                    text: 'Remove From Group',
                    handler: () => {
                        this.removeUser(user);
                    },
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    },
                },
            ];
            if (this.chatGroup.managers.includes(user._id))
                action_buttons.splice(action_buttons.length - 1, 0, {
                    text: 'Demote To User',
                    handler: () => {
                        this.deleteManager(user);
                    },
                });
            else
                action_buttons.splice(action_buttons.length - 1, 0, {
                    text: 'Add Manager',
                    handler: () => {
                        this.addManager(user);
                    },
                });
            let actionSheet = yield this._actionSheetCtrl.create({
                buttons: action_buttons,
            });
            actionSheet.present();
        });
    }
    updateLastActive() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let lastActive = JSON.parse(JSON.stringify(this.chatGroup.informations));
            lastActive.forEach((element) => {
                element.user = element.user._id;
            });
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_5__.chat.patch({
                informations: lastActive,
                managers: this.chatGroup.managers,
                _id: this.chatGroup._id,
            });
        });
    }
    removeUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.chatGroup.informations.filter((la) => la.user['_id'] == user._id)[0].status = 'deleted';
            this.deleteManager(user, false);
            this.users = this.users.filter((item) => item._id != user._id);
            this.updateLastActive();
            this._commonService.presentToast('User removed', 2000);
        });
    }
};
ChatDetailPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService }
];
ChatDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-chat-detail',
        template: _raw_loader_chat_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatDetailPage);



/***/ }),

/***/ 85628:
/*!************************************************************!*\
  !*** ./src/app/chat/pages/chat-single/chat-single.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatSinglePage": () => (/* binding */ ChatSinglePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_single_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat-single.page.html */ 25644);
/* harmony import */ var _chat_single_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-single.page.scss */ 8570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 78345);
/* harmony import */ var src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/image.service */ 70251);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 84865);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chat.service */ 86470);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ 82622);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 78548);












let ChatSinglePage = class ChatSinglePage {
    constructor(_dataService, _userService, activatedRoute, imageService, _chatService) {
        this._dataService = _dataService;
        this._userService = _userService;
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
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_3__.initialize)({ identity: localStorage.getItem('chat_spica_token') });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.chatId = this.activatedRoute.snapshot.paramMap.get('chat_id');
            this.me = yield this._userService.getActiveUser();
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
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((messages) => messages.sort((a, b) => a['_id'] > b['_id'] ? 1 : b['_id'] > a['_id'] ? -1 : 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.share)())
                .subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.scroll_params.skip = 0;
                this._dataService
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                this._dataService
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        this.getMessages().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService }
];
ChatSinglePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, static: false },] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInfiniteScroll, { static: false },] }]
};
ChatSinglePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-chat-single',
        template: _raw_loader_chat_single_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_single_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatSinglePage);



/***/ }),

/***/ 59662:
/*!**********************************************************!*\
  !*** ./src/app/chat/pages/chats/chats-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageRoutingModule": () => (/* binding */ ChatsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_detail_chat_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-detail/chat-detail.page */ 4000);
/* harmony import */ var _chat_single_chat_single_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-single/chat-single.page */ 85628);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats.page */ 66988);






const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _chats_page__WEBPACK_IMPORTED_MODULE_2__.ChatsPage,
            },
            {
                path: ':chat_id',
                children: [
                    {
                        path: '',
                        component: _chat_single_chat_single_page__WEBPACK_IMPORTED_MODULE_1__.ChatSinglePage,
                    },
                    {
                        path: 'chat_detail',
                        children: [
                            { path: '', component: _chat_detail_chat_detail_page__WEBPACK_IMPORTED_MODULE_0__.ChatDetailPage },
                            {
                                path: 'profile',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 5215)).then((m) => m.ProfilePageModule),
                            },
                        ],
                    },
                    {
                        path: 'profile',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 5215)).then((m) => m.ProfilePageModule),
                    },
                ],
            },
        ],
    },
];
let ChatsPageRoutingModule = class ChatsPageRoutingModule {
};
ChatsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], ChatsPageRoutingModule);



/***/ }),

/***/ 22039:
/*!**************************************************!*\
  !*** ./src/app/chat/pages/chats/chats.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPageModule": () => (/* binding */ ChatsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-routing.module */ 59662);
/* harmony import */ var _chat_detail_chat_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-detail/chat-detail.page */ 4000);
/* harmony import */ var _chat_single_chat_single_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat-single/chat-single.page */ 85628);
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.page */ 66988);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_social_media_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/social-media/components/components.module */ 65700);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ 45642);












let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsPageRoutingModule,
            src_app_social_media_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.SpicaComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forChild()
        ],
        declarations: [
            _chat_single_chat_single_page__WEBPACK_IMPORTED_MODULE_2__.ChatSinglePage,
            _chats_page__WEBPACK_IMPORTED_MODULE_3__.ChatsPage,
            _chat_detail_chat_detail_page__WEBPACK_IMPORTED_MODULE_1__.ChatDetailPage
        ],
    })
], ChatsPageModule);



/***/ }),

/***/ 66988:
/*!************************************************!*\
  !*** ./src/app/chat/pages/chats/chats.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsPage": () => (/* binding */ ChatsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chats.page.html */ 84130);
/* harmony import */ var _chats_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats.page.scss */ 57386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 84865);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 71537);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 78548);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chat.service */ 86470);
/* harmony import */ var src_app_components_spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/spica-user-selection/spica-user-selection.component */ 47772);











let ChatsPage = class ChatsPage {
    constructor(_userService, _modalController, _chatService, _router) {
        this._userService = _userService;
        this._modalController = _modalController;
        this._chatService = _chatService;
        this._router = _router;
        this.chats = [];
        this.searchedChats = [];
        this.singleChats = [];
        this.selectedChats = [];
        this.user_img_empty = _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.user_img;
        this.open_to_select = false;
        this.loading = true;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._userService.getActiveUser();
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
    createNewGroup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: src_app_components_spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_6__.SpicaUserSelectionComponent,
                componentProps: {
                    users: this.user.friends,
                },
            });
            yield modal.present();
            const { data } = (yield modal.onWillDismiss());
            if (data.users.length) {
                this.loading = true;
                let name;
                if (data.users.length == 1)
                    name = data.users[0].username;
                else
                    name = `${data.users[0].username}, ${data.users[1].username}...`;
                data.users.unshift(this.user);
                let chatExists = yield this._chatService.isChatExists(data.users);
                if (!chatExists.result) {
                    if (data.users.length == 2) {
                        let opponent = data.users.find((user) => this.user._id != user._id);
                        this.navigateToChat(opponent);
                    }
                    else
                        this._chatService.createChat({
                            managers: [this.user._id],
                            name: name,
                            is_group: data.users.length > 2,
                            informations: data.users.map((user) => {
                                return { user: user._id };
                            }),
                        });
                }
                else {
                    this._router.navigate([
                        `chat/tabs/chats/${chatExists.chat['_id']}`,
                        { chat: JSON.stringify(chatExists.chat) },
                    ]);
                }
            }
        });
    }
    navigateToChat(user) {
        this._router.navigate([
            `chat/tabs/chats/${undefined}`,
            { user: JSON.stringify(user) },
        ]);
    }
    deleteChats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
                _services_bucket__WEBPACK_IMPORTED_MODULE_2__.chat.update(chat_item).then();
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
                `/chat/tabs/chats/${chat._id}`,
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
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
ChatsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatsPage);



/***/ }),

/***/ 25231:
/*!**************************************************************!*\
  !*** ./src/app/chat/pages/chat-detail/chat-detail.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep user-minified-card {\n  margin: unset !important;\n}\n:host ::ng-deep user-minified-card ion-avatar {\n  width: 40px;\n  height: 40px;\n  min-width: 40px !important;\n}\n:host .edit_content {\n  padding: 10px 20px 10px 10px;\n}\n:host .edit_content ion-input {\n  max-width: calc(100% - 20px);\n  text-overflow: ellipsis;\n}\n:host .suffix-icon {\n  bottom: 25% !important;\n  border-left: 1px solid var(--border-color);\n  padding-left: 10px;\n}\n:host .group_image {\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n:host .group_image .edit_image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host .group_image .edit_image ::ng-deep ion-icon {\n  font-size: 15px;\n}\n:host .text_right {\n  width: 100%;\n  text-align: end;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n:host .text_right ion-label {\n  font-size: 12px;\n  padding-right: 10px;\n}\n:host .text-left {\n  display: flex;\n  align-items: center;\n}\n:host .text-left ion-avatar {\n  width: 35px;\n  height: 35px;\n  min-width: 35px;\n  margin-right: 10px;\n}\n:host ion-list {\n  padding: 0 10px;\n}\n:host ion-list ion-list-header {\n  padding-bottom: 10px;\n  border-bottom: 1px solid var(--ion-color-light-shade);\n  margin-bottom: 5px;\n}\n:host ion-list ion-list-header ion-label > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHdCQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBUjtBQUlFO0VBQ0UsNEJBQUE7QUFGSjtBQUdJO0VBQ0UsNEJBQUE7RUFDQSx1QkFBQTtBQUROO0FBSUU7RUFDRSxzQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFETjtBQUdRO0VBQ0UsZUFBQTtBQURWO0FBTUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSko7QUFLSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUhOO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFITjtBQU1FO0VBQ0UsZUFBQTtBQUpKO0FBTUk7RUFDRSxvQkFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQUtNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhSIiwiZmlsZSI6ImNoYXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIHtcbiAgICB1c2VyLW1pbmlmaWVkLWNhcmQge1xuICAgICAgbWFyZ2luOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZWRpdF9jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAxMHB4O1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICB9XG4gIC5zdWZmaXgtaWNvbiB7XG4gICAgYm90dG9tOiAyNSUgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5ncm91cF9pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAuZWRpdF9pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAudGV4dF9yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuICAudGV4dC1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIG1pbi13aWR0aDogMzVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgaW9uLWxhYmVsID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 8570:
/*!**************************************************************!*\
  !*** ./src/app/chat/pages/chat-single/chat-single.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .messages-content {\n  padding: 15px 0px;\n  display: flex;\n  flex-direction: column;\n}\n:host .date-divider {\n  position: relative;\n  margin: auto;\n  color: var(--cd-component-text-color);\n  font-size: 0.8rem;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n}\n:host ion-backdrop {\n  opacity: 1;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 10;\n  position: fixed;\n}\n:host spica-upload-image {\n  margin-right: 10px;\n  align-self: center;\n}\n:host ion-toolbar .send_image {\n  width: calc(100% - 20px);\n  object-fit: cover;\n  margin: 10px;\n  max-height: 400px;\n}\n:host ion-footer ion-icon {\n  align-self: center;\n}\n:host ion-footer ion-icon.clear-text {\n  font-size: 18px;\n  background: transparent;\n  color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n}\n:host ion-infinite-scroll-content {\n  min-height: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtc2luZ2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHSTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFETjtBQUtJO0VBQ0Usa0JBQUE7QUFITjtBQUlNO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyYkFBQTtBQUZSO0FBTUU7RUFDRSxlQUFBO0FBSkoiLCJmaWxlIjoiY2hhdC1zaW5nbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWVzc2FnZXMtY29udGVudCB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5kYXRlLWRpdmlkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgY29sb3I6IHZhcigtLWNkLWNvbXBvbmVudC10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpb24tYmFja2Ryb3Age1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICBzcGljYS11cGxvYWQtaW1hZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgaW9uLXRvb2xiYXIge1xuICAgIC5zZW5kX2ltYWdlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICYuY2xlYXItdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDUxMiUyMDUxMic+PHBhdGglMjBmaWxsPSd2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsJTIwJTIzNjY2NjY2KSclMjBkPSdNNDAzLjEsMTA4LjljLTgxLjItODEuMi0yMTIuOS04MS4yLTI5NC4yLDBzLTgxLjIsMjEyLjksMCwyOTQuMmM4MS4yLDgxLjIsMjEyLjksODEuMiwyOTQuMiwwUzQ4NC4zLDE5MC4xLDQwMy4xLDEwOC45eiUyME0zNTIsMzQwLjJMMzQwLjIsMzUybC04NC40LTg0LjJsLTg0LDgzLjhMMTYwLDMzOS44bDg0LTgzLjhsLTg0LTgzLjhsMTEuOC0xMS44bDg0LDgzLjhsODQuNC04NC4ybDExLjgsMTEuOEwyNjcuNiwyNTZMMzUyLDM0MC4yeicvPjwvc3ZnPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiA1cHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 57386:
/*!**************************************************!*\
  !*** ./src/app/chat/pages/chats/chats.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .empty_chat {\n  width: 100%;\n  text-align: center;\n  font-size: smaller;\n}\n:host .chats-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n:host .chats-content ion-list {\n  overflow: auto;\n  flex: 1;\n  padding: 0 10px;\n}\n:host .chats-content ion-list ion-item {\n  touch-action: pan-y !important;\n}\n:host .chat-group ion-avatar {\n  width: 48px;\n  height: 48px;\n  margin-right: 10px;\n}\n:host .chat-group .chat-header {\n  display: flex;\n  width: 100%;\n}\n:host .chat-group .chat-header h3 {\n  font-weight: 600;\n}\n:host .chat-group .chat-header span {\n  font-size: 11px;\n  padding-left: 10px;\n  padding-top: 2px;\n  font-weight: 300;\n  color: var(--ion-color-medium-shade);\n}\n:host .chat-group p {\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n:host .chat-group .empty-chat {\n  font-weight: 400;\n  font-style: italic;\n}\n:host .selected {\n  background: var(--ion-color-light-shade);\n}\n:host ion-label .message p {\n  color: var(--ion-color-medium-shade);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUNJO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBQ047QUFBTTtFQUNFLDhCQUFBO0FBRVI7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFETjtBQUVNO0VBQ0UsZ0JBQUE7QUFBUjtBQUVNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBQVI7QUFHSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUU7RUFDRSx3Q0FBQTtBQUZKO0FBTU07RUFDRSxvQ0FBQTtFQUNBLFdBQUE7QUFKUiIsImZpbGUiOiJjaGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5lbXB0eV9jaGF0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICB9XG4gIC5jaGF0cy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGlvbi1saXN0IHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBwYW4teSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2hhdC1ncm91cCB7XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogNDhweDtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmNoYXQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmVtcHR5LWNoYXQge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gIH1cbiAgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICB9XG4gIGlvbi1sYWJlbCB7XG4gICAgLm1lc3NhZ2Uge1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 49423:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/pages/chat-detail/chat-detail.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Group Information</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button (click)=\"updateGroup()\">\n       \n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"chatGroup as chat\">\n    <ion-item class=\"edit_content\">\n      <ion-avatar slot=\"start\" class=\"group_image\">\n        <img [src]=\"chatGroup.image ? chatGroup.image : user_img_empty\" />\n        <spica-upload-image\n          *ngIf=\"chatGroup.managers.includes(me._id)\"\n          class=\"edit_image\"\n          (change)=\"changeImage($event)\"\n        ></spica-upload-image>\n      </ion-avatar>\n      <ion-input\n        *ngIf=\"chatGroup.managers.includes(me._id)\"\n        [(ngModel)]=\"chatGroup.name\"\n      ></ion-input>\n      <ion-label *ngIf=\"!chatGroup.managers.includes(me._id)\">\n        {{chatGroup.name}}\n      </ion-label>\n      <ion-icon\n        (click)=\"updateGroup()\"\n        *ngIf=\"!loading.name && chatGroup?.managers.includes(me._id)\"\n        name=\"checkmark-outline\"\n        class=\"suffix-icon\"\n      >\n      </ion-icon>\n      <ion-spinner class=\"suffix-icon\" *ngIf=\"loading.name\"></ion-spinner>\n    </ion-item>\n    <ion-list lines=\"full\">\n      <ion-list-header class=\"ion-no-padding\">\n        <ion-label\n          ><div>\n            Users\n            <ion-icon\n              *ngIf=\"chatGroup.managers.includes(me._id)\"\n              (click)=\"addUsers()\"\n              name=\"person-add-outline\"\n            ></ion-icon></div\n        ></ion-label>\n      </ion-list-header>\n      <ng-container *ngFor=\"let user of users\">\n        <ion-item class=\"ion-no-padding\">\n          <div class=\"text-left\" [routerLink]=\"['profile',user._id]\">\n            <ion-avatar>\n              <img [src]=\"user.thumbnail || user_img_empty\" alt=\"\" />\n            </ion-avatar>\n            <ion-label> {{user.username}} </ion-label>\n          </div>\n\n          <div (click)=\"showActions(user)\" class=\"text_right\">\n            <ion-label *ngIf=\"chatGroup.managers.includes(user._id)\">\n              Manager\n            </ion-label>\n            <ion-icon\n              *ngIf=\"chatGroup.managers.includes(me._id)\"\n              name=\"cog-outline\"\n            ></ion-icon>\n          </div>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\" *ngIf=\"chatGroup as chat\">\n  <ion-toolbar>\n    <ion-button class=\"button-delete\" expand=\"full\" (click)=\"deleteGroup()\">\n      Leave from group</ion-button\n    >\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 25644:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/pages/chat-single/chat-single.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"chat/tabs/chats\"></ion-back-button>\n    </ion-buttons>\n    <ion-title\n      *ngIf=\"chatGroup\"\n      [routerLink]=\"chatGroup.is_group ? ['chat_detail'] : ['profile',singleUserId]\"\n      >{{chatGroup.name}}\n    </ion-title>\n    <ion-buttons *ngIf=\"chatGroup && chatGroup?.is_group\" slot=\"end\">\n      <ion-button [routerLink]=\"['chat_detail']\">\n        <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-infinite-scroll\n    position=\"top\"\n    threshold=\"0px\"\n    (ionInfinite)=\"loadData()\"\n  >\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ng-container\n    *ngIf=\"(usersInChatGroup && me) && ((chatGroup.is_group && usersInChatGroup[me._id]?.status == 'active') || !chatGroup.is_group)\"\n  >\n    <ng-container *ngFor=\"let message of messages;let index = index\">\n      <div class=\"date-divider\" *ngIf=\"message['first_message']\">\n        {{message.created_at | date: \"dd/MM/YYYY\"}}\n      </div>\n      <message-single\n        [date]=\"message.created_at\"\n        [recurring]=\"message['recurring']\"\n        [avatar]=\"!messages[(index + 1)] || messages[(index + 1)].owner != message.owner ? usersInChatGroup[message.owner].user.thumbnail : 'none'\"\n        [message]=\"message.message\"\n        [isCurrentUser]=\"message.owner == me._id\"\n        [image]=\"message.image\"\n        [id]=\"usersInChatGroup[message.owner].user._id\"\n        mode=\"chat\"\n      ></message-single>\n    </ng-container>\n  </ng-container>\n  <ng-container\n    *ngIf=\"(usersInChatGroup && me) && usersInChatGroup[me._id]?.status != 'active' && chatGroup.is_group\"\n  >\n    <div class=\"empty-placeholder\">\n      You can't see any message because you are not in this chat group anymore\n    </div>\n  </ng-container>\n\n  <ion-spinner\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n    *ngIf=\"loading\"\n  ></ion-spinner>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar\n    *ngIf=\"(usersInChatGroup && me) && ((usersInChatGroup[me._id]?.status == 'active' && chatGroup.is_group) || !chatGroup.is_group)\"\n  >\n    <ion-item *ngIf=\"image_message\">\n      <img class=\"send_image\" [src]=\"image_message\" />\n    </ion-item>\n    <ion-item lines=\"none\">\n      <spica-upload-image slot=\"start\"\n        *ngIf=\"!loading_image &&!message && !image_message\"\n        (change)=\"sendImage($event)\"\n      ></spica-upload-image>\n      <ion-textarea\n        *ngIf=\"!image_message\"\n        [(ngModel)]=\"message\"\n        placeholder=\"Send Message\"\n        enterkeyhint=\"send\"\n        autoGrow=\"true\"\n        rows=\"1\"\n      ></ion-textarea>\n      <ion-icon\n        class=\"clear-text\"\n        *ngIf=\"message\"\n        (click)=\"message=''\"\n        name=\"close-circle-outline\"\n      ></ion-icon>\n      <ion-spinner\n        *ngIf=\"loading_image\"\n        name=\"crescent\"\n        slot=\"end\"\n      ></ion-spinner>\n      <ion-icon\n        *ngIf=\"!loading_image && !message && image_message\"\n        name=\"close\"\n        slot=\"end\"\n        (click)=\"cancelImage()\"\n      >\n      </ion-icon>\n      <ion-icon\n        *ngIf=\"!loading_image\"\n        name=\"send-outline\"\n        slot=\"end\"\n        (click)=\"sendMessage()\"\n      ></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 84130:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/pages/chats/chats.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Chats</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!selectedChats.length\" (click)=\"createNewGroup()\">\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"selectedChats.length\" (click)=\"deleteChats()\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"chats-content\">\n    <ion-item\n      *ngIf=\"searchedChats.length || searchedText\"\n      lines=\"none\"\n      class=\"ion-no-padding\"\n      mode=\"ios\"\n    >\n      <ion-searchbar\n        mode=\"ios\"\n        animated\n        debounce=\"500\"\n        placeholder=\"Search\"\n        [(ngModel)]=\"searchedText\"\n        (ngModelChange)=\"getChatBySearch()\"\n      ></ion-searchbar>\n      <ion-label (click)=\"openSelection()\" slot=\"end\">\n        {{open_to_select ? \"cancel\" : \"select\"}}\n      </ion-label>\n    </ion-item>\n    <ion-list *ngIf=\"!loading\">\n      <ion-item *ngIf=\"!searchedChats.length && !searchedText\">\n        <div class=\"empty_chat\">There is no chat yet</div>\n      </ion-item>\n      <ion-item\n        class=\"chat-group\"\n        [class.selected]=\"selectedChats.includes(chat._id)\"\n        *ngFor=\"let chat of searchedChats\"\n        (click)=\"clickedToChat(chat)\"\n        detail=\"true\"\n      >\n        <ion-checkbox\n          *ngIf=\"open_to_select\"\n          slot=\"start\"\n          value=\"buford\"\n        ></ion-checkbox>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"chat.image ? chat.image : user_img_empty\" />\n        </ion-avatar>\n        <ion-label>\n          <div class=\"chat-header\">\n            <h3>{{chat.name}}</h3>\n            <span *ngIf=\"chat.last_message && !chat['seen']\"\n              >{{chat.last_message_time|date:\"shortDate\"}}\n            </span>\n          </div>\n          <p class=\"empty-chat\" *ngIf=\"chat.last_message&&chat['seen']\">Seen</p>\n          <div class=\"message\" *ngIf=\"chat.last_message&&!chat['seen']\">\n            <p>{{ chat.last_message}}</p>\n          </div>\n          <p class=\"empty-chat\" *ngIf=\"!chat.last_message\">\n            No message in this chat\n          </p>\n        </ion-label>\n        <ion-badge *ngIf=\"chat['new_message_count']\" slot=\"end\" color=\"success\"\n          >{{chat['new_message_count']}}\n        </ion-badge>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_pages_chats_chats_module_ts.js.map