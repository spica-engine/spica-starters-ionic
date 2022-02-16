(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_booking_pages_rooms_rooms_module_ts"],{

/***/ 98565:
/*!*************************************************************!*\
  !*** ./src/app/booking/pages/rooms/rooms-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPageRoutingModule": () => (/* binding */ RoomsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rooms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rooms.page */ 45966);




const routes = [
    {
        path: '',
        component: _rooms_page__WEBPACK_IMPORTED_MODULE_0__.RoomsPage
    },
    {
        path: 'room-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../room-details/room-details.module */ 78535)).then(m => m.RoomDetailsPageModule)
    },
];
let RoomsPageRoutingModule = class RoomsPageRoutingModule {
};
RoomsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoomsPageRoutingModule);



/***/ }),

/***/ 77818:
/*!*****************************************************!*\
  !*** ./src/app/booking/pages/rooms/rooms.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPageModule": () => (/* binding */ RoomsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rooms-routing.module */ 98565);
/* harmony import */ var _rooms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms.page */ 45966);
/* harmony import */ var _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/booking-components.module */ 6723);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let RoomsPageModule = class RoomsPageModule {
};
RoomsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoomsPageRoutingModule,
            _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__.BookingComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_rooms_page__WEBPACK_IMPORTED_MODULE_1__.RoomsPage]
    })
], RoomsPageModule);



/***/ }),

/***/ 45966:
/*!***************************************************!*\
  !*** ./src/app/booking/pages/rooms/rooms.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsPage": () => (/* binding */ RoomsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rooms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rooms.page.html */ 6762);
/* harmony import */ var _rooms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms.page.scss */ 86607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 48058);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 82472);






let RoomsPage = class RoomsPage {
    constructor() {
        this.rooms = [];
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.public_apikey });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getHotel_room();
            yield this.getHotel_web_editor();
        });
    }
    getHotel_room() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.rooms = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.room.getAll();
        });
    }
    getHotel_web_editor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.site_configurations.getAll();
            this.siteConfigurations = data[0];
        });
    }
};
RoomsPage.ctorParameters = () => [];
RoomsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rooms',
        template: _raw_loader_rooms_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rooms_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoomsPage);



/***/ }),

/***/ 86607:
/*!*****************************************************!*\
  !*** ./src/app/booking/pages/rooms/rooms.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container .room-header {\n  width: 100%;\n  height: 200px;\n}\n:host .container .room-header img {\n  width: 100%;\n  height: 100%;\n}\n:host .container .room-header div {\n  padding: 5px 30px;\n  text-align: center;\n}\n:host .container .room-header div span {\n  font-size: 0.9rem;\n  color: #595959;\n}\n:host .container .rooms-suits {\n  padding: 15px;\n  margin-top: 45px;\n}\n:host .container .rooms-suits h2 {\n  font-size: 1.5rem;\n  color: #595959;\n  text-align: center;\n  margin: 20px 70px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #002854;\n}\n:host .container .rooms-suits .room {\n  margin-bottom: 50px;\n}\n:host .container .rooms-suits .room img {\n  width: 100%;\n  min-height: 200px;\n  max-height: 250px;\n}\n:host .container .rooms-suits .room .room-description {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin: -20px 0 0 0;\n  padding: 20px 0 0 0;\n  text-align: center;\n}\n:host .container .rooms-suits .room .room-description h3 {\n  color: #595959;\n  font-size: 1rem;\n}\n:host .container .rooms-suits .room .room-description ion-button {\n  padding: 1px;\n  border: 1px solid #575757;\n  --color: #6f6f6f;\n  --background: #ffffff;\n  --background-activated: #f1f1f1;\n  --border-radius: 0;\n}\n:host .container .rooms-suits .room .room-description ion-button ion-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb21zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRlo7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRGhCO0FBR1k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRGhCO0FBRWdCO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQXBCO0FBSVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFGWjtBQUdZO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFEaEI7QUFHWTtFQUNJLG1CQUFBO0FBRGhCO0FBRWdCO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBcEI7QUFFZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFwQjtBQUNvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ3hCO0FBQ29CO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFDeEI7QUFBd0I7RUFDSSxlQUFBO0FBRTVCIiwiZmlsZSI6InJvb21zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgICAucm9vbS1oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDMwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yb29tcy1zdWl0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDcwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsIDQwLCA4NCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm9vbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucm9vbS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTIwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTc1NzU3O1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1jb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmMWYxZjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 6762:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/pages/rooms/rooms.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"booking\"></spica-menu-bar>\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"header-container\" *ngIf=\"siteConfigurations\">\n      <ion-buttons slot=\"start\">\n      </ion-buttons>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"room-header\" *ngIf=\"siteConfigurations\">\n      <img [src]=\"siteConfigurations?.homepage?.header\" />\n      <div>\n        <span\n          >Start by exploring the details of your dream vacation in our\n          rooms.</span\n        >\n      </div>\n    </div>\n    <div class=\"rooms-suits\">\n      <h2>Rooms & Suits</h2>\n      <div class=\"room\" *ngFor=\"let hotel_room of rooms\">\n        <img [src]=\"hotel_room?.head_image\" />\n        <div class=\"room-description\">\n          <h3>{{hotel_room.name}}</h3>\n          <ion-button mode=\"ios\" [routerLink]=\"['room-details' ,hotel_room._id]\"\n            >Explore &nbsp;<ion-icon name=\"arrow-forward-outline\"></ion-icon\n          ></ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_booking_pages_rooms_rooms_module_ts.js.map