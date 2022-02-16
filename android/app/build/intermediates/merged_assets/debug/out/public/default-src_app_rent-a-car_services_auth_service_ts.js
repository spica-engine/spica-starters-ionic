(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_rent-a-car_services_auth_service_ts"],{

/***/ 48248:
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "InvalidTokenError": () => (/* binding */ n)
/* harmony export */ });
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
//# sourceMappingURL=jwt-decode.esm.js.map


/***/ }),

/***/ 18029:
/*!*****************************************************!*\
  !*** ./src/app/rent-a-car/services/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spica-devkit/identity */ 32077);
/* harmony import */ var _bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bucket */ 94596);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 48248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ 26007);









let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        _bucket__WEBPACK_IMPORTED_MODULE_0__.initialize({ apikey: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.apikey });
        _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.initialize({
            publicUrl: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl,
            apikey: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.apikey,
        });
    }
    initBucket() {
        let tokenExpire = localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.EXPIRE_KEY);
        if (tokenExpire && new Date(tokenExpire) < new Date()) {
            localStorage.clear();
        }
        if (localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY)) {
            _bucket__WEBPACK_IMPORTED_MODULE_0__.initialize({
                identity: localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY),
            });
        }
        else {
            _bucket__WEBPACK_IMPORTED_MODULE_0__.initialize({
                apikey: _environment__WEBPACK_IMPORTED_MODULE_2__.environment.apikey,
            });
        }
    }
    login(identifier, password) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(_spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.login(identifier, password)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((token) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY, token);
            let date = new Date();
            date.setDate(date.getDate() + 2); // 2 days later
            localStorage.setItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.EXPIRE_KEY, String(date));
            this.activeToken = token;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.getUser()));
    }
    logout() {
        this.activeUser = undefined;
        localStorage.removeItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY);
    }
    register(user_data) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/register`, {
            user_data,
            project: "RANT-A-CAR"
        })
            .toPromise();
    }
    forgotPassword(identity_id) {
        return this.http
            .get(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/forgot-password?identity_id=${identity_id}`)
            .toPromise();
    }
    sendForgotPasswordEmail(email) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/sendMailForForgotPassword`, {
            email,
        })
            .toPromise();
    }
    changePassword(identity_id, password) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/change-password`, {
            identity_id,
            password,
        })
            .toPromise();
    }
    changeEmail(identity_id, email) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/change-email`, {
            identity_id,
            email,
        })
            .toPromise();
    }
    isUserLoggedIn() {
        return localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY) ? true : false;
    }
    getActiveToken() {
        return this.tokenDecode(localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY));
    }
    tokenDecode(token) {
        if (token)
            return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__.default)(token);
        return false;
    }
    //Gets user info after taking token stored in local storage
    getUser(clean = false) {
        if (this.activeUser && !clean)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.activeUser);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.getActiveToken()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)((token) => token
            ? _bucket__WEBPACK_IMPORTED_MODULE_0__.User.getAll({
                queryParams: { filter: { identity: token._id } },
            })
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([null])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((users) => users[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((user) => (this.activeUser = user)));
    }
    checkCurrentPassword(identifier, password) {
        return _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.login(identifier, password);
    }
    isAuthenticated() {
        let result = true;
        if (localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.EXPIRE_KEY) &&
            new Date() > new Date(localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.EXPIRE_KEY)))
            result = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(result);
    }
    setHeader() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
            authorization: 'IDENTITY ' + localStorage.getItem(_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TOKEN_KEY),
        });
        return header;
    }
    setOnline(process, params, user_id) {
        let chatObj = {
            object: process,
            params: params,
            user_id,
        };
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/dating-online`, chatObj, {
            headers: this.setHeader(),
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ 26007:
/*!****************************************************!*\
  !*** ./src/app/rent-a-car/services/environment.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    apiUrl: "https://asset-playground-05dae.hq.spicaengine.com/api",
    apikey: "fskk1akvi1elv0",
    user_img: "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
    TOKEN_KEY: 'rent-a-car_spica_token',
    EXPIRE_KEY: 'rent-a-car_spica_expire',
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
//# sourceMappingURL=default-src_app_rent-a-car_services_auth_service_ts.js.map