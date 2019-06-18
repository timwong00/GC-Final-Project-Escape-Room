(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'escape-room';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _room1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room1.service */ "./src/app/room1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _room1front_room1front_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room1front/room1front.component */ "./src/app/room1front/room1front.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _room1left_room1left_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./room1left/room1left.component */ "./src/app/room1left/room1left.component.ts");
/* harmony import */ var _room1right_room1right_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./room1right/room1right.component */ "./src/app/room1right/room1right.component.ts");
/* harmony import */ var _room2front_room2front_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room2front/room2front.component */ "./src/app/room2front/room2front.component.ts");
/* harmony import */ var _room2left_room2left_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./room2left/room2left.component */ "./src/app/room2left/room2left.component.ts");
/* harmony import */ var _room2right_room2right_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./room2right/room2right.component */ "./src/app/room2right/room2right.component.ts");
/* harmony import */ var _room3front_room3front_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./room3front/room3front.component */ "./src/app/room3front/room3front.component.ts");
/* harmony import */ var _room3left_room3left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./room3left/room3left.component */ "./src/app/room3left/room3left.component.ts");
/* harmony import */ var _room3right_room3right_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./room3right/room3right.component */ "./src/app/room3right/room3right.component.ts");

















var appRoutes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"] },
    { path: "room1front", component: _room1front_room1front_component__WEBPACK_IMPORTED_MODULE_7__["Room1frontComponent"] },
    { path: "room1left", component: _room1left_room1left_component__WEBPACK_IMPORTED_MODULE_9__["Room1leftComponent"] },
    { path: "room1right", component: _room1right_room1right_component__WEBPACK_IMPORTED_MODULE_10__["Room1rightComponent"] },
    { path: "room2front", component: _room2front_room2front_component__WEBPACK_IMPORTED_MODULE_11__["Room2frontComponent"] },
    { path: "room2left", component: _room2left_room2left_component__WEBPACK_IMPORTED_MODULE_12__["Room2leftComponent"] },
    { path: "room2right", component: _room2right_room2right_component__WEBPACK_IMPORTED_MODULE_13__["Room2rightComponent"] },
    { path: "room3front", component: _room3front_room3front_component__WEBPACK_IMPORTED_MODULE_14__["Room3frontComponent"] },
    { path: "room3left", component: _room3left_room3left_component__WEBPACK_IMPORTED_MODULE_15__["Room3leftComponent"] },
    { path: "room3right", component: _room3right_room3right_component__WEBPACK_IMPORTED_MODULE_16__["Room3rightComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _room1front_room1front_component__WEBPACK_IMPORTED_MODULE_7__["Room1frontComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"],
                _room1left_room1left_component__WEBPACK_IMPORTED_MODULE_9__["Room1leftComponent"],
                _room1right_room1right_component__WEBPACK_IMPORTED_MODULE_10__["Room1rightComponent"],
                _room2front_room2front_component__WEBPACK_IMPORTED_MODULE_11__["Room2frontComponent"],
                _room2left_room2left_component__WEBPACK_IMPORTED_MODULE_12__["Room2leftComponent"],
                _room2right_room2right_component__WEBPACK_IMPORTED_MODULE_13__["Room2rightComponent"],
                _room3front_room3front_component__WEBPACK_IMPORTED_MODULE_14__["Room3frontComponent"],
                _room3left_room3left_component__WEBPACK_IMPORTED_MODULE_15__["Room3leftComponent"],
                _room3right_room3right_component__WEBPACK_IMPORTED_MODULE_16__["Room3rightComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_room1_service__WEBPACK_IMPORTED_MODULE_4__["Room1Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

<<<<<<< HEAD
/***/ "./src/app/items.service.ts":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ItemsService = /** @class */ (function () {
    function ItemsService(http) {
        this.http = http;
        this.selectedItems = [];
    }
    ItemsService.prototype.getItems = function () {
        return this.http.get("/items", { responseType: "json" });
    };
    ItemsService.prototype.collectItem = function (selectedItem) {
        this.selectedItems.push(selectedItem);
        // console.log(this.selectedItems);
        return this.selectedItems;
    };
    ItemsService.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
        return this.items;
        // console.log(index);
        // console.log(this.items);
    };
    ItemsService.prototype.setItems = function (itemList) {
        this.items = itemList;
    };
    ItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

=======
>>>>>>> upstream/master
/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<nav>\n  <img src=\"\" alt=\"logo\">\n</nav>\n\n<button (click)=\"toggleShow()\">HOW TO PLAY</button>\n<button [routerLink]=\"['/room1front']\">PLAY</button>\n\n<section *ngIf=\"isShowing\">\n  <p>Directions on how to play...</p>\n</section>\n\n"
=======
module.exports = "<nav>\r\n  <img src=\"\" alt=\"logo\">\r\n</nav>\r\n\r\n<button (click)=\"toggleShow()\">HOW TO PLAY</button>\r\n<button [routerLink]=\"['/room1front']\">PLAY</button>\r\n\r\n<section *ngIf=\"isShowing\">\r\n  <p>Directions on how to play...</p>\r\n</section>\r\n\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.isShowing = false;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.toggleShow = function () {
        this.isShowing = !this.isShowing;
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/room1.service.ts":
/*!**********************************!*\
  !*** ./src/app/room1.service.ts ***!
  \**********************************/
/*! exports provided: Room1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room1Service", function() { return Room1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Room1Service = /** @class */ (function () {
    function Room1Service(http) {
        this.http = http;
        this.itemsToMatch = [];
        this.selectedItems = [];
    }
    Room1Service.prototype.getItems = function () {
        return this.http.get("/items", { responseType: "json" });
    };
    Room1Service.prototype.getUnlockItems = function () {
        return this.http.get("/unlock-items", { responseType: "json" });
    };
    Room1Service.prototype.collectItem = function (selectedItem) {
        this.selectedItems.push(selectedItem);
        // console.log(this.selectedItems);
        return this.selectedItems;
    };
    Room1Service.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
        return this.items;
        // console.log(index);
        // console.log(this.items);
    };
    Room1Service.prototype.setItems = function (itemList) {
        this.items = itemList;
    };
    Room1Service.prototype.setUnlockItems = function (uItemList) {
        this.uItems = uItemList;
    };
    Room1Service.prototype.checkMatch = function (itemsToMatch) {
        if (itemsToMatch[0] == itemsToMatch[1]) {
            console.log("Items match");
            var index = this.uItems.findIndex(function (item) { return item.item_name == itemsToMatch[1]; });
            this.uItems.splice(index, 1);
            var index2 = this.selectedItems.findIndex(function (item) { return item.match_item_name == itemsToMatch[0]; });
            this.selectedItems.splice(index2, 1);
            // console.log(index, index2);
            console.log(this.uItems);
            console.log(this.selectedItems);
            this.itemsToMatch = [];
        }
        else if (itemsToMatch[0] !== itemsToMatch[1]) {
            this.itemsToMatch = [];
            console.log("Items do not match");
        }
        console.log(this.itemsToMatch);
    };
    Room1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Room1Service);
    return Room1Service;
}());



/***/ }),

/***/ "./src/app/room1front/room1front.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room1front/room1front.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "@font-face {\n    font-family: 'true_liesregular';\n    src: url('true_lies-webfont.woff2') format('woff2'),\n         url('true_lies-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\nh1 {\n    font-family: 'true_liesregular';\n    font-size: 30px;\n    font-weight: bold;\n    font-style: normal;\n}\n\nsection {\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbTFmcm9udC9yb29tMWZyb250LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0I7cURBQzhEO0lBQzlELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9yb29tMWZyb250L3Jvb20xZnJvbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAndHJ1ZV9saWVzcmVndWxhcic7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy90cnVlX2xpZXMtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnLi4vLi4vYXNzZXRzL3RydWVfbGllcy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiAndHJ1ZV9saWVzcmVndWxhcic7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuc2VjdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"
=======
module.exports = "@font-face {\r\n    font-family: 'true_liesregular';\r\n    src: url('true_lies-webfont.woff2') format('woff2'),\r\n         url('true_lies-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nh1 {\r\n    font-family: 'true_liesregular';\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n}\r\n\r\nsection {\r\n    border: 1px solid black;\r\n}\r\n\r\n.clicked {\r\n    color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbTFmcm9udC9yb29tMWZyb250LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0I7cURBQzhEO0lBQzlELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb29tMWZyb250L3Jvb20xZnJvbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICd0cnVlX2xpZXNyZWd1bGFyJztcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvdHJ1ZV9saWVzLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICAgICAgIHVybCgnLi4vLi4vYXNzZXRzL3RydWVfbGllcy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAndHJ1ZV9saWVzcmVndWxhcic7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNsaWNrZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room1front/room1front.component.html":
/*!******************************************************!*\
  !*** ./src/app/room1front/room1front.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "\n<h1>Room 1 Front Component</h1>\n\n<section *ngIf=\"!isShowing\">\n  <p>The insane surgeon, Dr. Lobotomy, has just escaped from jail. Known for performing unnecessary and inhumane operations on unwilling participants, he’s suspected to be lurking in your town. After staying late at the office one night, the last thing you remember is walking to your car in the dark. You just woke up here, strapped to a chair, and know you must be Dr. Lobotomy’s next victim. Use the items you find in the room to escape before he returns to finish his work!</p>\n  <button (click)=\"toggleShow()\">OK</button>\n</section>\n\n<section>\n  <div *ngFor=\"let item of items; index as i\">\n    <img src=\"{{ item.image }}\" alt=\"{{ item.item_name }}\" (click)=\"[selectItem(item), removeItem(i)]\">\n  </div>\n</section>\n\n<section>\n  <div *ngFor=\"let selected of selectedItems; index as i\">\n    <img src=\"{{ selected.image }}\" alt=\"{{ selected.item_name }}\">\n  </div>\n</section>"
=======
module.exports = "<h1>Room 1 Front Component</h1>\r\n\r\n<section *ngIf=\"!isShowing\">\r\n  <p>The insane surgeon, Dr. Lobotomy, has just escaped from jail. Known for performing unnecessary and inhumane\r\n    operations on unwilling participants, he’s suspected to be lurking in your town. After staying late at the office\r\n    one night, the last thing you remember is walking to your car in the dark. You just woke up here, strapped to a\r\n    chair, and know you must be Dr. Lobotomy’s next victim. Use the items you find in the room to escape before he\r\n    returns to finish his work!</p>\r\n  <button (click)=\"toggleShow()\">OK</button>\r\n</section>\r\n\r\n<section>\r\n<div *ngFor=\"let uItem of unlockItems; index as i\">\r\n  <img src=\"{{ uItem.image }}\" class=\"uItem{{ i }}\" alt=\"{{ uItem.item_name }}\" (click)=\"matchItems2(uItem.item_name)\" >\r\n</div>\r\n</section>\r\n\r\n\r\n<div *ngFor=\"let item of items; index as i\">\r\n  <img src=\"{{ item.image }}\" class=\"item{{ i }}\" alt=\"{{ item.item_name }}\"\r\n    (click)=\"[selectItem(item), removeItem(i)]\">\r\n</div>\r\n\r\n\r\n<section>\r\n  <div *ngFor=\"let selected of selectedItems; index as i\">\r\n    <img src=\"{{ selected.image }}\" class=\"item{{ i }}\" alt=\"{{ selected.item_name }}\" (click)=\"matchItems1(selected.match_item_name)\">\r\n  </div>\r\n</section>"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room1front/room1front.component.ts":
/*!****************************************************!*\
  !*** ./src/app/room1front/room1front.component.ts ***!
  \****************************************************/
/*! exports provided: Room1frontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room1frontComponent", function() { return Room1frontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _room1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room1.service */ "./src/app/room1.service.ts");



var Room1frontComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room1frontComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room1frontComponent(room1Service) {
        this.room1Service = room1Service;
        this.itemsToMatch = [];
>>>>>>> upstream/master
        this.isShowing = false;
    }
    Room1frontComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.room1Service.getItems().subscribe(function (response) {
            _this.items = response;
            // console.log(this.items);
<<<<<<< HEAD
            _this.itemsService.setItems(response);
=======
            _this.room1Service.setItems(response);
        });
        this.room1Service.getUnlockItems().subscribe(function (response) {
            _this.unlockItems = response;
            // console.log(this.unlockItems);
            _this.room1Service.setUnlockItems(response);
>>>>>>> upstream/master
        });
        this.selectedItems = this.room1Service.selectedItems;
        this.itemsToMatch = this.room1Service.itemsToMatch;
        // console.log(this.selectedItems);
    };
    Room1frontComponent.prototype.selectItem = function (selectedItem) {
        // console.log(selectedItem);
        this.room1Service.collectItem(selectedItem);
    };
    Room1frontComponent.prototype.removeItem = function (index) {
        this.room1Service.deleteItem(index);
        // console.log(index);
    };
    Room1frontComponent.prototype.toggleShow = function () {
        this.isShowing = !this.isShowing;
    };
    Room1frontComponent.prototype.matchItems1 = function (clickedItem1) {
        // this.room1Service.checkMatch(clickedItem1);
        console.log(clickedItem1);
        this.itemsToMatch.splice(0, 1, clickedItem1);
    };
    Room1frontComponent.prototype.matchItems2 = function (clickedItem2) {
        console.log(clickedItem2);
        this.itemsToMatch.splice(1, 1, clickedItem2);
        // console.log(this.itemsToMatch);
        this.room1Service.checkMatch(this.itemsToMatch);
    };
    Room1frontComponent.prototype.removeItem = function (index) {
        this.itemsService.deleteItem(index);
        console.log(index);
    };
    Room1frontComponent.prototype.toggleShow = function () {
        this.isShowing = !this.isShowing;
    };
    Room1frontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room1front',
            template: __webpack_require__(/*! ./room1front.component.html */ "./src/app/room1front/room1front.component.html"),
            styles: [__webpack_require__(/*! ./room1front.component.css */ "./src/app/room1front/room1front.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room1_service__WEBPACK_IMPORTED_MODULE_2__["Room1Service"]])
    ], Room1frontComponent);
    return Room1frontComponent;
}());



/***/ }),

/***/ "./src/app/room1left/room1left.component.css":
/*!***************************************************!*\
  !*** ./src/app/room1left/room1left.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20xbGVmdC9yb29tMWxlZnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/room1left/room1left.component.html":
/*!****************************************************!*\
  !*** ./src/app/room1left/room1left.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room1left works!\n</p>\n"
=======
module.exports = "<p>\r\n  room1left works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room1left/room1left.component.ts":
/*!**************************************************!*\
  !*** ./src/app/room1left/room1left.component.ts ***!
  \**************************************************/
/*! exports provided: Room1leftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room1leftComponent", function() { return Room1leftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room1.service */ "./src/app/room1.service.ts");
>>>>>>> upstream/master



var Room1leftComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room1leftComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room1leftComponent(room1Service) {
        this.room1Service = room1Service;
>>>>>>> upstream/master
    }
    Room1leftComponent.prototype.ngOnInit = function () {
    };
    Room1leftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room1left',
            template: __webpack_require__(/*! ./room1left.component.html */ "./src/app/room1left/room1left.component.html"),
            styles: [__webpack_require__(/*! ./room1left.component.css */ "./src/app/room1left/room1left.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room1_service__WEBPACK_IMPORTED_MODULE_2__["Room1Service"]])
>>>>>>> upstream/master
    ], Room1leftComponent);
    return Room1leftComponent;
}());



/***/ }),

/***/ "./src/app/room1right/room1right.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room1right/room1right.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20xcmlnaHQvcm9vbTFyaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/room1right/room1right.component.html":
/*!******************************************************!*\
  !*** ./src/app/room1right/room1right.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room1right works!\n</p>\n"
=======
module.exports = "<p>\r\n  room1right works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room1right/room1right.component.ts":
/*!****************************************************!*\
  !*** ./src/app/room1right/room1right.component.ts ***!
  \****************************************************/
/*! exports provided: Room1rightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room1rightComponent", function() { return Room1rightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room1.service */ "./src/app/room1.service.ts");
>>>>>>> upstream/master



var Room1rightComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room1rightComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room1rightComponent(room1Service) {
        this.room1Service = room1Service;
>>>>>>> upstream/master
    }
    Room1rightComponent.prototype.ngOnInit = function () {
    };
    Room1rightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room1right',
            template: __webpack_require__(/*! ./room1right.component.html */ "./src/app/room1right/room1right.component.html"),
            styles: [__webpack_require__(/*! ./room1right.component.css */ "./src/app/room1right/room1right.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room1_service__WEBPACK_IMPORTED_MODULE_2__["Room1Service"]])
>>>>>>> upstream/master
    ], Room1rightComponent);
    return Room1rightComponent;
}());



/***/ }),

<<<<<<< HEAD
=======
/***/ "./src/app/room2.service.ts":
/*!**********************************!*\
  !*** ./src/app/room2.service.ts ***!
  \**********************************/
/*! exports provided: Room2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room2Service", function() { return Room2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Room2Service = /** @class */ (function () {
    function Room2Service() {
    }
    Room2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Room2Service);
    return Room2Service;
}());



/***/ }),

>>>>>>> upstream/master
/***/ "./src/app/room2front/room2front.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room2front/room2front.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20yZnJvbnQvcm9vbTJmcm9udC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/room2front/room2front.component.html":
/*!******************************************************!*\
  !*** ./src/app/room2front/room2front.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room2front works!\n</p>\n"
=======
module.exports = "<p>\r\n  room2front works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room2front/room2front.component.ts":
/*!****************************************************!*\
  !*** ./src/app/room2front/room2front.component.ts ***!
  \****************************************************/
/*! exports provided: Room2frontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room2frontComponent", function() { return Room2frontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room2.service */ "./src/app/room2.service.ts");
>>>>>>> upstream/master



var Room2frontComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room2frontComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room2frontComponent(room2Service) {
        this.room2Service = room2Service;
>>>>>>> upstream/master
    }
    Room2frontComponent.prototype.ngOnInit = function () {
    };
    Room2frontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room2front',
            template: __webpack_require__(/*! ./room2front.component.html */ "./src/app/room2front/room2front.component.html"),
            styles: [__webpack_require__(/*! ./room2front.component.css */ "./src/app/room2front/room2front.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room2_service__WEBPACK_IMPORTED_MODULE_2__["Room2Service"]])
>>>>>>> upstream/master
    ], Room2frontComponent);
    return Room2frontComponent;
}());



/***/ }),

/***/ "./src/app/room2left/room2left.component.css":
/*!***************************************************!*\
  !*** ./src/app/room2left/room2left.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20ybGVmdC9yb29tMmxlZnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/room2left/room2left.component.html":
/*!****************************************************!*\
  !*** ./src/app/room2left/room2left.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room2left works!\n</p>\n"
=======
module.exports = "<p>\r\n  room2left works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room2left/room2left.component.ts":
/*!**************************************************!*\
  !*** ./src/app/room2left/room2left.component.ts ***!
  \**************************************************/
/*! exports provided: Room2leftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room2leftComponent", function() { return Room2leftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room2.service */ "./src/app/room2.service.ts");
>>>>>>> upstream/master



var Room2leftComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room2leftComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room2leftComponent(room2Service) {
        this.room2Service = room2Service;
>>>>>>> upstream/master
    }
    Room2leftComponent.prototype.ngOnInit = function () {
    };
    Room2leftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room2left',
            template: __webpack_require__(/*! ./room2left.component.html */ "./src/app/room2left/room2left.component.html"),
            styles: [__webpack_require__(/*! ./room2left.component.css */ "./src/app/room2left/room2left.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room2_service__WEBPACK_IMPORTED_MODULE_2__["Room2Service"]])
>>>>>>> upstream/master
    ], Room2leftComponent);
    return Room2leftComponent;
}());



/***/ }),

/***/ "./src/app/room2right/room2right.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room2right/room2right.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20ycmlnaHQvcm9vbTJyaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/room2right/room2right.component.html":
/*!******************************************************!*\
  !*** ./src/app/room2right/room2right.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room2right works!\n</p>\n"
=======
module.exports = "<p>\r\n  room2right works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room2right/room2right.component.ts":
/*!****************************************************!*\
  !*** ./src/app/room2right/room2right.component.ts ***!
  \****************************************************/
/*! exports provided: Room2rightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room2rightComponent", function() { return Room2rightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room2.service */ "./src/app/room2.service.ts");
>>>>>>> upstream/master



var Room2rightComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room2rightComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room2rightComponent(room2Service) {
        this.room2Service = room2Service;
>>>>>>> upstream/master
    }
    Room2rightComponent.prototype.ngOnInit = function () {
    };
    Room2rightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room2right',
            template: __webpack_require__(/*! ./room2right.component.html */ "./src/app/room2right/room2right.component.html"),
            styles: [__webpack_require__(/*! ./room2right.component.css */ "./src/app/room2right/room2right.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room2_service__WEBPACK_IMPORTED_MODULE_2__["Room2Service"]])
>>>>>>> upstream/master
    ], Room2rightComponent);
    return Room2rightComponent;
}());



/***/ }),

<<<<<<< HEAD
=======
/***/ "./src/app/room3.service.ts":
/*!**********************************!*\
  !*** ./src/app/room3.service.ts ***!
  \**********************************/
/*! exports provided: Room3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room3Service", function() { return Room3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Room3Service = /** @class */ (function () {
    function Room3Service() {
    }
    Room3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Room3Service);
    return Room3Service;
}());



/***/ }),

>>>>>>> upstream/master
/***/ "./src/app/room3front/room3front.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room3front/room3front.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20zZnJvbnQvcm9vbTNmcm9udC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/room3front/room3front.component.html":
/*!******************************************************!*\
  !*** ./src/app/room3front/room3front.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room3front works!\n</p>\n"
=======
module.exports = "<p>\r\n  room3front works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room3front/room3front.component.ts":
/*!****************************************************!*\
  !*** ./src/app/room3front/room3front.component.ts ***!
  \****************************************************/
/*! exports provided: Room3frontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room3frontComponent", function() { return Room3frontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room3.service */ "./src/app/room3.service.ts");
>>>>>>> upstream/master



var Room3frontComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room3frontComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room3frontComponent(room3Service) {
        this.room3Service = room3Service;
>>>>>>> upstream/master
    }
    Room3frontComponent.prototype.ngOnInit = function () {
    };
    Room3frontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room3front',
            template: __webpack_require__(/*! ./room3front.component.html */ "./src/app/room3front/room3front.component.html"),
            styles: [__webpack_require__(/*! ./room3front.component.css */ "./src/app/room3front/room3front.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room3_service__WEBPACK_IMPORTED_MODULE_2__["Room3Service"]])
>>>>>>> upstream/master
    ], Room3frontComponent);
    return Room3frontComponent;
}());



/***/ }),

/***/ "./src/app/room3left/room3left.component.css":
/*!***************************************************!*\
  !*** ./src/app/room3left/room3left.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20zbGVmdC9yb29tM2xlZnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/room3left/room3left.component.html":
/*!****************************************************!*\
  !*** ./src/app/room3left/room3left.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room3left works!\n</p>\n"
=======
module.exports = "<p>\r\n  room3left works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room3left/room3left.component.ts":
/*!**************************************************!*\
  !*** ./src/app/room3left/room3left.component.ts ***!
  \**************************************************/
/*! exports provided: Room3leftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room3leftComponent", function() { return Room3leftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room3.service */ "./src/app/room3.service.ts");
>>>>>>> upstream/master



var Room3leftComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room3leftComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room3leftComponent(room3Service) {
        this.room3Service = room3Service;
>>>>>>> upstream/master
    }
    Room3leftComponent.prototype.ngOnInit = function () {
    };
    Room3leftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room3left',
            template: __webpack_require__(/*! ./room3left.component.html */ "./src/app/room3left/room3left.component.html"),
            styles: [__webpack_require__(/*! ./room3left.component.css */ "./src/app/room3left/room3left.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room3_service__WEBPACK_IMPORTED_MODULE_2__["Room3Service"]])
>>>>>>> upstream/master
    ], Room3leftComponent);
    return Room3leftComponent;
}());



/***/ }),

/***/ "./src/app/room3right/room3right.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room3right/room3right.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20zcmlnaHQvcm9vbTNyaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/room3right/room3right.component.html":
/*!******************************************************!*\
  !*** ./src/app/room3right/room3right.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<p>\n  room3right works!\n</p>\n"
=======
module.exports = "<p>\r\n  room3right works!\r\n</p>\r\n"
>>>>>>> upstream/master

/***/ }),

/***/ "./src/app/room3right/room3right.component.ts":
/*!****************************************************!*\
  !*** ./src/app/room3right/room3right.component.ts ***!
  \****************************************************/
/*! exports provided: Room3rightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room3rightComponent", function() { return Room3rightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
<<<<<<< HEAD
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
=======
/* harmony import */ var _room3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../room3.service */ "./src/app/room3.service.ts");
>>>>>>> upstream/master



var Room3rightComponent = /** @class */ (function () {
<<<<<<< HEAD
    function Room3rightComponent(itemsService) {
        this.itemsService = itemsService;
=======
    function Room3rightComponent(room3Service) {
        this.room3Service = room3Service;
>>>>>>> upstream/master
    }
    Room3rightComponent.prototype.ngOnInit = function () {
    };
    Room3rightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room3right',
            template: __webpack_require__(/*! ./room3right.component.html */ "./src/app/room3right/room3right.component.html"),
            styles: [__webpack_require__(/*! ./room3right.component.css */ "./src/app/room3right/room3right.component.css")]
        }),
<<<<<<< HEAD
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
=======
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room3_service__WEBPACK_IMPORTED_MODULE_2__["Room3Service"]])
>>>>>>> upstream/master
    ], Room3rightComponent);
    return Room3rightComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mirjanakulics/Documents/GC-Final-Project-Escape-Room/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map