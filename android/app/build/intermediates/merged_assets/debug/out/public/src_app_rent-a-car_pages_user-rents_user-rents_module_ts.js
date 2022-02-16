(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_rent-a-car_pages_user-rents_user-rents_module_ts"],{

/***/ 98396:
/*!**************************************************************************!*\
  !*** ./src/app/rent-a-car/pages/user-rents/user-rents-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRentsPageRoutingModule": () => (/* binding */ UserRentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_rents_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-rents.page */ 78730);




const routes = [
    {
        path: ':id',
        component: _user_rents_page__WEBPACK_IMPORTED_MODULE_0__.UserRentsPage
    }
];
let UserRentsPageRoutingModule = class UserRentsPageRoutingModule {
};
UserRentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserRentsPageRoutingModule);



/***/ }),

/***/ 71910:
/*!******************************************************************!*\
  !*** ./src/app/rent-a-car/pages/user-rents/user-rents.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRentsPageModule": () => (/* binding */ UserRentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _user_rents_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-rents-routing.module */ 98396);
/* harmony import */ var _user_rents_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-rents.page */ 78730);







let UserRentsPageModule = class UserRentsPageModule {
};
UserRentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_rents_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRentsPageRoutingModule
        ],
        declarations: [_user_rents_page__WEBPACK_IMPORTED_MODULE_1__.UserRentsPage]
    })
], UserRentsPageModule);



/***/ }),

/***/ 78730:
/*!****************************************************************!*\
  !*** ./src/app/rent-a-car/pages/user-rents/user-rents.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRentsPage": () => (/* binding */ UserRentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_rents_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-rents.page.html */ 24576);
/* harmony import */ var _user_rents_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-rents.page.scss */ 61127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 94596);






let UserRentsPage = class UserRentsPage {
    constructor(_route) {
        this._route = _route;
        this.isLoading = true;
        this.userRents = [];
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: "fskk1akvi1elv0" });
    }
    ngOnInit() {
        this.userId = this._route.snapshot.params.id;
        this.getRents();
    }
    getRents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.userRents = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.rent_a_car.getAll({ queryParams: { filter: { user: this.userId }, relation: true } });
            this.isLoading = false;
        });
    }
};
UserRentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
UserRentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-rents',
        template: _raw_loader_user_rents_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_rents_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserRentsPage);



/***/ }),

/***/ 61127:
/*!******************************************************************!*\
  !*** ./src/app/rent-a-car/pages/user-rents/user-rents.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content ion-card {\n  --background: #f0f0f0;\n}\n:host ion-content ion-card ion-card-content ion-label {\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content ion-card ion-card-content ion-label span {\n  border-bottom: 1px solid #c9c8c87e;\n  display: flex;\n  align-items: center;\n}\n:host ion-content ion-card ion-card-content ion-label span ion-icon {\n  margin-right: 10px;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0kscUJBQUE7QUFEWjtBQUdnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQURwQjtBQUVvQjtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQXhCO0FBQ3dCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUM1QiIsImZpbGUiOiJ1c2VyLXJlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGlvbi1jb250ZW50e1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzljOGM4N2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxufSJdfQ== */");

/***/ }),

/***/ 24576:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/pages/user-rents/user-rents.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar mode=\"ios\">\n    <ion-back-button slot=\"start\" defaultHref=\"/\"></ion-back-button>\n    <ion-title>All Rents</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf=\"!isLoading\">\n\n    <ion-card *ngFor=\"let rent of userRents\">\n      <ion-card-header>\n        <img [src]=\"rent.car.images[0]\">\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label>\n          <span><ion-icon name=\"car-sport-outline\"></ion-icon> {{rent.car.name}}</span>\n          <span><ion-icon name=\"location-outline\"></ion-icon> {{rent.office_to_take.name}}</span>\n          <span><ion-icon name=\"calendar-outline\"></ion-icon> {{rent.start | date}}</span>\n        </ion-label>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n</ion-content>\n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>");

/***/ })

}]);
//# sourceMappingURL=src_app_rent-a-car_pages_user-rents_user-rents_module_ts.js.map