(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_music-streaming_pages_home_home_module_ts"],{

/***/ 66954:
/*!*******************************************************************!*\
  !*** ./src/app/music-streaming/pages/home/home-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 19040);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_pages_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../list/list.module */ 10515)).then(m => m.ListPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 86088:
/*!***********************************************************!*\
  !*** ./src/app/music-streaming/pages/home/home.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 66954);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 19040);
/* harmony import */ var _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/music-components.module */ 25661);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__.MusicStreamingComponentModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 19040:
/*!*********************************************************!*\
  !*** ./src/app/music-streaming/pages/home/home.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 98783);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 66344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/followable-modal/followable-modal.component */ 60240);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 36997);









let HomePage = class HomePage {
    constructor(_authService, _router, _modalController) {
        this._authService = _authService;
        this._router = _router;
        this._modalController = _modalController;
        this.slideOpts = {
            slidesPerView: 2.4,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this.recommended = [];
        this.followedArtistsIds = [];
        this.isLoading = true;
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            console.log('userid :', this.userId);
            if (this.userId) {
                yield this.getUser();
                if (!this.user.followed_artists.length) {
                    this.followableModal();
                }
                this.recommended = yield this.getRecommended();
            }
            this.isLoading = false;
        });
    }
    getUser() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.user.get(this.userId, {
                queryParams: { relation: true },
            });
            (_a = this.user.followed_artists) === null || _a === void 0 ? void 0 : _a.forEach((el) => {
                this.followedArtistsIds.push(el['_id']);
            });
        });
    }
    navigateToList(id) {
        this._router.navigate([`/music-streaming/tabs/home/list/${id}`], {
            queryParams: { type: 'artist' },
        });
    }
    getRecommended() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.artist.getAll({
            queryParams: { filter: { _id: { $nin: this.followedArtistsIds } } },
        });
    }
    followableModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_2__.FollowableModalComponent,
                componentProps: {
                    type: 'artist',
                },
            });
            modal.onWillDismiss().then((res) => {
                if (!res.data) {
                    return;
                }
                this.getUser();
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 66344:
/*!***********************************************************!*\
  !*** ./src/app/music-streaming/pages/home/home.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .logo {\n  align-items: center;\n  display: flex;\n  color: var(--cd-logo-color);\n  font-weight: bold;\n}\n:host .logo ion-icon {\n  padding-right: 10px;\n}\n:host ion-toolbar {\n  --border-color: var(--cd-divider-color);\n}\n:host ion-toolbar ion-icon {\n  width: 30px;\n  height: 30px;\n}\n:host ion-content .part-container {\n  padding: 25px 0;\n}\n:host ion-content .part-container.last {\n  margin-bottom: 70px;\n}\n:host ion-content .part-container .part-title {\n  margin-left: 15px;\n  font-size: 20px;\n  font-weight: 700;\n}\n:host ion-content .part-container ion-slides {\n  margin-top: 15px;\n}\n:host ion-content .part-container ion-slides ion-slide {\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .part-container ion-slides ion-slide.first {\n  margin-left: 15px;\n}\n:host ion-content .part-container ion-slides ion-slide ::ng-deep .part-item {\n  width: calc(100vw * 0.38) !important;\n  height: calc(100vw * 0.38) !important;\n  max-width: 136px;\n  max-height: 136px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBR0U7RUFDRSx1Q0FBQTtBQURKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFOO0FBS0k7RUFDRSxlQUFBO0FBSE47QUFLTTtFQUNFLG1CQUFBO0FBSFI7QUFNTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPTTtFQUNFLGdCQUFBO0FBTFI7QUFPUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUxWO0FBT1U7RUFDRSxpQkFBQTtBQUxaO0FBU1k7RUFDRSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBkIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubG9nbyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1jZC1sb2dvLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBpb24taWNvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tY2QtZGl2aWRlci1jb2xvcik7XG4gICAgaW9uLWljb24ge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC5wYXJ0LWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyNXB4IDA7XG5cbiAgICAgICYubGFzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICB9XG5cbiAgICAgIC5wYXJ0LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cblxuICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAucGFydC1pdGVtIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgKiAwLjM4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgKiAwLjM4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEzNnB4O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 98783:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/pages/home/home.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <div class=\"logo\">\n        <ion-icon name=\"logo-ionic\"></ion-icon>\n        Music Streaming\n      </div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"isLoading\"></ion-spinner>\n  <ng-container *ngIf=\"user && !isLoading\">\n    <div class=\"part-container\">\n      <ion-text class=\"part-title\">To Get You Started</ion-text>\n\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide\n          *ngFor=\"let folowing of user.followed_artists; let index = index\"\n          (click)=\"navigateToList(folowing['_id'])\"\n          [class.first]=\"index==0\"\n        >\n          <music-part-item\n            [data]=\"{img: folowing['profile_picture'], text: folowing['name']}\"\n          ></music-part-item>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"part-container\">\n      <ion-text class=\"part-title\">Try Something Different</ion-text>\n\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide\n          *ngFor=\"let item of recommended let index = index\"\n          (click)=\"navigateToList(item['_id'])\"\n          [class.first]=\"index==0\"\n        >\n          <music-part-item\n            [data]=\"{img: item['profile_picture'], text: item['name']}\"\n          ></music-part-item>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"part-container last recommended\">\n      <ion-text class=\"part-title\">Recommended Artists</ion-text>\n\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide\n          *ngFor=\"let item of recommended let index = index\"\n          (click)=\"navigateToList(item['_id'])\"\n          [class.first]=\"index==0\"\n        >\n          <music-part-item\n            [data]=\"{img: item['profile_picture'], text: item['name']}\"\n            [isCircle]=\"true\"\n          ></music-part-item>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_music-streaming_pages_home_home_module_ts.js.map