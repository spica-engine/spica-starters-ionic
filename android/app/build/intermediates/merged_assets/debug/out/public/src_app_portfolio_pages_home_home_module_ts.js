(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_portfolio_pages_home_home_module_ts"],{

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

/***/ 12960:
/*!*************************************************************!*\
  !*** ./src/app/portfolio/pages/home/home-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 20551);




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

/***/ 35816:
/*!*****************************************************!*\
  !*** ./src/app/portfolio/pages/home/home.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 12960);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 20551);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 20551:
/*!***************************************************!*\
  !*** ./src/app/portfolio/pages/home/home.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 68014);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 71104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 48045);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 3161);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/environment */ 18552);








let HomePage = class HomePage {
    constructor(_commonService, _authService) {
        this._commonService = _commonService;
        this._authService = _authService;
        this.age = 0;
        this.quantity = 2;
        this.fact = new Array(4);
        this.portfolio = [];
        this.services = [];
        this.reference = [];
        this.forum = {
            name: '',
            email: '',
            phone: '',
            message: '',
        };
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.getUser();
            this.getPortfolio();
            this.getService();
            this.getReference();
        });
    }
    calculateAge(birthday) {
        let month_diff = Date.now() - birthday.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        return age;
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.about_me.get(_services_environment__WEBPACK_IMPORTED_MODULE_5__.environment.userId);
            if (this.user) {
                this.age = this.calculateAge(new Date(this.user.birthday));
            }
        });
    }
    getPortfolio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            _services_bucket__WEBPACK_IMPORTED_MODULE_4__.portfolio.getAll({ queryParams: { limit: this.quantity } })
                .then((res) => {
                this.portfolio = res;
            });
        });
    }
    getService() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            _services_bucket__WEBPACK_IMPORTED_MODULE_4__.service.getAll().then((res) => {
                this.services = res;
            });
        });
    }
    getReference() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            _services_bucket__WEBPACK_IMPORTED_MODULE_4__.reference.getAll().then((res) => {
                this.reference = res;
            });
        });
    }
    loadMore() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.quantity = this.quantity + 2;
            this.getPortfolio();
        });
    }
    sendMessage() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_4__.contact.insert(this.forum)
            .then(() => {
            this.forum = {
                name: '',
                email: '',
                phone: '',
                message: '',
            };
            this._commonService.presentToast('Message sent successfully', 1500);
        })
            .catch((err) => {
            this._commonService.presentToast('Error! Please try later', 1500);
        });
    }
    scroll(el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 48045:
/*!****************************************************!*\
  !*** ./src/app/portfolio/services/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spica-devkit/identity */ 32077);
/* harmony import */ var _bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bucket */ 3161);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 48248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ 18552);









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
        let tokenExpire = localStorage.getItem('spica_expire');
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
            localStorage.setItem('spica_expire', String(date));
            this.activeToken = token;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.getUser()));
    }
    logout() {
        this.activeUser = undefined;
        localStorage.clear();
        return true;
    }
    register(user_data) {
        return this.http
            .post(`${_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/fn-execute/music-register`, {
            user_data,
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
            ? _bucket__WEBPACK_IMPORTED_MODULE_0__.about_me.getAll({
                queryParams: { filter: { identity_id: token._id } },
            })
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([null])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((users) => users[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((user) => (this.activeUser = user)));
    }
    checkCurrentPassword(identifier, password) {
        return _spica_devkit_identity__WEBPACK_IMPORTED_MODULE_3__.login(identifier, password);
    }
    isAuthenticated() {
        let result = true;
        if (localStorage.getItem('spica_expire') &&
            new Date() > new Date(localStorage.getItem('spica_expire')))
            result = false;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(result);
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

/***/ 3161:
/*!**********************************************!*\
  !*** ./src/app/portfolio/services/bucket.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "about_company": () => (/* binding */ about_company),
/* harmony export */   "company_team": () => (/* binding */ company_team),
/* harmony export */   "about_me": () => (/* binding */ about_me),
/* harmony export */   "service": () => (/* binding */ service),
/* harmony export */   "portfolio": () => (/* binding */ portfolio),
/* harmony export */   "blog": () => (/* binding */ blog),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "contact": () => (/* binding */ contact)
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
var comment;
(function (comment) {
    const BUCKET_ID = '61b761ccb7f4a7002e04e20c';
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
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    comment.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    comment.update = update;
    ;
    function patch(document) {
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
var about_company;
(function (about_company) {
    const BUCKET_ID = '61b761cfb7f4a7002e04e210';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    about_company.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    about_company.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    about_company.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    about_company.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    about_company.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    about_company.remove = remove;
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
    })(realtime = about_company.realtime || (about_company.realtime = {}));
})(about_company || (about_company = {}));
var company_team;
(function (company_team) {
    const BUCKET_ID = '61b761d0b7f4a7002e04e212';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    company_team.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    company_team.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    company_team.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    company_team.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    company_team.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    company_team.remove = remove;
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
    })(realtime = company_team.realtime || (company_team.realtime = {}));
})(company_team || (company_team = {}));
var about_me;
(function (about_me) {
    const BUCKET_ID = '61b761d2b7f4a7002e04e215';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    about_me.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    about_me.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    about_me.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    about_me.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    about_me.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    about_me.remove = remove;
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
    })(realtime = about_me.realtime || (about_me.realtime = {}));
})(about_me || (about_me = {}));
var service;
(function (service) {
    const BUCKET_ID = '61b761d4b7f4a7002e04e218';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    service.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    service.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    service.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    service.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    service.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    service.remove = remove;
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
    })(realtime = service.realtime || (service.realtime = {}));
})(service || (service = {}));
var portfolio;
(function (portfolio) {
    const BUCKET_ID = '61b761d6b7f4a7002e04e21b';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    portfolio.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    portfolio.getAll = getAll;
    ;
    function insert(document) {
        ['service'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id ? v._id : v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    portfolio.insert = insert;
    ;
    function update(document) {
        ['service'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id ? v._id : v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    portfolio.update = update;
    ;
    function patch(document) {
        ['service'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id ? v._id : v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    portfolio.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    portfolio.remove = remove;
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
    })(realtime = portfolio.realtime || (portfolio.realtime = {}));
})(portfolio || (portfolio = {}));
var blog;
(function (blog) {
    const BUCKET_ID = '61b761d9b7f4a7002e04e223';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    blog.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    blog.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    blog.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    blog.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    blog.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    blog.remove = remove;
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
    })(realtime = blog.realtime || (blog.realtime = {}));
})(blog || (blog = {}));
var reference;
(function (reference) {
    const BUCKET_ID = '61b761dab7f4a7002e04e226';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    reference.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    reference.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    reference.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    reference.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    reference.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    reference.remove = remove;
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
    })(realtime = reference.realtime || (reference.realtime = {}));
})(reference || (reference = {}));
var contact;
(function (contact) {
    const BUCKET_ID = '61b761dbb7f4a7002e04e229';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    contact.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    contact.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    contact.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    contact.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    contact.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    contact.remove = remove;
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
    })(realtime = contact.realtime || (contact.realtime = {}));
})(contact || (contact = {}));


/***/ }),

/***/ 18552:
/*!***************************************************!*\
  !*** ./src/app/portfolio/services/environment.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    apiUrl: "https://spica-starters-7229b.hq.spicaengine.com/api",
    apikey: "axfb9k1akx06fe2u",
    TOKEN_KEY: 'portfolio_spica_token',
    EXPIRE_KEY: 'portfolio_spica_expire',
    userId: "61b762fdb7f4a7002e04e26f"
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


/***/ }),

/***/ 71104:
/*!*****************************************************!*\
  !*** ./src/app/portfolio/pages/home/home.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .user {\n  background-repeat: no-repeat;\n  background-position: 80%;\n  width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  opacity: 0.8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n:host ion-content .user ion-label h1 {\n  font-size: 35px;\n  font-weight: 600;\n}\n:host ion-content .user ion-label h2 {\n  margin: 8px;\n  color: #656363;\n  font-size: 16px;\n}\n:host ion-content .about,\n:host ion-content .facts,\n:host ion-content .skills,\n:host ion-content .portfolio,\n:host ion-content .services,\n:host ion-content .testimonials,\n:host ion-content .contact {\n  padding: 0 20px;\n  margin: 50px 0;\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .about .section-title,\n:host ion-content .facts .section-title,\n:host ion-content .skills .section-title,\n:host ion-content .portfolio .section-title,\n:host ion-content .services .section-title,\n:host ion-content .testimonials .section-title,\n:host ion-content .contact .section-title {\n  align-self: center;\n  font-weight: 600;\n  font-size: 25px;\n  padding-bottom: 8px;\n}\n:host ion-content .about .primary-text,\n:host ion-content .facts .primary-text,\n:host ion-content .skills .primary-text,\n:host ion-content .portfolio .primary-text,\n:host ion-content .services .primary-text,\n:host ion-content .testimonials .primary-text,\n:host ion-content .contact .primary-text {\n  text-align: center;\n  color: #656363;\n  margin-bottom: 4px;\n}\n:host ion-content .about img {\n  width: 100%;\n  margin: 15px 0;\n}\n:host ion-content .about ion-label {\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .about ion-label p {\n  color: #515151;\n  font-size: 16px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n:host ion-content .about ion-label span {\n  margin: 5px 0;\n  display: flex;\n}\n:host ion-content .about ion-label span b {\n  margin-right: 10px;\n}\n:host ion-content .facts .facts-features {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n:host ion-content .facts .facts-features ion-icon {\n  margin-top: 20px;\n  font-size: 35px;\n  background: #0567c9;\n  border-radius: 50%;\n  color: white;\n  width: 30px;\n  height: 30px;\n  padding: 10px;\n}\n:host ion-content .facts .facts-features h2 {\n  font-weight: 600;\n  font-size: 35px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n:host ion-content .facts .facts-features h6 {\n  margin-top: 0px;\n}\n:host ion-content .skills ion-label {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-content .skills ion-label p {\n  color: #373636;\n  font-weight: 650;\n  font-size: 14px;\n  margin: 0 10px 0 10px;\n}\n:host ion-content .skills .skill-percent {\n  width: 96%;\n  height: 12px;\n  background: #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host ion-content .skills .skill-percent .percent {\n  height: 12px;\n  background: #5555ee;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n:host ion-content .portfolio ion-segment {\n  margin-top: 60px;\n}\n:host ion-content .portfolio ion-segment ion-segment-button {\n  --color-checked: rgb(95, 95, 255);\n}\n:host ion-content .portfolio ion-card {\n  position: relative;\n  max-height: 300px;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  --background: white;\n  padding: 0 !important;\n}\n:host ion-content .portfolio ion-card img {\n  min-width: 100%;\n}\n:host ion-content .portfolio ion-card p {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 10px;\n  font-weight: 700;\n  color: #ffffff;\n  font-size: 20px;\n  margin-left: 10px;\n}\n:host ion-content .portfolio ion-button {\n  width: 50%;\n  margin-left: 25%;\n}\n:host ion-content .services ion-card {\n  min-height: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n:host ion-content .services ion-card ion-avatar {\n  width: 100px;\n  height: 100px;\n  padding: 6px;\n  background-color: #0567c9;\n}\n:host ion-content .services ion-card ion-card-content {\n  text-align: center;\n}\n:host ion-content .testimonials ion-slides ion-slide ion-card {\n  min-height: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content .testimonials ion-slides ion-slide ion-card ion-avatar {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 15px;\n}\n:host ion-content .testimonials ion-slides ion-slide ion-card ion-avatar img {\n  width: 100%;\n  height: 100%;\n}\n:host ion-content .testimonials ion-slides ion-slide ion-card ion-label :first-child {\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n:host ion-content .testimonials ion-slides ion-slide ion-card ion-label :last-child {\n  color: #656363;\n  margin-top: 30px;\n  font-size: 17px;\n  margin: 20px;\n}\n:host ion-content .contact ion-icon {\n  font-size: 20px;\n  background: #edf6ff;\n  border-radius: 50%;\n  color: #257ed1;\n  width: 25px;\n  height: 25px;\n  padding: 10px;\n  margin-right: 0.7rem;\n}\n:host ion-content .contact ion-icon:hover {\n  color: white;\n  background: #0567c9;\n}\n:host ion-content .contact ion-item {\n  margin-top: 20px;\n  font-family: \"Dongle\", sans-serif;\n}\n:host ion-content .contact ion-item .input {\n  --padding-start: 10px;\n  width: 90%;\n  border-radius: 5px;\n  border: 1px solid #ced4da;\n}\n:host ion-content .contact ion-item .input:hover {\n  border: 1px solid #86b7fe;\n}\n:host ion-content .contact ion-item ion-textarea {\n  height: 100px;\n}\n:host ion-content .contact ion-button {\n  width: 45%;\n  height: 40px;\n  margin-top: 20px;\n  --border-radius: 70px;\n  margin-left: 28%;\n}\n:host ion-footer {\n  width: 100%;\n  height: 250px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n:host ion-footer ion-toolbar {\n  margin-bottom: 80px;\n}\n:host ion-footer ion-toolbar b {\n  color: #45505b;\n  font-size: 1.5rem;\n}\n:host ion-footer ion-toolbar p {\n  color: gray;\n  font-style: italic;\n  font-family: \"Open Sans\", sans-serif;\n}\n:host ion-footer .socical-media {\n  width: 50%;\n}\n:host ion-footer span {\n  padding: 15px;\n  font-size: 0.9rem;\n  font-family: \"Open Sans\", sans-serif;\n  color: gray;\n}\n:host .line {\n  width: 38%;\n  border-bottom: 2px solid;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  position: relative;\n  color: #dcdcdc;\n  z-index: -1;\n}\n:host .line .inner-line {\n  width: 30%;\n  border-bottom: 2px solid;\n  margin-left: 35%;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  color: purple;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUdRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRFY7QUFHUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURWO0FBTUk7Ozs7Ozs7RUFPRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUpOO0FBTU07Ozs7Ozs7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFDTTs7Ozs7OztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBT1I7QUFGTTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBSVI7QUFGTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUlSO0FBSFE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFLVjtBQUhRO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFLVjtBQUpVO0VBQ0Usa0JBQUE7QUFNWjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUFRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFVjtBQUFRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVWO0FBQVE7RUFDRSxlQUFBO0FBRVY7QUFHTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRFI7QUFFUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUFWO0FBR007RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBRVE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBQVY7QUFLTTtFQUNFLGdCQUFBO0FBSFI7QUFJUTtFQUNFLGlDQUFBO0FBRlY7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFIUjtBQUlRO0VBQ0UsZUFBQTtBQUZWO0FBSVE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRlY7QUFLTTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhSO0FBT007RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFMUjtBQU1RO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFKVjtBQU1RO0VBQ0Usa0JBQUE7QUFKVjtBQVdVO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVFo7QUFVWTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFSZDtBQVNjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFQaEI7QUFXYztFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVRoQjtBQVdjO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFUaEI7QUFpQk07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQWZSO0FBaUJNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBZlI7QUFpQk07RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0FBZlI7QUFnQlE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBZFY7QUFnQlE7RUFDRSx5QkFBQTtBQWRWO0FBZ0JRO0VBQ0UsYUFBQTtBQWRWO0FBaUJNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFmUjtBQW9CRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFsQko7QUFtQkk7RUFDRSxtQkFBQTtBQWpCTjtBQWtCTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQWhCUjtBQWtCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBaEJSO0FBbUJJO0VBQ0UsVUFBQTtBQWpCTjtBQW1CSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQWpCTjtBQXFCRTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBbkJKO0FBb0JJO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQk4iLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAudXNlciB7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2IoMTAxLCA5OSwgOTkpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hYm91dCxcbiAgICAuZmFjdHMsXG4gICAgLnNraWxscyxcbiAgICAucG9ydGZvbGlvLFxuICAgIC5zZXJ2aWNlcyxcbiAgICAudGVzdGltb25pYWxzLFxuICAgIC5jb250YWN0IHtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIC5zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5wcmltYXJ5LXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiByZ2IoMTAxLCA5OSwgOTkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFib3V0IHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgIH1cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiByZ2IoODEsIDgxLCA4MSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmFjdHMge1xuICAgICAgLmZhY3RzLWZlYXR1cmVzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1LCAxMDMsIDIwMSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNraWxscyB7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHAge1xuICAgICAgICAgIGNvbG9yOiByZ2IoNTUsIDU0LCA1NCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDY1MDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2tpbGwtcGVyY2VudCB7XG4gICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgLnBlcmNlbnQge1xuICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODUsIDg1LCAyMzgpO1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5wb3J0Zm9saW8ge1xuICAgICAgaW9uLXNlZ21lbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogcmdiKDk1LCA5NSwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWNhcmQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VydmljZXMge1xuICAgICAgaW9uLWNhcmQge1xuICAgICAgICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTAzLCAyMDEpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudGVzdGltb25pYWxzIHtcbiAgICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAxLCA5OSwgOTkpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY29udGFjdCB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VkZjZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjb2xvcjogIzI1N2VkMTtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gICAgICB9XG4gICAgICBpb24taWNvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDUsIDEwMywgMjAxKTtcbiAgICAgIH1cbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRG9uZ2xlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0OmhvdmVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODZiN2ZlO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA3MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjglO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIGIge1xuICAgICAgICBjb2xvcjogIzQ1NTA1YjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgfVxuICAgIC5zb2NpY2FsLW1lZGlhIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gIH1cblxuICAubGluZSB7XG4gICAgd2lkdGg6IDM4JTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI2RjZGNkYztcbiAgICB6LWluZGV4OiAtMTtcbiAgICAuaW5uZXItbGluZSB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBjb2xvcjogcHVycGxlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 68014:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/pages/home/home.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <ng-container *ngIf=\"user\">\n    <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button color=\"light\" class=\"menu-button\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"light\" >\n          <ion-icon name=\"home\" (click)=\"scroll(usersection)\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\"  (click)=\"scroll(aboutsection)\">\n          <ion-icon name=\"person\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\"  (click)=\"scroll(factssection)\">\n          <ion-icon name=\"ribbon\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" (click)=\"scroll(portfoliosection)\">\n          <ion-icon name=\"apps\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\" (click)=\"scroll(contactsection)\">\n          <ion-icon name=\"mail\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    <div class=\"user\" #usersection [ngStyle]=\"{'background-image': 'url(&quot;' + user.images[1] + '&quot;)'}\">\n      <ion-label>\n        <h1>{{user.name}} {{user.surname}}</h1>\n        <h2>I'm <strong>{{user.jobs}}</strong></h2>\n      </ion-label>\n    </div>\n  \n    <div class=\"about\" #aboutsection>\n      <ion-label>\n        <span class=\"section-title\">About</span>\n        <div class=\"line\">\n          <div class=\"inner-line\"></div>\n        </div>\n        <span class=\"primary-text\">{{user.bio}}</span>\n      </ion-label>\n      <img [src]=\"user.images[0]\">\n      <ion-label>\n        <span><b>Birthday:</b> {{user.birthday | date: 'MM/dd/yyyy'}}</span>\n        <span><b>Phone:</b> {{user.phone}}</span>\n        <!-- <span><b>City:</b> {{user.location}}</span> -->\n        <span><b>Age:</b> {{age}}</span>\n        <span><b>Mail:</b> {{user.mail}}</span>\n      </ion-label>\n    </div>\n  \n    <div class=\"facts\" #factssection >\n      <span class=\"section-title\">Facts</span>\n      <div class=\"line\"><div class=\"inner-line\"></div></div>\n      <span class=\"primary-text\">{{user.about_facts}}</span>\n      <ion-label class=\"facts-features\"  *ngFor=\"let fact of user.facts\">\n        <ion-icon name=\"happy-outline\"></ion-icon>\n        <h2>{{fact.count}}</h2>\n        <h6>{{fact.name}}</h6>\n      </ion-label>\n    </div>\n    \n    <div class=\"skills\" id=\"skills\">\n      <span class=\"section-title\">Skills</span>\n      <div class=\"line\"><div class=\"inner-line\"></div></div>\n      <div *ngFor=\"let skill of user.skills\">\n        <ion-label>\n          <p>{{skill.name}}</p>\n          <p>{{skill.percent}}%</p>\n        </ion-label>\n        <div class=\"skill-percent\">\n          <div class=\"percent\" [ngStyle]=\"{'width': skill.percent+'%'}\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"portfolio\" #portfoliosection>\n      <span class=\"section-title\">Portfolio</span>\n      <div class=\"line\"><div class=\"inner-line\"></div></div>\n      <span class=\"primary-text\">{{user.about_portfolio}}</span>\n      <ion-segment value=\"all\">\n        <ion-segment-button value=\"all\">\n          <ion-label>All</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"app\">\n          <ion-label>App</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"card\">\n          <ion-label>Card</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"web\">\n          <ion-label>Web</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <ion-card *ngFor=\"let item of portfolio\">\n        <a [href]=\"item.url\">\n        <img [src]=\"item.image\">\n        <p>{{item.name}}</p>\n        </a>\n      </ion-card>\n      <ion-button (click)=\"loadMore()\">Load More</ion-button>\n    </div>\n\n    <div class=\"services\" id=\"services\">\n      <span class=\"section-title\">Services</span>\n      <div class=\"line\"><div class=\"inner-line\"></div></div>\n      <span class=\"primary-text\">{{user.about_services}}</span>\n      <ion-card *ngFor=\"let service of services\">\n        <ion-avatar>\n          <img [src]=\"service.image\">\n        </ion-avatar>\n        <ion-card-header>\n          <ion-card-title>{{service.name}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>{{service.description}}</ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"testimonials\" id=\"testimonials\">\n      <span class=\"section-title\">Testimonials</span>\n      <div class=\"line\"><div class=\"inner-line\"></div></div>\n      <ion-slides>\n        <ion-slide *ngFor=\"let testimonials of reference\">\n          <ion-card>\n            <ion-avatar>\n              <img [src]=\"testimonials.profile_picture\">\n            </ion-avatar>\n            <ion-label>\n              <ion-card-title>{{testimonials.name}}</ion-card-title>\n              <p>{{testimonials.position}}</p>\n              <p>{{testimonials.message}}</p>\n            </ion-label>\n            \n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"contact\" #contactsection>\n      <span class=\"section-title\">Contact</span>\n      <div class=\"line\"><div class=\"inner-line\"></div></div>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"location-outline\"></ion-icon>\n        <ion-label>\n          <h3>Location:</h3>\n          <p>{{user.location}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"mail-outline\"></ion-icon>\n        <ion-label>\n          <h2>Email:</h2>\n          <p>{{user.mail}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"phone-portrait-outline\"></ion-icon>\n        <ion-label>\n          <h3>Call:</h3>\n          <p>{{user.phone}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input class=\"input\" placeholder=\"Your Name\" [(ngModel)]=\"forum.name\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input class=\"input\" placeholder=\"Your Email\" [(ngModel)]=\"forum.email\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-input class=\"input\" placeholder=\"Phone\" [(ngModel)]=\"forum.phone\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-textarea class=\"input\" placeholder=\"Message\" [(ngModel)]=\"forum.message\"></ion-textarea>\n      </ion-item>\n      <section>\n        <ion-button (click)=\"sendMessage()\" [disabled]=\"!forum.name || !forum.email || !forum.phone || !forum.message\">Send Message</ion-button>\n      </section>\n    </div>\n\n    <ion-footer class=\"ion-no-border\">\n      <ion-toolbar>\n        <b>{{user.name}} {{user.surname}}</b>\n        <p>{{user.bio}}</p>\n      </ion-toolbar>\n      <div class=\"socical-media\">\n        <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\" activated=\"true\">\n          <ion-fab-button>\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-list side=\"end\">\n            <ion-fab-button \n              color=\"light\" \n              *ngFor=\"let media of user.social_medias\"\n              [href]=\"media.url\">\n              <ion-icon name=\"logo-{{media.name.toLowerCase()}}\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab-list>\n        </ion-fab>\n      </div>\n  \n    </ion-footer>\n  </ng-container>  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_portfolio_pages_home_home_module_ts.js.map