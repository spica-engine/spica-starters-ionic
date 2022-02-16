(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_real-estate_services_auth_service_ts"],{

/***/ 56010:
/*!******************************************************!*\
  !*** ./src/app/real-estate/services/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spica-devkit/identity */ 32077);
/* harmony import */ var _bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bucket */ 82766);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ 34779);






let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        _bucket__WEBPACK_IMPORTED_MODULE_0__.initialize({ apikey: _environment__WEBPACK_IMPORTED_MODULE_1__.environment.apikey });
        _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_2__.initialize({
            publicUrl: _environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl,
            apikey: _environment__WEBPACK_IMPORTED_MODULE_1__.environment.apikey,
        });
    }
    initBucket() {
        let tokenExpire = localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_1__.environment.EXPIRE_KEY);
        if (tokenExpire && new Date(tokenExpire) < new Date()) {
            localStorage.clear();
        }
        if (localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TOKEN_KEY)) {
            _bucket__WEBPACK_IMPORTED_MODULE_0__.initialize({
                identity: localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_1__.environment.TOKEN_KEY),
            });
        }
        else {
            _bucket__WEBPACK_IMPORTED_MODULE_0__.initialize({
                apikey: _environment__WEBPACK_IMPORTED_MODULE_1__.environment.apikey,
            });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 82766:
/*!************************************************!*\
  !*** ./src/app/real-estate/services/bucket.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "adverst": () => (/* binding */ adverst),
/* harmony export */   "usefull_link": () => (/* binding */ usefull_link),
/* harmony export */   "announcement": () => (/* binding */ announcement),
/* harmony export */   "consultant": () => (/* binding */ consultant),
/* harmony export */   "category": () => (/* binding */ category),
/* harmony export */   "about_us": () => (/* binding */ about_us)
/* harmony export */ });
/* harmony import */ var _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spica-devkit/bucket */ 14760);

/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
function initialize(...initOptions) {
    initOptions[0].publicUrl =
        'https://spica-starters-7229b.hq.spicaengine.com/api';
    _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize(...initOptions);
}
var adverst;
(function (adverst) {
    const BUCKET_ID = '61b9f84cd6bd39002e927a71';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    adverst.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    adverst.getAll = getAll;
    function insert(document) {
        ['consultant', 'categories'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    adverst.insert = insert;
    function update(document) {
        ['consultant', 'categories'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    adverst.update = update;
    function patch(document) {
        ['consultant', 'categories'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    adverst.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    adverst.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = adverst.realtime || (adverst.realtime = {}));
})(adverst || (adverst = {}));
var usefull_link;
(function (usefull_link) {
    const BUCKET_ID = '61b9f84ed6bd39002e927a73';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    usefull_link.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    usefull_link.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    usefull_link.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    usefull_link.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    usefull_link.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    usefull_link.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = usefull_link.realtime || (usefull_link.realtime = {}));
})(usefull_link || (usefull_link = {}));
var announcement;
(function (announcement) {
    const BUCKET_ID = '61b9f850d6bd39002e927a77';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    announcement.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    announcement.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    announcement.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    announcement.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    announcement.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    announcement.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = announcement.realtime || (announcement.realtime = {}));
})(announcement || (announcement = {}));
var consultant;
(function (consultant) {
    const BUCKET_ID = '61b9f849d6bd39002e927a6d';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    consultant.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    consultant.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    consultant.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    consultant.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    consultant.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    consultant.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = consultant.realtime || (consultant.realtime = {}));
})(consultant || (consultant = {}));
var category;
(function (category) {
    const BUCKET_ID = '61b9f853d6bd39002e927a79';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    category.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    category.getAll = getAll;
    function insert(document) {
        ['sub_categories'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    category.insert = insert;
    function update(document) {
        ['sub_categories'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    category.update = update;
    function patch(document) {
        ['sub_categories'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    category.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    category.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = category.realtime || (category.realtime = {}));
})(category || (category = {}));
var about_us;
(function (about_us) {
    const BUCKET_ID = '61bc406b0ba24b002d1974cf';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    about_us.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    about_us.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    about_us.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    about_us.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    about_us.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    about_us.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = about_us.realtime || (about_us.realtime = {}));
})(about_us || (about_us = {}));


/***/ }),

/***/ 34779:
/*!*****************************************************!*\
  !*** ./src/app/real-estate/services/environment.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    apiUrl: "https://spica-starters-7229b.hq.spicaengine.com/api",
    apikey: "axfb9k1akx06fe2u",
    user_img: "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
    play_list_img: "https://ak.picdn.net/shutterstock/videos/1027045601/thumb/1.jpg?ip=x480",
    TOKEN_KEY: 'music-streaming_spica_token',
    EXPIRE_KEY: 'music-streaming_spica_expire',
};


/***/ }),

/***/ 32077:
/*!************************************************************!*\
  !*** ./node_modules/@spica-devkit/identity/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "initialize": () => (/* binding */ initialize$1),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "policy": () => (/* binding */ policy),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "update": () => (/* binding */ update),
/* harmony export */   "verifyToken": () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ 28686);


function logWarning(response) {
    const warning = response.headers["warning"];
    if (warning) {
        console.warn(warning);
    }
}
class Axios {
    constructor(config) {
        this.interceptors = {
            request: {
                onFulfilled: (request) => {
                    if (!request.headers["Authorization"]) {
                        throw new Error("You should call initialize method with a valid apikey or identity token.");
                    }
                    return request;
                },
                onRejected: (error) => {
                    return Promise.reject(error);
                }
            },
            response: {
                onFulfilled: (response) => {
                    logWarning(response);
                    return response.data;
                },
                onRejected: (error) => {
                    return Promise.reject(error.response ? error.response.data : error);
                }
            }
        };
        this.instance = axios__WEBPACK_IMPORTED_MODULE_0__.create(config);
        this.instance.interceptors.request.use(this.interceptors.request.onFulfilled, this.interceptors.request.onRejected);
        this.instance.interceptors.response.use(this.interceptors.response.onFulfilled, this.interceptors.response.onRejected);
        this.baseUrl = this.instance.defaults.baseURL;
    }
    setBaseUrl(url) {
        this.instance.defaults.baseURL = url;
    }
    setWriteDefaults(writeDefaults) {
        for (const [header, value] of Object.entries(writeDefaults.headers)) {
            this.instance.defaults.headers.post[header] = value;
            this.instance.defaults.headers.put[header] = value;
        }
    }
    setAuthorization(authorization) {
        this.instance.defaults.headers["Authorization"] = authorization;
    }
    get(url, config) {
        return this.instance.get(url, config);
    }
    post(url, body, config) {
        return this.instance.post(url, body, config);
    }
    put(url, body, config) {
        return this.instance.put(url, body, config);
    }
    patch(url, body, config) {
        return this.instance.patch(url, body, config);
    }
    delete(url, config) {
        return this.instance.delete(url, config);
    }
}

let service;
function initialize(options) {
    let authorization;
    if ("apikey" in options) {
        authorization = `APIKEY ${options.apikey}`;
    }
    else if ("identity" in options) {
        authorization = `IDENTITY ${options.identity}`;
    }
    checkInitialized(authorization);
    const publicUrl = options.publicUrl || getPublicUrl();
    if (!publicUrl) {
        throw new Error("Public url must be provided.");
    }
    if (!service) {
        service = new Axios({ baseURL: publicUrl, headers: { Authorization: authorization } });
    }
    else {
        service.setBaseUrl(publicUrl);
        service.setAuthorization(authorization);
    }
    return { authorization, publicUrl, service };
}
function checkInitialized(authorization) {
    if (!authorization) {
        throw new Error("You should call initialize method with a valid apikey or identity token.");
    }
}
function getPublicUrl() {
    return isPlatformBrowser() ? undefined : process.env.__INTERNAL__SPICA__PUBLIC_URL__;
}
function isPlatformBrowser() {
    return typeof window !== "undefined";
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let authorization;
let service$1;
const identitySegment = "passport/identity";
function initialize$1(options) {
    const { authorization: _authorization, service: _service } = initialize(options);
    authorization = _authorization;
    service$1 = _service;
    service$1.setWriteDefaults({
        headers: {
            "Content-Type": "application/json"
        }
    });
}
function verifyToken(token, baseUrl) {
    const _baseUrl = baseUrl ? baseUrl : service$1 ? service$1.baseUrl : undefined;
    if (!_baseUrl) {
        throw new Error("You should pass the base url of the server or call the initialize method.");
    }
    const req = new Axios({ baseURL: _baseUrl });
    return req.get(`${identitySegment}/verify`, { headers: { Authorization: token } });
}
function login(identifier, password, tokenLifeSpan) {
    checkInitialized(authorization);
    return service$1
        .post("/passport/identify", {
        identifier,
        password,
        expires: tokenLifeSpan
    })
        .then(response => response.token);
}
function get(id) {
    checkInitialized(authorization);
    return service$1.get(`${identitySegment}/${id}`);
}
function getAll(queryParams = {}) {
    checkInitialized(authorization);
    return service$1.get(identitySegment, {
        params: queryParams
    });
}
function insert(identity) {
    return __awaiter(this, void 0, void 0, function* () {
        checkInitialized(authorization);
        const insertedIdentity = yield service$1.post(identitySegment, identity);
        return policy.attach(insertedIdentity._id, identity.policies).then(policies => {
            insertedIdentity.policies = policies;
            return insertedIdentity;
        });
    });
}
function update(id, identity) {
    checkInitialized(authorization);
    return service$1.put(`${identitySegment}/${id}`, identity);
}
function remove(id) {
    checkInitialized(authorization);
    return service$1.delete(`${identitySegment}/${id}`);
}
// policy attach detach
var policy;
(function (policy) {
    function attach(identityId, policyIds = []) {
        checkInitialized(authorization);
        const promises = [];
        const attachedPolicies = new Set();
        for (const policyId of policyIds) {
            const promise = service$1
                .put(`${identitySegment}/${identityId}/policy/${policyId}`, {})
                .then(() => attachedPolicies.add(policyId))
                .catch(e => {
                console.error(`Failed to attach policy with id ${policyId}: `, e);
                return e;
            });
            promises.push(promise);
        }
        return Promise.all(promises).then(() => Array.from(attachedPolicies));
    }
    policy.attach = attach;
    function detach(identityId, policyIds = []) {
        checkInitialized(authorization);
        const promises = [];
        const detachedPolicies = new Set();
        for (const policyId of policyIds) {
            const promise = service$1
                .delete(`${identitySegment}/${identityId}/policy/${policyId}`)
                .then(() => detachedPolicies.add(policyId))
                .catch(e => {
                console.error(`Failed to detach policy with id ${policyId}: `, e);
                return e;
            });
            promises.push(promise);
        }
        return Promise.all(promises).then(() => Array.from(detachedPolicies));
    }
    policy.detach = detach;
})(policy || (policy = {}));


//# sourceMappingURL=index.mjs.map


/***/ })

}]);
//# sourceMappingURL=default-src_app_real-estate_services_auth_service_ts.js.map