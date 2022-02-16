(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_food-delivery_pages_home_home_module_ts"],{

/***/ 31072:
/*!***************************************************************************!*\
  !*** ./src/app/food-delivery/components/food-card/food-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodCardComponent": () => (/* binding */ FoodCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_food_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food-card.component.html */ 24021);
/* harmony import */ var _food_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-card.component.scss */ 29471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let FoodCardComponent = class FoodCardComponent {
    constructor() {
        this.rating = 0;
    }
    ngOnInit() {
        this.data.ratings.forEach((el) => {
            this.rating += el['rating'];
        });
        this.rating = this.rating / this.data.ratings.length;
    }
};
FoodCardComponent.ctorParameters = () => [];
FoodCardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FoodCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'food-card',
        template: _raw_loader_food_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodCardComponent);



/***/ }),

/***/ 72325:
/*!*****************************************************************************!*\
  !*** ./src/app/food-delivery/components/food-delivery-components.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodDeliveryComponentModule": () => (/* binding */ FoodDeliveryComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _food_card_food_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-card/food-card.component */ 31072);
/* harmony import */ var _food_details_food_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-details/food-details.component */ 91090);









let FoodDeliveryComponentModule = class FoodDeliveryComponentModule {
};
FoodDeliveryComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_0__.FoodCardComponent, _food_details_food_details_component__WEBPACK_IMPORTED_MODULE_1__.FoodDetailsComponent],
        exports: [_food_card_food_card_component__WEBPACK_IMPORTED_MODULE_0__.FoodCardComponent, _food_details_food_details_component__WEBPACK_IMPORTED_MODULE_1__.FoodDetailsComponent],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
    })
], FoodDeliveryComponentModule);



/***/ }),

/***/ 91090:
/*!*********************************************************************************!*\
  !*** ./src/app/food-delivery/components/food-details/food-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodDetailsComponent": () => (/* binding */ FoodDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_food_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./food-details.component.html */ 89060);
/* harmony import */ var _food_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-details.component.scss */ 96602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 30311);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ 9670);









let FoodDetailsComponent = class FoodDetailsComponent {
    constructor(_orderService, _modalController, _commonService, _authService, _router) {
        this._orderService = _orderService;
        this._modalController = _modalController;
        this._commonService = _commonService;
        this._authService = _authService;
        this._router = _router;
        this.orderFood = {};
        this.extras = [];
        this.removeds = [];
        this.count = 1;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.orderFood = {
                _id: this.food._id,
                name: this.food.name,
                ingredients: this.food.ingredients.map((i) => i['name']),
                price: this.food.price,
                image: this.food.image,
            };
            this.user = yield this._authService.getUser().toPromise();
        });
    }
    addToOrder() {
        if (!this.user) {
            this._router.navigate(['/food-delivery/profile'], { replaceUrl: true });
            this._modalController.dismiss();
            return;
        }
        this._commonService.presentToast('Successfully added to cart.', 1500);
        this.normalizeIngredients();
        this._orderService.addToOrder(Object.assign({}, this.orderFood), this.count);
        this.clearOrder();
        this.onDismiss();
    }
    normalizeIngredients() {
        this.orderFood.ingredients.push(...this.extras);
        this.orderFood.ingredients = this.orderFood.ingredients.filter((i) => !this.removeds.includes(i));
    }
    updateIngredients(name, _target) {
        const target = _target == 'extras' ? this.extras : this.removeds;
        const index = target.findIndex((i) => i == name);
        if (index == -1) {
            target.push(name);
        }
        else {
            target.splice(index, 1);
        }
    }
    clearOrder() {
        this.orderFood = {};
    }
    onDismiss() {
        this.orderFood = {};
        this._modalController.dismiss();
    }
};
FoodDetailsComponent.ctorParameters = () => [
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
FoodDetailsComponent.propDecorators = {
    food: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
FoodDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-food-details',
        template: _raw_loader_food_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_food_details_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FoodDetailsComponent);



/***/ }),

/***/ 38962:
/*!*****************************************************************!*\
  !*** ./src/app/food-delivery/pages/home/home-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 95594);




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

/***/ 21813:
/*!*********************************************************!*\
  !*** ./src/app/food-delivery/pages/home/home.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 38962);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 95594);
/* harmony import */ var _components_food_delivery_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/food-delivery-components.module */ 72325);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _components_food_delivery_components_module__WEBPACK_IMPORTED_MODULE_2__.FoodDeliveryComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 95594:
/*!*******************************************************!*\
  !*** ./src/app/food-delivery/pages/home/home.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 81969);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 91852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/food-details/food-details.component */ 91090);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 30311);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 79708);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ 9670);










let HomePage = class HomePage {
    constructor(_authService, _modalController, _orderService, _router) {
        this._authService = _authService;
        this._modalController = _modalController;
        this._orderService = _orderService;
        this._router = _router;
        this.foods = [];
        this.basketCount = 0;
        this.categories = [];
        this.isLoading = true;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.foods = yield this.getFoods();
            this.categories = yield this.getCategories();
            this.isLoading = false;
        });
    }
    getFoods(catId = undefined) {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.food.getAll({ queryParams: { relation: true, filter: { categories: catId }, sort: { _id: -1 } } });
    }
    getCategories() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_4__.category.getAll();
    }
    openModal(food) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_food_details_food_details_component__WEBPACK_IMPORTED_MODULE_2__.FoodDetailsComponent,
                cssClass: 'modal',
                componentProps: {
                    food,
                },
            });
            modal.onWillDismiss().then((_) => {
                this.getBasketCount();
            });
            return yield modal.present();
        });
    }
    getBasketCount() {
        var _a, _b;
        this.basketCount = (_b = (_a = this._orderService.getOrder()) === null || _a === void 0 ? void 0 : _a.foods) === null || _b === void 0 ? void 0 : _b.length;
    }
    navigateToBasket() {
        this._router.navigate(['/food-delivery/basket'], { replaceUrl: true });
    }
    setCategory(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            if (value == 'all') {
                this.foods = yield this.getFoods();
            }
            else {
                this.foods = yield this.getFoods(value);
            }
            this.isLoading = false;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 29471:
/*!*****************************************************************************!*\
  !*** ./src/app/food-delivery/components/food-card/food-card.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n}\n:host ion-card ion-item img {\n  margin: 10px 0;\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  object-fit: cover;\n}\n:host ion-card ion-item .rating {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n}\n:host ion-card ion-item .rating ion-icon {\n  color: #ffc400;\n  margin-right: 2px;\n}\n:host ion-card ion-item .main-properties {\n  margin: 10px 0;\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n}\n:host ion-card ion-item .main-properties .name {\n  font-weight: 500;\n}\n:host ion-card ion-item .main-properties .ingredients {\n  display: flex;\n  flex-wrap: wrap;\n}\n:host ion-card ion-item .main-properties .ingredients .ingredient {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  margin-top: 10px;\n  margin-right: 5px;\n  color: #979797;\n}\n:host ion-card ion-item .main-properties .properties {\n  display: flex;\n  margin-top: 10px;\n  font-size: 12px;\n}\n:host ion-card ion-item .main-properties .properties span {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n:host ion-card ion-item .main-properties .properties span ion-icon {\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjtBQUdNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBSU07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZSO0FBR1E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFEVjtBQUtNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFJUTtFQUNFLGdCQUFBO0FBRlY7QUFLUTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBSFY7QUFLVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUhaO0FBT1E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTFY7QUFNVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUlBLGtCQUFBO0FBUFo7QUFJWTtFQUNFLGlCQUFBO0FBRmQiLCJmaWxlIjoiZm9vZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcblxuICBpb24tY2FyZCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC5yYXRpbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWFpbi1wcm9wZXJ0aWVzIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmdyZWRpZW50cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAuaW5ncmVkaWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTUxLCAxNTEsIDE1MSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb3BlcnRpZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 96602:
/*!***********************************************************************************!*\
  !*** ./src/app/food-delivery/components/food-details/food-details.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("::ng-deep.modal {\n  overflow: scroll;\n}\n::ng-deep.modal .modal-wrapper {\n  margin-top: 100px;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n}\n::ng-deep.modal .modal-wrapper div.swipe {\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  background: white;\n  z-index: 1;\n}\n::ng-deep.modal .modal-wrapper ion-card {\n  border-radius: 25px;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-header ion-card-subtitle {\n  font-size: 12px;\n  margin-top: 10px;\n  text-transform: none;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content ion-avatar {\n  --border-radius: 10px;\n  width: 90px;\n  height: 90px;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content > ion-label {\n  margin-left: 10px;\n  width: 70%;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content > ion-label p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: 12px;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content > ion-label div.options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content > ion-label div.options div.amount {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content > ion-label div.options div.amount * {\n  margin: 5px;\n}\n::ng-deep.modal .modal-wrapper ion-card ion-card-content > ion-label div.options div.price {\n  margin-right: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n::ng-deep.modal .modal-wrapper div.buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQUVKO0FBQUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUVOO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBRVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUFWO0FBSU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBR1E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFY7QUFHUTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQURWO0FBRVU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBWjtBQUVVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBWjtBQUVZO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBZDtBQUNjO0VBQ0UsV0FBQTtBQUNoQjtBQUdZO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFEZDtBQVFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5OIiwiZmlsZSI6ImZvb2QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5tb2RhbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC5tb2RhbC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuXG4gICAgZGl2LnN3aXBlIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIH1cbiAgICAgICAgPiBpb24tbGFiZWwge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2Lm9wdGlvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIGRpdi5hbW91bnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGl2LnByaWNlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGl2LmJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 91852:
/*!*********************************************************!*\
  !*** ./src/app/food-delivery/pages/home/home.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header .basket-box {\n  position: relative;\n  margin-right: 5px;\n}\n:host ion-header .basket-box ion-icon {\n  font-size: 20px;\n}\n:host ion-header .basket-box span {\n  background: red;\n  border-radius: 100%;\n  font-size: 9px;\n  font-weight: 700;\n  width: 11px;\n  height: 11px;\n  position: absolute;\n  right: -3px;\n  top: -3px;\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUZSO0FBR1E7RUFDRSxlQUFBO0FBRFY7QUFHUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURWIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1oZWFkZXJ7XG5cbiAgICAgIC5iYXNrZXQtYm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIHdpZHRoOiAxMXB4O1xuICAgICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 24021:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/components/food-card/food-card.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-item button lines=\"none\">\n    <img [src]=\"data.image\"/>\n    <ion-label class=\"main-properties\">\n      <ion-text class=\"name\">{{data.name}}</ion-text>\n      <ion-label *ngIf=\"rating > 0\" class=\"rating\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-text>{{rating.toFixed(1)}}</ion-text>\n      </ion-label>\n      <div class=\"ingredients\">\n        <ion-text class=\"ingredient\" *ngFor=\"let ingredient of data.ingredients\">{{ingredient['name']}}</ion-text>\n      </div>\n      <ion-label class=\"properties\">\n        <span><ion-icon name=\"time-outline\"></ion-icon>{{data.preparation_time}} min.</span>\n        <span><ion-icon name=\"flash-outline\"></ion-icon>{{data.calories}} cal.</span>\n        <span><ion-icon name=\"cube-outline\"></ion-icon>${{data.price | number:'1.0':'en-US'}}</span>\n      </ion-label>\n     </ion-label>\n  </ion-item>\n</ion-card>\n");

/***/ }),

/***/ 89060:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/components/food-details/food-details.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"swipe\" (click)=\"onDismiss()\">\n    <ion-icon color=\"primary\" name=\"chevron-down-outline\"></ion-icon>\n  </div>\n  <ion-card>\n    <ion-card-content>\n      <ion-avatar>\n        <img [src]=\"food.image\" alt=\"\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ food.name }}</h2>\n        <div class=\"options\">\n          <div class=\"amount\">\n            <ion-icon\n              (click)=\"count > 1 && (count = count - 1)\"\n              name=\"remove-circle-outline\"\n            ></ion-icon>\n            <span>\n              {{ count }}\n            </span>\n            <ion-icon\n              (click)=\"count = count + 1\"\n              name=\"add-circle-outline\"\n            ></ion-icon>\n          </div>\n          <div class=\"price\">$ {{ food.price * count }}</div>\n        </div>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Ingredients\n      </ion-card-title>\n      <ion-card-subtitle>\n        Please choose the materials that you want to remove.\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        <ion-chip\n          (click)=\"updateIngredients(ingredient['name'], 'removeds')\"\n          *ngFor=\"let ingredient of food.removable_ingredients\"\n          [disabled]=\"extras.includes(ingredient['name'])\"\n          [color]=\"\n            removeds.includes(ingredient['name']) ? 'danger' : 'tertiary'\n          \"\n        >\n          <ion-label>\n            {{ ingredient['name'] }}\n          </ion-label>\n        </ion-chip>\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Extra Ingredients\n      </ion-card-title>\n      <ion-card-subtitle>\n        Please choose the materials that you want to add.\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        <ion-chip\n          (click)=\"updateIngredients(ingredient['name'], 'extras')\"\n          *ngFor=\"let ingredient of food.extra_ingredients\"\n          [disabled]=\"removeds.includes(ingredient['name'])\"\n          [color]=\"\n            extras.includes(ingredient['name'])\n              ? 'success'\n              : 'tertiary'\n          \"\n        >\n          <ion-label>\n            {{ ingredient['name'] }}\n          </ion-label>\n        </ion-chip>\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"buttons\">\n    <ion-button (click)=\"addToOrder()\">\n      Add to cart\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ 81969:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-delivery/pages/home/home.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"food-delivery\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Food Delivery</ion-title>\n    <div class=\"basket-box\" slot=\"end\" (click)=\"navigateToBasket()\">\n      <ion-icon name=\"basket\"></ion-icon>\n      <span *ngIf=\"basketCount>0\">{{basketCount}}</span>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <spica-scroll-category\n    [categories]=\"categories\"\n    (action)=\"setCategory($event)\"\n    *ngIf=\"categories.length\"\n  ></spica-scroll-category>\n  <ng-container *ngIf=\"!isLoading\">\n    <div *ngIf=\"foods.length\">\n      <food-card\n        (click)=\"openModal(food)\"\n        *ngFor=\"let food of foods\"\n        [data]=\"food\"\n      ></food-card>\n    </div>\n  </ng-container>\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_food-delivery_pages_home_home_module_ts.js.map