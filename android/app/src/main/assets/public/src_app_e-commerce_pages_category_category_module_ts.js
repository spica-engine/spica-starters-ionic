(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_pages_category_category_module_ts"],{

/***/ 87366:
/*!**********************************************************************!*\
  !*** ./src/app/e-commerce/pages/category/category-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageRoutingModule": () => (/* binding */ CategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.page */ 64981);




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_0__.CategoryPage
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ 52881:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/category/category.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 87366);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page */ 64981);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_1__.CategoryPage]
    })
], CategoryPageModule);



/***/ }),

/***/ 64981:
/*!************************************************************!*\
  !*** ./src/app/e-commerce/pages/category/category.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./category.page.html */ 62578);
/* harmony import */ var _category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss */ 55118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 9838);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 46225);







let CategoryPage = class CategoryPage {
    constructor(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.categories = [];
        this.products = [];
        this._authService.initBucket();
    }
    ngOnInit() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.category.getAll({ queryParams: { filter: { is_sub_category: false }, relation: true } })
            .then((res) => {
            this.categories = res;
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
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoryPage);



/***/ }),

/***/ 55118:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/category/category.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar {\n  display: flex;\n  align-items: center;\n  height: 70px;\n  padding-top: 15px;\n}\n:host ion-content .found-products-container {\n  width: 100%;\n  max-height: 250px;\n  position: fixed;\n  top: 70px;\n  z-index: 1;\n  overflow: scroll;\n}\n:host ion-content .found-products-container ion-item {\n  padding: 0 15px;\n  height: 50px;\n}\n:host ion-content .overlay {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 70px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUROO0FBTUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUpOO0FBTU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUpSO0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTk4iLCJmaWxlIjoiY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuICBpb24tY29udGVudCB7XG5cbiAgICAuZm91bmQtcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDcwcHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3ZlcmxheSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogNzBweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 62578:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/category/category.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-searchbar mode=\"ios\" [debounce]=\"800\" (ionChange)=\"searchProduct($event.target['value'])\" [(ngModel)]=\"searchTerm\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <spica-category *ngIf=\"categories.length\" [categories]=\"categories\" (clickNavigate)=\"navigateToProducts($event)\"></spica-category>\n\n  <div class=\"overlay\" *ngIf=\"searchTerm\"></div>\n\n  <div class=\"found-products-container\" *ngIf=\"searchTerm\">\n    <ion-list>\n      <ion-item lines=\"none\" *ngFor=\"let product of products\" (click)=\"goToProduct(product._id)\">\n        <ion-label>\n          <h3>{{product.title}}</h3>\n        </ion-label>\n        <ion-icon name=\"chevron-forward-outline\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_pages_category_category_module_ts.js.map