(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_survey_survey_module_ts"],{

/***/ 70391:
/*!*************************************************************!*\
  !*** ./src/app/forum/pages/survey/survey-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyPageRoutingModule": () => (/* binding */ SurveyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _survey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey.page */ 86373);




const routes = [
    {
        path: '',
        component: _survey_page__WEBPACK_IMPORTED_MODULE_0__.SurveyPage
    }
];
let SurveyPageRoutingModule = class SurveyPageRoutingModule {
};
SurveyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SurveyPageRoutingModule);



/***/ }),

/***/ 63655:
/*!*****************************************************!*\
  !*** ./src/app/forum/pages/survey/survey.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyPageModule": () => (/* binding */ SurveyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _survey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey-routing.module */ 70391);
/* harmony import */ var _survey_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey.page */ 86373);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let SurveyPageModule = class SurveyPageModule {
};
SurveyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _survey_routing_module__WEBPACK_IMPORTED_MODULE_0__.SurveyPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_survey_page__WEBPACK_IMPORTED_MODULE_1__.SurveyPage]
    })
], SurveyPageModule);



/***/ }),

/***/ 86373:
/*!***************************************************!*\
  !*** ./src/app/forum/pages/survey/survey.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyPage": () => (/* binding */ SurveyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_survey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./survey.page.html */ 34080);
/* harmony import */ var _survey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey.page.scss */ 63662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/environment */ 18189);








let SurveyPage = class SurveyPage {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.survey = [];
        this.control = [];
        this.surveyAnswers = {};
        this.defaultImage = _services_environment__WEBPACK_IMPORTED_MODULE_4__.environment.user_img;
        _authService.initBucket();
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            if (!this.userId) {
                this._router.navigateByUrl('/forum/authorization', { replaceUrl: true });
            }
            else {
                yield this.getUser();
                this.getSurvey();
            }
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.get(this.userId);
        });
    }
    _vote(survey, option) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let clickedOption = survey.selections.find((el) => {
                return el.option == option;
            });
            let myVote = (_a = clickedOption.voter) === null || _a === void 0 ? void 0 : _a.find((el) => {
                return el == this.user._id;
            });
            survey.selections.forEach((el) => {
                var _a;
                if ((_a = el.voter) === null || _a === void 0 ? void 0 : _a.includes(this.user._id)) {
                    el.voter = el.voter.filter((voter) => {
                        return voter != this.user._id;
                    });
                }
                if (el.option == option && !myVote) {
                    el.voter = el.voter || [];
                    el.voter.push(this.user._id);
                }
            });
            _services_bucket__WEBPACK_IMPORTED_MODULE_3__.survey.patch({
                _id: survey._id,
                selections: survey.selections,
            });
        });
    }
    getSurvey() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.survey.getAll({ queryParams: { relation: true } })
            .then((res) => {
            this.survey = res;
            this.survey.forEach((el) => {
                el.selections.forEach((option) => {
                    var _a;
                    if ((_a = option.voter) === null || _a === void 0 ? void 0 : _a.includes(this.user._id)) {
                        this.surveyAnswers[el.title] = option.option;
                    }
                });
            });
        });
    }
};
SurveyPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SurveyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-survey',
        template: _raw_loader_survey_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_survey_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SurveyPage);



/***/ }),

/***/ 63662:
/*!*****************************************************!*\
  !*** ./src/app/forum/pages/survey/survey.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar ion-icon {\n  padding: 10px;\n  font-size: 1.2rem;\n}\n:host ion-header .border {\n  display: block;\n  height: 3.5px;\n  width: 100%;\n  position: absolute;\n}\n:host ion-card {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  border: 1px solid #dddddd;\n}\n:host ion-card ion-card-header {\n  display: flex;\n  align-items: center;\n}\n:host ion-card ion-card-header ion-card-title {\n  font-size: 1.1rem;\n  margin: 0 10px 10px 10px;\n}\n:host ion-card ion-card-header .survey-avatar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 15px;\n}\n:host ion-card ion-card-header .survey-avatar ion-avatar {\n  width: 50px;\n  height: 50px;\n}\n:host ion-card ion-card-header .survey-avatar span {\n  font-size: 0.88rem;\n  margin: 5px;\n}\n:host ion-card ion-card-content ion-item ion-checkbox {\n  --border-radius: 50%;\n  --size: 20px;\n  --transition: 0.5s ease-in;\n}\n:host ion-card ion-card-content ion-item ion-label {\n  font-size: 0.9rem;\n  text-indent: 1px;\n  text-decoration: inherit;\n}\n:host ion-card ion-card-content ion-item span {\n  color: gray;\n  font-size: 0.6rem;\n  text-align: right;\n}\n:host ion-card ion-radio-group {\n  height: 300px;\n}\n:host ion-card ion-radio-group ion-item {\n  margin: 0 20px 20px 20px;\n}\n:host ion-card ion-radio-group ion-item span {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFGaEI7QUFLUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSFo7QUFRSTtFQUNJLDREQUFBO0VBQ0EseUJBQUE7QUFOUjtBQU9RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTFo7QUFNWTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7QUFKaEI7QUFNWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSmhCO0FBS2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFIcEI7QUFLZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFIcEI7QUFTZ0I7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQVBwQjtBQVNnQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQVBwQjtBQVNnQjtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUHBCO0FBV1E7RUFDSSxhQUFBO0FBVFo7QUFVWTtFQUNJLHdCQUFBO0FBUmhCO0FBaUJnQjtFQUNJLGlCQUFBO0FBZnBCIiwiZmlsZSI6InN1cnZleS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24taGVhZGVyIHtcclxuICAgICAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9yZGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogMy41cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdXJ2ZXktYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgICAgICBpb24tY2hlY2tib3h7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcmFkaW8tZ3JvdXB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpb24tcmFkaW97XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 34080:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/survey/survey.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"forum\"></spica-menu-bar>\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Survey Page</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div class=\"border\"></div>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let survey of survey\">\n    <ion-card-header>\n      <div class=\"survey-avatar\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"survey.user['profile_picture']||defaultImage\" />\n        </ion-avatar>\n        <span>{{survey.user['nick']}}</span>\n      </div>\n      <ion-card-title>{{survey.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-radio-group\n      allowEmptySelection\n      [value]=\"surveyAnswers[survey.title]\"\n      (click)=\"_vote(survey, $event.target['value'])\"\n    >\n      <ion-item *ngFor=\"let select of survey.selections\" lines=\"none\">\n        <ion-radio mode=\"md\" slot=\"start\" [value]=\"select.option\"></ion-radio>\n        <ion-label>{{select.option}}</ion-label>\n        <span>{{select.voter?.length}}</span>\n      </ion-item>\n    </ion-radio-group>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_survey_survey_module_ts.js.map