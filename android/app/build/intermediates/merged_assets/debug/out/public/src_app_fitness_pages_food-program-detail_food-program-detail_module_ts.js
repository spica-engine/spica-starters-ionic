(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_food-program-detail_food-program-detail_module_ts"],{

/***/ 70512:
/*!*****************************************************************************************!*\
  !*** ./src/app/fitness/pages/food-program-detail/food-program-detail-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodProgramDetailPageRoutingModule": () => (/* binding */ FoodProgramDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _food_program_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-program-detail.page */ 53722);




const routes = [
    {
        path: ':id',
        component: _food_program_detail_page__WEBPACK_IMPORTED_MODULE_0__.FoodProgramDetailPage
    }
];
let FoodProgramDetailPageRoutingModule = class FoodProgramDetailPageRoutingModule {
};
FoodProgramDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FoodProgramDetailPageRoutingModule);



/***/ }),

/***/ 23672:
/*!*********************************************************************************!*\
  !*** ./src/app/fitness/pages/food-program-detail/food-program-detail.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodProgramDetailPageModule": () => (/* binding */ FoodProgramDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _food_program_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-program-detail-routing.module */ 70512);
/* harmony import */ var _food_program_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-program-detail.page */ 53722);







let FoodProgramDetailPageModule = class FoodProgramDetailPageModule {
};
FoodProgramDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _food_program_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.FoodProgramDetailPageRoutingModule
        ],
        declarations: [_food_program_detail_page__WEBPACK_IMPORTED_MODULE_1__.FoodProgramDetailPage]
    })
], FoodProgramDetailPageModule);



/***/ }),

/***/ 53722:
/*!*******************************************************************************!*\
  !*** ./src/app/fitness/pages/food-program-detail/food-program-detail.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodProgramDetailPage": () => (/* binding */ FoodProgramDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_food_program_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food-program-detail.page.html */ 84069);
/* harmony import */ var _food_program_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-program-detail.page.scss */ 2858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 43443);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 86629);







let FoodProgramDetailPage = class FoodProgramDetailPage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this.slideOpts = {
            initialSlide: 0,
            sliderPerView: 1,
            spaceBetween: 0,
        };
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this._route.snapshot.params.id;
            this.program = yield this.getProgram();
        });
    }
    getProgram() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.food_program.get(this.id);
        });
    }
};
FoodProgramDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
FoodProgramDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-food-program-detail',
        template: _raw_loader_food_program_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_program_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodProgramDetailPage);



/***/ }),

/***/ 2858:
/*!*********************************************************************************!*\
  !*** ./src/app/fitness/pages/food-program-detail/food-program-detail.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content ion-card {\n  height: 275px;\n}\n:host ion-content ion-card ion-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 60px;\n}\n:host ion-content ion-card ion-card-content {\n  height: calc(100% - 60px);\n  padding: 0;\n}\n:host ion-content ion-card ion-card-content ion-slides {\n  height: 100%;\n}\n:host ion-content ion-card ion-card-content ion-slides ::ng-deep .swiper-pagination-bullet-active {\n  background-color: black;\n}\n:host ion-content ion-card ion-card-content ion-slides ::ng-deep .swiper-pagination-bullet {\n  background-color: black;\n}\n:host ion-content ion-card ion-card-content ion-slides ion-slide {\n  position: relative;\n}\n:host ion-content ion-card ion-card-content ion-slides ion-slide ion-label {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n:host ion-content ion-card ion-card-content ion-slides ion-slide ion-label h1 {\n  margin-top: -50px;\n}\n:host ion-content ion-card ion-card-content ion-slides ion-slide ion-label h3 {\n  width: 260px;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtcHJvZ3JhbS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtBQUROO0FBRU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUVNO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0FBQVI7QUFDUTtFQUNFLFlBQUE7QUFDVjtBQUNZO0VBQ0UsdUJBQUE7QUFDZDtBQUNZO0VBQ0UsdUJBQUE7QUFDZDtBQUVVO0VBQ0Usa0JBQUE7QUFBWjtBQUNZO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ2Q7QUFBYztFQUNFLGlCQUFBO0FBRWhCO0FBQWM7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUFFaEIiLCJmaWxlIjoiZm9vZC1wcm9ncmFtLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBpb24tY2FyZCB7XG4gICAgICBoZWlnaHQ6IDI3NXB4O1xuICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 84069:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/food-program-detail/food-program-detail.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar >\n    <ion-title>Program</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card *ngFor=\"let day of program?.days\">\n  <ion-card-header>\n    <ion-card-title >{{\"Day \"+day.day_of_week}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" >\n      <ion-slide *ngFor=\"let meal of day.meal\">\n        <ion-label>\n          <h1>{{meal.number_of_meal+\". Meal\"}}</h1>\n          <h3 [innerHtml]=\"meal.description\"></h3>\n        </ion-label>\n      </ion-slide>\n    </ion-slides>\n  </ion-card-content>\n</ion-card>\n<ion-spinner class=\"spinner-center-page\" *ngIf=\"!program?.days\"></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_food-program-detail_food-program-detail_module_ts.js.map