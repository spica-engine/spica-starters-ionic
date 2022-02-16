(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_fitness_pages_trainings_trainings_module_ts"],{

/***/ 31264:
/*!*********************************************************************!*\
  !*** ./src/app/fitness/pages/trainings/trainings-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsPageRoutingModule": () => (/* binding */ TrainingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _trainings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings.page */ 72387);




const routes = [
    {
        path: ':id',
        component: _trainings_page__WEBPACK_IMPORTED_MODULE_0__.TrainingsPage
    }
];
let TrainingsPageRoutingModule = class TrainingsPageRoutingModule {
};
TrainingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrainingsPageRoutingModule);



/***/ }),

/***/ 34234:
/*!*************************************************************!*\
  !*** ./src/app/fitness/pages/trainings/trainings.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsPageModule": () => (/* binding */ TrainingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _trainings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trainings-routing.module */ 31264);
/* harmony import */ var _trainings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings.page */ 72387);







let TrainingsPageModule = class TrainingsPageModule {
};
TrainingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trainings_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingsPageRoutingModule
        ],
        declarations: [_trainings_page__WEBPACK_IMPORTED_MODULE_1__.TrainingsPage]
    })
], TrainingsPageModule);



/***/ }),

/***/ 72387:
/*!***********************************************************!*\
  !*** ./src/app/fitness/pages/trainings/trainings.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingsPage": () => (/* binding */ TrainingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_trainings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trainings.page.html */ 59044);
/* harmony import */ var _trainings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainings.page.scss */ 21694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 86629);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 43443);







let TrainingsPage = class TrainingsPage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this.slideOpts = {
            initialSlide: 0,
            sliderPerView: 1,
            spaceBetween: 0,
            speed: 400,
            autoplay: true
        };
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.training = yield this.getTraining();
            console.log(this.training);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this._route.snapshot.params.id;
        });
    }
    getTraining() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.training.getAll({ queryParams: { filter: { user: this.id }, relation: "packet.videos" } });
        });
    }
};
TrainingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
TrainingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-trainings',
        template: _raw_loader_trainings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trainings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrainingsPage);



/***/ }),

/***/ 21694:
/*!*************************************************************!*\
  !*** ./src/app/fitness/pages/trainings/trainings.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content ion-slides ::ng-deep .swiper-pagination-bullet-active {\n  background-color: black;\n}\n:host ion-content ion-slides ::ng-deep .swiper-pagination-bullet {\n  background-color: black;\n}\n:host ion-content ion-slides ::ng-deep .swiper-pagination {\n  position: relative;\n  bottom: 0;\n}\n:host ion-content img {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDRSx1QkFBQTtBQUhWO0FBS1E7RUFDRSx1QkFBQTtBQUhWO0FBS1E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFIVjtBQU9JO0VBQ0UsYUFBQTtBQUxOIiwiZmlsZSI6InRyYWluaW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 59044:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/trainings/trainings.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Trainings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"!training\"></ion-spinner>\n  <ng-container *ngFor=\"let exercise of training\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title> {{exercise.name}} </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide *ngFor=\"let trainingVideo of exercise.packet['videos']\">\n            <img\n              [src]=\"trainingVideo.image\"\n              alt=\"\"\n              [routerLink]=\"['/fitness/video-details/'+ trainingVideo._id]\"\n            />\n          </ion-slide>\n        </ion-slides>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fitness_pages_trainings_trainings_module_ts.js.map