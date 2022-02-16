(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_music-streaming_pages_library_library_module_ts"],{

/***/ 44686:
/*!*************************************************************************!*\
  !*** ./src/app/music-streaming/pages/library/library-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPageRoutingModule": () => (/* binding */ LibraryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.page */ 71515);




const routes = [
    {
        path: '',
        component: _library_page__WEBPACK_IMPORTED_MODULE_0__.LibraryPage
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_pages_list_list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../list/list.module */ 10515)).then(m => m.ListPageModule)
    },
];
let LibraryPageRoutingModule = class LibraryPageRoutingModule {
};
LibraryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LibraryPageRoutingModule);



/***/ }),

/***/ 78319:
/*!*****************************************************************!*\
  !*** ./src/app/music-streaming/pages/library/library.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPageModule": () => (/* binding */ LibraryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _library_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library-routing.module */ 44686);
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.page */ 71515);
/* harmony import */ var _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/music-components.module */ 25661);








let LibraryPageModule = class LibraryPageModule {
};
LibraryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _library_routing_module__WEBPACK_IMPORTED_MODULE_0__.LibraryPageRoutingModule,
            _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__.MusicStreamingComponentModule
        ],
        declarations: [_library_page__WEBPACK_IMPORTED_MODULE_1__.LibraryPage]
    })
], LibraryPageModule);



/***/ }),

/***/ 71515:
/*!***************************************************************!*\
  !*** ./src/app/music-streaming/pages/library/library.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPage": () => (/* binding */ LibraryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_library_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./library.page.html */ 62837);
/* harmony import */ var _library_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.page.scss */ 42231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bucket */ 36997);
/* harmony import */ var _components_create_play_list_create_play_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/create-play-list/create-play-list.component */ 34333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/followable-modal/followable-modal.component */ 60240);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/environment */ 58206);











let LibraryPage = class LibraryPage {
    constructor(_authService, _modalController, _router, _alertController) {
        this._authService = _authService;
        this._modalController = _modalController;
        this._router = _router;
        this._alertController = _alertController;
        this.playLists = [];
        this.defaultImage = _services_environment__WEBPACK_IMPORTED_MODULE_6__.environment.user_img;
        this.isLoading = true;
        this._authService.initBucket();
    }
    ionViewWillEnter() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = (_a = (yield this._authService.getUser().toPromise())) === null || _a === void 0 ? void 0 : _a._id;
            yield this.getUser();
            this.playLists = (yield this.getPlayLists());
            this.isLoading = false;
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.get(this.userId, {
                queryParams: { relation: true },
            });
        });
    }
    createPlayListModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_create_play_list_create_play_list_component__WEBPACK_IMPORTED_MODULE_4__.CreatePlayListComponent,
            });
            modal.onWillDismiss().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (!res.data) {
                    return;
                }
                let newPlaylist = yield this.createPlayList(res.data.title);
                this.playLists.push(newPlaylist);
            }));
            return yield modal.present();
        });
    }
    createPlayList(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.playlist.insert({
                name: name,
                owner: this.user._id,
            });
        });
    }
    getPlayLists() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_3__.playlist.getAll({ queryParams: { filter: { owner: this.user._id } } })
            .catch((err) => console.log(err));
    }
    navigateToList(id) {
        this._router.navigate([`/music-streaming/tabs/library/list/${id}`], {
            queryParams: { type: 'playList' },
        });
    }
    itemClicked(event, id) {
        if (event == 'action') {
            this.presentAlert(id);
        }
    }
    presentAlert(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                message: 'Are you sure you want to unfollow?',
                buttons: [
                    'Cancel',
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.unfolowArtist(id);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    unfolowArtist(id) {
        this.user.followed_artists = this.user.followed_artists.filter((artist) => {
            return artist['_id'] != id;
        });
        _services_bucket__WEBPACK_IMPORTED_MODULE_3__.user.patch({
            _id: this.user._id,
            followed_artists: this.user.followed_artists,
        });
    }
    followableModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_5__.FollowableModalComponent,
                componentProps: {
                    type: 'artist',
                },
            });
            modal.onWillDismiss().then((res) => {
                if (!res.data) {
                    return;
                }
                this.getUser();
            });
            return yield modal.present();
        });
    }
};
LibraryPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
LibraryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-library',
        template: _raw_loader_library_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_library_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LibraryPage);



/***/ }),

/***/ 42231:
/*!*****************************************************************!*\
  !*** ./src/app/music-streaming/pages/library/library.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-toolbar {\n  padding: 0 10px;\n}\n:host ion-toolbar ion-icon {\n  font-size: 28px;\n}\n:host ion-content .container {\n  padding: 15px;\n  margin-bottom: 70px;\n}\n:host ion-content .container .artist-item::ng-deep .action-icon {\n  color: #aa0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnJhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQUFKO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFJSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZOO0FBTVU7RUFDRSxjQUFBO0FBSloiLCJmaWxlIjoibGlicmFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuXG4gICAgICAuYXJ0aXN0LWl0ZW0ge1xuICAgICAgICAmOjpuZy1kZWVwIHtcbiAgICAgICAgICAuYWN0aW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzAsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 62837:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/pages/library/library.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-avatar [routerLink]=\"['/music-streaming/profile']\" slot=\"start\">\n      <img [src]=\"user && user['profile_picture'] ||  defaultImage \" />\n    </ion-avatar>\n    <ion-title>Library</ion-title>\n    <ion-icon slot=\"end\" name=\"add\" (click)=\"createPlayListModal()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\" *ngIf=\"user\">\n    <music-list-item\n      *ngFor=\"let playList of playLists\"\n      lines=\"none\"\n      (click)=\"navigateToList(playList._id)\"\n      [data]=\"{\n      image: playList.image,\n      avatarIcon: 'musical-notes-outline',\n      title: playList.name,\n      subTitle: 'Play list | ' + user.username\n    }\"\n    >\n    </music-list-item>\n\n    <music-list-item\n      *ngFor=\"let artist of user.followed_artists || []\"\n      [data]=\"{\n      image: artist['profile_picture'],\n      title: artist['name'],\n      subTitle: 'Artist',\n      actionIcon: 'remove-circle-outline',\n      isCircle: true\n    }\"\n      class=\"artist-item\"\n      (clickAction)=\"itemClicked($event, artist['_id'])\"\n    >\n    </music-list-item>\n\n    <music-list-item\n      [data]=\"{\n      avatarIcon: 'add',\n      title: 'Add Followed Artist',\n      isCircle: true\n    }\"\n      (clickAction)=\"followableModal()\"\n    >\n    </music-list-item>\n  </div>\n  <ion-spinner class=\"spinner-center-page\" *ngIf=\"isLoading\"></ion-spinner>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_music-streaming_pages_library_library_module_ts.js.map