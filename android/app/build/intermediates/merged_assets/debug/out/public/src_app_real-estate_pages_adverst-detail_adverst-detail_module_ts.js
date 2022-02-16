(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_real-estate_pages_adverst-detail_adverst-detail_module_ts"],{

/***/ 51793:
/*!***********************************************************************************!*\
  !*** ./src/app/real-estate/pages/adverst-detail/adverst-detail-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstDetailPageRoutingModule": () => (/* binding */ AdverstDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _adverst_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adverst-detail.page */ 11172);




const routes = [
    {
        path: '',
        component: _adverst_detail_page__WEBPACK_IMPORTED_MODULE_0__.AdverstDetailPage
    }
];
let AdverstDetailPageRoutingModule = class AdverstDetailPageRoutingModule {
};
AdverstDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdverstDetailPageRoutingModule);



/***/ }),

/***/ 10241:
/*!***************************************************************************!*\
  !*** ./src/app/real-estate/pages/adverst-detail/adverst-detail.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstDetailPageModule": () => (/* binding */ AdverstDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _adverst_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adverst-detail-routing.module */ 51793);
/* harmony import */ var _adverst_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adverst-detail.page */ 11172);
/* harmony import */ var _components_real_estate_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/real-estate-components.module */ 90723);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let AdverstDetailPageModule = class AdverstDetailPageModule {
};
AdverstDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _adverst_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdverstDetailPageRoutingModule,
            _components_real_estate_components_module__WEBPACK_IMPORTED_MODULE_2__.RealEstateComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_adverst_detail_page__WEBPACK_IMPORTED_MODULE_1__.AdverstDetailPage]
    })
], AdverstDetailPageModule);



/***/ }),

/***/ 11172:
/*!*************************************************************************!*\
  !*** ./src/app/real-estate/pages/adverst-detail/adverst-detail.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdverstDetailPage": () => (/* binding */ AdverstDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_adverst_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adverst-detail.page.html */ 7666);
/* harmony import */ var _adverst_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adverst-detail.page.scss */ 28523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 56010);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 82766);








let AdverstDetailPage = class AdverstDetailPage {
    constructor(_route, _authService, location) {
        this._route = _route;
        this._authService = _authService;
        this.location = location;
        this.activeSegment = 'info';
        this.slideOpts = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.adverstId = this._route.snapshot.params.id;
            this.adverst = yield this.getAdverst();
        });
    }
    getAdverst() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.adverst.get(this.adverstId, {
            queryParams: { relation: true },
        });
    }
    segmentChanged(value) {
        this.activeSegment = value;
    }
};
AdverstDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
AdverstDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-adverst-detail',
        template: _raw_loader_adverst_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adverst_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdverstDetailPage);



/***/ }),

/***/ 28523:
/*!***************************************************************************!*\
  !*** ./src/app/real-estate/pages/adverst-detail/adverst-detail.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .img-container {\n  width: 100%;\n  height: 250px;\n}\n:host .img-container .back-btn {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 5px;\n  border-radius: 10px;\n  font-size: 18px;\n  color: white;\n}\n:host .img-container img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host .content {\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n  position: absolute;\n  top: 220px;\n  background: white;\n  width: 100%;\n  height: 440px;\n  padding: 20px;\n}\n:host .content .section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n:host .content .section h4 {\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n:host .content .section .status {\n  color: green;\n}\n:host .content .properties {\n  display: flex;\n  margin-top: 16px;\n  font-size: 14px;\n  color: gray;\n  margin-bottom: 20px;\n}\n:host .content .properties span {\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n}\n:host .content .properties span ion-icon {\n  margin-right: 3px;\n}\n:host .content .info p {\n  font-size: 14px;\n}\n:host .content ion-segment {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVyc3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVFO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFOO0FBQ007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNSO0FBQ007RUFDRSxZQUFBO0FBQ1I7QUFHSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBSUEsa0JBQUE7QUFIUjtBQUFRO0VBQ0UsaUJBQUE7QUFFVjtBQUlNO0VBQ0UsZUFBQTtBQUZSO0FBS0k7RUFDRSxtQkFBQTtBQUhOIiwiZmlsZSI6ImFkdmVyc3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgLmJhY2stYnRuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjIpO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICB9XG4gIC5jb250ZW50IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDQwcHg7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgICAuc3RhdHVzIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9wZXJ0aWVzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5pbmZve1xuICAgICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tc2VnbWVudCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 7666:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/pages/adverst-detail/adverst-detail.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ng-container *ngIf=\"adverst\">\n    <div class=\"img-container\">\n      <ion-icon name=\"arrow-back\" class=\"back-btn\" (click)=\"location.back()\"></ion-icon>\n      <img [src]=\"adverst.cover_img\" />\n    </div>\n    <div class=\"content\">\n      <ion-label class=\"section\">\n        <ion-text>{{adverst.address.city + ' / ' + adverst.address.district}}</ion-text>\n        <ion-text class=\"status\">{{adverst.adverst_status | titlecase}}</ion-text>\n      </ion-label>\n      <ion-label class=\"section\">\n        <h4>{{adverst.name}}</h4>        \n        <h4>{{adverst.price | number:'1.0':'en-US'}} {{adverst.currency}}</h4>       \n      </ion-label>\n      <ion-label class=\"properties\">\n        <span><ion-icon name=\"bed-outline\"></ion-icon>{{adverst.bedroom_count}}</span>\n        <span><ion-icon name=\"water-outline\"></ion-icon>{{adverst.bathroom_count}}</span>\n        <span><ion-icon name=\"cube-outline\"></ion-icon>{{adverst.square_meters}} ㎡</span>\n      </ion-label>\n\n      <consultant-card [data]=\"adverst.consultant\"></consultant-card>\n\n      <ion-segment\n        value=\"info\"\n        (ionChange)=\"segmentChanged($event.target['value'])\"\n        >\n        <ion-segment-button value=\"info\">\n          <ion-label> Info </ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"gallery\">\n          <ion-label>Gallery</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"map\">\n          <ion-label>Map</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      \n      <div class=\"info\" *ngIf=\"activeSegment=='info'\">\n       <p>{{adverst.description}}</p>\n      </div>\n      <ion-slides\n        pager=\"true\"\n        [options]=\"slideOpts\"\n        class=\"gallery-slide\"\n        *ngIf=\"activeSegment=='gallery'\"\n      >\n        <ion-slide *ngFor=\"let image of adverst.images\">\n          <img [src]=\"image\" />\n        </ion-slide>\n      </ion-slides>\n      <spica-map-iframe *ngIf=\"adverst.location && activeSegment=='map'\" [data]=\"adverst.location\"></spica-map-iframe>\n    </div>\n  </ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_real-estate_pages_adverst-detail_adverst-detail_module_ts.js.map