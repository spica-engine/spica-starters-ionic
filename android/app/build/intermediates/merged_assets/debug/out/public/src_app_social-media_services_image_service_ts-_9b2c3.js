(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_services_image_service_ts-_9b2c3"],{

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



/***/ })

}]);
//# sourceMappingURL=src_app_social-media_services_image_service_ts-_9b2c3.js.map