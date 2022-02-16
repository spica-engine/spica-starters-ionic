(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_music-streaming_pages_search_search_module_ts"],{

/***/ 2503:
/*!***********************************************************************!*\
  !*** ./src/app/music-streaming/pages/search/search-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageRoutingModule": () => (/* binding */ SearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.page */ 84820);




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_pages_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../list/list.module */ 10515)).then(m => m.ListPageModule)
    },
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ 54763:
/*!***************************************************************!*\
  !*** ./src/app/music-streaming/pages/search/search.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageModule": () => (/* binding */ SearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-routing.module */ 2503);
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page */ 84820);
/* harmony import */ var _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/music-components.module */ 25661);








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _search_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchPageRoutingModule,
            _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__.MusicStreamingComponentModule
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_1__.SearchPage]
    })
], SearchPageModule);



/***/ }),

/***/ 84820:
/*!*************************************************************!*\
  !*** ./src/app/music-streaming/pages/search/search.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search.page.html */ 10471);
/* harmony import */ var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.page.scss */ 8332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/audio.service */ 26187);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 36997);








let SearchPage = class SearchPage {
    constructor(_router, _authService, _audioService) {
        this._router = _router;
        this._authService = _authService;
        this._audioService = _audioService;
        this.tracks = [];
        this.musicKinds = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.musicKinds = yield this.getMusicKinds();
        });
    }
    navigateToList(id) {
        this._router.navigate([`/music-streaming/tabs/search/list/${id}`], {
            queryParams: { type: 'musicKind' },
        });
    }
    search(terms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.tracks = yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.track.getAll({
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
    getMusicKinds() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.track_kind.getAll();
    }
    setTrack(track) {
        this._audioService.setTrack(track);
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_2__.AudioService }
];
SearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchPage);



/***/ }),

/***/ 8332:
/*!***************************************************************!*\
  !*** ./src/app/music-streaming/pages/search/search.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host h3 {\n  margin-left: 10px;\n}\n:host .kind-container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 0 10px;\n  margin-bottom: 70px;\n}\n:host .kind-container .kind-item {\n  width: calc(50% - 5px);\n  height: 120px;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n:host .list {\n  padding: 0 15px;\n  margin-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUtFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaDMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmtpbmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG5cbiAgICAua2luZC1pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XG4gICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5saXN0IHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 10471:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/pages/search/search.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <h3>Search</h3>\n  <ion-searchbar\n    mode=\"ios\"\n    [debounce]=\"800\"\n    (ionChange)=\"search($event.target['value'])\"\n    [(ngModel)]=\"searchTerm\"\n  ></ion-searchbar>\n\n  <div class=\"kind-container\" *ngIf=\"!searchTerm\">\n    <div\n      class=\"kind-item\"\n      *ngFor=\"let item of musicKinds\"\n      (click)=\"navigateToList(item._id)\"\n    >\n      <type-card [data]=\"item\"></type-card>\n    </div>\n  </div>\n\n  <div class=\"list\" *ngIf=\"searchTerm\">\n    <music-list-item\n      [data]=\"{\n      image: track.cover,\n      title: track.name,\n      subTitle: track.artist['name']\n    }\"\n      *ngFor=\"let track of tracks\"\n      (click)=\"setTrack(track)\"\n    ></music-list-item>\n  </div>\n\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"!musicKinds.length\"></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_music-streaming_pages_search_search_module_ts.js.map