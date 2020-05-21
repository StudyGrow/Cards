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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/components/overview/overview.component.ts");
/* harmony import */ var _components_change_profile_change_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-profile/change-profile.component */ "./src/app/components/change-profile/change-profile.component.ts");
/* harmony import */ var _components_cards_overview_cards_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cards-overview/cards-overview.component */ "./src/app/components/cards-overview/cards-overview.component.ts");
/* harmony import */ var _routes_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/error-page/error-page.component */ "./src/app/routes/error-page/error-page.component.ts");















const routes = [
    { path: "", component: _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: "vorlesung/:abrv", component: _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_3__["CardsPageComponent"] },
    { path: "login", component: _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: "signup", component: _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__["SignupPageComponent"] },
    { path: "about", component: _routes_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    {
        path: "account",
        component: _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_7__["AccountPageComponent"],
        canActivate: [_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
        children: [
            { path: "overview", component: _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_9__["OverviewComponent"] },
            { path: "manage", component: _components_change_profile_change_profile_component__WEBPACK_IMPORTED_MODULE_10__["ChangeProfileComponent"] },
            { path: "cards", component: _components_cards_overview_cards_overview_component__WEBPACK_IMPORTED_MODULE_11__["CardsOverviewComponent"] },
        ],
    },
    { path: "**", component: _routes_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"] },
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
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.titleService.setTitle("Home");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  margin-bottom: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _services_states_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/update-card-form/update-card-form.component */ "./src/app/components/update-card-form/update-card-form.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-card-form/add-card-form.component */ "./src/app/components/add-card-form/add-card-form.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-lecture-form/add-lecture-form.component */ "./src/app/components/add-lecture-form/add-lecture-form.component.ts");
/* harmony import */ var _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/lectures/lectures.component */ "./src/app/components/lectures/lectures.component.ts");
/* harmony import */ var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/home-page/home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/cards-page/cards-page.component */ "./src/app/routes/cards-page/cards-page.component.ts");
/* harmony import */ var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/login-page/login-page.component */ "./src/app/routes/login-page/login-page.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./routes/signup-page/signup-page.component */ "./src/app/routes/signup-page/signup-page.component.ts");
/* harmony import */ var _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/signup-form/signup-form.component */ "./src/app/components/signup-form/signup-form.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _routes_about_about_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./routes/about/about.component */ "./src/app/routes/about/about.component.ts");
/* harmony import */ var _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./routes/account-page/account-page.component */ "./src/app/routes/account-page/account-page.component.ts");
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/overview/overview.component */ "./src/app/components/overview/overview.component.ts");
/* harmony import */ var _components_change_profile_change_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/change-profile/change-profile.component */ "./src/app/components/change-profile/change-profile.component.ts");
/* harmony import */ var _components_cards_overview_cards_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/cards-overview/cards-overview.component */ "./src/app/components/cards-overview/cards-overview.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _routes_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./routes/error-page/error-page.component */ "./src/app/routes/error-page/error-page.component.ts");
//Modules







//Services

//Material Modules




//Gestures

//Components






















//Localization


//Pipes




Object(_angular_common__WEBPACK_IMPORTED_MODULE_34__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_35___default.a);
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
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_states_service__WEBPACK_IMPORTED_MODULE_7__["StatesService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "de" },
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
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreModule"].forRoot({}, {}),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
        _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_15__["AddCardFormComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
        _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_18__["AddLectureFormComponent"],
        _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_19__["LecturesComponent"],
        _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"],
        _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_21__["CardsPageComponent"],
        _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_9__["UpdateCardFormComponent"],
        _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_22__["LoginPageComponent"],
        _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_23__["LoginFormComponent"],
        _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_24__["SignupPageComponent"],
        _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_25__["SignupFormComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
        _routes_about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
        _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_29__["AccountPageComponent"],
        _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_30__["OverviewComponent"],
        _components_change_profile_change_profile_component__WEBPACK_IMPORTED_MODULE_31__["ChangeProfileComponent"],
        _components_cards_overview_cards_overview_component__WEBPACK_IMPORTED_MODULE_32__["CardsOverviewComponent"],
        _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_33__["NotificationsComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["SafeHtmlPipe"],
        _routes_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_36__["ErrorPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
                    _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_15__["AddCardFormComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"],
                    _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_18__["AddLectureFormComponent"],
                    _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_19__["LecturesComponent"],
                    _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"],
                    _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_21__["CardsPageComponent"],
                    _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_9__["UpdateCardFormComponent"],
                    _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_22__["LoginPageComponent"],
                    _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_23__["LoginFormComponent"],
                    _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_24__["SignupPageComponent"],
                    _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_25__["SignupFormComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                    _routes_about_about_component__WEBPACK_IMPORTED_MODULE_28__["AboutComponent"],
                    _routes_account_page_account_page_component__WEBPACK_IMPORTED_MODULE_29__["AccountPageComponent"],
                    _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_30__["OverviewComponent"],
                    _components_change_profile_change_profile_component__WEBPACK_IMPORTED_MODULE_31__["ChangeProfileComponent"],
                    _components_cards_overview_cards_overview_component__WEBPACK_IMPORTED_MODULE_32__["CardsOverviewComponent"],
                    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_33__["NotificationsComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_17__["SafeHtmlPipe"],
                    _routes_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_36__["ErrorPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreModule"].forRoot({}, {}),
                ],
                providers: [
                    _services_states_service__WEBPACK_IMPORTED_MODULE_7__["StatesService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "de" },
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
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
        this.subscriptions$ = [];
    }
    ngOnInit() {
        let sub = this.http
            .getCurrentLecture()
            .subscribe((lecture) => (this.lecture = lecture));
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    setStyle() { }
    onSubmit(f) {
        this.newCard = new _models_Card__WEBPACK_IMPORTED_MODULE_1__["Card"](f.value.thema, f.value.content, this.lecture.abrv, 0);
        let sub = this.cardsService.addCard(this.newCard).subscribe((res) => {
            f.reset();
            sub.unsubscribe();
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
        const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCardFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r38); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Karteikarte hinzuf\u00FCgen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Frage");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Antwort");
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
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setThemaCharIndicatorStyle(_r39));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r39), "/60 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setContentCharIndicatorStyle(_r40));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r40), "/400 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r40, _r39));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["form[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width:90%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2FyZC1mb3JtL2FkZC1jYXJkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNhcmQtZm9ybS9hZGQtY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOjkwJTtcclxuICB9Il19 */"] });
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
        this.subscriptions$ = [];
        this.emitVl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    onSubmit(f) {
        let newLecture = new _models_Vorlesung__WEBPACK_IMPORTED_MODULE_1__["Vorlesung"](f.value.name, f.value.abrv.toLowerCase());
        this.statesService.setLoadingState(true);
        let sub = this.http.addLecture(newLecture).subscribe((response) => {
            this.statesService.setLoadingState(false);
            this.emitVl.emit(newLecture);
            sub.unsubscribe();
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
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddLectureFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r60); });
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
        const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setCharIndicatorStyle(_r61, 60));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r61), "/60 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setCharIndicatorStyle(_r62, 7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r62), "/7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r61, _r62));
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
        args: [{ name: "safeHtml" }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();
class CardComponent {
    constructor(cs) {
        this.cs = cs;
        this.subscriptions$ = [];
        this.styleAppend = `<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/katex.css"><link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/article.css"><script src="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/dist/js/base.js"></script>`;
        this.parsed = [];
        this.isCollapsed = true;
    }
    ngOnInit() {
        let sub = this.cs.getActiveCardIndex().subscribe((change) => {
            //hides te card content when carousel slides
            this.content.hide();
        });
        if (this.card.latex != 0) {
            this.parse(this.card.content);
        }
        else {
            this.parsed.push(this.card.content);
        }
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
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
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r58.toggle(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 3, ctx.parsed[0]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CollapseComponent"]], pipes: [SafeHtmlPipe], styles: ["pre[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  margin-bottom: 0;\r\n  overflow-x: auto;\r\n  white-space: pre-wrap;\r\n  white-space: -moz-pre-wrap;\r\n  white-space: -pre-wrap;\r\n  white-space: -o-pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\npre[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n\r\n  background-color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFNBQVM7RUFDVDs7MkRBRXlEOztFQUV6RCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XHJcbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcclxuICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbnByZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxyXG4gICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxyXG4gICAgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });
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

/***/ "./src/app/components/cards-overview/cards-overview.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/cards-overview/cards-overview.component.ts ***!
  \***********************************************************************/
/*! exports provided: CardsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsOverviewComponent", function() { return CardsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CardsOverviewComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r15.thema);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, card_r15.date, "longDate", "de"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r15.content, " ");
} }
class CardsOverviewComponent {
    constructor(userService) {
        this.userService = userService;
        this.subscriptions$ = [];
        this.cards = [];
    }
    ngOnInit() {
        let sub = this.userService.getUserInfo().subscribe((info) => {
            if (info && info.cards) {
                this.cards = info.cards;
            }
        });
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
CardsOverviewComponent.ɵfac = function CardsOverviewComponent_Factory(t) { return new (t || CardsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
CardsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsOverviewComponent, selectors: [["app-cards-overview"]], decls: 2, vars: 1, consts: [[1, "list-group"], ["class", "list-group-item list-group-item-action", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"]], template: function CardsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsOverviewComponent_a_1_Template, 9, 7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMtb3ZlcnZpZXcvY2FyZHMtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-cards-overview",
                templateUrl: "./cards-overview.component.html",
                styleUrls: ["./cards-overview.component.css"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../card/card.component */ "./src/app/components/card/card.component.ts");










const _c0 = ["mycarousel"];
function CarouselComponent_div_9_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_9_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.goToPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r50.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r49);
} }
function CarouselComponent_div_9_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_9_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.goToNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarouselComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_9_a_1_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function CarouselComponent_div_9_Template_div_swipeleft_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.goToPrev(); })("swiperight", function CarouselComponent_div_9_Template_div_swiperight_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.goToNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-carousel", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeSlideChange", function CarouselComponent_div_9_Template_mdb_carousel_activeSlideChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onSlide($event); })("activeSlideIndexChange", function CarouselComponent_div_9_Template_mdb_carousel_activeSlideIndexChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.activeSlide = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_div_9_ng_container_5_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_9_a_6_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.cards.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeSlideIndex", ctx_r42.activeSlide)("animation", "slide")("isControls", false)("allowSwipe", true)("interval", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.cards.length > 0);
} }
class CarouselComponent {
    constructor(httpService, stateService, cardsService, userService) {
        this.httpService = httpService;
        this.stateService = stateService;
        this.cardsService = cardsService;
        this.userService = userService;
        this.subscriptions$ = [];
    }
    swipePrev(event) {
        this.carousel.previousSlide();
    }
    swipeNext(event) {
        this.carousel.nextSlide();
    }
    ngOnInit() {
        this.activeSlide = 0;
        let sub = this.userService
            .getUserId()
            .subscribe((userId) => (this.userId = userId));
        this.subscriptions$.push(sub);
        sub = this.httpService.getCurrentLecture().subscribe((lecture) => {
            this.lecture = lecture;
            this.title = this.lecture.name;
        });
        this.subscriptions$.push(sub);
        sub = this.cardsService.getCards().subscribe((cards) => {
            this.cards = cards;
        }); //load the specific cards from the server by subscribing to the observable that the card-service provides
        this.subscriptions$.push(sub);
        this.stateService.setFormMode("none");
        sub = this.stateService.getFormMode().subscribe((mode) => {
            this.formShow = mode == "add";
            this.formMode = mode;
        });
        this.subscriptions$.push(sub);
        sub = this.cardsService.getNewCardIndex().subscribe((index) => {
            if (this.carousel) {
                this.activeSlide = index;
                this.carousel.selectSlide(index);
            }
        });
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
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
            if (!this.userId || currCard.author !== this.userId) {
                //there is an author an it is not the user
                return true;
            }
            else {
                return false;
            }
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function CarouselComponent_swipeleft_HostBindingHandler($event) { return ctx.swipePrev($event); })("swiperight", function CarouselComponent_swiperight_HostBindingHandler($event) { return ctx.swipeNext($event); });
    } }, decls: 10, vars: 9, consts: [["id", "vorlesung"], ["id", "btnDiv", "role", "group", 1, "btn-group"], ["id", "rand", "placement", "top", "ngbTooltip", "Zufall", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fas", "fa-random"], ["id", "editCard", "type", "button", "placement", "top", "ngbTooltip", "Bearbeiten", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fas", "fa-pen"], ["id", "toggleAdd", "type", "button", "data-toggle", "button", "placement", "top", 3, "ngClass", "ngbTooltip", "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "row"], [3, "click", 4, "ngIf"], ["id", "carousel", 3, "swipeleft", "swiperight"], [3, "activeSlideIndex", "animation", "isControls", "allowSwipe", "interval", "activeSlideChange", "activeSlideIndexChange"], ["mycarousel", ""], [4, "ngFor", "ngForOf"], [3, "click"], [1, "fas", "fa-chevron-left"], [3, "id"], [3, "card"], [1, "fas", "fa-chevron-right"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselComponent_div_9_Template, 7, 8, "div", 7);
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
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n#vorlesung[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 5px;\r\n}\r\n#btnDiv[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 90%;\r\n  text-align: right;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n}\r\n#carouselExampleControls[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  min-height: 100px;\r\n}\r\n.carousel-control-prev[_ngcontent-%COMP%] {\r\n  width: 5%;\r\n}\r\n.carousel-control-next[_ngcontent-%COMP%] {\r\n  width: 5%;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: black;\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 5%;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n#carousel[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: 0;\r\n}\r\napp-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4jdm9ybGVzdW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiNidG5EaXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2Nhcm91c2VsRXhhbXBsZUNvbnRyb2xzIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIHdpZHRoOiA1JTtcclxufVxyXG5hIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNSU7XHJcbn1cclxuc3BhbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNjYXJvdXNlbCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4ucm93IHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5hcHAtY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-carousel",
                templateUrl: "./carousel.component.html",
                styleUrls: ["./carousel.component.css"],
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"] }, { type: _services_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, { carousel: [{
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

/***/ "./src/app/components/change-profile/change-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/change-profile/change-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChangeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeProfileComponent", function() { return ChangeProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/User */ "./src/app/models/User.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class ChangeProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.subscriptions$ = [];
        this.user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_1__["User"]("", "");
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.user.name = "";
        this.user.surname = "";
        let sub = this.userService.getUserInfo().subscribe((info) => {
            this.userInfo = info;
            if (info && info.user) {
                this.user = info.user;
            }
        });
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    changeAccount(form) {
        this.userService.updateAccount(form.value);
    }
    changePassword(form) {
        let sub = this.userService.updatePassword(form.value).subscribe((res) => {
            form.reset();
            sub.unsubscribe();
        });
    }
    handleFileInput(file) {
        const formData = new FormData();
        this.fileToUpload = file;
        formData.append("fileKey", this.fileToUpload);
        this.userService.uploadFile(formData).subscribe((success) => {
            if (success) {
                console.log("yay");
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
    match(s1, s2) {
        return s1 && s1.length > 7 && s1 === s2;
    }
    validate(form) {
        if (this.checkEmail(form.value.email) &&
            form.value.username &&
            form.value.username.length >= 5) {
            return true;
        }
        else {
            return false;
        }
    }
    checkEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }
}
ChangeProfileComponent.ɵfac = function ChangeProfileComponent_Factory(t) { return new (t || ChangeProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
ChangeProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangeProfileComponent, selectors: [["app-change-profile"]], decls: 62, vars: 8, consts: [[1, "row"], [1, "col-sm-4", "col-xs-12"], ["src", "assets/profile.svg", "alt", "Profile picture"], [1, "col-sm-8", "col-xs-12"], [1, "input-group"], [1, "custom-file"], [3, "change"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], [1, "form-text"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "id", "name", "aria-describedby", "nameHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "surname"], ["type", "text", "name", "surname", "id", "surname", "aria-describedby", "surnameHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["for", "username"], ["type", "text", "id", "username", "name", "username", "required", "", "maxlength", "20", "aria-describedby", "nameHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "aria-describedby", "emailHelp", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["pwform", "ngForm"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", "minlength", "7", 1, "form-control"], ["password", "ngModel"], ["for", "password2"], ["type", "password", "name", "password2", "id", "password2", "ngModel", "", "minlength", "7", 1, "form-control"], ["password2", "ngModel"]], template: function ChangeProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profilbild \u00E4ndern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChangeProfileComponent_Template_form_change_8_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Die maximale Gr\u00F6\u00DFe ist 200KB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Accountdaten \u00E4ndern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangeProfileComponent_Template_form_ngSubmit_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.changeAccount(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vorname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangeProfileComponent_Template_input_ngModelChange_22_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nachname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangeProfileComponent_Template_input_ngModelChange_27_listener($event) { return ctx.user.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Benutzername");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangeProfileComponent_Template_input_ngModelChange_32_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wenigstens 5 Zeichen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangeProfileComponent_Template_input_ngModelChange_39_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Aktualisieren ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Passwort \u00E4ndern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "form", 10, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangeProfileComponent_Template_form_ngSubmit_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47); return ctx.changePassword(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Neues Passwort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Wenigstens 7 Zeichen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Neues Passwort wiederholen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " \u00C4ndern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validate(_r5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.setStyle(_r11, _r12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.match(_r11.value, _r12.value));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"]], styles: ["img[_ngcontent-%COMP%] {\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n  width: 50%;\r\n}\r\n.upload[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFuZ2UtcHJvZmlsZS9jaGFuZ2UtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYW5nZS1wcm9maWxlL2NoYW5nZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLnVwbG9hZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangeProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-change-profile",
                templateUrl: "./change-profile.component.html",
                styleUrls: ["./change-profile.component.css"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "footer"], [1, "list-group", "list-group-horizontal"], [1, "list-group-item"], ["routerLink", "/about"], ["routerLink", "/about", "fragment", "FAQ"], ["href", "https://git.rwth-aachen.de/jungerjunge2/cards", "target", "_blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  margin: 0;\r\n  width: 100%;\r\n  background-color: #f8f9fa;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: grey;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  margin: 2px;\r\n  background-color: #f8f9fa;\r\n  border-style: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5hIHtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5saSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcbiJdfQ== */"] });
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
    const lecture_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r64.setLink(lecture_r65));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lecture_r65.name);
} }
class LecturesComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.subscriptions$ = [];
    }
    ngOnInit() {
        let sub = this.httpService.getAllLectures().subscribe((lectures) => {
            this.lectures = lectures;
        });
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LoginFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r71, "\n");
} }
class LoginFormComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    ngOnInit() { }
    submit(form) {
        this.user.login(form.value);
    }
    isDisabled(username, password) {
        if (!(username.value && password.value)) {
            return true;
        }
        return username.value.length < 5 || password.value.length < 7;
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], decls: 21, vars: 3, consts: [["class", "alert alert-warning", 4, "ngFor", "ngForOf"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "username", "required", "", "aria-describedby", "nameHelp", "ngModel", "", 1, "form-control"], ["username", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", 1, "form-control"], ["password", "ngModel"], [1, "form-group", "form-check"], ["required", "", "type", "checkbox", "id", "remember", "name", "remember", "ngModel", "", 1, "form-check-input", 3, "checked"], ["remember", "ngModel"], ["for", "remember", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "alert", "alert-warning"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginFormComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.submit(_r67); });
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
        const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r68, _r69));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.438);\r\n  border-radius: 5px;\r\n  max-width: 700px;\r\n}\r\n.alert[_ngcontent-%COMP%] {\r\n  max-width: 700px;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDBweCAxMHB4IHJnYmEoNDYsIDQ2LCA0NiwgMC40MzgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcbi5hbGVydCB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login-form",
                templateUrl: "./login-form.component.html",
                styleUrls: ["./login-form.component.css"],
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/__ivy_ngcc__/fesm2015/angular-animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cards.service */ "./src/app/services/cards.service.ts");
/* harmony import */ var src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");














function NavBarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r20.isActive("/login"), " nav-item");
} }
function NavBarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Registrieren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r21.isActive("/signup"), " nav-item");
} }
function NavBarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_13_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r22.isActive("/profile"), " nav-item");
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
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const i_r29 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.closeAlert(i_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notif_r28 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r25.setAlertClass(notif_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@pulseOnEnter", undefined)("@fadeOutOnLeave", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notif_r28.message, "\n");
} }
class NavBarComponent {
    constructor(router, titleService, cardsService, statesService, notification, userService) {
        this.router = router;
        this.titleService = titleService;
        this.cardsService = cardsService;
        this.statesService = statesService;
        this.notification = notification;
        this.userService = userService;
        this.subscriptions$ = [];
        this.loading = false;
    }
    ngOnInit() {
        this.setPageTitle();
        let sub = this.userService
            .authentication()
            .subscribe((val) => (this.loggedIn = val));
        this.subscriptions$.push(sub);
        sub = this.statesService.getLoadingState().subscribe((val) => {
            this.loading = val;
        });
        this.subscriptions$.push(sub);
        this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.userService.clearAccountInfo();
                //clear messages on route change
                if (this.router.url == "/") {
                    this.notification.clearNotifications("alert"); //prevent successfull login message from being removed on home
                }
                else {
                    this.notification.clearNotifications("alert", "success");
                }
            }
        });
        this.subscriptions$.push(sub);
        sub = this.notification
            .getNotifications()
            .subscribe((notifs) => (this.notifications = notifs));
        this.subscriptions$.push(sub);
        if (this.router.url.match(/vorlesung/)) {
            sub = this.cardsService.getCards().subscribe((cards) => {
                this.cards = cards;
            });
            this.subscriptions$.push(sub);
        }
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    closeAlert(i) {
        this.notification.removeNotification(i);
    }
    isActive(path) {
        return path === this.router.url ? "active" : "";
    }
    setAlertClass(notif) {
        return `alert alert-${notif.type} alert-dismissible fade show`;
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
        this.userService.logout();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 9, consts: [["role", "alert", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "padding-right", "0"], [1, "row"], [1, "col-8"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], ["id", "navlist", 1, "navbar-nav"], ["routerLink", "/", "tabindex", "1", 1, "nav-link"], [1, "fas", "fa-home"], [3, "class", 4, "ngIf"], ["class", "col-4", "style", "padding-right: 0;", 4, "ngIf"], ["id", "progress"], ["mode", "indeterminate", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngFor", "ngForOf"], ["routerLink", "/login", 1, "nav-link"], [1, "fas", "fa-user"], ["routerLink", "/signup", 1, "nav-link"], [1, "fas", "fa-plus"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "fas", "fa-user-circle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["routerLink", "/account/overview", "placement", "bottom", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], [1, "col-4", 2, "padding-right", "0"], ["mode", "indeterminate"], ["role", "alert"], ["alert", ""], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavBarComponent_div_17_Template, 6, 5, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.isActive("/"), " nav-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["SearchBarComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"]], styles: [".row[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n#progress[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\nmat-progress-bar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n.alert[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: auto;\r\n  margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5uYXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3Byb2dyZXNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxubWF0LXByb2dyZXNzLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG4uYWxlcnQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iXX0= */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["pulseOnEnterAnimation"])({ scale: 1.05, duration: 500 }),
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["fadeOutOnLeaveAnimation"])({ duration: 200 }),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.css"],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["pulseOnEnterAnimation"])({ scale: 1.05, duration: 500 }),
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["fadeOutOnLeaveAnimation"])({ duration: 200 }),
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"] }, { type: src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"] }, { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotificationsComponent {
    constructor() {
        this.subscriptions$ = [];
    }
    ngOnInit() { }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 2, vars: 0, template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hier werden sp\u00E4ter Benachrichtigungen \u00FCber Bearbeitungsvorschl\u00E4ge und Kommentare stehen\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-notifications",
                templateUrl: "./notifications.component.html",
                styleUrls: ["./notifications.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/User */ "./src/app/models/User.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




class OverviewComponent {
    constructor(userService) {
        this.userService = userService;
        this.user = new src_app_models_User__WEBPACK_IMPORTED_MODULE_1__["User"]("", "");
        this.subscriptions$ = [];
    }
    ngOnInit() {
        let sub = this.userService.getUserInfo().subscribe((info) => {
            this.userInfo = info;
            if (info && info.user) {
                this.user = info.user;
            }
        });
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 24, vars: 4, consts: [[1, "card"], [1, "card-body"], [1, "card-title"], ["src", "assets/profile.svg", "alt", "Profile picture"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "row"], [1, "col-6"], [1, "col-6", "text-right"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vorname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nachname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.surname, " ");
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-overview",
                templateUrl: "./overview.component.html",
                styleUrls: ["./overview.component.css"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


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
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_div_1_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const suggestion_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.navigateTo($event, suggestion_r35.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suggestion_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r35.title);
} }
function SearchBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchBarComponent_div_1_li_2_Template, 3, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.suggestions);
} }
class SearchBarComponent {
    constructor(cardsService, stateService) {
        this.cardsService = cardsService;
        this.stateService = stateService;
        this.subscriptions$ = [];
    }
    ngOnInit() {
        let sub = this.stateService.getHideSuggestions().subscribe((value) => {
            this.clearSuggestions = value;
            if (value) {
                this.suggestions = [];
            }
        });
        this.subscriptions$.push(sub);
        sub = this.cardsService.getCards().subscribe((cards) => {
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
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["#matches[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 40px;\r\n    z-index: 1000;\r\n    right: 0;\r\n    max-width: 300px;\r\n    padding: 1px;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    box-shadow: 0 5px 10px rgba(46, 46, 46, 0.438);\r\n  }\r\n  #search[_ngcontent-%COMP%] {\r\n    max-width: 150px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsOENBQThDO0VBQ2hEO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hdGNoZXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoNDYsIDQ2LCA0NiwgMC40MzgpO1xyXG4gIH1cclxuICAjc2VhcmNoIHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgfSJdfQ== */"] });
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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function SignupFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r79, "\n");
} }
class SignupFormComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() { }
    submit(form) {
        this.userService.createAccount(form.value);
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
SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignupFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupFormComponent, selectors: [["app-signup-form"]], decls: 31, vars: 4, consts: [["class", "alert alert-warning", 4, "ngFor", "ngForOf"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "username", "name", "username", "required", "", "maxlength", "20", "aria-describedby", "nameHelp", "ngModel", "", 1, "form-control"], ["username", "ngModel"], [1, "form-text"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "aria-describedby", "emailHelp", "required", "", "ngModel", "", 1, "form-control"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", "minlength", "7", 1, "form-control"], ["password", "ngModel"], ["type", "password", "name", "password2", "id", "password2", "ngModel", "", "minlength", "7", 1, "form-control"], ["password2", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "alert", "alert-warning"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupFormComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.submit(_r74); });
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
        const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.setStyle(_r77, _r78));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r75, _r76, _r77, _r78));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  margin-top: 10px;\r\n  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.438);\r\n  border-radius: 5px;\r\n  max-width: 700px;\r\n}\r\n.alert[_ngcontent-%COMP%] {\r\n  max-width: 700px;\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCByZ2JhKDQ2LCA0NiwgNDYsIDAuNDM4KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxufVxyXG4uYWxlcnQge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-signup-form",
                templateUrl: "./signup-form.component.html",
                styleUrls: ["./signup-form.component.css"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
        this.subscriptions$ = [];
    }
    ngOnInit() {
        let sub = this.cardsService.getCards().subscribe((cards) => {
            this.cards = cards;
        });
        this.subscriptions$.push(sub);
        sub = this.cardsService.getActiveCardIndex().subscribe((index) => {
            this.activeCardIndex = index;
            if (this.cards) {
                this.cardCopy = Object.assign({}, this.cards[this.activeCardIndex]);
            }
            this.cardIndex = this.activeCardIndex;
        });
        this.subscriptions$.push(sub);
    }
    ngOnDestroy() {
        this.subscriptions$.forEach((sub) => {
            sub.unsubscribe();
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
        let sub = this.cardsService
            .updateCard(Object.assign({}, this.cardCopy), this.cardIndex)
            .subscribe((resp) => {
            f.reset();
            sub.unsubscribe();
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
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateCardFormComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Karteikarte bearbeiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Frage");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Antwort");
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
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCopy.thema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setThemaCharIndicatorStyle(_r17));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r17), "/60 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCopy.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setContentCharIndicatorStyle(_r18));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r18), "/400 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r18, _r17));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["form[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY2FyZC1mb3JtL3VwZGF0ZS1jYXJkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNhcmQtZm9ybS91cGRhdGUtY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4iXX0= */"] });
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

/***/ "./src/app/models/Notification.ts":
/*!****************************************!*\
  !*** ./src/app/models/Notification.ts ***!
  \****************************************/
/*! exports provided: Notification, HttpError, InfoMessage, SuccessMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMessage", function() { return InfoMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessMessage", function() { return SuccessMessage; });
class Notification {
    constructor(t, m) {
        this.type = t;
        this.message = m;
    }
}
class HttpError extends Notification {
    constructor(m, c) {
        super("warning", m);
        this.code = c;
    }
}
class InfoMessage extends Notification {
    constructor(m) {
        super("info", m);
    }
}
class SuccessMessage extends Notification {
    constructor(m) {
        super("success", m);
    }
}


/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, email) {
        this.username = name;
        this.email = email;
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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function AboutComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Erstelle einen Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", um alle Vorteile unserer Webseite zu nutzen.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Erstelle am Besten einen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", oder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "logge dich ein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", damit du Ertseller dieser Karte wirst und nur du diese bearbeiten kannst. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
        this.user.authentication().subscribe((val) => {
            this.loggedIn = val;
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 56, vars: 2, consts: [[1, "media"], ["src", "assets/c.png", "alt", "Logo", 1, "align-self-center", "mr-1"], [1, "media-body"], [4, "ngIf"], ["href", "https://git.rwth-aachen.de/jungerjunge2/cards/-/issues", "target", "_blank"], ["id", "FAQ"], ["routerLink", "/"], [1, "fas", "fa-plus"], ["href", "https://en.wikibooks.org/wiki/LaTeX/Mathematics"], [1, "fas", "fa-pen"], ["routerLink", "/signup"], ["routerLink", "/login"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Cards ist eine Webseite, die dir dabei helfen soll dich auf deine Klausuren und Pr\u00FCfungen vorzubereiten. Das Konzept von Cards beruht auf den klassischen Karteikarten. Anders als die klassischen Karteikarten brauchst du jedoch nicht deinen Stapel an Karten \u00FCberall mitzuschleppen. Unsere Webseite eignet sich vor allem auch f\u00FCr Smartphones, somit kannst du dir deine Karteikarten auch unterwegs anschauen. Sie richtet sich vor allem an Studenten.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_p_7_Template, 4, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sharing is Caring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Karteikarten, die du auf unserer Webseite hinzuf\u00FCgst, sind automatisch f\u00FCr alle anderen Nutzer sichtbar. Andererseits kannst du dir auch Karten von anderen Nutzern anschauen.Dies sorgt daf\u00FCr, dass du optimal auf deine Klausur vorbereitet bist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Wenn du mit einer Karte nicht zufrieden bist, oder du glaubst ihr Inhalt w\u00E4re falsch oder unvollst\u00E4ndig, kannst du sie bearbeiten. Karten, welche von registrierten Nutzern erstellt worden sind, kannst du leider nicht bearbeiten. In einer sp\u00E4teren Version wird es m\u00F6glich sein f\u00FCr diese Karte einen Verberungsvorschlag an den Ertseller der Karte zu senden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wir freuen uns \u00FCber Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Wir bem\u00FChen uns, die Seite fehlerfrei zu gestalten. Trotzdem kann es sein, dass sich der ein oder andere Fehler eingeschlichen hat. Diesen kannst du uns gerne melden indem du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " ein Issue erstellst. Wir versuchen den Fehler, dann so schnell wie m\u00F6glich zu beheben. Du kannst uns dort auch gerne Feedback hinterlassen\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Wo finde ich die Karteikarten zu meiner Vorlesung?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Auf unserer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Startseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " findest du eine Liste aller Vorlesungen, f\u00FCr die bisher Karten hinzugef\u00FCgt wurden. W\u00E4hle deine Vorlesung aus. Falls du die Vorlesung nich in der Liste findest, dann kannst du sie hinzuf\u00FCgen indem du das Formular ausf\u00FCllst und auf \"Hinzuf\u00FCgen\" dr\u00FCckst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Nachdem du auf die Vorlesung gedr\u00FCckt hast kommst du auf eine neue Seite, auf der du dir alle Karteikarten, die zu der Vorlesung bereits hinzugef\u00FCgt wurden, anschauen. Nutze die Pfeiltasten oder wische horizontal \u00FCber die Karte, um dir weitere Karten anzuschauen. Du kannst den Inhalt der Karte aufklappen indem du auf \"Mehr dazu\" dr\u00FCckst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Du kannst auch die Suchfunktion in der Navigationsleiste nutzen, um nach bestimmten Karten zu suchen.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wie erstelle ich eine Karte?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Auf unserer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Startseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " siehst du eine Liste von Vorlesungen. W\u00E4hle die Vorlesung aus zu der du eine Karteikarte hinzuf\u00FCgen m\u00F6chtest. Falls deine Vorlesung nicht findest, kannst du sie \u00FCber das Formular hinzuf\u00FCgen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Nachdem du auf die Seite der Vorlesung navigiert bist kannst du eine neue Karte hinzuf\u00FCgen indem du auf das ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Symbol unter der \u00DCberschrift dr\u00FCckst. Nun kannst du deine Karteikarte hinzuf\u00FCgen indem du das Formular ausf\u00FCllst und auf \"Hinzuf\u00FCgen\" dr\u00FCckst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AboutComponent_span_45_Template, 8, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Pro-Tip: du kannst auch mathematische Symbole schreiben indem du Latex Befehle verwendest und diese mit $ Zeichen umh\u00FCllst. Mehr zu den Latex Befehlen findest du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Wie bearbeite ich eine Karte?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " W\u00E4hle zuerst die Karteikarte aus die du bearbeiten m\u00F6chtest. Dr\u00FCcke auf das ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Symbol unter der \u00DCberschrift. Bearbeite deine Karte im Formular und dr\u00FCcke auf \"Sichern\". Bitte beachte, dass du nur \u00F6ffentliche und deine eigenen Karten bearbeiten kannst. Karten, die von anderen registrierten Nutzern erstellt worden sind kannst du leider nicht bearbeit. In einer sp\u00E4teren Version wird es m\u00F6glich sein f\u00FCr diese Karte einen Verberungsvorschlag an den Ertseller der Karte zu senden.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".media[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZWRpYSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.css"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AccountPageComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Karteikarten ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AccountPageComponent {
    constructor(userService) {
        this.userService = userService;
        this.cardCount = 0;
    }
    ngOnInit() {
        this.userService.getUserInfo().subscribe((info) => {
            if (info && info.cards) {
                this.cardCount = info.cards.length;
            }
            else {
                this.cardCount = 0;
            }
        });
    }
}
AccountPageComponent.ɵfac = function AccountPageComponent_Factory(t) { return new (t || AccountPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AccountPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountPageComponent, selectors: [["app-account-page"]], decls: 10, vars: 1, consts: [[1, "row"], [1, "col-md-4", "col-xs-12"], [1, "list-group"], ["routerLinkActive", "active", "routerLink", "overview", 1, "list-group-item", "list-group-item-action"], ["routerLinkActive", "active", "routerLink", "manage", 1, "list-group-item", "list-group-item-action"], ["class", "list-group-item list-group-item-action", "routerLink", "cards", "routerLinkActive", "active", 4, "ngIf"], ["id", "sub", 1, "col-md-8", "col-xs-12"], ["routerLink", "cards", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"]], template: function AccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00DCbersicht ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profildaten \u00E4ndern ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AccountPageComponent_a_7_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardCount > 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  margin-bottom: 50px;\r\n}\r\n#sub[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n\r\n  background: white;\r\n  overflow-y: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2FjY291bnQtcGFnZS9hY2NvdW50LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjs7RUFFaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9hY2NvdW50LXBhZ2UvYWNjb3VudC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuI3N1YiB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-account-page",
                templateUrl: "./account-page.component.html",
                styleUrls: ["./account-page.component.css"],
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


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
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/add-card-form/add-card-form.component */ "./src/app/components/add-card-form/add-card-form.component.ts");
/* harmony import */ var _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/update-card-form/update-card-form.component */ "./src/app/components/update-card-form/update-card-form.component.ts");











const _c0 = ["alert"];
function CardsPageComponent_app_add_card_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-card-form");
} }
function CardsPageComponent_app_update_card_form_4_Template(rf, ctx) { if (rf & 1) {
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
    } }, decls: 5, vars: 2, consts: [[1, "container"], [4, "ngIf"]], template: function CardsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardsPageComponent_app_add_card_form_3_Template, 1, 0, "app-add-card-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardsPageComponent_app_update_card_form_4_Template, 1, 0, "app-update-card-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMode == "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMode == "edit");
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_8__["AddCardFormComponent"], _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_9__["UpdateCardFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  padding: 0;\r\n  margin-bottom: 50px;\r\n}\r\n.alert[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: auto;\r\n  margin-bottom: 5px;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n}\r\n.col-2[_ngcontent-%COMP%] {\r\n  padding-right: 0;\r\n}\r\n.col-10[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n#progress[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\nmat-progress-bar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVOztFQUVWLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLmFsZXJ0IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNvbC0yIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbi5jb2wtMTAge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4jcHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcbiJdfQ== */"] });
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

/***/ "./src/app/routes/error-page/error-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/error-page/error-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ErrorPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 4, vars: 0, consts: [["routerLink", "/"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Whoops, diese Seite existiert nicht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/lectures/lectures.component */ "./src/app/components/lectures/lectures.component.ts");
/* harmony import */ var _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-lecture-form/add-lecture-form.component */ "./src/app/components/add-lecture-form/add-lecture-form.component.ts");





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
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 3, vars: 1, consts: [[3, "newVl"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lectures", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-add-lecture-form");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newVl", ctx.newVl);
    } }, directives: [_components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_2__["LecturesComponent"], _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_3__["AddLectureFormComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  max-width: 900px;\r\n  margin-bottom: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");



class LoginPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 2, vars: 0, template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"]], styles: ["div[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/signup-form/signup-form.component */ "./src/app/components/signup-form/signup-form.component.ts");



class SignupPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) { return new (t || SignupPageComponent)(); };
SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupPageComponent, selectors: [["app-signup-page"]], decls: 2, vars: 0, template: function SignupPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-signup-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_1__["SignupFormComponent"]], styles: ["div[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"] });
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/services/config.ts");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _states_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class CardsService {
    constructor(notifications, http, //to make calls to the server
    statesService, //for setting the loading state
    router //used to get the lecture abreviation from the route
    ) {
        this.notifications = notifications;
        this.http = http;
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
        this.config = new _config__WEBPACK_IMPORTED_MODULE_3__["HttpConfig"]();
    }
    getCards() {
        this.statesService.setLoadingState(true);
        let abrv = this.router.url.split(/vorlesung\//)[1]; //get the lecture abreviation from the route
        if (this.abrv === abrv) {
            //cards were already loaded for this lecture
            this.statesService.setLoadingState(false);
            return this.cards$.asObservable();
        }
        else {
            this.abrv = abrv;
            //remove the old cards before fetching the new ones
            this.cards$.next([]);
            //make server request
            this.http
                .get(this.config.urlBase + "cards/?abrv=" + abrv, {
                observe: "response",
            })
                .subscribe((response) => {
                this.statesService.setLoadingState(false);
                this.cards$.next(response.body);
            }, (error) => {
                this.notifications.handleErrors(error);
                this.statesService.setLoadingState(false);
            });
            return this.cards$.asObservable();
        }
    }
    updateCard(card, index) {
        this.statesService.setLoadingState(true);
        //send update to server using http service
        return this.http
            .put(this.config.urlBase + "cards/update", { card: card }, {
            headers: this.config.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resp) => {
            this.statesService.setLoadingState(false);
            this.statesService.setFormMode("reset"); //reset form to its previous state
            //update subject
            let cards = this.cards$.getValue();
            cards[index] = card;
            this.cards$.next(cards);
            setTimeout(() => {
                //show new card timeout needed because the carousel needs time to refresh
                //its view
                this.setNewCardIndex(index);
            }, 100);
        }, (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    addCard(card) {
        this.statesService.setLoadingState(true);
        //send new card to server using http service
        return this.http
            .post(this.config.urlBase + "cards/new", { card: card }, {
            headers: this.config.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            this.statesService.setLoadingState(false);
            card._id = response.body.id; //set id received from server response
            //upate subject
            let cards = this.cards$.getValue();
            cards.push(card);
            this.cards$.next(cards);
            setTimeout(() => {
                //show new card timeout needed because the carousel needs time to refresh
                //its view
                this.setNewCardIndex(cards.length - 1);
            }, 100);
        }, (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.body));
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
CardsService.ɵfac = function CardsService_Factory(t) { return new (t || CardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_6__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
CardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardsService, factory: CardsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _states_service__WEBPACK_IMPORTED_MODULE_6__["StatesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/config.ts":
/*!************************************!*\
  !*** ./src/app/services/config.ts ***!
  \************************************/
/*! exports provided: HttpConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfig", function() { return HttpConfig; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

class HttpConfig {
    constructor() {
        this.urlBase = "api/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "Content-Type": "application/json" });
        this.fileHeaders = new Headers(); //configure headers for file upload here
    }
}


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
/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Notification */ "./src/app/models/Notification.ts");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _states_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




//Models







class HttpService {
    constructor(notifications, http, //for sending http requests
    statesService, //set the loading state
    router //to get info in the current url
    ) {
        this.notifications = notifications;
        this.http = http;
        this.statesService = statesService;
        this.router = router;
        this.urlBase = "api/"; //url  base on which to adress the server with
        this.lecture$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_Vorlesung__WEBPACK_IMPORTED_MODULE_4__["Vorlesung"]("", "")); //holds the current lecture
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
        };
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
    //because errors suck and we dont have a unified error handling system in the backend
    addErrors(error) {
        let err = error.error;
        console.log(error);
        if (error.status == 400) {
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_5__["HttpError"]("Bitte logge dich erst ein.", error.status));
            this.router.navigateByUrl("/login");
        }
        else if (error.status == 422) {
            if (typeof err == "string") {
                this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_5__["HttpError"](err, error.status));
            }
            else if (typeof err == "object") {
                this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_5__["HttpError"]("Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.", error.status));
                console.log(err);
            }
            else {
                for (const e of err) {
                    this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_5__["HttpError"](e, error.status));
                }
            }
        }
        else if (error.status >= 500) {
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_5__["HttpError"]("Der Server scheint offline zu sein. Versuche es später erneut.", error.status));
        }
        else {
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_5__["HttpError"]("Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.", error.status));
        }
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_7__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _states_service__WEBPACK_IMPORTED_MODULE_7__["StatesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Notification */ "./src/app/models/Notification.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NotificationsService {
    constructor(router) {
        this.router = router;
        this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    addNotification(n) {
        let notifications = this.notifications$.getValue();
        notifications.push(n);
    }
    //removes a specific error from the error array
    removeNotification(index) {
        let notifications = this.notifications$.getValue();
        notifications.splice(index, 1); //remove error at position index
        this.notifications$.next(notifications);
    }
    clearNotifications(...types) {
        let notifs = this.notifications$.getValue();
        types.forEach((type) => {
            for (let i = 0; i < notifs.length; i++) {
                if (notifs[i].type === type) {
                    this.removeNotification(i);
                }
            }
        });
        this.notifications$.next(notifs);
    }
    removeLoginInfo() {
        let notifs = this.notifications$.getValue();
        for (let i = 0; i < notifs.length; i++) {
            if (notifs[i] instanceof _models_Notification__WEBPACK_IMPORTED_MODULE_2__["InfoMessage"]) {
                //only check if notif is of type InfoMessage as LoginInfo is the only info message for now
                this.removeNotification(i);
            }
        }
    }
    getNotifications() {
        return this.notifications$.asObservable();
    }
    //because errors suck and we dont have a unified error handling system in the backend
    handleErrors(error) {
        let err = error.error;
        console.log(error);
        if (error.status == 400) {
            this.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_2__["InfoMessage"]("Du musst dich einloggen, um diese Seite zu besuchen"));
        }
        else if (error.status == 422) {
            if (typeof err == "string") {
                this.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_2__["HttpError"](err, error.status));
            }
            else if (typeof err == "object") {
                this.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_2__["HttpError"]("Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.", error.status));
                console.log(err);
            }
            else {
                for (const e of err) {
                    this.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_2__["HttpError"](e, error.status));
                }
            }
        }
        else if (error.status >= 500) {
            this.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_2__["HttpError"]("Der Server scheint offline zu sein. Versuche es später erneut.", error.status));
        }
        else {
            this.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_2__["HttpError"]("Ein unbekannter Fehler ist aufgetreten. Versuche es später erneut.", error.status));
        }
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Notification */ "./src/app/models/Notification.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/app/services/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _states_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states.service */ "./src/app/services/states.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications.service */ "./src/app/services/notifications.service.ts");










class UserService {
    constructor(http, //for sending http requests
    statesService, //to set the loadingstate
    router, //to redirect
    notifications //to show notifications
    ) {
        this.http = http;
        this.statesService = statesService;
        this.router = router;
        this.notifications = notifications;
        this.auth$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); //subject which is true if user is authenticated
        this.userId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); //subject which stores the userid
        this.config = new _config__WEBPACK_IMPORTED_MODULE_4__["HttpConfig"]();
    }
    canActivate() {
        return this.http
            .get(this.config.urlBase + "/user/auth", {
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            this.auth$.next(res.body);
            if (res.body === false) {
                this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["InfoMessage"]("Du musst dich einloggen, um diese Seite zu besuchen"));
                this.setUser(null);
                this.router.navigate(["login"]);
            }
        }, (err) => {
            this.auth$.next(false);
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["InfoMessage"]("Du musst dich einloggen, um diese Seite zu besuchen"));
            this.setUser(null);
            this.router.navigate(["login"]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.body));
    }
    //used to login the user
    login(form) {
        this.statesService.setLoadingState(true);
        this.http
            .post(this.config.urlBase + "login", form, {
            headers: this.config.headers,
            observe: "response",
        })
            .subscribe((res) => {
            this.statesService.setLoadingState(false);
            this.setUser(res.body._id, form.remember);
            this.notifications.removeLoginInfo();
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["SuccessMessage"](`Herzlich willkommen ${res.body.username}`));
            this.router.navigateByUrl("/");
        }, (error) => {
            this.notifications.handleErrors(error);
            this.setUser(null);
            this.statesService.setLoadingState(false);
        });
    }
    createAccount(form) {
        return this.http
            .post(this.config.urlBase + "user/new", form, {
            headers: this.config.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            this.setUser(res.body._id);
            this.statesService.setLoadingState(false);
            this.router.navigate(["/"]);
        }, (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.body));
    }
    getUserId() {
        return this.userId$.asObservable();
    }
    logout() {
        this.statesService.setLoadingState(true);
        this.http
            .get(this.config.urlBase + "user/logout", { observe: "response" })
            .subscribe((res) => {
            this.statesService.setLoadingState(false);
            this.setUser(null);
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["SuccessMessage"]("Erfolgreich abgemeldet"));
            this.router.navigate(["/"]);
        }, (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
        });
    }
    authentication() {
        return this.auth$.asObservable();
    }
    getUserInfo() {
        if (this.auth$.getValue() &&
            this.accountInfo$ &&
            this.accountInfo$.getValue()) {
            return this.accountInfo$.asObservable();
        }
        else {
            this.statesService.setLoadingState(true);
            if (!this.accountInfo$) {
                this.accountInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
            }
            this.http
                .get(this.config.urlBase + "user/info", {
                observe: "response",
            })
                .subscribe((res) => {
                this.statesService.setLoadingState(false);
                for (const card of res.body.cards) {
                    card.date = new Date(card.date);
                }
                this.setUser(res.body.user._id);
                this.accountInfo$.next(res.body);
            }, (error) => {
                this.router.navigateByUrl("/login");
                this.statesService.setLoadingState(false);
                this.notifications.handleErrors(error);
            });
            return this.accountInfo$.asObservable();
        }
    }
    clearAccountInfo() {
        if (this.accountInfo$ && !this.router.url.match(/account/)) {
            this.accountInfo$.next(null);
        }
    }
    uploadFile(file) {
        console.log(file);
        this.statesService.setLoadingState(true);
        return this.http
            .post(this.config.urlBase + "user/pic", file, {
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            this.statesService.setLoadingState(false);
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["SuccessMessage"]("Profilbild wurde erfolgreich geändert"));
        }, (error) => {
            this.statesService.setLoadingState(false);
            console.log(error);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.body));
    }
    updateAccount(form) {
        this.statesService.setLoadingState(true);
        this.http
            .put(this.config.urlBase + "user/updateAccount", form, {
            headers: this.config.headers,
            observe: "response",
        })
            .subscribe((res) => {
            this.statesService.setLoadingState(false);
            let info = this.accountInfo$.getValue();
            info.user = form;
            this.accountInfo$.next(info);
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["SuccessMessage"]("Deine Informationen wurden erfolgreich aktualisiert"));
        }, (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
        });
    }
    updatePassword(form) {
        this.statesService.setLoadingState(true);
        return this.http
            .put(this.config.urlBase + "user/updatePassword", form, {
            headers: this.config.headers,
            observe: "response",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((res) => {
            this.statesService.setLoadingState(false);
            this.notifications.addNotification(new _models_Notification__WEBPACK_IMPORTED_MODULE_3__["SuccessMessage"]("Dein Passwort wurde erfolgreich aktualisiert"));
        }, (error) => {
            this.notifications.handleErrors(error);
            this.statesService.setLoadingState(false);
        }));
    }
    deleteAccount() {
        console.log("not yet implemented");
    }
    setUser(id, remember) {
        if (id) {
            this.userId$.next(id);
            this.auth$.next(true);
            if (remember) {
                localStorage.setItem("loggedIn", new Boolean(true).toString()); //store the login state locally
            }
        }
        else {
            this.userId$.next(null);
            this.auth$.next(false);
            localStorage.removeItem("loggedIn");
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_6__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _states_service__WEBPACK_IMPORTED_MODULE_6__["StatesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! D:\GitLab\cards\angular-cards\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map