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

module.exports = "tr.even {\r\n    background: black;\r\n    color: white;\r\n}\r\n\r\ntr.odd {\r\n    background: red;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ci5ldmVuIHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50ci5vZGQge1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.records = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _bot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bot.service */ "./src/app/bot.service.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
                    },
                    {
                        path: 'logout',
                        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"]
                    },
                    {
                        path: 'dashboard',
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]]
                    },
                    {
                        path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
                    },
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                    }
                ])
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _bot_service__WEBPACK_IMPORTED_MODULE_11__["BotService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, user) {
        this.auth = auth;
        this.router = router;
        this.user = user;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.auth.isLoggedIn) {
            return true;
        }
        return this.user.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.status) {
                _this.auth.setLoggedIn(true);
                return true;
            }
            else {
                _this.router.navigate(['login']);
                return false;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedInStatus = false;
    }
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserDetails = function (email, password) {
        return this.http.post('http://4yearproject.azurewebsites.net/api/auth/login', {
            email: email,
            password: password
        });
    };
    AuthService.prototype.registerUser = function (email, password) {
        return this.http.post('http://4yearproject.azurewebsites.net/api/auth/register', {
            email: email,
            password: password
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bot.service.ts":
/*!********************************!*\
  !*** ./src/app/bot.service.ts ***!
  \********************************/
/*! exports provided: BotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotService", function() { return BotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BotService = /** @class */ (function () {
    function BotService(http) {
        this.http = http;
    }
    BotService.prototype.Authentication = function () {
        var post = {
            "type": "message",
            "from": {
                "id": "user1"
            },
            "text": "hello"
        };
        return this.http.post('http://4yearproject.azurewebsites.net/api/bot/auth', post);
    };
    ;
    BotService.prototype.sendActivity = function (convId, message) {
        return this.http.post("http://4yearproject.azurewebsites.net/api/bot/sendActivity", {
            convId: convId,
            message: message
        });
    };
    ;
    BotService.prototype.retrieveActivity = function (convId, watermark) {
        return this.http.get("http://4yearproject.azurewebsites.net/api/bot/retrieveActivity/" + convId + "/" + watermark);
    };
    ;
    BotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BotService);
    return BotService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n  \r\n.button:hover {\r\n    background-color: #45a049;\r\n}\r\n  \r\ninput[type=text], select, textarea {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 40px;\r\n    margin-bottom: 35px;\r\n    resize: vertical;\r\n}\r\n  \r\ninput[type=submit] {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n      padding: 12px 20px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n}\r\n  \r\ninput[type=submit]:hover {\r\n      background-color: #45a049;\r\n}\r\n  \r\nh2{\r\n      color: white;\r\n}\r\n  \r\n.hero{\r\n    padding-top: 13%;\r\n    padding-bottom: 12%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtNQUNNLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtBQUNyQjs7QUFFQTtNQUNNLHlCQUF5QjtBQUMvQjs7QUFFQTtNQUNNLFlBQVk7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuICAgIFxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcbiAgICBcclxuaDJ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4gIFxyXG4uaGVyb3tcclxuICAgIHBhZGRpbmctdG9wOiAxMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTIlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-content\">\r\n  <div class=\"site-header\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/\" class=\"branding\">\r\n        <div class=\"logo-type\">\r\n          <h1 class=\"site-title\">WeatherApp</h1>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"main-navigation\">\r\n        <button type=\"button\" class=\"menu-toggle\"></button>\r\n        <ul class=\"menu\">\r\n          <li class=\"menu-item\"><a routerLink=\"/\">Home</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n          <li class=\"menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n          <li class=\"menu-item current-menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"mobile-navigation\" style=\"display: block;\">\r\n        <ul class=\"menu\">\r\n          <li class=\"menu-item\"><a routerLink=\"/\">Home</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n          <li class=\"menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n          <li class=\"menu-item current-menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"hero\">\r\n    <div class=\"container\">\r\n      <h2>{{quote}} by {{email}} </h2>\r\n      <a routerLink=\"/logout\" class=\"button\">Logout</a>\r\n      <div id=\"controls\">\r\n        <input type=\"text\" placeholder=\"Type new Quote\" id=\"myQuote\">\r\n        <input type=\"submit\" value=\"Update Quote\" (click)=\"updateQuote($event)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <footer class=\"site-footer\">\r\n    <div class=\"container\">\r\n      <p class=\"colophon\">&copy; 2019 Tudor Voda. All rights reserved.</p>\r\n    </div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user, router) {
        this.user = user;
        this.router = router;
        this.quote = "Loading your personal quote";
        this.email = "Getting your email...";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getData().subscribe(function (data) {
            if (data.status) {
                _this.quote = data.quote;
                _this.email = data.email;
            }
            else {
                _this.router.navigate(['logout']);
            }
        });
    };
    ;
    DashboardComponent.prototype.updateQuote = function (event) {
        var value = event.target.parentNode.querySelector('#myQuote').value;
        this.user.updateQuote(value).subscribe(function (data) {
            if (data.success) {
                alert("Your quote was updated");
                window.location.reload();
            }
            else {
                alert("Error");
            }
        });
    };
    ;
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n  }\r\n\r\n  input[type=submit] {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n      padding: 12px 20px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n    }\r\n\r\n  input[type=submit]:hover {\r\n      background-color: #45a049;\r\n    }\r\n\r\n  h2{\r\n      color: white;\r\n  }\r\n\r\n  .hero{\r\n      padding-top: 5.5%;\r\n      padding-bottom: 5%;\r\n  }\r\n\r\n  .controls{\r\n    padding-top: 10%;\r\n  }\r\n\r\n  .chatContainer {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 2px solid #ddd;\r\n    background: white;\r\n    color: black;\r\n  }\r\n\r\n  .chatContainer > .chatHeader {\r\n  padding: 5px;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n  .chatContainer > .chatHeader > h2 {\r\n  color:black;\r\n}\r\n\r\n  .chatContainer > .chatMessages{\r\n  height: 400px;\r\n  border-bottom: 1px solid #ddd;\r\n  overflow-y: scroll;\r\n  border: solid 1px #EEE;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n  .chatContainer > .chatBottom form input[type='submit']{\r\n  padding: 6px;\r\n  border: 1px solid #ddd;\r\n  cursor: pointer;\r\n}\r\n\r\n  .chatContainer > .chatBottom form input[type='text']{\r\n  width: 70%;\r\n  padding: 3px;\r\n  padding-left: 10px;\r\n  border: 1px solid ;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  height: 30px;\r\n}\r\n\r\n  .messages {\r\n  margin-top: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n  .message {\r\n  border-radius: 20px;\r\n  padding: 8px 15px;\r\n  margin-top: 1px;\r\n  margin-bottom: 5px;\r\n  display: inline-block;\r\n}\r\n\r\n  .yours {\r\n  align-items: flex-start;\r\n}\r\n\r\n  .yours .message {\r\n  margin-right: 25%;\r\n  background-color: #eee;\r\n  position: relative;\r\n}\r\n\r\n  .yours .message.last:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 0;\r\n  bottom: 0;\r\n  left: -7px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background: #eee;\r\n  border-bottom-right-radius: 15px;\r\n}\r\n\r\n  .yours .message.last:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  left: -10px;\r\n  width: 10px;\r\n  height: 20px;\r\n  background: white;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n  .mine {\r\n  align-items: flex-end;\r\n}\r\n\r\n  .mine .message {\r\n  color: white;\r\n  margin-left: 25%;\r\n  background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);\r\n  background-attachment: fixed;\r\n  position: relative;\r\n}\r\n\r\n  .mine .message.last:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 0;\r\n  bottom: 0;\r\n  right: -8px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background: linear-gradient(to bottom, #00D0EA 0%, #0085D1 100%);\r\n  background-attachment: fixed;\r\n  border-bottom-left-radius: 15px;\r\n}\r\n\r\n  .mine .message.last:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: 1;\r\n  bottom: 0;\r\n  right: -10px;\r\n  width: 10px;\r\n  height: 20px;\r\n  background: white;\r\n  border-bottom-left-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO01BQ0kseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCOztFQUVGO01BQ0kseUJBQXlCO0lBQzNCOztFQUVGO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTtNQUNJLGlCQUFpQjtNQUNqQixrQkFBa0I7RUFDdEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVGO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7RUFFQTtFQUNFLFdBQVc7QUFDYjs7RUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7O0FBRWY7O0VBR0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0VBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7RUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0VBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztFQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0VBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdFQUFnRTtFQUNoRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGdFQUFnRTtFQUNoRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxuICAgIH1cclxuICAgIFxyXG4gIGgye1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJve1xyXG4gICAgICBwYWRkaW5nLXRvcDogNS41JTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRyb2xze1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5jaGF0Q29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbi5jaGF0Q29udGFpbmVyID4gLmNoYXRIZWFkZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLmNoYXRDb250YWluZXIgPiAuY2hhdEhlYWRlciA+IGgyIHtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmNoYXRDb250YWluZXIgPiAuY2hhdE1lc3NhZ2Vze1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNFRUU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNoYXRDb250YWluZXIgPiAuY2hhdEJvdHRvbSBmb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCdde1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXRDb250YWluZXIgPiAuY2hhdEJvdHRvbSBmb3JtIGlucHV0W3R5cGU9J3RleHQnXXtcclxuICB3aWR0aDogNzAlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlcyB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ueW91cnMge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ueW91cnMgLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ueW91cnMgLm1lc3NhZ2UubGFzdDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IC03cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLnlvdXJzIC5tZXNzYWdlLmxhc3Q6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm1pbmUge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm1pbmUgLm1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMEQwRUEgMCUsICMwMDg1RDEgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5taW5lIC5tZXNzYWdlLmxhc3Q6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogLThweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwRDBFQSAwJSwgIzAwODVEMSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5taW5lIC5tZXNzYWdlLmxhc3Q6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-content\">\r\n\t<div class=\"site-header\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<a routerLink=\"/\" class=\"branding\">\r\n\t\t\t\t<div class=\"logo-type\">\r\n\t\t\t\t\t<h1 class=\"site-title\">WeatherApp</h1>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\r\n\t\t\t<div class=\"main-navigation\">\r\n\t\t\t\t<button type=\"button\" class=\"menu-toggle\"></button>\r\n\t\t\t\t<ul class=\"menu\">\r\n\t\t\t\t\t<li class=\"menu-item current-menu-item\"><a routerLink=\"/\">Home</a></li>\r\n\t\t\t\t\t<li class=\"menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n\t\t\t\t\t<li class=\"menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n\t\t\t\t\t<li class=\"menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"mobile-navigation\" style=\"display: block;\">\r\n\t\t\t\t<ul class=\"menu\">\r\n\t\t\t\t\t<li class=\"menu-item current-menu-item\"><a routerLink=\"/\">Home</a></li>\r\n\t\t\t\t\t<li class=\"menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n\t\t\t\t\t<li class=\"menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n\t\t\t\t\t<li class=\"menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"hero\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class='chatContainer'>\r\n\t\t\t\t\t\t<div class='chatHeader'>\r\n\t\t\t\t\t\t\t<h2> Weather Bot</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class='chatMessages'>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let m of message;let i=index\">\r\n\t\t\t\t\t\t\t\t<div class=\"mine messages\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"message\" id=\"sent\">\r\n\t\t\t\t\t\t\t\t\t\t<p> {{ m }} </p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngFor=\"let a of activities[i]\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"yours messages\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"message\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p> {{a}} </p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class='chatBottom'>\r\n\t\t\t\t\t\t\t<form id='chatForm'>\r\n\t\t\t\t\t\t\t\t<input type='text' name='text' id='message' onfocus=\"this.value=''\" value='{{city}}'\r\n\t\t\t\t\t\t\t\t\tplaceholder='' />\r\n\t\t\t\t\t\t\t\t<input type='submit' name='submit' value='Send message'\r\n\t\t\t\t\t\t\t\t\t(click)=\"sendActivity($event)\" />\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class='chatContainer'>\r\n\t\t\t\t\t\t<div class='chatMessages' id=\"card\">\r\n\t\t\t\t\t\t\t<p> </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t<input type=\"submit\" (click)=\"getCity([lat],[lon] )\" value=\"Get Location\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<footer class=\"site-footer\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<p class=\"colophon\">&copy; 2019 Tudor Voda. All rights reserved.</p>\r\n\t\t</div>\r\n\t</footer>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bot.service */ "./src/app/bot.service.ts");
/* harmony import */ var adaptivecards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! adaptivecards */ "./node_modules/adaptivecards/lib/adaptivecards.js");
/* harmony import */ var adaptivecards__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(adaptivecards__WEBPACK_IMPORTED_MODULE_5__);






var HomeComponent = /** @class */ (function () {
    function HomeComponent(bot, user, httpClient) {
        this.bot = bot;
        this.user = user;
        this.httpClient = httpClient;
        this.activities = [];
        this.watermark = "0";
        this.message = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationPosition = position,
                    _this.lat = _this.geolocationPosition.coords.latitude,
                    _this.lon = _this.geolocationPosition.coords.longitude,
                    console.log(position);
            }, function (error) {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            });
        }
        ;
        this.Authentication();
    };
    ;
    HomeComponent.prototype.renderCard = function () {
        var adaptiveCard = new adaptivecards__WEBPACK_IMPORTED_MODULE_5__["AdaptiveCard"]();
        adaptiveCard.hostConfig = new adaptivecards__WEBPACK_IMPORTED_MODULE_5__["HostConfig"]({
            fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
        });
        adaptiveCard.onExecuteAction = function (action) { alert("Ow!"); };
        adaptiveCard.parse(this.card);
        var renderedCard = adaptiveCard.render();
        var node = document.createElement("P");
        var textnode = document.body.appendChild(renderedCard);
        node.appendChild(textnode);
        document.getElementById("card").appendChild(node);
    };
    HomeComponent.prototype.Authentication = function () {
        var _this = this;
        this.bot.Authentication().subscribe(function (data) {
            if (!data) {
                alert("Error");
            }
            else {
                console.log("Success");
                _this.convId = data.conversationId;
            }
        });
    };
    ;
    HomeComponent.prototype.sendActivity = function (event) {
        var _this = this;
        var value = event.target.parentNode.querySelector('#message').value;
        this.message.push(value);
        this.bot.sendActivity(this.convId, value).subscribe(function (data) {
            if (!data) {
                alert("Error");
            }
            else {
                console.log("Success");
                _this.id = data.id;
                setTimeout(function () { return _this.retrieveActivity(); }, 2500);
            }
        });
    };
    ;
    HomeComponent.prototype.retrieveActivity = function () {
        var _this = this;
        this.bot.retrieveActivity(this.convId, this.watermark).subscribe(function (data) {
            if (!data) {
                alert("Error");
            }
            else {
                console.log("Success");
                _this.watermark = data.watermark;
                if (data.activities[1].text != null) {
                    var a = data.activities[1].text;
                    a = Array.of(a);
                    _this.activities.push(a);
                }
                else if (data.activities[1].attachments[0].content != null) {
                    _this.card = data.activities[1].attachments[0].content;
                    _this.renderCard();
                }
            }
        });
    };
    ;
    HomeComponent.prototype.getCity = function (latitude, longitude) {
        var _this = this;
        this.user.getCity(latitude, longitude).subscribe(function (data) {
            if (data.success) {
                console.log("Success");
                _this.city = "Weather in " + data.city;
            }
            else {
                alert("Error");
            }
        });
    };
    ;
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bot_service__WEBPACK_IMPORTED_MODULE_4__["BotService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());

;


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  margin-top: 6px;\r\n  margin-bottom: 16px;\r\n  resize: vertical;\r\n}\r\ninput[type=password], select, textarea {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n  }\r\ninput[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n  }\r\nh2{\r\n    color: white;\r\n}\r\n.hero{\r\n    padding-top: 13%;\r\n    padding-bottom: 13%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUVGO0lBQ0kseUJBQXlCO0VBQzNCO0FBRUY7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxuICB9XHJcbiAgXHJcbmgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVyb3tcclxuICAgIHBhZGRpbmctdG9wOiAxMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-content\">\r\n  <div class=\"site-header\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/\" class=\"branding\">\r\n        <div class=\"logo-type\">\r\n          <h1 class=\"site-title\">WeatherApp</h1>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"main-navigation\">\r\n        <button type=\"button\" class=\"menu-toggle\"></button>\r\n        <ul class=\"menu\">\r\n          <li class=\"menu-item\"><a routerLink=\"/\">Home</a></li>\r\n          <li class=\"menu-item current-menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n          <li class=\"menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"mobile-navigation\" style=\"display: block;\">\r\n        <ul class=\"menu\">\r\n          <li class=\"menu-item\"><a routerLink=\"/\">Home</a></li>\r\n          <li class=\"menu-item current-menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n          <li class=\"menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"hero\">\r\n    <div class=\"container\">\r\n      <form (submit)=\"loginUser($event)\">\r\n        <h2>Login Here</h2>\r\n        <div>\r\n          <input type=\"text\" autocomplete=\"off\" placeholder=\"Email\" id=\"email\">\r\n        </div>\r\n        <div>\r\n          <input type=\"password\" autocomplete=\"off\" placeholder=\"Password\" id=\"password\">\r\n        </div>\r\n        <div>\r\n          <input type=\"submit\" value=\"Submit\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <footer class=\"site-footer\">\r\n    <div class=\"container\">\r\n      <p class=\"colophon\">&copy; 2019 Tudor Voda. All rights reserved.</p>\r\n    </div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth, router) {
        this.Auth = Auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    ;
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var email = target.querySelector('#email').value;
        var password = target.querySelector('#password').value;
        this.Auth.getUserDetails(email, password).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['dashboard']);
                _this.Auth.setLoggedIn(true);
            }
            else {
                window.alert(data.message);
            }
        });
    };
    ;
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

;


/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Logging you out!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(user, router, auth) {
        this.user = user;
        this.router = router;
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.logout().subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['']);
                _this.auth.setLoggedIn(false);
            }
            else {
                window.alert('Some problem');
            }
        });
    };
    ;
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());

;


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n}\r\n\r\ninput[type=password], select, textarea {\r\n      width: 100%;\r\n      padding: 12px;\r\n      border: 1px solid #ccc;\r\n      border-radius: 4px;\r\n      box-sizing: border-box;\r\n      margin-top: 6px;\r\n      margin-bottom: 16px;\r\n      resize: vertical;\r\n}\r\n\r\ninput[type=submit] {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n      padding: 12px 20px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n}\r\n\r\ninput[type=submit]:hover {\r\n      background-color: #45a049;\r\n}\r\n\r\nh2{\r\n      color: white;\r\n}\r\n\r\n.hero{\r\n    padding-top: 10%;\r\n    padding-bottom: 9.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7TUFDTSxXQUFXO01BQ1gsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsZ0JBQWdCO0FBQ3RCOztBQUVBO01BQ00seUJBQXlCO01BQ3pCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO0FBQ3JCOztBQUVBO01BQ00seUJBQXlCO0FBQy9COztBQUVBO01BQ00sWUFBWTtBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0LCB0ZXh0YXJlYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4gIFxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gICAgXHJcbmlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuICAgIFxyXG5oMntcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiAgXHJcbi5oZXJve1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5LjUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-content\">\r\n  <div class=\"site-header\">\r\n    <div class=\"container\">\r\n      <a routerLink=\"/\" class=\"branding\">\r\n        <div class=\"logo-type\">\r\n          <h1 class=\"site-title\">WeatherApp</h1>\r\n        </div>\r\n      </a>\r\n\r\n      <div class=\"main-navigation\">\r\n        <button type=\"button\" class=\"menu-toggle\"></button>\r\n        <ul class=\"menu\">\r\n          <li class=\"menu-item\"><a routerLink=\"/\">Home</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n          <li class=\"menu-item current-menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"mobile-navigation\" style=\"display: block;\">\r\n        <ul class=\"menu\">\r\n          <li class=\"menu-item\"><a routerLink=\"/\">Home</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/login\">Login</a></li>\r\n          <li class=\"menu-item current-menu-item\"> <a routerLink=\"/register\">Register</a></li>\r\n          <li class=\"menu-item\"><a routerLink=\"/dashboard\">Dashboard</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"hero\">\r\n    <div class=\"container\">\r\n      <h2>Register Here</h2>\r\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && registerUser($event)\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\r\n            [ngClass]=\"{'is-invalid':f.submitted && email.invalid}\" name=\"email\" required email />\r\n          <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"email.errors.required\">Email Name is required</div>\r\n            <div *ngIf=\"email.errors.email\">Email must be a valid email Address</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n            [ngClass]=\"{'is-invalid':f.submitted && password.invalid}\" name=\"password\" required minlength=\"6\" />\r\n          <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"password.errors.required\">Password Name is required</div>\r\n            <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"cpassword\">Confirm Password</label>\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"model.cpassword\" #cpassword=\"ngModel\"\r\n            [ngClass]=\"{'is-invalid':f.submitted && cpassword.invalid}\" name=\"cpassword\" required minlength=\"6\" />\r\n          <div *ngIf=\"f.submitted && cpassword.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"cpassword.errors.required\">Password Name is required</div>\r\n            <div *ngIf=\"cpassword.errors.minlength\">Password must be at least 6 characters</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"submit\" value=\"Register\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <footer class=\"site-footer\">\r\n    <div class=\"container\">\r\n      <p class=\"colophon\">&copy; 2019 Tudor Voda. All rights reserved.</p>\r\n    </div>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    ;
    RegisterComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var errors = [];
        var email = this.model.email;
        var password = this.model.password;
        var cpassword = this.model.cpassword;
        if (password != cpassword) {
            errors.push("Passwords do not match");
        }
        ;
        if (errors.length === 0) {
            this.auth.registerUser(email, password).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(['dashboard']);
                }
            });
        }
        ;
    };
    ;
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

;


/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getData = function () {
        return this.http.get('http://4yearproject.azurewebsites.net/api/userdata/data');
    };
    UserService.prototype.updateQuote = function (value) {
        return this.http.post('http://4yearproject.azurewebsites.net/api/userdata/quote', {
            value: value
        });
    };
    UserService.prototype.isLoggedIn = function () {
        return this.http.get('http://4yearproject.azurewebsites.net/api/userdata/isloggedin');
    };
    UserService.prototype.logout = function () {
        return this.http.get('http://4yearproject.azurewebsites.net/api/userdata/logout');
    };
    UserService.prototype.getCity = function (latitude, longitude) {
        return this.http.post('http://4yearproject.azurewebsites.net/api/userdata/location', {
            latitude: latitude,
            longitude: longitude
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! C:\Users\Tudor\Downloads\FinalYearProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map