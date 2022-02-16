(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_social-media_pages_profile-edit_profile-edit_module_ts"],{

/***/ 35242:
/*!********************************************************************************!*\
  !*** ./src/app/social-media/pages/profile-edit/profile-edit-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageRoutingModule": () => (/* binding */ ProfileEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit.page */ 34993);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPage,
            },
            {
                path: ':id',
                component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPage,
            },
        ],
    },
];
let ProfileEditPageRoutingModule = class ProfileEditPageRoutingModule {
};
ProfileEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileEditPageRoutingModule);



/***/ }),

/***/ 26731:
/*!************************************************************************!*\
  !*** ./src/app/social-media/pages/profile-edit/profile-edit.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "ProfileEditPageModule": () => (/* binding */ ProfileEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit-routing.module */ 35242);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page */ 34993);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 65700);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);












function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, "../assets/i18n/", ".json");
}
let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient],
                },
                extend: true,
            }),
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_1__.ProfileEditPage]
    })
], ProfileEditPageModule);



/***/ }),

/***/ 34993:
/*!**********************************************************************!*\
  !*** ./src/app/social-media/pages/profile-edit/profile-edit.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPage": () => (/* binding */ ProfileEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-edit.page.html */ 27018);
/* harmony import */ var _profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page.scss */ 76199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ 4957);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/image.service */ 70251);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/environment */ 19874);








let ProfileEditPage = class ProfileEditPage {
    constructor(userService, imageService, router, activatedRoute) {
        this.userService = userService;
        this.imageService = imageService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.validUsername = true;
        this.loading = {
            main: true,
            image_uploading_loading: true,
            username_check: false,
        };
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.image_uploading_loading = false;
            let user_id = this.activatedRoute.snapshot.paramMap.get('id');
            if (user_id == 'add') {
                this.me = {
                    identity_id: this.userService.me.identity_id,
                    last_online_date: this.userService.me.last_online_date,
                    notification: this.userService.me.notification,
                    visibility: 'public',
                    username: '',
                };
            }
            else
                this.me = yield this.userService.getUserById(user_id);
            this.loading.main = false;
        });
    }
    userUploadedImage(data) {
        this.loading.image_uploading_loading = true;
        let file_buf = this.imageService.toBuffer(data, 'jpeg');
        let bufWithMeta = {
            contentType: 'image/jpeg',
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.me.thumbnail &&
            this.me.thumbnail.includes(_services_environment__WEBPACK_IMPORTED_MODULE_4__.environment.project_id)) {
            let splitArr = this.me.thumbnail.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this.imageService
            .insert(bufWithMeta, imageId)
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.me.thumbnail = res.url + `&timestamp=${new Date().getTime()}`;
            yield this.userService.updateProfilePhoto(this.me.thumbnail);
            this.loading.image_uploading_loading = false;
        }))
            .catch((e) => {
            console.log('error : ', e);
            this.loading.image_uploading_loading = false;
        });
    }
    updateProfile() {
        this.loading.main = true;
        this.userService.updateProfile(this.me).then((_) => this.router.navigate(['/social-media/tabs/profile', this.me._id], {
            replaceUrl: true,
        }));
    }
    checkUserName() {
        this.validUsername = false;
        this.loading.username_check = true;
        this.userService.getUserByUsername(this.me.username).then((user) => {
            var _a;
            this.validUsername =
                (!user[0] || this.me._id == ((_a = user[0]) === null || _a === void 0 ? void 0 : _a._id)) &&
                    !this.me.username.split(' ')[1];
            this.loading.username_check = false;
        });
    }
    isInvalidFieldExist() {
        return this.me ? this.me.username.length < 5 : false;
    }
};
ProfileEditPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
ProfileEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile-edit',
        template: _raw_loader_profile_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileEditPage);



/***/ }),

/***/ 76199:
/*!************************************************************************!*\
  !*** ./src/app/social-media/pages/profile-edit/profile-edit.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .profile-card {\n  display: flex;\n  flex-direction: column;\n}\n:host .profile-card .primary {\n  padding-top: 15px;\n  border-radius: 5px;\n  float: left;\n  margin-bottom: 15px;\n  background: var(--cd-component-background-color);\n}\n:host .profile-card .primary ion-label {\n  font-weight: 600;\n  color: var(--ion-color-light-shade);\n}\n:host .profile-card .primary .image-container {\n  text-align: center;\n  width: 100%;\n  min-height: 128px;\n  position: relative;\n}\n:host .profile-card .primary .image-container .image {\n  position: relative;\n  height: 128px;\n  width: 128px;\n  border-radius: 100%;\n  object-fit: cover;\n}\n:host .profile-card .primary .image-container .on-center-image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 20px;\n  transform: translate(-50%, -50%);\n}\n:host .profile-card .primary .input {\n  padding: 0 10px;\n}\n:host .profile-card .primary textarea {\n  width: 100%;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZWRpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7QUFFUjtBQUFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdWO0FBRFE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBR1Y7QUFBTTtFQUNFLGVBQUE7QUFFUjtBQUNNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNSIiwiZmlsZSI6InByb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5wcm9maWxlLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAucHJpbWFyeSB7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNkLWNvbXBvbmVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgfVxuICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEyOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgICAgd2lkdGg6IDEyOHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm9uLWNlbnRlci1pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIH1cblxuICAgICAgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogMHB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 27018:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media/pages/profile-edit/profile-edit.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"me\">{{(me._id ?  \"edit-profile\": \"add-profile\" )| translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        [disabled]=\"!validUsername || (me && me?.username?.length < 5)\"\n        (click)=\"updateProfile()\"\n      >\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-progress-bar\n    *ngIf=\"loading.image_uploading_loading\"\n    type=\"indeterminate\"\n  ></ion-progress-bar>\n  <div class=\"profile-card\" *ngIf=\"!loading.main && me\">\n    <div class=\"primary\">\n      <div class=\"image-container\">\n        <img\n          class=\"image\"\n          *ngIf=\"me?.thumbnail\"\n          [src]=\"me?.thumbnail\"\n          [alt]=\"'profile-photo' | translate\"\n        />\n        <div class=\"on-center-image\" *ngIf=\"!loading.image_uploading_loading\">\n          <spica-upload-image (change)=\"userUploadedImage($event)\"></spica-upload-image>\n        </div>\n      </div>\n      <div class=\"input\">\n        <ion-label position=\"floating\">{{\"username\" | translate}}</ion-label>\n        <ion-item>\n          <ion-input\n            [(ngModel)]=\"me.username\"\n            (ngModelChange)=\"checkUserName()\"\n            debounce=\"500\"\n          ></ion-input>\n          <ion-spinner\n            *ngIf=\"loading.username_check\"\n            class=\"suffix-icon\"\n            name=\"crescent\"\n            slot=\"end\"\n          ></ion-spinner>\n        </ion-item>\n      </div>\n      <div class=\"input\">\n        <ion-label position=\"floating\">{{\"name\" | translate}}</ion-label>\n        <ion-item>\n          <ion-input [(ngModel)]=\"me.name\"></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"input\">\n        <ion-label position=\"floating\">{{\"surname\" | translate}}</ion-label>\n        <ion-item>\n          <ion-input [(ngModel)]=\"me.surname\"></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"input\">\n        <ion-label position=\"floating\">{{\"bio\" | translate}}</ion-label>\n        <ion-item>\n          <textarea rows=\"6\" [(ngModel)]=\"me.headline\"></textarea>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n  <ion-spinner\n    *ngIf=\"loading.main\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_social-media_pages_profile-edit_profile-edit_module_ts.js.map