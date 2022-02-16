(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_e-commerce_pages_favorite_favorite_module_ts"],{

/***/ 64542:
/*!**********************************************************************!*\
  !*** ./src/app/e-commerce/pages/favorite/favorite-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageRoutingModule": () => (/* binding */ FavoritePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.page */ 98918);




const routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_0__.FavoritePage
    }
];
let FavoritePageRoutingModule = class FavoritePageRoutingModule {
};
FavoritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritePageRoutingModule);



/***/ }),

/***/ 10036:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/favorite/favorite.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePageModule": () => (/* binding */ FavoritePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-routing.module */ 64542);
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page */ 98918);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let FavoritePageModule = class FavoritePageModule {
};
FavoritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favorite_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_1__.FavoritePage]
    })
], FavoritePageModule);



/***/ }),

/***/ 98918:
/*!************************************************************!*\
  !*** ./src/app/e-commerce/pages/favorite/favorite.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritePage": () => (/* binding */ FavoritePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favorite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favorite.page.html */ 52405);
/* harmony import */ var _favorite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.page.scss */ 78842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 9838);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 46225);







let FavoritePage = class FavoritePage {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.likedProducts = [];
        this.isLoading = true;
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.getActiveUser();
            if (this.user) {
                yield this.getLikedData();
            }
            this.isLoading = false;
        });
    }
    getActiveUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this._authService.getUser().toPromise();
        });
    }
    getLikedData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.liked_product.getAll({
                queryParams: { filter: { user: this.user._id }, relation: true },
            })
                .then((res) => {
                if (res.length) {
                    this.likedDataId = res[0]._id;
                    this.likedProducts = res[0].products;
                    this.likedProducts.forEach((el) => {
                        el['is_liked'] = true;
                    });
                }
            });
        });
    }
    likeChanged(id) {
        if (!this._authService.getActiveToken()) {
            this._router.navigate(['e-commerce/tabs/profile']);
            return;
        }
        this.likedProducts = this.likedProducts.filter((el) => {
            return el._id !== id;
        });
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.liked_product.patch({
            products: this.likedProducts,
            _id: this.likedDataId,
        });
    }
};
FavoritePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
FavoritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-favorite',
        template: _raw_loader_favorite_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favorite_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoritePage);



/***/ }),

/***/ 78842:
/*!**************************************************************!*\
  !*** ./src/app/e-commerce/pages/favorite/favorite.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content .spinner-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-content .empty-container {\n  margin: auto;\n  width: 85%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host ion-content .empty-container ion-label {\n  font-weight: 500;\n  font-size: 17px;\n  margin-top: 20px;\n}\n:host ion-content .empty-container p {\n  margin: 40px 0;\n  text-align: center;\n}\n:host ion-content .products {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n:host ion-content .products spica-product-card {\n  margin: 5px;\n  min-width: calc(50% - 10px) !important;\n  max-width: calc(50% - 10px) !important;\n}\n:host ion-content .products spica-product-card ::ng-deep img {\n  max-height: 175px !important;\n  height: calc(100vw * 0.55) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBRk47QUFJTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRlI7QUFLTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhSO0FBT0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTE47QUFPTTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0FBTFI7QUFRVTtFQUNFLDRCQUFBO0VBQ0EscUNBQUE7QUFOWiIsImZpbGUiOiJmYXZvcml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAuc3Bpbm5lci1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5lbXB0eS1jb250YWluZXIge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZHVjdHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgcGFkZGluZzogNXB4O1xuXG4gICAgICBzcGljYS1wcm9kdWN0LWNhcmQge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgbWluLXdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAxMHB4KSAhaW1wb3J0YW50O1xuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE3NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgKiAwLjU1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 52405:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/e-commerce/pages/favorite/favorite.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>favorite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ng-container *ngIf=\"!likedProducts.length && !isLoading\">\n    <div class=\"empty-container\">\n      <img\n        src=\"https://pngimg.com/uploads/shopping_bag/small/shopping_bag_PNG6371.png\"\n        alt=\"\"\n      />\n      <ion-label>Favorite Is Empty</ion-label>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt\n      </p>\n    </div>\n  </ng-container>\n\n  <ion-list class=\"products\" *ngIf=\"likedProducts.length && !isLoading\">\n    <!-- [routerLink]=\"['/e-commerce/products/product-detail/' + product._id]\" -->\n    <spica-product-card\n      *ngFor=\"let product of likedProducts\"\n      [data]=\"product\"\n      (likeChanged)=\"likeChanged(product._id )\"\n     \n    ></spica-product-card>\n  </ion-list>\n\n  <div class=\"spinner-container\" *ngIf=\"isLoading\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_e-commerce_pages_favorite_favorite_module_ts.js.map