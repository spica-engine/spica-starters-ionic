(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_chat_tabs_tabs_module_ts"],{

/***/ 75640:
/*!***********************************************!*\
  !*** ./src/app/chat/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 48248);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 82622);
/* harmony import */ var _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spica-devkit/identity */ 32077);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ 71537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69412);









let AuthService = class AuthService {
    constructor(platform, _dataService) {
        this.platform = platform;
        this._dataService = _dataService;
        _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.initialize({
            publicUrl: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.api_url,
            apikey: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.public_apikey,
        });
    }
    login(identifier, password) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.login(identifier, password)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((token) => {
            if (token) {
                localStorage.setItem('chat_spica_token', token);
                let date = new Date();
                date.setDate(date.getDate() + 2); // 2 days later
                localStorage.setItem('chat_spica_expire', String(date));
            }
            else
                return;
        }));
    }
    register(user_data) {
        return this._dataService.register(user_data);
    }
    getToken() {
        return localStorage.getItem('chat_spica_token');
    }
    getDecodeToken() {
        let decoded;
        try {
            decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.default)(this.getToken());
        }
        catch (error) {
            console.log('Jwt error ', error);
        }
        return decoded;
    }
    getIdentityId() {
        var _a;
        return ((_a = this.getDecodeToken()) === null || _a === void 0 ? void 0 : _a._id) || null;
    }
    logOut() {
        localStorage.clear();
        window.location.href = '/';
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 84865:
/*!*****************************************!*\
  !*** ./src/app/chat/services/bucket.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "chat": () => (/* binding */ chat),
/* harmony export */   "message": () => (/* binding */ message)
/* harmony export */ });
/* harmony import */ var _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spica-devkit/bucket */ 14760);

/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
function initialize(...initOptions) {
    initOptions[0].publicUrl = 'https://spica-starters-7229b.hq.spicaengine.com/api';
    _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize(...initOptions);
}
var user;
(function (user) {
    const BUCKET_ID = '61b8771db7f4a7002e04eb18';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    user.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    user.getAll = getAll;
    ;
    function insert(document) {
        ['friends'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    user.insert = insert;
    ;
    function update(document) {
        ['friends'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    user.update = update;
    ;
    function patch(document) {
        ['friends'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    user.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    user.remove = remove;
    ;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        ;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
        ;
    })(realtime = user.realtime || (user.realtime = {}));
})(user || (user = {}));
var chat;
(function (chat) {
    const BUCKET_ID = '61b87720b7f4a7002e04eb1c';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    chat.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    chat.getAll = getAll;
    ;
    function insert(document) {
        ['managers', 'last_message_owner'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    chat.insert = insert;
    ;
    function update(document) {
        ['managers', 'last_message_owner'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    chat.update = update;
    ;
    function patch(document) {
        ['managers', 'last_message_owner'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    chat.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    chat.remove = remove;
    ;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        ;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
        ;
    })(realtime = chat.realtime || (chat.realtime = {}));
})(chat || (chat = {}));
var message;
(function (message) {
    const BUCKET_ID = '61b87722b7f4a7002e04eb21';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    message.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    message.getAll = getAll;
    ;
    function insert(document) {
        ['owner', 'chat'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    message.insert = insert;
    ;
    function update(document) {
        ['owner', 'chat'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    message.update = update;
    ;
    function patch(document) {
        ['owner', 'chat'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    message.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    message.remove = remove;
    ;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        ;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
        ;
    })(realtime = message.realtime || (message.realtime = {}));
})(message || (message = {}));


/***/ }),

/***/ 86470:
/*!***********************************************!*\
  !*** ./src/app/chat/services/chat.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ 1156);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ 72479);
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 84865);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 78548);







let ChatService = class ChatService {
    constructor(_userService) {
        this._userService = _userService;
        this.chatGroups = [];
        this.$chatGroups = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.$unreadMessageCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.cachedUsers = [];
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize)({ identity: localStorage.getItem('chat_spica_token') });
    }
    initialize() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser();
            _services_bucket__WEBPACK_IMPORTED_MODULE_0__.chat.realtime.getAll({
                filter: {
                    informations: { $elemMatch: { user: this.me._id, status: 'active' } },
                },
            })
                .pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__.map)((chats) => {
                chats = chats.map((chat) => {
                    let userObject = chat.informations.filter((user) => user.user == this.me._id || user.user['_id'] == this.me._id)[0];
                    chat['new_message_count'] = userObject.unread_messages_count;
                    return chat;
                });
                return chats;
            }), (0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__.map)((chats) => chats.sort((a, b) => {
                if (b['last_message_time'] && a['last_message_time'])
                    return (new Date(b['last_message_time']).getTime() -
                        new Date(a['last_message_time']).getTime());
                return -1;
            })), (0,rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_5__.switchMap)((chats) => {
                let nonCachedUsers = [];
                chats.forEach((chat) => {
                    nonCachedUsers = nonCachedUsers.concat(chat.informations.filter((item) => !this.cachedUsers.some((cu) => cu._id == item.user || cu._id == item.user['_id'])));
                });
                let $newUsers = nonCachedUsers.length > 0
                    ? _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.getAll({
                        queryParams: {
                            filter: {
                                _id: { $in: nonCachedUsers.map((item) => item.user) },
                            },
                        },
                    })
                    : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]).toPromise();
                return $newUsers.then((users) => {
                    this.cachedUsers = this.cachedUsers.concat(users);
                    chats = chats.map((chat) => {
                        if (!chat.informations[0].user['_id'])
                            chat.informations.forEach((item) => (item.user = this.cachedUsers.find((cu) => cu._id == item.user)));
                        return chat;
                    });
                    return chats;
                });
            }))
                .subscribe((data) => {
                this.chatGroups = data.map((chat) => {
                    if (!chat.is_group) {
                        chat.name =
                            chat.informations[1].user['_id'] == this.me._id
                                ? `${chat.informations[0].user['username']}`
                                : `${chat.informations[1].user['username']}`;
                        chat['image'] =
                            chat.informations[1].user['_id'] == this.me._id
                                ? chat.informations[0].user['thumbnail']
                                : chat.informations[1].user['thumbnail'];
                    }
                    return chat;
                });
                let unread_messages_count = 0;
                this.chatGroups.forEach((chat) => {
                    let userLastActive = chat.informations.filter((la) => la.user['_id'] == this.me._id.toString())[0];
                    unread_messages_count += userLastActive.unread_messages_count;
                });
                this.$unreadMessageCount.next(unread_messages_count);
                this.$chatGroups.next(this.chatGroups);
            });
        });
    }
    getChats() {
        return this.$chatGroups;
    }
    getUnreadMessageCount() {
        return this.$unreadMessageCount;
    }
    getChatByUserWithMe(id) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.chat.getAll({
            queryParams: {
                filter: {
                    $and: [
                        { informations: { $elemMatch: { user: id } } },
                        { informations: { $elemMatch: { user: this.me._id } } },
                        { informations: { $size: 2 } },
                        { is_group: false },
                    ],
                },
            },
        })
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (data[0])
                for (let item of data[0].informations) {
                    if (item.user == this.me._id)
                        item.user = this.me;
                    else if (this.cachedUsers.some((cu) => cu._id == item.user)) {
                        item.user = this.cachedUsers.find((cu) => cu._id == item.user);
                    }
                    else {
                        item.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.get(item.user);
                        this.cachedUsers.push(item.user);
                    }
                }
            return data;
        }));
    }
    createChat(chatGroup) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.chat.insert(chatGroup);
    }
    isChatExists(users) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let result = { result: false, chat: {} };
            let usersString = users
                .map((u) => u._id)
                .sort()
                .join(',');
            this.chatGroups.forEach((cg) => {
                let chatGroupsString = cg.informations
                    .map((item) => item.user['_id'] || item.user)
                    .sort()
                    .join(',');
                if (usersString == chatGroupsString) {
                    result = { result: true, chat: cg };
                }
            });
            if (!result.result && users.length == 2) {
                let other_user = users.filter((item) => (item._id || item) != this.me._id)[0]._id;
                let deletedChat = yield this.getChatByUserWithMe(other_user);
                if (deletedChat[0])
                    result = { result: true, chat: deletedChat[0] };
            }
            return result;
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService }
];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], ChatService);



/***/ }),

/***/ 82622:
/*!***********************************************!*\
  !*** ./src/app/chat/services/data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 71537);




let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    setHeader() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            authorization: 'IDENTITY ' + localStorage.getItem('chat_spica_token'),
        });
        return header;
    }
    register(user_data) {
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}/fn-execute/register`, {
            user_data,
            project: 'CHAT',
        });
    }
    setOnline(process, params, user_id) {
        let chatObj = {
            object: process,
            params: params,
            user_id,
        };
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}/fn-execute/online`, chatObj, {
            headers: this.setHeader(),
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], DataService);



/***/ }),

/***/ 78548:
/*!***********************************************!*\
  !*** ./src/app/chat/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 84865);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 75640);





let UserService = class UserService {
    constructor(_authService) {
        this._authService = _authService;
        this.followingUsers = [];
        this.initializeOrm();
    }
    getActiveUser() {
        let result;
        let identity_id = this.getIdentityId();
        if (this.me) {
            result = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.me).toPromise();
        }
        else {
            this.initializeOrm();
            result = _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.getAll({
                queryParams: {
                    filter: { identity_id: identity_id },
                    relation: 'friends',
                },
            })
                .then((data) => {
                this.me = data[0];
                return data[0];
            });
        }
        return result;
    }
    getUserById(id, relation) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.get(id, { queryParams: { relation: relation } });
    }
    getUserByIdentity(id) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.getAll({ queryParams: { filter: { identity_id: id } } });
    }
    getUserByUsername(username) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.getAll({ queryParams: { filter: { username: username } } });
    }
    getIdentityId() {
        return this._authService.getIdentityId();
    }
    updateProfilePhoto(photoUrl) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.patch({ _id: this.me._id, thumbnail: photoUrl });
    }
    updateProfile(updatedUser) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.update(updatedUser);
    }
    initializeOrm() {
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize)({ identity: localStorage.getItem('chat_spica_token') });
    }
    logOut() {
        this.me = undefined;
        localStorage.removeItem('chat_spica_token');
    }
};
UserService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ 20207:
/*!**************************************************!*\
  !*** ./src/app/chat/tabs/tabs-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 14180);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: 'chats',
                pathMatch: 'full',
            },
            {
                path: 'chats',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_social-media_components_components_module_ts"), __webpack_require__.e("default-src_app_social-media_services_chat_service_ts-src_app_social-media_tabs_tabs_service_ts"), __webpack_require__.e("default-node_modules_ngx-translate_core___ivy_ngcc___fesm2015_ngx-translate-core_js"), __webpack_require__.e("src_app_chat_pages_chats_chats_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/chats/chats.module */ 22039)).then((m) => m.ChatsPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c2")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/profile/profile.module */ 5215)).then((m) => m.ProfilePageModule),
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 11719:
/*!******************************************!*\
  !*** ./src/app/chat/tabs/tabs.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 20207);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 14180);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 14180:
/*!****************************************!*\
  !*** ./src/app/chat/tabs/tabs.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97467);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 54745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bucket */ 84865);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 78548);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chat.service */ 86470);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ 82622);
/* harmony import */ var _tabs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.service */ 79609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ 75640);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ 5620);












let TabsPage = class TabsPage {
    constructor(_userService, _chatService, _tabsService, _dataService, _router, _authService, _commonService) {
        this._userService = _userService;
        this._chatService = _chatService;
        this._tabsService = _tabsService;
        this._dataService = _dataService;
        this._router = _router;
        this._authService = _authService;
        this._commonService = _commonService;
        this.selectedTab = 'home';
        this.unreadMessages = 0;
        this.loading = true;
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize)({ identity: localStorage.getItem('chat_spica_token') });
    }
    ngOnInit() {
        this.getMe();
    }
    getMe() {
        this._userService.getActiveUser().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var _a;
            if (data && !this.me) {
                this.me = data;
                this.loading = false;
                this._chatService.initialize();
                yield this._dataService
                    .setOnline('user', {}, (_a = this === null || this === void 0 ? void 0 : this.me) === null || _a === void 0 ? void 0 : _a._id)
                    .toPromise();
            }
            else
                this.loading = false;
        }), (err) => {
            console.log('err :', err);
            this.loading = false;
        });
        this._tabsService
            .watchBackdropImage()
            .subscribe((data) => (this.backDropImage = data));
        document.addEventListener('ionBackButton', (ev) => {
            this.backDropImage = null;
        });
        this._router.events.subscribe((e) => {
            if (e.hasOwnProperty('url')) {
                this.selectedTab = e['url'].split('/');
                this.selectedTab = this.selectedTab[3];
            }
            this._tabsService.selectedTab = this.selectedTab;
        });
    }
    login(loginData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this._authService
                .login(loginData.email, loginData.password)
                .toPromise()
                .then((_) => {
                this.me = undefined;
                this.getMe();
            }, (err) => {
                this.loading = false;
                this._commonService.presentToast(err.message, 1500);
            });
        });
    }
    register(registerData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this._authService
                .register(Object.assign({}, registerData))
                .toPromise()
                .then((res) => {
                this.login(registerData);
                this._commonService.presentToast(res['message'], 1500);
            })
                .catch((err) => {
                this._commonService.presentToast(err.error.message, 1500);
            });
        });
    }
    routeTab(route) {
        this._router.navigateByUrl('/chat/tabs/' + route, {
            replaceUrl: true,
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService },
    { type: _tabs_service__WEBPACK_IMPORTED_MODULE_6__.TabsService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 79609:
/*!*******************************************!*\
  !*** ./src/app/chat/tabs/tabs.service.ts ***!
  \*******************************************/
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
        providedIn: "root",
    })
], TabsService);



/***/ }),

/***/ 54745:
/*!******************************************!*\
  !*** ./src/app/chat/tabs/tabs.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tab-selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsK0JBQUE7QUFBSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItc2VsZWN0ZWQge1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 97467:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/tabs/tabs.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-tabs *ngIf=\"me && !loading\">\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button\n        [class.tab-selected]=\"selectedTab=='chats'\"\n        (click)=\"routeTab('chats')\"\n      >\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Chats</ion-label>\n      </ion-tab-button>\n      <ion-tab-button\n        (click)=\"selectedTab = 'profile'; routeTab('profile/'+me?._id)\"\n        [class.tab-selected]=\"selectedTab=='profile'\"\n      >\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  <spica-authorization\n    *ngIf=\"!me && !loading\"\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n  ></spica-authorization>\n  <ion-spinner\n    *ngIf=\"loading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_tabs_tabs_module_ts.js.map