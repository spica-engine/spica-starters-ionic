(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_real-estate_components_real-estate-components_module_ts"],{

/***/ 10919:
/*!*******************************************************************************!*\
  !*** ./src/app/real-estate/components/adverst-card/adverst-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstCardComponent": () => (/* binding */ AdverstCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_adverst_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adverst-card.component.html */ 81910);
/* harmony import */ var _adverst_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adverst-card.component.scss */ 56611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let AdverstCardComponent = class AdverstCardComponent {
    constructor() { }
    ngOnInit() { }
};
AdverstCardComponent.ctorParameters = () => [];
AdverstCardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AdverstCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'adverst-card',
        template: _raw_loader_adverst_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adverst_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdverstCardComponent);



/***/ }),

/***/ 26365:
/*!*************************************************************************************!*\
  !*** ./src/app/real-estate/components/consultant-card/consultant-card.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultantCardComponent": () => (/* binding */ ConsultantCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_consultant_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consultant-card.component.html */ 34263);
/* harmony import */ var _consultant_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultant-card.component.scss */ 72173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ConsultantCardComponent = class ConsultantCardComponent {
    constructor() {
        this.showEmail = false;
    }
    ngOnInit() { }
};
ConsultantCardComponent.ctorParameters = () => [];
ConsultantCardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showEmail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ConsultantCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'consultant-card',
        template: _raw_loader_consultant_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consultant_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultantCardComponent);



/***/ }),

/***/ 69467:
/*!*******************************************************************************!*\
  !*** ./src/app/real-estate/components/filter-modal/filter-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalComponent": () => (/* binding */ FilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter-modal.component.html */ 48812);
/* harmony import */ var _filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-modal.component.scss */ 66306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_location_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/location-api.service */ 58883);






let FilterModalComponent = class FilterModalComponent {
    constructor(_locationService, _modal) {
        this._locationService = _locationService;
        this._modal = _modal;
        this.filter = {
            address: {
                country: '',
                city: '',
                district: '',
            },
            price: { $gte: 0, $lte: 1000000000 }
        };
    }
    ngOnInit() {
        this.getCountries();
    }
    getCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.countries = yield this._locationService.getCountries();
            this.countries = this.countries['data'];
        });
    }
    countryChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.filter.address.country = value;
            let citiesOfcountry = yield this._locationService.getCityByCountry(value);
            this.cities = citiesOfcountry['data']['states'];
            this.filter.address.city = '';
            this.filter.address.district = '';
        });
    }
    cityChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.filter.address.city = value;
            let stateOfcity = yield this._locationService.getStateByCity(this.filter.address.country, value);
            this.states = stateOfcity['data'];
            this.filter.address.district = '';
        });
    }
    districtChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.filter.address.district = value;
        });
    }
    setFilter() {
        for (let key of Object.keys(this.filter.address)) {
            if (this.filter.address[key]) {
                this.filter[`address.${key}`] = this.filter.address[key];
            }
        }
        this._modal.dismiss({
            filter: this.filter,
        });
    }
    clearFilter() {
        this._modal.dismiss({
            action: 'clear_filter',
        });
    }
};
FilterModalComponent.ctorParameters = () => [
    { type: src_app_services_location_api_service__WEBPACK_IMPORTED_MODULE_2__.LocationApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
FilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'filter-modal',
        template: _raw_loader_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterModalComponent);



/***/ }),

/***/ 90723:
/*!*************************************************************************!*\
  !*** ./src/app/real-estate/components/real-estate-components.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealEstateComponentModule": () => (/* binding */ RealEstateComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _adverst_card_adverst_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adverst-card/adverst-card.component */ 10919);
/* harmony import */ var _consultant_card_consultant_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consultant-card/consultant-card.component */ 26365);
/* harmony import */ var _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-modal/filter-modal.component */ 69467);










let RealEstateComponentModule = class RealEstateComponentModule {
};
RealEstateComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_adverst_card_adverst_card_component__WEBPACK_IMPORTED_MODULE_0__.AdverstCardComponent, _consultant_card_consultant_card_component__WEBPACK_IMPORTED_MODULE_1__.ConsultantCardComponent, _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__.FilterModalComponent],
        exports: [_adverst_card_adverst_card_component__WEBPACK_IMPORTED_MODULE_0__.AdverstCardComponent, _consultant_card_consultant_card_component__WEBPACK_IMPORTED_MODULE_1__.ConsultantCardComponent, _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_2__.FilterModalComponent],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule],
    })
], RealEstateComponentModule);



/***/ }),

/***/ 58883:
/*!**************************************************!*\
  !*** ./src/app/services/location-api.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationApiService": () => (/* binding */ LocationApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let LocationApiService = class LocationApiService {
    constructor(_http) {
        this._http = _http;
    }
    getCountries() {
        return this._http
            .get('https://countriesnow.space/api/v0.1/countries/codes')
            .toPromise();
    }
    getCityByCountry(country) {
        return this._http
            .post('https://countriesnow.space/api/v0.1/countries/states', {
            country: country,
        })
            .toPromise();
    }
    getStateByCity(country, state) {
        return this._http
            .post('https://countriesnow.space/api/v0.1/countries/state/cities', {
            country: country,
            state: state
        })
            .toPromise();
    }
};
LocationApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
LocationApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], LocationApiService);



/***/ }),

/***/ 56611:
/*!*********************************************************************************!*\
  !*** ./src/app/real-estate/components/adverst-card/adverst-card.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n}\n:host ion-card ion-item img {\n  margin: 10px 0;\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  object-fit: cover;\n}\n:host ion-card ion-item .main-properties {\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n}\n:host ion-card ion-item .main-properties .price {\n  font-weight: 500;\n}\n:host ion-card ion-item .main-properties .location {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  margin-top: 10px;\n}\n:host ion-card ion-item .main-properties .properties {\n  display: flex;\n  margin-top: 10px;\n  font-size: 12px;\n}\n:host ion-card ion-item .main-properties .properties span {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n:host ion-card ion-item .main-properties .properties span ion-icon {\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVyc3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUdNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBSU07RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUdRO0VBQ0UsZ0JBQUE7QUFEVjtBQUdRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRFY7QUFJUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGVjtBQUdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBSUEsa0JBQUE7QUFKWjtBQUNZO0VBQ0UsaUJBQUE7QUFDZCIsImZpbGUiOiJhZHZlcnN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGlvbi1jYXJkIHtcbiAgICBpb24taXRlbSB7XG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cblxuICAgICAgLm1haW4tcHJvcGVydGllcyB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2NhdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb3BlcnRpZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 72173:
/*!***************************************************************************************!*\
  !*** ./src/app/real-estate/components/consultant-card/consultant-card.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  border-radius: 15px;\n}\n:host ion-card p {\n  margin-top: 5px;\n  margin-bottom: 0;\n  font-size: 13px;\n}\n:host ion-card ion-icon {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtBQUROIiwiZmlsZSI6ImNvbnN1bHRhbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 66306:
/*!*********************************************************************************!*\
  !*** ./src/app/real-estate/components/filter-modal/filter-modal.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  padding: 20px;\n  height: 100vh;\n}\n:host ion-list ion-label {\n  padding: 10px 0;\n}\n:host ion-list ion-button {\n  position: fixed;\n  bottom: 80px;\n  width: calc(100% - 40px);\n  height: 60px;\n  --border-radius: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n:host ion-list ion-button.clear-filter {\n  bottom: 15px;\n  --background: rgb(216, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBQU47QUFFTTtFQUNFLGVBQUE7QUFBUjtBQUdNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURSO0FBR1E7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUFEViIsImZpbGUiOiJmaWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgfVxuICBcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogODBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIFxuICAgICAgICAmLmNsZWFyLWZpbHRlciB7XG4gICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDIxNiwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ 81910:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/components/adverst-card/adverst-card.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-item button lines=\"none\">\n    <img [src]=\"data.cover_img\"/>\n    <ion-label class=\"main-properties\">\n      <ion-text class=\"price\">{{data.price | number:'1.0':'en-US'}} {{data.currency}}</ion-text>\n      <ion-text class=\"location\"><ion-icon name=\"location\"></ion-icon>{{data.address.city + ' / ' + data.address.district}}</ion-text>\n      <ion-label class=\"properties\">\n        <span><ion-icon name=\"bed-outline\"></ion-icon>{{data.bedroom_count}}</span>\n        <span><ion-icon name=\"water-outline\"></ion-icon>{{data.bathroom_count}}</span>\n        <span><ion-icon name=\"cube-outline\"></ion-icon>{{data.square_meters}} ㎡</span>\n      </ion-label>\n     </ion-label>\n  </ion-item>\n</ion-card>\n");

/***/ }),

/***/ 34263:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/components/consultant-card/consultant-card.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"data.thumbnail\" />\n    </ion-avatar>\n    <ion-label>\n      <span> {{ data.name + \" \" + data.surname }}</span>\n      <p *ngIf=\"showEmail\">{{ data.mail }}</p>\n      <p>{{ data.phone_number }}</p>\n    </ion-label>\n    <ion-icon name=\"call\"></ion-icon>\n  </ion-item>\n</ion-card>\n");

/***/ }),

/***/ 48812:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/components/filter-modal/filter-modal.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\n  <ion-item>\n    <ion-label position=\"floating\">Country</ion-label>\n    <ion-select (ionChange)=\"countryChange($event.target['value'])\">\n      <ion-select-option\n        [value]=\"country.name\"\n        *ngFor=\"let country of countries\"\n      >\n        {{ country.name }}</ion-select-option\n      >\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">City</ion-label>\n    <ion-select (ionChange)=\"cityChange($event.target['value'])\" [disabled]=\"!filter.address.country\">\n      <ion-select-option [value]=\"city.name\" *ngFor=\"let city of cities\">\n        {{ city.name }}</ion-select-option\n      >\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">District</ion-label>\n    <ion-select (ionChange)=\"districtChange($event.target['value'])\" [disabled]=\"!filter.address.city\">\n      <ion-select-option [value]=\"state\" *ngFor=\"let state of states\">\n        {{ state }}</ion-select-option\n      >\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Min. Price</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"filter.price.$gte\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Max. Price</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"filter.price.$lte\"></ion-input>\n  </ion-item>\n\n  <ion-button (click)=\"setFilter()\">Apply Filter</ion-button>\n  <ion-button class=\"clear-filter\" (click)=\"clearFilter()\"\n    >Clear Filter</ion-button\n  >\n</ion-list>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_real-estate_components_real-estate-components_module_ts.js.map