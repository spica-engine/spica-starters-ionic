(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_social-media_services_chat_service_ts-src_app_social-media_tabs_tabs_service_ts"],{

/***/ 68965:
/*!*******************************************************!*\
  !*** ./src/app/social-media/services/auth.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 48248);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 14911);
/* harmony import */ var _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spica-devkit/identity */ 32077);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ 19874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);










let AuthService = class AuthService {
    constructor(platform, _dataService, _router) {
        this.platform = platform;
        this._dataService = _dataService;
        this._router = _router;
        _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.initialize({
            publicUrl: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.api_url,
            apikey: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.public_apikey,
        });
    }
    login(identifier, password) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.login(identifier, password)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((token) => {
            if (token) {
                localStorage.setItem('socialmedia_spica_token', token);
                let date = new Date();
                date.setDate(date.getDate() + 2); // 2 days later
                localStorage.setItem('socialmedia_spica_expire', String(date));
            }
            else
                return;
        }));
    }
    register(user_data) {
        return this._dataService.register(user_data);
    }
    getToken() {
        return localStorage.getItem('socialmedia_spica_token');
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
};
AuthService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 63648:
/*!*************************************************!*\
  !*** ./src/app/social-media/services/bucket.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "activity": () => (/* binding */ activity),
/* harmony export */   "user": () => (/* binding */ user),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "waiting_request": () => (/* binding */ waiting_request),
/* harmony export */   "chat": () => (/* binding */ chat),
/* harmony export */   "follow": () => (/* binding */ follow),
/* harmony export */   "message": () => (/* binding */ message),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "liked_post": () => (/* binding */ liked_post),
/* harmony export */   "hashtag": () => (/* binding */ hashtag),
/* harmony export */   "reported_post": () => (/* binding */ reported_post),
/* harmony export */   "blocked_user": () => (/* binding */ blocked_user)
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
var activity;
(function (activity) {
    const BUCKET_ID = '61b70a6db7f4a7002e04c4a8';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    activity.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    activity.getAll = getAll;
    ;
    function insert(document) {
        ['owner', 'user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    activity.insert = insert;
    ;
    function update(document) {
        ['owner', 'user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    activity.update = update;
    ;
    function patch(document) {
        ['owner', 'user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    activity.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    activity.remove = remove;
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
    })(realtime = activity.realtime || (activity.realtime = {}));
})(activity || (activity = {}));
var user;
(function (user) {
    const BUCKET_ID = '61b70a6fb7f4a7002e04c4ab';
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
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    user.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    user.update = update;
    ;
    function patch(document) {
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
var post;
(function (post) {
    const BUCKET_ID = '61b70a71b7f4a7002e04c4ae';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    post.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    post.getAll = getAll;
    ;
    function insert(document) {
        ['user', 'tags', 'hashtags'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    post.insert = insert;
    ;
    function update(document) {
        ['user', 'tags', 'hashtags'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    post.update = update;
    ;
    function patch(document) {
        ['user', 'tags', 'hashtags'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    post.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    post.remove = remove;
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
    })(realtime = post.realtime || (post.realtime = {}));
})(post || (post = {}));
var waiting_request;
(function (waiting_request) {
    const BUCKET_ID = '61b70a73b7f4a7002e04c4b1';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    waiting_request.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    waiting_request.getAll = getAll;
    ;
    function insert(document) {
        ['sender', 'reciever'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    waiting_request.insert = insert;
    ;
    function update(document) {
        ['sender', 'reciever'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    waiting_request.update = update;
    ;
    function patch(document) {
        ['sender', 'reciever'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    waiting_request.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    waiting_request.remove = remove;
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
    })(realtime = waiting_request.realtime || (waiting_request.realtime = {}));
})(waiting_request || (waiting_request = {}));
var chat;
(function (chat) {
    const BUCKET_ID = '61b70a7ab7f4a7002e04c4bd';
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
        ['last_message_owner', 'managers'].forEach((field) => {
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
        ['last_message_owner', 'managers'].forEach((field) => {
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
        ['last_message_owner', 'managers'].forEach((field) => {
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
var follow;
(function (follow) {
    const BUCKET_ID = '61b70a79b7f4a7002e04c4ba';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    follow.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    follow.getAll = getAll;
    ;
    function insert(document) {
        ['follower', 'following'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    follow.insert = insert;
    ;
    function update(document) {
        ['follower', 'following'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    follow.update = update;
    ;
    function patch(document) {
        ['follower', 'following'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    follow.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    follow.remove = remove;
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
    })(realtime = follow.realtime || (follow.realtime = {}));
})(follow || (follow = {}));
var message;
(function (message) {
    const BUCKET_ID = '61b70a7cb7f4a7002e04c4c0';
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
        ['owner', 'chat', 'post'].forEach((field) => {
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
        ['owner', 'chat', 'post'].forEach((field) => {
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
        ['owner', 'chat', 'post'].forEach((field) => {
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
var comment;
(function (comment) {
    const BUCKET_ID = '61b70a7eb7f4a7002e04c4c3';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    comment.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    comment.getAll = getAll;
    ;
    function insert(document) {
        ['post', 'user', 'hastags', 'tags'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    comment.insert = insert;
    ;
    function update(document) {
        ['post', 'user', 'hastags', 'tags'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    comment.update = update;
    ;
    function patch(document) {
        ['post', 'user', 'hastags', 'tags'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    comment.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    comment.remove = remove;
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
    })(realtime = comment.realtime || (comment.realtime = {}));
})(comment || (comment = {}));
var liked_post;
(function (liked_post) {
    const BUCKET_ID = '61b70a77b7f4a7002e04c4b7';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    liked_post.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    liked_post.getAll = getAll;
    ;
    function insert(document) {
        ['user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    liked_post.insert = insert;
    ;
    function update(document) {
        ['user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    liked_post.update = update;
    ;
    function patch(document) {
        ['user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    liked_post.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    liked_post.remove = remove;
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
    })(realtime = liked_post.realtime || (liked_post.realtime = {}));
})(liked_post || (liked_post = {}));
var hashtag;
(function (hashtag) {
    const BUCKET_ID = '61b70a80b7f4a7002e04c4c6';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    hashtag.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    hashtag.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    hashtag.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    hashtag.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    hashtag.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    hashtag.remove = remove;
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
    })(realtime = hashtag.realtime || (hashtag.realtime = {}));
})(hashtag || (hashtag = {}));
var reported_post;
(function (reported_post) {
    const BUCKET_ID = '61b70a81b7f4a7002e04c4c9';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    reported_post.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    reported_post.getAll = getAll;
    ;
    function insert(document) {
        ['user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    reported_post.insert = insert;
    ;
    function update(document) {
        ['user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    reported_post.update = update;
    ;
    function patch(document) {
        ['user', 'post'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    reported_post.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    reported_post.remove = remove;
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
    })(realtime = reported_post.realtime || (reported_post.realtime = {}));
})(reported_post || (reported_post = {}));
var blocked_user;
(function (blocked_user) {
    const BUCKET_ID = '61b70a75b7f4a7002e04c4b4';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    blocked_user.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    blocked_user.getAll = getAll;
    ;
    function insert(document) {
        ['blocking', 'blocked'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    blocked_user.insert = insert;
    ;
    function update(document) {
        ['blocking', 'blocked'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    blocked_user.update = update;
    ;
    function patch(document) {
        ['blocking', 'blocked'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    blocked_user.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    blocked_user.remove = remove;
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
    })(realtime = blocked_user.realtime || (blocked_user.realtime = {}));
})(blocked_user || (blocked_user = {}));


/***/ }),

/***/ 44010:
/*!*******************************************************!*\
  !*** ./src/app/social-media/services/chat.service.ts ***!
  \*******************************************************/
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
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 63648);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 4957);







let ChatService = class ChatService {
    constructor(_userService) {
        this._userService = _userService;
        this.chatGroups = [];
        this.$chatGroups = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.$unreadMessageCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.cachedUsers = [];
    }
    initialize() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser().toPromise();
            _services_bucket__WEBPACK_IMPORTED_MODULE_0__.chat.realtime.getAll({
                filter: {
                    last_active: { $elemMatch: { user: this.me._id, status: 'active' } },
                },
            })
                .pipe((0,rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__.map)((chats) => {
                chats = chats.map((chat) => {
                    let userObject = chat.last_active.filter((user) => user.user == this.me._id || user.user['_id'] == this.me._id)[0];
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
                    nonCachedUsers = nonCachedUsers.concat(chat.last_active.filter((item) => !this.cachedUsers.some((cu) => cu._id == item.user || cu._id == item.user['_id'])));
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
                        if (!chat.last_active[0].user['_id'])
                            chat.last_active.forEach((item) => (item.user = this.cachedUsers.find((cu) => cu._id == item.user)));
                        return chat;
                    });
                    return chats;
                });
            }))
                .subscribe((data) => {
                this.chatGroups = data.map((chat) => {
                    if (!chat.is_group) {
                        chat.name =
                            chat.last_active[1].user['_id'] == this.me._id
                                ? `${chat.last_active[0].user['username']}`
                                : `${chat.last_active[1].user['username']}`;
                        chat['image'] =
                            chat.last_active[1].user['_id'] == this.me._id
                                ? chat.last_active[0].user['thumbnail']
                                : chat.last_active[1].user['thumbnail'];
                    }
                    return chat;
                });
                let unread_messages_count = 0;
                this.chatGroups.forEach((chat) => {
                    let userLastActive = chat.last_active.filter((la) => la.user['_id'] == this.me._id.toString())[0];
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
                        { last_active: { $elemMatch: { user: id } } },
                        { last_active: { $elemMatch: { user: this.me._id } } },
                        { last_active: { $size: 2 } },
                        { is_group: false },
                    ],
                },
            },
        })
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (data[0])
                for (let item of data[0].last_active) {
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
        chatGroup.managers = [this.me._id];
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
                let chatGroupsString = cg.last_active
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

/***/ 14911:
/*!*******************************************************!*\
  !*** ./src/app/social-media/services/data.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/social-media/services/environment */ 19874);




let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    setHeader() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            authorization: 'IDENTITY ' + localStorage.getItem('socialmedia_spica_token'),
        });
        return header;
    }
    getExplorePosts(limit) {
        return this.http.get(`${src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}/fn-execute/getExplorePosts`, {
            headers: this.setHeader(),
            params: { limit },
        });
    }
    register(user_data) {
        return this.http.post(`${src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}/fn-execute/register`, {
            user_data,
            project: 'SOCIAL_MEDIA',
        });
    }
    setOnline(process, params, user_id) {
        let chatObj = {
            object: process,
            params: params,
            user_id,
        };
        return this.http.post(`${src_app_social_media_services_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}/fn-execute/socialOnline`, chatObj, {
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

/***/ 19874:
/*!******************************************************!*\
  !*** ./src/app/social-media/services/environment.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    project_id: 'spica-starters-7229b',
    api_url: 'https://spica-starters-7229b.hq.spicaengine.com/api',
    public_apikey: 'axfb9k1akx06fe2u',
    production: false,
    webURL: '',
    user_img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61b70351fcfbb9002efed548?alt=media&timestamp=1639383890618',
    languages: [
        { code: 'en', name: 'English' },
        { code: 'tr', name: 'Turkish' },
        { code: 'ru', name: 'Russian' },
    ],
    example_base64: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4957:
/*!*******************************************************!*\
  !*** ./src/app/social-media/services/user.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/bucket */ 63648);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 68965);





let UserService = class UserService {
    constructor(_authService) {
        this._authService = _authService;
        this.followingUsers = [];
        this.followerUsers = [];
        this.sended_requests = [];
        this.$userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.initializeOrm();
    }
    getActiveUser(refresh = false) {
        let result;
        let identity_id = this.getIdentityId();
        if (this.me) {
            result = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.me);
        }
        if (refresh || !this.$userRequest) {
            this.$userRequest = undefined;
            this.initializeOrm();
            this.$userRequest = _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.getAll({
                queryParams: {
                    filter: { identity_id: identity_id },
                },
            })
                .then((res) => {
                this.me = res[0];
                if (this.me)
                    localStorage.setItem('socialmedia_user_id', this.me._id);
            })
                .then(() => this.updateUserLikes())
                .then(() => this.getBlockedUsers())
                .then(() => this.getReportedPosts())
                .then(() => this.updateFollowerAndFollowings())
                .then(() => this.me);
            this.$userRequest.then((result) => {
                this.$userSubject.next(result);
            }, (error) => {
                this.$userSubject.next(null);
            });
        }
        return result || this.$userSubject;
    }
    getUserById(id) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.get(id);
    }
    getUserByIdentity(id) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.user.getAll({ queryParams: { filter: { identity_id: id } } });
    }
    getUserByUsername(username) {
        if (username[0] == '@')
            username = username.substring(1);
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
    updateUserLikes() {
        if (this.me)
            _services_bucket__WEBPACK_IMPORTED_MODULE_0__.liked_post.getAll({
                queryParams: { filter: { user: this.me._id }, relation: 'post' },
            })
                .then((data) => (this.userLikes = data));
    }
    updateFollowerAndFollowings() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_0__.follow.getAll({
            queryParams: {
                filter: {
                    $or: [{ follower: this.me._id }, { following: this.me._id }],
                },
                relation: true,
            },
        })
            .then((data) => {
            data.forEach((item) => {
                if (item.following['_id'] == this.me._id)
                    this.followerUsers.push(item.follower);
                if (item.follower['_id'] == this.me._id)
                    this.followingUsers.push(item.following);
            });
        });
    }
    followUser(user) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.follow.insert({ following: user, follower: this.me._id })
            .then((data) => {
            this.followingUsers.push(user);
            return data;
        })
            .then((data) => data);
    }
    unFollowUser(followEntry) {
        followEntry.following || (followEntry.following = followEntry['user']._id);
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.follow.remove(followEntry._id).then(() => {
            this.followingUsers = this.followingUsers.filter((u) => followEntry.following != u._id);
        });
    }
    isFollowingUser(user) {
        return this.followingUsers.filter((u) => u._id == user._id).length
            ? true
            : false;
    }
    getWaitingRequest(user) {
        let findedItem = this.sended_requests.filter((item) => item.sender == this.me._id && item.reciever == user._id)[0];
        if (findedItem)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([findedItem]).toPromise();
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.waiting_request.getAll({
            queryParams: { filter: { sender: this.me._id, reciever: user._id } },
        })
            .then((data) => (data[0] ? this.sended_requests.push(data[0]) : ''))
            .then((data) => data[0]);
    }
    sendRequest(user) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.waiting_request.insert({
            sender: this.me._id || this.me,
            reciever: user._id || user,
        });
    }
    deleteRequest(id) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.waiting_request.remove(id);
    }
    getAllWaitingRequests() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.waiting_request.getAll({
            queryParams: { filter: { reciever: this.me._id }, relation: 'sender' },
        });
    }
    getAllSendedRequests() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.waiting_request.getAll({
            queryParams: { filter: { sender: this.me._id || this.me } },
        });
    }
    receiveRequest(user, request_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.deleteRequest(request_id);
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_0__.follow.insert({
                following: this.me,
                follower: user,
            });
            this.followerUsers.push(user);
        });
    }
    getBlockedUsers() {
        return this.blockedUsers
            ? this.blockedUsers
            : _services_bucket__WEBPACK_IMPORTED_MODULE_0__.blocked_user.getAll({
                queryParams: {
                    filter: { blocking: this.me._id },
                    relation: 'blocked',
                },
            })
                .then((data) => (this.blockedUsers = data));
    }
    blockUser(user) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.blocked_user.insert({
            blocking: this.me,
            blocked: user,
        })
            .then((data) => {
            data.blocked = user;
            this.blockedUsers.push(data);
        });
    }
    unBlockUser(entry) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.blocked_user.remove(entry._id)
            .then(() => (this.blockedUsers = this.blockedUsers.filter((item) => item._id != entry._id)));
    }
    getReportedPosts() {
        return this.reportedPosts
            ? this.reportedPosts
            : _services_bucket__WEBPACK_IMPORTED_MODULE_0__.reported_post.getAll({
                queryParams: { filter: { user: this.me._id } },
            })
                .then((data) => (this.reportedPosts = data.map((item) => item.post)));
    }
    checkBlockedMe(user) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_0__.blocked_user.getAll({
            queryParams: { filter: { blocked: this.me._id, blocking: user._id } },
        });
    }
    initializeOrm() {
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize)({ identity: localStorage.getItem('socialmedia_spica_token') });
    }
    logOut() {
        this.me = undefined;
        this.$userRequest = undefined;
        localStorage.removeItem('socialmedia_spica_token');
        localStorage.removeItem('socialmedia_user_id');
    }
};
UserService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ 36126:
/*!***************************************************!*\
  !*** ./src/app/social-media/tabs/tabs.service.ts ***!
  \***************************************************/
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



/***/ })

}]);
//# sourceMappingURL=default-src_app_social-media_services_chat_service_ts-src_app_social-media_tabs_tabs_service_ts.js.map