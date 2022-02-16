(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_job-portal_pages_company_company_module_ts"],{

/***/ 7327:
/*!********************************************************************!*\
  !*** ./src/app/job-portal/pages/company/company-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyPageRoutingModule": () => (/* binding */ CompanyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _company_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.page */ 96357);




const routes = [
    {
        path: ':id',
        component: _company_page__WEBPACK_IMPORTED_MODULE_0__.CompanyPage,
    },
];
let CompanyPageRoutingModule = class CompanyPageRoutingModule {
};
CompanyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompanyPageRoutingModule);



/***/ }),

/***/ 57600:
/*!************************************************************!*\
  !*** ./src/app/job-portal/pages/company/company.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyPageModule": () => (/* binding */ CompanyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-routing.module */ 7327);
/* harmony import */ var _company_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.page */ 96357);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CompanyPageModule = class CompanyPageModule {
};
CompanyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _company_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_company_page__WEBPACK_IMPORTED_MODULE_1__.CompanyPage]
    })
], CompanyPageModule);



/***/ }),

/***/ 96357:
/*!**********************************************************!*\
  !*** ./src/app/job-portal/pages/company/company.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyPage": () => (/* binding */ CompanyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_company_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./company.page.html */ 10204);
/* harmony import */ var _company_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.page.scss */ 88072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/job-portal/services/bucket */ 58652);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var src_app_services_location_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location-api.service */ 58883);
/* harmony import */ var src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/social-media/services/image.service */ 70251);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/environment */ 5569);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ 43421);












let CompanyPage = class CompanyPage {
    constructor(_route, _imageService, _locationService, _formBuilder, _commonService, _router, _userservice) {
        this._route = _route;
        this._imageService = _imageService;
        this._locationService = _locationService;
        this._formBuilder = _formBuilder;
        this._commonService = _commonService;
        this._router = _router;
        this._userservice = _userservice;
        this.company = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.initForm();
            let companyId = yield this._route.snapshot.paramMap.get('id');
            if (companyId != 'add')
                this.company = yield src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__.company.get(companyId, {
                    queryParams: { relation: true },
                });
            else {
                this.initForm();
                this.getCountries();
            }
        });
    }
    coverUpload(data) {
        let mimetype = data.split(';')[0].split(':')[1];
        let file_buf = this._imageService.toBuffer(data);
        let bufWithMeta = {
            contentType: mimetype,
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.company.cover_photo &&
            this.company.cover_photo.includes(_services_environment__WEBPACK_IMPORTED_MODULE_6__.environment.project_id)) {
            let splitArr = this.company.cover_photo.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this._imageService.insert(bufWithMeta, imageId).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.company.cover_photo = res.url + `&timestamp=${new Date().getTime()}`;
            // await user.patch({
            //   _id: this.company._id,
            //   cover_photo: this.company.cover_photo,
            // });
        }));
    }
    logoUpload(data) {
        let mimetype = data.split(';')[0].split(':')[1];
        let file_buf = this._imageService.toBuffer(data);
        let bufWithMeta = {
            contentType: mimetype,
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.company.logo &&
            this.company.logo.includes(_services_environment__WEBPACK_IMPORTED_MODULE_6__.environment.project_id)) {
            let splitArr = this.company.logo.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this._imageService.insert(bufWithMeta, imageId).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.company.logo = res.url + `&timestamp=${new Date().getTime()}`;
            // await user.patch({
            //   _id: this.company._id,
            //   cover_photo: this.company.cover_photo,
            // });
        }));
    }
    initForm() {
        this.companyForm = this._formBuilder.group({
            title: '',
            country: '',
            city: '',
            logo: '',
            cover_photo: '',
            description: '',
            web_site: '',
        });
    }
    countryChange() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let citiesOfcountry = yield this._locationService.getCityByCountry(this.companyForm.controls['country'].value);
            this.cities = citiesOfcountry['data']['states'];
            this.companyForm.controls['city'].setValue('');
        });
    }
    getCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.countries = yield this._locationService.getCountries();
            this.countries = this.countries['data'];
        });
    }
    addCompany() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let companyData = this.companyForm.value;
            companyData['address'] = {
                country: companyData['country'],
                city: companyData['city'],
            };
            companyData['logo'] = this.company.logo;
            companyData['cover_photo'] = this.company.cover_photo;
            delete companyData['country'];
            delete companyData['city'];
            let newCompany = yield src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__.company.insert(companyData);
            this._userservice.me.companies = this._userservice.me.companies
                ? this._userservice.me.companies
                : [];
            this._userservice.me.companies = [
                ...this._userservice.me.companies,
                newCompany._id,
            ];
            yield src_app_job_portal_services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.patch({
                _id: this._userservice.me._id,
                companies: this._userservice.me.companies,
            });
            this._commonService.presentToast(companyData['title'] + ' company is successfully created', 2000);
            this._router.navigateByUrl('/job-portal/profile/me/my-companies', {
                replaceUrl: true,
            });
        });
    }
};
CompanyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService },
    { type: src_app_services_location_api_service__WEBPACK_IMPORTED_MODULE_4__.LocationApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService }
];
CompanyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-company',
        template: _raw_loader_company_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_company_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompanyPage);



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

/***/ 88072:
/*!************************************************************!*\
  !*** ./src/app/job-portal/pages/company/company.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .image-container {\n  position: relative;\n}\n:host .image-container .cover-img {\n  height: 150px;\n  box-shadow: 2px 22px 52px -19px rgba(0, 0, 0, 0.43);\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  position: relative;\n}\n:host .image-container .cover-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-bottom-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n:host .image-container .logo {\n  bottom: -30px;\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n:host .image-container .logo ::ng-deep spica-upload-image ion-icon {\n  font-size: 23px;\n}\n:host .image-container .logo img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n:host .image-container spica-upload-image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host .image-container .opacity {\n  opacity: 0.8;\n}\n:host .image-container .broken-img {\n  object-fit: contain !important;\n}\n:host .metadata {\n  margin: 40px 20px 0;\n}\n:host .metadata .address {\n  opacity: 0.6;\n  font-size: 11px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: 10px;\n  margin-bottom: 5px;\n}\n:host .metadata .company-info {\n  margin-top: 10px;\n}\n:host .metadata .company-info .description {\n  padding-left: 10px;\n  margin-bottom: 20px;\n  line-height: 21px;\n  opacity: 0.8;\n}\n:host .form-container .action-button {\n  width: 100%;\n  margin: 20px 0;\n  text-align: center;\n}\n:host .form-container .action-button ion-button {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBRVI7QUFDSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBQ047QUFFVTtFQUNFLGVBQUE7QUFBWjtBQUlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUhOO0FBS0k7RUFDRSxZQUFBO0FBSE47QUFLSTtFQUNFLDhCQUFBO0FBSE47QUFNRTtFQUNFLG1CQUFBO0FBSko7QUFLSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSE47QUFLSTtFQUNFLGdCQUFBO0FBSE47QUFJTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGUjtBQU9JO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUxOO0FBTU07RUFDRSxVQUFBO0FBSlIiLCJmaWxlIjoiY29tcGFueS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY292ZXItaW1nIHtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBib3gtc2hhZG93OiAycHggMjJweCA1MnB4IC0xOXB4IHJnYigwIDAgMCAvIDQzJSk7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICBzcGljYS11cGxvYWQtaW1hZ2Uge1xuICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHNwaWNhLXVwbG9hZC1pbWFnZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgICAub3BhY2l0eSB7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAgIC5icm9rZW4taW1nIHtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLm1ldGFkYXRhIHtcbiAgICBtYXJnaW46IDQwcHggMjBweCAwO1xuICAgIC5hZGRyZXNzIHtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmNvbXBhbnktaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZm9ybS1jb250YWluZXIge1xuICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 10204:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/company/company.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{companyForm?.controls['title'].value }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"image-container\">\n    <div class=\"cover-img\">\n      <img\n        [class.opacity]=\"!company._id\"\n        [class.broken-img]=\"company._id && !company.cover_photo\"\n        *ngIf=\"company._id || company.cover_photo\"\n        [src]=\"company.cover_photo || '../../../../assets/job-portal/broken-image.png'\"\n        alt=\"\"\n      />\n      <spica-upload-image\n        *ngIf=\"!company._id\"\n        (change)=\"coverUpload($event)\"\n      ></spica-upload-image>\n    </div>\n    <div class=\"logo\">\n      <img\n        [class.opacity]=\"!company._id\"\n        [class.broken-img]=\"company._id && !company.logo\"\n        *ngIf=\"company._id || company.logo\"\n        [src]=\"company.logo || '../../../../assets/job-portal/broken-image.png'\"\n        alt=\"\"\n      />\n      <spica-upload-image\n        *ngIf=\"!company._id\"\n        (change)=\"logoUpload($event)\"\n      ></spica-upload-image>\n    </div>\n  </div>\n  <div class=\"metadata\" *ngIf=\"company._id\">\n    <div class=\"company-info\">\n      <h5>{{company.title}}</h5>\n      <div class=\"address\">\n        {{company['address']['city']}}/{{company['address']['country']}}\n      </div>\n      <div class=\"description\">{{company.description}}</div>\n    </div>\n  </div>\n  <form\n    class=\"metadata form-container\"\n    [formGroup]=\"companyForm\"\n    *ngIf=\"!company._id\"\n  >\n    <ion-item>\n      <ion-label position=\"floating\">Company Name</ion-label>\n      <ion-input formControlName=\"title\" id=\"title\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Country</ion-label>\n      <ion-select\n        required\n        formControlName=\"country\"\n        id=\"country\"\n        (ionChange)=\"countryChange()\"\n      >\n        <ion-select-option\n          [value]=\"country.name\"\n          *ngFor=\"let country of countries\"\n        >\n          {{ country.name }}</ion-select-option\n        >\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">City</ion-label>\n      <ion-select id=\"city\" required formControlName=\"city\">\n        <ion-select-option [value]=\"city.name\" *ngFor=\"let city of cities\">\n          {{ city.name }}</ion-select-option\n        >\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Web Site</ion-label>\n      <ion-input formControlName=\"web_site\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">About</ion-label>\n      <ion-textarea\n        required\n        formControlName=\"description\"\n        id=\"description\"\n      ></ion-textarea>\n    </ion-item>\n    <div class=\"action-button\">\n      <ion-button [disabled]=\"companyForm.invalid\" (click)=\"addCompany()\"\n        >Save</ion-button\n      >\n    </div>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_job-portal_pages_company_company_module_ts.js.map