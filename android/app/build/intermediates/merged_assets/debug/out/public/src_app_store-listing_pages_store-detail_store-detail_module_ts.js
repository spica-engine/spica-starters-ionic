(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_store-listing_pages_store-detail_store-detail_module_ts"],{

/***/ 89911:
/*!*********************************************************************************!*\
  !*** ./src/app/store-listing/pages/store-detail/store-detail-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDetailPageRoutingModule": () => (/* binding */ StoreDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _store_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-detail.page */ 10725);




const routes = [
    {
        path: '',
        component: _store_detail_page__WEBPACK_IMPORTED_MODULE_0__.StoreDetailPage
    }
];
let StoreDetailPageRoutingModule = class StoreDetailPageRoutingModule {
};
StoreDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreDetailPageRoutingModule);



/***/ }),

/***/ 974:
/*!*************************************************************************!*\
  !*** ./src/app/store-listing/pages/store-detail/store-detail.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDetailPageModule": () => (/* binding */ StoreDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _store_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-detail-routing.module */ 89911);
/* harmony import */ var _store_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-detail.page */ 10725);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let StoreDetailPageModule = class StoreDetailPageModule {
};
StoreDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _store_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreDetailPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_store_detail_page__WEBPACK_IMPORTED_MODULE_1__.StoreDetailPage]
    })
], StoreDetailPageModule);



/***/ }),

/***/ 10725:
/*!***********************************************************************!*\
  !*** ./src/app/store-listing/pages/store-detail/store-detail.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreDetailPage": () => (/* binding */ StoreDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_store_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-detail.page.html */ 12942);
/* harmony import */ var _store_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-detail.page.scss */ 31745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 67606);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 12628);







let StoreDetailPage = class StoreDetailPage {
    constructor(_route) {
        this._route = _route;
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
        this.days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ];
        this.isLoading = false;
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apikey });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storeId = this._route.snapshot.paramMap.get('id');
            this.store = yield this.getStore();
        });
    }
    getStore() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.place.get(this.storeId);
    }
    segmentChanged(value) {
        this.activeSegment = value;
        if (value == 'map') {
            this.isLoading = true;
            setTimeout(() => { this.isLoading = false; }, 1000);
        }
    }
};
StoreDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
StoreDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-store-detail',
        template: _raw_loader_store_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreDetailPage);



/***/ }),

/***/ 31745:
/*!*************************************************************************!*\
  !*** ./src/app/store-listing/pages/store-detail/store-detail.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content ion-segment {\n  margin-bottom: 30px;\n  background: #e9e9e9;\n}\n:host ion-content ion-segment ion-segment-button {\n  --background-checked: rgb(0, 0, 0);\n  --indicator-color: rgb(0, 0, 0);\n  --color-checked: white;\n}\n:host ion-content h4 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n:host ion-content p {\n  padding: 0 15px;\n  font-size: 14px;\n}\n:host ion-content p span {\n  font-weight: 600;\n}\n:host ion-content p.working-hours-title {\n  margin-top: 30px;\n  border-top: 1px solid #e9e9e9;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 15px 0;\n  text-align: center;\n}\n:host ion-content p.days {\n  display: flex;\n  justify-content: center;\n}\n:host ion-content p.days :first-child {\n  text-align: end;\n}\n:host ion-content p.days span {\n  flex: 1;\n  margin: 0 7px;\n  font-size: 12px;\n}\n:host ion-content p.days span.hours {\n  font-weight: 400;\n}\n:host ion-content .gallery-slide {\n  max-height: 70vw;\n}\n:host ion-content .gallery-slide ion-slide {\n  width: 100%;\n  height: 230px;\n}\n:host ion-content .gallery-slide ion-slide img {\n  padding: 0 15px;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBRE47QUFHTTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQURSO0FBS0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSE47QUFNSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBSk47QUFNTTtFQUNFLGdCQUFBO0FBSlI7QUFPTTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUxSO0FBUU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFOUjtBQVFRO0VBQ0UsZUFBQTtBQU5WO0FBUVE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFOVjtBQVFVO0VBQ0UsZ0JBQUE7QUFOWjtBQVlJO0VBQ0UsZ0JBQUE7QUFWTjtBQVdNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFUUjtBQVVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSViIsImZpbGUiOiJzdG9yZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMzMsIDIzMywgMjMzKTtcblxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgJi53b3JraW5nLWhvdXJzLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICYuZGF5cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbWFyZ2luOiAwIDdweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgICAmLmhvdXJzIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmdhbGxlcnktc2xpZGUge1xuICAgICAgbWF4LWhlaWdodDogMTAwdncgKiAwLjc7XG4gICAgICBpb24tc2xpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 12942:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-listing/pages/store-detail/store-detail.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>{{store?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"store\">\n    <ion-segment\n      value=\"info\"\n      (ionChange)=\"segmentChanged($event.target['value'])\"\n    >\n      <ion-segment-button value=\"info\">\n        <ion-label> Info </ion-label>\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"gallery\">\n        <ion-label>Gallery</ion-label>\n        <ion-icon name=\"images-outline\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"map\">\n        <ion-label>Map</ion-label>\n        <ion-icon name=\"location-outline\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"info\" *ngIf=\"activeSegment=='info'\">\n      <p>{{store.description}}</p>\n      <p><span>Phone: </span> {{store.phone}}</p>\n      <p><span>Email: </span> {{store.mail}}</p>\n      <p>\n        <span>Address: </span>\n        {{store.adress + ' ' + store.city + ' ' +store.country}}\n      </p>\n      <ng-container *ngIf=\"store.working_hours?.length\">\n        <p class=\"working-hours-title\"><span>Working Hours</span></p>\n        <p *ngFor=\"let day of days; let index = index\" class=\"days\">\n          <span>{{day}} : </span>\n          <span class=\"hours\"\n            >{{store.working_hours[index].hours[0].from + ' - ' +\n            store.working_hours[index].hours[0].until}}</span\n          >\n        </p>\n      </ng-container>\n    </div>\n\n    <ion-slides\n      pager=\"true\"\n      [options]=\"slideOpts\"\n      class=\"gallery-slide\"\n      *ngIf=\"activeSegment=='gallery'\"\n    >\n      <ion-slide *ngFor=\"let image of store.images\">\n        <img [src]=\"image\" />\n      </ion-slide>\n    </ion-slides>\n    <div *ngIf=\"activeSegment=='map'\">\n      <ion-spinner\n        *ngIf=\"isLoading\"\n        class=\"spinner-center-page\"\n        name=\"crescent\"\n      ></ion-spinner>\n      <spica-map-iframe [data]=\"store.location\"></spica-map-iframe>\n    </div>\n  </ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_store-listing_pages_store-detail_store-detail_module_ts.js.map