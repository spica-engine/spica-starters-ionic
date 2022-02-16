(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_store-listing_pages_create-store_create-store_module_ts"],{

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

/***/ 64155:
/*!*********************************************************************************!*\
  !*** ./src/app/store-listing/pages/create-store/create-store-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStorePageRoutingModule": () => (/* binding */ CreateStorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-store.page */ 60322);




const routes = [
    {
        path: '',
        component: _create_store_page__WEBPACK_IMPORTED_MODULE_0__.CreateStorePage
    }
];
let CreateStorePageRoutingModule = class CreateStorePageRoutingModule {
};
CreateStorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateStorePageRoutingModule);



/***/ }),

/***/ 7032:
/*!*************************************************************************!*\
  !*** ./src/app/store-listing/pages/create-store/create-store.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStorePageModule": () => (/* binding */ CreateStorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _create_store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-store-routing.module */ 64155);
/* harmony import */ var _create_store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-store.page */ 60322);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CreateStorePageModule = class CreateStorePageModule {
};
CreateStorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _create_store_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateStorePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_create_store_page__WEBPACK_IMPORTED_MODULE_1__.CreateStorePage]
    })
], CreateStorePageModule);



/***/ }),

/***/ 60322:
/*!***********************************************************************!*\
  !*** ./src/app/store-listing/pages/create-store/create-store.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateStorePage": () => (/* binding */ CreateStorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-store.page.html */ 2939);
/* harmony import */ var _create_store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-store.page.scss */ 45775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 67606);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 12628);
/* harmony import */ var src_app_services_location_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location-api.service */ 58883);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









let CreateStorePage = class CreateStorePage {
    constructor(_locationService, _formBuilder, _router) {
        this._locationService = _locationService;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.selections = [];
        this.visible = false;
        this.filter = {
            address: {
                country: '',
                city: '',
                district: '',
            },
        };
        this.workingHours = [];
        this.days = [];
        this.image = [];
        this.isLoading = true;
        this.coordinates = [48, 2];
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apikey });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getCountries();
            this.storeForm = this._formBuilder.group({
                nameForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                mailForm: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                    ]),
                ],
                phoneForm: [
                    '',
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
                    ]),
                ],
                countryForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                cityForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                districtForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                adressForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                descriptionForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                imageForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            });
            this.addSelection();
            this.isLoading = false;
        });
    }
    setCoordinates(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("addrs", address);
            var geocoder = new window.google.maps.Geocoder();
            const coordinatesPromise = new Promise((resolve, reject) => {
                geocoder.geocode({
                    address: address,
                }, function (results, status) {
                    if (results) {
                        let loc = results[0].geometry.location.toJSON();
                        resolve(loc);
                    }
                });
            });
            coordinatesPromise.then(res => {
                this.coordinates = [res['lng'], res['lat']];
            });
        });
    }
    addSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selections.length == 7) {
                return;
            }
            this.selections.push({ option: '' });
            this.storeForm.addControl(`dateForm${this.selections.length}`, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]+-([0-1]?[0-9]|2[0-3]):[0-5][0-9]$'),
            ])));
        });
    }
    removeSelection() {
        this.storeForm.removeControl(`dateForm${this.selections.length}`);
        this.selections.pop();
    }
    userUploadedImage() {
        this.visible = true;
        this.storeForm.patchValue({ imageForm: 'value' });
        this.image.push('https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61b362f197a0a8002e6a5256?alt=media&timestamp=1642682989698');
        this.visible = false;
    }
    getCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.countries = yield this._locationService.getCountries();
            this.countries = this.countries['data'];
        });
    }
    countryChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.filter.address.country = value;
            let citiesOfcountry = yield this._locationService.getCityByCountry(value);
            this.cities = citiesOfcountry['data']['states'];
            this.filter.address.city = '';
            this.filter.address.district = '';
        });
    }
    cityChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.filter.address.city = value;
            let stateOfcity = yield this._locationService.getStateByCity(this.filter.address.country, value);
            this.states = stateOfcity['data'];
            this.filter.address.district = '';
        });
    }
    districtChange(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.filter.address.district = value;
            yield this.setCoordinates(this.filter.address.city + " " + value);
        });
    }
    create() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            for (let a = 1; a <= this.selections.length; a += 1) {
                this.days.push(this.storeForm.value[`dateForm${a}`].split('-'));
            }
            let i = 1;
            this.days.forEach((element) => {
                this.workingHours.push({
                    day_of_week: i,
                    hours: [{ from: element[0], until: element[1] }],
                });
                i += 1;
            });
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.place.insert({
                mail: this.storeForm.value.mailForm,
                description: this.storeForm.value.descriptionForm,
                phone: this.storeForm.value.phoneForm,
                adress: this.storeForm.value.adressForm,
                city: this.storeForm.value.cityForm,
                country: this.storeForm.value.countryForm,
                district: this.storeForm.value.district,
                name: this.storeForm.value.nameForm,
                images: this.image,
                working_hours: this.workingHours,
                location: {
                    type: 'Point',
                    coordinates: this.coordinates,
                },
            });
            this._router.navigate(['/store-listing/']);
        });
    }
};
CreateStorePage.ctorParameters = () => [
    { type: src_app_services_location_api_service__WEBPACK_IMPORTED_MODULE_4__.LocationApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
CreateStorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-store',
        template: _raw_loader_create_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateStorePage);



/***/ }),

/***/ 45775:
/*!*************************************************************************!*\
  !*** ./src/app/store-listing/pages/create-store/create-store.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content div {\n  padding: 10px 10px;\n}\n:host ion-content div #image {\n  padding: 0;\n  width: 100%;\n  height: 210px;\n  background: #eaeaea;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n}\n:host ion-content div #image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host ion-content div .description {\n  border-top: 1px solid #eaeaea;\n  border-bottom: 1px solid #eaeaea;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n:host ion-content div .description ion-textarea {\n  height: 90px;\n}\n:host ion-content div .info {\n  padding: 0;\n}\n:host ion-content div .info ion-item {\n  --border-color: #eaeaea;\n}\n:host ion-content div .info ion-item ion-input {\n  --padding-start: 10px;\n}\n:host ion-content div .content {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n:host ion-content div .content .survey-title {\n  width: 100%;\n  border-bottom: 1px solid #eaeaea;\n  font-size: 18px;\n}\n:host ion-content div .content .selections-container {\n  margin-top: 20px;\n  width: 100%;\n  padding: 0 20px;\n}\n:host ion-content div .content .selections-container ion-input {\n  border-bottom: 1px solid #eaeaea;\n  padding: 0 10px;\n}\n:host ion-content div .image {\n  background: black !important;\n}\n:host ion-content div .adress {\n  padding-top: 0;\n}\n:host ion-content div .adress ion-item {\n  --border-color: #eaeaea;\n}\n:host ion-content div .adress ion-textarea {\n  height: 90px;\n  border-bottom: 1px solid #eaeaea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxrQkFBQTtBQURaO0FBRVk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBaEI7QUFDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ3BCO0FBRVk7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFoQjtBQUNnQjtFQUNJLFlBQUE7QUFDcEI7QUFFWTtFQUNJLFVBQUE7QUFBaEI7QUFDZ0I7RUFDSSx1QkFBQTtBQUNwQjtBQUFvQjtFQUNJLHFCQUFBO0FBRXhCO0FBRVk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQWhCO0FBRWdCO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUFwQjtBQUdnQjtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFEcEI7QUFFb0I7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7QUFBeEI7QUFJWTtFQUNJLDRCQUFBO0FBRmhCO0FBSVk7RUFDSSxjQUFBO0FBRmhCO0FBR2dCO0VBQ0ksdUJBQUE7QUFEcEI7QUFHZ0I7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7QUFEcEIiLCJmaWxlIjoiY3JlYXRlLXN0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICAjaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZWFlYWVhO1xuICAgICAgICAgICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgLnN1cnZleS10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZWxlY3Rpb25zLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWFnZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkcmVzc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICBpb24taXRlbXtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNlYWVhZWE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 2939:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-listing/pages/create-store/create-store.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create Store</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [formGroup]=\"storeForm\" *ngIf=\"!isLoading\">\n    <div *ngIf=\"!image.length\" id=\"image\">\n      <spica-upload-image (change)=\"userUploadedImage()\"></spica-upload-image>\n    </div>\n    <div id=\"image\" *ngIf=\"image.length\">\n      <img [src]=\"image\">\n    </div>\n    <ion-progress-bar *ngIf=\"visible\" type=\"indeterminate\"></ion-progress-bar>\n    <div class=\"description\">\n      <ion-textarea  formControlName=\"descriptionForm\"  placeholder=\"Explain your Store...\"></ion-textarea>\n    </div>\n    <div class=\"info\">\n      <ion-item class=\"ion-no-padding\">\n        <ion-input  formControlName=\"nameForm\" placeholder=\"Name\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\">\n        <ion-input type=\"phone\"  formControlName=\"phoneForm\"  placeholder=\"Phone\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\">\n        <ion-input type=\"mail\" formControlName=\"mailForm\" placeholder=\"Email\"></ion-input>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\">\n        <ion-input readonly placeholder=\"Working Hours\"></ion-input>\n        <ion-button color=\"medium\" (click)=\"addSelection()\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selections.length\" color=\"medium\" (click)=\"removeSelection()\">\n          <ion-icon name=\"remove-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </div>\n    <div class=\"content\" *ngIf=\"selections.length\">\n      <ion-item lines=\"none\" *ngFor=\"let selection of selections; let idx = index\" class=\"selections-container\">\n        <ion-label>{{selection.label}}{{idx+1}}.</ion-label>\n        <ion-input [style]=\"storeForm.controls['dateForm'+(idx+1)].dirty && storeForm.controls['dateForm'+(idx+1)].invalid? 'border-bottom: 1px solid red' :''\" \n          [formControlName]=\"'dateForm'+ (idx+1)\"\n          placeholder=\"09:00-12:00\" ></ion-input>\n      </ion-item>\n    </div>\n\n    <div class=\"adress\">\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\">Country</ion-label>\n        <ion-select  formControlName=\"countryForm\"  (ionChange)=\"countryChange($event.target['value'])\">\n          <ion-select-option [value]=\"country.name\" *ngFor=\"let country of countries\">\n            {{ country.name }}</ion-select-option>\n        </ion-select>\n      </ion-item >\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\">City</ion-label>\n        <ion-select  formControlName=\"cityForm\" (ionChange)=\"cityChange($event.target['value'])\" [disabled]=\"!filter.address.country\">\n          <ion-select-option [value]=\"city.name\" *ngFor=\"let city of cities\">\n            {{ city.name }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class=\"ion-no-padding\">\n        <ion-label position=\"floating\">District</ion-label>\n        <ion-select  formControlName=\"districtForm\" (ionChange)=\"districtChange($event.target['value'])\" [disabled]=\"!filter.address.city\">\n          <ion-select-option [value]=\"state\" *ngFor=\"let state of states\">\n            {{ state }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-textarea  formControlName=\"adressForm\" placeholder=\"Full Adress...\"></ion-textarea>\n    </div>\n    <ion-button (click)=\"create()\"  [disabled]=\"!storeForm.valid\" expand=\"block\" mode=\"ios\" color=\"dark\">Create Store</ion-button>\n  </div>\n</ion-content>\n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>");

/***/ })

}]);
//# sourceMappingURL=src_app_store-listing_pages_create-store_create-store_module_ts.js.map