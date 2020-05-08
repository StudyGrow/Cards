function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./routes/home-page/home-page.component */
    "./src/app/routes/home-page/home-page.component.ts");
    /* harmony import */


    var _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routes/cards-page/cards-page.component */
    "./src/app/routes/cards-page/cards-page.component.ts");
    /* harmony import */


    var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./routes/login-page/login-page.component */
    "./src/app/routes/login-page/login-page.component.ts");
    /* harmony import */


    var _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./routes/signup-page/signup-page.component */
    "./src/app/routes/signup-page/signup-page.component.ts");

    var routes = [{
      path: "",
      component: _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }, {
      path: "vorlesung/:abrv",
      component: _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_3__["CardsPageComponent"]
    }, {
      path: "login",
      component: _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
    }, {
      path: "signup",
      component: _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__["SignupPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var AppComponent = function AppComponent(router, titleService) {
      _classCallCheck(this, AppComponent);

      this.router = router;
      this.titleService = titleService;
      this.titleService.setTitle("Home");
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: MyHammerConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function () {
      return MyHammerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/search-bar/search-bar.component */
    "./src/app/components/search-bar/search-bar.component.ts");
    /* harmony import */


    var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/add-card-form/add-card-form.component */
    "./src/app/components/add-card-form/add-card-form.component.ts");
    /* harmony import */


    var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/carousel/carousel.component */
    "./src/app/components/carousel/carousel.component.ts");
    /* harmony import */


    var _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/card/card.component */
    "./src/app/components/card/card.component.ts");
    /* harmony import */


    var _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/add-lecture-form/add-lecture-form.component */
    "./src/app/components/add-lecture-form/add-lecture-form.component.ts");
    /* harmony import */


    var _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/lectures/lectures.component */
    "./src/app/components/lectures/lectures.component.ts");
    /* harmony import */


    var _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./routes/home-page/home-page.component */
    "./src/app/routes/home-page/home-page.component.ts");
    /* harmony import */


    var _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./routes/cards-page/cards-page.component */
    "./src/app/routes/cards-page/cards-page.component.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/update-card-form/update-card-form.component */
    "./src/app/components/update-card-form/update-card-form.component.ts");
    /* harmony import */


    var _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./routes/login-page/login-page.component */
    "./src/app/routes/login-page/login-page.component.ts");
    /* harmony import */


    var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/login-form/login-form.component */
    "./src/app/components/login-form/login-form.component.ts");
    /* harmony import */


    var _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./routes/signup-page/signup-page.component */
    "./src/app/routes/signup-page/signup-page.component.ts");
    /* harmony import */


    var _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/signup-form/signup-form.component */
    "./src/app/components/signup-form/signup-form.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"); //Modules
    //Components
    //Services
    //Material Modules
    //Gestures
    //Config to allow swipe gestures on carousel


    var MyHammerConfig =
    /*#__PURE__*/
    function (_angular_platform_bro) {
      _inherits(MyHammerConfig, _angular_platform_bro);

      function MyHammerConfig() {
        var _this;

        _classCallCheck(this, MyHammerConfig);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MyHammerConfig).apply(this, arguments));
        _this.overrides = {
          pan: {
            direction: Hammer.DIRECTION_All
          },
          swipe: {
            direction: Hammer.DIRECTION_VERTICAL
          }
        };
        return _this;
      }

      _createClass(MyHammerConfig, [{
        key: "buildHammer",
        value: function buildHammer(element) {
          var mc = new Hammer(element, {
            touchAction: "auto",
            inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
            recognizers: [[Hammer.Swipe, {
              direction: Hammer.DIRECTION_HORIZONTAL
            }]]
          });
          return mc;
        }
      }]);

      return MyHammerConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"]);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_states_service__WEBPACK_IMPORTED_MODULE_19__["StatesService"], _services_http_service__WEBPACK_IMPORTED_MODULE_20__["HttpService"], {
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
        useClass: MyHammerConfig
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreModule"].forRoot({}, {})]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__["SearchBarComponent"], _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_12__["AddCardFormComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_15__["AddLectureFormComponent"], _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_16__["LecturesComponent"], _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"], _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_18__["CardsPageComponent"], _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_22__["UpdateCardFormComponent"], _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__["LoginPageComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_24__["LoginFormComponent"], _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_25__["SignupPageComponent"], _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_26__["SignupFormComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__["SearchBarComponent"], _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_12__["AddCardFormComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_15__["AddLectureFormComponent"], _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_16__["LecturesComponent"], _routes_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"], _routes_cards_page_cards_page_component__WEBPACK_IMPORTED_MODULE_18__["CardsPageComponent"], _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_22__["UpdateCardFormComponent"], _routes_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_23__["LoginPageComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_24__["LoginFormComponent"], _routes_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_25__["SignupPageComponent"], _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_26__["SignupFormComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["WavesModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_27__["StoreModule"].forRoot({}, {})],
          providers: [_services_states_service__WEBPACK_IMPORTED_MODULE_19__["StatesService"], _services_http_service__WEBPACK_IMPORTED_MODULE_20__["HttpService"], {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-card-form/add-card-form.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/add-card-form/add-card-form.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddCardFormComponent */

  /***/
  function srcAppComponentsAddCardFormAddCardFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCardFormComponent", function () {
      return AddCardFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/Card */
    "./src/app/models/Card.ts");
    /* harmony import */


    var _services_cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cards.service */
    "./src/app/services/cards.service.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AddCardFormComponent =
    /*#__PURE__*/
    function () {
      function AddCardFormComponent(cardsService, stateService, http) {
        _classCallCheck(this, AddCardFormComponent);

        this.cardsService = cardsService;
        this.stateService = stateService;
        this.http = http;
      }

      _createClass(AddCardFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.http.getCurrentLecture().subscribe(function (lecture) {
            return _this2.lecture = lecture;
          });
        }
      }, {
        key: "setStyle",
        value: function setStyle() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          this.newCard = new _models_Card__WEBPACK_IMPORTED_MODULE_1__["Card"](f.value.thema, f.value.content, this.lecture.abrv);
          this.cardsService.addCard(this.newCard).subscribe(function (res) {
            f.reset();
          });
        } //Function to set style of small character indicator

      }, {
        key: "setThemaCharIndicatorStyle",
        value: function setThemaCharIndicatorStyle(thema) {
          if (thema.value) {
            return {
              color: thema.value && thema.value.length > 0 && thema.value.length < 3 || thema.value.length > 60 ? "#ff0000" : "#000000"
            };
          } else {
            return {
              color: "#000000"
            };
          }
        } //Function to set style of small character indicator

      }, {
        key: "setContentCharIndicatorStyle",
        value: function setContentCharIndicatorStyle(content) {
          if (content.value) {
            return {
              color: content.value && content.value.length > 400 ? "#ff0000" : "#000000"
            };
          } else {
            return {
              color: "#000000"
            };
          }
        }
      }, {
        key: "getLength",
        value: function getLength(elem) {
          if (elem.value) {
            return elem.value.length;
          } else {
            return 0;
          }
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(content, thema) {
          if (!content.value || !thema.value) {
            return true;
          }

          return content.value.length > 400 || thema.value.length > 0 && thema.value.length < 3 || thema.value.length > 60;
        }
      }]);

      return AddCardFormComponent;
    }();

    AddCardFormComponent.ɵfac = function AddCardFormComponent_Factory(t) {
      return new (t || AddCardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]));
    };

    AddCardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddCardFormComponent,
      selectors: [["app-add-card-form"]],
      decls: 20,
      vars: 5,
      consts: [["id", "addCard"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "thema"], ["id", "thema", "name", "thema", "type", "text", "placeholder", "Thema", "minlength", "3", "required", "", "ngModel", "", 1, "form-control"], ["thema", "ngModel"], [1, "form-text", "float-right", 3, "ngStyle"], ["for", "content"], ["id", "content", "name", "content", "rows", "5", "required", "", "ngModel", "", 1, "form-control"], ["content", "ngModel"], ["id", "addBtn", "type", "submit", "value", "Hinzuf\xFCgen", 1, "btn", "btn-primary", "mb-2", 3, "disabled"]],
      template: function AddCardFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCardFormComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266);

            var _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r263);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Karteikarte hinzuf\xFCgen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xDCberschrift");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Informationen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setThemaCharIndicatorStyle(_r264));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r264), "/60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setContentCharIndicatorStyle(_r265));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r265), "/400 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r265, _r264));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      styles: ["form[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width:90%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2FyZC1mb3JtL2FkZC1jYXJkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNhcmQtZm9ybS9hZGQtY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDo5MCU7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCardFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-add-card-form",
          templateUrl: "./add-card-form.component.html",
          styleUrls: ["./add-card-form.component.css"]
        }]
      }], function () {
        return [{
          type: _services_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-lecture-form/add-lecture-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/add-lecture-form/add-lecture-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AddLectureFormComponent */

  /***/
  function srcAppComponentsAddLectureFormAddLectureFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddLectureFormComponent", function () {
      return AddLectureFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_Vorlesung__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/Vorlesung */
    "./src/app/models/Vorlesung.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AddLectureFormComponent =
    /*#__PURE__*/
    function () {
      function AddLectureFormComponent(http, statesService) {
        _classCallCheck(this, AddLectureFormComponent);

        this.http = http;
        this.statesService = statesService;
        this.emitVl = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AddLectureFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          var _this3 = this;

          var newLecture = new _models_Vorlesung__WEBPACK_IMPORTED_MODULE_1__["Vorlesung"](f.value.name, f.value.abrv);
          this.statesService.setLoadingState(true);
          this.http.addLecture(newLecture).subscribe(function (response) {
            _this3.statesService.setLoadingState(false);

            _this3.emitVl.emit(newLecture);
          });
          f.reset();
        }
      }, {
        key: "setCharIndicatorStyle",
        value: function setCharIndicatorStyle(field, max) {
          if (field.value) {
            return {
              color: field.value.length > max ? "#ff0000" : "#000000"
            };
          } else {
            return {
              color: "#000000"
            };
          }
        }
      }, {
        key: "getLength",
        value: function getLength(elem) {
          if (elem.value) {
            return elem.value.length;
          } else {
            return 0;
          }
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(name, abrv) {
          if (!name.value || !abrv.value) {
            return true;
          } else {
            return abrv.value.length == 0 || abrv.value.length < 3 || abrv.value.length > 7 || name.value.length == 0 || name.value.length > 60;
          }
        }
      }]);

      return AddLectureFormComponent;
    }();

    AddLectureFormComponent.ɵfac = function AddLectureFormComponent_Factory(t) {
      return new (t || AddLectureFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]));
    };

    AddLectureFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddLectureFormComponent,
      selectors: [["app-add-lecture-form"]],
      outputs: {
        emitVl: "emitVl"
      },
      decls: 20,
      vars: 5,
      consts: [["id", "addLecture"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "name"], ["id", "name", "name", "name", "type", "text", "placeholder", "Datenstrukturen und Algorithmen", "minlength", "3", "required", "", "ngModel", "", 1, "form-control"], ["name", "ngModel"], [1, "form-text", "float-right", 3, "ngStyle"], ["for", "abrv"], ["id", "abrv", "name", "abrv", "required", "", "ngModel", "", "placeholder", "Dsal", 1, "form-control"], ["abrv", "ngModel"], ["id", "addBtn", "type", "submit", "value", "Hinzuf\xFCgen", 1, "btn", "btn-primary", "mb-2", 3, "disabled"]],
      template: function AddLectureFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddLectureFormComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r282);

            var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r279);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vorlesung hinzuf\xFCgen");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Abk\xFCrzung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setCharIndicatorStyle(_r280, 60));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r280), "/60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setCharIndicatorStyle(_r281, 7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r281), "/7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r280, _r281));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWxlY3R1cmUtZm9ybS9hZGQtbGVjdHVyZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLectureFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-add-lecture-form",
          templateUrl: "./add-lecture-form.component.html",
          styleUrls: ["./add-lecture-form.component.css"]
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]
        }];
      }, {
        emitVl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/card/card.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/card/card.component.ts ***!
    \***************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);

        this.isCollapsed = true;
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        card: "card"
      },
      decls: 10,
      vars: 4,
      consts: [[1, "card", 3, "id"], [1, "card-header"], [1, "card-body"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "fas", "fa-caret-down"], [1, "collapse", 3, "ngbCollapse"], ["lang", "de"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_4_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Mehr dazu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "`", ctx.card._id, "`");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.thema, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.content);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]],
      styles: ["pre[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-bottom: 0;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\npre[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFNBQVM7RUFDVDs7MkRBRXlEOztFQUV6RCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7O0VBRWQsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInByZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aGl0ZS1zcGFjZTogLW1vei1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDtcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5wcmUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-card",
          templateUrl: "./card.component.html",
          styleUrls: ["./card.component.css"]
        }]
      }], function () {
        return [];
      }, {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/carousel/carousel.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/carousel/carousel.component.ts ***!
    \***********************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppComponentsCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _services_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cards.service */
    "./src/app/services/cards.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/components/card/card.component.ts");

    var _c0 = ["mycarousel"];

    function CarouselComponent_div_9_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var card_r270 = ctx.$implicit;
        var i_r271 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r271.toString());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r270);
      }
    }

    function CarouselComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r272.goToPrev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function CarouselComponent_div_9_Template_div_swipeleft_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r274.goToPrev();
        })("swiperight", function CarouselComponent_div_9_Template_div_swiperight_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r275.goToNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-carousel", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeSlideChange", function CarouselComponent_div_9_Template_mdb_carousel_activeSlideChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r276.onSlide($event);
        })("activeSlideIndexChange", function CarouselComponent_div_9_Template_mdb_carousel_activeSlideIndexChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r277.activeSlide = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_9_ng_container_6_Template, 3, 2, "ng-container", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_9_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r278.goToNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeSlideIndex", ctx_r267.activeSlide)("animation", "slide")("isControls", false)("allowSwipe", true)("interval", "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r267.cards);
      }
    }

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent(config, httpService, stateService, cardsService) {
        _classCallCheck(this, CarouselComponent);

        this.httpService = httpService;
        this.stateService = stateService;
        this.cardsService = cardsService;
        this.activeSlide = 0;
        config.interval = -1;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = false;
      }

      _createClass(CarouselComponent, [{
        key: "swipePrev",
        value: function swipePrev(event) {
          this.carousel.previousSlide();
        }
      }, {
        key: "swipeNext",
        value: function swipeNext(event) {
          this.carousel.nextSlide();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.httpService.getCurrentLecture().subscribe(function (lecture) {
            _this4.lecture = lecture;
            _this4.title = _this4.lecture.name;

            _this4.cardsService.getCards(lecture).subscribe(function (cards) {
              _this4.cards = cards;
            }); //load the specific cards from the server by subscribing to the observable that the card-service provides

          });
          this.stateService.setFormMode("none");
          this.stateService.getFormMode().subscribe(function (mode) {
            _this4.formShow = mode == "add";
            _this4.formMode = mode;
          });
          this.cardsService.getNewCardIndex().subscribe(function (index) {
            if (_this4.carousel && _this4.activeSlide != index) {
              _this4.activeSlide = index;

              _this4.carousel.selectSlide(index);
            }
          });
        }
      }, {
        key: "toggleAddView",
        value: function toggleAddView() {
          if (this.formMode != "edit") {
            if (this.formMode == "add") {
              this.stateService.setFormMode("none");
            } else {
              this.stateService.setFormMode("add");
            }
          }
        }
      }, {
        key: "enableEdit",
        value: function enableEdit() {
          this.stateService.setFormMode("edit");
        }
      }, {
        key: "setClass",
        value: function setClass() {
          return !this.formShow ? "btn btn-light" : "btn btn-info";
        }
      }, {
        key: "selectSlide",
        value: function selectSlide(n) {
          this.carousel.selectSlide(n.toString());
        }
      }, {
        key: "showRandomCard",
        value: function showRandomCard() {
          var rand = this.activeSlide;
          var count = 0;

          while (count < 5 && rand == this.activeSlide) {
            //calculate a new random index
            count++;
            rand = Math.floor(Math.random() * this.cards.length); //random Cardindex
          }

          this.carousel.selectSlide(rand.toString());
        }
      }, {
        key: "goToPrev",
        value: function goToPrev() {
          if (this.formMode != "edit") {
            this.carousel.previousSlide();
          }
        }
      }, {
        key: "goToNext",
        value: function goToNext() {
          if (this.formMode != "edit") {
            this.carousel.nextSlide();
          }
        }
      }, {
        key: "onSlide",
        value: function onSlide(slideEvent) {
          this.cardsService.setActiveCardIndex(parseInt(slideEvent.relatedTarget));
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["app-carousel"]],
      viewQuery: function CarouselComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
        }
      },
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function CarouselComponent_swipeleft_HostBindingHandler($event) {
            return ctx.swipePrev($event);
          })("swiperight", function CarouselComponent_swiperight_HostBindingHandler($event) {
            return ctx.swipeNext($event);
          });
        }
      },
      decls: 10,
      vars: 9,
      consts: [["id", "vorlesung"], ["id", "btnDiv", "role", "group", 1, "btn-group"], ["id", "rand", "placement", "top", "ngbTooltip", "Zufall", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fas", "fa-random"], ["id", "editCard", "type", "button", "placement", "top", "ngbTooltip", "Bearbeiten", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fas", "fa-pen"], ["id", "toggleAdd", "type", "button", "data-toggle", "button", "placement", "top", 3, "ngClass", "ngbTooltip", "disabled", "click"], ["class", "row", 4, "ngIf"], [1, "row"], [3, "click"], [1, "fas", "fa-chevron-left"], ["id", "carousel", 3, "swipeleft", "swiperight"], [3, "activeSlideIndex", "animation", "isControls", "allowSwipe", "interval", "activeSlideChange", "activeSlideIndexChange"], ["mycarousel", ""], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [3, "id"], [3, "card"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_3_listener() {
            return ctx.showRandomCard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_5_listener() {
            return ctx.enableEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_7_listener() {
            return ctx.toggleAddView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselComponent_div_9_Template, 9, 6, "div", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formMode == "edit" || !ctx.cards || ctx.cards.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formMode == "edit" || !ctx.cards || ctx.cards.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClass())("ngbTooltip", ctx.formMode == "add" ? "Verstecken" : "Hinzuf\xFCgen")("disabled", ctx.formMode == "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.formMode == "add" ? "fas fa-minus" : "fas fa-plus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cards && ctx.cards.length > 0);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#vorlesung[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 5px;\n}\n#btnDiv[_ngcontent-%COMP%] {\n  display: block;\n  width: 90%;\n  text-align: right;\n  margin: auto;\n  margin-bottom: 10px;\n}\n#carouselExampleControls[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.carousel-item[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  width: 5%;\n}\n.carousel-control-next[_ngcontent-%COMP%] {\n  width: 5%;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 5%;\n}\nspan[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n#carousel[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.row[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0;\n}\napp-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG59XG4jdm9ybGVzdW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4jYnRuRGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcm91c2VsLWl0ZW0ge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIHdpZHRoOiA1JTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHdpZHRoOiA1JTtcbn1cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNSU7XG59XG5zcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbiNjYXJvdXNlbCB7XG4gIHdpZHRoOiA5MCU7XG59XG4ucm93IHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwO1xufVxuYXBwLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-carousel",
          templateUrl: "./carousel.component.html",
          styleUrls: ["./carousel.component.css"]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]
        }, {
          type: _services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]
        }];
      }, {
        carousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["mycarousel", {
            static: false
          }]
        }],
        swipePrev: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["swipeleft", ["$event"]]
        }],
        swipeNext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["swiperight", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/lectures/lectures.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/lectures/lectures.component.ts ***!
    \***********************************************************/

  /*! exports provided: LecturesComponent */

  /***/
  function srcAppComponentsLecturesLecturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturesComponent", function () {
      return LecturesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function LecturesComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lecture_r284 = ctx.$implicit;

        var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r283.setLink(lecture_r284));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lecture_r284.name);
      }
    }

    var LecturesComponent =
    /*#__PURE__*/
    function () {
      function LecturesComponent(httpService) {
        _classCallCheck(this, LecturesComponent);

        this.httpService = httpService;
        this.lecturesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LecturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.httpService.getAllLectures().subscribe(function (lectures) {
            _this5.lectures = lectures;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.newVl) {
            console.log("got new vl: ", this.newVl);
            this.lectures.push(this.newVl);
          }
        }
      }, {
        key: "setLink",
        value: function setLink(lecture) {
          return "/vorlesung/" + lecture.abrv;
        }
      }]);

      return LecturesComponent;
    }();

    LecturesComponent.ɵfac = function LecturesComponent_Factory(t) {
      return new (t || LecturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
    };

    LecturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LecturesComponent,
      selectors: [["app-lectures"]],
      inputs: {
        newVl: "newVl"
      },
      outputs: {
        lecturesLoaded: "lecturesLoaded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 2,
      vars: 1,
      consts: [[1, "list", "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [3, "routerLink"]],
      template: function LecturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LecturesComponent_li_1_Template, 3, 2, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lectures);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVjdHVyZXMvbGVjdHVyZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LecturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-lectures",
          templateUrl: "./lectures.component.html",
          styleUrls: ["./lectures.component.css"]
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }];
      }, {
        lecturesLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        newVl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login-form/login-form.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/login-form/login-form.component.ts ***!
    \***************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppComponentsLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginFormComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r294 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r294, "\n");
      }
    }

    var LoginFormComponent =
    /*#__PURE__*/
    function () {
      function LoginFormComponent(http, router) {
        _classCallCheck(this, LoginFormComponent);

        this.http = http;
        this.router = router;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit(form) {
          var _this6 = this;

          this.http.login(form.value).subscribe(function (response) {
            if (response.status == 200) {
              _this6.router.navigate(["/"]);
            }
          }, function (error) {
            if (error.headers.status = 422) {
              _this6.errors = error.error.errors;
            }
          });
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(username, password) {
          if (!(username.value && password.value)) {
            return true;
          }

          return username.value.length < 5 || password.value.length < 7;
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["app-login-form"]],
      decls: 21,
      vars: 3,
      consts: [["class", "alert alert-warning", 4, "ngFor", "ngForOf"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "username", "required", "", "aria-describedby", "nameHelp", "ngModel", "", 1, "form-control"], ["username", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", 1, "form-control"], ["password", "ngModel"], [1, "form-group", "form-check"], ["required", "", "type", "checkbox", "id", "remember", "name", "remember", "ngModel", "", 1, "form-check-input", 3, "checked"], ["remember", "ngModel"], ["for", "remember", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "alert", "alert-warning"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginFormComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r295);

            var _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.submit(_r290);
          });

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
        }

        if (rf & 2) {
          var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r291, _r292));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.438);\n  border-radius: 5px;\n  max-width: 700px;\n}\n.alert[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggcmdiYSg0NiwgNDYsIDQ2LCAwLjQzOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cbi5hbGVydCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-login-form",
          templateUrl: "./login-form.component.html",
          styleUrls: ["./login-form.component.css"]
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cards.service */
    "./src/app/services/cards.service.ts");
    /* harmony import */


    var src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../search-bar/search-bar.component */
    "./src/app/components/search-bar/search-bar.component.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function NavBarComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r251.isActive("/login"), " nav-item");
      }
    }

    function NavBarComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Registrieren");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r252.isActive("/signup"), " nav-item");
      }
    }

    function NavBarComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Account ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Account management");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_li_13_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r257);

          var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r256.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r253.isActive("/profile"), " nav-item");
      }
    }

    function NavBarComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-bar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavBarComponent_mat_progress_bar_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 24);
      }
    }

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(router, titleService, http, cardsService, statesService) {
        _classCallCheck(this, NavBarComponent);

        this.router = router;
        this.titleService = titleService;
        this.http = http;
        this.cardsService = cardsService;
        this.statesService = statesService;
        this.loading = false;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.setPageTitle();
          this.user = this.http.getUser();
          this.statesService.getLoadingState().subscribe(function (val) {
            _this7.loading = val;
          });
          if (this.router.url != "/" && this.router.url != "/login" && this.router.url != "/signup") this.http.getCurrentLecture().subscribe(function (lect) {
            _this7.lecture = lect;

            _this7.cardsService.getCards(lect).subscribe(function (cards) {
              _this7.cards = cards;
            });
          });
        }
      }, {
        key: "isActive",
        value: function isActive(path) {
          return path === this.router.url ? "active" : "";
        }
      }, {
        key: "setPageTitle",
        value: function setPageTitle() {
          var currentTitle;

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
      }, {
        key: "logout",
        value: function logout() {
          this.http.logout();
          this.user = null;
          this.router.navigate(["/"]);
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"]));
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 17,
      vars: 8,
      consts: [["role", "alert", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "padding-right", "0"], [1, "row"], [1, "col-8"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], ["id", "navlist", 1, "navbar-nav"], ["routerLink", "/", "tabindex", "1", 1, "nav-link"], [1, "fas", "fa-home"], [3, "class", 4, "ngIf"], ["class", "col-4", "style", "padding-right: 0;", 4, "ngIf"], ["id", "progress"], ["mode", "indeterminate", 4, "ngIf"], ["routerLink", "/login", 1, "nav-link"], [1, "fas", "fa-user"], ["routerLink", "/signup", 1, "nav-link"], [1, "fas", "fa-plus"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link"], [1, "fas", "fa-user-circle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", "placement", "bottom", "ngbTooltip", "im Aufbau", 1, "dropdown-item", "disabled"], [1, "dropdown-item", 3, "click"], [1, "col-4", 2, "padding-right", "0"], ["mode", "indeterminate"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]],
      styles: [".row[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  position: relative;\n}\n#progress[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxubmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-nav-bar",
          templateUrl: "./nav-bar.component.html",
          styleUrls: ["./nav-bar.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }, {
          type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]
        }, {
          type: src_app_services_states_service__WEBPACK_IMPORTED_MODULE_5__["StatesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search-bar/search-bar.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/search-bar/search-bar.component.ts ***!
    \***************************************************************/

  /*! exports provided: SearchBarComponent */

  /***/
  function srcAppComponentsSearchBarSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () {
      return SearchBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cards.service */
    "./src/app/services/cards.service.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchBarComponent_div_1_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_div_1_li_2_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r262);

          var suggestion_r260 = ctx.$implicit;

          var ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r261.navigateTo($event, suggestion_r260.index);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var suggestion_r260 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r260.title);
      }
    }

    function SearchBarComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchBarComponent_div_1_li_2_Template, 3, 1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.suggestions);
      }
    }

    var SearchBarComponent =
    /*#__PURE__*/
    function () {
      function SearchBarComponent(cardsService, stateService, http) {
        _classCallCheck(this, SearchBarComponent);

        this.cardsService = cardsService;
        this.stateService = stateService;
        this.http = http;
      }

      _createClass(SearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.stateService.getHideSuggestions().subscribe(function (value) {
            _this8.clearSuggestions = value;

            if (value) {
              _this8.suggestions = [];
            }
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this9 = this;

          //put these into ngOnInit
          if (this.http.getCurrentLecture()) {
            this.http.getCurrentLecture().subscribe(function (vl) {
              return _this9.lecture = vl;
            });
          }

          if (this.cardsService.getCards(this.lecture)) {
            this.cardsService.getCards(this.lecture).subscribe(function (cards) {
              _this9.cards = cards;
              cards.forEach(function (card) {
                if (card.thema == null) {
                  card.thema = "";
                }

                if (card.content == null) {
                  card.content = "";
                }
              });
            });
          }
        }
      }, {
        key: "findMatches",
        value: function findMatches(e) {
          this.stateService.setHideSuggestions(false); //show suggestions

          if (this.uInput && this.uInput.length > 2) {
            this.suggestions = [];
            var regex = new RegExp("".concat(this.uInput), "gi");

            for (var i = 0; i < this.cards.length; i++) {
              if (this.cards[i].thema.match(regex)) {
                this.suggestions.push({
                  title: this.cards[i].thema,
                  index: i
                });
              }
            }
          }
        }
      }, {
        key: "navigateTo",
        value: function navigateTo(e, index) {
          e.preventDefault();
          this.cardsService.setNewCardIndex(index);
        }
      }]);

      return SearchBarComponent;
    }();

    SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
      return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
    };

    SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchBarComponent,
      selectors: [["app-search-bar"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 2,
      vars: 2,
      consts: [["id", "search", "type", "search", "placeholder", "Thema suchen", 1, "form-control", "float-right", 3, "ngModel", "ngModelChange", "input"], ["id", "matches", 4, "ngIf"], ["id", "matches"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", 3, "click"]],
      template: function SearchBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.uInput = $event;
          })("input", function SearchBarComponent_Template_input_input_0_listener($event) {
            return ctx.findMatches($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchBarComponent_div_1_Template, 3, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.suggestions);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["#matches[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 40px;\n    z-index: 1000;\n    right: 0;\n    max-width: 300px;\n    padding: 1px;\n    max-height: 200px;\n    overflow: auto;\n    box-shadow: 0 5px 10px rgba(46, 46, 46, 0.438);\n  }\n  #search[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsOENBQThDO0VBQ2hEO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hdGNoZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICByaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoNDYsIDQ2LCA0NiwgMC40MzgpO1xuICB9XG4gICNzZWFyY2gge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-search-bar",
          templateUrl: "./search-bar.component.html",
          styleUrls: ["./search-bar.component.css"]
        }]
      }], function () {
        return [{
          type: _services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_2__["StatesService"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/signup-form/signup-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/signup-form/signup-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SignupFormComponent */

  /***/
  function srcAppComponentsSignupFormSignupFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function () {
      return SignupFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignupFormComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var error_r302 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r302, "\n");
      }
    }

    var SignupFormComponent =
    /*#__PURE__*/
    function () {
      function SignupFormComponent(http, router) {
        _classCallCheck(this, SignupFormComponent);

        this.http = http;
        this.router = router;
      }

      _createClass(SignupFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit(form) {
          var _this10 = this;

          this.http.createAccount(form.value).subscribe(function (response) {
            if (response) {
              _this10.router.navigate(["/"]);
            }
          }, function (error) {
            if (error.headers.status = 422) {
              console.log(error);
              _this10.errors = error.error.errors;
            }
          });
        }
      }, {
        key: "setStyle",
        value: function setStyle(password, password2) {
          if (password2.value && password2.value.length > 5 && password2.value != password.value) {
            return "box-shadow:0 0 3px #CC0000;";
          }

          return "";
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(email) {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
          }

          return false;
        }
      }, {
        key: "getLength",
        value: function getLength(elem) {
          if (elem.value) {
            return elem.value.length;
          } else {
            return 0;
          }
        }
      }, {
        key: "setCharIndicatorStyle",
        value: function setCharIndicatorStyle(field, max) {
          if (field.value) {
            return {
              color: field.value.length > max ? "#ff0000" : "#000000"
            };
          } else {
            return {
              color: "#000000"
            };
          }
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(username, email, password, password2) {
          if (!(username.value && email.value && password.value)) {
            return true;
          }

          return username.value.length < 5 || password.value.length < 7 || password.value != password2.value || !this.checkEmail(email.value);
        }
      }]);

      return SignupFormComponent;
    }();

    SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) {
      return new (t || SignupFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignupFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupFormComponent,
      selectors: [["app-signup-form"]],
      decls: 31,
      vars: 4,
      consts: [["class", "alert alert-warning", 4, "ngFor", "ngForOf"], [1, "container"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "username", "name", "username", "required", "", "maxlength", "20", "aria-describedby", "nameHelp", "ngModel", "", 1, "form-control"], ["username", "ngModel"], [1, "form-text"], ["for", "email"], ["type", "email", "name", "email", "id", "email", "aria-describedby", "emailHelp", "required", "", "ngModel", "", 1, "form-control"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "ngModel", "", "minlength", "7", 1, "form-control"], ["password", "ngModel"], ["type", "password", "name", "password2", "id", "password2", "ngModel", "", "minlength", "7", 1, "form-control"], ["password2", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "alert", "alert-warning"]],
      template: function SignupFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignupFormComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303);

            var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.submit(_r297);
          });

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
        }

        if (rf & 2) {
          var _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.setStyle(_r300, _r301));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r298, _r299, _r300, _r301));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 10px;\n  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.438);\n  border-radius: 5px;\n  max-width: 700px;\n}\n.alert[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwcHggMTBweCByZ2JhKDQ2LCA0NiwgNDYsIDAuNDM4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuLmFsZXJ0IHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-signup-form",
          templateUrl: "./signup-form.component.html",
          styleUrls: ["./signup-form.component.css"]
        }]
      }], function () {
        return [{
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/update-card-form/update-card-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/update-card-form/update-card-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UpdateCardFormComponent, DialogOverviewExampleDialog */

  /***/
  function srcAppComponentsUpdateCardFormUpdateCardFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateCardFormComponent", function () {
      return UpdateCardFormComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () {
      return DialogOverviewExampleDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cards_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/cards.service */
    "./src/app/services/cards.service.ts");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var UpdateCardFormComponent =
    /*#__PURE__*/
    function () {
      function UpdateCardFormComponent(cardsService, httpService, statesService, dialog) {
        _classCallCheck(this, UpdateCardFormComponent);

        this.cardsService = cardsService;
        this.httpService = httpService;
        this.statesService = statesService;
        this.dialog = dialog;
      }

      _createClass(UpdateCardFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.httpService.getCurrentLecture().subscribe(function (vl) {
            _this11.lecture = vl;

            _this11.cardsService.getCards(_this11.lecture).subscribe(function (cards) {
              _this11.cards = cards;

              _this11.cardsService.getActiveCardIndex().subscribe(function (index) {
                _this11.activeCardIndex = index;
                _this11.cardCopy = Object.assign({}, _this11.cards[_this11.activeCardIndex]);
                _this11.cardIndex = _this11.activeCardIndex;
              });
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          this.cardCopy.content = f.value.content;
          this.cardCopy.thema = f.value.thema;
          this.cardsService.updateCard(Object.assign({}, this.cardCopy), this.cardIndex);
          f.reset();
        }
      }, {
        key: "cancelEdit",
        value: function cancelEdit() {
          var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: "400px"
          });
        } //Function to set style of small character indicator

      }, {
        key: "setThemaCharIndicatorStyle",
        value: function setThemaCharIndicatorStyle(thema) {
          if (thema.value) {
            return {
              color: thema.value && thema.value.length > 0 && thema.value.length < 3 || thema.value.length > 60 ? "#ff0000" : "#000000"
            };
          } else {
            return {
              color: "#000000"
            };
          }
        } //Function to set style of small character indicator

      }, {
        key: "setContentCharIndicatorStyle",
        value: function setContentCharIndicatorStyle(content) {
          if (content.value) {
            return {
              color: content.value && content.value.length > 400 ? "#ff0000" : "#000000"
            };
          } else {
            return {
              color: "#000000"
            };
          }
        }
      }, {
        key: "getLength",
        value: function getLength(elem) {
          if (elem.value) {
            return elem.value.length;
          } else {
            return 0;
          }
        }
      }, {
        key: "isDisabled",
        value: function isDisabled(content, thema) {
          if (!content.value || !thema.value) {
            return true;
          }

          return content.value.length > 400 || thema.value.length > 0 && thema.value.length < 3 || thema.value.length > 60;
        }
      }]);

      return UpdateCardFormComponent;
    }();

    UpdateCardFormComponent.ɵfac = function UpdateCardFormComponent_Factory(t) {
      return new (t || UpdateCardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    UpdateCardFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateCardFormComponent,
      selectors: [["app-update-card-form"]],
      decls: 22,
      vars: 7,
      consts: [["id", "addCard"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "thema"], ["id", "thema", "name", "thema", "type", "text", "placeholder", "Thema", "minlength", "3", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["thema", "ngModel"], [1, "form-text", "float-right", 3, "ngStyle"], ["for", "content"], ["id", "content", "name", "content", "rows", "5", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["content", "ngModel"], ["type", "submit", "value", "Sichern", 1, "btn", "btn-success", "mb-2", "mr-1", 3, "disabled"], ["type", "button", "value", "Abbruch", 1, "btn", "btn-danger", "mb-2", 3, "click"]],
      template: function UpdateCardFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateCardFormComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288);

            var _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r285);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Karteikarte bearbeiten");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xDCberschrift");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateCardFormComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.cardCopy.thema = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateCardFormComponent_Template_textarea_ngModelChange_15_listener($event) {
            return ctx.cardCopy.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCardFormComponent_Template_input_click_21_listener() {
            return ctx.cancelEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCopy.thema);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setThemaCharIndicatorStyle(_r286));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r286), "/60 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardCopy.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.setContentCharIndicatorStyle(_r287));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getLength(_r287), "/400 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled(_r287, _r286));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      styles: ["form[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY2FyZC1mb3JtL3VwZGF0ZS1jYXJkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNhcmQtZm9ybS91cGRhdGUtY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCardFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-update-card-form",
          templateUrl: "./update-card-form.component.html",
          styleUrls: ["./update-card-form.component.css"]
        }]
      }], function () {
        return [{
          type: _services_cards_service__WEBPACK_IMPORTED_MODULE_1__["CardsService"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();

    var DialogOverviewExampleDialog =
    /*#__PURE__*/
    function () {
      function DialogOverviewExampleDialog(dialogRef, service) {
        _classCallCheck(this, DialogOverviewExampleDialog);

        this.dialogRef = dialogRef;
        this.service = service;
      }

      _createClass(DialogOverviewExampleDialog, [{
        key: "cancel",
        value: function cancel() {
          this.service.setFormMode("reset");
          this.dialogRef.close();
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogOverviewExampleDialog;
    }();

    DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) {
      return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]));
    };

    DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogOverviewExampleDialog,
      selectors: [["dialog-overview-example-dialog"]],
      decls: 11,
      vars: 0,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 2, "text-align", "right"], ["mat-button", "", 1, "btn", "btn-secondary", "mr-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-danger", 3, "click"]],
      template: function DialogOverviewExampleDialog_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Abbruch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bist du sicher, dass du das Bearbeiten dieser Karte abbrechen m\xF6chtest?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_7_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Nein,zur\xFCck ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_9_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "dialog-overview-example-dialog",
          templateUrl: "dialog.html"
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/Card.ts":
  /*!********************************!*\
    !*** ./src/app/models/Card.ts ***!
    \********************************/

  /*! exports provided: Card */

  /***/
  function srcAppModelsCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Card", function () {
      return Card;
    });

    var Card = function Card(thema, content, abrv) {
      _classCallCheck(this, Card);

      this.thema = thema;
      this.content = content;
      this.abrv = abrv;
    };
    /***/

  },

  /***/
  "./src/app/models/Vorlesung.ts":
  /*!*************************************!*\
    !*** ./src/app/models/Vorlesung.ts ***!
    \*************************************/

  /*! exports provided: Vorlesung */

  /***/
  function srcAppModelsVorlesungTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Vorlesung", function () {
      return Vorlesung;
    });

    var Vorlesung = function Vorlesung(name, abrv) {
      _classCallCheck(this, Vorlesung);

      this.name = name;
      this.abrv = abrv;
    };
    /***/

  },

  /***/
  "./src/app/routes/cards-page/cards-page.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/routes/cards-page/cards-page.component.ts ***!
    \***********************************************************/

  /*! exports provided: CardsPageComponent */

  /***/
  function srcAppRoutesCardsPageCardsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsPageComponent", function () {
      return CardsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cards.service */
    "./src/app/services/cards.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/carousel/carousel.component */
    "./src/app/components/carousel/carousel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/add-card-form/add-card-form.component */
    "./src/app/components/add-card-form/add-card-form.component.ts");
    /* harmony import */


    var _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/update-card-form/update-card-form.component */
    "./src/app/components/update-card-form/update-card-form.component.ts");

    function CardsPageComponent_app_add_card_form_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-card-form");
      }
    }

    function CardsPageComponent_app_update_card_form_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-update-card-form");
      }
    }

    var CardsPageComponent =
    /*#__PURE__*/
    function () {
      function CardsPageComponent(route, httpService, stateServie, cardsService, title) {
        _classCallCheck(this, CardsPageComponent);

        this.route = route;
        this.httpService = httpService;
        this.stateServie = stateServie;
        this.cardsService = cardsService;
        this.title = title;
        this.loading = true;
        this.formMode = "none";
      }

      _createClass(CardsPageComponent, [{
        key: "onClick",
        value: function onClick() {
          this.stateServie.setHideSuggestions(true);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.title.setTitle("Cards");
          this.vlAbrv = this.route.snapshot.paramMap.get("abrv");
          this.httpService.getCurrentLecture().subscribe(function (vl) {
            _this12.lecture = vl;

            _this12.cardsService.getCards(_this12.lecture).subscribe(function (cards) {
              _this12.cards = cards;

              if (_this12.cards.length == 0) {
                _this12.stateServie.setFormMode("add");
              }
            });
          });
          this.cardsService.getNewCardIndex().subscribe(function (index) {
            _this12.ativeCard = index;
          });
          this.stateServie.getLoadingState().subscribe(function (value) {
            return _this12.loading = value;
          });
          this.stateServie.getFormMode().subscribe(function (mode) {
            return _this12.formMode = mode;
          });
        }
      }, {
        key: "setLoading",
        value: function setLoading(loading) {
          this.loading = loading;
          this.stateServie.setLoadingState(loading);
        }
      }]);

      return CardsPageComponent;
    }();

    CardsPageComponent.ɵfac = function CardsPageComponent_Factory(t) {
      return new (t || CardsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]));
    };

    CardsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardsPageComponent,
      selectors: [["app-cards-page"]],
      hostBindings: function CardsPageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsPageComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          });
        }
      },
      decls: 7,
      vars: 2,
      consts: [[1, "container"], [4, "ngIf"]],
      template: function CardsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardsPageComponent_app_add_card_form_5_Template, 1, 0, "app-add-card-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardsPageComponent_app_update_card_form_6_Template, 1, 0, "app-update-card-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMode == "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMode == "edit");
        }
      },
      directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_add_card_form_add_card_form_component__WEBPACK_IMPORTED_MODULE_9__["AddCardFormComponent"], _components_update_card_form_update_card_form_component__WEBPACK_IMPORTED_MODULE_10__["UpdateCardFormComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  padding: 0;\n}\n.row[_ngcontent-%COMP%] {\n  width: 90%;\n\n  margin: auto;\n  margin-bottom: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.col-2[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.col-10[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n#progress[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NhcmRzLXBhZ2UvY2FyZHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTs7RUFFVixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07QUFDUiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jYXJkcy1wYWdlL2NhcmRzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnJvdyB7XG4gIHdpZHRoOiA5MCU7XG5cbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmNvbC0yIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5jb2wtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4jcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-cards-page",
          templateUrl: "./cards-page.component.html",
          styleUrls: ["./cards-page.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
        }, {
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_3__["StatesService"]
        }, {
          type: src_app_services_cards_service__WEBPACK_IMPORTED_MODULE_4__["CardsService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["click", ["$event.target"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/routes/home-page/home-page.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/routes/home-page/home-page.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppRoutesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_states_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/lectures/lectures.component */
    "./src/app/components/lectures/lectures.component.ts");
    /* harmony import */


    var _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/add-lecture-form/add-lecture-form.component */
    "./src/app/components/add-lecture-form/add-lecture-form.component.ts");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(statesService) {
        _classCallCheck(this, HomePageComponent);

        this.statesService = statesService;
        this.loading = false;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.statesService.getLoadingState().subscribe(function (val) {
            _this13.loading = val;
          });
        }
      }, {
        key: "emitVl",
        value: function emitVl(lecture) {
          console.log("vl: ", lecture);
          this.newVl = lecture;
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_states_service__WEBPACK_IMPORTED_MODULE_1__["StatesService"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container"], [3, "newVl"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-lectures", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-add-lecture-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newVl", ctx.newVl);
        }
      },
      directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _components_lectures_lectures_component__WEBPACK_IMPORTED_MODULE_3__["LecturesComponent"], _components_add_lecture_form_add_lecture_form_component__WEBPACK_IMPORTED_MODULE_4__["AddLectureFormComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  padding: 15px;\n  max-width: 900px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home-page",
          templateUrl: "./home-page.component.html",
          styleUrls: ["./home-page.component.css"]
        }]
      }], function () {
        return [{
          type: _services_states_service__WEBPACK_IMPORTED_MODULE_1__["StatesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routes/login-page/login-page.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/routes/login-page/login-page.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppRoutesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/login-form/login-form.component */
    "./src/app/components/login-form/login-form.component.ts");

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent() {
        _classCallCheck(this, LoginPageComponent);
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)();
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 3,
      vars: 0,
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]],
      styles: ["div[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routes/signup-page/signup-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/routes/signup-page/signup-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: SignupPageComponent */

  /***/
  function srcAppRoutesSignupPageSignupPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function () {
      return SignupPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/signup-form/signup-form.component */
    "./src/app/components/signup-form/signup-form.component.ts");

    var SignupPageComponent =
    /*#__PURE__*/
    function () {
      function SignupPageComponent() {
        _classCallCheck(this, SignupPageComponent);
      }

      _createClass(SignupPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupPageComponent;
    }();

    SignupPageComponent.ɵfac = function SignupPageComponent_Factory(t) {
      return new (t || SignupPageComponent)();
    };

    SignupPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupPageComponent,
      selectors: [["app-signup-page"]],
      decls: 3,
      vars: 0,
      template: function SignupPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-signup-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_2__["SignupFormComponent"]],
      styles: ["div[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup-page',
          templateUrl: './signup-page.component.html',
          styleUrls: ['./signup-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cards.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/cards.service.ts ***!
    \*******************************************/

  /*! exports provided: CardsService */

  /***/
  function srcAppServicesCardsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsService", function () {
      return CardsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _states_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./states.service */
    "./src/app/services/states.service.ts");

    var CardsService =
    /*#__PURE__*/
    function () {
      function CardsService(httpService, statesService) {
        _classCallCheck(this, CardsService);

        this.httpService = httpService;
        this.statesService = statesService;
        this.newCardIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.activeCardIndex$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
      }

      _createClass(CardsService, [{
        key: "getCards",
        value: function getCards(lecture) {
          var _this14 = this;

          if (this.abrv == lecture.abrv) {
            //cards were already loaded for this lecture
            return this.cards$.asObservable();
          } else {
            //returns an observable of the cards from http service while also initializing the cards internally for reuse
            return this.httpService.getCardsFromLecture(lecture).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              _this14.cards$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](res.body);
              _this14.abrv = res.body[0].vorlesung;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res.body;
            }));
          }
        } // initCards(cards: Card[]) {
        //   //this fucntion is obsolete, its features are implemented in getCards
        //   // this.cards$ = new BehaviorSubject<Card[]>(cards);
        //   // this.cards = cards;
        // }
        // updateCards(cards: Card[]) {
        //   this.cards$.next(cards);
        // }

      }, {
        key: "updateCard",
        value: function updateCard(card, index) {
          var _this15 = this;

          this.statesService.setLoadingState(true);
          this.httpService.updateCard(card).subscribe(function (resp) {
            _this15.statesService.setLoadingState(false);

            _this15.statesService.setFormMode("reset");

            var cards = _this15.cards$.getValue();

            cards[index] = card;

            _this15.cards$.next(cards);
          });
        }
      }, {
        key: "addCard",
        value: function addCard(card) {
          var _this16 = this;

          this.statesService.setLoadingState(true);
          return this.httpService.addCard(card).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            _this16.statesService.setLoadingState(false);

            card._id = response.body;

            var cards = _this16.cards$.getValue();

            cards.push(card);

            _this16.cards$.next(cards);
          }));
        }
      }, {
        key: "getNewCardIndex",
        value: function getNewCardIndex() {
          return this.newCardIndex$.asObservable();
        }
      }, {
        key: "setNewCardIndex",
        value: function setNewCardIndex(i) {
          this.newCardIndex$.next(i);
        }
      }, {
        key: "setActiveCardIndex",
        value: function setActiveCardIndex(i) {
          this.activeCardIndex$.next(i);
        }
      }, {
        key: "getActiveCardIndex",
        value: function getActiveCardIndex() {
          return this.activeCardIndex$.asObservable();
        }
      }]);

      return CardsService;
    }();

    CardsService.ɵfac = function CardsService_Factory(t) {
      return new (t || CardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_4__["StatesService"]));
    };

    CardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CardsService,
      factory: CardsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: _states_service__WEBPACK_IMPORTED_MODULE_4__["StatesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/http.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/http.service.ts ***!
    \******************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _states_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./states.service */
    "./src/app/services/states.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http, statesService, router) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.statesService = statesService;
        this.router = router;
        this.urlBase = "api/";
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      } //Cards


      _createClass(HttpService, [{
        key: "getCardsFromLecture",
        value: function getCardsFromLecture(lecture) {
          var _this17 = this;

          this.statesService.setLoadingState(true);

          if (this.lecture$) {
            return this.http.get(this.urlBase + "cards/?abrv=" + this.lecture$.getValue().abrv, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              _this17.statesService.setLoadingState(false);
            }));
          } else {
            var abrv = this.router.url.split(/vorlesung\//)[1];
            return this.http.get(this.urlBase + "cards/?abrv=" + abrv, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              _this17.statesService.setLoadingState(false);
            }));
          }
        }
      }, {
        key: "addCard",
        value: function addCard(card) {
          //Cards müssen richtig im Frontend definiert werden
          var id;

          if (this.user) {
            id = this.user.id;
          }

          return this.http.post(this.urlBase + "cards/new", {
            card: card,
            userId: id
          }, this.httpOptions);
        }
      }, {
        key: "updateCard",
        value: function updateCard(card) {
          return this.http.put(this.urlBase + "cards/update", {
            card: card
          }, {
            headers: this.httpOptions.headers,
            observe: "response"
          });
        } //Lectures

      }, {
        key: "getAllLectures",
        value: function getAllLectures() {
          var _this18 = this;

          this.statesService.setLoadingState(true);

          if (this.lectures$) {
            this.statesService.setLoadingState(false);
            return this.lectures$.asObservable();
          } else {
            return this.http.get(this.urlBase + "lectures", {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              _this18.statesService.setLoadingState(false);

              _this18.lectures$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](res.body);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.body;
            }));
          }
        }
      }, {
        key: "setCurrentLecture",
        value: function setCurrentLecture(lecture) {
          if (this.lecture$) {
            this.lecture$.next(lecture);
          } else {
            this.lecture$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lecture);
          }
        }
      }, {
        key: "getCurrentLecture",
        value: function getCurrentLecture() {
          var _this19 = this;

          if (this.lecture$) {
            return this.lecture$.asObservable();
          } else {
            var abrv = this.router.url.split(/vorlesung\//)[1];
            return this.http.get(this.urlBase + "lectures/find?abrv=" + abrv, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              _this19.lecture$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](res.body);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.body;
            }));
          }
        }
      }, {
        key: "addLecture",
        value: function addLecture(lecture) {
          var _this20 = this;

          this.statesService.setLoadingState(true);
          return this.http.post(this.urlBase + "lectures/new", {
            lecture: lecture
          }, {
            headers: this.httpOptions.headers,
            observe: "response"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            //add the new lecture to the lectures subject
            _this20.statesService.setLoadingState(false);

            var lectures = _this20.lectures$.getValue();

            lectures.push(lecture);

            _this20.lectures$.next(lectures);
          }));
        }
      }, {
        key: "getLectureByAbrv",
        value: function getLectureByAbrv(abrv) {
          if (this.lectures$) {
            var lectures = this.lectures$.getValue();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = lectures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var lecture = _step.value;

                if (lecture.abrv == abrv) {
                  if (this.lecture$) {
                    this.lecture$.next(lecture);
                  } else {
                    this.lecture$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](lecture);
                  }

                  return lecture;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {}
        } //User

      }, {
        key: "login",
        value: function login(form) {
          var _this21 = this;

          this.statesService.setLoadingState(true);
          return this.http.post(this.urlBase + "login", form, {
            headers: this.httpOptions.headers,
            observe: "response"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this21.statesService.setLoadingState(false);

            _this21.user = res.body;

            if (form.remember) {
              localStorage.setItem("user", JSON.stringify(_this21.user));
            }
          }));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          if (!this.user) {
            this.user = JSON.parse(localStorage.getItem("user"));
          }

          return this.user;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this22 = this;

          this.statesService.setLoadingState(true);
          this.http.get(this.urlBase + "user/logout").subscribe(function (err) {
            _this22.statesService.setLoadingState(false);

            if (err) console.log(err);
          });
          localStorage.removeItem("user");
          this.user = null;
        } //form = {username,email,password}

      }, {
        key: "createAccount",
        value: function createAccount(form) {
          var _this23 = this;

          this.statesService.setLoadingState(true);
          return this.http.post(this.urlBase + "user/new", form, {
            headers: this.httpOptions.headers,
            observe: "response"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this23.user = res.body;

            _this23.statesService.setLoadingState(false);
          }));
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_states_service__WEBPACK_IMPORTED_MODULE_4__["StatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _states_service__WEBPACK_IMPORTED_MODULE_4__["StatesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/states.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/states.service.ts ***!
    \********************************************/

  /*! exports provided: StatesService */

  /***/
  function srcAppServicesStatesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatesService", function () {
      return StatesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); //This service is made to manage states across components


    var StatesService =
    /*#__PURE__*/
    function () {
      function StatesService() {
        _classCallCheck(this, StatesService);

        this.formMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("none");
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.hideSgtn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
      }

      _createClass(StatesService, [{
        key: "getFormMode",
        value: function getFormMode() {
          return this.formMode$.asObservable();
        }
      }, {
        key: "setFormMode",
        value: function setFormMode(mode) {
          if (mode == "reset") {
            if (!this.lastFormMode) {
              //last form mode is undefined
              this.lastFormMode = "none";
            } // last Form mode defined


            this.formMode$.next(this.lastFormMode);
          } else {
            this.formMode$.next(mode);
            if (mode != "edit") this.lastFormMode = mode;
          }
        }
      }, {
        key: "getLoadingState",
        value: function getLoadingState() {
          return this.loading$;
        }
      }, {
        key: "setLoadingState",
        value: function setLoadingState(value) {
          this.loading$.next(value);
        }
      }, {
        key: "setHideSuggestions",
        value: function setHideSuggestions(value) {
          this.hideSgtn$.next(value);
        }
      }, {
        key: "getHideSuggestions",
        value: function getHideSuggestions() {
          return this.hideSgtn$.asObservable();
        }
      }]);

      return StatesService;
    }();

    StatesService.ɵfac = function StatesService_Factory(t) {
      return new (t || StatesService)();
    };

    StatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StatesService,
      factory: StatesService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/erdzan/Library/Mobile Documents/com~apple~CloudDocs/Documents/Visual Studio/Card/Cards/angular-cards/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map