(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_create-survey_create-survey_module_ts"],{

/***/ 40676:
/*!***************************************************************************!*\
  !*** ./src/app/forum/pages/create-survey/create-survey-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSurveyPageRoutingModule": () => (/* binding */ CreateSurveyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_survey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-survey.page */ 521);




const routes = [
    {
        path: '',
        component: _create_survey_page__WEBPACK_IMPORTED_MODULE_0__.CreateSurveyPage
    }
];
let CreateSurveyPageRoutingModule = class CreateSurveyPageRoutingModule {
};
CreateSurveyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateSurveyPageRoutingModule);



/***/ }),

/***/ 15677:
/*!*******************************************************************!*\
  !*** ./src/app/forum/pages/create-survey/create-survey.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSurveyPageModule": () => (/* binding */ CreateSurveyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _create_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-survey-routing.module */ 40676);
/* harmony import */ var _create_survey_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-survey.page */ 521);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CreateSurveyPageModule = class CreateSurveyPageModule {
};
CreateSurveyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _create_survey_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateSurveyPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_create_survey_page__WEBPACK_IMPORTED_MODULE_1__.CreateSurveyPage]
    })
], CreateSurveyPageModule);



/***/ }),

/***/ 521:
/*!*****************************************************************!*\
  !*** ./src/app/forum/pages/create-survey/create-survey.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSurveyPage": () => (/* binding */ CreateSurveyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_survey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-survey.page.html */ 71317);
/* harmony import */ var _create_survey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-survey.page.scss */ 5611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);







let CreateSurveyPage = class CreateSurveyPage {
    constructor(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.selections = [];
        this.surveyTitle = '';
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            if (!this.user) {
                this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
            }
        });
    }
    createSurvey() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this._router.navigate(['/forum'], { replaceUrl: true });
            this.newSurvey = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.survey.insert({
                user: this.user._id,
                title: this.surveyTitle,
                selections: this.selections,
            });
        });
    }
    addSelection() {
        this.selections.push({ option: '' });
    }
    removeSelection() {
        this.selections.pop();
    }
};
CreateSurveyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
CreateSurveyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-create-survey',
        template: _raw_loader_create_survey_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_survey_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateSurveyPage);



/***/ }),

/***/ 5611:
/*!*******************************************************************!*\
  !*** ./src/app/forum/pages/create-survey/create-survey.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .content {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  padding: 0 20px;\n}\n:host ion-content .content .survey-title {\n  width: 100%;\n  border-bottom: 1px solid;\n  font-size: 18px;\n}\n:host ion-content .content .selections-container {\n  margin-top: 20px;\n  width: 100%;\n  padding: 0 20px;\n}\n:host ion-content .content .selections-container ion-input {\n  border-bottom: 1px solid var(--ion-color-light-shade);\n  padding: 0 10px;\n}\n:host ion-content .content .buttons {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1zdXJ2ZXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUROO0FBR007RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBRFI7QUFJTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFGUjtBQUdRO0VBQ0UscURBQUE7RUFDQSxlQUFBO0FBRFY7QUFLTTtFQUNFLGdCQUFBO0FBSFIiLCJmaWxlIjoiY3JlYXRlLXN1cnZleS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgICAgLnN1cnZleS10aXRsZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdGlvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 71317:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/create-survey/create-survey.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"forum\"></spica-menu-bar>\n\n<ion-content>\n  <div class=\"content\" *ngIf=\"user\">\n    <h1>Create Survey</h1>\n    <ion-item lines=\"none\" class=\"survey-title\">\n      <ion-label position=\"floating\"> Survey Title</ion-label>\n      <ion-input [(ngModel)]=\"surveyTitle\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngFor=\"let selection of selections; let idx = index\" class=\"selections-container\">\n      <ion-label>{{selection.label}}{{idx+1}}.</ion-label>\n      <ion-input\n        placeholder=\"Option\"\n        [(ngModel)]=\"selections[idx].option\"\n      ></ion-input>\n    </ion-item>\n    <ion-row class=\"buttons\">\n      <ion-col\n        ><ion-button color=\"medium\" (click)=\"addSelection()\"\n          ><ion-icon name=\"add-outline\"></ion-icon></ion-button\n      ></ion-col>\n      <ion-col\n        ><ion-button color=\"medium\" (click)=\"removeSelection()\"\n          ><ion-icon name=\"remove-outline\"></ion-icon></ion-button\n      ></ion-col>\n      <ion-col\n        ><ion-button color=\"success\" (click)=\"createSurvey()\" [disabled]=\"!surveyTitle.length || !selections.length\"\n          >Create</ion-button\n        ></ion-col\n      >\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_create-survey_create-survey_module_ts.js.map