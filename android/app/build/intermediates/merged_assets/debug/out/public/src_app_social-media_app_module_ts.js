(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_app_module_ts"],{

/***/ 32472:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateHttpLoader": () => (/* binding */ TranslateHttpLoader)
/* harmony export */ });
class TranslateHttpLoader {
    constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     */
    getTranslation(lang) {
        return this.http.get(`${this.prefix}${lang}${this.suffix}`);
    }
}

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-translate-http-loader.js.map

/***/ }),

/***/ 93490:
/*!****************************************************!*\
  !*** ./src/app/social-media/app-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaRoutingModule": () => (/* binding */ SocialMediaRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full',
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-node_modules_jwt-decode_build_jwt-decode_esm_js-node_modules_rxjs_internal_operators_-56e401"), __webpack_require__.e("default-src_app_social-media_services_chat_service_ts-src_app_social-media_tabs_tabs_service_ts"), __webpack_require__.e("src_app_social-media_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 40442)).then((m) => m.TabsPageModule),
    },
    {
        path: 'social-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_social-media_components_components_module_ts"), __webpack_require__.e("default-node_modules_jwt-decode_build_jwt-decode_esm_js-node_modules_rxjs_internal_operators_-56e401"), __webpack_require__.e("default-src_app_social-media_services_chat_service_ts-src_app_social-media_tabs_tabs_service_ts"), __webpack_require__.e("default-src_app_social-media_pages_social-profile_social-profile-routing_module_ts-src_app_so-eafae6")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/social-profile/social-profile.module */ 3107)).then((m) => m.SocialProfilePageModule),
    },
];
let SocialMediaRoutingModule = class SocialMediaRoutingModule {
};
SocialMediaRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], SocialMediaRoutingModule);



/***/ }),

/***/ 99012:
/*!********************************************!*\
  !*** ./src/app/social-media/app.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "SocialMediaModule": () => (/* binding */ SocialMediaModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 93490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 45642);










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, '../../assets/social-media/i18n/', '.json');
}
let SocialMediaModule = class SocialMediaModule {
};
SocialMediaModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.SpicaComponentsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.SocialMediaRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient],
                },
                isolate: false,
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        bootstrap: [],
        declarations: [],
        entryComponents: [],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
    })
], SocialMediaModule);



/***/ })

}]);
//# sourceMappingURL=src_app_social-media_app_module_ts.js.map