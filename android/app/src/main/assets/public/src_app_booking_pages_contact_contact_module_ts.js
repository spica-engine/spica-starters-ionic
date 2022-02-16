(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_booking_pages_contact_contact_module_ts"],{

/***/ 17261:
/*!*****************************************************************!*\
  !*** ./src/app/booking/pages/contact/contact-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageRoutingModule": () => (/* binding */ ContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.page */ 70573);




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_0__.ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ 68613:
/*!*********************************************************!*\
  !*** ./src/app/booking/pages/contact/contact.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 17261);
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page */ 70573);
/* harmony import */ var _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/booking-components.module */ 6723);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let ContactPageModule = class ContactPageModule {
};
ContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactPageRoutingModule,
            _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__.BookingComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_1__.ContactPage]
    })
], ContactPageModule);



/***/ }),

/***/ 70573:
/*!*******************************************************!*\
  !*** ./src/app/booking/pages/contact/contact.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.page.html */ 30819);
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.page.scss */ 36370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 48058);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 82472);






let ContactPage = class ContactPage {
    constructor() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.public_apikey });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield this.getSiteConfigurations();
            this.site_configurations = data[0];
        });
    }
    getSiteConfigurations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.site_configurations.getAll();
        });
    }
};
ContactPage.ctorParameters = () => [];
ContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactPage);



/***/ }),

/***/ 36370:
/*!*********************************************************!*\
  !*** ./src/app/booking/pages/contact/contact.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n:host .container .contact-container .maps {\n  margin-top: 10px;\n  left: 50%;\n  right: 50%;\n  padding: 20px;\n}\n:host .container .contact-container .contact {\n  width: 100%;\n  margin: 0;\n  background-color: #1f1f1f;\n  padding: 40px 30px 40px 30px;\n}\n:host .container .contact-container .contact h2 {\n  font-size: 1.6rem;\n  text-align: center;\n  color: white;\n}\n:host .container .contact-container .contact .divider {\n  width: 100%;\n  height: 1px;\n  margin: 20px 0 20px 0;\n  background-color: #4b4b4b;\n}\n:host .container .contact-container .contact .contact-options {\n  width: 100%;\n  margin-top: 20px;\n  text-align: center;\n}\n:host .container .contact-container .contact .contact-options .options {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n:host .container .contact-container .contact .contact-options .options ion-icon {\n  margin-top: 20px;\n  font-size: 1.2rem;\n  background-color: white;\n  border-radius: 50%;\n  padding: 10px;\n}\n:host .container .contact-container .contact .contact-options .options h2 {\n  font-size: 1.2rem;\n  margin: 10px 0 5px 0;\n  color: white;\n}\n:host .container .contact-container .contact .contact-options .options p {\n  font-size: 0.8rem;\n  color: #d6d6d6;\n}\n:host .container .contact-container .contact-social-media {\n  width: 100%;\n  background-color: white;\n}\n:host .container .contact-container .contact-social-media ion-label {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n:host .container .contact-container .contact-social-media ion-label ion-icon {\n  margin: 45px;\n  font-size: 2.5rem;\n  color: #1f1f1f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBaEI7QUFFWTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUFoQjtBQUNnQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ3BCO0FBRWdCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBcEI7QUFDb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDeEI7QUFBd0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFNUI7QUFBd0I7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQUU1QjtBQUF3QjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUU1QjtBQUdZO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FBRGhCO0FBRWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFwQjtBQUNvQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDeEIiLCJmaWxlIjoiY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAuY29udGFjdC1jb250YWluZXIge1xuICAgICAgICAgICAgLm1hcHMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDMwcHggNDBweCAzMHB4O1xuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRhY3Qtb3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5vcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0LXNvY2lhbC1tZWRpYSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjFmMWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 30819:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/pages/contact/contact.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"booking\"></spica-menu-bar>\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> </ion-buttons>\n    <ion-title>Contact</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"contact-container\" *ngIf=\"site_configurations\">\n      <div class=\"maps\">\n       <spica-map-iframe [data]=\"site_configurations.contact.adress_map\"></spica-map-iframe>\n      </div>\n      <div class=\"contact\">\n        <h2>Contact Us</h2>\n        <div class=\"divider\"></div>\n        <div class=\"contact-options\">\n          <ion-label class=\"options\">\n            <ion-icon name=\"business-outline\"></ion-icon>\n            <h2>Be Our Guest</h2>\n            <p>{{site_configurations.contact.adress}}</p>\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n            <h2>Whatsapp</h2>\n            <p>{{site_configurations.contact.phone_number}}</p>\n            <ion-icon name=\"call-outline\"></ion-icon>\n            <h2>Call Us</h2>\n            <p>{{site_configurations.contact.phone_number}}</p>\n            <ion-icon name=\"mail-open-outline\"></ion-icon>\n            <h2>Write Us</h2>\n            <p>{{site_configurations.contact.mail}}</p>\n          </ion-label>\n        </div>\n      </div>\n      <div class=\"contact-social-media\">\n        <ion-label>\n          <a [href]=\"site_configurations.contact.facebook_link\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </a>\n          <a [href]=\"site_configurations.contact.instagram_link\">\n            <ion-icon name=\"logo-instagram\"></ion-icon>\n          </a>\n        </ion-label>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_booking_pages_contact_contact_module_ts.js.map