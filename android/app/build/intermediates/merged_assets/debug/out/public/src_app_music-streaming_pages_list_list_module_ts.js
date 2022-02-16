(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_music-streaming_pages_list_list_module_ts"],{

/***/ 21775:
/*!*******************************************************************!*\
  !*** ./src/app/music-streaming/pages/list/list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageRoutingModule": () => (/* binding */ ListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page */ 62080);




const routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: _list_page__WEBPACK_IMPORTED_MODULE_0__.ListPage,
            },
        ],
    },
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListPageRoutingModule);



/***/ }),

/***/ 10515:
/*!***********************************************************!*\
  !*** ./src/app/music-streaming/pages/list/list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPageModule": () => (/* binding */ ListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-routing.module */ 21775);
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ 62080);
/* harmony import */ var _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/music-components.module */ 25661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);








let ListPageModule = class ListPageModule {
};
ListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListPageRoutingModule,
            _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__.MusicStreamingComponentModule
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_1__.ListPage]
    })
], ListPageModule);



/***/ }),

/***/ 62080:
/*!*********************************************************!*\
  !*** ./src/app/music-streaming/pages/list/list.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListPage": () => (/* binding */ ListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list.page.html */ 73332);
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page.scss */ 52208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/followable-modal/followable-modal.component */ 60240);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/audio.service */ 26187);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bucket */ 36997);
/* harmony import */ var _services_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/environment */ 58206);











let ListPage = class ListPage {
    constructor(_authService, _route, _audioService, _modalController, _alertController, _router) {
        this._authService = _authService;
        this._route = _route;
        this._audioService = _audioService;
        this._modalController = _modalController;
        this._alertController = _alertController;
        this._router = _router;
        this.tracks = [];
        this.defaultImage = _services_environment__WEBPACK_IMPORTED_MODULE_6__.environment.user_img;
        this._authService.initBucket();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.paramId = this._route.snapshot.params.id;
            this.manageData();
        });
    }
    manageData() {
        this._route.queryParams.subscribe((param) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (param.type == 'musicKind') {
                this.kind = yield this.getKind();
                this.tracks = yield this.getTracksByKind();
            }
            else if (param.type == 'artist') {
                this.artist = yield this.getArtist();
                this.tracks = this.artist.uploaded_tracks;
            }
            else if (param.type == 'playList') {
                this.playList = yield this.getPlayList();
                this.tracks = this.playList.tracks;
            }
        }));
    }
    getArtist() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_5__.artist.get(this.paramId, {
            queryParams: { relation: ['uploaded_tracks.artist'] },
        });
    }
    getKind() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_5__.track_kind.get(this.paramId);
    }
    getTracksByKind() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_5__.track.getAll({
            queryParams: { filter: { kinds: { $in: [this.paramId] } } },
        });
    }
    getPlayList() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_5__.playlist.get(this.paramId, {
            queryParams: { relation: true },
        });
    }
    setTrack(track) {
        this._audioService.setTrack(track);
    }
    itemClicked(event, track) {
        if (event == 'action' && this.playList) {
            this.tracks = this.tracks.filter((el) => {
                return el._id != track._id;
            });
            _services_bucket__WEBPACK_IMPORTED_MODULE_5__.playlist.patch({
                _id: this.playList._id,
                tracks: this.tracks,
            });
        }
        else {
            this.setTrack(track);
        }
    }
    followableModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_2__.FollowableModalComponent,
                componentProps: {
                    type: 'track',
                    playListId: this.paramId,
                },
            });
            modal.onWillDismiss().then((res) => {
                if (!res.data) {
                    return;
                }
                this.manageData();
            });
            return yield modal.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this._alertController.create({
                message: 'Are you sure you want to remove play list?',
                buttons: [
                    'Cancel',
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.removePlayList();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    removePlayList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _services_bucket__WEBPACK_IMPORTED_MODULE_5__.playlist.remove(this.playList._id);
            this._router.navigate([`/music-streaming/tabs/library`]);
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_3__.AudioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-list',
        template: _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListPage);



/***/ }),

/***/ 52208:
/*!***********************************************************!*\
  !*** ./src/app/music-streaming/pages/list/list.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-header ion-toolbar ion-icon {\n  font-size: 1.2rem;\n  color: #aa0000;\n}\n:host .metadata {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n}\n:host .metadata ::ng-deep .part-item {\n  width: 80% !important;\n  height: 80% !important;\n  box-shadow: 0px 0px 12px 2px #505050 !important;\n}\n:host .metadata .info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  padding: 15px;\n}\n:host .metadata .info ion-text {\n  margin-bottom: 5px;\n}\n:host .metadata .info ion-text span {\n  font-weight: 700;\n}\n:host .metadata.kind {\n  position: relative;\n}\n:host .metadata.kind img {\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n}\n:host .metadata.kind ion-text {\n  position: absolute;\n  font-size: 20px;\n  font-weight: 700;\n  bottom: 15px;\n}\n:host .list {\n  padding: 0 15px;\n  margin-bottom: 70px;\n}\n:host .list::ng-deep .action-icon {\n  color: #aa0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFNRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFPTTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQ0FBQTtBQUxSO0FBU0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFQTjtBQVNNO0VBQ0Usa0JBQUE7QUFQUjtBQVFRO0VBQ0UsZ0JBQUE7QUFOVjtBQVdJO0VBQ0Usa0JBQUE7QUFUTjtBQVVNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVJSO0FBVU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFSUjtBQWFFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBWEo7QUFhTTtFQUNFLGNBQUE7QUFYUiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHJnYigxNzAsIDAsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubWV0YWRhdGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgLnBhcnQtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDJweCByZ2IoODAsIDgwLCA4MCkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcblxuICAgICAgaW9uLXRleHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmtpbmQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgICAgaW9uLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5saXN0IHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAmOjpuZy1kZWVwIHtcbiAgICAgIC5hY3Rpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiByZ2IoMTcwLCAwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 73332:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/pages/list/list.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-icon *ngIf=\"playList\" name=\"trash\" slot=\"end\" (click)=\"presentAlert()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"tracks\">\n  <div class=\"metadata artist\" *ngIf=\"artist\">\n    <music-part-item\n      [data]=\"{img: artist['profile_picture'], text: artist['name']}\"\n    ></music-part-item>\n    <div class=\"info\">\n      <ion-text>Prepared for <span>user</span></ion-text>\n    </div>\n  </div>\n\n  <div class=\"metadata kind\" *ngIf=\"kind || playList\">\n    <ng-container *ngIf=\"kind\">\n      <img [src]=\"kind.image\" />\n      <ion-text>{{kind.title}}</ion-text>\n    </ng-container>\n    <ng-container *ngIf=\"playList\">\n      <img [src]=\"playList.image || defaultImage\" />\n      <ion-text>{{playList.name}}</ion-text>\n    </ng-container>\n  </div>\n\n  <div class=\"list\">\n    <music-list-item\n      *ngIf=\"playList\"\n      [data]=\"{\n      avatarIcon: 'add',\n      title: 'Add new track',\n      isCircle: true\n    }\"\n      (click)=\"followableModal()\"\n    ></music-list-item>\n    <music-list-item\n      [data]=\"{\n      image: track.cover,\n      title: track.name,\n      actionIcon: playList ? 'remove-circle-outline' : undefined,\n      subTitle: track.artist['name']\n    }\"\n      *ngFor=\"let track of tracks\"\n      (clickAction)=\"itemClicked($event, track)\"\n    ></music-list-item>\n  </div>\n</ng-container>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_music-streaming_pages_list_list_module_ts.js.map