(self["webpackChunkspica_starters_ionic"] = self["webpackChunkspica_starters_ionic"] || []).push([["default-src_app_rent-a-car_services_bucket_ts"],{

/***/ 94596:
/*!***********************************************!*\
  !*** ./src/app/rent-a-car/services/bucket.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "office": () => (/* binding */ office),
/* harmony export */   "Category": () => (/* binding */ Category),
/* harmony export */   "cars": () => (/* binding */ cars),
/* harmony export */   "rent_a_car": () => (/* binding */ rent_a_car),
/* harmony export */   "car_packet": () => (/* binding */ car_packet),
/* harmony export */   "additional_products": () => (/* binding */ additional_products),
/* harmony export */   "Contact": () => (/* binding */ Contact),
/* harmony export */   "rent_a_car_site_items": () => (/* binding */ rent_a_car_site_items)
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
var User;
(function (User) {
    const BUCKET_ID = '61e96b69fb1c06002dd1941b';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    User.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    User.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    User.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    User.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    User.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    User.remove = remove;
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
    })(realtime = User.realtime || (User.realtime = {}));
})(User || (User = {}));
var office;
(function (office) {
    const BUCKET_ID = '61e96b6afb1c06002dd1941e';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    office.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    office.getAll = getAll;
    ;
    function insert(document) {
        ['cars'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    office.insert = insert;
    ;
    function update(document) {
        ['cars'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    office.update = update;
    ;
    function patch(document) {
        ['cars'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    office.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    office.remove = remove;
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
    })(realtime = office.realtime || (office.realtime = {}));
})(office || (office = {}));
var Category;
(function (Category) {
    const BUCKET_ID = '61e96b6bfb1c06002dd19421';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    Category.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    Category.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    Category.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    Category.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    Category.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    Category.remove = remove;
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
    })(realtime = Category.realtime || (Category.realtime = {}));
})(Category || (Category = {}));
var cars;
(function (cars) {
    const BUCKET_ID = '61e96b6dfb1c06002dd19424';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    cars.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    cars.getAll = getAll;
    ;
    function insert(document) {
        ['category'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    cars.insert = insert;
    ;
    function update(document) {
        ['category'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    cars.update = update;
    ;
    function patch(document) {
        ['category'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    cars.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    cars.remove = remove;
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
    })(realtime = cars.realtime || (cars.realtime = {}));
})(cars || (cars = {}));
var rent_a_car;
(function (rent_a_car) {
    const BUCKET_ID = '61e96b6efb1c06002dd19427';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    rent_a_car.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    rent_a_car.getAll = getAll;
    ;
    function insert(document) {
        ['car', 'user', 'office_to_take', 'office_to_be_given', 'packets', 'additional_products'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    rent_a_car.insert = insert;
    ;
    function update(document) {
        ['car', 'user', 'office_to_take', 'office_to_be_given', 'packets', 'additional_products'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    rent_a_car.update = update;
    ;
    function patch(document) {
        ['car', 'user', 'office_to_take', 'office_to_be_given', 'packets', 'additional_products'].forEach((field) => {
            if (typeof document[field] == 'object') {
                document[field] = Array.isArray(document[field])
                    ? document[field].map((v) => v._id)
                    : document[field]._id;
            }
        });
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    rent_a_car.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    rent_a_car.remove = remove;
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
    })(realtime = rent_a_car.realtime || (rent_a_car.realtime = {}));
})(rent_a_car || (rent_a_car = {}));
var car_packet;
(function (car_packet) {
    const BUCKET_ID = '61e96b6ffb1c06002dd1942a';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    car_packet.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    car_packet.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    car_packet.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    car_packet.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    car_packet.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    car_packet.remove = remove;
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
    })(realtime = car_packet.realtime || (car_packet.realtime = {}));
})(car_packet || (car_packet = {}));
var additional_products;
(function (additional_products) {
    const BUCKET_ID = '61e96b70fb1c06002dd1942d';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    additional_products.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    additional_products.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    additional_products.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    additional_products.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    additional_products.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    additional_products.remove = remove;
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
    })(realtime = additional_products.realtime || (additional_products.realtime = {}));
})(additional_products || (additional_products = {}));
var Contact;
(function (Contact) {
    const BUCKET_ID = '61e96b71fb1c06002dd19430';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    Contact.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    Contact.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    Contact.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    Contact.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    Contact.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    Contact.remove = remove;
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
    })(realtime = Contact.realtime || (Contact.realtime = {}));
})(Contact || (Contact = {}));
var rent_a_car_site_items;
(function (rent_a_car_site_items) {
    const BUCKET_ID = '61e96b73fb1c06002dd19433';
    function get(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.get(BUCKET_ID, ...args);
    }
    rent_a_car_site_items.get = get;
    ;
    function getAll(...args) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.getAll(BUCKET_ID, ...args);
    }
    rent_a_car_site_items.getAll = getAll;
    ;
    function insert(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.insert(BUCKET_ID, document);
    }
    rent_a_car_site_items.insert = insert;
    ;
    function update(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.update(BUCKET_ID, document._id, document);
    }
    rent_a_car_site_items.update = update;
    ;
    function patch(document) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.patch(BUCKET_ID, document._id, document);
    }
    rent_a_car_site_items.patch = patch;
    ;
    function remove(documentId) {
        return _spica_devkit_bucket__WEBPACK_IMPORTED_MODULE_0__.data.remove(BUCKET_ID, documentId);
    }
    rent_a_car_site_items.remove = remove;
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
    })(realtime = rent_a_car_site_items.realtime || (rent_a_car_site_items.realtime = {}));
})(rent_a_car_site_items || (rent_a_car_site_items = {}));


/***/ })

}]);
//# sourceMappingURL=default-src_app_rent-a-car_services_bucket_ts.js.map