(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_app_module_ts"],{

/***/ 38113:
/*!*********************************************!*\
  !*** ./src/app/forum/app-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumRoutingModule": () => (/* binding */ ForumRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_forum_services_auth_service_ts"), __webpack_require__.e("default-src_app_forum_components_forum-components_module_ts"), __webpack_require__.e("src_app_forum_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 66579)).then((m) => m.HomePageModule),
    },
    // {
    //   path: 'home',
    //   loadChildren: () =>
    //     import('./pages/home/home.module').then((m) => m.HomePageModule),
    // },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_forum_services_auth_service_ts"), __webpack_require__.e("default-src_app_forum_components_forum-components_module_ts"), __webpack_require__.e("src_app_forum_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 5397)).then((m) => m.ProfilePageModule),
    },
    {
        path: 'survey',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_forum_services_auth_service_ts"), __webpack_require__.e("src_app_forum_pages_survey_survey_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/survey/survey.module */ 63655)).then((m) => m.SurveyPageModule),
    },
    {
        path: 'authorization',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_forum_services_auth_service_ts"), __webpack_require__.e("src_app_forum_pages_authorization_authorization_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/authorization/authorization.module */ 52826)).then((m) => m.AuthorizationPageModule),
    },
    {
        path: 'create-forum',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_forum_services_auth_service_ts"), __webpack_require__.e("src_app_forum_pages_create-forum_create-forum_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/create-forum/create-forum.module */ 81144)).then((m) => m.CreateForumPageModule),
    },
    {
        path: 'create-survey',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_forum_services_auth_service_ts"), __webpack_require__.e("src_app_forum_pages_create-survey_create-survey_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/create-survey/create-survey.module */ 15677)).then((m) => m.CreateSurveyPageModule),
    },
];
let ForumRoutingModule = class ForumRoutingModule {
};
ForumRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], ForumRoutingModule);



/***/ }),

/***/ 10020:
/*!*************************************!*\
  !*** ./src/app/forum/app.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumModule": () => (/* binding */ ForumModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 38113);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let ForumModule = class ForumModule {
};
ForumModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForumRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [],
    })
], ForumModule);



/***/ })

}]);
//# sourceMappingURL=src_app_forum_app_module_ts.js.map