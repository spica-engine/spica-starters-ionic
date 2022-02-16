(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e"],{

/***/ 6723:
/*!*****************************************************************!*\
  !*** ./src/app/booking/components/booking-components.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingComponentModule": () => (/* binding */ BookingComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 12264);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.component */ 55640);
/* harmony import */ var _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation/reservation.component */ 96577);











let BookingComponentModule = class BookingComponentModule {
};
BookingComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__.ReservationComponent],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, _reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__.ReservationComponent],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_0__.SpicaComponentsModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
    })
], BookingComponentModule);



/***/ }),

/***/ 12264:
/*!***************************************************************!*\
  !*** ./src/app/booking/components/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 51676);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 5012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let FooterComponent = class FooterComponent {
    constructor() {
        this.title = "Copyright © 2021 Booking Starter | Designed by TeknoDev";
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 55640:
/*!*****************************************************************!*\
  !*** ./src/app/booking/components/gallery/gallery.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gallery.component.html */ 14497);
/* harmony import */ var _gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.scss */ 62116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let GalleryComponent = class GalleryComponent {
    constructor() {
        this.sliderOpts = {
            slidesPerView: 4.3,
            spaceBetween: 7,
        };
    }
    ngOnInit() {
        this.headerImage = this.gallery.images[0];
    }
};
GalleryComponent.ctorParameters = () => [];
GalleryComponent.propDecorators = {
    gallery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-gallery',
        template: _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GalleryComponent);



/***/ }),

/***/ 96577:
/*!*************************************************************************!*\
  !*** ./src/app/booking/components/reservation/reservation.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationComponent": () => (/* binding */ ReservationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reservation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reservation.component.html */ 64062);
/* harmony import */ var _reservation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.component.scss */ 86567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 48058);







let ReservationComponent = class ReservationComponent {
    constructor(_formBuilder, toastController) {
        this._formBuilder = _formBuilder;
        this.toastController = toastController;
        this.rooms = [];
    }
    ngOnInit() {
        this.getRooms();
        this.reservationForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            mail: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                ]),
            ],
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            adult: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            children: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            check_in: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            check_out: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            room: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    reservation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.newReservation = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.reservation.insert(this.reservationForm.value);
            this.reservationForm.reset();
            const toast = yield this.toastController.create({
                message: 'The reservation is done',
                duration: 3000,
            });
            toast.present();
        });
    }
    getRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            _services_bucket__WEBPACK_IMPORTED_MODULE_2__.room.getAll().then((res) => {
                this.rooms = res;
            });
        });
    }
    getErrorMessage(field) {
        switch (field) {
            case 'name':
                if (this.reservationForm.controls['name'].hasError('required')) {
                    return 'Name Required';
                }
            case 'mail':
                if (this.reservationForm.controls['mail'].hasError('required')) {
                    return 'Email Required';
                }
                else if (this.reservationForm.controls['mail'].hasError('pattern')) {
                    return 'Please enter valid email';
                }
            case 'phone_number':
                if (this.reservationForm.controls['phone_number'].hasError('required')) {
                    return 'Phone Required';
                }
            case 'adult':
                if (this.reservationForm.controls['adult'].hasError('required')) {
                    return 'Adult Number of Required';
                }
            case 'children':
                if (this.reservationForm.controls['children'].hasError('required')) {
                    return 'Child Number of Required';
                }
                break;
        }
    }
};
ReservationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ReservationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reservation',
        template: _raw_loader_reservation_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reservation_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReservationComponent);



/***/ }),

/***/ 48058:
/*!********************************************!*\
  !*** ./src/app/booking/services/bucket.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "room": () => (/* binding */ room),
/* harmony export */   "reservation": () => (/* binding */ reservation),
/* harmony export */   "category5": () => (/* binding */ category5),
/* harmony export */   "site_configurations": () => (/* binding */ site_configurations),
/* harmony export */   "properties": () => (/* binding */ properties),
/* harmony export */   "activities": () => (/* binding */ activities)
/* harmony export */ });
/* harmony import */ var _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spica-devkit/bucket */ 14760);

/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
function initialize(...initOptions) {
    initOptions[0].publicUrl =
        'https://spica-starters-7229b.hq.spicaengine.com/api';
    _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize(...initOptions);
}
var room;
(function (room) {
    const BUCKET_ID = '61bc5b490ba24b002d197633';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    room.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    room.getAll = getAll;
    function insert(document) {
        ['category', 'properties'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    room.insert = insert;
    function update(document) {
        ['category', 'properties'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    room.update = update;
    function patch(document) {
        ['category', 'properties'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    room.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    room.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = room.realtime || (room.realtime = {}));
})(room || (room = {}));
var reservation;
(function (reservation) {
    const BUCKET_ID = '61bc5b490ba24b002d197636';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    reservation.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    reservation.getAll = getAll;
    function insert(document) {
        ['room'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    reservation.insert = insert;
    function update(document) {
        ['room'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    reservation.update = update;
    function patch(document) {
        ['room'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id || v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    reservation.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    reservation.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = reservation.realtime || (reservation.realtime = {}));
})(reservation || (reservation = {}));
var category5;
(function (category5) {
    const BUCKET_ID = '61bc5b490ba24b002d197639';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    category5.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    category5.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    category5.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    category5.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    category5.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    category5.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = category5.realtime || (category5.realtime = {}));
})(category5 || (category5 = {}));
var site_configurations;
(function (site_configurations) {
    const BUCKET_ID = '61bc5b490ba24b002d19763c';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    site_configurations.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    site_configurations.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    site_configurations.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    site_configurations.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    site_configurations.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    site_configurations.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = site_configurations.realtime || (site_configurations.realtime = {}));
})(site_configurations || (site_configurations = {}));
var properties;
(function (properties) {
    const BUCKET_ID = '61bc5b4a0ba24b002d19763f';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    properties.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    properties.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    properties.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    properties.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    properties.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    properties.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = properties.realtime || (properties.realtime = {}));
})(properties || (properties = {}));
var activities;
(function (activities) {
    const BUCKET_ID = '61bc5b4a0ba24b002d197642';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    activities.get = get;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    activities.getAll = getAll;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    activities.insert = insert;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    activities.update = update;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    activities.patch = patch;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    activities.remove = remove;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
    })(realtime = activities.realtime || (activities.realtime = {}));
})(activities || (activities = {}));


/***/ }),

/***/ 82472:
/*!*************************************************!*\
  !*** ./src/app/booking/services/environment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// https://asset-playground-05dae.hq.spicaengine.com/
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

/***/ 5012:
/*!*****************************************************************!*\
  !*** ./src/app/booking/components/footer/footer.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-footer ion-toolbar {\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n  --background: #1f1f1f;\n}\n:host ion-footer ion-toolbar span {\n  color: white;\n  font-size: 0.78rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURaO0FBRVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBaEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgaW9uLWZvb3RlcntcbiAgICAgICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 62116:
/*!*******************************************************************!*\
  !*** ./src/app/booking/components/gallery/gallery.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  padding: 15px;\n}\n:host .container .galleries .header-img {\n  width: 100%;\n  height: 250px;\n}\n:host .container .galleries .header-img img {\n  width: 100%;\n  height: 100%;\n}\n:host .container .galleries ion-slides {\n  height: 100px;\n}\n:host .container .galleries ion-slides ion-slide {\n  width: 80px !important;\n  height: 80px;\n}\n:host .container .galleries ion-slides ion-slide .gallery {\n  width: 100%;\n  height: 80px;\n  padding: 5px 5px 0 0;\n}\n:host .container .galleries ion-slides ion-slide .gallery img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDcEI7QUFFWTtFQUNJLGFBQUE7QUFBaEI7QUFDZ0I7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDcEI7QUFBb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBRXhCO0FBRHdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHNUIiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAuZ2FsbGVyaWVzIHtcbiAgICAgICAgICAgIC5oZWFkZXItaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNsaWRlc3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAuZ2FsbGVyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ 86567:
/*!***************************************************************************!*\
  !*** ./src/app/booking/components/reservation/reservation.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .reservation {\n  width: 100%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  margin: 0 0 40px 0;\n}\n:host .reservation h2 {\n  font-size: 1.5rem;\n  color: #595959;\n  text-align: center;\n  margin: 20px 70px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #002854;\n}\n:host .reservation ion-item {\n  width: 100%;\n  margin: 10px 0;\n  border-radius: 5px;\n  border: 1px solid #bdc5cc;\n}\n:host .reservation .error {\n  font-size: 0.7rem;\n  color: red;\n  text-align: left;\n  margin: -5px 0 0 5px;\n}\n:host .reservation ion-label {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n:host .reservation .date {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n:host .reservation .date ion-item {\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUNRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDWjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0FBRWhCIiwiZmlsZSI6InJlc2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5yZXNlcnZhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCA3MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgNDAsIDg0KTtcbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYzVjYztcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogLTVweCAwIDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 51676:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/components/footer/footer.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <span>{{title}}</span>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 14497:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/components/gallery/gallery.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"galleries\" *ngIf=\"gallery\">\n    <div class=\"header-img\">\n      <img [src]=\"headerImage\">\n    </div>\n    <ion-slides [options]=\"sliderOpts\">\n      <ion-slide *ngFor=\"let image of gallery.images\" (click)=\"headerImage = image\">\n        <div class=\"gallery\">\n          <img [src]=\"image\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>");

/***/ }),

/***/ 64062:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/components/reservation/reservation.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div [formGroup]=\"reservationForm\">\n  <div class=\"reservation\">\n    <h2>Reservation</h2>\n    <ion-item lines=\"none\">\n      <ion-input \n      placeholder=\"Your Name\" \n      type=\"text\"\n      formControlName=\"name\"\n      ></ion-input>\n    </ion-item>\n    <span class=\"error\" *ngIf=\"reservationForm.controls['name'].dirty && reservationForm.controls['name'].invalid\">{{getErrorMessage('name')}}</span>\n\n\n    <ion-item lines=\"none\">\n      <ion-input \n      placeholder=\"Email\" \n      type=\"email\" \n      formControlName=\"mail\"\n      ></ion-input>\n    </ion-item>\n    <span class=\"error\" *ngIf=\"reservationForm.controls['mail'].dirty && reservationForm.controls['mail'].invalid\">{{getErrorMessage('mail')}}</span>\n\n    <ion-item lines=\"none\">\n      <ion-input \n      placeholder=\"Phone\" \n      type=\"tel\" \n      formControlName=\"phone_number\"\n      ></ion-input>\n    </ion-item>\n    <span class=\"error\" *ngIf=\"reservationForm.controls['phone_number'].dirty && reservationForm.controls['phone_number'].invalid\">{{getErrorMessage('phone_number')}}</span>\n\n    <ion-item lines=\"none\">\n      <ion-input \n      placeholder=\"Adult\" \n      type=\"number\" \n      formControlName=\"adult\"\n      ></ion-input>\n    </ion-item>\n    <span class=\"error\" *ngIf=\"reservationForm.controls['adult'].dirty && reservationForm.controls['adult'].invalid\">{{getErrorMessage('adult')}}</span>\n\n    <ion-item lines=\"none\">\n      <ion-input \n      placeholder=\"Child\" \n      type=\"number\" \n      formControlName=\"children\"\n      ></ion-input>\n    </ion-item>\n    <span class=\"error\" *ngIf=\"reservationForm.controls['children'].dirty && reservationForm.controls['children'].invalid\">{{getErrorMessage('children')}}</span>\n\n    <div class=\"date\">\n      <ion-item lines=\"none\">\n        <ion-datetime placeholder=\"Check in\" formControlName=\"check_in\"></ion-datetime>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-datetime placeholder=\"Check out\" formControlName=\"check_out\" [min]=\"reservationForm.value.check_in\" [value]=\"reservationForm.value.check_in\"></ion-datetime>\n      </ion-item>\n    </div>\n    <ion-item lines=\"none\">\n      <ion-label>Rooms</ion-label>\n      <ion-select formControlName=\"room\" mode=\"ios\">\n        <ion-select-option [value]=\"room._id\" *ngFor=\"let room of rooms\">{{room.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n        \n    <section>\n      <ion-button (click)=\"reservation()\" expand=\"block\" [disabled]=\"!reservationForm.valid\">Make a Reservation</ion-button>\n    </section>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_booking_components_booking-components_module_ts-src_app_booking_services_envi-9ea09e.js.map