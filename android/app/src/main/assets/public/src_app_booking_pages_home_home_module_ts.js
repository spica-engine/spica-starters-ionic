(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_booking_pages_home_home_module_ts"],{

/***/ 64428:
/*!***********************************************************!*\
  !*** ./src/app/booking/pages/home/home-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 33903);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
    {
        path: 'room-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../room-details/room-details.module */ 78535)).then(m => m.RoomDetailsPageModule)
    },
    {
        path: 'activity-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../activity-details/activity-details.module */ 66976)).then(m => m.ActivityDetailsPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 96975:
/*!***************************************************!*\
  !*** ./src/app/booking/pages/home/home.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 33903);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 64428);
/* harmony import */ var _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/booking-components.module */ 6723);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__.BookingComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 33903:
/*!*************************************************!*\
  !*** ./src/app/booking/pages/home/home.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 63254);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 16555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 48058);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 82472);






let HomePage = class HomePage {
    constructor() {
        this.rooms = [];
        this.activities = [];
        this.loading = true;
        this.option = {
            centeredSlides: true,
            spaceBetween: 20,
            loop: true,
            speed: 500,
            autoplay: true,
        };
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.public_apikey });
    }
    swipeNext() {
        this.slides.slideNext();
    }
    swipePrev() {
        this.slides.slidePrev();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getHotel_room();
            yield this.getSiteConfigurations();
            yield this.getHotel_activities();
            this.loading = false;
        });
    }
    getHotel_room() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.room.getAll({ queryParams: { limit: 2 } }).then((res) => {
                this.rooms = res;
            });
        });
    }
    getSiteConfigurations() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.site_configurations.getAll();
            this.siteConfigurations = data[0];
        });
    }
    getHotel_activities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.activities.getAll().then((res) => {
                this.activities = res;
            });
        });
    }
};
HomePage.ctorParameters = () => [];
HomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['mySlider',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 16555:
/*!***************************************************!*\
  !*** ./src/app/booking/pages/home/home.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .site-logo-img {\n  margin-top: 0px;\n  height: 50px;\n  width: 100%;\n  margin-left: 50px;\n  display: flex;\n}\n:host .site-logo-img img {\n  right: 13px;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  margin: 5px 0;\n  filter: opacity(0.6);\n}\n:host .container {\n  width: 100%;\n  padding: 15px;\n}\n:host .container .slider {\n  width: 100%;\n}\n:host .container .slider ion-slides ::ng-deep .swiper-pagination-bullet-active {\n  background-color: black;\n}\n:host .container .slider ion-slides ::ng-deep .swiper-pagination-bullet {\n  background-color: black;\n}\n:host .container .slider ion-slides ion-slide {\n  padding-bottom: 30px;\n}\n:host .container .slider ion-slides ion-slide div {\n  width: 100%;\n  height: 300px;\n}\n:host .container .slider ion-slides ion-slide div img {\n  width: 100%;\n  height: 100%;\n}\n:host .container .rooms-and-suits h2 {\n  font-size: 1.5rem;\n  color: #595959;\n  text-align: center;\n  margin: 20px 70px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #002854;\n}\n:host .container .rooms-and-suits .room {\n  margin-bottom: 45px;\n}\n:host .container .rooms-and-suits .room img {\n  width: 100%;\n  min-height: 200px;\n  max-height: 250px;\n}\n:host .container .rooms-and-suits .room .room-description {\n  margin: -20px 50px 0 50px;\n  background-color: #f2f2f2;\n  padding: 15px;\n  text-align: center;\n}\n:host .container .rooms-and-suits .room .room-description h3 {\n  color: #595959;\n  font-size: 1.3rem;\n}\n:host .container .rooms-and-suits .room .room-description p {\n  padding: 0 15px 0 15px;\n  color: #6f6f6f;\n  font-size: 0.9rem;\n}\n:host .container .rooms-and-suits .room .room-description ion-button {\n  padding: 1px;\n  border: 1px solid #575757;\n  --color: #6f6f6f;\n  --background: #f2f2f2;\n  --background-activated: #f3f3f3;\n  --border-radius: 0;\n}\n:host .container .rooms-and-suits .room .room-description ion-button ion-icon {\n  font-size: 1.1rem;\n}\n:host .container .activity {\n  width: 100%;\n  margin-bottom: 15px;\n}\n:host .container .activity :last-child {\n  right: 0;\n}\n:host .container .activity h2 {\n  font-size: 1.5rem;\n  color: #595959;\n  text-align: center;\n  margin: 20px 70px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #002854;\n}\n:host .container .activity .activity-info {\n  position: relative;\n}\n:host .container .activity .activity-info ion-slides {\n  width: 100%;\n}\n:host .container .activity .activity-info ion-slides ion-slide {\n  display: flex;\n  flex-direction: column;\n}\n:host .container .activity .activity-info ion-slides ion-slide .activity-img {\n  width: 80%;\n  height: 250px;\n}\n:host .container .activity .activity-info ion-slides ion-slide .activity-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host .container .activity .activity-info ion-slides ion-slide .activity-description {\n  padding: 0 0 15px 0;\n  text-align: center;\n}\n:host .container .activity .activity-info ion-slides ion-slide .activity-description h3 {\n  color: #595959;\n  font-size: 1.3rem;\n}\n:host .container .activity .activity-info ion-slides ion-slide .activity-description p {\n  padding: 0 15px;\n  color: #6f6f6f;\n  font-size: 0.9rem;\n}\n:host .container .activity .activity-info ion-button {\n  position: absolute;\n  z-index: 2;\n  top: 30%;\n  --background: black;\n  --color: white;\n  --background-activated: rgb(40, 40, 40);\n}\n:host .container .about {\n  width: 100%;\n}\n:host .container .about h2 {\n  font-size: 1.5rem;\n  color: #595959;\n  text-align: center;\n  margin: 15px 70px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #002854;\n}\n:host .container .about .about-description {\n  width: 100%;\n  padding: 0 15px 15px 15px;\n  text-align: center;\n}\n:host .container .about .about-description span {\n  padding: 0 15px 0 15px;\n  color: #6f6f6f;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFESjtBQUVJO0VBQ0UsV0FBQTtBQUFOO0FBR1U7RUFDRSx1QkFBQTtBQURaO0FBR1U7RUFDRSx1QkFBQTtBQURaO0FBSVE7RUFDRSxvQkFBQTtBQUZWO0FBR1U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQURaO0FBRVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFkO0FBT007RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUxSO0FBT007RUFDRSxtQkFBQTtBQUxSO0FBTVE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUpWO0FBTVE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSlY7QUFLVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUhaO0FBSVk7RUFDRSxpQkFBQTtBQUZkO0FBUUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQU9NO0VBQ0UsUUFBQTtBQUxSO0FBT007RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUxSO0FBT007RUFDRSxrQkFBQTtBQUxSO0FBTVE7RUFDRSxXQUFBO0FBSlY7QUFLVTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhaO0FBSVk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUZkO0FBR2M7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRGhCO0FBSVk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBRmQ7QUFHYztFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQURoQjtBQUdjO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURoQjtBQU1RO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FBSlY7QUFRSTtFQUNFLFdBQUE7QUFOTjtBQU9NO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQU9NO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQU1RO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFKViIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnNpdGUtbG9nby1pbWcge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBpbWcge1xuICAgICAgcmlnaHQ6IDEzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICBmaWx0ZXI6IG9wYWNpdHkoMC42KTtcbiAgICB9XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIC5zbGlkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJvb21zLWFuZC1zdWl0cyB7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDIwcHggNzBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLCA0MCwgODQpO1xuICAgICAgfVxuICAgICAgLnJvb20ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb29tLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IC0yMHB4IDUwcHggMCA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTc1NzU3O1xuICAgICAgICAgICAgLS1jb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmM2YzZjM7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYWN0aXZpdHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMjBweCA3MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsIDQwLCA4NCk7XG4gICAgICB9XG4gICAgICAuYWN0aXZpdHktaW5mbyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmFjdGl2aXR5LWltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZpdHktZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoNDAsIDQwLCA0MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFib3V0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDcwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgNDAsIDg0KTtcbiAgICAgIH1cbiAgICAgIC5hYm91dC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG4gICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 63254:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/pages/home/home.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar *ngIf=\"!loading\" project=\"booking\"></spica-menu-bar>\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div class=\"site-logo-img\">\n      <img [src]=\"siteConfigurations?.homepage?.logo\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!loading\"></div>\n  <div class=\"container\">\n    <div class=\"slider\">\n      <ion-slides pager=\"true\" [options]=\"option\">\n        <ion-slide *ngFor=\"let slide of siteConfigurations?.homepage?.slides\">\n          <div>\n            <img [src]=\"slide\" />\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <app-reservation></app-reservation>\n\n    <div class=\"rooms-and-suits\">\n      <h2>Rooms & Suits</h2>\n      <div class=\"room\" *ngFor=\"let hotel_room of rooms\">\n        <img [src]=\"hotel_room.head_image\" />\n        <div class=\"room-description\">\n          <h3>{{hotel_room.name}}</h3>\n          <p>{{hotel_room.description}}</p>\n          <ion-button mode=\"ios\" [routerLink]=\"['room-details' ,hotel_room._id]\"\n            >Explore &nbsp;<ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"activity\">\n      <h2>Activity & Fun</h2>\n      <div class=\"activity-info\">\n        <ion-button slot=\"start\" (click)=\"swipePrev()\"\n          ><ion-icon name=\"arrow-back-outline\"></ion-icon\n        ></ion-button>\n        <ion-slides #mySlider>\n          <ion-slide\n            *ngFor=\"let activities of activities\"\n            [routerLink]=\"['activity-details' ,activities._id]\"\n          >\n            <div class=\"activity-img\">\n              <img [src]=\"activities.images[0]\" />\n            </div>\n            <div class=\"activity-description\">\n              <h3>{{activities.name}}</h3>\n              <p>{{activities.description}}</p>\n            </div>\n          </ion-slide>\n        </ion-slides>\n        <ion-button slot=\"end\" (click)=\"swipeNext()\"\n          ><ion-icon name=\"arrow-forward-outline\"></ion-icon\n        ></ion-button>\n      </div>\n    </div>\n\n    <div class=\"about\">\n      <h2>About Us</h2>\n      <div class=\"about-description\" *ngIf=\"siteConfigurations\">\n        <span>{{siteConfigurations.about}}</span>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</ion-content>\n<ion-spinner\n  *ngIf=\"loading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_booking_pages_home_home_module_ts.js.map