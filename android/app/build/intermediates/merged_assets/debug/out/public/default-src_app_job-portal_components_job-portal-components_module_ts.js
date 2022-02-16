(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_job-portal_components_job-portal-components_module_ts"],{

/***/ 87116:
/*!********************************************************************************!*\
  !*** ./src/app/job-portal/components/create-advert/create-advert.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAdvertComponent": () => (/* binding */ CreateAdvertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_advert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-advert.component.html */ 66240);
/* harmony import */ var _create_advert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-advert.component.scss */ 53613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ 2305);









let CreateAdvertComponent = class CreateAdvertComponent {
    constructor(_modalController, _formBuilder, _commonService, _dataService) {
        this._modalController = _modalController;
        this._formBuilder = _formBuilder;
        this._commonService = _commonService;
        this._dataService = _dataService;
        this.selectedCriterias = {};
    }
    ngOnInit() {
        this.initForm();
        this.getCriterias();
    }
    dismiss() {
        this._modalController.dismiss();
    }
    initForm() {
        this.advertForm = this._formBuilder.group({
            header: '',
            company: this.company,
            description: '',
            // criterias: '',
        });
    }
    getCriterias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let criteriasObj = this._dataService.getCriterias();
            this.criterias = criteriasObj;
            this.keysOfCriterias = Object.keys(criteriasObj);
        });
    }
    selectCriteria(event, criteria) {
        if (event.detail.value && event.detail.value.length > 0)
            this.selectedCriterias[criteria] = event.detail.value;
        else
            delete this.selectedCriterias[criteria];
    }
    addAdvert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let formData = this.advertForm.value;
            formData['criterias'] = this.selectedCriterias;
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.job_advert.insert(formData);
            this._commonService.presentToast('Advert has been successfully added', 2000);
            this.dismiss();
            console.log(formData);
        });
    }
};
CreateAdvertComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
CreateAdvertComponent.propDecorators = {
    company: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
CreateAdvertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-advert',
        template: _raw_loader_create_advert_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_advert_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateAdvertComponent);



/***/ }),

/***/ 67367:
/*!****************************************************************************!*\
  !*** ./src/app/job-portal/components/job-applies/job-applies.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobAppliesComponent": () => (/* binding */ JobAppliesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_job_applies_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./job-applies.component.html */ 91422);
/* harmony import */ var _job_applies_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-applies.component.scss */ 51577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 58652);






let JobAppliesComponent = class JobAppliesComponent {
    constructor(_modalController) {
        this._modalController = _modalController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.users = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.getAll({
                queryParams: {
                    filter: { applied_jobs: { $in: [this.job._id] } },
                },
            });
        });
    }
    dismiss() {
        this._modalController.dismiss();
    }
    gotoUser(user) {
        this._modalController.dismiss({ user: user });
    }
};
JobAppliesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
JobAppliesComponent.propDecorators = {
    job: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
JobAppliesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-job-applies',
        template: _raw_loader_job_applies_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_job_applies_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JobAppliesComponent);



/***/ }),

/***/ 19542:
/*!**********************************************************************!*\
  !*** ./src/app/job-portal/components/job-card/job-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobCardComponent": () => (/* binding */ JobCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_job_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./job-card.component.html */ 82923);
/* harmony import */ var _job_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-card.component.scss */ 75072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 43421);








let JobCardComponent = class JobCardComponent {
    constructor(_userService, _commonService, _router, _route) {
        this._userService = _userService;
        this._commonService = _commonService;
        this._router = _router;
        this._route = _route;
        this.routable = true;
        this.clickSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.clickJob = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.loading = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser();
        });
    }
    saveJob() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.me.saved_jobs = this.me.saved_jobs ? this.me.saved_jobs : [];
            this.loading = this.job._id;
            if (this.me.saved_jobs.includes(this.job._id)) {
                this.me.saved_jobs = this.me.saved_jobs.filter((item) => item != this.job._id);
                this._commonService.presentToast('Discarded From Saved Jobs', 2000);
            }
            else {
                this.me.saved_jobs.push(this.job._id);
                this._commonService.presentToast('Added To Saved Jobs', 2000);
            }
            this.clickSaved.emit(this.job);
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({ _id: this.me._id, saved_jobs: this.me.saved_jobs });
            this.loading = '';
        });
    }
    clickedJob() {
        this.clickJob.emit(this.job);
        if (this.routable) {
            this._router.navigate(['jobs', this.job._id], {
                relativeTo: this._route,
            });
        }
    }
};
JobCardComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
JobCardComponent.propDecorators = {
    job: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    routable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    clickSaved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    clickJob: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
JobCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'job-card',
        template: _raw_loader_job_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_job_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JobCardComponent);



/***/ }),

/***/ 83234:
/*!***********************************************************************!*\
  !*** ./src/app/job-portal/components/job-portal-components.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPortalComponentModule": () => (/* binding */ JobPortalComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-card/job-card.component */ 19542);
/* harmony import */ var _create_advert_create_advert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-advert/create-advert.component */ 87116);
/* harmony import */ var _job_applies_job_applies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-applies/job-applies.component */ 67367);











let JobPortalComponentModule = class JobPortalComponentModule {
};
JobPortalComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_job_card_job_card_component__WEBPACK_IMPORTED_MODULE_1__.JobCardComponent, _create_advert_create_advert_component__WEBPACK_IMPORTED_MODULE_2__.CreateAdvertComponent, _job_applies_job_applies_component__WEBPACK_IMPORTED_MODULE_3__.JobAppliesComponent],
        exports: [_job_card_job_card_component__WEBPACK_IMPORTED_MODULE_1__.JobCardComponent, _create_advert_create_advert_component__WEBPACK_IMPORTED_MODULE_2__.CreateAdvertComponent, _job_applies_job_applies_component__WEBPACK_IMPORTED_MODULE_3__.JobAppliesComponent],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.SpicaComponentsModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
    })
], JobPortalComponentModule);



/***/ }),

/***/ 53613:
/*!**********************************************************************************!*\
  !*** ./src/app/job-portal/components/create-advert/create-advert.component.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host form {\n  margin: 0 15px;\n}\n:host form .action-button {\n  width: 100%;\n  margin: 20px 0;\n  text-align: center;\n}\n:host form .action-button ion-button {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hZHZlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUFNO0VBQ0UsVUFBQTtBQUVSIiwiZmlsZSI6ImNyZWF0ZS1hZHZlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvcm0ge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 51577:
/*!******************************************************************************!*\
  !*** ./src/app/job-portal/components/job-applies/job-applies.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list ion-list-header {\n  padding-left: 10px;\n}\n:host ion-list ion-item {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1hcHBsaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usa0JBQUE7QUFETjtBQUdJO0VBQ0ksaUJBQUE7QUFEUiIsImZpbGUiOiJqb2ItYXBwbGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 75072:
/*!************************************************************************!*\
  !*** ./src/app/job-portal/components/job-card/job-card.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .job-card ion-thumbnail img {\n  border-radius: 5px;\n}\n:host .job-card ul {\n  list-style-type: disc;\n  padding-left: 30px;\n}\n:host .job-card .date {\n  width: 100%;\n  text-align: right;\n  font-size: 11px;\n}\n:host .job-card .save {\n  height: 100%;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0Usa0JBQUE7QUFGUjtBQUtJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUhOO0FBS0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSE47QUFLSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUhOIiwiZmlsZSI6ImpvYi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuam9iLWNhcmQge1xuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIC5zYXZlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 66240:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/components/create-advert/create-advert.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Create Advert </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"form-container\" [formGroup]=\"advertForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Header</ion-label>\n      <ion-input formControlName=\"header\" required></ion-input>\n    </ion-item>\n    <ion-list>\n      <h5>Criterias</h5>\n      <ion-item *ngFor=\"let criteria of keysOfCriterias\">\n        <ion-label>{{ criteria | revokedUnderline | titlecase }} </ion-label>\n        <ion-select  (ionChange)=\"selectCriteria($event, criteria)\" multiple=\"true\" cancelText=\"Cancel\" okText=\"Ok\" required>\n          <ion-select-option\n           \n            [value]=\"item\"\n            *ngFor=\"let item of criterias[criteria]\"\n          >\n            {{ item | revokedUnderline | titlecase }}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea\n        required\n        formControlName=\"description\"\n        id=\"description\"\n      ></ion-textarea>\n    </ion-item>\n    <div class=\"action-button\">\n      <ion-button [disabled]=\"advertForm.invalid\" (click)=\"addAdvert()\"\n        >Save</ion-button\n      >\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 91422:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/components/job-applies/job-applies.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Applied Users </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header> Users </ion-list-header>\n    <ion-item\n      *ngFor=\"let user of users\"\n      [detail]=\"true\"\n      (click)=\"gotoUser(user)\"\n    >\n      <!-- <ion-checkbox slot=\"start\"></ion-checkbox> -->\n      <ion-thumbnail slot=\"start\">\n        <img\n          [src]=\"\n            user.profile_picture ||\n            '../../../../assets/job-portal/broken-image.png'\n          \"\n        />\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{ user.name }} {{ user.surname }}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 82923:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/components/job-card/job-card.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"job-card\" >\n  <ion-item button lines=\"none\">\n    <ion-thumbnail slot=\"start\" (click)=\"clickedJob()\">\n      <img\n        [src]=\"\n          job.company['logo'] ||\n          '../../../../assets/job-portal/broken-image.png'\n        \"\n      />\n    </ion-thumbnail>\n    <ion-label (click)=\"clickedJob()\">\n      <h2>\n        <b>{{ job.header }}</b>\n      </h2>\n      <ul>\n        <li>\n          <h4>{{ job.company[\"title\"] }}</h4>\n        </li>\n        <li>\n          <h6>\n            {{ job.company[\"address\"][\"city\"] }}/{{\n              job.company[\"address\"][\"country\"]\n            }}\n          </h6>\n        </li>\n      </ul>\n      <p class=\"date\">{{ job.created_at | date: \"mediumDate\" }}</p>\n    </ion-label>\n    <span (click)=\"saveJob()\" class=\"save\">\n      <ion-spinner\n        *ngIf=\"loading == job._id\"\n        class=\"spinner-center-page\"\n        name=\"crescent\"\n      ></ion-spinner>\n      <ion-icon\n        [name]=\"\n          me?.saved_jobs?.includes(job._id) ? 'bookmark' : 'bookmark-outline'\n        \"\n      ></ion-icon>\n    </span>\n  </ion-item>\n</ion-card>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_job-portal_components_job-portal-components_module_ts.js.map