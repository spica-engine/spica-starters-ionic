(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_food-delivery_pages_my-orders_my-orders_module_ts"],{

/***/ 79266:
/*!***************************************************************************!*\
  !*** ./src/app/food-delivery/pages/my-orders/my-orders-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPageRoutingModule": () => (/* binding */ MyOrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders.page */ 16098);




const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPage
    }
];
let MyOrdersPageRoutingModule = class MyOrdersPageRoutingModule {
};
MyOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyOrdersPageRoutingModule);



/***/ }),

/***/ 80662:
/*!*******************************************************************!*\
  !*** ./src/app/food-delivery/pages/my-orders/my-orders.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPageModule": () => (/* binding */ MyOrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders-routing.module */ 79266);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page */ 16098);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_1__.MyOrdersPage]
    })
], MyOrdersPageModule);



/***/ }),

/***/ 16098:
/*!*****************************************************************!*\
  !*** ./src/app/food-delivery/pages/my-orders/my-orders.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPage": () => (/* binding */ MyOrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-orders.page.html */ 33508);
/* harmony import */ var _my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page.scss */ 72147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 30311);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 79708);






let MyOrdersPage = class MyOrdersPage {
    constructor(_authService) {
        this._authService = _authService;
        this.orders = [];
        this.isLoading = true;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.orders = yield this.getMyOrders();
            this.orders.forEach((el) => {
                let maxDate = new Date();
                maxDate.setDate(maxDate.getDate() - 2);
                if (new Date(el.created_at) > maxDate) {
                    el['can_rate'] = true;
                }
                this.isLoading = false;
            });
        });
    }
    getMyOrders() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.order.getAll({ queryParams: { filter: { user: this.user._id }, relation: true, sort: { _id: -1 } }, });
    }
    ratingAction(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (event.data.value == 'apply') {
                this.isLoading = true;
                let selectedOrder = this.orders.find((el) => {
                    return el._id == this.selectedOrder;
                });
                let ratingData = {
                    user: this.user._id,
                    rating: event.data.rating,
                    comment: event.data.comment,
                };
                let orderIndex = this.orders.findIndex(el => el._id == selectedOrder._id);
                this.orders[orderIndex]['rating'] = ratingData;
                let newRating = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.rating.insert(ratingData);
                _services_bucket__WEBPACK_IMPORTED_MODULE_3__.order.patch({ _id: selectedOrder._id, rating: newRating._id });
                for (const el of selectedOrder.foods) {
                    let tempFood = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.food.get(el._id);
                    tempFood.ratings = tempFood.ratings || [];
                    tempFood.ratings.push(newRating._id);
                    _services_bucket__WEBPACK_IMPORTED_MODULE_3__.food.patch({ _id: tempFood._id, ratings: tempFood.ratings });
                }
                this.isLoading = false;
            }
            this.selectedOrder = undefined;
        });
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
MyOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-orders',
        template: _raw_loader_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyOrdersPage);



/***/ }),

/***/ 72147:
/*!*******************************************************************!*\
  !*** ./src/app/food-delivery/pages/my-orders/my-orders.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .orders-container ion-card .card-content {\n  padding: 15px;\n}\n:host .orders-container ion-card .status {\n  background: #dddddd;\n  padding: 15px;\n  margin: 0;\n  color: black;\n  font-weight: 700;\n}\n:host .orders-container ion-card p span {\n  color: black;\n}\n:host .orders-container ion-card p.cannot-rate-text {\n  font-size: 12px;\n  color: #aa0000;\n}\n:host .orders-container ion-card p.user-rate {\n  display: flex;\n  align-items: center;\n}\n:host .orders-container ion-card p.user-rate ion-icon {\n  margin-right: 3px;\n  margin-left: 5px;\n  color: #ffc400;\n}\n:host .orders-container ion-card .button-label {\n  display: flex;\n  justify-content: flex-end;\n}\n:host .orders-container ion-card .button-label ion-button {\n  height: 30px;\n  width: 50px;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDRSxhQUFBO0FBRlI7QUFLTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQU1RO0VBQ0UsWUFBQTtBQUpWO0FBTVE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUpWO0FBTVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKVjtBQUtVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIWjtBQVFNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBTlI7QUFPUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUxWIiwiZmlsZSI6Im15LW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5vcmRlcnMtY29udGFpbmVyIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnN0YXR1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgICYuY2Fubm90LXJhdGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiByZ2IoMTcwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAmLnVzZXItcmF0ZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 33508:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/pages/my-orders/my-orders.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"orders-container\" *ngIf=\"orders.length && !isLoading\">\n    <ion-card *ngFor=\"let order of orders\">\n      <p class=\"status\">Status: {{order.status}}</p>\n      <div class=\"card-content\">\n        <ion-label>\n          <ion-text *ngFor=\"let food of order.foods\">\n            {{food.count + ' ' + food.name}}\n          </ion-text>\n        </ion-label>\n        <p><span>Total:</span> {{order.price}}$</p>\n        <p><span>Date:</span> {{order.created_at | date:'dd-MM-yyyy HH:MM'}}</p>\n        <p *ngIf=\"!order['can_rate'] && !order.rating\" class=\"cannot-rate-text\">\n          You cannot rate because more than 2 days have passed since your order.\n        </p>\n        <ion-label *ngIf=\"order['can_rate'] && !order.rating\" class=\"button-label\"\n          ><ion-button (click)=\"selectedOrder=order._id; \">Rate</ion-button></ion-label\n        >\n        <p class=\"user-rate\" *ngIf=\"order.rating\"><span>Rated: </span> <ion-icon name=\"star\"></ion-icon>{{order.rating?.rating}}</p>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-spinner\n  *ngIf=\"isLoading\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>\n<spica-rating *ngIf=\"selectedOrder && !isLoading\" title=\"Rate Food\" (action)=\"ratingAction($event)\"></spica-rating>");

/***/ })

}]);
//# sourceMappingURL=src_app_food-delivery_pages_my-orders_my-orders_module_ts.js.map