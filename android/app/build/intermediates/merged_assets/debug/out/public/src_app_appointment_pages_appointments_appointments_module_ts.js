(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_appointment_pages_appointments_appointments_module_ts"],{

/***/ 45391:
/*!*******************************************************************************!*\
  !*** ./src/app/appointment/pages/appointments/appointments-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsPageRoutingModule": () => (/* binding */ AppointmentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointments.page */ 22427);




const routes = [
    {
        path: '',
        component: _appointments_page__WEBPACK_IMPORTED_MODULE_0__.AppointmentsPage
    }
];
let AppointmentsPageRoutingModule = class AppointmentsPageRoutingModule {
};
AppointmentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppointmentsPageRoutingModule);



/***/ }),

/***/ 28851:
/*!***********************************************************************!*\
  !*** ./src/app/appointment/pages/appointments/appointments.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsPageModule": () => (/* binding */ AppointmentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointments-routing.module */ 45391);
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointments.page */ 22427);
/* harmony import */ var _components_appointment_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/appointment-components.module */ 31075);








let AppointmentsPageModule = class AppointmentsPageModule {
};
AppointmentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentsPageRoutingModule,
            _components_appointment_components_module__WEBPACK_IMPORTED_MODULE_2__.AppointmentComponentModule
        ],
        declarations: [_appointments_page__WEBPACK_IMPORTED_MODULE_1__.AppointmentsPage]
    })
], AppointmentsPageModule);



/***/ }),

/***/ 22427:
/*!*********************************************************************!*\
  !*** ./src/app/appointment/pages/appointments/appointments.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsPage": () => (/* binding */ AppointmentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./appointments.page.html */ 41551);
/* harmony import */ var _appointments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointments.page.scss */ 34273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/create-appointment/create-appointment.component */ 59382);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 8142);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 17308);








let AppointmentsPage = class AppointmentsPage {
    constructor(_authService, _modalController) {
        this._authService = _authService;
        this._modalController = _modalController;
        this.screen = 'coming';
        this.appointments = [];
        this.eventSource = [];
        this.currentAppointments = [];
        this.loading = true;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            if (this.user) {
                yield this.getAppointments();
                this.prepareAppointments();
            }
        });
    }
    getAppointments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.appointments = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.appointment.getAll({
                queryParams: { filter: { employee: this.user._id }, relation: true },
            });
        });
    }
    prepareAppointments() {
        var _a;
        this.eventSource = [];
        (_a = this.appointments) === null || _a === void 0 ? void 0 : _a.forEach((appointment) => {
            if (appointment.client) {
                this.eventSource.push({
                    title: `${appointment.client['name']} ${appointment.client['surname']}`,
                    startTime: new Date(appointment.from),
                    endTime: new Date(appointment.from),
                    allDay: false,
                    _id: appointment._id,
                });
            }
        });
        this.loading = false;
    }
    onTimeSelected(events) {
        if (!events.length) {
            this.currentAppointments = [];
            return;
        }
        const appointmentIds = [];
        events.forEach((el) => {
            appointmentIds.push(el._id);
        });
        this.currentAppointments = this.appointments.filter((el) => {
            if (appointmentIds.includes(el._id)) {
                return el;
            }
        });
    }
    appointmentDetailsModal(appointment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_create_appointment_create_appointment_component__WEBPACK_IMPORTED_MODULE_2__.CreateAppointmentComponent,
                componentProps: {
                    action: 'update',
                    appointment: appointment,
                },
            });
            modal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (!res.data || res.data.value == 'close') {
                    return;
                }
                else if (res.data.action == 'update') {
                    yield this.updateClient(res.data.appointmentData.client);
                    this.updateAppointment(res.data.appointmentData);
                }
                else if (res.data.action == 'delete') {
                    this.deleteAppointment(res.data.appointmentData._id);
                }
            }));
            return yield modal.present();
        });
    }
    updateClient(client) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.client.patch(client);
        });
    }
    updateAppointment(appointment) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let currentAppointment = JSON.parse(JSON.stringify(appointment));
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.appointment.patch(appointment);
            let appointmentIndex = this.appointments.findIndex((el) => el._id == currentAppointment._id);
            this.appointments[appointmentIndex] = currentAppointment;
            this.prepareAppointments();
        });
    }
    deleteAppointment(id) {
        _services_bucket__WEBPACK_IMPORTED_MODULE_4__.appointment.remove(id).then((_) => {
            this.appointments = this.appointments.filter((el) => {
                return el._id !== id;
            });
            this.prepareAppointments();
        });
    }
};
AppointmentsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AppointmentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-appointments',
        template: _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_appointments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppointmentsPage);



/***/ }),

/***/ 34273:
/*!***********************************************************************!*\
  !*** ./src/app/appointment/pages/appointments/appointments.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .logo {\n  align-items: center;\n  display: flex;\n  color: var(--cd-logo-color);\n  font-weight: bold;\n}\n:host .logo ion-icon {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFDSTtFQUNFLG1CQUFBO0FBQ04iLCJmaWxlIjoiYXBwb2ludG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmxvZ28ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogdmFyKC0tY2QtbG9nby1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 41551:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/pages/appointments/appointments.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <div class=\"logo\">\n        <ion-icon name=\"logo-ionic\"></ion-icon>\n        Appointments\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <custom-calendar *ngIf=\"!loading\" (timeselected)=\"onTimeSelected($event.events)\"  [eventSource]=\"eventSource\"></custom-calendar>\n  <div class=\"container\" *ngIf=\"eventSource && eventSource.length && currentAppointments.length\">\n    <appointment-card [appointment]=\"appointment\" *ngFor=\"let appointment of currentAppointments\" (click)=\"appointmentDetailsModal(appointment)\">\n    </appointment-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_appointment_pages_appointments_appointments_module_ts.js.map