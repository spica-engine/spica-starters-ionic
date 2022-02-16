(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_forum_pages_create-forum_create-forum_module_ts"],{

/***/ 89189:
/*!*************************************************************************!*\
  !*** ./src/app/forum/pages/create-forum/create-forum-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateForumPageRoutingModule": () => (/* binding */ CreateForumPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _create_forum_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-forum.page */ 43777);




const routes = [
    {
        path: '',
        component: _create_forum_page__WEBPACK_IMPORTED_MODULE_0__.CreateForumPage
    }
];
let CreateForumPageRoutingModule = class CreateForumPageRoutingModule {
};
CreateForumPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateForumPageRoutingModule);



/***/ }),

/***/ 81144:
/*!*****************************************************************!*\
  !*** ./src/app/forum/pages/create-forum/create-forum.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateForumPageModule": () => (/* binding */ CreateForumPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _create_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-forum-routing.module */ 89189);
/* harmony import */ var _create_forum_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-forum.page */ 43777);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CreateForumPageModule = class CreateForumPageModule {
};
CreateForumPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _create_forum_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateForumPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_create_forum_page__WEBPACK_IMPORTED_MODULE_1__.CreateForumPage]
    })
], CreateForumPageModule);



/***/ }),

/***/ 43777:
/*!***************************************************************!*\
  !*** ./src/app/forum/pages/create-forum/create-forum.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateForumPage": () => (/* binding */ CreateForumPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_forum_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-forum.page.html */ 85856);
/* harmony import */ var _create_forum_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-forum.page.scss */ 29478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 19533);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 49078);







let CreateForumPage = class CreateForumPage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this.categories = [];
        this.postText = '';
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.getCategories();
        });
    }
    getCategories() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.category.getAll().then((res) => {
            this.categories = res;
        });
    }
    onChange(ids) {
        this.forumCategories = ids;
    }
    createPost() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this._route.navigateByUrl('/forum', { replaceUrl: true });
            this.newComment = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.comment.insert({
                user: this.user._id,
                content: this.postText,
                is_post: true,
                category: this.forumCategories,
            });
        });
    }
};
CreateForumPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
CreateForumPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-create-forum',
        template: _raw_loader_create_forum_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_forum_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreateForumPage);



/***/ }),

/***/ 29478:
/*!*****************************************************************!*\
  !*** ./src/app/forum/pages/create-forum/create-forum.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content ion-card {\n  margin: 0;\n  height: 100%;\n}\n:host ion-content ion-card ion-card-header ion-card-title {\n  text-align: center;\n}\n:host ion-content ion-card ion-card-content ion-textarea {\n  --background: #f0f3f5;\n  padding: 8px;\n  border-radius: 6px;\n}\n:host ion-content ion-card ion-card-content .category {\n  margin: 20px 0;\n}\n:host ion-content ion-card ion-card-content ion-label {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n:host ion-content ion-card ion-card-content ion-label ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  width: 130px;\n}\n:host ion-content ion-card ion-card-content ion-label ion-button ion-icon {\n  margin-left: 5px;\n  font-size: 1.2rem;\n}\n:host ion-content ion-card ion-card-content ion-label ion-item {\n  padding: 10px;\n  display: flex;\n}\n:host ion-content ion-card ion-card-content ion-label ion-item ion-label {\n  font-weight: 600;\n}\n:host ion-content ion-card ion-card-content ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1mb3J1bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQUROO0FBR1E7RUFDRSxrQkFBQTtBQURWO0FBS1E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhWO0FBS1E7RUFDSSxjQUFBO0FBSFo7QUFLUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSFY7QUFJVTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRlo7QUFHWTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFEZDtBQUlVO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFGWjtBQUdZO0VBQ0UsZ0JBQUE7QUFEZDtBQUtRO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSFYiLCJmaWxlIjoiY3JlYXRlLWZvcnVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgaW9uLXRleHRhcmVhIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogI2YwZjNmNTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhdGVnb3J5e1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 85856:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forum/pages/create-forum/create-forum.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Create Post</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-textarea rows=\"10\" cols=\"10\" [(ngModel)]=\"postText\" placeholder=\"Enter post details...\"></ion-textarea>\n      <ion-label class=\"category\">\n          <ion-label>Category</ion-label>\n          <ion-select multiple okText=\"Okay\" cancelText=\"Close\" (ionChange)=\"onChange($event.target['value'])\">\n            <ion-select-option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.name}}</ion-select-option>\n          </ion-select>      \n      </ion-label>\n      <ion-button expand=\"block\" (click)=\"createPost()\" [disabled]=\"!postText.length\">CREATE POST</ion-button>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forum_pages_create-forum_create-forum_module_ts.js.map