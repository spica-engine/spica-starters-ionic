(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_booking_booking_module_ts"],{

/***/ 46698:
/*!***************************************************!*\
  !*** ./src/app/booking/booking-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingRoutingModule": () => (/* binding */ BookingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e"), __webpack_require__.e("src_app_booking_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 96975)).then(m => m.HomePageModule)
    },
    {
        path: 'contact',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e"), __webpack_require__.e("src_app_booking_pages_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 68613)).then(m => m.ContactPageModule)
    },
    {
        path: 'rooms',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e"), __webpack_require__.e("src_app_booking_pages_rooms_rooms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rooms/rooms.module */ 77818)).then(m => m.RoomsPageModule)
    },
    {
        path: 'room-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/room-details/room-details.module */ 78535)).then(m => m.RoomDetailsPageModule)
    },
    {
        path: 'activity-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_bucket_dist_index_mjs"), __webpack_require__.e("default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/activity-details/activity-details.module */ 66976)).then(m => m.ActivityDetailsPageModule)
    },
];
let BookingRoutingModule = class BookingRoutingModule {
};
BookingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], BookingRoutingModule);



/***/ }),

/***/ 3911:
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingModule": () => (/* binding */ BookingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-routing.module */ 46698);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 45642);





let BookingModule = class BookingModule {
};
BookingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.SpicaComponentsModule],
    })
], BookingModule);



/***/ })

}]);
//# sourceMappingURL=src_app_booking_booking_module_ts.js.map