(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_food-program_food-program_module_ts"],{

/***/ 93489:
/*!***************************************************************************!*\
  !*** ./src/app/fitness/pages/food-program/food-program-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodProgramPageRoutingModule": () => (/* binding */ FoodProgramPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _food_program_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-program.page */ 31196);




const routes = [
    {
        path: ':id',
        component: _food_program_page__WEBPACK_IMPORTED_MODULE_0__.FoodProgramPage
    }
];
let FoodProgramPageRoutingModule = class FoodProgramPageRoutingModule {
};
FoodProgramPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoodProgramPageRoutingModule);



/***/ }),

/***/ 76954:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/food-program/food-program.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodProgramPageModule": () => (/* binding */ FoodProgramPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _food_program_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-program-routing.module */ 93489);
/* harmony import */ var _food_program_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-program.page */ 31196);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let FoodProgramPageModule = class FoodProgramPageModule {
};
FoodProgramPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _food_program_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodProgramPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_food_program_page__WEBPACK_IMPORTED_MODULE_1__.FoodProgramPage]
    })
], FoodProgramPageModule);



/***/ }),

/***/ 31196:
/*!*****************************************************************!*\
  !*** ./src/app/fitness/pages/food-program/food-program.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodProgramPage": () => (/* binding */ FoodProgramPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_food_program_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food-program.page.html */ 44131);
/* harmony import */ var _food_program_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-program.page.scss */ 82225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 86629);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 43443);







let FoodProgramPage = class FoodProgramPage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.foodProgram = yield this.getFoodProgram();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this._route.snapshot.params.id;
            this.foodProgram = yield this.getFoodProgram();
        });
    }
    getFoodProgram() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.food_program.getAll({ queryParams: { filter: { user: this.id }, relation: true } });
        });
    }
};
FoodProgramPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
FoodProgramPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-food-program',
        template: _raw_loader_food_program_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_program_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodProgramPage);



/***/ }),

/***/ 82225:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/food-program/food-program.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content ion-card {\n  margin: 10px;\n}\n:host ion-content ion-card ion-card-header {\n  margin: 16px;\n}\n:host ion-content ion-card ion-card-header ion-card-title {\n  text-align: center;\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxZQUFBO0FBRE47QUFFTTtFQUNFLFlBQUE7QUFBUjtBQUNRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNWIiwiZmlsZSI6ImZvb2QtcHJvZ3JhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50e1xuICAgIGlvbi1jYXJke1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ 44131:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/food-program/food-program.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar >\n    <ion-title>Food Program</ion-title>\n    <ion-back-button slot=\"start\" defaultHref=\"/\"></ion-back-button>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let program of foodProgram\" [routerLink]=\"['../../food-program-detail/' +program._id]\"> \n    <ion-card-header>\n      <ion-card-title>{{program.name}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"!foodProgram\"></ion-spinner>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_food-program_food-program_module_ts.js.map