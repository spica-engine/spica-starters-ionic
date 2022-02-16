(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_pages_home_home_module_ts"],{

/***/ 342:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/home/home-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 69708);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
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

/***/ 28731:
/*!******************************************************!*\
  !*** ./src/app/e-commerce/pages/home/home.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 342);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 69708);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 69708:
/*!****************************************************!*\
  !*** ./src/app/e-commerce/pages/home/home.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 82718);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 68205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 9838);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 46225);







let HomePage = class HomePage {
    constructor(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.slideOpts = {
            slidesPerView: 4,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        };
        this.categories = [];
        this.campaignProducts = [];
        this.products = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.category.getAll({ queryParams: { filter: { is_sub_category: false } } })
            .then((res) => {
            this.categories = res;
        });
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.campaign_product.getAll()
            .then((res) => {
            this.campaignProducts = res;
        });
    }
    navigateToProducts(id) {
        this._router.navigate(['/e-commerce/products/'], {
            queryParams: { cat_id: id },
        });
    }
    searchProduct(terms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.products = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.product.getAll({
                queryParams: {
                    filter: {
                        $or: [
                            { title: { $regex: terms, $options: 'i' } },
                            { sub_title: { $regex: terms, $options: 'i' } },
                        ],
                        is_available: true,
                    },
                    limit: 7,
                },
            });
        });
    }
    goToProduct(id) {
        this._router.navigate([`/e-commerce/products/product-detail/${id}`], {
            queryParams: { cat_id: id },
        });
    }
    ionViewDidLeave() {
        this.searchTerm = "";
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 68205:
/*!******************************************************!*\
  !*** ./src/app/e-commerce/pages/home/home.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-header ion-toolbar ion-label {\n  font-size: 18px;\n  font-weight: 600;\n}\n:host ion-header ion-toolbar ion-icon {\n  font-size: 30px;\n}\n:host ion-content ion-slides ion-slide {\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content ion-slides ion-slide ion-avatar {\n  width: 65px;\n  height: 65px;\n  border: 1px solid var(--ion-color-medium-tint);\n  overflow: hidden;\n}\n:host ion-content ion-slides ion-slide ion-avatar ::ng-deep img {\n  width: 100%;\n  height: 100%;\n}\n:host ion-content ion-slides ion-slide ion-label {\n  margin-top: 5px;\n  font-size: 12px;\n}\n:host ion-content ion-grid {\n  --ion-grid-padding: 0;\n  margin-top: 25px;\n}\n:host ion-content ion-grid ion-row {\n  margin-top: 5px;\n}\n:host ion-content ion-grid ion-row ion-col {\n  --ion-grid-column-padding: 0;\n}\n:host ion-content ion-grid ion-row .dicount-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content ion-grid ion-row .dicount-img img {\n  width: 100%;\n  height: 170px;\n}\n:host ion-content .found-products-container {\n  width: 100%;\n  max-height: 250px;\n  position: fixed;\n  top: 100px;\n  z-index: 1;\n  overflow: scroll;\n}\n:host ion-content .found-products-container ion-item {\n  padding: 0 15px;\n  height: 50px;\n}\n:host ion-content .overlay {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 100px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZUFBQTtBQUROO0FBRU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVNO0VBQ0UsZUFBQTtBQUFSO0FBT007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFMUjtBQU1RO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBSlY7QUFPWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTGQ7QUFTUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBUFY7QUFZSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFWTjtBQVlNO0VBQ0UsZUFBQTtBQVZSO0FBV1E7RUFDRSw0QkFBQTtBQVRWO0FBWVE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZWO0FBWVU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVZaO0FBZ0JJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFkTjtBQWdCTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBZFI7QUFrQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBaEJOIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgaW9uLXNsaWRlcyB7XG4gICAgICBpb24tc2xpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1ncmlkIHtcbiAgICAgIC0taW9uLWdyaWQtcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgIGlvbi1yb3cge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGljb3VudC1pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZvdW5kLXByb2R1Y3RzLWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDEwMHB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAgIGlvbi1pdGVte1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3ZlcmxheXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAxMDBweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 82718:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/home/home.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-label>E-Commerce</ion-label>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" [debounce]=\"800\" (ionChange)=\"searchProduct($event.target['value'])\" [(ngModel)]=\"searchTerm\" ></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let category of categories\" (click)=\"navigateToProducts(category._id)\">\n      <ion-avatar>\n        <img\n          [src]=\"category.img\"\n        />\n      </ion-avatar>\n      <ion-label>{{category.name}}</ion-label>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid>\n    <ion-row *ngFor=\"let campaign of campaignProducts\" [routerLink]=\"['/e-commerce/products/'+campaign._id]\">\n      <ion-col size=\"12\" class=\"dicount-img\">\n        <img\n          [src]=\"campaign.img\"\n        />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"overlay\" *ngIf=\"searchTerm\"></div>\n\n  <div class=\"found-products-container\" *ngIf=\"searchTerm\">\n    <ion-list>\n      <ion-item lines=\"none\" *ngFor=\"let product of products\" (click)=\"goToProduct(product._id)\">\n        <ion-label>\n          <h3>{{product.title}}</h3>\n        </ion-label>\n        <ion-icon name=\"chevron-forward-outline\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_pages_home_home_module_ts.js.map