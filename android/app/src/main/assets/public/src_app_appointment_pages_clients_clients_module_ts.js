(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_appointment_pages_clients_clients_module_ts"],{

/***/ 51703:
/*!*********************************************************************!*\
  !*** ./src/app/appointment/pages/clients/clients-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsPageRoutingModule": () => (/* binding */ ClientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients.page */ 63360);




const routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_0__.ClientsPage
    }
];
let ClientsPageRoutingModule = class ClientsPageRoutingModule {
};
ClientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientsPageRoutingModule);



/***/ }),

/***/ 40777:
/*!*************************************************************!*\
  !*** ./src/app/appointment/pages/clients/clients.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsPageModule": () => (/* binding */ ClientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients-routing.module */ 51703);
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.page */ 63360);







let ClientsPageModule = class ClientsPageModule {
};
ClientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientsPageRoutingModule
        ],
        declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_1__.ClientsPage]
    })
], ClientsPageModule);



/***/ }),

/***/ 63360:
/*!***********************************************************!*\
  !*** ./src/app/appointment/pages/clients/clients.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsPage": () => (/* binding */ ClientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clients_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clients.page.html */ 72690);
/* harmony import */ var _clients_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.page.scss */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/client-modal/client-modal.component */ 96796);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 17308);







let ClientsPage = class ClientsPage {
    constructor(_modalController) {
        this._modalController = _modalController;
        this.clients = [];
    }
    ngOnInit() {
        this.getClients();
    }
    getClients() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.clients = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.client.getAll({ queryParams: { sort: { _id: -1 } } });
        });
    }
    clientModal(client = undefined) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_client_modal_client_modal_component__WEBPACK_IMPORTED_MODULE_2__.ClientModalComponent,
                componentProps: {
                    action: client ? 'update' : 'create',
                    client: client,
                },
            });
            modal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (!res.data || res.data.value == 'close') {
                    return;
                }
                else if (res.data.action == 'create') {
                    const newClient = yield this.createClient(res.data.client);
                    this.clients.unshift(newClient);
                }
                else if (res.data.action == 'update') {
                    yield this.updateClient(res.data.client);
                }
                else if (res.data.action == 'delete') {
                    this.deleteClient(res.data.client._id);
                    this.clients = this.clients.filter(el => {
                        return el._id !== client._id;
                    });
                }
            }));
            return yield modal.present();
        });
    }
    createClient(client) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.client.insert(client);
        });
    }
    updateClient(client) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.client.patch(client);
        });
    }
    deleteClient(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.client.remove(id);
        });
    }
    search(terms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.clients = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.client.getAll({
                queryParams: {
                    filter: {
                        $or: [
                            { name: { $regex: terms, $options: 'i' } },
                            { surname: { $regex: terms, $options: 'i' } },
                        ],
                    },
                    limit: 10,
                },
            });
        });
    }
};
ClientsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ClientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-clients',
        template: _raw_loader_clients_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clients_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientsPage);



/***/ }),

/***/ 17313:
/*!*************************************************************!*\
  !*** ./src/app/appointment/pages/clients/clients.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  padding: 15px;\n}\n:host .new-client {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n:host .new-client div {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n:host .new-client div ion-text {\n  margin-left: 6px;\n}\n:host ion-card {\n  margin: 15px 12px;\n}\n:host ion-card h2 {\n  color: black;\n  margin-bottom: 10px;\n}\n:host ion-card p {\n  margin-top: 5px;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n}\n:host ion-card p ion-icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQUo7QUFDSTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0FBRVI7QUFHRTtFQUNFLGlCQUFBO0FBREo7QUFFSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUNNO0VBQ0Usa0JBQUE7QUFDUiIsImZpbGUiOiJjbGllbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNhcmQge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLm5ldy1jbGllbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaW9uLXRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1jYXJke1xuICAgIG1hcmdpbjogMTVweCAxMnB4O1xuICAgIGgye1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpb24taWNvbntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 72690:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/pages/clients/clients.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Clients</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"new-client\">\n    <div (click)=\"clientModal()\">\n      <ion-icon name=\"person-add-outline\"></ion-icon>\n      <ion-text>Add new client</ion-text>\n    </div>\n  </div>\n  <ion-searchbar\n    mode=\"ios\"\n    [debounce]=\"800\"\n    (ionChange)=\"search($event.target['value'])\"\n    [(ngModel)]=\"searchTerm\"\n  ></ion-searchbar>\n  <ion-card *ngFor=\"let client of clients\" (click)=\"clientModal(client)\">\n    <ion-label>\n      <h2>{{client.name + ' ' + client.surname}}</h2>\n      <p>\n        <ion-icon name=\"calendar-number-outline\"></ion-icon>\n        {{client.date_of_birth | date: 'dd-MM-yyyy'}}\n      </p>\n      <p><ion-icon name=\"call\"></ion-icon> {{client.phone}}</p>\n    </ion-label>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_appointment_pages_clients_clients_module_ts.js.map