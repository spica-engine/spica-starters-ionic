(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_app_module_ts"],{

/***/ 33473:
/*!***********************************************!*\
  !*** ./src/app/fitness/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessRoutingModule": () => (/* binding */ FitnessRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_fitness_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 94548)).then(m => m.HomePageModule)
    },
    {
        path: 'teacher-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/teacher-page/teacher-page.module */ 91683)).then(m => m.TeacherPagePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("src_app_fitness_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 14165)).then(m => m.ProfilePageModule)
    },
    {
        path: 'branch-categories',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_fitness_pages_branch-categories_branch-categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/branch-categories/branch-categories.module */ 50823)).then(m => m.BranchCategoriesPageModule)
    },
    {
        path: 'video-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/video-details/video-details.module */ 75184)).then(m => m.VideoDetailsPageModule)
    },
    {
        path: 'trainings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("src_app_fitness_pages_trainings_trainings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/trainings/trainings.module */ 34234)).then(m => m.TrainingsPageModule)
    },
    {
        path: 'watched-videos-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_fitness_pages_watched-videos-page_watched-videos-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/watched-videos-page/watched-videos-page.module */ 69797)).then(m => m.WatchedVideosPagePageModule)
    },
    {
        path: 'food-program',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("src_app_fitness_pages_food-program_food-program_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/food-program/food-program.module */ 76954)).then(m => m.FoodProgramPageModule)
    },
    {
        path: 'food-program-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("src_app_fitness_pages_food-program-detail_food-program-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/food-program-detail/food-program-detail.module */ 23672)).then(m => m.FoodProgramDetailPageModule)
    },
    {
        path: 'categories',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("src_app_fitness_pages_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/categories/categories.module */ 77194)).then(m => m.CategoriesPageModule)
    },
    {
        path: 'buyed-videos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_fitness_pages_buyed-videos_buyed-videos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/buyed-videos/buyed-videos.module */ 11181)).then(m => m.BuyedVideosPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_fitness_services_auth_service_ts"), __webpack_require__.e("src_app_fitness_pages_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 14333)).then(m => m.PaymentPageModule)
    }
];
let FitnessRoutingModule = class FitnessRoutingModule {
};
FitnessRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], FitnessRoutingModule);



/***/ }),

/***/ 47313:
/*!***************************************!*\
  !*** ./src/app/fitness/app.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessModule": () => (/* binding */ FitnessModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 33473);






let FitnessModule = class FitnessModule {
};
FitnessModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        entryComponents: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.FitnessRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [],
    })
], FitnessModule);



/***/ })

}]);
//# sourceMappingURL=src_app_fitness_app_module_ts.js.map