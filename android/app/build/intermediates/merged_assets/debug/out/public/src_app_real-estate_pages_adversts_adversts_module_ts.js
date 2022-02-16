(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_real-estate_pages_adversts_adversts_module_ts"],{

/***/ 47880:
/*!***********************************************************************!*\
  !*** ./src/app/real-estate/pages/adversts/adversts-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstsPageRoutingModule": () => (/* binding */ AdverstsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _adversts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adversts.page */ 59290);




const routes = [
    {
        path: '',
        component: _adversts_page__WEBPACK_IMPORTED_MODULE_0__.AdverstsPage
    }
];
let AdverstsPageRoutingModule = class AdverstsPageRoutingModule {
};
AdverstsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdverstsPageRoutingModule);



/***/ }),

/***/ 51459:
/*!***************************************************************!*\
  !*** ./src/app/real-estate/pages/adversts/adversts.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstsPageModule": () => (/* binding */ AdverstsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _adversts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adversts-routing.module */ 47880);
/* harmony import */ var _adversts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adversts.page */ 59290);
/* harmony import */ var _components_real_estate_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/real-estate-components.module */ 90723);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let AdverstsPageModule = class AdverstsPageModule {
};
AdverstsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _adversts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdverstsPageRoutingModule,
            _components_real_estate_components_module__WEBPACK_IMPORTED_MODULE_2__.RealEstateComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_adversts_page__WEBPACK_IMPORTED_MODULE_1__.AdverstsPage]
    })
], AdverstsPageModule);



/***/ }),

/***/ 59290:
/*!*************************************************************!*\
  !*** ./src/app/real-estate/pages/adversts/adversts.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstsPage": () => (/* binding */ AdverstsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_adversts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adversts.page.html */ 55943);
/* harmony import */ var _adversts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adversts.page.scss */ 96516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/filter-modal/filter-modal.component */ 69467);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 56010);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 82766);








let AdverstsPage = class AdverstsPage {
    constructor(_authService, _modalController) {
        this._authService = _authService;
        this._modalController = _modalController;
        this.adversts = [];
        this.filter = {};
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.adversts = yield this.getAdversts();
        });
    }
    getAdversts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.adverst.getAll({
                queryParams: {
                    relation: true,
                    filter: Object.keys(this.filter).length > 0 ? this.filter : {},
                },
            });
        });
    }
    search(terms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.adversts = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.adverst.getAll({
                queryParams: {
                    filter: {
                        $or: [
                            { name: { $regex: terms, $options: 'i' } },
                            { description: { $regex: terms, $options: 'i' } },
                        ],
                    },
                    limit: 10,
                },
            });
        });
    }
    presentFilterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const filterModal = yield this._modalController.create({
                component: _components_filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__.FilterModalComponent,
                swipeToClose: true,
            });
            filterModal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (!res.data) {
                    return;
                }
                else if (res.data.action == 'clear_filter') {
                    this.filter = {};
                }
                else {
                    res.data.filter = JSON.parse(JSON.stringify(res.data.filter));
                    delete res.data.filter.address;
                    this.filter = res.data.filter;
                }
                this.adversts = yield this.getAdversts();
            }));
            return yield filterModal.present();
        });
    }
};
AdverstsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AdverstsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-adversts',
        template: _raw_loader_adversts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adversts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdverstsPage);



/***/ }),

/***/ 96516:
/*!***************************************************************!*\
  !*** ./src/app/real-estate/pages/adversts/adversts.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-icon {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVyc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGlCQUFBO0FBRE4iLCJmaWxlIjoiYWR2ZXJzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVye1xuICAgIGlvbi1pY29ue1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 55943:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/pages/adversts/adversts.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"real-estate\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Adversts</ion-title>\n    <ion-icon name=\"funnel\" slot=\"end\" (click)=\"presentFilterModal()\"></ion-icon>\n  </ion-toolbar>\n  <ion-searchbar\n    mode=\"ios\"\n    [debounce]=\"800\"\n    (ionChange)=\"search($event.target['value'])\"\n    [(ngModel)]=\"searchTerm\"\n  ></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"adversts.length\">\n    <adverst-card\n      [data]=\"adverst\"\n      [routerLink]=\"['/real-estate/adverst-detail/'+adverst._id]\"\n      *ngFor=\"let adverst of adversts\"\n    ></adverst-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_real-estate_pages_adversts_adversts_module_ts.js.map