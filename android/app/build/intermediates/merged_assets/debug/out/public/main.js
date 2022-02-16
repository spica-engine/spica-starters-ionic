(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then((m) => m.HomePageModule),
    },
    {
        path: 'food-delivery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_food-delivery_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./food-delivery/app.module */ 66616)).then((m) => m.FoodDeliveryModule),
    },
    {
        path: 'e-commerce',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_e-commerce_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./e-commerce/app.module */ 64473)).then((m) => m.ECommerceModule),
    },
    {
        path: 'social-media',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-translate_core___ivy_ngcc___fesm2015_ngx-translate-core_js"), __webpack_require__.e("src_app_social-media_app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./social-media/app.module */ 99012)).then((m) => m.SocialMediaModule),
    },
    {
        path: 'music-streaming',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./music-streaming/app.module */ 52297)).then((m) => m.MusicStreamingModule),
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat/app.module */ 57855)).then((m) => m.ChatModule),
    },
    {
        path: 'portfolio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_portfolio_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./portfolio/app.module */ 56179)).then((m) => m.PortfolioModule),
    },
    {
        path: 'job-portal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_job-portal_job-portal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./job-portal/job-portal.module */ 81091)).then((m) => m.JobPortalModule),
    },
    {
        path: 'store-listing',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_store-listing_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./store-listing/app.module */ 60646)).then((m) => m.StoreListingModule),
    },
    {
        path: 'appointment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_appointment_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./appointment/app.module */ 15374)).then((m) => m.AppointmentModule),
    },
    {
        path: 'forum',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forum_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forum/app.module */ 10020)).then((m) => m.ForumModule),
    },
    {
        path: 'fitness',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fitness_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fitness/app.module */ 47313)).then((m) => m.FitnessModule),
    },
    {
        path: 'real-estate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_real-estate_real-estate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./real-estate/real-estate.module */ 38278)).then((m) => m.RealEstateModule),
    },
    {
        path: 'booking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_booking_booking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 3911)).then((m) => m.BookingModule),
    },
    {
        path: 'dating',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dating_dating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dating/dating.module */ 80305)).then((m) => m.DatingModule),
    },
    {
        path: 'rent-a-car',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_rent-a-car_app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rent-a-car/app.module */ 93797)).then((m) => m.RentACarModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.showProjects = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyHammerConfig": () => (/* binding */ MyHammerConfig),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ 11524);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);










class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_3__.DIRECTION_ALL },
        };
    }
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.HammerModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.HAMMER_GESTURE_CONFIG,
                useClass: MyHammerConfig,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 71537:
/*!**********************************************!*\
  !*** ./src/app/chat/services/environment.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    project_id: 'spica-starters-7229b',
    api_url: 'https://spica-starters-7229b.hq.spicaengine.com/api',
    public_apikey: 'axfb9k1akx06fe2u',
    production: false,
    webURL: '',
    user_img: 'https://storage.googleapis.com/download/storage/v1/b/hq-spica-starters-7229b/o/61b70351fcfbb9002efed548?alt=media&timestamp=1639383890618',
    example_base64: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaComponentsModule": () => (/* binding */ SpicaComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _spica_product_card_spica_product_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-product-card/spica-product-card.component */ 37987);
/* harmony import */ var _spica_sort_modal_spica_sort_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spica-sort-modal/spica-sort-modal.component */ 84704);
/* harmony import */ var _spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spica-filter-modal/spica-filter-modal.component */ 63526);
/* harmony import */ var _spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spica-shipping-address/spica-shipping-address.component */ 14067);
/* harmony import */ var _spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spica-confirm-shopping/spica-confirm-shopping.component */ 1261);
/* harmony import */ var _spica_authorization_spica_authorization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spica-authorization/spica-authorization.component */ 91601);
/* harmony import */ var _spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spica-user-selection/spica-user-selection.component */ 47772);
/* harmony import */ var _spica_user_profile_picture_spica_user_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spica-user-profile-picture/spica-user-profile-picture.component */ 84174);
/* harmony import */ var _spica_upload_image_spcia_upload_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spica-upload-image/spcia-upload-image.component */ 93277);
/* harmony import */ var _spica_item_list_spica_item_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spica-item-list/spica-item-list.component */ 19469);
/* harmony import */ var _spica_menu_bar_spica_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spica-menu-bar/spica-menu-bar.component */ 9163);
/* harmony import */ var _spica_category_spica_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spica-category/spica-category.component */ 12553);
/* harmony import */ var _starter_projects_starter_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./starter-projects/starter-projects.component */ 27737);
/* harmony import */ var _pipes_revoked_underline_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipes/revoked-underline.pipe */ 53786);
/* harmony import */ var _spica_map_iframe_spica_map_iframe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spica-map-iframe/spica-map-iframe.component */ 68721);
/* harmony import */ var _spica_rating_spica_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spica-rating/spica-rating.component */ 91640);
/* harmony import */ var _spica_scroll_category_spica_scroll_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spica-scroll-category/spica-scroll-category.component */ 64614);
/* harmony import */ var _spica_stripe_payment_spica_stripe_payment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./spica-stripe-payment/spica-stripe-payment.component */ 3702);


























let SpicaComponentsModule = class SpicaComponentsModule {
};
SpicaComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgModule)({
        declarations: [
            _spica_product_card_spica_product_card_component__WEBPACK_IMPORTED_MODULE_1__.SpicaProductCardComponent,
            _spica_sort_modal_spica_sort_modal_component__WEBPACK_IMPORTED_MODULE_2__.SpicaSortModalComponent,
            _spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__.SpicaFilterModalComponent,
            _spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_4__.SpicaShippingAddressComponent,
            _spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_5__.SpicaConfirmShoppingComponent,
            _spica_authorization_spica_authorization_component__WEBPACK_IMPORTED_MODULE_6__.SpicaAuthorizationComponent,
            _spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_7__.SpicaUserSelectionComponent,
            _spica_user_profile_picture_spica_user_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__.SpicaUserProfilePictureComponent,
            _spica_upload_image_spcia_upload_image_component__WEBPACK_IMPORTED_MODULE_9__.SpicaUploadImageComponent,
            _spica_item_list_spica_item_list_component__WEBPACK_IMPORTED_MODULE_10__.SpicaItemListComponent,
            _spica_menu_bar_spica_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__.SpicaMenuBarComponent,
            _spica_category_spica_category_component__WEBPACK_IMPORTED_MODULE_12__.SpicaCategoryComponent,
            _starter_projects_starter_projects_component__WEBPACK_IMPORTED_MODULE_13__.StarterProjectsComponent,
            _pipes_revoked_underline_pipe__WEBPACK_IMPORTED_MODULE_14__.RevokedUnderlinePipe,
            _spica_map_iframe_spica_map_iframe_component__WEBPACK_IMPORTED_MODULE_15__.SpicaMapIframeComponent,
            _spica_rating_spica_rating_component__WEBPACK_IMPORTED_MODULE_16__.SpicaRatingComponent,
            _spica_scroll_category_spica_scroll_category_component__WEBPACK_IMPORTED_MODULE_17__.SpicaScrollCategoryComponent,
            _spica_stripe_payment_spica_stripe_payment_component__WEBPACK_IMPORTED_MODULE_18__.SpicaStripePaymentComponent
        ],
        exports: [
            _spica_product_card_spica_product_card_component__WEBPACK_IMPORTED_MODULE_1__.SpicaProductCardComponent,
            _spica_sort_modal_spica_sort_modal_component__WEBPACK_IMPORTED_MODULE_2__.SpicaSortModalComponent,
            _spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__.SpicaFilterModalComponent,
            _spica_shipping_address_spica_shipping_address_component__WEBPACK_IMPORTED_MODULE_4__.SpicaShippingAddressComponent,
            _spica_confirm_shopping_spica_confirm_shopping_component__WEBPACK_IMPORTED_MODULE_5__.SpicaConfirmShoppingComponent,
            _spica_authorization_spica_authorization_component__WEBPACK_IMPORTED_MODULE_6__.SpicaAuthorizationComponent,
            _spica_user_selection_spica_user_selection_component__WEBPACK_IMPORTED_MODULE_7__.SpicaUserSelectionComponent,
            _spica_user_profile_picture_spica_user_profile_picture_component__WEBPACK_IMPORTED_MODULE_8__.SpicaUserProfilePictureComponent,
            _spica_upload_image_spcia_upload_image_component__WEBPACK_IMPORTED_MODULE_9__.SpicaUploadImageComponent,
            _spica_item_list_spica_item_list_component__WEBPACK_IMPORTED_MODULE_10__.SpicaItemListComponent,
            _spica_menu_bar_spica_menu_bar_component__WEBPACK_IMPORTED_MODULE_11__.SpicaMenuBarComponent,
            _spica_category_spica_category_component__WEBPACK_IMPORTED_MODULE_12__.SpicaCategoryComponent,
            _starter_projects_starter_projects_component__WEBPACK_IMPORTED_MODULE_13__.StarterProjectsComponent,
            _pipes_revoked_underline_pipe__WEBPACK_IMPORTED_MODULE_14__.RevokedUnderlinePipe,
            _spica_map_iframe_spica_map_iframe_component__WEBPACK_IMPORTED_MODULE_15__.SpicaMapIframeComponent,
            _spica_rating_spica_rating_component__WEBPACK_IMPORTED_MODULE_16__.SpicaRatingComponent,
            _spica_scroll_category_spica_scroll_category_component__WEBPACK_IMPORTED_MODULE_17__.SpicaScrollCategoryComponent,
            _spica_stripe_payment_spica_stripe_payment_component__WEBPACK_IMPORTED_MODULE_18__.SpicaStripePaymentComponent
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_25__.IonicModule,
        ],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera
        ],
    })
], SpicaComponentsModule);



/***/ }),

/***/ 91601:
/*!*********************************************************************************!*\
  !*** ./src/app/components/spica-authorization/spica-authorization.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaAuthorizationComponent": () => (/* binding */ SpicaAuthorizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_authorization_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-authorization.component.html */ 74159);
/* harmony import */ var _spica_authorization_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-authorization.component.scss */ 63852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);





let SpicaAuthorizationComponent = class SpicaAuthorizationComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.screen = 'login';
        this.isPasswordVisible = false;
        this.clickLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.clickRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
                ],
            ],
            // username: '',
            name: '',
            surname: '',
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            termsOfUse: '',
        });
    }
    login() {
        this.clickLogin.emit(this.loginForm.value);
        this.loginForm.reset();
    }
    register() {
        let registerData = this.loginForm.value;
        delete registerData['termsOfUse'];
        this.clickRegister.emit(registerData);
        this.loginForm.reset();
    }
};
SpicaAuthorizationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
SpicaAuthorizationComponent.propDecorators = {
    clickLogin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    clickRegister: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SpicaAuthorizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'spica-authorization',
        template: _raw_loader_spica_authorization_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_authorization_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaAuthorizationComponent);



/***/ }),

/***/ 12553:
/*!***********************************************************************!*\
  !*** ./src/app/components/spica-category/spica-category.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaCategoryComponent": () => (/* binding */ SpicaCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-category.component.html */ 47986);
/* harmony import */ var _spica_category_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-category.component.scss */ 23589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SpicaCategoryComponent = class SpicaCategoryComponent {
    constructor() {
        this.clickNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.showedCat = '';
    }
    ngOnInit() { }
    clicked(category) {
        var _a;
        if (!((_a = category.sub_categories) === null || _a === void 0 ? void 0 : _a.length)) {
            this.clickNavigate.emit(category._id);
        }
        else {
            if (this.showedCat == category._id) {
                this.showedCat = '';
            }
            else
                this.showedCat = category._id;
        }
    }
};
SpicaCategoryComponent.ctorParameters = () => [];
SpicaCategoryComponent.propDecorators = {
    categories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clickNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SpicaCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'spica-category',
        template: _raw_loader_spica_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_category_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaCategoryComponent);



/***/ }),

/***/ 1261:
/*!***************************************************************************************!*\
  !*** ./src/app/components/spica-confirm-shopping/spica-confirm-shopping.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaConfirmShoppingComponent": () => (/* binding */ SpicaConfirmShoppingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_confirm_shopping_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-confirm-shopping.component.html */ 39702);
/* harmony import */ var _spica_confirm_shopping_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-confirm-shopping.component.scss */ 973);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 19122);





let SpicaConfirmShoppingComponent = class SpicaConfirmShoppingComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.shoppingData = {
            addressIndex: 0,
            paymentMethod: '',
        };
        this.addresses = [];
        this.totalPrice = 0;
        this.currency = 'USD';
        this.paymentMethods = [];
    }
    ngOnInit() {
        this.shoppingData.paymentMethod = this.paymentMethods[0].title;
    }
    dismiss(value) {
        this.modalController.dismiss({
            value: value,
            shoppingData: this.shoppingData
        });
    }
};
SpicaConfirmShoppingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SpicaConfirmShoppingComponent.propDecorators = {
    addresses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    totalPrice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    paymentMethods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SpicaConfirmShoppingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-confirm-shopping',
        template: _raw_loader_spica_confirm_shopping_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_confirm_shopping_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaConfirmShoppingComponent);



/***/ }),

/***/ 63526:
/*!*******************************************************************************!*\
  !*** ./src/app/components/spica-filter-modal/spica-filter-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaFilterModalComponent": () => (/* binding */ SpicaFilterModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-filter-modal.component.html */ 11638);
/* harmony import */ var _spica_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-filter-modal.component.scss */ 78409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 19122);





let SpicaFilterModalComponent = class SpicaFilterModalComponent {
    constructor(modal) {
        this.modal = modal;
        this.price_range = { lower: 0, upper: 0 };
        this.currency = 'USD';
        this.filter = [];
        this.minMax = { lower: 0, upper: 0 };
    }
    ngOnInit() {
        this.minMax = this.price_range;
    }
    setFilter() {
        this.filter.push({ name: 'price_range', value: this.price_range });
        this.modal.dismiss({
            filter: this.filter,
        });
    }
    clearFilter() {
        this.modal.dismiss({
            action: 'clear_filter',
        });
    }
    changePrice(value) {
        this.price_range = value;
    }
    addNewFilterParams(attribute, target) {
        let tempParams = this.filter.find((el) => {
            if (el.name == attribute) {
                return el;
            }
        });
        if (tempParams) {
            this.filter = this.filter.filter((el) => {
                return el.name !== attribute;
            });
        }
        if (target.value.length > 0)
            this.filter.push({ name: attribute, value: target.value });
    }
};
SpicaFilterModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SpicaFilterModalComponent.propDecorators = {
    attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    price_range: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SpicaFilterModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-filter-modal',
        template: _raw_loader_spica_filter_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_filter_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaFilterModalComponent);



/***/ }),

/***/ 19469:
/*!*************************************************************************!*\
  !*** ./src/app/components/spica-item-list/spica-item-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaItemListComponent": () => (/* binding */ SpicaItemListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_item_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-item-list.component.html */ 47619);
/* harmony import */ var _spica_item_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-item-list.component.scss */ 53061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);





let SpicaItemListComponent = class SpicaItemListComponent {
    /* Sample
    items = [
      {
        key: 'name',
        value: 'john',
        seperate: true,
        link: '',
      },
      {
        key: 'favorites',
        value: '',
        seperate: false,
        link: '/favorites',
      },
    ];
    */
    constructor(_router) {
        this._router = _router;
        this.items = [];
        this.canLogout = true;
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.seperatedItems = this.items.filter((item) => item.seperate);
        this.unSeperatedItems = this.items.filter((item) => !item.seperate);
    }
    logOut() {
        this.logout.emit();
        setTimeout(() => {
            this._router.navigate(['/home'], { replaceUrl: true });
        }, 1000);
    }
};
SpicaItemListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SpicaItemListComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    canLogout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    logout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SpicaItemListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'spica-item-list',
        template: _raw_loader_spica_item_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_item_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaItemListComponent);



/***/ }),

/***/ 68721:
/*!***************************************************************************!*\
  !*** ./src/app/components/spica-map-iframe/spica-map-iframe.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaMapIframeComponent": () => (/* binding */ SpicaMapIframeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_map_iframe_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-map-iframe.component.html */ 882);
/* harmony import */ var _spica_map_iframe_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-map-iframe.component.scss */ 31886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 39075);





let SpicaMapIframeComponent = class SpicaMapIframeComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    ngOnInit() {
        this.link = this._sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.data.coordinates[1]},${this.data.coordinates[0]}&t=&z=15&ie=UTF8&iwloc=&output=embed`);
    }
};
SpicaMapIframeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer }
];
SpicaMapIframeComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SpicaMapIframeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-map-iframe',
        template: _raw_loader_spica_map_iframe_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_map_iframe_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaMapIframeComponent);



/***/ }),

/***/ 9163:
/*!***********************************************************************!*\
  !*** ./src/app/components/spica-menu-bar/spica-menu-bar.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaMenuBarComponent": () => (/* binding */ SpicaMenuBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_menu_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-menu-bar.component.html */ 90970);
/* harmony import */ var _spica_menu_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-menu-bar.component.scss */ 91729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ 98914);







let SpicaMenuBarComponent = class SpicaMenuBarComponent {
    constructor(_menu, _menuServices, _router) {
        this._menu = _menu;
        this._menuServices = _menuServices;
        this._router = _router;
        this.side = 'start'; //can be end
        this.routeble = true;
        this.clickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.items = this._menuServices.getMenuItems[this.project]();
        this.activeLink = this.items.filter((item) => this.project + '/' + item.key == this._router.url.substr(1))[0]
            ? this._router.url.substr(this.project.length + 2)
            : this.items[0].key;
    }
    clickedItem(item) {
        this.activeLink = item.key;
        this.clickMenuItem.emit(item.key);
        if (this.routeble) {
            this._router.navigateByUrl(`${this.project}/${item.key}`, {
                replaceUrl: true,
            });
        }
        this._menu.close('custom');
    }
};
SpicaMenuBarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SpicaMenuBarComponent.propDecorators = {
    side: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    routeble: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    clickMenuItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
SpicaMenuBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-menu-bar',
        template: _raw_loader_spica_menu_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_menu_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaMenuBarComponent);



/***/ }),

/***/ 37987:
/*!*******************************************************************************!*\
  !*** ./src/app/components/spica-product-card/spica-product-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaProductCardComponent": () => (/* binding */ SpicaProductCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_product_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-product-card.component.html */ 7115);
/* harmony import */ var _spica_product_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-product-card.component.scss */ 37640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SpicaProductCardComponent = class SpicaProductCardComponent {
    constructor() {
        this.likeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isLiked = false;
    }
    ngOnInit() {
        this.isLiked = this.data['is_liked'];
    }
    changeLike() {
        this.isLiked = !this.isLiked;
        this.likeChanged.emit(this.isLiked);
    }
};
SpicaProductCardComponent.ctorParameters = () => [];
SpicaProductCardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    likeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SpicaProductCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'spica-product-card',
        template: _raw_loader_spica_product_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_product_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaProductCardComponent);



/***/ }),

/***/ 91640:
/*!*******************************************************************!*\
  !*** ./src/app/components/spica-rating/spica-rating.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaRatingComponent": () => (/* binding */ SpicaRatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-rating.component.html */ 34839);
/* harmony import */ var _spica_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-rating.component.scss */ 74367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SpicaRatingComponent = class SpicaRatingComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.rating = 3;
    }
    ngOnInit() { }
    rate(rating) {
        this.rating = rating;
    }
    clicked(value) {
        this.action.emit({ data: { value: value, rating: this.rating, comment: this.comment } });
    }
};
SpicaRatingComponent.ctorParameters = () => [];
SpicaRatingComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SpicaRatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'spica-rating',
        template: _raw_loader_spica_rating_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaRatingComponent);



/***/ }),

/***/ 64614:
/*!*************************************************************************************!*\
  !*** ./src/app/components/spica-scroll-category/spica-scroll-category.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaScrollCategoryComponent": () => (/* binding */ SpicaScrollCategoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_scroll_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-scroll-category.component.html */ 96489);
/* harmony import */ var _spica_scroll_category_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-scroll-category.component.scss */ 92500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SpicaScrollCategoryComponent = class SpicaScrollCategoryComponent {
    constructor() {
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.active = 'all';
    }
    ngOnInit() { }
    clicked(value) {
        this.active = value;
        this.action.emit(value);
    }
};
SpicaScrollCategoryComponent.ctorParameters = () => [];
SpicaScrollCategoryComponent.propDecorators = {
    categories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
SpicaScrollCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'spica-scroll-category',
        template: _raw_loader_spica_scroll_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_scroll_category_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaScrollCategoryComponent);



/***/ }),

/***/ 14067:
/*!***************************************************************************************!*\
  !*** ./src/app/components/spica-shipping-address/spica-shipping-address.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaShippingAddressComponent": () => (/* binding */ SpicaShippingAddressComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_shipping_address_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-shipping-address.component.html */ 9968);
/* harmony import */ var _spica_shipping_address_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-shipping-address.component.scss */ 44711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 19122);





let SpicaShippingAddressComponent = class SpicaShippingAddressComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.shippingData = {
            title: "",
            phone: "",
            country: "",
            province: "",
            district: "",
            full_address: ""
        };
    }
    ngOnInit() { }
    dismiss(value) {
        this.modalController.dismiss({
            value: value,
            shippingData: this.shippingData
        });
    }
};
SpicaShippingAddressComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SpicaShippingAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'spica-shipping-address',
        template: _raw_loader_spica_shipping_address_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_shipping_address_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaShippingAddressComponent);



/***/ }),

/***/ 84704:
/*!***************************************************************************!*\
  !*** ./src/app/components/spica-sort-modal/spica-sort-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaSortModalComponent": () => (/* binding */ SpicaSortModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-sort-modal.component.html */ 3301);
/* harmony import */ var _spica_sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-sort-modal.component.scss */ 97483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 19122);





let SpicaSortModalComponent = class SpicaSortModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() { }
    setSort(key) {
        this.modal.dismiss({
            sort_key: key,
        });
    }
};
SpicaSortModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SpicaSortModalComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SpicaSortModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-sort-modal',
        template: _raw_loader_spica_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaSortModalComponent);



/***/ }),

/***/ 3702:
/*!***********************************************************************************!*\
  !*** ./src/app/components/spica-stripe-payment/spica-stripe-payment.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaStripePaymentComponent": () => (/* binding */ SpicaStripePaymentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_stripe_payment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-stripe-payment.component.html */ 17800);
/* harmony import */ var _spica_stripe_payment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-stripe-payment.component.scss */ 41023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 19122);






let SpicaStripePaymentComponent = class SpicaStripePaymentComponent {
    constructor(_formBuilder, _modalController) {
        this._formBuilder = _formBuilder;
        this._modalController = _modalController;
        this.totalPrice = 0;
        this.currency = 'USD';
        this.backSide = false;
        this.cardTypeUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png';
    }
    ngOnInit() {
        this.cardForm = this._formBuilder.group({
            cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            expireDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            cvc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    formatCardNumber(value) {
        this.cardForm.controls.cardNumber.setValue(value.replace(/\s/g, '').replace(/\d{4}(?=.)/g, '$& '));
        if (this.cardForm.controls.cardNumber.value[0] == 4) {
            // visa
            this.cardTypeUrl =
                'https://www.pngitem.com/pimgs/m/35-351816_card-visa-small-logo-png-transparent-png.png';
        }
        else {
            // mastercard
            this.cardTypeUrl =
                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png';
        }
    }
    formatExpireDate(value) {
        if (value.length > 2) {
            this.cardForm.controls.expireDate.setValue(value.substring(0, 2) + '/' + value.substring(2 + 1));
        }
    }
    dismiss(value) {
        let expireDateArr = this.cardForm.controls.expireDate.value.split('/');
        let cardData = {
            number: this.cardForm.controls.cardNumber.value.replace(/\s/g, ''),
            exp_month: Number(expireDateArr[0]),
            exp_year: Number(expireDateArr[1]),
            cvc: Number(this.cardForm.controls.cvc.value),
        };
        this._modalController.dismiss({
            value: value,
            cardData,
        });
    }
};
SpicaStripePaymentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
SpicaStripePaymentComponent.propDecorators = {
    totalPrice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SpicaStripePaymentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-spica-stripe-payment',
        template: _raw_loader_spica_stripe_payment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_stripe_payment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaStripePaymentComponent);



/***/ }),

/***/ 93277:
/*!*******************************************************************************!*\
  !*** ./src/app/components/spica-upload-image/spcia-upload-image.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaUploadImageComponent": () => (/* binding */ SpicaUploadImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_upload_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-upload-image.component.html */ 75026);
/* harmony import */ var _spica_upload_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-upload-image.component.scss */ 74645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var src_app_services_camera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/camera.service */ 53942);






let SpicaUploadImageComponent = class SpicaUploadImageComponent {
    constructor(_cameraProvider) {
        this._cameraProvider = _cameraProvider;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.icon = 'camera-outline';
        this.image = null;
        this.allMediaavailable = false;
    }
    showImageSelect() {
        // this.change.emit(environment.example_base64);
        this._cameraProvider.selectImage(this.allMediaavailable);
        this.errSubs = this._cameraProvider.throwError.subscribe((_) => {
            this.cameraSubs.unsubscribe();
            this.errSubs.unsubscribe();
        });
        this.cameraSubs = this._cameraProvider.croppedImagePath
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((imageData) => {
            this.image = imageData;
            this.change.emit(imageData);
        }, (err) => console.log("err", err));
    }
};
SpicaUploadImageComponent.ctorParameters = () => [
    { type: src_app_services_camera_service__WEBPACK_IMPORTED_MODULE_2__.CameraService }
];
SpicaUploadImageComponent.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    allMediaavailable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SpicaUploadImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-upload-image',
        template: _raw_loader_spica_upload_image_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_upload_image_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaUploadImageComponent);



/***/ }),

/***/ 84174:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/spica-user-profile-picture/spica-user-profile-picture.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaUserProfilePictureComponent": () => (/* binding */ SpicaUserProfilePictureComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_user_profile_picture_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-user-profile-picture.component.html */ 37756);
/* harmony import */ var _spica_user_profile_picture_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-user-profile-picture.component.scss */ 11639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_chat_services_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/chat/services/environment */ 71537);





let SpicaUserProfilePictureComponent = class SpicaUserProfilePictureComponent {
    constructor() {
        this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.imageEditable = false;
        this.defaultImage = src_app_chat_services_environment__WEBPACK_IMPORTED_MODULE_2__.environment.user_img;
    }
    ngOnInit() { }
    change(data) {
        this.changeImage.emit(data);
    }
};
SpicaUserProfilePictureComponent.ctorParameters = () => [];
SpicaUserProfilePictureComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    changeImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    imageEditable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
SpicaUserProfilePictureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-user-profile-picture',
        template: _raw_loader_spica_user_profile_picture_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_user_profile_picture_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaUserProfilePictureComponent);



/***/ }),

/***/ 47772:
/*!***********************************************************************************!*\
  !*** ./src/app/components/spica-user-selection/spica-user-selection.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpicaUserSelectionComponent": () => (/* binding */ SpicaUserSelectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_spica_user_selection_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./spica-user-selection.component.html */ 17593);
/* harmony import */ var _spica_user_selection_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spica-user-selection.component.scss */ 46230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_chat_services_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/chat/services/environment */ 71537);






let SpicaUserSelectionComponent = class SpicaUserSelectionComponent {
    constructor(_modalController) {
        this._modalController = _modalController;
        this.users = [];
        this.selectionType = 'multiple';
        this.choosen_users = [];
        this.searchedText = '';
        this.default_user_image = src_app_chat_services_environment__WEBPACK_IMPORTED_MODULE_2__.environment.user_img;
        this.showedUsers = [];
    }
    ngOnInit() {
        this.showedUsers = [...this.users];
    }
    toggleUser(user) {
        if (this.choosen_users.filter((choosenUser) => choosenUser._id == user._id)
            .length) {
            this.choosen_users.splice(this.choosen_users.map((user) => user._id).indexOf(user._id), 1);
        }
        else {
            this.choosen_users.push(user);
        }
    }
    selectUser(user) {
        this.choosen_users = [];
        this.choosen_users.push(user);
    }
    getUserBySearch() {
        this.showedUsers = this.users.filter((item) => item.following.username
            .toLowerCase()
            .includes(this.searchedText.toLocaleLowerCase()));
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this._modalController.dismiss({
            users: this.choosen_users,
        });
    }
    cancle() {
        this._modalController.dismiss({
            users: [],
        });
    }
};
SpicaUserSelectionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
SpicaUserSelectionComponent.propDecorators = {
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SpicaUserSelectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'spica-user-selection',
        template: _raw_loader_spica_user_selection_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_spica_user_selection_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpicaUserSelectionComponent);



/***/ }),

/***/ 27737:
/*!***************************************************************************!*\
  !*** ./src/app/components/starter-projects/starter-projects.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarterProjectsComponent": () => (/* binding */ StarterProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_starter_projects_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./starter-projects.component.html */ 54807);
/* harmony import */ var _starter_projects_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starter-projects.component.scss */ 16850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);






let StarterProjectsComponent = class StarterProjectsComponent {
    constructor(_router, _commonService) {
        this._router = _router;
        this._commonService = _commonService;
        this.clickedProject = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.projects = [];
    }
    gotoProject(route) {
        this._router.navigateByUrl(route, {
            replaceUrl: true,
        });
        this.clickedProject.emit();
    }
    ngOnInit() {
        this.projects = [
            {
                name: 'Food Delivery',
                route: '/food-delivery',
                icon: 'fast-food-outline',
            },
            {
                name: 'Fitness Application',
                route: '/fitness',
                icon: 'barbell-outline',
            },
            {
                name: 'E-Commerce Application',
                route: '/e-commerce',
                icon: 'bag-handle-outline',
            },
            {
                name: 'Social Media',
                route: '/social-media',
                icon: 'thumbs-up-outline',
            },
            {
                name: 'Music Streaming',
                route: '/music-streaming',
                icon: 'musical-notes-outline',
            },
            { name: 'Chat', route: '/chat', icon: 'chatbox-ellipses-outline' },
            { name: 'Job Portal', route: '/job-portal', icon: 'filter-outline' },
            { name: 'Portfolio', route: '/portfolio', icon: 'newspaper-outline' },
            {
                name: 'Store Listing',
                route: '/store-listing',
                icon: 'storefront-outline',
            },
            { name: 'Appointment', route: '/appointment', icon: 'calendar-outline' },
            { name: 'Forum', route: '/forum', icon: 'text-outline' },
            { name: 'Real Estate', route: '/real-estate', icon: 'home' },
            { name: 'Booking', route: '/booking', icon: 'bed-outline' },
            { name: 'Dating', route: '/dating', icon: 'heart-circle-outline' },
            // {
            //   name: 'Rent a Car',
            //   route: '/rent-a-car',
            //   icon: 'car-sport-outline',
            // },
        ];
    }
    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this._commonService.presentToast('Copied !', 1000);
    }
};
StarterProjectsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
StarterProjectsComponent.propDecorators = {
    clickedProject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
StarterProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'spica-starter-projects',
        template: _raw_loader_starter_projects_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_starter_projects_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StarterProjectsComponent);



/***/ }),

/***/ 53786:
/*!*************************************************!*\
  !*** ./src/app/pipes/revoked-underline.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevokedUnderlinePipe": () => (/* binding */ RevokedUnderlinePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let RevokedUnderlinePipe = class RevokedUnderlinePipe {
    transform(value) {
        return value ? value.split('_').join(' ') : '';
    }
};
RevokedUnderlinePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'revokedUnderline',
    })
], RevokedUnderlinePipe);



/***/ }),

/***/ 53942:
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraService": () => (/* binding */ CameraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 61977);



// import { Crop } from "@ionic-native/crop/ngx";
// import {
//   VideoCapturePlus,
//   VideoCapturePlusOptions,
// } from "@ionic-native/video-capture-plus/ngx";


// import { TranslateService } from "@ngx-translate/core";

let CameraService = class CameraService {
    constructor(camera, actionSheetController, 
    // private translateService: TranslateService,
    // private videoCapturePlus: VideoCapturePlus,
    // private crop: Crop,
    platform) {
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.croppedImagePath = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.throwError = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.imageMimeTypes = ["jpeg", "jpg", "png"];
    }
    pickImage(sourceType, allMediaavailable) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: allMediaavailable
                ? this.camera.MediaType.ALLMEDIA
                : this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((filePath) => {
            filePath = filePath.split("?")[0];
            console.log(filePath);
            if (filePath.toLowerCase().indexOf("mp4") >= 0 ||
                filePath.toLowerCase().indexOf("mov") >= 0) {
                filePath = "file://" + filePath;
                this.uploadVideo(filePath);
            }
            else if (this.imageMimeTypes.includes(filePath.substr(filePath.lastIndexOf(".") + 1, filePath.length)))
                this.cropImage(filePath.split("?")[0]);
            else
                console.log("filedata :", filePath); //do nothing
        }, (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.throwError.next(true);
            console.log(err);
        }));
    }
    uploadVideo(videoUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let base64file = yield this.filePathToBase64(videoUrl);
            this.croppedImagePath.next("data:video/mp4;base64," + base64file);
        });
    }
    selectImage(allMediaavailable) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let buttons = [
                {
                    text: "select-an-image",
                    handler: () => {
                        this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, allMediaavailable);
                    },
                },
                {
                    text: "take-photo",
                    handler: () => {
                        this.pickImage(this.camera.PictureSourceType.CAMERA, false);
                    },
                },
                {
                    text: "cancel",
                    role: "cancel",
                },
            ];
            // if (allMediaavailable)
            //   buttons.splice(buttons.length - 1, 0, {
            //     text: this.translateService.instant("take-video"),
            //     handler: () => {
            //       this.pickVideo();
            //     },
            //   });
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Upload Image',
                buttons,
            });
            yield actionSheet.present();
        });
    }
    cropImage(imagepath) {
        // this.imageCropModalService
        //   .show(imageBase64)
        //   .then((result) => {
        //     this.croppedImagePath.next(result);
        //   })
        //   .catch((error) => {
        //     // Handle any errors thrown
        //     console.log(error);
        //   });
        // this.crop.crop(imagepath, { quality: 75 }).then(
        //   async (newImage) => {
        //     let base64file = await this.filePathToBase64(newImage);
        //     this.croppedImagePath.next("data:image/jpeg;base64," + base64file);
        //   },
        //   (error) => console.error("Error cropping image", error)
        // );
    }
    // pickVideo() {
    //   const options: VideoCapturePlusOptions = {
    //     limit: 1,
    //     highquality: true,
    //   };
    //   this.videoCapturePlus.captureVideo(options).then(
    //     async (mediafile) => {
    //       if (this.platform.is("ios")) {
    //         mediafile[0].fullPath = "file:///" + mediafile[0].fullPath;
    //       }
    //       this.uploadVideo(mediafile[0].fullPath);
    //     },
    //     (error) => console.log("Something went wrong", error)
    //   );
    // }
    filePathToBase64(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                path: path.split("?")[0],
            });
            return file.data;
        });
    }
};
CameraService.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
CameraService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], CameraService);



/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 19122);



let CommonService = class CommonService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: duration
            });
            toast.present();
        });
    }
    calculateAge(birthday) {
        let month_diff = Date.now() - new Date(birthday).getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    }
};
CommonService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 98914:
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let MenuService = class MenuService {
    constructor() {
        this.getMenuItems = {
            'job-portal': () => {
                return [
                    { key: 'jobs', value: 'Jobs', icon: 'filter-outline' },
                    { key: 'profile/me', value: 'Profile', icon: 'person' },
                    { key: 'create-advert', value: 'Create Advert', icon: 'add' },
                ];
            },
            forum: () => {
                return [
                    { key: '/', value: 'Home', icon: 'home' },
                    { key: 'survey', value: 'Survey', icon: 'clipboard-outline' },
                    { key: 'create-survey', value: 'Create Survey', icon: 'create' },
                    { key: 'profile', value: 'Profile', icon: 'person' },
                ];
            },
            fitness: () => {
                return [
                    { key: '/', value: 'Home', icon: 'home' },
                    { key: 'categories', value: 'Categories', icon: 'filter-outline' },
                    { key: 'profile', value: 'Profile', icon: 'person' },
                ];
            },
            booking: () => {
                return [
                    { key: '/', value: 'Home', icon: 'home' },
                    { key: 'rooms', value: 'Rooms', icon: 'bed-outline' },
                    { key: 'contact', value: 'Contact', icon: 'mail-outline' },
                ];
            },
            'real-estate': () => {
                return [
                    { key: 'adversts', value: 'Adversts', icon: 'filter-outline' },
                    {
                        key: 'consultants',
                        value: 'Our Consultants',
                        icon: 'people-outline',
                    },
                    {
                        key: 'announcement',
                        value: 'Announcement',
                        icon: 'megaphone-outline',
                    },
                    { key: 'about', value: 'About Us', icon: 'receipt-outline' },
                ];
            },
            'food-delivery': () => {
                return [
                    { key: 'home', value: 'Home', icon: 'home' },
                    { key: 'basket', value: 'Basket', icon: 'basket' },
                    { key: 'profile', value: 'Profile', icon: 'person' },
                ];
            },
            'rent-a-car': () => {
                return [
                    { key: 'home', value: 'Home', icon: 'home-outline' },
                    { key: 'cars', value: 'Cars', icon: 'car-outline' },
                    { key: 'contact', value: 'Contact', icon: 'mail-outline' },
                    { key: 'profile', value: 'Profile', icon: 'person-outline' },
                ];
            },
        };
    }
};
MenuService.ctorParameters = () => [];
MenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], MenuService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		38359,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		47321,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		44355,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		1349,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		37915,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .projects {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 300px;\n  background-color: transparent;\n  right: -300px;\n  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.37, 0.75);\n}\n:host .projects ion-icon {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -25px;\n  height: 50px;\n  width: 25px;\n  background: white;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.25);\n}\n:host .projects spica-starter-projects ::ng-deep .container {\n  height: 100%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n:host .projects spica-starter-projects ::ng-deep ion-list {\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n:host .projects spica-starter-projects ::ng-deep ion-item {\n  opacity: 0;\n}\n:host .projects.open {\n  animation: fade 1s ease;\n  display: block;\n  right: 0px;\n  height: 90%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  width: calc(100% - 40px);\n  max-width: 360px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-list {\n  overflow-y: scroll;\n  margin-top: 0;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item {\n  animation: fly 0.5s;\n  transition: opacity 0.5s ease;\n  opacity: 1;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(1) {\n  animation-delay: 0.05s;\n  transition-delay: 0.05s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(2) {\n  animation-delay: 0.1s;\n  transition-delay: 0.1s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(3) {\n  animation-delay: 0.15s;\n  transition-delay: 0.15s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(4) {\n  animation-delay: 0.2s;\n  transition-delay: 0.2s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(5) {\n  animation-delay: 0.25s;\n  transition-delay: 0.25s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(6) {\n  animation-delay: 0.3s;\n  transition-delay: 0.3s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(7) {\n  animation-delay: 0.35s;\n  transition-delay: 0.35s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(8) {\n  animation-delay: 0.4s;\n  transition-delay: 0.4s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(9) {\n  animation-delay: 0.45s;\n  transition-delay: 0.45s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(10) {\n  animation-delay: 0.5s;\n  transition-delay: 0.5s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(11) {\n  animation-delay: 0.55s;\n  transition-delay: 0.55s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(12) {\n  animation-delay: 0.6s;\n  transition-delay: 0.6s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(13) {\n  animation-delay: 0.65s;\n  transition-delay: 0.65s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(14) {\n  animation-delay: 0.7s;\n  transition-delay: 0.7s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(15) {\n  animation-delay: 0.75s;\n  transition-delay: 0.75s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(16) {\n  animation-delay: 0.8s;\n  transition-delay: 0.8s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(17) {\n  animation-delay: 0.85s;\n  transition-delay: 0.85s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(18) {\n  animation-delay: 0.9s;\n  transition-delay: 0.9s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(19) {\n  animation-delay: 0.95s;\n  transition-delay: 0.95s;\n}\n:host .projects.open spica-starter-projects ::ng-deep ion-item:nth-of-type(20) {\n  animation-delay: 1s;\n  transition-delay: 1s;\n}\n:host ion-router-outlet {\n  transition: all 0.5s ease;\n}\n:host ion-router-outlet.opacity-passive {\n  opacity: 0.1;\n}\n@keyframes fade {\n  from {\n    opacity: 0.5;\n    right: -300px;\n  }\n  to {\n    opacity: 1;\n    right: 0;\n  }\n}\n@keyframes fly {\n  from {\n    transform: translateX(80px);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUFBO0FBQUo7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnREFBQTtBQUNOO0FBR1E7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQURWO0FBR1E7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FBRFY7QUFHUTtFQUNFLFVBQUE7QUFEVjtBQUtJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsK0NBQUE7QUFITjtBQU1VO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSlo7QUFNVTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBSlo7QUFNYztFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFKaEI7QUFFYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFBaEI7QUFGYztFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFJaEI7QUFOYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFRaEI7QUFWYztFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFZaEI7QUFkYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFnQmhCO0FBbEJjO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQW9CaEI7QUF0QmM7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBd0JoQjtBQTFCYztFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUE0QmhCO0FBOUJjO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQWdDaEI7QUFsQ2M7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBb0NoQjtBQXRDYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUF3Q2hCO0FBMUNjO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQTRDaEI7QUE5Q2M7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBZ0RoQjtBQWxEYztFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFvRGhCO0FBdERjO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQXdEaEI7QUExRGM7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBNERoQjtBQTlEYztFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFnRWhCO0FBbEVjO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQW9FaEI7QUF0RWM7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBd0VoQjtBQWhFRTtFQUNFLHlCQUFBO0FBa0VKO0FBakVJO0VBQ0UsWUFBQTtBQW1FTjtBQS9ERTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFpRUo7RUEvREU7SUFDRSxVQUFBO0lBQ0EsUUFBQTtFQWlFSjtBQUNGO0FBL0RFO0VBQ0U7SUFDRSwyQkFBQTtFQWlFSjtFQS9ERTtJQUNFLHdCQUFBO0VBaUVKO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAucHJvamVjdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHJpZ2h0OiAtMzAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzcsIDAuNzUsIDAuMzcsIDAuNzUpO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgbGVmdDogLTI1cHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IDJweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgIH1cbiAgICBzcGljYS1zdGFydGVyLXByb2plY3RzIHtcbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLm9wZW4ge1xuICAgICAgYW5pbWF0aW9uOiBmYWRlIDFzIGVhc2U7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDFweCByZ2IoMCAwIDAgLyAyNSUpO1xuICAgICAgc3BpY2Etc3RhcnRlci1wcm9qZWN0cyB7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmbHkgMC41cztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMjAge1xuICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKCN7JGl9KSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAjeyRpLzIwfXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogI3skaS8yMH1zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1yb3V0ZXItb3V0bGV0IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICYub3BhY2l0eS1wYXNzaXZlIHtcbiAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgcmlnaHQ6IC0zMDBweDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGZseSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 63852:
/*!***********************************************************************************!*\
  !*** ./src/app/components/spica-authorization/spica-authorization.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .auth-container .nav-container {\n  width: 100%;\n  display: flex;\n  border-bottom: 1px solid black;\n}\n:host .auth-container .nav-container ion-label {\n  flex: 1;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  padding: 15px 0;\n}\n:host .auth-container .nav-container ion-label.active {\n  border-bottom: 2px solid var(--ion-color-primary);\n}\n:host .auth-container .form-container {\n  padding: 15px;\n}\n:host .auth-container .form-container .icon-input {\n  position: relative;\n}\n:host .auth-container .form-container .icon-input ion-icon {\n  position: absolute;\n  right: 0;\n  font-size: 20px;\n  padding: 0 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  height: 100%;\n}\n:host .auth-container .form-container ion-input {\n  margin-top: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 60px;\n  border: 1px solid var(--ion-color-medium-tint);\n  border-radius: 5px;\n}\n:host .auth-container .form-container p {\n  font-size: 14px;\n  margin: 20px 0;\n  text-align: end;\n}\n:host .auth-container .form-container .agreement {\n  margin: 20px 0;\n}\n:host .auth-container .form-container ion-button {\n  width: 100%;\n  height: 60px;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLWF1dGhvcml6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRE47QUFHTTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBQ0UsaURBQUE7QUFEVjtBQU1JO0VBQ0UsYUFBQTtBQUpOO0FBS007RUFDRSxrQkFBQTtBQUhSO0FBSVE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRlY7QUFLTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0FBSFI7QUFNTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUpSO0FBT007RUFDRSxjQUFBO0FBTFI7QUFRTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFOUiIsImZpbGUiOiJzcGljYS1hdXRob3JpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuYXV0aC1jb250YWluZXIge1xuICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgLmljb24taW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICB9XG5cbiAgICAgIC5hZ3JlZW1lbnQge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgIH1cblxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 23589:
/*!*************************************************************************!*\
  !*** ./src/app/components/spica-category/spica-category.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .item {\n  border-bottom: 1px solid #dcdcdc;\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  position: relative;\n  flex-direction: column;\n  max-height: 120px;\n  overflow: hidden;\n  transition: all 0.6s cubic-bezier(0, 0.91, 0.76, 1);\n}\n:host .item.show-sub-cat {\n  max-height: 900px;\n  overflow: scroll;\n  transition: all 1.5s linear;\n}\n:host .item.show-sub-cat .cat-container.main-cat ion-icon {\n  transform: rotate(90deg);\n}\n:host .item .cat-container {\n  display: flex;\n  align-items: center;\n  min-height: 120px;\n  width: 100%;\n}\n:host .item .cat-container ion-label {\n  margin-left: 15px;\n}\n:host .item .cat-container ion-icon {\n  position: absolute;\n  right: 15px;\n}\n:host .item .cat-container.main-cat ion-avatar {\n  width: 65px;\n  height: 65px;\n}\n:host .item .cat-container.main-cat ion-label {\n  font-size: 18px;\n  font-weight: 700;\n}\n:host .item .cat-container.sub-cat {\n  height: 50px;\n  padding-left: 20px;\n}\n:host .item .cat-container.sub-cat ion-avatar {\n  width: 42px;\n  height: 42px;\n}\n:host .item .cat-container.sub-cat ion-label {\n  font-size: 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtBQUFKO0FBRUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBUUEsMkJBQUE7QUFQTjtBQUVVO0VBQ0Usd0JBQUE7QUFBWjtBQU9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTE47QUFPTTtFQUNFLGlCQUFBO0FBTFI7QUFRTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQU5SO0FBVVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVJWO0FBV1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFUVjtBQWFNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBWFI7QUFhUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBWFY7QUFjUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVpWIiwiZmlsZSI6InNwaWNhLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLC45MSwuNzYsMSk7XG5cbiAgICAmLnNob3ctc3ViLWNhdCB7XG4gICAgICBtYXgtaGVpZ2h0OiA5MDBweDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAuY2F0LWNvbnRhaW5lciB7XG4gICAgICAgICYubWFpbi1jYXR7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgbGluZWFyO1xuICAgIH1cblxuICAgIC5jYXQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgIH1cblxuICAgICAgJi5tYWluLWNhdCB7XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zdWItY2F0IHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgd2lkdGg6IDQycHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 973:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/spica-confirm-shopping/spica-confirm-shopping.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar ion-icon {\n  font-size: 22px;\n  padding: 0 10px;\n}\n:host ion-header ion-toolbar span {\n  position: absolute;\n  font-weight: 500;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host ion-content .content {\n  padding: 20px;\n  padding-right: 0;\n}\n:host ion-content .content .address-slide {\n  display: flex;\n  overflow: scroll;\n  padding-right: 15px;\n}\n:host ion-content .content .address-container {\n  margin: 15px 5px 0;\n  display: flex;\n  flex-direction: column;\n  background: #fafcff;\n  border-radius: 10px;\n  height: calc(100% * 0.45);\n  min-width: 60%;\n  border: 1px solid var(--ion-color-medium);\n  position: relative;\n}\n:host ion-content .content .address-container.active {\n  border: 3px solid var(--ion-color-primary);\n}\n:host ion-content .content .address-container ion-checkbox {\n  --border-radius: 10px 0 10px 0;\n  left: -1px;\n  top: -1px;\n  visibility: hidden;\n}\n:host ion-content .content .address-container ion-checkbox.visiblbe {\n  visibility: visible;\n}\n:host ion-content .content .address-container .metadata {\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n}\n:host ion-content .content .address-container .metadata :first-child {\n  font-weight: 500;\n  font-size: 17px;\n  margin-bottom: 5px;\n}\n:host ion-content .content .address-container .metadata :last-child {\n  font-weight: 500;\n  margin-top: 5px;\n}\n:host ion-content .content .address-container .metadata ion-text {\n  text-align: start;\n  font-size: 15px;\n  margin-top: 3px;\n}\n:host ion-content .content .add-address-button {\n  margin-top: 15px;\n  --border-radius: 10px;\n  --background: rgb(255, 248, 241);\n  --border-style: dotted;\n  --border-width: 2px;\n  --border-color: rgb(255, 145, 0);\n  color: #ff9100;\n  height: 80px;\n}\n:host ion-content .content .add-address-button.address-exists {\n  --background: none;\n  --border-width: none;\n  --border-style: none;\n  height: -moz-fit-content;\n  height: fit-content;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n:host ion-content .content .add-address-button ion-icon {\n  margin-right: 5px;\n}\n:host ion-content .content ion-list {\n  margin-top: 15px;\n}\n:host ion-content .content ion-list ion-radio-group ion-radio {\n  margin: 0;\n  margin-right: 10px;\n}\n:host ion-footer {\n  height: 60px;\n}\n:host ion-footer ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-footer ion-toolbar .price {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n:host ion-footer ion-toolbar .price .discounted-price {\n  font-size: 16px;\n  font-weight: 700;\n  color: green;\n}\n:host ion-footer ion-toolbar .price .normal-price {\n  margin-left: 10px;\n  font-size: 12px;\n  text-decoration: line-through;\n  color: gray;\n}\n:host ion-footer ion-toolbar ion-button {\n  --border-radius: 5px;\n  --background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLWNvbmZpcm0tc2hvcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUZSO0FBUUk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVFNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQVBSO0FBU1E7RUFDRSwwQ0FBQTtBQVBWO0FBVVE7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFSVjtBQVVVO0VBQ0UsbUJBQUE7QUFSWjtBQVlRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQVZWO0FBWVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVZaO0FBYVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFYWjtBQWNVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVpaO0FBaUJNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFmUjtBQWlCUTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZlY7QUFrQlE7RUFDRSxpQkFBQTtBQWhCVjtBQW9CTTtFQUNFLGdCQUFBO0FBbEJSO0FBb0JVO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBbEJaO0FBeUJFO0VBQ0UsWUFBQTtBQXZCSjtBQXdCSTtFQUNFLGVBQUE7QUF0Qk47QUF3Qk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXRCUjtBQXdCUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF0QlY7QUF3QlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUF0QlY7QUEwQk07RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FBeEJSIiwiZmlsZSI6InNwaWNhLWNvbmZpcm0tc2hvcHBpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG5cbiAgICAgIC5hZGRyZXNzLXNsaWRle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuYWRkcmVzcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDE1cHggNXB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MiwgMjU1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKiAwLjQ1KTtcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgICAgICYudmlzaWJsYmUge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubWV0YWRhdGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAgICAgOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFkZC1hZGRyZXNzLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNDgsIDI0MSk7XG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxNDUsIDApO1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTQ1LCAwKTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgICAgICYuYWRkcmVzcy1leGlzdHMge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAtLWJvcmRlci13aWR0aDogbm9uZTtcbiAgICAgICAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgaW9uLXJhZGlvLWdyb3VwIHtcbiAgICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlvbi1mb290ZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgIC5wcmljZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5kaXNjb3VudGVkLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgLm5vcm1hbC1wcmljZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 78409:
/*!*********************************************************************************!*\
  !*** ./src/app/components/spica-filter-modal/spica-filter-modal.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  padding: 20px;\n  height: 100vh;\n}\n:host ion-list ion-label {\n  padding: 10px 0;\n}\n:host ion-list ion-button {\n  position: fixed;\n  bottom: 80px;\n  width: calc(100% - 40px);\n  height: 60px;\n  --border-radius: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n:host ion-list ion-button.clear-filter {\n  bottom: 15px;\n  --background: rgb(216, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLWZpbHRlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7QUFBTjtBQUdJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUROO0FBR007RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUFEUiIsImZpbGUiOiJzcGljYS1maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYm90dG9tOiA4MHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAmLmNsZWFyLWZpbHRlciB7XG4gICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjE2LCAwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 53061:
/*!***************************************************************************!*\
  !*** ./src/app/components/spica-item-list/spica-item-list.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .item-list {\n  padding: 0 10px;\n}\n:host .item-list ion-list {\n  padding: 0;\n}\n:host .item-list .seperate-section {\n  display: flex;\n}\n:host .item-list .seperate-section ion-list:first-of-type {\n  flex: 1;\n}\n:host .item-list .seperate-section ion-list:first-of-type ion-item {\n  font-weight: 500;\n}\n:host .item-list .seperate-section ion-list:last-of-type {\n  width: 100%;\n}\n:host .item-list .seperate-section ion-list:last-of-type ion-item {\n  font-weight: 300;\n  opacity: 0.8;\n}\n:host .item-list .unseperate-section ion-list ion-item {\n  font-weight: 500;\n}\n:host .item-list .unseperate-section ion-list ion-item.logout ion-label > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host .item-list .unseperate-section ion-list ion-item.logout ion-label > div ion-icon {\n  height: 19px;\n  width: 19px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsVUFBQTtBQUNOO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFDUTtFQUNFLE9BQUE7QUFDVjtBQUFVO0VBQ0UsZ0JBQUE7QUFFWjtBQUNRO0VBQ0UsV0FBQTtBQUNWO0FBQVU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFFWjtBQUtRO0VBQ0UsZ0JBQUE7QUFIVjtBQUtZO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIZDtBQUljO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZoQiIsImZpbGUiOiJzcGljYS1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5pdGVtLWxpc3Qge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAuc2VwZXJhdGUtc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC51bnNlcGVyYXRlLXNlY3Rpb24ge1xuICAgICAgaW9uLWxpc3Qge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAmLmxvZ291dCB7XG4gICAgICAgICAgICBpb24tbGFiZWwgPiBkaXYge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 31886:
/*!*****************************************************************************!*\
  !*** ./src/app/components/spica-map-iframe/spica-map-iframe.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGljYS1tYXAtaWZyYW1lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 91729:
/*!*************************************************************************!*\
  !*** ./src/app/components/spica-menu-bar/spica-menu-bar.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  position: absolute;\n  z-index: 11;\n  min-width: 40px;\n  min-height: 40px;\n}\n:host ion-menu {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  z-index: 11;\n}\n:host ion-menu ion-item {\n  transition: all 0.2s ease;\n}\n:host ion-menu ion-item.active {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLW1lbnUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLHlCQUFBO0FBR047QUFGTTtFQUNDLCtCQUFBO0FBSVAiLCJmaWxlIjoic3BpY2EtbWVudS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTE7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgaW9uLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBpb24taXRlbSB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgJi5hY3RpdmUge1xuICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 37640:
/*!*********************************************************************************!*\
  !*** ./src/app/components/spica-product-card/spica-product-card.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-card {\n  margin: 0;\n  padding: 10px;\n}\n:host ion-card ion-item {\n  width: 100%;\n  --padding-start: 0;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n:host ion-card ion-item img {\n  width: 100%;\n}\n:host ion-card ion-item ion-icon {\n  font-size: 20px;\n}\n:host ion-card ion-item.price {\n  display: flex;\n  align-items: center;\n}\n:host ion-card ion-item.price ion-label {\n  max-width: -moz-fit-content !important;\n  max-width: fit-content !important;\n}\n:host ion-card ion-item .discounted-price {\n  font-size: 14px;\n  font-weight: 500;\n}\n:host ion-card ion-item .normal-price {\n  margin-left: 10px;\n  font-size: 12px;\n  text-decoration: line-through;\n  color: gray;\n}\n:host ion-card .cargo.free {\n  color: green;\n}\n:host ion-card .cargo.paid {\n  color: #cf0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBQ007RUFDRSxlQUFBO0FBQ1I7QUFFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDRSxzQ0FBQTtFQUFBLGlDQUFBO0FBQVY7QUFJTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUZSO0FBSU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFGUjtBQU1NO0VBQ0UsWUFBQTtBQUpSO0FBTU07RUFDRSxjQUFBO0FBSlIiLCJmaWxlIjoic3BpY2EtcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgICYucHJpY2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kaXNjb3VudGVkLXByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgICAgLm5vcm1hbC1wcmljZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhcmdvIHtcbiAgICAgICYuZnJlZXtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgfVxuICAgICAgJi5wYWlke1xuICAgICAgICBjb2xvcjogcmdiKDIwNywgMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 74367:
/*!*********************************************************************!*\
  !*** ./src/app/components/spica-rating/spica-rating.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .rating-container {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 100;\n}\n:host .rating-container .rating-box {\n  background: white;\n  width: 80%;\n  height: 300px;\n  padding: 20px;\n  border-radius: 5px;\n}\n:host .rating-container .rating-box ion-label {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-evenly;\n}\n:host .rating-container .rating-box ion-label ion-icon {\n  margin-right: 8px;\n  font-size: 20px;\n  color: gray;\n}\n:host .rating-container .rating-box ion-label ion-icon.active {\n  color: #ffc400;\n}\n:host .rating-container .rating-box ion-textarea {\n  border: 1px solid black;\n  border-radius: 5px;\n  height: 120px;\n  margin-top: 20px;\n}\n:host .rating-container .rating-box .buttons {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-evenly;\n}\n:host .rating-container .rating-box .buttons :last-child {\n  --background: rgb(170, 0, 0);\n}\n:host .rating-container .rating-box .buttons ion-button {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFDUjtBQUFRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVWO0FBQVU7RUFDRSxjQUFBO0FBRVo7QUFFTTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFBUjtBQUNRO0VBQ0UsNEJBQUE7QUFDVjtBQUNRO0VBQ0UsWUFBQTtBQUNWIiwiZmlsZSI6InNwaWNhLXJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAucmF0aW5nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDA7XG5cbiAgICAucmF0aW5nLWJveCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuXG4gICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgICAuYnV0dG9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTcwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 92500:
/*!***************************************************************************************!*\
  !*** ./src/app/components/spica-scroll-category/spica-scroll-category.component.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .category {\n  display: flex;\n  overflow-x: auto;\n  padding: 20px 10px 10px;\n  position: sticky;\n  top: 0;\n  z-index: 12;\n  background: white;\n}\n:host .category ion-button {\n  --border-radius: 8px;\n  --background: var(--ion-color-light-shade);\n}\n:host .category ion-button.active {\n  --background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXNjcm9sbC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFDSTtFQUNFLG9CQUFBO0VBQ0EsMENBQUE7QUFDTjtBQUFNO0VBQ0Usc0NBQUE7QUFFUiIsImZpbGUiOiJzcGljYS1zY3JvbGwtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAmLmFjdGl2ZXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 44711:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/spica-shipping-address/spica-shipping-address.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar ion-icon {\n  font-size: 22px;\n  padding: 0 10px;\n}\n:host ion-header ion-toolbar span {\n  position: absolute;\n  font-weight: 500;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host ion-content .content {\n  padding: 20px;\n}\n:host ion-content .content ion-item {\n  margin-top: 15px;\n  --padding-end: 0px;\n}\n:host ion-content .content ion-item ion-input,\n:host ion-content .content ion-item ion-textarea {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  height: 50px;\n  border: 1px solid var(--ion-color-medium-tint);\n  border-radius: 5px;\n}\n:host ion-content .content ion-item ion-input.full-address,\n:host ion-content .content ion-item ion-textarea.full-address {\n  height: 100px;\n}\n:host ion-content .content ion-button {\n  margin-top: 15px;\n  height: 50px;\n  width: 100%;\n  --border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXNoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUZaO0FBSU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUZSO0FBUUk7RUFDRSxhQUFBO0FBTk47QUFPTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQU9ROztFQUVFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtBQUxWO0FBT1U7O0VBQ0UsYUFBQTtBQUpaO0FBU007RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFQUiIsImZpbGUiOiJzcGljYS1zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICBcbiAgICAgICAgaW9uLWlucHV0LFxuICAgICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgICYuZnVsbC1hZGRyZXNzIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 97483:
/*!*****************************************************************************!*\
  !*** ./src/app/components/spica-sort-modal/spica-sort-modal.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  padding: 20px;\n}\n:host ion-list ion-label {\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXNvcnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFUTtFQUNJLGVBQUE7QUFBWiIsImZpbGUiOiJzcGljYS1zb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIFxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 41023:
/*!*************************************************************************************!*\
  !*** ./src/app/components/spica-stripe-payment/spica-stripe-payment.component.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar ion-icon {\n  font-size: 22px;\n  padding: 0 10px;\n}\n:host ion-header ion-toolbar span {\n  position: absolute;\n  font-weight: 500;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n:host .container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  perspective: 1000px;\n}\n:host .container .card-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n:host .container .card-container.back-side {\n  transform: rotateY(180deg);\n}\n:host .container .card-container .front, :host .container .card-container .back {\n  padding: 20px;\n  width: 85%;\n  height: 180px;\n  background: linear-gradient(329deg, #3883ba 44%, rgba(56, 131, 186, 0.7637429972) 79%, #3883ba 95%);\n  border-radius: 10px;\n  box-shadow: 1px 2px 5px 0px #b1b1b1;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n:host .container .card-container .front {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n}\n:host .container .card-container .front .top {\n  display: flex;\n  justify-content: space-between;\n}\n:host .container .card-container .front .top img {\n  height: 35px;\n}\n:host .container .card-container .front .top .chip {\n  top: 15px;\n  left: -6px;\n  position: relative;\n}\n:host .container .card-container .front .card-number {\n  color: #f9f9f9;\n  font-weight: 500;\n  font-size: 1.2rem;\n}\n:host .container .card-container .front .bottom {\n  display: flex;\n  justify-content: space-between;\n}\n:host .container .card-container .front .bottom .user-name {\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n}\n:host .container .card-container .front .bottom .valid-container {\n  display: flex;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.6);\n}\n:host .container .card-container .front .bottom .valid-container :first-child {\n  font-size: 8px;\n  margin-right: 5px;\n  text-align: center;\n}\n:host .container .card-container .front .bottom .valid-container :last-child {\n  font-weight: 500;\n}\n:host .container .card-container .back {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px;\n  transform: rotateY(180deg);\n}\n:host .container .card-container .back .top-back {\n  position: absolute;\n  height: 35px;\n  width: 100%;\n  background: linear-gradient(0deg, #050505 44%, rgba(15, 15, 15, 0.8673844538) 82%, rgba(28, 28, 28, 0.9037990196) 95%);\n  top: 10px;\n  left: 0;\n}\n:host .container .card-container .back .middle-back {\n  display: flex;\n}\n:host .container .card-container .back .middle-back .left {\n  width: 80%;\n  height: 30px;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 0 10px;\n}\n:host .container .card-container .back .middle-back .left ion-text {\n  color: black;\n  font-size: 14px;\n  font-style: italic;\n}\n:host .container .card-container .back .bottom-back {\n  display: flex;\n}\n:host .container .card-container .back .bottom-back .sticky {\n  margin-right: 7px;\n  border-radius: 10px;\n  min-width: 40px;\n  height: 30px;\n  background: whitesmoke;\n  background: linear-gradient(90deg, whitesmoke 44%, rgba(235, 235, 225, 0.8533788515) 82%, rgba(228, 228, 228, 0.9037990196) 95%);\n}\n:host .container .card-container .back .bottom-back ion-text {\n  font-size: 8px;\n  color: white;\n}\n:host .container .form {\n  width: 85%;\n  box-shadow: 1px 2px 5px 0px #b1b1b1;\n  border-radius: 10px;\n  margin-top: 30px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n}\n:host .container .form ion-item {\n  --padding-start: 0;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n:host .container .form ion-item ion-label {\n  font-size: 14px;\n}\n:host .container .form .middle,\n:host .container .form .bottom {\n  display: flex;\n}\n:host .container .form .middle ion-item,\n:host .container .form .bottom ion-item {\n  flex: 1;\n}\n:host .container .form .middle :first-child,\n:host .container .form .bottom :first-child {\n  margin-right: 15px;\n}\n:host .container .form .pay {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n:host .container .form .pay ion-button {\n  margin-top: 15px;\n  height: 35px;\n  --border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXN0cmlwZS1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFGUjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFGUjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFKTjtBQU1NO0VBQ0UsMEJBQUE7QUFKUjtBQU9NO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUdBQUE7RUFNQSxtQkFBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FBWFI7QUFjTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWFRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBWFY7QUFZVTtFQUNFLFlBQUE7QUFWWjtBQVlVO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVZaO0FBY1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVpWO0FBZVE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFiVjtBQWNVO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBWlo7QUFlVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBYlo7QUFjWTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWmQ7QUFjWTtFQUNFLGdCQUFBO0FBWmQ7QUFrQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQWhCUjtBQWtCUTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzSEFBQTtFQU1BLFNBQUE7RUFDQSxPQUFBO0FBckJWO0FBd0JRO0VBQ0UsYUFBQTtBQXRCVjtBQXVCVTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBckJaO0FBc0JZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXBCZDtBQXlCUTtFQUNFLGFBQUE7QUF2QlY7QUF3QlU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdJQUFBO0FBdEJaO0FBNkJVO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUEzQlo7QUFnQ0k7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTlCTjtBQWdDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQTlCUjtBQWdDUTtFQUNFLGVBQUE7QUE5QlY7QUFrQ007O0VBRUUsYUFBQTtBQWhDUjtBQWlDUTs7RUFDRSxPQUFBO0FBOUJWO0FBZ0NROztFQUNFLGtCQUFBO0FBN0JWO0FBaUNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQS9CUjtBQWdDUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBOUJWIiwiZmlsZSI6InNwaWNhLXN0cmlwZS1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuXG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgICAgICYuYmFjay1zaWRlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5mcm9udCwgLmJhY2t7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAzMjlkZWcsXG4gICAgICAgICAgcmdiYSg1NiwgMTMxLCAxODYsIDEpIDQ0JSxcbiAgICAgICAgICByZ2JhKDU2LCAxMzEsIDE4NiwgMC43NjM3NDI5OTcxOTg4Nzk2KSA3OSUsXG4gICAgICAgICAgcmdiYSg1NiwgMTMxLCAxODYsIDEpIDk1JVxuICAgICAgICApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCAwcHggI2IxYjFiMTtcblxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLmZyb250IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC50b3Age1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGlwIHtcbiAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgIGxlZnQ6IC02cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtbnVtYmVyIHtcbiAgICAgICAgICBjb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhbGlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG5cbiAgICAgICAgLnRvcC1iYWNrIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDBkZWcsXG4gICAgICAgICAgICByZ2JhKDUsIDUsIDUsIDEpIDQ0JSxcbiAgICAgICAgICAgIHJnYmEoMTUsIDE1LCAxNSwgMC44NjczODQ0NTM3ODE1MTI2KSA4MiUsXG4gICAgICAgICAgICByZ2JhKDI4LCAyOCwgMjgsIDAuOTAzNzk5MDE5NjA3ODQzMSkgOTUlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5taWRkbGUtYmFjayB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJvdHRvbS1iYWNrIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC5zdGlja3kge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgcmdiYSgyNDUsIDI0NSwgMjQ1LCAxKSA0NCUsXG4gICAgICAgICAgICAgIHJnYmEoMjM1LCAyMzUsIDIyNSwgMC44NTMzNzg4NTE1NDA2MTYyKSA4MiUsXG4gICAgICAgICAgICAgIHJnYmEoMjI4LCAyMjgsIDIyOCwgMC45MDM3OTkwMTk2MDc4NDMxKSA5NSVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggMHB4ICNiMWIxYjE7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5taWRkbGUsXG4gICAgICAuYm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBheXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 74645:
/*!*********************************************************************************!*\
  !*** ./src/app/components/spica-upload-image/spica-upload-image.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .upload-image {\n  font-size: 2rem;\n  display: flex;\n}\n:host .upload-image ion-input {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXVwbG9hZC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7QUFDWiIsImZpbGUiOiJzcGljYS11cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICAudXBsb2FkLWltYWdle1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 11639:
/*!*************************************************************************************************!*\
  !*** ./src/app/components/spica-user-profile-picture/spica-user-profile-picture.component.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .picture-content {\n  width: 100%;\n  text-align: center;\n  margin: 10px;\n  position: relative;\n}\n:host .picture-content img {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n:host .picture-content img.opacity {\n  opacity: 0.8;\n}\n:host .picture-content spica-upload-image ::ng-deep .upload-image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXVzZXItcHJvZmlsZS1waWN0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0FBRVI7QUFHUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQURWIiwiZmlsZSI6InNwaWNhLXVzZXItcHJvZmlsZS1waWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAucGljdHVyZS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgJi5vcGFjaXR5IHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgIH1cbiAgICBzcGljYS11cGxvYWQtaW1hZ2Uge1xuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLnVwbG9hZC1pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 46230:
/*!*************************************************************************************!*\
  !*** ./src/app/components/spica-user-selection/spica-user-selection.component.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-list {\n  padding: 10px 10px;\n}\n:host ion-list ion-item {\n  transition: all 0.1s ease-out;\n}\n:host ion-list ion-item .user-item {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin: 5px 0;\n}\n:host ion-list ion-item .user-item .name {\n  margin-left: 10px;\n}\n:host ion-list .choosen {\n  --background: rgba(117, 113, 113, 0.1);\n}\n:host ion-list .choosen::after {\n  content: \"\";\n  position: absolute;\n  right: 5%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 10px;\n  height: 10px;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 50%;\n}\n:host .no-item {\n  text-align: center;\n  color: var(--ion-text-color);\n  opacity: 0.5;\n  width: 100%;\n  font-size: 0.8em;\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaWNhLXVzZXItc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFFUjtBQURRO0VBQ0UsaUJBQUE7QUFHVjtBQUNJO0VBQ0Usc0NBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQUVSO0FBR0U7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREoiLCJmaWxlIjoic3BpY2EtdXNlci1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XG4gICAgICAudXNlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY2hvb3NlbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTE3LCAxMTMsIDExMywgMC4xKTtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNSU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5uby1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 16850:
/*!*****************************************************************************!*\
  !*** ./src/app/components/starter-projects/starter-projects.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  background: white;\n}\n:host .container ion-list ion-item {\n  margin: 0 20px;\n}\n:host .container .credentials {\n  padding: 5px;\n  margin: 0 5px;\n}\n:host .container .credentials > div {\n  display: flex;\n  width: 100%;\n  padding: 10px;\n  margin-top: 10px;\n  border: 1px dashed rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n:host .container .credentials > div .credential-head {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n:host .container .credentials > div .credential-head span {\n  padding: 5px;\n  white-space: nowrap;\n  font-size: 0.9rem;\n}\n:host .container .credentials > div .credential-row {\n  width: 100%;\n}\n:host .container .credentials > div .credential-row span {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  color: white;\n  margin: 1px;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\n:host .container .credentials > div .credential-row span ion-icon {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0ZXItcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlNO0VBQ0UsY0FBQTtBQUZSO0FBS0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUhOO0FBSU07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUdRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFEVjtBQUVVO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBWjtBQUdRO0VBQ0UsV0FBQTtBQURWO0FBRVU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQVo7QUFDWTtFQUNFLGVBQUE7QUFDZCIsImZpbGUiOiJzdGFydGVyLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBpb24tbGlzdCB7XG4gICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNyZWRlbnRpYWxzIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC5jcmVkZW50aWFsLWhlYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNyZWRlbnRpYWwtcm93IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDFweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet\n    [class.opacity-passive]=\"showProjects\"\n    id=\"main\"\n  ></ion-router-outlet>\n  <div\n    [class.open]=\"showProjects\"\n    class=\"projects\"\n    *ngIf=\"router.url != '/home'\"\n  >\n    <ion-icon\n      [name]=\"showProjects ? 'chevron-forward-outline' : 'chevron-back-outline'\"\n      (click)=\"showProjects = !showProjects\"\n    ></ion-icon>\n    <spica-starter-projects\n      (clickedProject)=\"showProjects = false\"\n    ></spica-starter-projects>\n  </div>\n</ion-app>\n");

/***/ }),

/***/ 74159:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-authorization/spica-authorization.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"auth-container\">\n  <div class=\"nav-container\">\n    <ion-label\n      [class.active]=\"screen == 'login'\"\n      (click)=\"screen = 'login'; isPasswordVisible = false\"\n      >Login</ion-label\n    >\n    <ion-label\n      [class.active]=\"screen == 'register'\"\n      (click)=\"screen = 'register'; isPasswordVisible = false\"\n      >Register</ion-label\n    >\n  </div>\n\n  <div class=\"form-container\" *ngIf=\"screen == 'login'\" [formGroup]=\"loginForm\">\n    <ion-input\n      placeholder=\"E-Mail\"\n      id=\"email\"\n      formControlName=\"email\"\n    ></ion-input>\n    <div class=\"icon-input\">\n      <ion-input\n        placeholder=\"Password\"\n        [type]=\"isPasswordVisible ? 'text' : 'password'\"\n        id=\"password\"\n        formControlName=\"password\"\n      >\n      </ion-input>\n      <ion-icon\n        (click)=\"isPasswordVisible = !isPasswordVisible\"\n        [name]=\"isPasswordVisible ? 'eye-off-outline' : 'eye-outline'\"\n      ></ion-icon>\n    </div>\n\n    <p><span>Forgot password?</span></p>\n    <ion-button (click)=\"login()\" [disabled]=\"!loginForm.valid\"\n      >Login\n    </ion-button>\n  </div>\n\n  <div\n    class=\"form-container\"\n    *ngIf=\"screen == 'register'\"\n    [formGroup]=\"loginForm\"\n  >\n    <!-- <ion-input placeholder=\"Username\" formControlName=\"username\"></ion-input> -->\n    <ion-input placeholder=\"Name\" formControlName=\"name\"></ion-input>\n    <ion-input placeholder=\"Surname\" formControlName=\"surname\"></ion-input>\n    <ion-input placeholder=\"E-Mail\" formControlName=\"email\"></ion-input>\n    <div class=\"icon-input\">\n      <ion-input\n        placeholder=\"Password\"\n        [type]=\"isPasswordVisible ? 'text' : 'password'\"\n        formControlName=\"password\"\n      >\n      </ion-input>\n      <ion-icon\n        (click)=\"isPasswordVisible = !isPasswordVisible\"\n        [name]=\"isPasswordVisible ? 'eye-off-outline' : 'eye-outline'\"\n      ></ion-icon>\n    </div>\n\n    <ion-item lines=\"none\" class=\"agreement\">\n      <ion-checkbox formControlName=\"termsOfUse\"></ion-checkbox>\n      <ion-label>I accept the user agreement</ion-label>\n    </ion-item>\n    <ion-button (click)=\"register()\" [disabled]=\"!loginForm.valid\"\n      >Register</ion-button\n    >\n  </div>\n</div>\n");

/***/ }),

/***/ 47986:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-category/spica-category.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"item\"\n  *ngFor=\"let category of categories\"\n  lines=\"none\"\n  detail=\"false\"\n  [class.show-sub-cat]=\"showedCat == category._id\"\n>\n  <div class=\"cat-container main-cat\" (click)=\"clicked(category)\">\n    <ion-avatar>\n      <img [src]=\"category.img\" />\n    </ion-avatar>\n    <ion-label>{{ category.name }}</ion-label>\n    <ion-icon name=\"chevron-forward\"></ion-icon>\n  </div>\n  <div\n    class=\"cat-container sub-cat\"\n    *ngFor=\"let subCat of category.sub_categories\"\n    (click)=\"clicked(subCat)\"\n  >\n    <ion-avatar>\n      <img [src]=\"subCat.img\" />\n    </ion-avatar>\n    <ion-label>{{ subCat.name }}</ion-label>\n    <ion-icon name=\"chevron-forward\"></ion-icon>\n  </div>\n</div>\n");

/***/ }),

/***/ 39702:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-confirm-shopping/spica-confirm-shopping.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back-outline\" (click)=\"dismiss('close')\"></ion-icon>\n    <span>Confirm Shopping</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <h5>Shipping Address</h5>\n\n    <ion-button\n      class=\"add-address-button\"\n      [class.address-exists]=\"addresses.length\"\n      (click)=\"dismiss('add_new_address')\"\n    >\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      Add new address\n    </ion-button>\n\n    <div class=\"address-slide hide-scroll-bar\">\n      <div\n      *ngFor=\"let address of addresses; let index = index\"\n      class=\"address-container active\"\n      [class.active]=\"index == shoppingData.addressIndex\"\n      (click)=\"shoppingData.addressIndex = index\"\n    >\n      <ion-checkbox\n        [class.visiblbe]=\"index == shoppingData.addressIndex\"\n        slot=\"start\"\n        [checked]=\"true\"\n        type=\"md\"\n        [disabled]=\"true\"\n      ></ion-checkbox>\n      <div class=\"metadata\">\n        <ion-text>{{ address[\"title\"] }}</ion-text>\n        <ion-text>{{ address[\"full_address\"] }}</ion-text>\n        <ion-text\n          >{{ address[\"district\"] }} / {{ address[\"province\"] }}</ion-text\n        >\n        <ion-text>{{ address[\"phone\"] }}</ion-text>\n      </div>\n    </div>\n    </div>\n\n    <ion-list>\n      <ion-radio-group\n        [value]=\"shoppingData.paymentMethod\"\n        (ionChange)=\"shoppingData.paymentMethod = $event.target['value']\"\n      >\n        <h5>Payment Method</h5>\n\n        <ion-item *ngFor=\"let method of paymentMethods\" lines=\"none\">\n          <ion-label>{{ method[\"title\"] }}</ion-label>\n          <ion-radio\n            slot=\"start\"\n            [value]=\"method['title']\"\n            mode=\"md\"\n          ></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"price\">\n      <ion-label> Amount to be paid </ion-label>\n      <ion-label class=\"total_price\">{{ totalPrice }} {{ currency }}</ion-label>\n    </div>\n    <ion-button slot=\"end\" (click)=\"dismiss('pay')\">Pay</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 11638:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-filter-modal/spica-filter-modal.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\n  <ion-item *ngFor=\"let attribute of attributes\">\n    <ion-label>{{ attribute.name | revokedUnderline | titlecase }}</ion-label>\n    <ion-select\n      multiple=\"true\"\n      (ionChange)=\"addNewFilterParams(attribute.name, $event.target)\"\n    >\n      <ion-select-option\n        [value]=\"value\"\n        *ngFor=\"let value of attribute.value\"\n        >{{ value | revokedUnderline | titlecase }}</ion-select-option\n      >\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"currency!='none'\">\n    <ion-range\n      id=\"dual-range\"\n      dual-knobs\n      pin\n      color=\"dark\"\n      [min]=\"minMax.lower\"\n      [max]=\"minMax.upper\"\n      [value]=\"price_range\"\n      debounce=\"300\"\n      (ionChange)=\"changePrice($event.target['value'])\"\n    >\n      <ion-label slot=\"start\">Price</ion-label>\n      <ion-label slot=\"end\"\n        >{{ price_range.lower }}-{{ price_range.upper }}\n        {{ currency }}</ion-label\n      >\n    </ion-range>\n  </ion-item>\n\n  <ion-button (click)=\"setFilter()\">Apply Filter</ion-button>\n  <ion-button class=\"clear-filter\" (click)=\"clearFilter()\"\n    >Clear Filter</ion-button\n  >\n</ion-list>\n");

/***/ }),

/***/ 47619:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-item-list/spica-item-list.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"item-list\">\n  <div class=\"seperate-section\">\n    <ion-list lines=\"inset\">\n      <ion-item *ngFor=\"let item of seperatedItems\">\n        <ion-label> {{ item.key | titlecase }}</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list lines=\"inset\">\n      <ion-item *ngFor=\"let item of seperatedItems\">\n        <ion-label>{{ item.value }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"unseperate-section\">\n    <ion-list lines=\"inset\">\n      <ion-item\n        *ngFor=\"let item of unSeperatedItems\"\n        [detail]=\"item.link\"\n        [routerLink]=\"item.link ? [item.link] : []\"\n      >\n        <ion-label> {{ item.value }}</ion-label>\n      </ion-item>\n      <ion-item\n        *ngIf=\"canLogout\"\n        [detail]=\"false\"\n        class=\"logout\"\n        button\n        (click)=\"logOut()\"\n      >\n        <ion-label>\n          <div>Logout<ion-icon name=\"log-out-outline\"></ion-icon></div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</div>\n");

/***/ }),

/***/ 882:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-map-iframe/spica-map-iframe.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<iframe\n  [src]=\"link\"\n  width=\"100%\"\n  height=\"250\"\n  style=\"border: 0\"\n  allowfullscreen=\"\"\n  loading=\"lazy\"\n></iframe>\n");

/***/ }),

/***/ 90970:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-menu-bar/spica-menu-bar.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu [side]=\"side\" menuId=\"custom\" content-id=\"main-content\" [swipeGesture]=\"false\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar translucent>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item\n        [class.active]=\"activeLink == item.key\"\n        *ngFor=\"let item of items\"\n        (click)=\"clickedItem(item)\"\n      >\n        <ion-icon [name]=\"item.icon\" slot=\"start\"></ion-icon>\n        <ion-label>{{ item.value }}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<div class=\"ion-page\" id=\"main-content\">\n  <ion-header mode=\"ios\">\n    <ion-toolbar>\n      <ion-buttons [slot]=\"side\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</div>\n");

/***/ }),

/***/ 7115:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-product-card/spica-product-card.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <img\n    [src]=\"data.cover_image\"\n    [routerLink]=\"['/e-commerce/products/product-detail/' + data._id]\"\n    detail=\"false\"\n  />\n\n  <ion-item lines=\"none\">\n    <ion-label>{{ data.title }}</ion-label>\n    <ion-icon\n      [name]=\"isLiked ? 'heart' : 'heart-outline'\"\n      (click)=\"changeLike()\"\n    ></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"price\">\n    <ion-label class=\"discounted-price\"\n      >{{ data.discounted_price | number: \"1.2-2\" }} USD</ion-label\n    >\n    <ion-label class=\"normal-price\"\n      >{{ data.normal_price | number: \"1.2-2\" }} USD</ion-label\n    >\n  </ion-item>\n  <ion-label class=\"cargo\">\n    <span *ngIf=\"data.is_free_delivery\" class=\"cargo free\">Free delivery</span>\n    <span *ngIf=\"!data.is_free_delivery\" class=\"cargo paid\">Paid delivery</span>\n  </ion-label>\n</ion-card>\n");

/***/ }),

/***/ 34839:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-rating/spica-rating.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"rating-container\">\n  <div class=\"rating-box\">\n    <ion-title *ngIf=\"title\">{{title}}</ion-title>\n    <ion-label>\n      <ion-icon\n        name=\"star\"\n        (click)=\"rate(value)\"\n        [class.active]=\"rating >= value\"\n        *ngFor=\"let value of [1,2,3,4,5];\"\n      ></ion-icon>\n    </ion-label>\n    <ion-textarea placeholder=\"Enter your comment\" [(ngModel)]=\"comment\"></ion-textarea>\n    <div class=\"buttons\">\n      <ion-button (click)=\"clicked('apply')\">Apply</ion-button>\n      <ion-button (click)=\"clicked('cancel')\">Cancel</ion-button>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 96489:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-scroll-category/spica-scroll-category.component.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"category hide-scroll-bar\" *ngIf=\"categories\">\n  <ion-button mode=\"ios\" (click)=\"clicked('all')\" [class.active]=\"active=='all'\">All</ion-button>\n  <ion-button mode=\"ios\" *ngFor=\"let category of categories\" (click)=\"clicked(category._id)\" [class.active]=\"active==category._id\">{{category.name}}</ion-button>\n</div>");

/***/ }),

/***/ 9968:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-shipping-address/spica-shipping-address.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back-outline\" (click)=\"dismiss('close')\"></ion-icon>\n    <span>Shipping Address</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Address Title\" [(ngModel)]=\"shippingData.title\"></ion-input>\n    </ion-item>  \n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Country\" [(ngModel)]=\"shippingData.country\"></ion-input>\n    </ion-item>   \n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Province\" [(ngModel)]=\"shippingData.province\"></ion-input>\n    </ion-item>   \n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Disctrict\" [(ngModel)]=\"shippingData.district\"></ion-input>\n    </ion-item>   \n    <ion-item lines=\"none\">\n      <ion-textarea placeholder=\"Full Address\" class=\"full-address\" [(ngModel)]=\"shippingData.full_address\"></ion-textarea>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Phone\" [(ngModel)]=\"shippingData.phone\"></ion-input>\n    </ion-item> \n    <ion-button (click)=\"dismiss('save_address')\">Save Address</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ 3301:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-sort-modal/spica-sort-modal.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\n  <ion-item *ngFor=\"let item of items\" (click)=\"setSort(item.key)\">\n    <ion-label>{{item.title}}</ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ 17800:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-stripe-payment/spica-stripe-payment.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back-outline\" (click)=\"dismiss('close')\"></ion-icon>\n    <span>Payment By Card</span>\n  </ion-toolbar>\n</ion-header>\n<div class=\"container\">\n  <div class=\"card-container\" [class.back-side]=\"backSide\">\n    <div class=\"front\">\n      <div class=\"top\">\n        <img class=\"chip\" src=\"https://cdn.freebiesupply.com/logos/thumbs/2x/chip-1-logo.png\" />\n        <img class=\"logo\" [src]=\"cardTypeUrl\" />\n      </div>\n      <ion-text class=\"card-number\">{{cardForm.value.cardNumber}}</ion-text>\n      <div class=\"bottom\">\n        <ion-text class=\"user-name\">{{cardForm.value.firstName + ' ' + cardForm.value.lastName}}</ion-text>\n        <div class=\"valid-container\">\n          <ion-text>VALID<br/>DATE</ion-text>\n          <ion-text>{{cardForm.value.expireDate}}</ion-text>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"back\">\n      <div class=\"top-back\"></div>\n      <span></span>\n      <div class=\"middle-back\">\n        <div class=\"left\">\n          <ion-text>{{cardForm.value.cvc}}</ion-text>\n        </div>\n      </div>\n      <div class=\"bottom-back\">\n        <div class=\"sticky\"></div>\n        <ion-text>\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem totam, consequuntur reiciendis nihil labore ipsa sed! Magnam fugiat cum, iure nihil quasi sunt delectus voluptate!\n        </ion-text>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"form\"  [formGroup]=\"cardForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Card Number</ion-label>\n      <ion-input type=\"tel\" maxlength=\"19\" minlength=\"19\" formControlName=\"cardNumber\" (ionInput)=\"formatCardNumber($event.target['value'])\" ></ion-input>\n    </ion-item>\n    \n    <div class=\"middle\">\n      <ion-item>\n        <ion-label position=\"floating\">First Name</ion-label>\n        <ion-input formControlName=\"firstName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Last Name</ion-label>\n        <ion-input formControlName=\"lastName\"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class=\"bottom\">\n      <ion-item>\n        <ion-label position=\"floating\">Exp Date</ion-label>\n        <ion-input maxlength=\"7\" minlength=\"7\" formControlName=\"expireDate\" (ionInput)=\"formatExpireDate($event.target['value'])\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">CVC</ion-label>\n        <ion-input maxlength=\"3\" minlength=\"3\" formControlName=\"cvc\" (ionFocus)=\"backSide=true\" (ionBlur)=\"backSide=false\"></ion-input>\n      </ion-item>\n    </div>\n    <div class=\"pay\">\n      <ion-text>Total Price: {{totalPrice}} {{currency}}</ion-text>\n      <ion-button (click)=\"dismiss('pay')\" [disabled]=\"cardForm.invalid\">Pay</ion-button>\n    </div>\n   \n  </div>\n</div>\n");

/***/ }),

/***/ 75026:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-upload-image/spica-upload-image.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"upload-image\" (click)=\"showImageSelect()\">\n  <ion-icon [name]=\"icon\"></ion-icon>\n   <ion-input type=\"file\"></ion-input>\n</div>\n");

/***/ }),

/***/ 37756:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-user-profile-picture/spica-user-profile-picture.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"picture-content\">\n  <img [class.opacity]=\"imageEditable\" [src]=\"image || defaultImage\" alt=\"\" />\n  <spica-upload-image\n    *ngIf=\"imageEditable\"\n    (change)=\"change($event)\"\n  ></spica-upload-image>\n</div>\n");

/***/ }),

/***/ 17593:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spica-user-selection/spica-user-selection.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button (click)=\"cancle()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Users</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"full\">\n    <div class=\"no-item\" *ngIf=\"showedUsers.length == 0\">\n      There are no users\n    </div>\n    <ion-item\n      detail=\"false\"\n      *ngFor=\"let user of showedUsers\"\n      (click)=\"\n        selectionType == 'multiple' ? toggleUser(user) : selectUser(user)\n      \"\n      [class.choosen]=\"choosen_users.includes(user)\"\n    >\n      <div class=\"user-item\">\n        <ion-avatar>\n          <img [src]=\"user?.thumbnail ? user?.thumbnail : default_user_image\" />\n        </ion-avatar>\n        <div class=\"name\">\n          {{ user?.username }}\n        </div>\n      </div>\n    </ion-item>\n  </ion-list></ion-content\n>\n");

/***/ }),

/***/ 54807:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/starter-projects/starter-projects.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-list>\n    <div class=\"credentials\">\n      <h6>You can access all projects with the below credentials</h6>\n      <div>\n        <div class=\"credential-head\">\n          <span> Username :</span>\n          <span> Password :</span>\n        </div>\n        <div class=\"credential-row\">\n          <span (click)=\"copyToClipboard('admin@gmail.com')\">\n            admin@gmail.com <ion-icon name=\"copy-outline\"></ion-icon>\n          </span>\n          <span (click)=\"copyToClipboard('admin')\"> admin <ion-icon name=\"copy-outline\"></ion-icon></span>\n        </div>\n      </div>\n    </div>\n\n    <ion-item\n      *ngFor=\"let project of projects\"\n      lines=\"full\"\n      button\n      (click)=\"gotoProject(project.route)\"\n    >\n      <ion-icon slot=\"start\" [name]=\"project.icon\"></ion-icon>\n      <ion-label>{{ project.name }} </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map