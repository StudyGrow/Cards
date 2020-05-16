(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/cards-page/cards-page.component */ "./src/app/routes/cards-page/cards-page.component.ts");
/* harmony import */ var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/login-page/login-page.component */ "./src/app/routes/login-page/login-page.component.ts");
/* harmony import */ var _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/signup-page/signup-page.component */ "./src/app/routes/signup-page/signup-page.component.ts");
/* harmony import */ var _routes_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/about/about.component */ "./src/app/routes/about/about.component.ts");
/* harmony import */ var _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/account-page/account-page.component */ "./src/app/routes/account-page/account-page.component.ts");










const routes = [
    { path: "", component: _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: "vorlesung/:abrv", component: _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_3__["CardsPageComponent"] },
    { path: "login", component: _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: "signup", component: _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__["SignupPageComponent"] },
    { path: "about", component: _routes_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: "account", component: _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_7__["AccountPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.titleService.setTitle("Home");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ng_katex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-katex */ "./node_modules/ng-katex/__ivy_ngcc__/fesm2015/ng-katex.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-card-form/add-card-form.component */ "./src/app/components/add-card-form/add-card-form.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-lecture-form/add-lecture-form.component */ "./src/app/components/add-lecture-form/add-lecture-form.component.ts");
/* harmony import */ var _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/lectures/lectures.component */ "./src/app/components/lectures/lectures.component.ts");
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/cards-page/cards-page.component */ "./src/app/routes/cards-page/cards-page.component.ts");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/update-card-form/update-card-form.component */ "./src/app/components/update-card-form/update-card-form.component.ts");
/* harmony import */ var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./routes/login-page/login-page.component */ "./src/app/routes/login-page/login-page.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./routes/signup-page/signup-page.component */ "./src/app/routes/signup-page/signup-page.component.ts");
/* harmony import */ var _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/signup-form/signup-form.component */ "./src/app/components/signup-form/signup-form.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _routes_about_about_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routes/about/about.component */ "./src/app/routes/about/about.component.ts");
/* harmony import */ var _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./routes/account-page/account-page.component */ "./src/app/routes/account-page/account-page.component.ts");
//Modules










//Components










//Services


//Material Modules


//Gestures









//Pipes



//Config to allow swipe gestures on carousel
class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            pan: { direction: Hammer.DIRECTION_All },
            swipe: { direction: Hammer.DIRECTION_VERTICAL },
        };
    }
    buildHammer(element) {
        const mc = new Hammer(element, {
            touchAction: "auto",
            inputClass: Hammer.SUPPORT_POINTER_EVENTS
                ? Hammer.PointerEventInput
                : Hammer.TouchInput,
            recognizers: [
                [
                    Hammer.Swipe,
                    {
                        direction: Hammer.DIRECTION_HORIZONTAL,
                    },
                ],
            ],
        });
        return mc;
    }
}
MyHammerConfig.ɵfac = function MyHammerConfig_Factory(t) { return ɵMyHammerConfig_BaseFactory(t || MyHammerConfig); };
MyHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyHammerConfig, factory: MyHammerConfig.ɵfac });
const ɵMyHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MyHammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyHammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_states_service__WEBPACK_IMPORTED_MODULE_20__["StatesService"],
        _services_http_service__WEBPACK_IMPORTED_MODULE_21__["HttpService"],
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_28__["StoreModule"].forRoot({}, {}),
            ng_katex__WEBPACK_IMPORTED_MODULE_9__["KatexModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["SearchBarComponent"],
        _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_13__["AddCardFormComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_15__["CardComponent"],
        _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_16__["AddLectureFormComponent"],
        _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_17__["LecturesComponent"],
        _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_18__["HomePageComponent"],
        _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_19__["CardsPageComponent"],
        _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_23__["UpdateCardFormComponent"],
        _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_24__["LoginPageComponent"],
        _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__["LoginFormComponent"],
        _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_26__["SignupPageComponent"],
        _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_27__["SignupFormComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
        _routes_about_about_component__WEBPACK_IMPORTED_MODULE_30__["AboutComponent"],
        _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_31__["AccountPageComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_28__["StoreRootModule"], ng_katex__WEBPACK_IMPORTED_MODULE_9__["KatexModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_12__["SearchBarComponent"],
                    _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_13__["AddCardFormComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_15__["CardComponent"],
                    _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_16__["AddLectureFormComponent"],
                    _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_17__["LecturesComponent"],
                    _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_18__["HomePageComponent"],
                    _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_19__["CardsPageComponent"],
                    _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_23__["UpdateCardFormComponent"],
                    _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_24__["LoginPageComponent"],
                    _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__["LoginFormComponent"],
                    _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_26__["SignupPageComponent"],
                    _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_27__["SignupFormComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                    _routes_about_about_component__WEBPACK_IMPORTED_MODULE_30__["AboutComponent"],
                    _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_31__["AccountPageComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_15__["SafeHtmlPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_28__["StoreModule"].forRoot({}, {}),
                    ng_katex__WEBPACK_IMPORTED_MODULE_9__["KatexModule"],
                ],
                providers: [
                    _services_states_service__WEBPACK_IMPORTED_MODULE_20__["StatesService"],
                    _services_http_service__WEBPACK_IMPORTED_MODULE_21__["HttpService"],
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-card-form/add-card-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-card-form/add-card-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddCardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardFormComponent", function() { return AddCardFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Card */ "./src/app/models/Card.ts");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class AddCardFormComponent {
    constructor(cardsService, stateService, http) {
        this.cardsService = cardsService;
        this.stateService = stateService;
        this.http = http;
    }
    ngOnInit() {
        this.http
            .getCurrentLecture()
            .subscribe((lecture) => (this.lecture = lecture));
    }
    setStyle() { }
    onSubmit(f) {
        this.newCard = new _models_Card__WEBPACK_IMPORTED_MODULE_1__["Card"](f.value.thema, f.value.content, this.lecture.abrv, 0);
        this.cardsService.addCard(this.newCard).subscribe((res) => {
            f.reset();
        });
    }
    inField() {
        this.stateService.setTyping(true);
    }
    resetNav() {
        this.stateService.setTyping(false);
    }
    //Function to set style of small character indicator
    setThemaCharIndicatorStyle(thema) {
        if (thema.value) {
            return {
                color: (thema.value && thema.value.length > 0 && thema.value.length < 3) ||
                    thema.value.length > 60
                    ? "#ff0000"
                    : "#000000",
            };
        }
        else {
            return { color: "#000000" };
        }
    }
    //Function to set style of small character indicator
    setContentCharIndicatorStyle(content) {
        if (content.value) {
            return {
                color: content.value && content.value.length > 400 ? "#ff0000" : "#000000",
            };
        }
        else {
            return { color: "#000000" };
        }
    }
    getLength(elem) {
        if (elem.value) {
            return elem.value.length;
        }
        else {
            return 0;
        }
    }
    isDisabled(content, thema) {
        if (!content.value || !thema.value) {
            return true;
        }
        return (content.value.length > 400 ||
            (thema.value.length > 0 && thema.value.length < 3) ||
            thema.value.length > 60);
    }
}
AddCardFormComponent.ɵfac = function AddCardFormComponent_Factory(t) { return new (t || AddCardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
AddCardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCardFormComponent, selectors: [["app-add-card-form"]], decls: 20, vars: 5, consts: [["id", "addCard"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "thema"], ["id", "thema", "name", "thema", "type", "text", "placeholder", "Thema", "minlength", "3", "required", "", "ngModel", "", 1, "form-control", 3, "focus", "blur"], ["thema", "ngModel"], [1, "form-text", "float-right", 3, "ngStyle"], ["for", "content"], ["id", "content", "name", "content", "rows", "5", "required", "", "ngModel", "", 1, "form-control", 3, "focus", "blur"], ["content", "ngModel"], ["id", "addBtn", "type", "submit", "value", "Hinzuf\u00FCgen", 1, "btn", "btn-primary", "mb-2", 3, "disabled"]], template: function AddCardFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCardFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r510); const _r507 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r507); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Karteikarte hinzuf\u00FCgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00DCberschrift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AddCardFormComponent_Template_input_focus_8_listener() { return ctx.inField(); })("blur", function AddCardFormComponent_Template_input_blur_8_listener() { return ctx.resetNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Informationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AddCardFormComponent_Template_textarea_focus_15_listener() { return ctx.inField(); })("blur", function AddCardFormComponent_Template_textarea_blur_15_listener() { return ctx.resetNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r508 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setThemaCharIndicatorStyle(_r508));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r508), "/60 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setContentCharIndicatorStyle(_r509));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r509), "/400 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r24, _r23));
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r509, _r508));
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["form[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width:90%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2FyZC1mb3JtL2FkZC1jYXJkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNhcmQtZm9ybS9hZGQtY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDo5MCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCardFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-add-card-form",
                templateUrl: "./add-card-form.component.html",
                styleUrls: ["./add-card-form.component.css"],
            }]
    }], function () { return [{ type: _services_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"] }, { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/add-lecture-form/add-lecture-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/add-lecture-form/add-lecture-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddLectureFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLectureFormComponent", function() { return AddLectureFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Vorlesung__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Vorlesung */ "./src/app/models/Vorlesung.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class AddLectureFormComponent {
    constructor(http, statesService) {
        this.http = http;
        this.statesService = statesService;
        this.emitVl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onSubmit(f) {
        let newLecture = new _models_Vorlesung__WEBPACK_IMPORTED_MODULE_1__["Vorlesung"](f.value.name, f.value.abrv.toLowerCase());
        this.statesService.setLoadingState(true);
        this.http.addLecture(newLecture).subscribe((response) => {
            this.statesService.setLoadingState(false);
            this.emitVl.emit(newLecture);
        });
        f.reset();
    }
    setCharIndicatorStyle(field, max) {
        if (field.value) {
            return {
                color: field.value.length > max ? "#ff0000" : "#000000",
            };
        }
        else {
            return { color: "#000000" };
        }
    }
    getLength(elem) {
        if (elem.value) {
            return elem.value.length;
        }
        else {
            return 0;
        }
    }
    isDisabled(name, abrv) {
        if (!name.value || !abrv.value) {
            return true;
        }
        else {
            return (abrv.value.length == 0 ||
                abrv.value.length < 3 ||
                abrv.value.length > 7 ||
                name.value.length == 0 ||
                name.value.length > 60);
        }
    }
}
AddLectureFormComponent.ɵfac = function AddLectureFormComponent_Factory(t) { return new (t || AddLectureFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"])); };
AddLectureFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddLectureFormComponent, selectors: [["app-add-lecture-form"]], outputs: { emitVl: "emitVl" }, decls: 20, vars: 5, consts: [["id", "addLecture"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "name"], ["id", "name", "name", "name", "type", "text", "placeholder", "Datenstrukturen und Algorithmen", "minlength", "3", "required", "", "ngModel", "", 1, "form-control"], ["name", "ngModel"], [1, "form-text", "float-right", 3, "ngStyle"], ["for", "abrv"], ["id", "abrv", "name", "abrv", "required", "", "ngModel", "", "placeholder", "Dsal", 1, "form-control"], ["abrv", "ngModel"], ["id", "addBtn", "type", "submit", "value", "Hinzuf\u00FCgen", 1, "btn", "btn-primary", "mb-2", 3, "disabled"]], template: function AddLectureFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddLectureFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r40); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vorlesung hinzuf\u00FCgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vorlesungsname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Abk\u00FCrzung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setCharIndicatorStyle(_r41, 60));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r41), "/60 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setCharIndicatorStyle(_r42, 7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r42), "/7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r41, _r42));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWxlY3R1cmUtZm9ybS9hZGQtbGVjdHVyZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLectureFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-add-lecture-form",
                templateUrl: "./add-lecture-form.component.html",
                styleUrls: ["./add-lecture-form.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"] }]; }, { emitVl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: SafeHtmlPipe, CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var latex_js_dist_latex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! latex.js/dist/latex.js */ "./node_modules/latex.js/dist/latex.js");
/* harmony import */ var latex_js_dist_latex_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(latex_js_dist_latex_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");







const _c0 = ["test"];
class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safeHtml' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();
class CardComponent {
    constructor(cs) {
        this.cs = cs;
        this.styleAppend = `<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/katex.css"><link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/article.css"><script src="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/dist/js/base.js"></script>`;
        this.parsed = [];
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.cs.getActiveCardIndex().subscribe((change) => {
            //hides te card content when carousel slides
            this.content.hide();
        });
        if (this.card.latex != 0) {
            this.parse(this.card.content);
        }
        else {
            this.parsed.push(this.card.content);
        }
    }
    parse(cardContent) {
        var latex = cardContent;
        let generator = new latex_js_dist_latex_js__WEBPACK_IMPORTED_MODULE_1__["HtmlGenerator"]({ hyphenate: false });
        let doc = Object(latex_js_dist_latex_js__WEBPACK_IMPORTED_MODULE_1__["parse"])(latex, { generator: generator }).htmlDocument();
        latex = this.styleAppend + doc.body.innerHTML;
        this.parsed.push(latex);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], viewQuery: function CardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { card: "card" }, decls: 14, vars: 5, consts: [[1, "card", 3, "id"], [1, "card-header"], [1, "card-body"], ["mdbBtn", "", "color", "primary", "type", "button", "mdbWavesEffect", "", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-caret-down"], ["mdbCollapse", "", 1, ""], ["test", ""], ["lang", "de"], [3, "innerHtml"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1064 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1064); const _r1063 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r1063.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Mehr dazu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "safeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "`", ctx.card._id, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.thema, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("paragraph", ctx.card.content);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CollapseComponent"], ng_katex__WEBPACK_IMPORTED_MODULE_3__["KatexParagraphComponent"]], styles: ["pre[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 0;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\npre[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFNBQVM7RUFDVDs7MkRBRXlEOztFQUV6RCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5wcmUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iXX0= */"] });
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, ctx.parsed[0]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CollapseComponent"]], pipes: [SafeHtmlPipe], styles: ["pre[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 0;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\npre[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFNBQVM7RUFDVDs7MkRBRXlEOztFQUV6RCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5wcmUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iXX0= */"] });
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-card",
                templateUrl: "./card.component.html",
                styleUrls: ["./card.component.css"],
            }]
    }], function () { return [{ type: _services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["test", { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.component */ "./src/app/components/card/card.component.ts");









const _c0 = ["mycarousel"];
function CarouselComponent_div_9_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r445 = ctx.$implicit;
    const i_r446 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r446.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r445);
} }
function CarouselComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r448); const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r447.goToPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function CarouselComponent_div_9_Template_div_swipeleft_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r448); const ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r449.goToPrev(); })("swiperight", function CarouselComponent_div_9_Template_div_swiperight_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r448); const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r450.goToNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-carousel", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeSlideChange", function CarouselComponent_div_9_Template_mdb_carousel_activeSlideChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r448); const ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r451.onSlide($event); })("activeSlideIndexChange", function CarouselComponent_div_9_Template_mdb_carousel_activeSlideIndexChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r448); const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r452.activeSlide = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_9_ng_container_6_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_9_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r448); const ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r453.goToNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeSlideIndex", ctx_r442.activeSlide)("animation", "slide")("isControls", false)("allowSwipe", true)("interval", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r442.cards);
} }
class CarouselComponent {
    constructor(httpService, stateService, cardsService) {
        this.httpService = httpService;
        this.stateService = stateService;
        this.cardsService = cardsService;
        this.activeSlide = 0;
    }
    swipePrev(event) {
        this.carousel.previousSlide();
    }
    swipeNext(event) {
        this.carousel.nextSlide();
    }
    ngOnInit() {
        this.httpService.getUser().subscribe((user) => (this.user = user));
        this.httpService.getCurrentLecture().subscribe((lecture) => {
            this.lecture = lecture;
            this.title = this.lecture.name;
        });
        this.cardsService.getCards().subscribe((cards) => {
            this.cards = cards;
        }); //load the specific cards from the server by subscribing to the observable that the card-service provides
        this.stateService.setFormMode("none");
        this.stateService.getFormMode().subscribe((mode) => {
            this.formShow = mode == "add";
            this.formMode = mode;
        });
        this.cardsService.getNewCardIndex().subscribe((index) => {
            if (this.carousel && this.activeSlide != index) {
                this.activeSlide = index;
                this.carousel.selectSlide(index);
            }
        });
    }
    toggleAddView() {
        if (this.formMode != "edit") {
            if (this.formMode == "add") {
                this.stateService.setFormMode("none");
            }
            else {
                this.stateService.setFormMode("add");
            }
        }
    }
    enableEdit() {
        this.stateService.setFormMode("edit");
    }
    setClass() {
        return !this.formShow ? "btn btn-light" : "btn btn-info";
    }
    selectSlide(n) {
        this.carousel.selectSlide(n.toString());
    }
    showRandomCard() {
        var rand = this.activeSlide;
        var count = 0;
        while (count < 5 && rand == this.activeSlide) {
            //calculate a new random index
            count++;
            rand = Math.floor(Math.random() * this.cards.length); //random Cardindex
        }
        this.carousel.selectSlide(rand.toString());
    }
    goToPrev() {
        if (this.formMode != "edit") {
            this.carousel.previousSlide();
        }
    }
    goToNext() {
        if (this.formMode != "edit") {
            this.carousel.nextSlide();
        }
    }
    onSlide(slideEvent) {
        this.activeSlide = parseInt(slideEvent.relatedTarget);
        this.cardsService.setActiveCardIndex(parseInt(slideEvent.relatedTarget));
    }
    isDisabled() {
        if (this.formMode == "edit" || !this.cards || this.cards.length == 0) {
            return true;
        }
        else {
            let currCard = this.cards[this.activeSlide]; //get the card that is currently showing
            if (!currCard.author || currCard.author.length == 0) {
                return false;
            }
            if (!this.user || currCard.author !== this.user.username) {
                //there is an author an it is not the user
                return true;
            }
            else {
                return false;
            }
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function CarouselComponent_swipeleft_HostBindingHandler($event) { return ctx.swipePrev($event); })("swiperight", function CarouselComponent_swiperight_HostBindingHandler($event) { return ctx.swipeNext($event); });
    } }, decls: 10, vars: 9, consts: [["id", "vorlesung"], ["id", "btnDiv", "role", "group", 1, "btn-group"], ["id", "rand", "placement", "top", "ngbTooltip", "Zufall", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fas", "fa-random"], ["id", "editCard", "type", "button", "placement", "top", "ngbTooltip", "Bearbeiten", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fas", "fa-pen"], ["id", "toggleAdd", "type", "button", "data-toggle", "button", "placement", "top", 3, "ngClass", "ngbTooltip", "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "row"], [3, "click"], [1, "fas", "fa-chevron-left"], ["id", "carousel", 3, "swipeleft", "swiperight"], [3, "activeSlideIndex", "animation", "isControls", "allowSwipe", "interval", "activeSlideChange", "activeSlideIndexChange"], ["mycarousel", ""], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [3, "id"], [3, "card"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_3_listener() { return ctx.showRandomCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_5_listener() { return ctx.enableEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_7_listener() { return ctx.toggleAddView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselComponent_div_9_Template, 9, 6, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formMode == "edit" || !ctx.cards || ctx.cards.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClass())("ngbTooltip", ctx.formMode == "add" ? "Verstecken" : "Hinzuf\u00FCgen")("disabled", ctx.formMode == "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.formMode == "add" ? "fas fa-minus" : "fas fa-plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards && ctx.cards.length > 0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#vorlesung[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 5px;\n}\n#btnDiv[_ngcontent-%COMP%] {\n  display: block;\n  width: 90%;\n  text-align: right;\n  margin: auto;\n  margin-bottom: 10px;\n}\n#carouselExampleControls[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  width: 5%;\n}\n.carousel-control-next[_ngcontent-%COMP%] {\n  width: 5%;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 5%;\n}\nspan[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n#carousel[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.row[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0;\n}\napp-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG59XG4jdm9ybGVzdW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4jYnRuRGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcm91c2VsLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHdpZHRoOiA1JTtcbn1cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNSU7XG59XG5zcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbiNjYXJvdXNlbCB7XG4gIHdpZHRoOiA5MCU7XG59XG4ucm93IHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwO1xufVxuYXBwLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-carousel",
                templateUrl: "./carousel.component.html",
                styleUrls: ["./carousel.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"] }, { type: _services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"] }]; }, { carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["mycarousel", { static: false }]
        }], swipePrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["swipeleft", ["$event"]]
        }], swipeNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["swiperight", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 14, vars: 0, consts: [[1, "footer"], [1, "list-group", "list-group-horizontal"], [1, "list-group-item"], ["routerLink", "/about"], ["routerLink", "/about", "fragment", "FAQ"], ["href", "https://git.rwth-aachen.de/jungerjunge2/cards", "target", "_blank"], ["href", "https://git.rwth-aachen.de/jungerjunge2/cards/-/releases", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " FAQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  margin: 0;\n  width: 100%;\n  background-color: #f8f9fa;\n}\na[_ngcontent-%COMP%] {\n  color: grey;\n}\nli[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 2px;\n  background-color: #f8f9fa;\n  border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuYSB7XG4gIGNvbG9yOiBncmV5O1xufVxubGkge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/lectures/lectures.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/lectures/lectures.component.ts ***!
  \***********************************************************/
/*! exports provided: LecturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturesComponent", function() { return LecturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function LecturesComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lecture_r465 = ctx.$implicit;
    const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r464.setLink(lecture_r465));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lecture_r465.name);
} }
class LecturesComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.httpService.getAllLectures().subscribe((lectures) => {
            this.lectures = lectures;
        });
    }
    ngOnChanges() {
        if (this.newVl) {
            console.log("got new vl: ", this.newVl);
            this.lectures.push(this.newVl);
        }
    }
    setLink(lecture) {
        return "/vorlesung/" + lecture.abrv;
    }
}
LecturesComponent.ɵfac = function LecturesComponent_Factory(t) { return new (t || LecturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
LecturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LecturesComponent, selectors: [["app-lectures"]], inputs: { newVl: "newVl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 1, consts: [[1, "list", "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [3, "routerLink"]], template: function LecturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LecturesComponent_li_1_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lectures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVjdHVyZXMvbGVjdHVyZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LecturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-lectures",
                templateUrl: "./lectures.component.html",
                styleUrls: ["./lectures.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, { newVl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LoginFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r55, "\n");
} }
class LoginFormComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() { }
    submit(form) {
        this.http.login(form.value).subscribe((response) => {
            if (response.status == 200) {
                this.router.navigate(["/"]);
            }
        });
    }
    isDisabled(username, password) {
        if (!(username.value && password.value)) {
            return true;
        }
        return username.value.length < 5 || password.value.length < 7;
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 21, vars: 3, consts: [["class", "alert alert-warning", 4, "ngFor", "ngForOf"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "username", "required", "", "aria-describedby", "nameHelp", "ngModel", "", 1, "form-control"], ["username", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", 1, "form-control"], ["password", "ngModel"], [1, "form-group", "form-check"], ["required", "", "type", "checkbox", "id", "remember", "name", "remember", "ngModel", "", 1, "form-check-input", 3, "checked"], ["remember", "ngModel"], ["for", "remember", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "alert", "alert-warning"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginFormComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.submit(_r51); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Benutzername");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Passwort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Eingeloggt bleiben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r52, _r53));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.438);\n  border-radius: 5px;\n  max-width: 700px;\n}\n.alert[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggcmdiYSg0NiwgNDYsIDQ2LCAwLjQzOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cbi5hbGVydCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login-form",
                templateUrl: "./login-form.component.html",
                styleUrls: ["./login-form.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");











function NavBarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r420.isActive("/login"), " nav-item");
} }
function NavBarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Registrieren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r421.isActive("/signup"), " nav-item");
} }
function NavBarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_13_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r427); const ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r426.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r422.isActive("/profile"), " nav-item");
} }
function NavBarComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_mat_progress_bar_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 25);
} }
function NavBarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r432); const i_r429 = ctx.index; const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r431.closeAlert(i_r429); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r428 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r428, "\n");
} }
class NavBarComponent {
    constructor(router, titleService, http, cardsService, statesService) {
        this.router = router;
        this.titleService = titleService;
        this.http = http;
        this.cardsService = cardsService;
        this.statesService = statesService;
        this.loading = false;
    }
    ngOnInit() {
        this.setPageTitle();
        this.http.getUser().subscribe((user) => (this.user = user));
        this.statesService.getLoadingState().subscribe((val) => {
            this.loading = val;
        });
        this.router.events.subscribe((e) => {
            //clear error messages on route change
            this.http.clearErrors();
        });
        this.http.getErrors().subscribe((errors) => (this.errors = errors));
        if (this.router.url.match(/vorlesung/)) {
            this.cardsService.getCards().subscribe((cards) => {
                this.cards = cards;
            });
        }
    }
    closeAlert(i) {
        this.http.removeError(i);
    }
    isActive(path) {
        return path === this.router.url ? "active" : "";
    }
    setPageTitle() {
        let currentTitle;
        switch (this.router.url) {
            case "/login":
                currentTitle = "Login";
                break;
            case "/signup":
                currentTitle = "Sign Up";
                break;
            case "/":
                currentTitle = "Home";
                break;
            default:
                currentTitle = "Cards";
        }
        this.titleService.setTitle(currentTitle);
    }
    logout() {
        this.http.logout();
        this.user = null;
        this.router.navigate(["/"]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 9, consts: [["role", "alert", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "padding-right", "0"], [1, "row"], [1, "col-8"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], ["id", "navlist", 1, "navbar-nav"], ["routerLink", "/", "tabindex", "1", 1, "nav-link"], [1, "fas", "fa-home"], [3, "class", 4, "ngIf"], ["class", "col-4", "style", "padding-right: 0;", 4, "ngIf"], ["id", "progress"], ["mode", "indeterminate", 4, "ngIf"], ["class", "alert alert-warning alert-dismissible fade show", "role", "alert", 4, "ngFor", "ngForOf"], ["routerLink", "/login", 1, "nav-link"], [1, "fas", "fa-user"], ["routerLink", "/signup", 1, "nav-link"], [1, "fas", "fa-plus"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "fas", "fa-user-circle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["routerLink", "/account", "placement", "bottom", "ngbTooltip", "im Aufbau", 1, "dropdown-item", "disabled"], [1, "dropdown-item", 3, "click"], [1, "col-4", 2, "padding-right", "0"], ["mode", "indeterminate"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], ["alert", ""], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Vorlesungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavBarComponent_li_11_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavBarComponent_li_12_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavBarComponent_li_13_Template, 10, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavBarComponent_div_14_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavBarComponent_mat_progress_bar_16_Template, 1, 0, "mat-progress-bar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavBarComponent_div_17_Template, 6, 1, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.isActive("/"), " nav-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]], styles: [".row[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  position: relative;\n}\n#progress[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNwcm9ncmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1hdC1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cbi5hbGVydCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"] }, { type: src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SearchBarComponent_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_div_1_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r437); const suggestion_r435 = ctx.$implicit; const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r436.navigateTo($event, suggestion_r435.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r435 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r435.title);
} }
function SearchBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchBarComponent_div_1_li_2_Template, 3, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r433.suggestions);
} }
class SearchBarComponent {
    constructor(cardsService, stateService) {
        this.cardsService = cardsService;
        this.stateService = stateService;
    }
    ngOnInit() {
        this.stateService.getHideSuggestions().subscribe((value) => {
            this.clearSuggestions = value;
            if (value) {
                this.suggestions = [];
            }
        });
        this.cardsService.getCards().subscribe((cards) => {
            this.cards = cards;
            cards.forEach((card) => {
                if (card.thema == null) {
                    card.thema = "";
                }
                if (card.content == null) {
                    card.content = "";
                }
            });
        });
    }
    inField() {
        this.stateService.setTyping(true);
    }
    resetNav() {
        this.stateService.setTyping(false);
    }
    findMatches(e) {
        this.stateService.setHideSuggestions(false); //show suggestions
        if (this.uInput && this.uInput.length > 2) {
            this.suggestions = [];
            const regex = new RegExp(`${this.uInput}`, "gi");
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].thema.match(regex)) {
                    this.suggestions.push({ title: this.cards[i].thema, index: i });
                }
            }
        }
    }
    navigateTo(e, index) {
        e.preventDefault();
        this.uInput = "";
        this.cardsService.setNewCardIndex(index);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 2, vars: 2, consts: [["id", "search", "type", "search", "placeholder", "Frage suchen", 1, "form-control", "float-right", 3, "ngModel", "ngModelChange", "input", "focus", "blur"], ["id", "matches", 4, "ngIf"], ["id", "matches"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_0_listener($event) { return ctx.uInput = $event; })("input", function SearchBarComponent_Template_input_input_0_listener($event) { return ctx.findMatches($event); })("focus", function SearchBarComponent_Template_input_focus_0_listener() { return ctx.inField(); })("blur", function SearchBarComponent_Template_input_blur_0_listener() { return ctx.resetNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchBarComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#matches[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40px;\n    z-index: 1000;\n    right: 0;\n    max-width: 300px;\n    padding: 1px;\n    max-height: 200px;\n    overflow: auto;\n    box-shadow: 0 5px 10px rgba(46, 46, 46, 0.438);\n  }\n  #search[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsOENBQThDO0VBQ2hEO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hdGNoZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoNDYsIDQ2LCA0NiwgMC40MzgpO1xuICB9XG4gICNzZWFyY2gge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-search-bar",
                templateUrl: "./search-bar.component.html",
                styleUrls: ["./search-bar.component.css"],
            }]
    }], function () { return [{ type: _services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/signup-form/signup-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/signup-form/signup-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function SignupFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r63, "\n");
} }
class SignupFormComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() { }
    submit(form) {
        this.http.createAccount(form.value).subscribe((response) => {
            if (response) {
                this.router.navigate(["/"]);
            }
        }, (error) => {
            if ((error.headers.status = 422)) {
                console.log(error);
                this.errors = error.error.errors;
            }
        });
    }
    setStyle(password, password2) {
        if (password2.value &&
            password2.value.length > 5 &&
            password2.value != password.value) {
            return "box-shadow:0 0 3px #CC0000;";
        }
        return "";
    }
    checkEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }
    getLength(elem) {
        if (elem.value) {
            return elem.value.length;
        }
        else {
            return 0;
        }
    }
    setCharIndicatorStyle(field, max) {
        if (field.value) {
            return {
                color: field.value.length > max ? "#ff0000" : "#000000",
            };
        }
        else {
            return { color: "#000000" };
        }
    }
    isDisabled(username, email, password, password2) {
        if (!(username.value && email.value && password.value)) {
            return true;
        }
        return (username.value.length < 5 ||
            password.value.length < 7 ||
            password.value != password2.value ||
            !this.checkEmail(email.value));
    }
}
SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupFormComponent, selectors: [["app-signup-form"]], decls: 31, vars: 4, consts: [["class", "alert alert-warning", 4, "ngFor", "ngForOf"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "username", "name", "username", "required", "", "maxlength", "20", "aria-describedby", "nameHelp", "ngModel", "", 1, "form-control"], ["username", "ngModel"], [1, "form-text"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "aria-describedby", "emailHelp", "required", "", "ngModel", "", 1, "form-control"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", "minlength", "7", 1, "form-control"], ["password", "ngModel"], ["type", "password", "name", "password2", "id", "password2", "ngModel", "", "minlength", "7", 1, "form-control"], ["password2", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "alert", "alert-warning"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupFormComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.submit(_r58); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Benutzername");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Wenigstens 5 Zeichen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Passwort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Wenigstens 7 Zeichen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Passwort wiederholen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Account erstellen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.setStyle(_r61, _r62));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r59, _r60, _r61, _r62));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 10px;\n  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.438);\n  border-radius: 5px;\n  max-width: 700px;\n}\n.alert[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCByZ2JhKDQ2LCA0NiwgNDYsIDAuNDM4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuLmFsZXJ0IHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-signup-form",
                templateUrl: "./signup-form.component.html",
                styleUrls: ["./signup-form.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/update-card-form/update-card-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/update-card-form/update-card-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpdateCardFormComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCardFormComponent", function() { return UpdateCardFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class UpdateCardFormComponent {
    constructor(cardsService, statesService, dialog) {
        this.cardsService = cardsService;
        this.statesService = statesService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.cardsService.getCards().subscribe((cards) => {
            this.cards = cards;
        });
        this.cardsService.getActiveCardIndex().subscribe((index) => {
            this.activeCardIndex = index;
            if (this.cards) {
                this.cardCopy = Object.assign({}, this.cards[this.activeCardIndex]);
            }
            this.cardIndex = this.activeCardIndex;
        });
    }
    inField() {
        this.statesService.setTyping(true);
    }
    resetNav() {
        this.statesService.setTyping(false);
    }
    onSubmit(f) {
        this.cardCopy.content = f.value.content;
        this.cardCopy.thema = f.value.thema;
        this.cardsService
            .updateCard(Object.assign({}, this.cardCopy), this.cardIndex)
            .subscribe((resp) => {
            f.reset();
        });
    }
    cancelEdit() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: "400px",
        });
    }
    //Function to set style of small character indicator
    setThemaCharIndicatorStyle(thema) {
        if (thema.value) {
            return {
                color: (thema.value && thema.value.length > 0 && thema.value.length < 3) ||
                    thema.value.length > 60
                    ? "#ff0000"
                    : "#000000",
            };
        }
        else {
            return { color: "#000000" };
        }
    }
    //Function to set style of small character indicator
    setContentCharIndicatorStyle(content) {
        if (content.value) {
            return {
                color: content.value && content.value.length > 400 ? "#ff0000" : "#000000",
            };
        }
        else {
            return { color: "#000000" };
        }
    }
    getLength(elem) {
        if (elem.value) {
            return elem.value.length;
        }
        else {
            return 0;
        }
    }
    isDisabled(content, thema) {
        if (!content.value || !thema.value) {
            return true;
        }
        return (content.value.length > 400 ||
            (thema.value.length > 0 && thema.value.length < 3) ||
            thema.value.length > 60);
    }
}
UpdateCardFormComponent.ɵfac = function UpdateCardFormComponent_Factory(t) { return new (t || UpdateCardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
UpdateCardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateCardFormComponent, selectors: [["app-update-card-form"]], decls: 22, vars: 7, consts: [["id", "addCard"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "thema"], ["id", "thema", "name", "thema", "type", "text", "placeholder", "Thema", "minlength", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "blur"], ["thema", "ngModel"], [1, "form-text", "float-right", 3, "ngStyle"], ["for", "content"], ["id", "content", "name", "content", "rows", "5", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "focus", "blur"], ["content", "ngModel"], ["type", "submit", "value", "Sichern", 1, "btn", "btn-success", "mb-2", "mr-1", 3, "disabled"], ["type", "button", "value", "Abbruch", 1, "btn", "btn-danger", "mb-2", 3, "click"]], template: function UpdateCardFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateCardFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r469); const _r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r466); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Karteikarte bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00DCberschrift");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateCardFormComponent_Template_input_ngModelChange_8_listener($event) { return ctx.cardCopy.thema = $event; })("focus", function UpdateCardFormComponent_Template_input_focus_8_listener() { return ctx.inField(); })("blur", function UpdateCardFormComponent_Template_input_blur_8_listener() { return ctx.resetNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Informationen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateCardFormComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.cardCopy.content = $event; })("focus", function UpdateCardFormComponent_Template_textarea_focus_15_listener() { return ctx.inField(); })("blur", function UpdateCardFormComponent_Template_textarea_blur_15_listener() { return ctx.resetNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCardFormComponent_Template_input_click_21_listener() { return ctx.cancelEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCopy.thema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setThemaCharIndicatorStyle(_r467));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r467), "/60 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCopy.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setContentCharIndicatorStyle(_r468));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r468), "/400 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r48, _r47));
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r468, _r467));
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["form[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY2FyZC1mb3JtL3VwZGF0ZS1jYXJkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNhcmQtZm9ybS91cGRhdGUtY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCardFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-update-card-form",
                templateUrl: "./update-card-form.component.html",
                styleUrls: ["./update-card-form.component.css"],
            }]
    }], function () { return [{ type: _services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();
class DialogOverviewExampleDialog {
    constructor(dialogRef, service) {
        this.dialogRef = dialogRef;
        this.service = service;
    }
    cancel() {
        this.service.setFormMode("reset");
        this.service.setLoadingState(false);
        this.dialogRef.close();
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"])); };
DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 11, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 2, "text-align", "right"], ["mat-button", "", 1, "btn", "btn-secondary", "mr-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-danger", 3, "click"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Abbruch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bist du sicher, dass du das Bearbeiten dieser Karte abbrechen m\u00F6chtest?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_7_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nein,zur\u00FCck ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "dialog-overview-example-dialog",
                templateUrl: "dialog.html",
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/Card.ts":
/*!********************************!*\
  !*** ./src/app/models/Card.ts ***!
  \********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(thema, content, abrv, latex) {
        this.thema = thema;
        this.content = content;
        this.abrv = abrv;
        latex = latex;
    }
}


/***/ }),

/***/ "./src/app/models/Vorlesung.ts":
/*!*************************************!*\
  !*** ./src/app/models/Vorlesung.ts ***!
  \*************************************/
/*! exports provided: Vorlesung */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vorlesung", function() { return Vorlesung; });
class Vorlesung {
    constructor(name, abrv) {
        this.name = name;
        this.abrv = abrv;
    }
}


/***/ }),

/***/ "./src/app/routes/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");







function AboutComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Erstelle einen Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", um alle Vorteile unserer Webseite zu nutzen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Erstelle am Besten einen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", oder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "logge dich ein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", damit du Ertseller dieser Karte wirst und nur du diese bearbeiten kannst. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.getUser().subscribe((user) => {
            if (user) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 59, vars: 2, consts: [[1, "container"], [1, "media"], ["src", "assets/c.png", "alt", "Logo", 1, "align-self-center", "mr-1"], [1, "media-body"], [4, "ngIf"], ["href", "https://git.rwth-aachen.de/jungerjunge2/cards/-/issues", "target", "_blank"], ["id", "FAQ"], ["routerLink", "/"], [1, "fas", "fa-plus"], ["href", "https://en.wikibooks.org/wiki/LaTeX/Mathematics"], [1, "fas", "fa-pen"], ["routerLink", "/signup"], ["routerLink", "/login"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cards ist eine Webseite, die dir dabei helfen soll dich auf deine Klausuren und Pr\u00FCfungen vorzubereiten. Das Konzept von Cards beruht auf den klassischen Karteikarten. Anders als die klassischen Karteikarten brauchst du jedoch nicht deinen Stapel an Karten \u00FCberall mitzuschleppen. Unsere Webseite eignet sich vor allem auch f\u00FCr Smartphones, somit kannst du dir deine Karteikarten auch unterwegs anschauen. Sie richtet sich vor allem an Studenten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutComponent_p_9_Template, 4, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sharing is Caring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Karteikarten, die du auf unserer Webseite hinzuf\u00FCgst, sind automatisch f\u00FCr alle anderen Nutzer sichtbar. Andererseits kannst du dir auch Karten von anderen Nutzern anschauen.Dies sorgt daf\u00FCr, dass du optimal auf deine Klausur vorbereitet bist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Wenn du mit einer Karte nicht zufrieden bist, oder du glaubst ihr Inhalt w\u00E4re falsch oder unvollst\u00E4ndig, kannst du sie bearbeiten. Karten, welche von registrierten Nutzern erstellt worden sind, kannst du leider nicht bearbeiten. In einer sp\u00E4teren Version wird es m\u00F6glich sein f\u00FCr diese Karte einen Verberungsvorschlag an den Ertseller der Karte zu senden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Wir freuen uns \u00FCber Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Wir bem\u00FChen uns, die Seite fehlerfrei zu gestalten. Trotzdem kann es sein, dass sich der ein oder andere Fehler eingeschlichen hat. Diesen kannst du uns gerne melden indem du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " ein Issue erstellst. Wir versuchen den Fehler, dann so schnell wie m\u00F6glich zu beheben. Du kannst uns dort auch gerne Feedback hinterlassen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Wo finde ich die Karteikarten zu meiner Vorlesung?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Auf unserer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Startseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " findest du eine Liste aller Vorlesungen, f\u00FCr die bisher Karten hinzugef\u00FCgt wurden. W\u00E4hle deine Vorlesung aus. Falls du die Vorlesung nich in der Liste findest, dann kannst du sie hinzuf\u00FCgen indem du das Formular ausf\u00FCllst und auf \"Hinzuf\u00FCgen\" dr\u00FCckst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Nachdem du auf die Vorlesung gedr\u00FCckt hast kommst du auf eine neue Seite, auf der du dir alle Karteikarten, die zu der Vorlesung bereits hinzugef\u00FCgt wurden, anschauen. Nutze die Pfeiltasten oder wische horizontal \u00FCber die Karte, um dir weitere Karten anzuschauen. Du kannst den Inhalt der Karte aufklappen indem du auf \"Mehr dazu\" dr\u00FCckst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Du kannst auch die Suchfunktion in der Navigationsleiste nutzen, um nach bestimmten Karten zu suchen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Wie erstelle ich eine Karte?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Auf unserer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Startseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " siehst du eine Liste von Vorlesungen. W\u00E4hle die Vorlesung aus zu der du eine Karteikarte hinzuf\u00FCgen m\u00F6chtest. Falls deine Vorlesung nicht findest, kannst du sie \u00FCber das Formular hinzuf\u00FCgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Nachdem du auf die Seite der Vorlesung navigiert bist kannst du eine neue Karte hinzuf\u00FCgen indem du auf das ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Symbol unter der \u00DCberschrift dr\u00FCckst. Nun kannst du deine Karteikarte hinzuf\u00FCgen indem du das Formular ausf\u00FCllst und auf \"Hinzuf\u00FCgen\" dr\u00FCckst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AboutComponent_span_47_Template, 8, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Pro-Tip: du kannst auch mathematische Symbole schreiben indem du Latex Befehle verwendest und diese mit $ Zeichen umh\u00FCllst. Mehr zu den Latex Befehlen findest du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Wie bearbeite ich eine Karte?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " W\u00E4hle zuerst die Karteikarte aus die du bearbeiten m\u00F6chtest. Dr\u00FCcke auf das ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Symbol unter der \u00DCberschrift. Bearbeite deine Karte im Formular und dr\u00FCcke auf \"Sichern\". Bitte beachte, dass du nur \u00F6ffentliche und deine eigenen Karten bearbeiten kannst. Karten, die von anderen registrierten Nutzern erstellt worden sind kannst du leider nicht bearbeit. In einer sp\u00E4teren Version wird es m\u00F6glich sein f\u00FCr diese Karte einen Verberungsvorschlag an den Ertseller der Karte zu senden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 800px;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4iXX0= */"] });
=======
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 800px;\n  margin-bottom: 50px;\n}\n.media[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5tZWRpYSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiJdfQ== */"] });
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routes/account-page/account-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/account-page/account-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");




class AccountPageComponent {
    constructor() {
    }
    ngOnInit() { }
}
AccountPageComponent.ɵfac = function AccountPageComponent_Factory(t) { return new (t || AccountPageComponent)(); };
AccountPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountPageComponent, selectors: [["app-account-page"]], decls: 26, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-4", "col-xs-12"], ["id", "list-tab", "role", "tablist", 1, "list-group"], ["id", "list-home-list", "data-toggle", "list", "href", "#list-home", "role", "tab", "aria-controls", "home", 1, "list-group-item", "list-group-item-action", "active"], ["id", "list-profile-list", "data-toggle", "list", "href", "#list-profile", "role", "tab", "aria-controls", "profile", 1, "list-group-item", "list-group-item-action"], ["id", "list-messages-list", "data-toggle", "list", "href", "#list-messages", "role", "tab", "aria-controls", "messages", 1, "list-group-item", "list-group-item-action"], ["id", "list-settings-list", "data-toggle", "list", "href", "#list-settings", "role", "tab", "aria-controls", "settings", 1, "list-group-item", "list-group-item-action"], [1, "badge", "badge-danger", "badge-pill", "float-right"], [1, "col-md-8", "col-xs-12"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "list-home", "role", "tabpanel", "aria-labelledby", "list-home-list", 1, "tab-pane", "fade", "show", "active"], ["id", "list-profile", "role", "tabpanel", "aria-labelledby", "list-profile-list", 1, "tab-pane", "fade"], ["id", "list-messages", "role", "tabpanel", "aria-labelledby", "list-messages-list", 1, "tab-pane", "fade"], ["id", "list-settings", "role", "tabpanel", "aria-labelledby", "list-settings-list", 1, "tab-pane", "fade"]], template: function AccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00DCbersicht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profildaten \u00E4ndern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Karteikarten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Benachrichtigungen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nobis obcaecati quibusdam odio ullam eaque ducimus placeat et consectetur, sint ratione? Sit harum, similique voluptatem quaerat hic id fuga deleniti. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2FjY291bnQtcGFnZS9hY2NvdW50LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9hY2NvdW50LXBhZ2UvYWNjb3VudC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-account-page",
                templateUrl: "./account-page.component.html",
                styleUrls: ["./account-page.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/cards-page/cards-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/cards-page/cards-page.component.ts ***!
  \***********************************************************/
/*! exports provided: CardsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPageComponent", function() { return CardsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/add-card-form/add-card-form.component */ "./src/app/components/add-card-form/add-card-form.component.ts");
/* harmony import */ var _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/update-card-form/update-card-form.component */ "./src/app/components/update-card-form/update-card-form.component.ts");













const _c0 = ["alert"];
function CardsPageComponent_app_add_card_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-card-form");
} }
function CardsPageComponent_app_update_card_form_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-update-card-form");
} }
class CardsPageComponent {
    constructor(route, stateServie, cardsService, http, title) {
        this.route = route;
        this.stateServie = stateServie;
        this.cardsService = cardsService;
        this.http = http;
        this.title = title;
        this.loading = true;
        this.formMode = "none";
    }
    onClick() {
        this.stateServie.setHideSuggestions(true);
    }
    handleKeyDown(event) {
        if (!this.inTypingField) {
            if (event.key == "ArrowRight") {
                this.cardsService.goNext();
            }
            else if (event.key == "ArrowLeft") {
                this.cardsService.goPrev();
            }
        }
    }
    ngOnInit() {
        this.title.setTitle("Cards");
        this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
        this.cardsService.getCards().subscribe((cards) => {
            if (cards.length == 0) {
                this.stateServie.setFormMode("add");
            }
        });
        this.stateServie.getTyping().subscribe((val) => (this.inTypingField = val));
        this.stateServie
            .getLoadingState()
            .subscribe((value) => (this.loading = value));
        this.stateServie.getFormMode().subscribe((mode) => (this.formMode = mode));
    }
    setLoading(loading) {
        this.loading = loading;
        this.stateServie.setLoadingState(loading);
    }
}
CardsPageComponent.ɵfac = function CardsPageComponent_Factory(t) { return new (t || CardsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
CardsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsPageComponent, selectors: [["app-cards-page"]], viewQuery: function CardsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alert = _t.first);
    } }, hostBindings: function CardsPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPageComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); })("keyup", function CardsPageComponent_keyup_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 2, consts: [[1, "container"], [4, "ngIf"]], template: function CardsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardsPageComponent_app_add_card_form_5_Template, 1, 0, "app-add-card-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardsPageComponent_app_update_card_form_6_Template, 1, 0, "app-update-card-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMode == "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMode == "edit");
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_10__["AddCardFormComponent"], _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCardFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  padding: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 5px;\n}\n.row[_ngcontent-%COMP%] {\n  width: 90%;\n\n  margin: auto;\n  margin-bottom: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.col-2[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.col-10[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n#progress[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7O0VBRVYsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvY2FyZHMtcGFnZS9jYXJkcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgcGFkZGluZzogMDtcbn1cbi5hbGVydCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnJvdyB7XG4gIHdpZHRoOiA5MCU7XG5cbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmNvbC0yIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5jb2wtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4jcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4iXX0= */"] });
=======
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_10__["AddCardFormComponent"], _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCardFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  padding: 0;\n  margin-bottom: 50px;\n}\n.alert[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 5px;\n}\n.row[_ngcontent-%COMP%] {\n  width: 90%;\n\n  margin: auto;\n  margin-bottom: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.col-2[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.col-10[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n#progress[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVOztFQUVWLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uYWxlcnQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5yb3cge1xuICB3aWR0aDogOTAlO1xuXG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5jb2wtMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uY29sLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuI3Byb2dyZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuIl19 */"] });
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cards-page",
                templateUrl: "./cards-page.component.html",
                styleUrls: ["./cards-page.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"] }, { type: src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"] }, { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, { alert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["alert", { static: false }]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event.target"]]
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:keyup", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/lectures/lectures.component */ "./src/app/components/lectures/lectures.component.ts");
/* harmony import */ var _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/add-lecture-form/add-lecture-form.component */ "./src/app/components/add-lecture-form/add-lecture-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");







class HomePageComponent {
    constructor(statesService) {
        this.statesService = statesService;
        this.loading = false;
    }
    ngOnInit() {
        this.statesService.getLoadingState().subscribe((val) => {
            this.loading = val;
        });
    }
    emitVl(lecture) {
        this.newVl = lecture;
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_1__["StatesService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 1, consts: [[1, "container"], [3, "newVl"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-lectures", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-add-lecture-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newVl", ctx.newVl);
<<<<<<< HEAD:angular-cards/dist/angular-cards/main-es2015.js
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__["LecturesComponent"], _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_4__["AddLectureFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  max-width: 900px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG4iXX0= */"] });
=======
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__["LecturesComponent"], _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_4__["AddLectureFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  max-width: 900px;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuIl19 */"] });
>>>>>>> latex:angular-cards/dist/angular-cards/main.js
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home-page",
                templateUrl: "./home-page.component.html",
                styleUrls: ["./home-page.component.css"],
            }]
    }], function () { return [{ type: _services_states_service__WEBPACK_IMPORTED_MODULE_1__["StatesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/routes/login-page/login-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/login-page/login-page.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");




class LoginPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 3, vars: 0, template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/routes/signup-page/signup-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/signup-page/signup-page.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/signup-form/signup-form.component */ "./src/app/components/signup-form/signup-form.component.ts");




class SignupPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) { return new (t || SignupPageComponent)(); };
SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupPageComponent, selectors: [["app-signup-page"]], decls: 3, vars: 0, template: function SignupPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-signup-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__["SignupFormComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-page',
                templateUrl: './signup-page.component.html',
                styleUrls: ['./signup-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/cards.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/cards.service.ts ***!
  \*******************************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _states_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class CardsService {
    constructor(httpService, //to make calls to the server
    statesService, //for setting the loading state
    router //used to get the lecture abreviation from the route
    ) {
        this.httpService = httpService;
        this.statesService = statesService;
        this.router = router;
        //loads cards once from the server and whenever lecture changes
        //and provides them as an Observable
        this.cards$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        //provides a Subject to set a new index on which card the carousel should show
        this.newCardIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        //provides a Subject of the index of the card that is currently shown
        //only the carousel shoul set nex values for this subject
        this.activeCardIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
    }
    getCards() {
        let abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
        if (this.abrv === abrv) {
            //cards were already loaded for this lecture
            return this.cards$.asObservable();
        }
        else {
            this.abrv = abrv;
            //remove the old cards before fetching the new ones
            this.cards$.next([]);
            //make server request
            this.httpService.getCardsFromLectureAbrv(abrv).subscribe((cards) => {
                this.cards$.next(cards);
            });
            return this.cards$.asObservable();
        }
    }
    updateCard(card, index) {
        this.statesService.setLoadingState(true);
        //send update to server using http service
        return this.httpService.updateCard(card).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resp) => {
            this.statesService.setLoadingState(false);
            this.statesService.setFormMode("reset"); //reset form to its previous state
            //update subject
            let cards = this.cards$.getValue();
            cards[index] = card;
            this.cards$.next(cards);
        }));
    }
    addCard(card) {
        this.statesService.setLoadingState(true);
        //send new card to server using http service
        return this.httpService.addCard(card).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            this.statesService.setLoadingState(false);
            card._id = response.body; //set id received from server response
            //upate subject
            let cards = this.cards$.getValue();
            cards.push(card);
            this.cards$.next(cards);
            setTimeout(() => {
                //show new card timeout needed because the carousel needs time to refresh
                //its view
                this.setNewCardIndex(cards.length - 1);
            }, 100);
        }));
    }
    goNext() {
        //show the next slide index
        let index = this.newCardIndex$.getValue();
        index++;
        if (index >= this.cards$.getValue().length) {
            index = 0;
        }
        this.newCardIndex$.next(index);
    }
    goPrev() {
        //show the next slide index
        let index = this.newCardIndex$.getValue();
        index--;
        if (index < 0) {
            index = this.cards$.getValue().length - 1;
        }
        this.newCardIndex$.next(index);
    }
    //only the carousel should be subscribed to this
    getNewCardIndex() {
        return this.newCardIndex$.asObservable();
    }
    //use this function to tell the carousel to go to a specific slide i
    setNewCardIndex(i) {
        this.newCardIndex$.next(i);
    }
    //only the carousel should call this method (on the sliding event)
    setActiveCardIndex(i) {
        this.activeCardIndex$.next(i);
    }
    //subsribe to this function to always get the index of the card that is currently shown
    getActiveCardIndex() {
        return this.activeCardIndex$.asObservable();
    }
}
CardsService.ɵfac = function CardsService_Factory(t) { return new (t || CardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_4__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardsService, factory: CardsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _states_service__WEBPACK_IMPORTED_MODULE_4__["StatesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_Vorlesung__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Vorlesung */ "./src/app/models/Vorlesung.ts");
/* harmony import */ var _states_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class HttpService {
    constructor(http, //for sending http requests
    statesService, //set the loading state
    router //to get info in the current url
    ) {
        this.http = http;
        this.statesService = statesService;
        this.router = router;
        this.urlBase = "api/"; //url  base on which to adress the server with
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null); //stores the user
        this.lecture$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_Vorlesung__WEBPACK_IMPORTED_MODULE_4__["Vorlesung"]("", "")); //holds the current lecture
        this.errors$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
        };
    }
    //get Cards for a specific lecture from server
    //This function shoul only be called by the cardsservice to initially load cards from server
    getCardsFromLectureAbrv(abrv) {
        this.statesService.setLoadingState(true);
        {
            return this.http
                .get(this.urlBase + "cards/?abrv=" + abrv, {
                observe: "response",
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
                this.statesService.setLoadingState(false);
            }, (error) => {
                this.addErrors(error);
                this.statesService.setLoadingState(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.body));
        }
    }
    //add card to the database on server
    addCard(card) {
        return this.http
            .post(this.urlBase + "cards/new", { card: card }, {
            headers: this.httpOptions.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.statesService.setLoadingState(false);
        }, (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    //update card on server
    updateCard(card) {
        return this.http
            .put(this.urlBase + "cards/update", { card: card }, {
            headers: this.httpOptions.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.statesService.setLoadingState(false);
        }, (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    //get an array of all lectures
    getAllLectures() {
        this.statesService.setLoadingState(true);
        if (this.lectures$) {
            //lectures were already loaded once
            this.statesService.setLoadingState(false);
            return this.lectures$.asObservable();
        }
        else {
            //load lectures from the server
            return this.http
                .get(this.urlBase + "lectures", {
                observe: "response",
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
                this.statesService.setLoadingState(false);
                this.lectures$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](res.body); //set the lectures subject
            }, (error) => {
                this.addErrors(error);
                this.statesService.setLoadingState(false);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.body));
        }
    }
    //get the Current lecture
    getCurrentLecture() {
        let abrv = this.router.url.split(/vorlesung\//)[1]; //get the abreviation of the lecture from the url
        if (this.lecture$.getValue().abrv == abrv) {
            //the lecture was already loaded
            return this.lecture$.asObservable();
        }
        else {
            //fetch the lecture from the server
            this.http
                .get(this.urlBase + "lectures/find?abrv=" + abrv, {
                observe: "response",
            })
                .subscribe((res) => {
                this.lecture$.next(res.body);
            }, (error) => {
                this.addErrors(error);
                this.statesService.setLoadingState(false);
            });
            return this.lecture$.asObservable();
        }
    }
    //add a lecture to the database on the server
    addLecture(lecture) {
        this.statesService.setLoadingState(true);
        return this.http
            .post(this.urlBase + "lectures/new", { lecture: lecture }, {
            headers: this.httpOptions.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            //add the new lecture to the lectures subject
            this.statesService.setLoadingState(false);
            let lectures = this.lectures$.getValue();
            lectures.push(lecture);
            this.lectures$.next(lectures);
        }, (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    //login the user on the server
    login(form) {
        this.statesService.setLoadingState(true);
        return this.http
            .post(this.urlBase + "login", form, {
            headers: this.httpOptions.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.statesService.setLoadingState(false);
            this.user$.next(res.body); //set the user
            if (form.remember) {
                localStorage.setItem("user", JSON.stringify(this.user$.getValue())); //store the user locally to keep the session
            }
        }, (error) => {
            this.addErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    getUser() {
        if (this.user$.getValue() == null) {
            let user = JSON.parse(localStorage.getItem("user")); //load the user from the local storage
            this.user$.next(user);
        }
        return this.user$.asObservable();
    }
    getUserInfo() {
        this.statesService.setLoadingState(true);
        return this.http
            .get(this.urlBase + "user/info", {
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.statesService.setLoadingState(false);
        }, (error) => {
            this.addErrors(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.body));
    }
    //logout the user in front- and backend
    logout() {
        this.statesService.setLoadingState(true);
        this.http.get(this.urlBase + "user/logout").subscribe((res) => {
            this.statesService.setLoadingState(false);
        });
        localStorage.removeItem("user"); //remove the user data from localstorage
        this.user$.next(null);
    }
    //form = {username,email,password}
    createAccount(form) {
        this.statesService.setLoadingState(true);
        return this.http
            .post(this.urlBase + "user/new", form, {
            headers: this.httpOptions.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((res) => {
            this.user$.next(res.body); //login the user (on success)
            this.statesService.setLoadingState(false);
        }, (error) => {
            console.log(error.headers);
            this.addErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    addErrors(error) {
        let err = error.error;
        let errors = this.errors$.getValue();
        console.log(error.status);
        if (error.status == 422) {
            if (typeof err == "string") {
                errors.push(err);
            }
            else {
                console.log(typeof err);
                errors.push(...err);
            }
        }
        else if (error.status >= 500) {
            errors.push("Der Server scheint offline zu sein. Versuche es später erneut.");
        }
        else {
            errors.push("Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.");
            console.log(error);
        }
        this.errors$.next(errors);
    }
    //removes a specific error from the error array
    removeError(index) {
        let errors = this.errors$.getValue();
        errors.splice(index, 1); //remove error at position index
        this.errors$.next(errors);
    }
    clearErrors() {
        this.errors$.next([]);
    }
    getErrors() {
        return this.errors$.asObservable();
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/states.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/states.service.ts ***!
  \********************************************/
/*! exports provided: StatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesService", function() { return StatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
//This service is made to manage states across components



class StatesService {
    constructor() {
        this.formMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("none");
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.hideSgtn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.typing$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    getFormMode() {
        return this.formMode$.asObservable();
    }
    setFormMode(mode) {
        if (mode == "reset") {
            if (!this.lastFormMode) {
                //last form mode is undefined
                this.lastFormMode = "none";
            } // last Form mode defined
            this.formMode$.next(this.lastFormMode);
        }
        else {
            this.formMode$.next(mode);
            if (mode != "edit")
                this.lastFormMode = mode;
        }
    }
    setTyping(val) {
        this.typing$.next(val);
    }
    getTyping() {
        return this.typing$.asObservable();
    }
    getLoadingState() {
        return this.loading$;
    }
    setLoadingState(value) {
        this.loading$.next(value);
    }
    setHideSuggestions(value) {
        this.hideSgtn$.next(value);
    }
    getHideSuggestions() {
        return this.hideSgtn$.asObservable();
    }
}
StatesService.ɵfac = function StatesService_Factory(t) { return new (t || StatesService)(); };
StatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatesService, factory: StatesService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/erdzan/Library/Mobile Documents/com~apple~CloudDocs/Documents/Visual Studio/Card/Cards/angular-cards/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map