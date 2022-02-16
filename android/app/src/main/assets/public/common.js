(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["common"],{

/***/ 23694:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 80282:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e2988509.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ chevronBack),
/* harmony export */   "b": () => (/* binding */ chevronForward),
/* harmony export */   "c": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "d": () => (/* binding */ chevronDown),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ caretUpSharp),
/* harmony export */   "g": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 92841:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-163ed7fb.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 80421:
/*!***********************************************************************************!*\
  !*** ./src/app/booking/pages/activity-details/activity-details-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityDetailsPageRoutingModule": () => (/* binding */ ActivityDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _activity_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-details.page */ 38938);




const routes = [
    {
        path: ':id',
        component: _activity_details_page__WEBPACK_IMPORTED_MODULE_0__.ActivityDetailsPage
    }
];
let ActivityDetailsPageRoutingModule = class ActivityDetailsPageRoutingModule {
};
ActivityDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActivityDetailsPageRoutingModule);



/***/ }),

/***/ 66976:
/*!***************************************************************************!*\
  !*** ./src/app/booking/pages/activity-details/activity-details.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityDetailsPageModule": () => (/* binding */ ActivityDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _activity_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-details-routing.module */ 80421);
/* harmony import */ var _activity_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-details.page */ 38938);
/* harmony import */ var _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/booking-components.module */ 6723);








let ActivityDetailsPageModule = class ActivityDetailsPageModule {
};
ActivityDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _activity_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivityDetailsPageRoutingModule,
            _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__.BookingComponentModule
        ],
        declarations: [_activity_details_page__WEBPACK_IMPORTED_MODULE_1__.ActivityDetailsPage]
    })
], ActivityDetailsPageModule);



/***/ }),

/***/ 38938:
/*!*************************************************************************!*\
  !*** ./src/app/booking/pages/activity-details/activity-details.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityDetailsPage": () => (/* binding */ ActivityDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_activity_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./activity-details.page.html */ 37848);
/* harmony import */ var _activity_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity-details.page.scss */ 22285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 48058);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 82472);







let ActivityDetailsPage = class ActivityDetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.sliderOpts = {
            slidesPerView: 4.3,
            spaceBetween: 7,
        };
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.public_apikey });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this.activatedRoute.snapshot.params.id;
            yield this.getHotel_activities();
            yield this.getHotel_web_editor();
        });
    }
    getHotel_activities() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.hotel_activities = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.activities.get(this.id);
        });
    }
    getHotel_web_editor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let data = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.site_configurations.getAll();
            this.hotel_web_editor = data[0];
        });
    }
};
ActivityDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ActivityDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-activity-details',
        template: _raw_loader_activity_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_activity_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActivityDetailsPage);



/***/ }),

/***/ 26123:
/*!***************************************************************************!*\
  !*** ./src/app/booking/pages/room-details/room-details-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomDetailsPageRoutingModule": () => (/* binding */ RoomDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _room_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-details.page */ 18831);




const routes = [
    {
        path: ':id',
        component: _room_details_page__WEBPACK_IMPORTED_MODULE_0__.RoomDetailsPage
    }
];
let RoomDetailsPageRoutingModule = class RoomDetailsPageRoutingModule {
};
RoomDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoomDetailsPageRoutingModule);



/***/ }),

/***/ 78535:
/*!*******************************************************************!*\
  !*** ./src/app/booking/pages/room-details/room-details.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomDetailsPageModule": () => (/* binding */ RoomDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _room_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-details-routing.module */ 26123);
/* harmony import */ var _room_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-details.page */ 18831);
/* harmony import */ var _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/booking-components.module */ 6723);








let RoomDetailsPageModule = class RoomDetailsPageModule {
};
RoomDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _room_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoomDetailsPageRoutingModule,
            _components_booking_components_module__WEBPACK_IMPORTED_MODULE_2__.BookingComponentModule,
        ],
        declarations: [_room_details_page__WEBPACK_IMPORTED_MODULE_1__.RoomDetailsPage,]
    })
], RoomDetailsPageModule);



/***/ }),

/***/ 18831:
/*!*****************************************************************!*\
  !*** ./src/app/booking/pages/room-details/room-details.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomDetailsPage": () => (/* binding */ RoomDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_room_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./room-details.page.html */ 50554);
/* harmony import */ var _room_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-details.page.scss */ 26223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 48058);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/environment */ 82472);







let RoomDetailsPage = class RoomDetailsPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.initialize({ apikey: _services_environment__WEBPACK_IMPORTED_MODULE_3__.environment.public_apikey });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id = this.activatedRoute.snapshot.params.id;
            yield this.getHotel_room();
        });
    }
    getHotel_room() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.hotel_room = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.room.get(this.id, { queryParams: { relation: true } });
            console.log(this.hotel_room);
        });
    }
};
RoomDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
RoomDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-room-details',
        template: _raw_loader_room_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_room_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoomDetailsPage);



/***/ }),

/***/ 6492:
/*!**************************************************************!*\
  !*** ./src/app/chat/pages/profile/profile-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 33064);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
            },
            {
                path: ':userId',
                children: [
                    {
                        path: '',
                        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
                    },
                    {
                        path: 'profile',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 5215)).then((m) => m.ProfilePageModule),
                    },
                    {
                        path: 'friends',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_pages_friends_friends_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../friends/friends.module */ 65878)).then((m) => m.FriendsPageModule),
                    },
                ],
            },
        ],
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 5215:
/*!******************************************************!*\
  !*** ./src/app/chat/pages/profile/profile.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 6492);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 33064);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 33064:
/*!****************************************************!*\
  !*** ./src/app/chat/pages/profile/profile.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 66170);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 28292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/social-media/services/image.service */ 70251);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bucket */ 84865);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/environment */ 71537);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 78548);










let ProfilePage = class ProfilePage {
    constructor(_userService, _route, _imageService, _commonService) {
        this._userService = _userService;
        this._route = _route;
        this._imageService = _imageService;
        this._commonService = _commonService;
        this.searchedText = '';
        this.listItems = [];
        this.isFriend = false;
        this.isLoading = true;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.me = yield this._userService.getActiveUser();
            let queryParam = yield this._route.snapshot.paramMap.get('userId');
            if (queryParam && this.me._id != queryParam) {
                this.user = yield this._userService.getUserById(queryParam, true);
                this.isFriend = this.me.friends.some((item) => item['_id'] == this.user._id);
            }
            else
                this.user = this.me;
            this.listItems = [
                { key: 'username', value: '', seperate: true },
                { key: 'name', value: '', seperate: true },
                { key: 'surname', value: '', seperate: true },
                { key: 'email', value: '', seperate: true },
            ];
            this.listItems.forEach((item) => (item.value = this.user[item.key] ? this.user[item.key] : ''));
            if (this.user._id == this.me._id) {
                this.listItems.push({
                    key: 'my_friends',
                    value: 'My Friends',
                    seperate: false,
                    link: 'friends',
                });
            }
            this.isLoading = false;
        });
    }
    imageChange(data) {
        let mimetype = data.split(';')[0].split(':')[1];
        let file_buf = this._imageService.toBuffer(data);
        let bufWithMeta = {
            contentType: mimetype,
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.me.thumbnail &&
            this.me.thumbnail.includes(_services_environment__WEBPACK_IMPORTED_MODULE_5__.environment.project_id)) {
            let splitArr = this.me.thumbnail.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this._imageService.insert(bufWithMeta, imageId).then((res) => {
            this.me.thumbnail = res.url + `&timestamp=${new Date().getTime()}`;
        });
    }
    personProcess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isFriend) {
                this.me.friends = this.me.friends.filter((item) => item['_id'] != this.user._id);
                this._commonService.presentToast(`${this.user.username} succesfully deleted`, 2000);
                this.isFriend = false;
            }
            else {
                this.me.friends.push(this.user);
                this._commonService.presentToast(`${this.searchedText} succesfully added`, 2000);
                this.isFriend = true;
            }
            this._userService.me = this.me;
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_4__.user.patch(JSON.parse(JSON.stringify(this.me)));
        });
    }
    logout() {
        this.isLoading = true;
        this._userService.logOut();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 11214:
/*!*************************************************!*\
  !*** ./src/app/dating/services/chat.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 83954);
/* harmony import */ var _bucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bucket */ 8298);






let ChatService = class ChatService {
    constructor(_authService) {
        this._authService = _authService;
        this.chatGroups = [];
        this.$chatGroups = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.$unreadMessageCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        this.cachedUsers = [];
        this._authService.initBucket();
    }
    initialize() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._authService.getUser().toPromise();
            _bucket__WEBPACK_IMPORTED_MODULE_1__.chat.realtime.getAll({
                filter: {
                    informations: { $elemMatch: { user: this.me._id, status: 'active' } },
                },
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((chats) => {
                chats = chats.map((chat) => {
                    let userObject = chat.informations.filter((user) => user.user == this.me._id || user.user['_id'] == this.me._id)[0];
                    chat['new_message_count'] = userObject.unread_messages_count;
                    return chat;
                });
                return chats;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((chats) => chats.sort((a, b) => {
                if (b['last_message_time'] && a['last_message_time'])
                    return (new Date(b['last_message_time']).getTime() -
                        new Date(a['last_message_time']).getTime());
                return -1;
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((chats) => {
                let nonCachedUsers = [];
                chats.forEach((chat) => {
                    nonCachedUsers = nonCachedUsers.concat(chat.informations.filter((item) => !this.cachedUsers.some((cu) => cu._id == item.user || cu._id == item.user['_id'])));
                });
                let $newUsers = nonCachedUsers.length > 0
                    ? _bucket__WEBPACK_IMPORTED_MODULE_1__.user.getAll({
                        queryParams: {
                            filter: {
                                _id: { $in: nonCachedUsers.map((item) => item.user) },
                            },
                        },
                    })
                    : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]).toPromise();
                return $newUsers.then((users) => {
                    this.cachedUsers = this.cachedUsers.concat(users);
                    chats = chats.map((chat) => {
                        if (!chat.informations[0].user['_id'])
                            chat.informations.forEach((item) => (item.user = this.cachedUsers.find((cu) => cu._id == item.user)));
                        return chat;
                    });
                    return chats;
                });
            }))
                .subscribe((data) => {
                this.chatGroups = data.map((chat) => {
                    if (!chat.is_group) {
                        chat.name =
                            chat.informations[1].user['_id'] == this.me._id
                                ? `${chat.informations[0].user['username']}`
                                : `${chat.informations[1].user['username']}`;
                        chat['image'] =
                            chat.informations[1].user['_id'] == this.me._id
                                ? chat.informations[0].user['profile_photo']
                                : chat.informations[1].user['profile_photo'];
                    }
                    return chat;
                });
                let unread_messages_count = 0;
                this.chatGroups.forEach((chat) => {
                    let userLastActive = chat.informations.filter((la) => la.user['_id'] == this.me._id.toString())[0];
                    unread_messages_count += userLastActive.unread_messages_count;
                });
                this.$unreadMessageCount.next(unread_messages_count);
                this.$chatGroups.next(this.chatGroups);
            });
        });
    }
    getChats() {
        return this.$chatGroups;
    }
    getUnreadMessageCount() {
        return this.$unreadMessageCount;
    }
    getChatByUserWithMe(id) {
        return _bucket__WEBPACK_IMPORTED_MODULE_1__.chat.getAll({
            queryParams: {
                filter: {
                    $and: [
                        { informations: { $elemMatch: { user: id } } },
                        { informations: { $elemMatch: { user: this.me._id } } },
                        { informations: { $size: 2 } },
                        { is_group: false },
                    ],
                },
            },
        })
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (data[0])
                for (let item of data[0].informations) {
                    if (item.user == this.me._id)
                        item.user = this.me;
                    else if (this.cachedUsers.some((cu) => cu._id == item.user)) {
                        item.user = this.cachedUsers.find((cu) => cu._id == item.user);
                    }
                    else {
                        item.user = yield _bucket__WEBPACK_IMPORTED_MODULE_1__.user.get(item.user);
                        this.cachedUsers.push(item.user);
                    }
                }
            return data;
        }));
    }
    createChat(chatGroup) {
        return _bucket__WEBPACK_IMPORTED_MODULE_1__.chat.insert(chatGroup);
    }
    isChatExists(users) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let result = { result: false, chat: {} };
            let usersString = users
                .map((u) => u._id)
                .sort()
                .join(',');
            this.chatGroups.forEach((cg) => {
                let chatGroupsString = cg.informations
                    .map((item) => item.user['_id'] || item.user)
                    .sort()
                    .join(',');
                if (usersString == chatGroupsString) {
                    result = { result: true, chat: cg };
                }
            });
            if (!result.result && users.length == 2) {
                let other_user = users.filter((item) => (item._id || item) != this.me._id)[0]._id;
                let deletedChat = yield this.getChatByUserWithMe(other_user);
                if (deletedChat[0])
                    result = { result: true, chat: deletedChat[0] };
            }
            return result;
        });
    }
};
ChatService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ 61358:
/*!**********************************************************!*\
  !*** ./src/app/dating/services/choise-action.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChoiseActionService": () => (/* binding */ ChoiseActionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bucket */ 8298);



let ChoiseActionService = class ChoiseActionService {
    constructor() { }
    insertChoice(value, user, me) {
        let data = {
            user: user,
        };
        if (value == 'like') {
            data['liked_user'] = me;
            data['like_type'] = 'like';
            _bucket__WEBPACK_IMPORTED_MODULE_0__.likes.insert(data);
        }
        else {
            data['unliked_user'] = me;
            data['primary'] = 'unlikes';
            _bucket__WEBPACK_IMPORTED_MODULE_0__.unlikes.insert(data);
        }
    }
};
ChoiseActionService.ctorParameters = () => [];
ChoiseActionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ChoiseActionService);



/***/ }),

/***/ 88613:
/*!*****************************************************************!*\
  !*** ./src/app/fitness/components/fitness-components.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FitnessComponentModule": () => (/* binding */ FitnessComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _video_card_video_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-card/video-card.component */ 66443);








let FitnessComponentModule = class FitnessComponentModule {
};
FitnessComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_0__.VideoCardComponent],
        exports: [_video_card_video_card_component__WEBPACK_IMPORTED_MODULE_0__.VideoCardComponent],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule],
    })
], FitnessComponentModule);



/***/ }),

/***/ 66443:
/*!***********************************************************************!*\
  !*** ./src/app/fitness/components/video-card/video-card.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoCardComponent": () => (/* binding */ VideoCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_video_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./video-card.component.html */ 91424);
/* harmony import */ var _video_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-card.component.scss */ 34768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 19122);






let VideoCardComponent = class VideoCardComponent {
    constructor(_roter, alertController, toastController) {
        this._roter = _roter;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    navigateToVideo() {
        if (!this.video.permissions.length) {
            if (this.video.price >= 1) {
                if (this.user.buyed_videos.includes(this.video._id)) {
                    this._roter.navigate(['fitness/video-details', this.video._id]);
                }
                else {
                    this.notAuthorizedPrice();
                }
            }
        }
        else {
            if (this.video.permissions.includes(this.user.membership_level)) {
                this._roter.navigate(['fitness/video-details', this.video._id]);
            }
            else {
                this.notAuthorizedRank();
            }
        }
    }
    notAuthorizedPrice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'You need to buy to see this video. Click OK to payment page',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log("Cancel");
                        },
                    },
                    {
                        text: 'Ok',
                        role: 'ok',
                        handler: () => {
                            this._roter.navigate(['fitness/payment', this.video._id]);
                        },
                    }]
            });
            alert.present();
        });
    }
    notAuthorizedRank() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'You are not authorized.',
                duration: 2000
            });
            toast.present();
        });
    }
};
VideoCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
VideoCardComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
VideoCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-video-card',
        template: _raw_loader_video_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_video_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VideoCardComponent);



/***/ }),

/***/ 58540:
/*!***************************************************************************!*\
  !*** ./src/app/fitness/pages/teacher-page/teacher-page-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPagePageRoutingModule": () => (/* binding */ TeacherPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _teacher_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-page.page */ 81838);




const routes = [
    {
        path: ':id',
        children: [
            { path: '', component: _teacher_page_page__WEBPACK_IMPORTED_MODULE_0__.TeacherPagePage },
            {
                path: 'video-details',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../video-details/video-details.module */ 75184)).then((m) => m.VideoDetailsPageModule),
            },
        ],
    },
];
let TeacherPagePageRoutingModule = class TeacherPagePageRoutingModule {
};
TeacherPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TeacherPagePageRoutingModule);



/***/ }),

/***/ 91683:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/teacher-page/teacher-page.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPagePageModule": () => (/* binding */ TeacherPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _teacher_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-page-routing.module */ 58540);
/* harmony import */ var _teacher_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-page.page */ 81838);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/fitness-components.module */ 88613);









let TeacherPagePageModule = class TeacherPagePageModule {
};
TeacherPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _teacher_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.TeacherPagePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.SpicaComponentsModule,
            _components_fitness_components_module__WEBPACK_IMPORTED_MODULE_3__.FitnessComponentModule
        ],
        declarations: [_teacher_page_page__WEBPACK_IMPORTED_MODULE_1__.TeacherPagePage]
    })
], TeacherPagePageModule);



/***/ }),

/***/ 81838:
/*!*****************************************************************!*\
  !*** ./src/app/fitness/pages/teacher-page/teacher-page.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPagePage": () => (/* binding */ TeacherPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_teacher_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./teacher-page.page.html */ 18524);
/* harmony import */ var _teacher_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-page.page.scss */ 4049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 86629);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 43443);







let TeacherPagePage = class TeacherPagePage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this.listItems = [];
        this.option = {
            spaceBetween: 10,
            speed: 500,
            slidesPerView: 2,
        };
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.teacher = yield this.getTeacher(this._route.snapshot.params.id);
            this.listItems = [
                { key: 'name', value: '', seperate: true },
                { key: 'surname', value: '', seperate: true },
                { key: 'gender', value: '', seperate: true },
            ];
            this.listItems.forEach((item) => (item.value = this.teacher[item.key] ? this.teacher[item.key] : ''));
            this.teacherVideos = yield this.getTeacherVideos();
        });
    }
    getTeacher(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.teacher.get(id, { queryParams: { relation: true } });
        });
    }
    getTeacherVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.video.getAll({
                queryParams: { relation: true, filter: { teacher: this.teacher._id } },
            });
        });
    }
};
TeacherPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
TeacherPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-teacher-page',
        template: _raw_loader_teacher_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_teacher_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TeacherPagePage);



/***/ }),

/***/ 17980:
/*!*****************************************************************************!*\
  !*** ./src/app/fitness/pages/video-details/video-details-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoDetailsPageRoutingModule": () => (/* binding */ VideoDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _video_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-details.page */ 44893);




const routes = [
    {
        path: ':id',
        children: [
            { path: '', component: _video_details_page__WEBPACK_IMPORTED_MODULE_0__.VideoDetailsPage },
            {
                path: 'teacher-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../teacher-page/teacher-page.module */ 91683)).then((m) => m.TeacherPagePageModule),
            },
        ],
    },
];
let VideoDetailsPageRoutingModule = class VideoDetailsPageRoutingModule {
};
VideoDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideoDetailsPageRoutingModule);



/***/ }),

/***/ 75184:
/*!*********************************************************************!*\
  !*** ./src/app/fitness/pages/video-details/video-details.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoDetailsPageModule": () => (/* binding */ VideoDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _video_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-details-routing.module */ 17980);
/* harmony import */ var _video_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-details.page */ 44893);







let VideoDetailsPageModule = class VideoDetailsPageModule {
};
VideoDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _video_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoDetailsPageRoutingModule
        ],
        declarations: [_video_details_page__WEBPACK_IMPORTED_MODULE_1__.VideoDetailsPage]
    })
], VideoDetailsPageModule);



/***/ }),

/***/ 44893:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/video-details/video-details.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoDetailsPage": () => (/* binding */ VideoDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_video_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./video-details.page.html */ 70413);
/* harmony import */ var _video_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-details.page.scss */ 42970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 86629);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 43443);







let VideoDetailsPage = class VideoDetailsPage {
    constructor(_route, _authService) {
        this._route = _route;
        this._authService = _authService;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            this.id = this._route.snapshot.params.id;
            this.video = yield this.getVideo();
        });
    }
    getVideo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.video.get(this.id, { queryParams: { relation: true } });
        });
    }
    watchVideo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.watched_video.getAll({
                queryParams: { filter: { user: this.user._id, video: this.id } },
            });
        });
    }
    watchedVideo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.userVideo = yield this.watchVideo();
            if (!this.userVideo.length) {
                _services_bucket__WEBPACK_IMPORTED_MODULE_2__.watched_video.insert({
                    name: this.user.mail,
                    user: this.user._id,
                    video: this.id,
                });
            }
            else {
                this.userVideo[0].watched_date = new Date();
                _services_bucket__WEBPACK_IMPORTED_MODULE_2__.watched_video.update(this.userVideo[0]);
            }
        });
    }
};
VideoDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
VideoDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-video-details',
        template: _raw_loader_video_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_video_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VideoDetailsPage);



/***/ }),

/***/ 9670:
/*!*********************************************************!*\
  !*** ./src/app/food-delivery/services/order.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let OrderService = class OrderService {
    constructor() {
        this.order = {
            foods: [],
        };
    }
    addToOrder(food, amount) {
        const index = this.order.foods.findIndex((f) => this.isSameFood(f, food));
        if (index != -1) {
            this.order.foods[index].count += amount;
        }
        else {
            this.order.foods.push({
                _id: food._id,
                count: amount,
                ingredients: food.ingredients,
                name: food.name,
                price: food.price,
                //@ts-ignore
                image: food.image,
            });
        }
        console.log(this.order);
        this.updateOrderPrice();
    }
    isSameFood(food1, food2) {
        console.log(food1, food2);
        return (food1._id == food2._id &&
            food1.ingredients.every((i) => food2.ingredients.includes(i)) &&
            food1.ingredients.length == food2.ingredients.length);
    }
    removeFromOrder(i) {
        const existing = this.order.foods[i].count;
        if (existing == 1) {
            this.order.foods.splice(i, 1);
        }
        else {
            this.order.foods[i].count -= 1;
        }
        this.updateOrderPrice();
    }
    updateOrderPrice() {
        this.order.price = this.order.foods.reduce((acc, curr) => acc + curr.price * curr.count, 0);
    }
    getOrder() {
        return this.order;
    }
    clearOrder() {
        this.order = {
            foods: [],
        };
    }
};
OrderService.ctorParameters = () => [];
OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ 2281:
/*!**************************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/jobs-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsPageRoutingModule": () => (/* binding */ JobsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs.page */ 46557);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _jobs_page__WEBPACK_IMPORTED_MODULE_0__.JobsPage,
            },
            {
                path: 'jobs',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../jobs/jobs.module */ 63290)).then((m) => m.JobsPageModule),
            },
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_job-portal_pages_jobs_detail_detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./detail/detail.module */ 1538)).then((m) => m.DetailPageModule),
                    },
                    {
                        path: 'company',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_pages_company_company_module_ts"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c3")]).then(__webpack_require__.bind(__webpack_require__, /*! ../company/company.module */ 57600)).then((m) => m.CompanyPageModule),
                    },
                ],
            },
            {
                path: 'company',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("default-src_app_job-portal_pages_company_company_module_ts"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c3")]).then(__webpack_require__.bind(__webpack_require__, /*! ../company/company.module */ 57600)).then((m) => m.CompanyPageModule),
            },
        ],
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spica-devkit_storage_dist_index_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_social-media_services_image_service_ts-_9b2c4")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 51925)).then((m) => m.ProfilePageModule),
    },
];
let JobsPageRoutingModule = class JobsPageRoutingModule {
};
JobsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JobsPageRoutingModule);



/***/ }),

/***/ 63290:
/*!******************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/jobs.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsPageModule": () => (/* binding */ JobsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-routing.module */ 2281);
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.page */ 46557);
/* harmony import */ var _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-portal-components.module */ 83234);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let JobsPageModule = class JobsPageModule {
};
JobsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobsPageRoutingModule,
            _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule,
        ],
        declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_1__.JobsPage],
    })
], JobsPageModule);



/***/ }),

/***/ 46557:
/*!****************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/jobs.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsPage": () => (/* binding */ JobsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./jobs.page.html */ 85104);
/* harmony import */ var _jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs.page.scss */ 85560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5620);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 14950);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ 43421);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ 2305);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var src_app_components_spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/spica-filter-modal/spica-filter-modal.component */ 63526);











let JobsPage = class JobsPage {
    constructor(_authService, _commonService, _userService, _dataService, _modalController) {
        this._authService = _authService;
        this._commonService = _commonService;
        this._userService = _userService;
        this._dataService = _dataService;
        this._modalController = _modalController;
        this.loading = true;
        this.jobs = [];
        this.filter = {};
        (0,_services_bucket__WEBPACK_IMPORTED_MODULE_5__.initialize)({ identity: localStorage.getItem('job-portal_spica_token') });
    }
    ngOnInit() {
        this.getMe();
    }
    getMe() {
        this._userService.getActiveUser().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (data && !this.me) {
                this.me = data;
                this.loading = false;
                this.getJobs();
            }
            else
                this.loading = false;
        }), (err) => {
            this.loading = false;
        });
    }
    login(loginData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this._authService
                .login(loginData.email, loginData.password)
                .toPromise()
                .then((_) => {
                this.me = undefined;
                this.getMe();
            }, (err) => {
                this.loading = false;
                this._commonService.presentToast(err.message, 1500);
            });
        });
    }
    register(registerData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this._authService
                .register(Object.assign({}, registerData))
                .toPromise()
                .then((res) => {
                this.login(registerData);
                this._commonService.presentToast(res['message'], 1500);
            })
                .catch((err) => {
                this._commonService.presentToast(err.error.message, 1500);
            });
        });
    }
    getJobs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.jobs = yield _services_bucket__WEBPACK_IMPORTED_MODULE_5__.job_advert.getAll({
                queryParams: {
                    relation: true,
                    filter: Object.keys(this.filter).length > 0 ? this.filter : {},
                },
            });
        });
    }
    presentFilterModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const attributes = this.getAttributes();
            const filterModal = yield this._modalController.create({
                component: src_app_components_spica_filter_modal_spica_filter_modal_component__WEBPACK_IMPORTED_MODULE_7__.SpicaFilterModalComponent,
                cssClass: 'spica-filter-modal-style',
                swipeToClose: true,
                componentProps: {
                    attributes: attributes,
                    currency: 'none',
                },
            });
            filterModal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                if (!res.data) {
                    return;
                }
                if ((_a = res.data.filter) === null || _a === void 0 ? void 0 : _a.length) {
                    res.data.filter.forEach((el) => {
                        if (el.name != 'price_range')
                            this.filter['criterias.' + el.name] = { $in: el.value };
                    });
                }
                if (res.data.action == 'clear_filter' && attributes.length) {
                    this.filter = {};
                }
                this.loading = true;
                yield this.getJobs();
                this.loading = false;
            }));
            return yield filterModal.present();
        });
    }
    getAttributes() {
        let attributes = [];
        let criterias = this._dataService.getCriterias();
        Object.keys(criterias).forEach((element) => {
            attributes.push({ name: element, value: criterias[element] });
        });
        return attributes;
    }
};
JobsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
JobsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-jobs',
        template: _raw_loader_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], JobsPage);



/***/ }),

/***/ 644:
/*!********************************************************************!*\
  !*** ./src/app/job-portal/pages/profile/profile-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4996);




const routes = [
    {
        path: ':userId',
        children: [
            {
                path: '',
                component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage,
            },
            {
                path: 'saved-jobs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_job-portal_pages_saved-jobs_saved-jobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../saved-jobs/saved-jobs.module */ 27666)).then((m) => m.SavedJobsPageModule),
            },
            {
                path: 'applied-jobs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_job-portal_pages_applied-jobs_applied-jobs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../applied-jobs/applied-jobs.module */ 88083)).then((m) => m.AppliedJobsPageModule),
            },
            {
                path: 'my-companies',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_job-portal_pages_my-companies_my-companies_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../my-companies/my-companies.module */ 75305)).then((m) => m.MyCompaniesPageModule),
            },
        ],
    },
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 51925:
/*!************************************************************!*\
  !*** ./src/app/job-portal/pages/profile/profile.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 644);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4996);
/* harmony import */ var _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/job-portal-components.module */ 83234);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _components_job_portal_components_module__WEBPACK_IMPORTED_MODULE_2__.JobPortalComponentModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.SpicaComponentsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage],
    })
], ProfilePageModule);



/***/ }),

/***/ 4996:
/*!**********************************************************!*\
  !*** ./src/app/job-portal/pages/profile/profile.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 64148);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 51006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/social-media/services/image.service */ 70251);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 58652);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/environment */ 5569);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 43421);









let ProfilePage = class ProfilePage {
    constructor(_userService, _imageService, _route) {
        this._userService = _userService;
        this._imageService = _imageService;
        this._route = _route;
        this.listItems = [];
        this.isLoading = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.me = yield this._userService.getActiveUser();
            let queryParam = yield this._route.snapshot.paramMap.get('userId');
            if (queryParam && queryParam != 'me' && this.me._id != queryParam)
                this.user = yield this._userService.getUserById(queryParam, true);
            else
                this.user = this.me;
            this.listItems = [
                { key: 'name', value: '', seperate: true },
                { key: 'surname', value: '', seperate: true },
                { key: 'email', value: '', seperate: true },
            ];
            this.listItems.forEach((item) => (item.value = this.user[item.key] ? this.user[item.key] : ''));
            if (this.user._id == this.me._id) {
                this.listItems = this.listItems.concat([
                    {
                        key: 'saved_jobs',
                        value: 'Saved Jobs',
                        seperate: false,
                        link: 'saved-jobs',
                    },
                    {
                        key: 'applied_jobs',
                        value: 'Applied Jobs',
                        seperate: false,
                        link: 'applied-jobs',
                    },
                    {
                        key: 'companies',
                        value: 'My Companies',
                        seperate: false,
                        link: 'my-companies',
                    },
                ]);
            }
            this.isLoading = false;
        });
    }
    imageChange(data) {
        let mimetype = data.split(';')[0].split(':')[1];
        let file_buf = this._imageService.toBuffer(data);
        let bufWithMeta = {
            contentType: mimetype,
            data: file_buf,
            name: 'image',
        };
        let imageId;
        if (this.me.profile_picture &&
            this.me.profile_picture.includes(_services_environment__WEBPACK_IMPORTED_MODULE_4__.environment.project_id)) {
            let splitArr = this.me.profile_picture.split('/');
            imageId = splitArr[splitArr.length - 1].split('?')[0];
        }
        this._imageService.insert(bufWithMeta, imageId).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.me.profile_picture = res.url + `&timestamp=${new Date().getTime()}`;
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({
                _id: this.me._id,
                profile_picture: this.me.profile_picture,
            });
        }));
    }
    logout() {
        this.isLoading = true;
        this._userService.logOut();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_social_media_services_image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 62464:
/*!**************************************************************!*\
  !*** ./src/app/rent-a-car/components/rent/rent.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RentComponent": () => (/* binding */ RentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rent_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rent.component.html */ 27321);
/* harmony import */ var _rent_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rent.component.scss */ 49100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 94596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);








let RentComponent = class RentComponent {
    constructor(_formBuilder, _route, modalController) {
        this._formBuilder = _formBuilder;
        this._route = _route;
        this.modalController = modalController;
        this.office = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.getOffice();
            this.rentForm = this._formBuilder.group({
                office_to_take: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                office_to_be_given: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
                end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            });
            let date = new Date();
            date.setSeconds(0);
            this.today = date.toISOString().split(".")[0];
            if (this.carId) {
                this.car = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.cars.get(this.carId);
            }
        });
    }
    getOffice() {
        _services_bucket__WEBPACK_IMPORTED_MODULE_2__.office.getAll({ queryParams: { relation: true } }).then((res) => {
            this.office = res;
        });
    }
    navigate() {
        var _a, _b, _c, _d;
        this.modalController.dismiss();
        if (this.car) {
            this._route.navigate(['rent-a-car/extras'], { queryParams: Object.assign(Object.assign({}, this.rentForm.value), { car: (_a = this.car) === null || _a === void 0 ? void 0 : _a._id, price: (_b = this.car) === null || _b === void 0 ? void 0 : _b.price }) });
        }
        else {
            this._route.navigate(['rent-a-car/car-selection'], { queryParams: Object.assign(Object.assign({}, this.rentForm.value), { car: (_c = this.car) === null || _c === void 0 ? void 0 : _c._id, price: (_d = this.car) === null || _d === void 0 ? void 0 : _d.price }) });
        }
    }
    dismiss() {
        this.modalController.dismiss();
    }
    calculate() {
        var time = new Date(this.rentForm.value.start).getTime() - new Date(this.rentForm.value.end).getTime();
        var diffDays = Math.ceil(time / (1000 * 3600 * 24));
        if (diffDays > 0) {
            this.rentForm.controls.end.setValue(this.rentForm.value.start);
        }
        else if (diffDays <= 0) {
        }
    }
};
RentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
RentComponent.propDecorators = {
    carId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
RentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-rent',
        template: _raw_loader_rent_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rent_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RentComponent);



/***/ }),

/***/ 67606:
/*!**************************************************!*\
  !*** ./src/app/store-listing/services/bucket.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "public_holiday": () => (/* binding */ public_holiday),
/* harmony export */   "rating": () => (/* binding */ rating),
/* harmony export */   "place": () => (/* binding */ place)
/* harmony export */ });
/* harmony import */ var _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spica-devkit/bucket */ 14760);

/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
function initialize(...initOptions) {
    initOptions[0].publicUrl = 'https://spica-starters-7229b.hq.spicaengine.com/api';
    _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.initialize(...initOptions);
}
var public_holiday;
(function (public_holiday) {
    const BUCKET_ID = '61b3453a97a0a8002e6a4f89';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    public_holiday.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    public_holiday.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    public_holiday.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    public_holiday.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    public_holiday.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    public_holiday.remove = remove;
    ;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        ;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
        ;
    })(realtime = public_holiday.realtime || (public_holiday.realtime = {}));
})(public_holiday || (public_holiday = {}));
var rating;
(function (rating) {
    const BUCKET_ID = '61b3453797a0a8002e6a4f83';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    rating.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    rating.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    rating.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    rating.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    rating.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    rating.remove = remove;
    ;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        ;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
        ;
    })(realtime = rating.realtime || (rating.realtime = {}));
})(rating || (rating = {}));
var place;
(function (place) {
    const BUCKET_ID = '61b3453997a0a8002e6a4f86';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    place.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    place.getAll = getAll;
    ;
    function insert(document) {
        ['ratings'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id ? v._id : v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    place.insert = insert;
    ;
    function update(document) {
        ['ratings'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id ? v._id : v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    place.update = update;
    ;
    function patch(document) {
        ['ratings'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id ? v._id : v)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    place.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    place.remove = remove;
    ;
    let realtime;
    (function (realtime) {
        function get(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.get(BUCKET_ID, ...args);
        }
        realtime.get = get;
        ;
        function getAll(...args) {
            return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.realtime.getAll(BUCKET_ID, ...args);
        }
        realtime.getAll = getAll;
        ;
    })(realtime = place.realtime || (place.realtime = {}));
})(place || (place = {}));


/***/ }),

/***/ 12628:
/*!*******************************************************!*\
  !*** ./src/app/store-listing/services/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    apiUrl: "https://spica-starters-7229b.hq.spicaengine.com/api",
    apikey: "axfb9k1akx06fe2u",
    TOKEN_KEY: 'store-listing_spica_token',
};


/***/ }),

/***/ 22285:
/*!***************************************************************************!*\
  !*** ./src/app/booking/pages/activity-details/activity-details.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  padding: 15px;\n}\n:host .container .activity .header-img {\n  width: 100%;\n  height: 300px;\n}\n:host .container .activity .header-img img {\n  width: 100%;\n  height: 100%;\n}\n:host .container .activity ion-slides {\n  height: 100px;\n  padding: 0 5px;\n}\n:host .container .activity ion-slides ion-slide .gallery {\n  width: 100%;\n  height: 80px;\n  margin: 5px 0;\n}\n:host .container .activity ion-slides ion-slide .gallery img {\n  width: 100%;\n  height: 100%;\n}\n:host .container .activity .activity-description {\n  display: flex;\n  flex-direction: column;\n}\n:host .container .activity .activity-description .divider {\n  width: 15%;\n  height: 1px;\n  background-color: #002854;\n}\n:host .container .activity .activity-description h3 {\n  color: #595959;\n  font-size: 1.3rem;\n}\n:host .container .activity .activity-description p {\n  padding: 0 15px 0 15px;\n  color: #6f6f6f;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSO0FBRVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUFoQjtBQUNnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ3BCO0FBRVk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFoQjtBQUVvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUF4QjtBQUN3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQzVCO0FBSVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFGaEI7QUFHZ0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRHBCO0FBR2dCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRHBCO0FBR2dCO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFEcEIiLCJmaWxlIjoiYWN0aXZpdHktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIC5hY3Rpdml0eSB7XG4gICAgICAgICAgICAuaGVhZGVyLWltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1zbGlkZXN7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICAgICAgICBpb24tc2xpZGV7XG4gICAgICAgICAgICAgICAgICAgIC5nYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2aXR5LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDQwLCA4NCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 26223:
/*!*******************************************************************!*\
  !*** ./src/app/booking/pages/room-details/room-details.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container .room .room-description {\n  display: flex;\n  flex-direction: column;\n  margin: 0 15px;\n}\n:host .container .room .room-description h3 {\n  color: #595959;\n  font-size: 1.3rem;\n}\n:host .container .room .room-description span {\n  text-align: center;\n  padding: 0 15px 0 0;\n  color: #6f6f6f;\n  font-size: 0.9rem;\n}\n:host .container .room .room-features {\n  text-align: center;\n}\n:host .container .room .room-features h3 {\n  text-align: center;\n  color: #595959;\n  font-size: 1.3rem;\n  margin: 20px 70px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #002854;\n}\n:host .container .room .room-features .features {\n  display: flex;\n  align-items: center;\n}\n:host .container .room .room-features .features ion-card {\n  text-align: center;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 20px;\n}\n:host .container .room .room-features .features ion-card li {\n  color: #6f6f6f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBRmhCO0FBR2dCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRHBCO0FBR2dCO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURwQjtBQUlZO0VBQ0ksa0JBQUE7QUFGaEI7QUFHZ0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURwQjtBQUdnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQURwQjtBQUVvQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUF4QjtBQUN3QjtFQUNJLGNBQUE7QUFDNUIiLCJmaWxlIjoicm9vbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgLnJvb20ge1xuICAgICAgICAgICAgLnJvb20tZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2ZjZmNmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb29tLWZlYXR1cmVzIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgNDAsIDg0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZlYXR1cmVzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 28292:
/*!******************************************************!*\
  !*** ./src/app/chat/pages/profile/profile.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 34768:
/*!*************************************************************************!*\
  !*** ./src/app/fitness/components/video-card/video-card.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n  display: flex;\n}\n:host ion-card {\n  margin: 10px 5px;\n  width: calc(100% - 10px);\n}\n:host ion-card ion-card-header {\n  padding: 10px 10px 0;\n}\n:host ion-card ion-card-header ion-card-subtitle {\n  display: flex;\n  align-items: center;\n}\n:host ion-card ion-card-header ion-card-subtitle:first-of-type {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n  opacity: 0.6;\n}\n:host ion-card ion-card-header ion-card-subtitle ion-text {\n  color: red;\n  position: absolute;\n  right: 0;\n}\n:host ion-card ion-card-content {\n  padding: 10px 10px 20px 10px;\n  font-size: 13px;\n}\n:host .image-play {\n  position: relative;\n}\n:host .image-play ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: white;\n  font-size: 30px;\n  transform: translate(-50%, -50%);\n}\n:host .image-play ion-label {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 3px;\n  color: var(--ion-color-primary);\n  font-size: 11px;\n}\n:host .image-play ion-label span {\n  background: white;\n  padding: 3px 7px;\n  text-align: center;\n  margin-top: 3px;\n  border-radius: 8px;\n}\n:host .image-play ion-label .bronze {\n  color: #CD7F32;\n}\n:host .image-play ion-label .silver {\n  color: #807e7e;\n}\n:host .image-play ion-label .gold {\n  color: #FFD700;\n}\n:host .image-play img {\n  width: 100%;\n  object-fit: cover;\n  height: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFESTtFQUNFLG9CQUFBO0FBR047QUFGTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBS1Y7QUFIUTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFLVjtBQURJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBR047QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFESTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUdOO0FBRk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUZNO0VBQ0UsY0FBQTtBQUlSO0FBRk07RUFDRSxjQUFBO0FBSVI7QUFGTTtFQUNFLGNBQUE7QUFJUjtBQURJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUdOIiwiZmlsZSI6InZpZGVvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMHB4IDVweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xuICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxuICAuaW1hZ2UtcGxheSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgc3BhbntcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICB9XG4gICAgICAuYnJvbnple1xuICAgICAgICBjb2xvcjogI0NEN0YzMjtcbiAgICAgIH1cbiAgICAgIC5zaWx2ZXJ7XG4gICAgICAgIGNvbG9yOiAjODA3ZTdlO1xuICAgICAgfVxuICAgICAgLmdvbGR7XG4gICAgICAgIGNvbG9yOiNGRkQ3MDA7XG4gICAgICB9XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 4049:
/*!*******************************************************************!*\
  !*** ./src/app/fitness/pages/teacher-page/teacher-page.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host spica-item-list ::ng-deep .item-list {\n  padding: 0px !important;\n}\n:host .detail {\n  margin: 30px 15px;\n}\n:host .detail .speciality {\n  width: 100%;\n  margin-bottom: 20px;\n}\n:host .detail .speciality span {\n  background: #bfcfe5;\n  color: white;\n  padding: 5px;\n  border-radius: 15px;\n  font-size: 12px;\n  font-weight: 500;\n  margin: 0 5px;\n}\n:host .detail .speciality span:first-of-type {\n  margin: 0px;\n}\n:host .detail .bio {\n  line-height: 1.5rem;\n  font-size: 14px;\n}\n:host .workouts {\n  margin-top: 30px;\n}\n:host .workouts ion-slides ::ng-deep .swiper-wrapper {\n  margin-bottom: 25px;\n}\n:host .workouts ion-slides ::ng-deep ion-slide app-video-card ion-card {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDRSx1QkFBQTtBQUZSO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBS0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUlNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUZSO0FBR1E7RUFDRSxXQUFBO0FBRFY7QUFLSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUhOO0FBTUU7RUFDRSxnQkFBQTtBQUpKO0FBT1E7RUFDRSxtQkFBQTtBQUxWO0FBU1k7RUFDRSxhQUFBO0FBUGQiLCJmaWxlIjoidGVhY2hlci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgc3BpY2EtaXRlbS1saXN0IHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgLml0ZW0tbGlzdCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGV0YWlsIHtcbiAgICBtYXJnaW46IDMwcHggMTVweDtcbiAgICAuc3BlY2lhbGl0eSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2JmY2ZlNTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYmlvIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG4gIC53b3Jrb3V0cyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5zd2lwZXItd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgIGFwcC12aWRlby1jYXJkIHtcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 42970:
/*!*********************************************************************!*\
  !*** ./src/app/fitness/pages/video-details/video-details.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content > div {\n  padding: 10px;\n}\n:host ion-content > div video {\n  width: 100%;\n  border-radius: 5px;\n}\n:host ion-content > div > div {\n  padding: 10px 10px 0;\n}\n:host ion-content > div .detail .detail-row {\n  display: flex;\n  margin: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n:host ion-content > div .detail .detail-row:first-of-type {\n  margin-top: 30px;\n}\n:host ion-content > div .detail .detail-row .detail-column {\n  font-weight: 500;\n  padding: 0 5px;\n  flex: 1;\n}\n:host ion-content > div .detail .detail-row .detail-column:first-of-type {\n  opacity: 0.8;\n  text-align: end;\n}\n:host ion-content > div .detail .detail-row .detail-column:first-of-type::after {\n  content: \":\";\n}\n:host ion-content > div .detail .detail-row .detail-column:last-of-type {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtBQUROO0FBRU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVNO0VBQ0Usb0JBQUE7QUFBUjtBQUdRO0VBSUUsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDJDQUFBO0FBSlY7QUFGVTtFQUNFLGdCQUFBO0FBSVo7QUFFVTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7QUFBWjtBQUNZO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDZDtBQUFjO0VBQ0UsWUFBQTtBQUVoQjtBQUNZO0VBQ0UsaUJBQUE7QUFDZCIsImZpbGUiOiJ2aWRlby1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgID4gZGl2IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG4gICAgICA+IGRpdiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xuICAgICAgfVxuICAgICAgLmRldGFpbCB7XG4gICAgICAgIC5kZXRhaWwtcm93IHtcbiAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgICAuZGV0YWlsLWNvbHVtbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIjpcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 85560:
/*!******************************************************!*\
  !*** ./src/app/job-portal/pages/jobs/jobs.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2JzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 51006:
/*!************************************************************!*\
  !*** ./src/app/job-portal/pages/profile/profile.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 49100:
/*!****************************************************************!*\
  !*** ./src/app/rent-a-car/components/rent/rent.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-buttons {\n  margin: 20px 0 0 20px;\n}\n:host ion-buttons ion-icon {\n  font-size: 1.8rem;\n}\n:host ion-card {\n  margin: 0;\n  padding: 14px;\n  box-shadow: none;\n  border-radius: 0;\n}\n:host ion-card ion-item {\n  margin: 15px 0;\n  border-radius: 20px;\n  --background: #f2f2f2;\n}\n:host ion-card ion-item ion-input {\n  --color: gray;\n  --placeholder-color:rgb(33, 33, 33);\n}\n:host ion-card ion-item ion-label {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  color: gray;\n}\n:host ion-card ion-item ion-label span {\n  margin-left: 8px;\n}\n:host ion-card ion-item ion-label ion-icon {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtBQUFSO0FBQ1E7RUFDSSxpQkFBQTtBQUNaO0FBRUk7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDWjtBQUFZO0VBQ0csYUFBQTtFQUNBLG1DQUFBO0FBRWY7QUFBWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRWhCO0FBRGdCO0VBQ0ksZ0JBQUE7QUFHcEI7QUFEZ0I7RUFDSSxpQkFBQTtBQUdwQiIsImZpbGUiOiJyZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1idXR0b25ze1xuICAgICAgICBtYXJnaW46IDIwcHggMCAwIDIwcHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICAgICAtLWNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjpyZ2IoMzMsIDMzLCAzMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 37848:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/pages/activity-details/activity-details.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title>Activities</ion-title>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"activity\" *ngIf=\"hotel_activities\">\n      <app-gallery [gallery]=\"hotel_activities\"></app-gallery>\n\n      <div class=\"activity-description\">\n        <h3>{{hotel_activities.name}}</h3>\n        <div class=\"divider\"></div>\n        <p>{{hotel_activities.description}}</p>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 50554:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/pages/room-details/room-details.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{hotel_room?.name}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\" *ngIf=\"hotel_room\">\n    <div class=\"room\">\n      <app-gallery [gallery]=\"hotel_room\"></app-gallery>\n      <div class=\"room-description\">\n        <h3>{{hotel_room.name}}</h3>\n        <span>{{hotel_room.description}}</span>\n      </div>\n      <div class=\"room-features\">\n        <h3>Features</h3>\n        <div class=\"features\">\n          <ion-card>\n            <ul *ngFor=\"let properties of hotel_room.properties\">\n              <li>{{properties['name']}}</li>\n            </ul>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 66170:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/pages/profile/profile.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"user && user?._id!=me?._id\">\n      <ion-button (click)=\"personProcess()\">\n        <ion-icon\n          [name]=\"isFriend ?'person-remove-outline' : 'person-add-outline' \"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <spica-user-profile-picture\n    *ngIf=\"!isLoading\"\n    [imageEditable]=\"user?._id==me?._id\"\n    (changeImage)=\"imageChange($event)\"\n    [image]=\"user?.thumbnail\"\n  ></spica-user-profile-picture>\n  <spica-item-list\n    *ngIf=\"listItems.length>0&& !isLoading\"\n    [items]=\"listItems\"\n    (logout)=\"logout()\"\n    [canLogout]=\"user?._id==me?._id\"\n  ></spica-item-list>\n</ion-content>\n");

/***/ }),

/***/ 91424:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/components/video-card/video-card.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card\n  class=\"card-item\"\n  *ngIf=\"video\"\n  (click)=\"navigateToVideo()\"\n  mode=\"ios\"\n>\n  <div class=\"image-play\">\n    <ion-icon\n      name=\"play-outline\"\n     \n    ></ion-icon>\n    <ion-label>\n      <span *ngFor=\"let rank of video.permissions\" [ngClass]=\"{'bronze': rank == 'bronze','silver': rank == 'silver','gold': rank == 'gold' }\" >{{rank |titlecase}}</span>\n    </ion-label>\n    <img [src]=\"video.image\" />\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle\n      >{{ video.category[\"name\"] }} - {{ video.duration }}MIN\n      <ion-text *ngIf=\"!user.buyed_videos.includes(video._id)\">${{video.price}}</ion-text>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    {{ video.name }}\n  </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ 18524:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/teacher-page/teacher-page.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>Teacher</ion-title>\n    <ion-back-button slot=\"start\" defaultHref=\"/\"></ion-back-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <spica-user-profile-picture\n    [image]=\"teacher?.picture\"\n  ></spica-user-profile-picture>\n  <spica-item-list\n    *ngIf=\"listItems.length>0\"\n    [items]=\"listItems\"\n    [canLogout]=\"false\"\n  ></spica-item-list>\n\n  <div class=\"detail\">\n    <div class=\"speciality\">\n      <span *ngFor=\"let item of teacher?.speciality\">{{item['name']}} </span>\n    </div>\n    <div class=\"bio\">{{teacher?.biography}}</div>\n    <div class=\"workouts\">\n      <h6>{{teacher?.name}}'s Workouts</h6>\n      <ion-slides pager=\"true\" [options]=\"option\">\n        <ion-slide *ngFor=\"let video of teacherVideos\">\n          <app-video-card [user]=\"user\" [video]=\"video\"></app-video-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 70413:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fitness/pages/video-details/video-details.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>{{video?.name}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/fitness\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"video\">\n    <video (play)=\"watchedVideo()\" [src]=\"video?.video\" controls>\n      <span></span>\n    </video>\n    <div class=\"detail\">\n      <h5>{{video.name}}</h5>\n      <div class=\"detail-row\">\n        <div class=\"detail-column\">Duration</div>\n        <div class=\"detail-column\">{{video.duration}}MIN</div>\n      </div>\n      <div class=\"detail-row\">\n        <div class=\"detail-column\">Category</div>\n        <div class=\"detail-column\">{{video.category['name']}}</div>\n      </div>\n      <ion-item\n        lines=\"none\"\n        [routerLink]=\"['teacher-page', video?.teacher['_id']]\"\n      >\n        <ion-avatar slot=\"end\">\n          <img [src]=\"video?.teacher['picture']\" />\n        </ion-avatar>\n        <ion-label slot=\"end\">{{ video?.teacher[\"name\"] }}</ion-label>\n      </ion-item>\n    </div>\n\n    <div [innerHtml]=\"video?.description\"></div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 85104:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/jobs/jobs.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar *ngIf=\"me && !loading\" project=\"job-portal\"></spica-menu-bar>\n<ion-header *ngIf=\"me && !loading\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-back-button></ion-back-button> -->\n    </ion-buttons>\n    <ion-title>Jobs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"me && !loading\">\n    <ion-item (click)=\"presentFilterModal()\" lines=\"none\">\n      <ion-label slot=\"end\">Filter</ion-label>\n      <ion-icon slot=\"end\" name=\"funnel-outline\"></ion-icon>\n    </ion-item>\n    <ng-container *ngFor=\"let job of jobs\">\n      <job-card [job]=\"job\"></job-card>\n    </ng-container>\n  </div>\n  <spica-authorization\n    *ngIf=\"!me && !loading\"\n    (clickLogin)=\"login($event)\"\n    (clickRegister)=\"register($event)\"\n  ></spica-authorization>\n</ion-content>\n<ion-spinner\n  *ngIf=\"loading && !me\"\n  class=\"spinner-center-page\"\n  name=\"crescent\"\n></ion-spinner>\n");

/***/ }),

/***/ 64148:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/job-portal/pages/profile/profile.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<spica-menu-bar project=\"job-portal\"></spica-menu-bar>\n<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"user?._id!=me?._id\" slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <spica-user-profile-picture\n    *ngIf=\"!isLoading\"\n    [imageEditable]=\"user?._id==me?._id\"\n    (changeImage)=\"imageChange($event)\"\n    [image]=\"me?.profile_picture\"\n  ></spica-user-profile-picture>\n  <spica-item-list\n    *ngIf=\"listItems.length>0  && !isLoading\"\n    [items]=\"listItems\"\n    (logout)=\"logout()\"\n  ></spica-item-list>\n  <ion-spinner\n    *ngIf=\"isLoading\"\n    class=\"spinner-center-page\"\n    name=\"crescent\"\n  ></ion-spinner>\n</ion-content>\n");

/***/ }),

/***/ 27321:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rent-a-car/components/rent/rent.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div [formGroup]=\"rentForm\">\n  <ion-buttons (click)=\"dismiss()\" *ngIf=\"carId\">\n    <ion-icon slot=\"start\" name=\"close-outline\"></ion-icon>\n  </ion-buttons>\n\n  <ion-card>\n    <ion-item lines=\"none\">\n      <ion-label>\n        <ion-icon name=\"location-sharp\"></ion-icon><span>Office to Take</span>\n      </ion-label>\n      <ion-select mode=\"ios\" formControlName=\"office_to_take\">\n        <ion-select-option *ngFor=\"let offices of office\" [value]=\"offices._id\">{{offices.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        <ion-icon name=\"location-sharp\"></ion-icon><span>Office to be Given</span>\n      </ion-label>\n      <ion-select mode=\"ios\" [disabled]=\"!rentForm.value.office_to_take\" formControlName=\"office_to_be_given\">\n        <ion-select-option *ngFor=\"let offices of office\" [value]=\"offices._id\">{{offices.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"datetime-local\" (ionChange)=\"calculate()\" [min]=\"today\" formControlName=\"start\" placeholder=\"Pick up Date\">\n      </ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"datetime-local\" (ionChange)=\"calculate()\" [disabled]=\"!rentForm.value.start\" formControlName=\"end\" placeholder=\"Down Date\" [min]=\"rentForm.value.start\">\n      </ion-input>\n    </ion-item>\n    <section>\n      <ion-button mode=\"ios\" color=\"dark\" [disabled]=\"rentForm.invalid\" expand=\"block\" (click)=\"navigate()\">Make a Reservation</ion-button>\n    </section>\n  </ion-card>\n  <ion-card *ngIf=\"carId\">\n    <img [src]=\"car?.images[0]\">\n  </ion-card>\n</div>");

/***/ })

}]);
//# sourceMappingURL=common.js.map