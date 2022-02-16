(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_branch-categories_branch-categories_module_ts"],{

/***/ 64801:
/*!*************************************************************************************!*\
  !*** ./src/app/fitness/pages/branch-categories/branch-categories-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchCategoriesPageRoutingModule": () => (/* binding */ BranchCategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _branch_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-categories.page */ 51671);




const routes = [
    {
        path: ':id',
        children: [
            { path: '', component: _branch_categories_page__WEBPACK_IMPORTED_MODULE_0__.BranchCategoriesPage, },
            {
                path: 'teacher-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../teacher-page/teacher-page.module */ 91683)).then(m => m.TeacherPagePageModule)
            },
            {
                path: 'video-details',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../video-details/video-details.module */ 75184)).then(m => m.VideoDetailsPageModule)
            },
        ]
    },
];
let BranchCategoriesPageRoutingModule = class BranchCategoriesPageRoutingModule {
};
BranchCategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BranchCategoriesPageRoutingModule);



/***/ }),

/***/ 50823:
/*!*****************************************************************************!*\
  !*** ./src/app/fitness/pages/branch-categories/branch-categories.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchCategoriesPageModule": () => (/* binding */ BranchCategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _branch_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-categories-routing.module */ 64801);
/* harmony import */ var _branch_categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-categories.page */ 51671);
/* harmony import */ var _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/fitness-components.module */ 88613);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let BranchCategoriesPageModule = class BranchCategoriesPageModule {
};
BranchCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _branch_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.BranchCategoriesPageRoutingModule,
            _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_2__.FitnessComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_branch_categories_page__WEBPACK_IMPORTED_MODULE_1__.BranchCategoriesPage]
    })
], BranchCategoriesPageModule);



/***/ }),

/***/ 51671:
/*!***************************************************************************!*\
  !*** ./src/app/fitness/pages/branch-categories/branch-categories.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchCategoriesPage": () => (/* binding */ BranchCategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_branch_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./branch-categories.page.html */ 30527);
/* harmony import */ var _branch_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-categories.page.scss */ 81133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 86629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 43443);







let BranchCategoriesPage = class BranchCategoriesPage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.videos = yield this.getVideos();
            this.categoryName = (_a = this.videos[0]) === null || _a === void 0 ? void 0 : _a.category;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.id = this._route.snapshot.params.id;
        });
    }
    getVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.video.getAll({ queryParams: { filter: { category: this.id }, relation: true } });
        });
    }
};
BranchCategoriesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
BranchCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-branch-categories',
        template: _raw_loader_branch_categories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_branch_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BranchCategoriesPage);



/***/ }),

/***/ 81133:
/*!*****************************************************************************!*\
  !*** ./src/app/fitness/pages/branch-categories/branch-categories.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2gtY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 30527:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/branch-categories/branch-categories.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\" defaultHref=\"/\"></ion-back-button>\n    <ion-title>{{categoryName?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-video-card [user]=\"user\" [video]=\"video\" *ngFor=\"let video of videos\"></app-video-card>\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"!videos\"></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_branch-categories_branch-categories_module_ts.js.map