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

module.exports = "<headerComponent></headerComponent>\n<router-outlet></router-outlet>\n<room-navigation></room-navigation>\n"

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
        this.title = "escape-room";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items.service */ "./src/app/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _room1front_room1front_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room1front/room1front.component */ "./src/app/room1front/room1front.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _room1left_room1left_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./room1left/room1left.component */ "./src/app/room1left/room1left.component.ts");
/* harmony import */ var _room1right_room1right_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./room1right/room1right.component */ "./src/app/room1right/room1right.component.ts");
/* harmony import */ var _room2front_room2front_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./room2front/room2front.component */ "./src/app/room2front/room2front.component.ts");
/* harmony import */ var _room2left_room2left_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./room2left/room2left.component */ "./src/app/room2left/room2left.component.ts");
/* harmony import */ var _room2right_room2right_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./room2right/room2right.component */ "./src/app/room2right/room2right.component.ts");
/* harmony import */ var _room3front_room3front_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./room3front/room3front.component */ "./src/app/room3front/room3front.component.ts");
/* harmony import */ var _room3left_room3left_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./room3left/room3left.component */ "./src/app/room3left/room3left.component.ts");
/* harmony import */ var _room3right_room3right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./room3right/room3right.component */ "./src/app/room3right/room3right.component.ts");
/* harmony import */ var _room_navigation_room_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./room-navigation/room-navigation.component */ "./src/app/room-navigation/room-navigation.component.ts");



















var appRoutes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"] },
    { path: "room1front", component: _room1front_room1front_component__WEBPACK_IMPORTED_MODULE_7__["Room1frontComponent"] },
    { path: "room1left", component: _room1left_room1left_component__WEBPACK_IMPORTED_MODULE_10__["Room1leftComponent"] },
    { path: "room1right", component: _room1right_room1right_component__WEBPACK_IMPORTED_MODULE_11__["Room1rightComponent"] },
    { path: "room2front", component: _room2front_room2front_component__WEBPACK_IMPORTED_MODULE_12__["Room2frontComponent"] },
    { path: "room2left", component: _room2left_room2left_component__WEBPACK_IMPORTED_MODULE_13__["Room2leftComponent"] },
    { path: "room2right", component: _room2right_room2right_component__WEBPACK_IMPORTED_MODULE_14__["Room2rightComponent"] },
    { path: "room3front", component: _room3front_room3front_component__WEBPACK_IMPORTED_MODULE_15__["Room3frontComponent"] },
    { path: "room3left", component: _room3left_room3left_component__WEBPACK_IMPORTED_MODULE_16__["Room3leftComponent"] },
    { path: "room3right", component: _room3right_room3right_component__WEBPACK_IMPORTED_MODULE_17__["Room3rightComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _room1front_room1front_component__WEBPACK_IMPORTED_MODULE_7__["Room1frontComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
                _room1left_room1left_component__WEBPACK_IMPORTED_MODULE_10__["Room1leftComponent"],
                _room1right_room1right_component__WEBPACK_IMPORTED_MODULE_11__["Room1rightComponent"],
                _room2front_room2front_component__WEBPACK_IMPORTED_MODULE_12__["Room2frontComponent"],
                _room2left_room2left_component__WEBPACK_IMPORTED_MODULE_13__["Room2leftComponent"],
                _room2right_room2right_component__WEBPACK_IMPORTED_MODULE_14__["Room2rightComponent"],
                _room3front_room3front_component__WEBPACK_IMPORTED_MODULE_15__["Room3frontComponent"],
                _room3left_room3left_component__WEBPACK_IMPORTED_MODULE_16__["Room3leftComponent"],
                _room3right_room3right_component__WEBPACK_IMPORTED_MODULE_17__["Room3rightComponent"],
                _room_navigation_room_navigation_component__WEBPACK_IMPORTED_MODULE_18__["RoomNavigationComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)],
            providers: [_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  border-bottom: 5px solid black;\n  display: flex;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 5px solid black;\n  width: 150px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.openMenu-btn,\n.menu-options {\n  background-color: none;\n  border: none;\n  outline: none;\n}\n\n.openMenu-btn:hover,\n.openMenu-btn:active,\n.closeMenu-btn:hover,\n.menu-options:hover {\n  color: red;\n}\n\n#menu > p {\n  font-size: 24px;\n}\n\n.btn-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n}\n\n.menu-options {\n  margin-bottom: 5px;\n  width: 100%;\n  height: 30px;\n}\n\n.closeMenu-btn {\n  position: absolute;\n  right: 0;\n}\n\n.openMenu-btn,\n.closeMenu-btn,\n.menu-options {\n  cursor: pointer;\n}\n\n.game-header {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.material-icons {\n  margin-top: 5px;\n  font-size: 36px;\n}\n\n#inventory {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  margin: 5px;\n  width: 200px;\n}\n\n.items {\n  border: 1px solid black;\n}\n\n#battery:after {\n  background-color: #fff;\n  border: 2px solid #000;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  right: -6px;\n  top: 6px;\n  width: 6px;\n}\n\n#battery {\n  background-color: #fff;\n  border: 2px solid #000;\n  height: 32px;\n  position: relative;\n  width: 100px;\n  margin: 5px;\n  margin-right: 30px;\n}\n\n.battery-drain {\n  background-color: green;\n  height: 100%;\n  /* Animation code */\n  /* -webkit-animation-name: widthChange; Safari 4.0 - 8.0 */\n  /* -webkit-animation-duration: 60s; Safari 4.0 - 8.0 */\n  -webkit-animation-name: widthChange;\n          animation-name: widthChange;\n  -webkit-animation-duration: 300s;\n          animation-duration: 300s;\n}\n\n@-webkit-keyframes widthChange {\n  0% {\n    background-color: green;\n    width: 100%;\n  }\n  50% {\n    background-color: yellow;\n    width: 50%;\n  }\n  100% {\n    background-color: red;\n    width: 0;\n  }\n}\n\n@keyframes widthChange {\n  0% {\n    background-color: green;\n    width: 100%;\n  }\n  50% {\n    background-color: yellow;\n    width: 50%;\n  }\n  100% {\n    background-color: red;\n    width: 0;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .game-header {\n    width: 95%;\n  }\n\n  #menu {\n    width: 200px;\n    height: 300px;\n  }\n\n  .menu-options {\n    margin-bottom: 25px;\n  }\n\n  .openMenu-btn,\n  .menu-options {\n    font-size: 20px;\n  }\n  #battery {\n    width: 200px;\n  }\n\n  #inventory {\n    width: 500px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7OztFQUlFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMERBQTBEO0VBQzFELHNEQUFzRDtFQUN0RCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixRQUFRO0VBQ1Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFFBQVE7RUFDVjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ub3Blbk1lbnUtYnRuLFxuLm1lbnUtb3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm9wZW5NZW51LWJ0bjpob3Zlcixcbi5vcGVuTWVudS1idG46YWN0aXZlLFxuLmNsb3NlTWVudS1idG46aG92ZXIsXG4ubWVudS1vcHRpb25zOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuI21lbnUgPiBwIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYnRuLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ubWVudS1vcHRpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2xvc2VNZW51LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5vcGVuTWVudS1idG4sXG4uY2xvc2VNZW51LWJ0bixcbi5tZW51LW9wdGlvbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2FtZS1oZWFkZXIge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4jaW52ZW50b3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLml0ZW1zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNiYXR0ZXJ5OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTZweDtcbiAgdG9wOiA2cHg7XG4gIHdpZHRoOiA2cHg7XG59XG5cbiNiYXR0ZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLmJhdHRlcnktZHJhaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBBbmltYXRpb24gY29kZSAqL1xuICAvKiAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3aWR0aENoYW5nZTsgU2FmYXJpIDQuMCAtIDguMCAqL1xuICAvKiAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNjBzOyBTYWZhcmkgNC4wIC0gOC4wICovXG4gIGFuaW1hdGlvbi1uYW1lOiB3aWR0aENoYW5nZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMDBzO1xufVxuXG5Aa2V5ZnJhbWVzIHdpZHRoQ2hhbmdlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5nYW1lLWhlYWRlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuXG4gICNtZW51IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuXG4gIC5tZW51LW9wdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cblxuICAub3Blbk1lbnUtYnRuLFxuICAubWVudS1vcHRpb25zIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgI2JhdHRlcnkge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gICNpbnZlbnRvcnkge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"header\">\n  <button (click)=\"openMenu()\" class=\"openMenu-btn\">Menu</button>\n  <div *ngIf=\"clickedMenu\" id=\"menu\">\n    <p>Menu</p>\n    <i (click)=\"closeMenu()\" class=\"material-icons closeMenu-btn\">\n      clear\n    </i>\n    <div class=\"btn-container\">\n      <button class=\"menu-options\">\n        How to play\n      </button>\n      <button class=\"menu-options\">\n        Reset Game\n      </button>\n      <button class=\"menu-options\">\n        Quit Game\n      </button>\n    </div>\n  </div>\n  <div class=\"game-header\">\n    <div id=\"battery\">\n      <div class=\"battery battery-drain\"></div>\n      <!-- {{ this.timerService.timeRemaining }} seconds left -->\n    </div>\n    <div id=\"inventory\">\n      <div class=\"items\">\n        filler 1\n      </div>\n      <div class=\"items\">\n        filler 2\n      </div>\n      <div class=\"items\">\n        filler 3\n      </div>\n      <div class=\"items\">\n        filler 4\n      </div>\n      <div class=\"items\">\n        filler 5\n      </div>\n      <div class=\"items\">\n        filler 6\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer.service */ "./src/app/timer.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(timerService) {
        this.timerService = timerService;
        this.clickedMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.startTimer = function () {
        this.timerService.startTimer();
    };
    HeaderComponent.prototype.stopTimer = function () {
        this.timerService.stopTimer();
    };
    HeaderComponent.prototype.openMenu = function () {
        this.clickedMenu = true;
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.clickedMenu = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "headerComponent",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

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

module.exports = "<nav>\n  <img src=\"\" alt=\"logo\">\n</nav>\n\n<button (click)=\"toggleShow()\">HOW TO PLAY</button>\n<button [routerLink]=\"['/room1front']\">PLAY</button>\n\n<section *ngIf=\"isShowing\">\n  <p>Directions on how to play...</p>\n</section>\n\n"

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

/***/ "./src/app/room-navigation/room-navigation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/room-navigation/room-navigation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb20tbmF2aWdhdGlvbi9yb29tLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/room-navigation/room-navigation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/room-navigation/room-navigation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  room-navigation works!\n</p>\n<img src=\"/src/assets/img/Arrow Left.png\" alt=\"Arrow Left\" />\n<img src=\"/src/assets/img/Arrow Down.png\" alt=\"Arrow Down\" />\n<img src=\"/src/assets/img/Arrow Right.png\" alt=\"Arrow Right\" />\n"

/***/ }),

/***/ "./src/app/room-navigation/room-navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/room-navigation/room-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: RoomNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomNavigationComponent", function() { return RoomNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomNavigationComponent = /** @class */ (function () {
    function RoomNavigationComponent() {
    }
    RoomNavigationComponent.prototype.ngOnInit = function () { };
    RoomNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "room-navigation",
            template: __webpack_require__(/*! ./room-navigation.component.html */ "./src/app/room-navigation/room-navigation.component.html"),
            styles: [__webpack_require__(/*! ./room-navigation.component.css */ "./src/app/room-navigation/room-navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RoomNavigationComponent);
    return RoomNavigationComponent;
}());



/***/ }),

/***/ "./src/app/room1front/room1front.component.css":
/*!*****************************************************!*\
  !*** ./src/app/room1front/room1front.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n    font-family: 'true_liesregular';\n    src: url('true_lies-webfont.woff2') format('woff2'),\n         url('true_lies-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\nh1 {\n    font-family: 'true_liesregular';\n    font-size: 30px;\n    font-weight: bold;\n    font-style: normal;\n}\n\nsection {\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbTFmcm9udC9yb29tMWZyb250LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0I7cURBQzhEO0lBQzlELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9yb29tMWZyb250L3Jvb20xZnJvbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAndHJ1ZV9saWVzcmVndWxhcic7XG4gICAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy90cnVlX2xpZXMtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnLi4vLi4vYXNzZXRzL3RydWVfbGllcy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEge1xuICAgIGZvbnQtZmFtaWx5OiAndHJ1ZV9saWVzcmVndWxhcic7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuc2VjdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/room1front/room1front.component.html":
/*!******************************************************!*\
  !*** ./src/app/room1front/room1front.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Room 1 Front Component</h1>\n\n<section *ngIf=\"!isShowing\">\n  <p>The insane surgeon, Dr. Lobotomy, has just escaped from jail. Known for performing unnecessary and inhumane operations on unwilling participants, he’s suspected to be lurking in your town. After staying late at the office one night, the last thing you remember is walking to your car in the dark. You just woke up here, strapped to a chair, and know you must be Dr. Lobotomy’s next victim. Use the items you find in the room to escape before he returns to finish his work!</p>\n  <button (click)=\"toggleShow()\">OK</button>\n</section>\n\n<section>\n  <div *ngFor=\"let item of items; index as i\">\n    <img src=\"{{ item.image }}\" alt=\"{{ item.item_name }}\" (click)=\"[selectItem(item), removeItem(i)]\">\n  </div>\n</section>\n\n<section>\n  <div *ngFor=\"let selected of selectedItems; index as i\">\n    <img src=\"{{ selected.image }}\" alt=\"{{ selected.item_name }}\">\n  </div>\n</section>"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer.service */ "./src/app/timer.service.ts");




var Room1frontComponent = /** @class */ (function () {
    function Room1frontComponent(itemsService, timerService) {
        this.itemsService = itemsService;
        this.timerService = timerService;
        this.isShowing = false;
    }
    Room1frontComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getItems().subscribe(function (response) {
            _this.items = response;
            _this.itemsService.setItems(response);
            console.log(_this.items);
        });
        this.selectedItems = this.itemsService.selectedItems;
        // console.log(this.selectedItems);
    };
    Room1frontComponent.prototype.selectItem = function (selectedItem) {
        // console.log(selectedItem);
        this.itemsService.collectItem(selectedItem);
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
            selector: "room1front",
            template: __webpack_require__(/*! ./room1front.component.html */ "./src/app/room1front/room1front.component.html"),
            styles: [__webpack_require__(/*! ./room1front.component.css */ "./src/app/room1front/room1front.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"],
            _timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"]])
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

module.exports = "<p>\n  room1left works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room1leftComponent = /** @class */ (function () {
    function Room1leftComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room1leftComponent.prototype.ngOnInit = function () {
    };
    Room1leftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room1left',
            template: __webpack_require__(/*! ./room1left.component.html */ "./src/app/room1left/room1left.component.html"),
            styles: [__webpack_require__(/*! ./room1left.component.css */ "./src/app/room1left/room1left.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
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

module.exports = "<p>\n  room1right works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room1rightComponent = /** @class */ (function () {
    function Room1rightComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room1rightComponent.prototype.ngOnInit = function () {
    };
    Room1rightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room1right',
            template: __webpack_require__(/*! ./room1right.component.html */ "./src/app/room1right/room1right.component.html"),
            styles: [__webpack_require__(/*! ./room1right.component.css */ "./src/app/room1right/room1right.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], Room1rightComponent);
    return Room1rightComponent;
}());



/***/ }),

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

module.exports = "<p>\n  room2front works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room2frontComponent = /** @class */ (function () {
    function Room2frontComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room2frontComponent.prototype.ngOnInit = function () {
    };
    Room2frontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room2front',
            template: __webpack_require__(/*! ./room2front.component.html */ "./src/app/room2front/room2front.component.html"),
            styles: [__webpack_require__(/*! ./room2front.component.css */ "./src/app/room2front/room2front.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
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

module.exports = "<p>\n  room2left works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room2leftComponent = /** @class */ (function () {
    function Room2leftComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room2leftComponent.prototype.ngOnInit = function () {
    };
    Room2leftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room2left',
            template: __webpack_require__(/*! ./room2left.component.html */ "./src/app/room2left/room2left.component.html"),
            styles: [__webpack_require__(/*! ./room2left.component.css */ "./src/app/room2left/room2left.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
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

module.exports = "<p>\n  room2right works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room2rightComponent = /** @class */ (function () {
    function Room2rightComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room2rightComponent.prototype.ngOnInit = function () {
    };
    Room2rightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room2right',
            template: __webpack_require__(/*! ./room2right.component.html */ "./src/app/room2right/room2right.component.html"),
            styles: [__webpack_require__(/*! ./room2right.component.css */ "./src/app/room2right/room2right.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], Room2rightComponent);
    return Room2rightComponent;
}());



/***/ }),

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

module.exports = "<p>\n  room3front works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room3frontComponent = /** @class */ (function () {
    function Room3frontComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room3frontComponent.prototype.ngOnInit = function () {
    };
    Room3frontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room3front',
            template: __webpack_require__(/*! ./room3front.component.html */ "./src/app/room3front/room3front.component.html"),
            styles: [__webpack_require__(/*! ./room3front.component.css */ "./src/app/room3front/room3front.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
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

module.exports = "<p>\n  room3left works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room3leftComponent = /** @class */ (function () {
    function Room3leftComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room3leftComponent.prototype.ngOnInit = function () {
    };
    Room3leftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room3left',
            template: __webpack_require__(/*! ./room3left.component.html */ "./src/app/room3left/room3left.component.html"),
            styles: [__webpack_require__(/*! ./room3left.component.css */ "./src/app/room3left/room3left.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
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

module.exports = "<p>\n  room3right works!\n</p>\n"

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
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items.service */ "./src/app/items.service.ts");



var Room3rightComponent = /** @class */ (function () {
    function Room3rightComponent(itemsService) {
        this.itemsService = itemsService;
    }
    Room3rightComponent.prototype.ngOnInit = function () {
    };
    Room3rightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room3right',
            template: __webpack_require__(/*! ./room3right.component.html */ "./src/app/room3right/room3right.component.html"),
            styles: [__webpack_require__(/*! ./room3right.component.css */ "./src/app/room3right/room3right.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], Room3rightComponent);
    return Room3rightComponent;
}());



/***/ }),

/***/ "./src/app/timer.service.ts":
/*!**********************************!*\
  !*** ./src/app/timer.service.ts ***!
  \**********************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimerService = /** @class */ (function () {
    function TimerService() {
        this.timeRemaining = 300;
    }
    TimerService.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeRemaining >= 0) {
                return _this.timeRemaining--;
            }
            else {
                _this.timeRemaining = 300;
            }
        }, 1000);
    };
    TimerService.prototype.stopTimer = function () {
        clearInterval(this.interval);
        this.timeRemaining = 300;
    };
    TimerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimerService);
    return TimerService;
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

module.exports = __webpack_require__(/*! /Users/tim/Documents/Grand Circus/GC Final Project/GC-Final-Project-Escape-Room/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map