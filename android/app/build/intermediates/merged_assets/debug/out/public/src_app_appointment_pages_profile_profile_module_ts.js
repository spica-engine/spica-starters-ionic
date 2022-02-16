(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_appointment_pages_profile_profile_module_ts"],{

/***/ 88032:
/*!*********************************************************************!*\
  !*** ./src/app/appointment/pages/profile/profile-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 74048);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 79849:
/*!*************************************************************!*\
  !*** ./src/app/appointment/pages/profile/profile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 88032);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 74048);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 74048:
/*!***********************************************************!*\
  !*** ./src/app/appointment/pages/profile/profile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 28114);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 14769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 8142);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 17308);
/* harmony import */ var src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/social-media/services/image.service */ 70251);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/environment */ 66346);








let ProfilePage = class ProfilePage {
    constructor(_authService, _imageService) {
        this._authService = _authService;
        this._imageService = _imageService;
        this.listItems = [];
        this.isLoading = true;
        this._authService.initBucket();
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.user = yield this._authService.getUser().toPromise();
            this.listItems = [
                { key: 'username', value: '', seperate: true },
                { key: 'name', value: '', seperate: true },
                { key: 'surname', value: '', seperate: true },
            ];
            this.listItems.forEach((item) => (item.value = this.user[item.key] ? this.user[item.key] : ''));
            this.isLoading = false;
        });
    }
    logout() {
        this.isLoading = true;
        this._authService.logout();
    }
    imageChange(data) {
        let mimetype = data.split(';')[0].split(':')[1];
        let file_buf = this._imageService.toBuffer(data);
        let bufWithMeta = {
            contentType: mimetype,
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.user.picture &&
            this.user.picture.includes(_services_environment__WEBPACK_IMPORTED_MODULE_5__.environment.project_id)) {
            let splitArr = this.user.picture.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this._imageService.insert(bufWithMeta, imageId).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user.picture = res.url + `&timestamp=${new Date().getTime()}`;
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.employee.patch({
                _id: this.user._id,
                picture: this.user.picture,
            });
        }));
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



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

/***/ 70251:
/*!********************************************************!*\
  !*** ./src/app/social-media/services/image.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _spica_devkit_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spica-devkit/storage */ 66840);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ 19874);




let ImageService = class ImageService {
    constructor() { }
    init() {
        let initializeConfig;
        if (localStorage.getItem('socialmedia_spica_token')) {
            initializeConfig = {
                publicUrl: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url,
                identity: localStorage.getItem('socialmedia_spica_token'),
            };
        }
        else {
            initializeConfig = {
                publicUrl: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url,
                apikey: _environment__WEBPACK_IMPORTED_MODULE_0__.environment.public_apikey,
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

/***/ 14769:
/*!*************************************************************!*\
  !*** ./src/app/appointment/pages/profile/profile.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .button-container {\n  width: 100%;\n  display: flex;\n  margin-top: 15px;\n}\n:host .button-container .logout {\n  width: 120px;\n  margin: auto;\n  --background: rgb(170, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURSO0FBRVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBQVoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcblxuICAgIC5idXR0b24tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgLmxvZ291dHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDE3MCwgMCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 28114:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/pages/profile/profile.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <spica-user-profile-picture\n    *ngIf=\"!isLoading\"\n    [imageEditable]=\"true\"\n    [image]=\"user?.picture\"\n    (changeImage)=\"imageChange($event)\"\n  ></spica-user-profile-picture>\n  <spica-item-list\n    *ngIf=\"listItems.length>0 && !isLoading\"\n    [items]=\"listItems\"\n    (logout)=\"logout()\"\n  ></spica-item-list>\n\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n  <!-- <div class=\"button-container\">\n    <ion-button class=\"logout\" (click)=\"logout()\">Log Out</ion-button>\n  </div> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_appointment_pages_profile_profile_module_ts.js.map