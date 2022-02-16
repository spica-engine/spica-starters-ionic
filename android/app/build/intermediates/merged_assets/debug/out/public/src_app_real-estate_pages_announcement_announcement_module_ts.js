(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_real-estate_pages_announcement_announcement_module_ts"],{

/***/ 47660:
/*!*******************************************************************************!*\
  !*** ./src/app/real-estate/pages/announcement/announcement-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementPageRoutingModule": () => (/* binding */ AnnouncementPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _announcement_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement.page */ 66463);




const routes = [
    {
        path: '',
        component: _announcement_page__WEBPACK_IMPORTED_MODULE_0__.AnnouncementPage
    }
];
let AnnouncementPageRoutingModule = class AnnouncementPageRoutingModule {
};
AnnouncementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnnouncementPageRoutingModule);



/***/ }),

/***/ 34120:
/*!***********************************************************************!*\
  !*** ./src/app/real-estate/pages/announcement/announcement.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementPageModule": () => (/* binding */ AnnouncementPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement-routing.module */ 47660);
/* harmony import */ var _announcement_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.page */ 66463);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AnnouncementPageModule = class AnnouncementPageModule {
};
AnnouncementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _announcement_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncementPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_announcement_page__WEBPACK_IMPORTED_MODULE_1__.AnnouncementPage]
    })
], AnnouncementPageModule);



/***/ }),

/***/ 66463:
/*!*********************************************************************!*\
  !*** ./src/app/real-estate/pages/announcement/announcement.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementPage": () => (/* binding */ AnnouncementPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_announcement_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./announcement.page.html */ 66562);
/* harmony import */ var _announcement_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement.page.scss */ 26776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 56010);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 82766);






let AnnouncementPage = class AnnouncementPage {
    constructor(_authService) {
        this._authService = _authService;
        this.announcements = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.announcements = yield this.getAnnouncements();
        });
    }
    getAnnouncements() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.announcement.getAll({ queryParams: { sort: { _id: -1 } } });
    }
};
AnnouncementPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AnnouncementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-announcement',
        template: _raw_loader_announcement_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_announcement_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnnouncementPage);



/***/ }),

/***/ 26776:
/*!***********************************************************************!*\
  !*** ./src/app/real-estate/pages/announcement/announcement.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  padding: 0 15px;\n}\n:host ion-card :last-child {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubm91bmNlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7QUFDWiIsImZpbGUiOiJhbm5vdW5jZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 66562:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/pages/announcement/announcement.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"real-estate\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Announcement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let announcement of announcements\">\n    <h5>{{announcement.name}}</h5>\n    <p>{{announcement.description}}</p>\n    <p>{{announcement.created_at | date: 'dd/MM/yyyy HH:MM'}}</p>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_real-estate_pages_announcement_announcement_module_ts.js.map