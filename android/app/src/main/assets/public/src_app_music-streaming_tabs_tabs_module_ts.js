(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["src_app_music-streaming_tabs_tabs_module_ts"],{

/***/ 34333:
/*!*******************************************************************************************!*\
  !*** ./src/app/music-streaming/components/create-play-list/create-play-list.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePlayListComponent": () => (/* binding */ CreatePlayListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_create_play_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./create-play-list.component.html */ 72278);
/* harmony import */ var _create_play_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-play-list.component.scss */ 54757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 19122);





let CreatePlayListComponent = class CreatePlayListComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.title = '';
    }
    ngOnInit() { }
    apply() {
        this._modal.dismiss({ title: this.title });
    }
    cancel() {
        this._modal.dismiss();
    }
};
CreatePlayListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
CreatePlayListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'create-play-list',
        template: _raw_loader_create_play_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_play_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CreatePlayListComponent);



/***/ }),

/***/ 60240:
/*!*******************************************************************************************!*\
  !*** ./src/app/music-streaming/components/followable-modal/followable-modal.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowableModalComponent": () => (/* binding */ FollowableModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_followable_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./followable-modal.component.html */ 74878);
/* harmony import */ var _followable_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followable-modal.component.scss */ 54805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bucket */ 36997);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 19122);







let FollowableModalComponent = class FollowableModalComponent {
    constructor(_authService, _modalController) {
        this._authService = _authService;
        this._modalController = _modalController;
        this.artists = [];
        this.tracks = [];
        this.selectedData = [];
        this.isLoading = true;
        this.type = 'artist';
        this.playListId = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this._authService.initBucket();
            this.user = yield this.getUser();
            if (this.type == 'artist') {
                this.artists = yield this.getArtists();
            }
            else {
                this.playList = yield this.getPlayList();
                this.tracks = yield this.getTracks();
            }
            this.isLoading = false;
        });
    }
    getUser() {
        return this._authService.getUser(true).toPromise();
    }
    getArtists() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.artist.getAll({
            queryParams: {
                filter: {
                    _id: { $nin: this.user.followed_artists || [] },
                },
            },
        });
    }
    getTracks() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.track.getAll({
            queryParams: {
                filter: {
                    _id: { $nin: this.playList.tracks || [] },
                },
            },
        });
    }
    selectData(id) {
        if (this.selectedData.includes(id)) {
            this.selectedData = this.selectedData.filter((el) => {
                return el != id;
            });
        }
        else {
            this.selectedData.push(id);
        }
    }
    getPlayList() {
        return _services_bucket__WEBPACK_IMPORTED_MODULE_2__.playlist.get(this.playListId);
    }
    search(terms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.type == 'artist') {
                this.artists = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.artist.getAll({
                    queryParams: {
                        filter: {
                            name: { $regex: terms, $options: 'i' },
                            _id: { $nin: this.user.followed_artists || [] },
                        },
                        limit: 10,
                    },
                });
            }
            else if (this.type == 'track') {
                this.tracks = yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.track.getAll({
                    queryParams: {
                        filter: {
                            name: { $regex: terms, $options: 'i' },
                            _id: { $nin: this.playList.tracks || [] },
                        },
                        limit: 10,
                    },
                });
            }
        });
    }
    apply() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.selectedData.length) {
                if (this.type == 'artist') {
                    this.user.followed_artists = this.user.followed_artists || [];
                    let newArr = this.user.followed_artists.concat(this.selectedData);
                    yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.user.patch({
                        _id: this.user._id,
                        followed_artists: newArr,
                    });
                }
                else if (this.type == 'track') {
                    this.playList.tracks = this.playList.tracks || [];
                    let newArr = this.playList.tracks.concat(this.selectedData);
                    yield _services_bucket__WEBPACK_IMPORTED_MODULE_2__.playlist.patch({
                        _id: this.playList._id,
                        tracks: newArr,
                    });
                }
                this._modalController.dismiss({ action: 'updated' });
            }
            else {
                this._modalController.dismiss();
            }
        });
    }
};
FollowableModalComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
FollowableModalComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    playListId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
FollowableModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-followable-modal',
        template: _raw_loader_followable_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_followable_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FollowableModalComponent);



/***/ }),

/***/ 95518:
/*!*****************************************************************************!*\
  !*** ./src/app/music-streaming/components/list-item/list-item.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListItemComponent": () => (/* binding */ ListItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_list_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-item.component.html */ 79791);
/* harmony import */ var _list_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item.component.scss */ 68670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ListItemComponent = class ListItemComponent {
    constructor() {
        this.clickAction = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    clicked(value) {
        this.clickAction.emit(value);
    }
};
ListItemComponent.ctorParameters = () => [];
ListItemComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clickAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
ListItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'music-list-item',
        template: _raw_loader_list_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListItemComponent);



/***/ }),

/***/ 5081:
/*!*********************************************************************************!*\
  !*** ./src/app/music-streaming/components/mini-player/mini-player.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiniPlayerComponent": () => (/* binding */ MiniPlayerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mini_player_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mini-player.component.html */ 74826);
/* harmony import */ var _mini_player_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-player.component.scss */ 4393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let MiniPlayerComponent = class MiniPlayerComponent {
    constructor() {
        this.paused = false;
        this.isLiked = false;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    contentClicked() {
        this.clicked.emit({ action: 'player' });
    }
    likeClicked() {
        this.isLiked = !this.isLiked;
        this.clicked.emit({ action: 'like', value: this.isLiked });
    }
    playClicked() {
        this.clicked.emit({ action: 'play' });
    }
};
MiniPlayerComponent.ctorParameters = () => [];
MiniPlayerComponent.propDecorators = {
    paused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isLiked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    clicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
MiniPlayerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'music-mini-player',
        template: _raw_loader_mini_player_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mini_player_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MiniPlayerComponent);



/***/ }),

/***/ 25661:
/*!***********************************************************************!*\
  !*** ./src/app/music-streaming/components/music-components.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicStreamingComponentModule": () => (/* binding */ MusicStreamingComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _mini_player_mini_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mini-player/mini-player.component */ 5081);
/* harmony import */ var _part_item_part_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./part-item/part-item.component */ 19440);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item/list-item.component */ 95518);
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.component */ 87523);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/duration-format.pipe */ 48592);
/* harmony import */ var _type_card_type_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-card/type-card.component */ 20082);
/* harmony import */ var _create_play_list_create_play_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-play-list/create-play-list.component */ 34333);
/* harmony import */ var _followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./followable-modal/followable-modal.component */ 60240);















let MusicStreamingComponentModule = class MusicStreamingComponentModule {
};
MusicStreamingComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _mini_player_mini_player_component__WEBPACK_IMPORTED_MODULE_0__.MiniPlayerComponent,
            _part_item_part_item_component__WEBPACK_IMPORTED_MODULE_1__.PartItemComponent,
            _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__.ListItemComponent,
            _player_player_component__WEBPACK_IMPORTED_MODULE_3__.PlayerComponent,
            _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_4__.DurationFormatPipe,
            _type_card_type_card_component__WEBPACK_IMPORTED_MODULE_5__.TypeCardComponent,
            _create_play_list_create_play_list_component__WEBPACK_IMPORTED_MODULE_6__.CreatePlayListComponent,
            _followable_modal_followable_modal_component__WEBPACK_IMPORTED_MODULE_7__.FollowableModalComponent
        ],
        exports: [
            _mini_player_mini_player_component__WEBPACK_IMPORTED_MODULE_0__.MiniPlayerComponent,
            _part_item_part_item_component__WEBPACK_IMPORTED_MODULE_1__.PartItemComponent,
            _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__.ListItemComponent,
            _player_player_component__WEBPACK_IMPORTED_MODULE_3__.PlayerComponent,
            _type_card_type_card_component__WEBPACK_IMPORTED_MODULE_5__.TypeCardComponent,
            _create_play_list_create_play_list_component__WEBPACK_IMPORTED_MODULE_6__.CreatePlayListComponent
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule],
    })
], MusicStreamingComponentModule);



/***/ }),

/***/ 19440:
/*!*****************************************************************************!*\
  !*** ./src/app/music-streaming/components/part-item/part-item.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartItemComponent": () => (/* binding */ PartItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_part_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./part-item.component.html */ 67248);
/* harmony import */ var _part_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./part-item.component.scss */ 32103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let PartItemComponent = class PartItemComponent {
    constructor() {
        this.isCircle = false;
    }
    ngOnInit() {
    }
};
PartItemComponent.ctorParameters = () => [];
PartItemComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    isCircle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PartItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'music-part-item',
        template: _raw_loader_part_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_part_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PartItemComponent);



/***/ }),

/***/ 87523:
/*!***********************************************************************!*\
  !*** ./src/app/music-streaming/components/player/player.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerComponent": () => (/* binding */ PlayerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_player_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./player.component.html */ 22217);
/* harmony import */ var _player_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.component.scss */ 52275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/audio.service */ 26187);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 38056);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/event.service */ 42993);









let PlayerComponent = class PlayerComponent {
    constructor(audioService, _modalController, _eventService, _router, _authService) {
        this.audioService = audioService;
        this._modalController = _modalController;
        this._eventService = _eventService;
        this._router = _router;
        this._authService = _authService;
        this.track = this.audioService.getTrack();
        this.paused = false;
        this.currentTime = 0;
        this.isShuffle = false;
        this.isReplay = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (localStorage.getItem('shuffle') == 'true') {
                this.isShuffle = true;
            }
            if (localStorage.getItem('replay') == 'true') {
                this.isReplay = true;
            }
            this.currentTime = this.audioService.currentTime();
            if (!this.audioService.paused()) {
                this.startTimer();
            }
            yield this.getUser();
        });
    }
    startTimer() {
        this.currentTimeIntervel = setInterval(() => {
            if (this.currentTime == Math.floor(this.audioService.duration() - 2)) {
                if (localStorage.getItem('replay') == 'true') {
                    this.setTime(0);
                }
                else {
                    this.action('next');
                }
            }
            this.currentTime += 1;
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.currentTimeIntervel);
    }
    hide() {
        this.stopTimer();
        this._modalController.dismiss();
    }
    action(value) {
        var _a;
        this._eventService.publish(value);
        if (value == 'play') {
            if (this.audioService.paused()) {
                this.stopTimer();
            }
            else {
                this.startTimer();
            }
        }
        if (value == 'prev' || value == 'next') {
            this.stopTimer();
            this.setTime(0);
            if (!this.audioService.paused()) {
                this.startTimer();
            }
            this.track = this.audioService.getTrack();
            if ((_a = this.user.liked_tracks) === null || _a === void 0 ? void 0 : _a.includes(this.track._id)) {
                this.isLiked = true;
            }
            else {
                this.isLiked = false;
            }
        }
        if (value == 'shuffle') {
            this.isShuffle = !this.isShuffle;
            localStorage.setItem('shuffle', String(this.isShuffle));
        }
        if (value == 'replay') {
            this.isReplay = !this.isReplay;
            localStorage.setItem('replay', String(this.isReplay));
        }
        if (value == 'like') {
            this.isLiked = !this.isLiked;
        }
    }
    setTime(value) {
        this.currentTime = value;
        this.audioService.setTime(value);
    }
    goToList() {
        this._router.navigate([
            `/music-streaming/tabs/${this._router.url.split('/')[3]}/list/${this.track.artist}`,
        ], { queryParams: { type: 'artist' } });
        this._modalController.dismiss();
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
        });
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_2__.AudioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
PlayerComponent.propDecorators = {
    isLiked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
PlayerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'music-player',
        template: _raw_loader_player_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_player_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlayerComponent);



/***/ }),

/***/ 20082:
/*!*****************************************************************************!*\
  !*** ./src/app/music-streaming/components/type-card/type-card.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeCardComponent": () => (/* binding */ TypeCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_type_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./type-card.component.html */ 87872);
/* harmony import */ var _type_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-card.component.scss */ 28871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let TypeCardComponent = class TypeCardComponent {
    constructor() { }
    ngOnInit() { }
};
TypeCardComponent.ctorParameters = () => [];
TypeCardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TypeCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'type-card',
        template: _raw_loader_type_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_type_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TypeCardComponent);



/***/ }),

/***/ 48592:
/*!***************************************************************!*\
  !*** ./src/app/music-streaming/pipes/duration-format.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DurationFormatPipe": () => (/* binding */ DurationFormatPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let DurationFormatPipe = class DurationFormatPipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
    }
};
DurationFormatPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'durationFormat'
    })
], DurationFormatPipe);



/***/ }),

/***/ 26187:
/*!***********************************************************!*\
  !*** ./src/app/music-streaming/services/audio.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioService": () => (/* binding */ AudioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let AudioService = class AudioService {
    constructor() {
        this.audio = new Audio();
    }
    setTrack(track) {
        let paused = this.paused();
        this.track = track;
        this.audio.src = this.track.source;
        this.checkAndPlay(paused);
    }
    getTrack() {
        return this.track;
    }
    play() {
        this.audio.play();
    }
    pause() {
        this.audio.pause();
    }
    paused() {
        return this.audio.paused;
    }
    duration() {
        return this.audio.duration;
    }
    currentTime() {
        return this.audio.currentTime;
    }
    setTime(value) {
        this.audio.currentTime = value;
    }
    checkAndPlay(paused) {
        if (paused) {
            return;
        }
        this.play();
    }
};
AudioService.ctorParameters = () => [];
AudioService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], AudioService);



/***/ }),

/***/ 42993:
/*!***********************************************************!*\
  !*** ./src/app/music-streaming/services/event.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);



let EventService = class EventService {
    constructor() {
        this.$event = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    }
    publish(value) {
        this.$event.next(value);
    }
};
EventService.ctorParameters = () => [];
EventService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ 89029:
/*!*************************************************************!*\
  !*** ./src/app/music-streaming/tabs/tabs-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 95236);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/home/home.module */ 86088)).then(m => m.HomePageModule)
            },
            {
                path: 'search',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_pages_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/search/search.module */ 54763)).then(m => m.SearchPageModule)
            },
            {
                path: 'library',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_music-streaming_pages_library_library_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/library/library.module */ 78319)).then(m => m.LibraryPageModule)
            },
        ]
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 51353:
/*!*****************************************************!*\
  !*** ./src/app/music-streaming/tabs/tabs.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 89029);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 95236);
/* harmony import */ var _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/music-components.module */ 25661);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _components_music_components_module__WEBPACK_IMPORTED_MODULE_2__.MusicStreamingComponentModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 95236:
/*!***************************************************!*\
  !*** ./src/app/music-streaming/tabs/tabs.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7276);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 45822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 19122);
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/player/player.component */ 87523);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/audio.service */ 26187);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 38056);
/* harmony import */ var _services_bucket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/bucket */ 36997);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/event.service */ 42993);











let TabsPage = class TabsPage {
    constructor(audioService, _modalController, _authService, _eventService, _router) {
        this.audioService = audioService;
        this._modalController = _modalController;
        this._authService = _authService;
        this._eventService = _eventService;
        this._router = _router;
        this.tracks = [];
        this.defaultTracks = [];
        this.shuffledTracks = [];
        this.trackIndex = 0;
        this.currentTime = 0;
        this.currentDuration = 0;
        this._authService.initBucket();
    }
    checkUserLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            if (!this.user) {
                this._router.navigate(['/music-streaming/authorization'], {
                    replaceUrl: true,
                });
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this._authService.getUser().toPromise();
            if (this.user) {
                yield this.getTarcks();
                this.audioService.setTrack(this.tracks[this.trackIndex]);
                this._eventService.$event.subscribe((action) => {
                    this.audioControl(action);
                });
            }
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.checkUserLogin();
        });
    }
    showPlayer() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this._modalController.create({
                component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_2__.PlayerComponent,
                cssClass: 'my-custom-class',
                componentProps: {
                    isLiked: (_a = this.user.liked_tracks) === null || _a === void 0 ? void 0 : _a.includes(this.audioService.getTrack()._id),
                },
            });
            modal.onWillDismiss().then((res) => {
                if (!res.data) {
                    return;
                }
            });
            return yield modal.present();
        });
    }
    playerClicked(event) {
        if (event.action == 'player') {
            this.showPlayer();
        }
        else if (event.action == 'play') {
            this.playPause();
        }
        else if (event.action == 'like') {
            this.changeLike();
        }
    }
    changeLike() {
        var _a;
        let trackId = this.audioService.getTrack()._id;
        this.user.liked_tracks = this.user.liked_tracks || [];
        if ((_a = this.user.liked_tracks) === null || _a === void 0 ? void 0 : _a.includes(trackId)) {
            this.user.liked_tracks = this.user.liked_tracks.filter((el) => {
                el != trackId;
            });
        }
        else {
            this.user.liked_tracks.push(trackId);
        }
        _services_bucket__WEBPACK_IMPORTED_MODULE_5__.user.patch({
            _id: this.user._id,
            liked_tracks: this.user.liked_tracks,
        });
    }
    getTarcks() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.tracks = yield _services_bucket__WEBPACK_IMPORTED_MODULE_5__.track.getAll();
            this.defaultTracks = this.tracks;
        });
    }
    audioControl(action) {
        if (action == 'play') {
            this.playPause();
        }
        else if (action == 'next' && this.trackIndex + 1 < this.tracks.length) {
            this.stopTimer();
            this.trackIndex = this.trackIndex + 1;
            this.audioService.setTrack(this.tracks[this.trackIndex]);
            setTimeout(() => {
                if (!this.audioService.paused()) {
                    this.startTimer();
                }
            }, 1000);
        }
        else if (action == 'prev' && this.trackIndex > 0) {
            this.stopTimer();
            this.trackIndex = this.trackIndex - 1;
            this.audioService.setTrack(this.tracks[this.trackIndex]);
            setTimeout(() => {
                if (!this.audioService.paused()) {
                    this.startTimer();
                }
            }, 1000);
        }
        else if (action == 'shuffle') {
            this.shuffle();
        }
        else if (action == 'like') {
            this.changeLike();
        }
    }
    playPause() {
        if (this.audioService.paused()) {
            this.startTimer();
            this.audioService.play();
        }
        else {
            this.stopTimer();
            this.audioService.pause();
        }
    }
    shuffle() {
        if (localStorage.getItem('shuffle') != 'true') {
            this.shuffledTracks = JSON.parse(JSON.stringify(this.tracks));
            this.tracks = this.shuffledTracks.sort((a, b) => 0.5 - Math.random());
        }
        else {
            this.tracks = this.defaultTracks;
        }
    }
    startTimer() {
        this.currentDuration = Math.floor(this.audioService.duration()) - 1;
        this.currentTimeIntervel = setInterval(() => {
            this.currentTime = Math.floor(this.audioService.currentTime());
            if (this.currentDuration == this.currentTime) {
                if (localStorage.getItem('replay') == 'true') {
                    this.audioService.setTime(0);
                }
                else {
                    this.audioControl('next');
                }
            }
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.currentTimeIntervel);
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_3__.AudioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_6__.EventService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 54757:
/*!*********************************************************************************************!*\
  !*** ./src/app/music-streaming/components/create-play-list/create-play-list.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(0deg, #202020 10%, #bbbbbb 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n:host .container ion-input {\n  flex: unset;\n  width: 85%;\n  border-bottom: 1px solid white;\n  font-size: 45px;\n  text-align: center;\n  margin: 30px 0;\n}\n:host .container .title {\n  font-size: 20px;\n  font-weight: 700;\n}\n:host .container .buttons {\n  margin-top: 10px;\n  display: flex;\n}\n:host .container .buttons .cancel {\n  margin-right: 20px;\n}\n:host .container .buttons .apply {\n  color: #00cc00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wbGF5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBTUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMSjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMTjtBQVFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBTk47QUFTSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQVBOO0FBUU07RUFDRSxrQkFBQTtBQU5SO0FBUU07RUFDRSxjQUFBO0FBTlIiLCJmaWxlIjoiY3JlYXRlLXBsYXktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMGRlZyxcbiAgICAgIHJnYigzMiwgMzIsIDMyKSAxMCUsXG4gICAgICByZ2IoMTg3LCAxODcsIDE4NykgMTAwJVxuICAgICk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgZmxleDogdW5zZXQ7XG4gICAgICB3aWR0aDogODUlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAuY2FuY2VsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgICAgLmFwcGx5IHtcbiAgICAgICAgY29sb3I6IHJnYigwLCAyMDQsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 54805:
/*!*********************************************************************************************!*\
  !*** ./src/app/music-streaming/components/followable-modal/followable-modal.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host .container {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(0deg, #202020 10%, #bbbbbb 100%);\n  color: white;\n  padding: 15px;\n}\n:host .container h3 {\n  font-weight: 800;\n}\n:host .container .artists-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  overflow: scroll;\n  position: relative;\n}\n:host .container .artists-container music-part-item::ng-deep .part-item {\n  width: calc(100vw * 0.28) !important;\n  height: calc(100vw * 0.28) !important;\n  max-width: 105px;\n  max-height: 105px;\n  border-radius: 100% !important;\n  overflow: hidden;\n  margin-top: 20px;\n}\n:host .container .artists-container music-part-item::ng-deep ion-text {\n  width: calc(100vw * 0.28);\n  max-width: 105px;\n  color: rgba(255, 255, 255, 0.897) !important;\n}\n:host .container .artists-container music-part-item.selected::ng-deep img {\n  border: 2px solid #ff7600;\n}\n:host .container ion-button {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvd2FibGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBTUEsWUFBQTtFQUNBLGFBQUE7QUFMSjtBQU9JO0VBQ0UsZ0JBQUE7QUFMTjtBQVFJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUFQTjtBQVdVO0VBQ0Usb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFUWjtBQVdVO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBVFo7QUFlWTtFQUNFLHlCQUFBO0FBYmQ7QUFtQkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFqQk4iLCJmaWxlIjoiZm9sbG93YWJsZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDBkZWcsXG4gICAgICByZ2IoMzIsIDMyLCAzMikgMTAlLFxuICAgICAgcmdiKDE4NywgMTg3LCAxODcpIDEwMCVcbiAgICApO1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBoMyB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cblxuICAgIC5hcnRpc3RzLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIC8vIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIG11c2ljLXBhcnQtaXRlbSB7XG4gICAgICAgICY6Om5nLWRlZXAge1xuICAgICAgICAgIC5wYXJ0LWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgKiAwLjI4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3ICogMC4yOCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA1cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAqIDAuMjgpO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDVweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk3KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICY6Om5nLWRlZXAge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmNzYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 68670:
/*!*******************************************************************************!*\
  !*** ./src/app/music-streaming/components/list-item/list-item.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n  padding: 0 10px;\n}\n:host ion-item ion-avatar {\n  width: calc(100vw * 0.15);\n  height: calc(100vw * 0.15);\n  max-width: 55px;\n  max-height: 55px;\n  overflow: hidden;\n  --border-radius: none;\n}\n:host ion-item ion-avatar.avatar-circle {\n  --border-radius: 100%;\n}\n:host ion-item ion-avatar .avatar-icon-box {\n  background: #8f8f8f6b;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n:host ion-item ion-avatar .avatar-icon-box .avatar-icon {\n  font-size: 40px;\n}\n:host ion-item .action-icon {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQU47QUFFTTtFQUNFLHFCQUFBO0FBQVI7QUFHTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDRSxlQUFBO0FBQVY7QUFLSTtFQUNFLGVBQUE7QUFITiIsImZpbGUiOiJsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgKiAwLjE1KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2dyAqIDAuMTUpO1xuICAgICAgbWF4LXdpZHRoOiA1NXB4O1xuICAgICAgbWF4LWhlaWdodDogNTVweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XG5cbiAgICAgICYuYXZhdGFyLWNpcmNsZSB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmF2YXRhci1pY29uLWJveCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4ZjhmOGY2YjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5hdmF0YXItaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 4393:
/*!***********************************************************************************!*\
  !*** ./src/app/music-streaming/components/mini-player/mini-player.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n  padding: 0 10px;\n}\n:host ion-item {\n  height: 100%;\n  --background: rgb(150, 150, 150);\n  --border-radius: 8px;\n  --padding-start: 10px;\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  color: white;\n  position: relative;\n}\n:host ion-item ion-avatar {\n  --border-radius: 8px;\n  width: 42px;\n  height: 42px;\n}\n:host ion-item ion-icon {\n  font-size: 26px;\n  margin-left: 10px;\n}\n:host ion-item .track-line-container {\n  width: calc(100% - 20px);\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  border-bottom: 2px solid #d8d8d8;\n}\n:host ion-item .track-line-container .track-line {\n  width: 49%;\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmktcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVJO0VBQ0Usd0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFBTjtBQUVNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUFSIiwiZmlsZSI6Im1pbmktcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBpb24taXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE1MCwgMTUwLCAxNTApO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgd2lkdGg6IDQycHg7XG4gICAgICBoZWlnaHQ6IDQycHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnRyYWNrLWxpbmUtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIxNiwgMjE2LCAyMTYpO1xuXG4gICAgICAudHJhY2stbGluZSB7XG4gICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 32103:
/*!*******************************************************************************!*\
  !*** ./src/app/music-streaming/components/part-item/part-item.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n:host .part-item {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n:host .part-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n:host .part-item img.circle-img {\n  border-radius: 100% !important;\n}\n:host ion-text {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 5px;\n  z-index: 1;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  text-align: start;\n  font-size: 16px;\n  font-weight: 800;\n  color: white;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n:host ion-text.circle-text {\n  position: relative !important;\n  background: none !important;\n  color: black;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQU07RUFDRSw4QkFBQTtBQUVSO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUdJO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUROIiwiZmlsZSI6InBhcnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnBhcnQtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gICAgICAmLmNpcmNsZS1pbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICYuY2lyY2xlLXRleHQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 52275:
/*!*************************************************************************!*\
  !*** ./src/app/music-streaming/components/player/player.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-toolbar ion-icon {\n  font-size: 26px;\n  padding: 0 20px;\n}\n:host ion-content .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n}\n:host ion-content .container ion-item {\n  --inner-padding-end: 0;\n}\n:host ion-content .container .track-info {\n  color: gray;\n}\n:host ion-content .container .track-info ion-label {\n  display: flex;\n  flex-direction: column;\n}\n:host ion-content .container .track-info ion-label .track-name {\n  color: black;\n  font-size: 22px;\n  font-weight: 500;\n}\n:host ion-content .container .track-info ion-label .atrist {\n  font-size: 16px;\n}\n:host ion-content .container .track-info ion-label ion-icon {\n  font-size: 26px;\n}\n:host ion-content .container .track-line ion-range {\n  --knob-size: 10px;\n  padding: 0 3px;\n  height: 30px;\n}\n:host ion-content .container .track-line .track-duration {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n:host ion-content .container .track-line .track-duration ion-text {\n  color: gray;\n  font-size: 12px;\n}\n:host ion-content .container .track-control {\n  margin: 20px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host ion-content .container .track-control .type-3 {\n  font-size: 70px;\n}\n:host ion-content .container .track-control .type-2 {\n  font-size: 40px;\n}\n:host ion-content .container .track-control .type-1 {\n  font-size: 25px;\n  padding: 5px;\n}\n:host ion-content .container .track-control .type-1.active {\n  border-radius: 12px;\n  background: #e3e3e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRE47QUFNSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FBTE47QUFPTTtFQUNFLHNCQUFBO0FBTFI7QUFRTTtFQUNFLFdBQUE7QUFOUjtBQU9RO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBTFY7QUFPVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQU9VO0VBQ0UsZUFBQTtBQUxaO0FBT1U7RUFDRSxlQUFBO0FBTFo7QUFXUTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFUVjtBQVdRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVRWO0FBV1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVRaO0FBY007RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFjUTtFQUNFLGVBQUE7QUFaVjtBQWVRO0VBQ0UsZUFBQTtBQWJWO0FBZ0JRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFkVjtBQWdCVTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFkWiIsImZpbGUiOiJwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDQ0cHgpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcGFkZGluZzogMjVweDtcblxuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgfVxuXG4gICAgICAudHJhY2staW5mbyB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIC50cmFjay1uYW1lIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdHJpc3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50cmFjay1saW5lIHtcbiAgICAgICAgaW9uLXJhbmdlIHtcbiAgICAgICAgICAtLWtub2Itc2l6ZTogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYWNrLWR1cmF0aW9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudHJhY2stY29udHJvbCB7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC50eXBlLTMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50eXBlLTIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50eXBlLTEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 28871:
/*!*******************************************************************************!*\
  !*** ./src/app/music-streaming/components/type-card/type-card.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  background: red;\n}\n:host .container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n:host .container ion-label {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 2;\n  font-weight: 700;\n  font-size: 18px;\n  color: white;\n}\n:host .container img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNOIiwiZmlsZSI6InR5cGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogcmVkO1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 45822:
/*!*****************************************************!*\
  !*** ./src/app/music-streaming/tabs/tabs.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host music-mini-player {\n  position: absolute;\n  bottom: 60px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtdXNpYy1taW5pLXBsYXllciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNjBweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ 72278:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/create-play-list/create-play-list.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-text class=\"title\">Play List Title</ion-text>\n  <ion-input autofocus [(ngModel)]=\"title\"></ion-input>\n\n  <div class=\"buttons\">\n    <div class=\"cancel\" (click)=\"cancel()\">CANCEL</div>\n    <div class=\"apply\" (click)=\"apply()\">APPLY</div>\n  </div>\n</div>");

/***/ }),

/***/ 74878:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/followable-modal/followable-modal.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <h3>{{ type == \"artist\" ? \"Followable Artist\" : \"Addable Tracks\" }}</h3>\n  <ion-searchbar\n    mode=\"ios\"\n    [debounce]=\"800\"\n    (ionChange)=\"search($event.target['value'])\"\n    [(ngModel)]=\"searchTerm\"\n  ></ion-searchbar>\n\n  <div class=\"artists-container\">\n    <ion-spinner class=\"spinner-center-page\" *ngIf=\"isLoading\"></ion-spinner>\n\n    <ng-container *ngIf=\"type == 'artist' && artists.length\">\n      <music-part-item\n        *ngFor=\"let artist of artists\"\n        [data]=\"{ img: artist['profile_picture'], text: artist['name'] }\"\n        [isCircle]=\"true\"\n        (click)=\"selectData(artist._id)\"\n        [class.selected]=\"selectedData.includes(artist._id)\"\n      ></music-part-item>\n    </ng-container>\n    <ng-container *ngIf=\"type == 'track' && tracks.length\">\n      <music-part-item\n        *ngFor=\"let track of tracks\"\n        [data]=\"{ img: track['cover'], text: track['name'] }\"\n        [isCircle]=\"true\"\n        (click)=\"selectData(track._id)\"\n        [class.selected]=\"selectedData.includes(track._id)\"\n      ></music-part-item>\n    </ng-container>\n  </div>\n  <ion-button (click)=\"apply()\">Apply</ion-button>\n</div>\n");

/***/ }),

/***/ 79791:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/list-item/list-item.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item lines=\"none\">\n  <ion-avatar slot=\"start\" (click)=\"clicked('content')\" [class.avatar-circle]=\"data.isCircle\">\n    <img *ngIf=\"data.image\" [src]=\"data.image\" />\n    <div class=\"avatar-icon-box\">\n      <ion-icon *ngIf=\"!data.image\" [name]=\"data.avatarIcon\" class=\"avatar-icon\"></ion-icon>\n    </div>\n  </ion-avatar>\n  <ion-label class=\"track-info\" (click)=\"clicked('content')\">\n    <h2>{{ data.title }}</h2>\n    <p>{{ data.subTitle }}</p>\n  </ion-label>\n  <ion-label slot=\"end\">\n    <ion-icon class=\"action-icon\" [name]=\"data.actionIcon\" (click)=\"clicked('action')\"></ion-icon>\n  </ion-label>\n</ion-item>\n");

/***/ }),

/***/ 74826:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/mini-player/mini-player.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item lines=\"none\">\n  <ion-avatar slot=\"start\" (click)=\"contentClicked()\">\n    <img [src]=\"data.cover\" />\n  </ion-avatar>\n  <ion-label (click)=\"contentClicked()\">{{ data.name }}</ion-label>\n  <ion-label slot=\"end\">\n    <ion-icon\n      [name]=\"isLiked ? 'heart' : 'heart-outline'\"\n      (click)=\"likeClicked()\"\n    ></ion-icon>\n    <ion-icon\n      [name]=\"paused ? 'play' : 'pause'\"\n      (click)=\"playClicked()\"\n    ></ion-icon>\n  </ion-label>\n  <!-- <div class=\"track-line-container\">\n    <div class=\"track-line\"></div>\n  </div> -->\n</ion-item>\n");

/***/ }),

/***/ 67248:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/part-item/part-item.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"part-item\">\n  <img [src]=\"data.img\" [class.circle-img]=\"isCircle\"/>\n  <ion-text *ngIf=\"!isCircle\">{{data.text}}</ion-text>\n</div>\n<ion-text *ngIf=\"isCircle\" [class.circle-text]=\"isCircle\">{{data.text}}</ion-text>");

/***/ }),

/***/ 22217:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/player/player.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-icon name=\"chevron-down\" slot=\"start\" (click)=\"hide()\"></ion-icon>\n    <ion-title>Mix</ion-title>\n    <ion-icon name=\"menu\" slot=\"end\" (click)=\"goToList()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <img\n      [src]=\"track.cover\"\n    />\n\n    <div class=\"player\">\n      <ion-item lines=\"none\" class=\"track-info\">\n        <ion-label>\n          <ion-text class=\"track-name\">{{track.name}}</ion-text>\n          <ion-text class=\"atrist\">Atrist</ion-text>\n        </ion-label>\n        <ion-label slot=\"end\">\n          <ion-icon [name]=\"isLiked ? 'heart' : 'heart-outline'\" (click)=\"action('like')\"></ion-icon>\n        </ion-label>\n      </ion-item>\n     \n      <div class=\"track-line\">\n        <ion-range \n          [min]=\"0\"\n          [max]=\"audioService.duration()\"\n          [value]=\"currentTime\"\n          (ionChange)=\"setTime($event.target['value'])\"     \n        ></ion-range>\n        <div class=\"track-duration\">\n          <ion-text>{{currentTime | durationFormat}}</ion-text>\n          <ion-text>{{audioService.duration() || 0 | durationFormat}}</ion-text>\n        </div>\n      </div>\n\n      <div class=\"track-control\">\n        <ion-icon name=\"shuffle\" [class.active]=\"isShuffle\" class=\"type-1\" (click)=\"action('shuffle')\"></ion-icon>\n        <ion-icon name=\"play-skip-back\" class=\"type-2\" (click)=\"action('prev')\"></ion-icon>\n        <ion-icon [name]=\"audioService.paused() ? 'play-circle' : 'pause-circle' \" class=\"type-3\" (click)=\"action('play')\"></ion-icon>\n        <ion-icon name=\"play-skip-forward\" class=\"type-2\" (click)=\"action('next')\"></ion-icon>\n        <ion-icon name=\"sync\" class=\"type-1\" [class.active]=\"isReplay\"  (click)=\"action('replay')\"></ion-icon>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 87872:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/components/type-card/type-card.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-label>{{data.title}}</ion-label>\n  <img [src]=\"data.image\" alt=\"\">\n</div>");

/***/ }),

/***/ 7276:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-streaming/tabs/tabs.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <music-mini-player\n    [paused]=\"audioService.paused()\"\n    [data]=\"audioService.getTrack()\"\n    (clicked)=\"playerClicked($event)\"\n    [isLiked]=\"user?.liked_tracks?.includes(audioService.getTrack()._id)\"\n    *ngIf=\"tracks[0]\"\n  ></music-mini-player>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"home\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"search\">\n        <ion-icon name=\"search\"></ion-icon>\n        <ion-label>Search</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"library\">\n        <ion-icon name=\"library\"></ion-icon>\n        <ion-label>Library</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_music-streaming_tabs_tabs_module_ts.js.map