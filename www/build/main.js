webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrastoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_canteens_meals_canteens_meals__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrastoPage = (function () {
    function CrastoPage(navCtrl, navParams, meals, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meals = meals;
        this.storage = storage;
        this.crastoMeals = [];
    }
    CrastoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('menu').then(function (val) {
            try {
                _this.meals.getCampus().then(function (data) {
                    //Hide the loading indicator
                    //Now, populate the array with data from the api
                    if (data) {
                        //We have data, so lets do something with it
                        var menus = data.menus.menu;
                        for (var _i = 0, menus_1 = menus; _i < menus_1.length; _i++) {
                            var menu = menus_1[_i];
                            var attributes = (menu)[Object.keys(menu)[0]];
                            var items = (menu)[Object.keys(menu)[1]];
                            if (attributes.canteen == "Refeitório do Crasto") {
                                var date = "";
                                var count = 0;
                                for (var _a = 0, _b = attributes.date.split(" "); _a < _b.length; _a++) {
                                    var p = _b[_a];
                                    if (count < 4) {
                                        date += " " + p;
                                        count++;
                                    }
                                    if (count == 4) {
                                        break;
                                    }
                                }
                                if (attributes.disabled != "0") {
                                    _this.crastoMeals.push({ header: date + ", " + attributes.meal, content: [attributes.disabled] });
                                }
                                else {
                                    var arr = [];
                                    for (var _c = 0, _d = items.item; _c < _d.length; _c++) {
                                        var item = _d[_c];
                                        arr.push(item);
                                    }
                                    _this.crastoMeals.push({ header: date + ", " + attributes.meal, content: arr });
                                }
                            }
                        }
                        _this.storage.set('menu', _this.crastoMeals);
                    }
                    else {
                        //This really should never happen
                        console.error('Error retrieving data: Data object is empty');
                    }
                }, function (error) {
                    //Hide the loading indicator
                    console.error('Error retrieving data');
                    console.dir(error);
                });
            }
            catch (e) {
                _this.crastoMeals = val;
            }
        });
    };
    CrastoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crasto',template:/*ion-inline-start:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/crasto/crasto.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Refeições - Crasto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let data of crastoMeals">\n    <ion-card-header>\n      {{data.header}}\n    </ion-card-header>\n    <ion-card-content *ngFor="let i of data.content">\n      {{i}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/crasto/crasto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_canteens_meals_canteens_meals__["a" /* CanteensMealsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CrastoPage);
    return CrastoPage;
}());

//# sourceMappingURL=crasto.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_canteens_meals_canteens_meals__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantePage = (function () {
    function RestaurantePage(navCtrl, navParams, meals, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meals = meals;
        this.storage = storage;
        this.restauranteMeals = [];
    }
    RestaurantePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('menu').then(function (val) {
            try {
                _this.meals.getRest().then(function (data) {
                    //Hide the loading indicator
                    //Now, populate the array with data from the api
                    if (data) {
                        //We have data, so lets do something with it
                        var menus = data.menus.menu;
                        for (var _i = 0, menus_1 = menus; _i < menus_1.length; _i++) {
                            var menu = menus_1[_i];
                            var attributes = (menu)[Object.keys(menu)[0]];
                            var items = (menu)[Object.keys(menu)[1]];
                            var date = "";
                            var count = 0;
                            for (var _a = 0, _b = attributes.date.split(" "); _a < _b.length; _a++) {
                                var p = _b[_a];
                                if (count < 4) {
                                    date += " " + p;
                                    count++;
                                }
                                if (count == 4) {
                                    break;
                                }
                            }
                            if (attributes.disabled != "0") {
                                _this.restauranteMeals.push({ header: date + ", " + attributes.meal, content: [attributes.disabled] });
                            }
                            else {
                                var arr = [];
                                for (var _c = 0, _d = items.item; _c < _d.length; _c++) {
                                    var item = _d[_c];
                                    arr.push(item);
                                }
                                _this.restauranteMeals.push({ header: date + ", " + attributes.meal, content: arr });
                            }
                        }
                        _this.storage.set('menu', _this.restauranteMeals);
                    }
                    else {
                        //This really should never happen
                        console.error('Error retrieving data: Data object is empty');
                    }
                }, function (error) {
                    //Hide the loading indicator
                    console.error('Error retrieving data');
                    console.dir(error);
                });
            }
            catch (e) {
                _this.restauranteMeals = val;
            }
        });
    };
    RestaurantePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurante',template:/*ion-inline-start:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/restaurante/restaurante.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Refeições - Restaurante</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-card *ngFor="let data of restauranteMeals">\n      <ion-card-header>\n        {{data.header}}\n      </ion-card-header>\n      <ion-card-content *ngFor="let i of data.content">\n        {{i}}\n      </ion-card-content>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/restaurante/restaurante.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_canteens_meals_canteens_meals__["a" /* CanteensMealsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RestaurantePage);
    return RestaurantePage;
}());

//# sourceMappingURL=restaurante.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SantiagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_canteens_meals_canteens_meals__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SantiagoPage = (function () {
    function SantiagoPage(navCtrl, navParams, meals, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.meals = meals;
        this.storage = storage;
        this.santiagoMeals = [];
    }
    SantiagoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('menu').then(function (val) {
            try {
                _this.meals.getCampus().then(function (data) {
                    //Hide the loading indicator
                    //Now, populate the array with data from the api
                    if (data) {
                        //We have data, so lets do something with it
                        var menus = data.menus.menu;
                        for (var _i = 0, menus_1 = menus; _i < menus_1.length; _i++) {
                            var menu = menus_1[_i];
                            var attributes = (menu)[Object.keys(menu)[0]];
                            var items = (menu)[Object.keys(menu)[1]];
                            if (attributes.canteen == "Refeitório de Santiago") {
                                var date = "";
                                var count = 0;
                                for (var _a = 0, _b = attributes.date.split(" "); _a < _b.length; _a++) {
                                    var p = _b[_a];
                                    if (count < 4) {
                                        date += " " + p;
                                        count++;
                                    }
                                    if (count == 4) {
                                        break;
                                    }
                                }
                                if (attributes.disabled != "0") {
                                    _this.santiagoMeals.push({ header: date + ", " + attributes.meal, content: [attributes.disabled] });
                                }
                                else {
                                    var arr = [];
                                    for (var _c = 0, _d = items.item; _c < _d.length; _c++) {
                                        var item = _d[_c];
                                        arr.push(item);
                                    }
                                    _this.santiagoMeals.push({ header: date + ", " + attributes.meal, content: arr });
                                }
                            }
                        }
                        _this.storage.set('menu', _this.santiagoMeals);
                    }
                    else {
                        //This really should never happen
                        console.error('Error retrieving data: Data object is empty');
                    }
                }, function (error) {
                    //Hide the loading indicator
                    console.error('Error retrieving data');
                    console.dir(error);
                });
            }
            catch (e) {
                _this.santiagoMeals = val;
            }
        });
    };
    SantiagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-santiago',template:/*ion-inline-start:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/santiago/santiago.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Refeições - Santiago</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-card *ngFor="let data of santiagoMeals">\n      <ion-card-header>\n        {{data.header}}\n      </ion-card-header>\n      <ion-card-content *ngFor="let i of data.content">\n        {{i}}\n      </ion-card-content>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/santiago/santiago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_canteens_meals_canteens_meals__["a" /* CanteensMealsProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SantiagoPage);
    return SantiagoPage;
}());

//# sourceMappingURL=santiago.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/crasto/crasto.module": [
		289,
		2
	],
	"../pages/restaurante/restaurante.module": [
		290,
		1
	],
	"../pages/santiago/santiago.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crasto_crasto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__santiago_santiago__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurante_restaurante__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mapPage = __WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */];
        this.crastoPage = __WEBPACK_IMPORTED_MODULE_2__crasto_crasto__["a" /* CrastoPage */];
        this.santiagoPage = __WEBPACK_IMPORTED_MODULE_3__santiago_santiago__["a" /* SantiagoPage */];
        this.restaurantePage = __WEBPACK_IMPORTED_MODULE_4__restaurante_restaurante__["a" /* RestaurantePage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Canteens List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <ion-img src=\'crasto.jpeg\'></ion-img>\n    </ion-thumbnail>\n    <p>Refeitório do Crasto</p>\n    <button ion-button [navPush]="crastoPage" clear item-end><ion-icon name="restaurant"></ion-icon></button>\n    <button ion-button [navPush]="mapPage" clear item-end><ion-icon name="pin"></ion-icon></button>\n  </ion-item>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <ion-img src=\'santiago.jpeg\'></ion-img>\n    </ion-thumbnail>\n    <p>Refeitório de Santiago</p>\n    <button ion-button [navPush]="santiagoPage" clear item-end><ion-icon name="restaurant"></ion-icon></button>\n    <button ion-button clear item-end><ion-icon name="pin"></ion-icon></button>\n  </ion-item>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <ion-img src=\'rest_uni.jpg\'></ion-img>\n    </ion-thumbnail>\n    <p>Restaurante Universitário</p>\n    <button ion-button [navPush]="restaurantePage" clear item-end><ion-icon name="restaurant"></ion-icon></button>\n    <button ion-button clear item-end><ion-icon name="pin"></ion-icon></button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.propertyList = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map('map').setView([40.628406, -8.656562], 16);
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            accessToken: 'pk.eyJ1IjoicGFyYWtlZXQzNyIsImEiOiJjamJrbzd5N24xcmxoMzNvZmM3NjBuamkwIn0.sWSzm2DtFdKBHOd-uWK26w'
        }).addTo(this.map);
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([40.624536, -8.656994]).addTo(this.map)
            .bindPopup("Crasto")
            .openPopup();
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([40.630596, -8.659026]).addTo(this.map)
            .bindPopup("Santiago")
            .openPopup();
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([40.631225, -8.655419]).addTo(this.map)
            .bindPopup("Snack-Bar")
            .openPopup();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n     Canteens\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="map-container">\n    <div id="map" style="width: 100%; height: 100%"></div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/antonio/Documentos/ICM/FoodOnCampus/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_canteens_meals_canteens_meals__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_crasto_crasto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_santiago_santiago__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_restaurante_restaurante__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crasto_crasto__["a" /* CrastoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_santiago_santiago__["a" /* SantiagoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_restaurante_restaurante__["a" /* RestaurantePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/crasto/crasto.module#CrastoPageModule', name: 'CrastoPage', segment: 'crasto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurante/restaurante.module#RestaurantePageModule', name: 'RestaurantePage', segment: 'restaurante', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/santiago/santiago.module#SantiagoPageModule', name: 'SantiagoPage', segment: 'santiago', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_crasto_crasto__["a" /* CrastoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_santiago_santiago__["a" /* SantiagoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_restaurante_restaurante__["a" /* RestaurantePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_canteens_meals_canteens_meals__["a" /* CanteensMealsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/antonio/Documentos/ICM/FoodOnCampus/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/antonio/Documentos/ICM/FoodOnCampus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanteensMealsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the CanteensMealsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CanteensMealsProvider = (function () {
    function CanteensMealsProvider(http) {
        this.http = http;
    }
    CanteensMealsProvider.prototype.getCampus = function () {
        var url = 'http://services.web.ua.pt/sas/ementas?date=week&format=json&place=santiago';
        //for debugging purposes
        //let url: string = '/assets/data/ementa.json';
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    //'Borrowed' from //https://angular.io/docs/ts/latest/guide/server-communication.html
    CanteensMealsProvider.prototype.extractData = function (res) {
        //Convert the response to JSON format
        var body = res.json();
        //Return the data (or nothing)
        return body || {};
    };
    //'Borrowed' from //https://angular.io/docs/ts/latest/guide/server-communication.html
    CanteensMealsProvider.prototype.handleError = function (res) {
        console.error('Entering handleError');
        console.dir(res);
        return Promise.reject(res.message || res);
    };
    CanteensMealsProvider.prototype.getRest = function () {
        var url = 'http://services.web.ua.pt/sas/ementas?date=week&format=json&place=rest';
        //for debug purposes
        //let url: string = '/assets/data/ementa.json';
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CanteensMealsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], CanteensMealsProvider);
    return CanteensMealsProvider;
}());

//# sourceMappingURL=canteens-meals.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map