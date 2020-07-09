function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Module dependencies.


    var routes = [{
      path: '',
      redirectTo: '/menu',
      pathMatch: 'full'
    }, {
      path: 'text',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | example-simple-text-module */
        "example-simple-text-module").then(__webpack_require__.bind(null,
        /*! ./example-simple-text.module */
        "./src/app/example-simple-text.module/index.ts")).then(function (_ref) {
          var SimpleTextModule = _ref.SimpleTextModule;
          return SimpleTextModule;
        });
      }
    }, {
      path: 'menu',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | example-menu-module */
        "example-menu-module").then(__webpack_require__.bind(null,
        /*! ./example-menu.module */
        "./src/app/example-menu.module/index.ts")).then(function (_ref2) {
          var ExampleMenuModule = _ref2.ExampleMenuModule;
          return ExampleMenuModule;
        });
      }
    }, {
      path: 'posts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | example-posts-module */
        "example-posts-module").then(__webpack_require__.bind(null,
        /*! ./example-posts.module */
        "./src/app/example-posts.module/index.ts")).then(function (_ref3) {
          var PostsModule = _ref3.PostsModule;
          return PostsModule;
        });
      }
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
      providers: [],
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
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: []
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


    var _sidebar_component_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar.component/sidebar.component */
    "./src/app/sidebar.component/sidebar.component.ts");

    var AppComponent = function AppComponent(router) {
      _classCallCheck(this, AppComponent);

      this.router = router;
      var path = localStorage.getItem('path');

      if (path) {
        localStorage.removeItem('path');
        this.router.navigate([path]);
      }
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["type", "button", 1, "hamburger", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener($event) {
            return $event.target.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular Demo App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_sidebar_component_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  min-height: 100%;\n  background: #efefef;\n  overflow-x: hidden;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 80px;\n  padding: 0 24px;\n  background: #333;\n  color: #EEE;\n}\n\n@media (max-width: 640px) {\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 16px;\n  min-height: calc(100vh - 80px);\n}\n\n@media (min-width: 1024px) {\n  main[_ngcontent-%COMP%] {\n    max-width: calc(100vw - 276px);\n  }\n}\n\n@media (max-width: 1024px) {\n  main[_ngcontent-%COMP%] {\n    max-width: calc(100vw);\n  }\n}\n\n@media (min-width: 1024px) {\n  app-sidebar[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n}\n\n@media (max-width: 1024px) {\n  app-sidebar[_ngcontent-%COMP%] {\n    z-index: -1;\n    position: absolute;\n    top: 80px;\n    width: 100%;\n    height: 0px;\n    padding: 0;\n    opacity: 0;\n    border-top: 1px solid white;\n    background: #efefef;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);\n    transition: z-index 1s ease;\n  }\n}\n\nbutton.hamburger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  color: white;\n}\n\n@media (min-width: 1024px) {\n  button.hamburger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  button.hamburger[_ngcontent-%COMP%]:focus    ~ app-sidebar[_ngcontent-%COMP%] {\n    z-index: 100;\n    overflow: visible;\n    height: auto;\n    opacity: 1;\n    transition: z-index 0s ease;\n  }\n  button.hamburger[_ngcontent-%COMP%]:focus    ~ app-sidebar[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: relative;\n    z-index: 1000;\n    display: block;\n    height: 80px;\n    width: 100%;\n    margin-top: -80px;\n    background: transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkbWl0cml5ZmZcXFByb2plY3RzXFxAbWluZVxcYW5ndWxhcjktcHdhL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLFdBQUE7QUNISjs7QURNSTtFQUNJO0lBQ0ksZUFBQTtFQ0pWO0FBQ0Y7O0FEUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNMSjs7QURRSTtFQVRKO0lBVVEsOEJBQUE7RUNMTjtBQUNGOztBRFFJO0VBZEo7SUFlUSxzQkFBQTtFQ0xOO0FBQ0Y7O0FEVUk7RUFGSjtJQUdRLFlBQUE7RUNOTjtBQUNGOztBRFNJO0VBUEo7SUFRUSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBRUEsV0FBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUVBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSx3Q0FBQTtJQUVBLDJCQUFBO0VDVE47QUFDRjs7QURZQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0FDVko7O0FEYUk7RUFSSjtJQVNRLGFBQUE7RUNWTjtBQUNGOztBRGFJO0VBQ0k7SUFlSSxZQUFBO0lBRUEsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUVBLDJCQUFBO0VDM0JWO0VET1U7SUFDSSxXQUFBO0lBRUEsa0JBQUE7SUFDQSxhQUFBO0lBRUEsY0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFFQSx1QkFBQTtFQ1JkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG5cclxuICAgIGNvbG9yOiAjRUVFO1xyXG5cclxuICAgIC8vIGxlc3MgdGhhblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG5cclxuICAgIC8vIG1vcmUgdGhhblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI3NnB4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZXNzIHRoYW5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hcHAtc2lkZWJhciB7XHJcbiAgICAvLyBtb3JlIHRoYW5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGVzcyB0aGFuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogODBweDtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAuNSk7XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IHotaW5kZXggMXMgZWFzZTtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uLmhhbWJ1cmdlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMjRweDtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLy8gbW9yZSB0aGFuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZXNzIHRoYW5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAmOmZvY3VzIH4gYXBwLXNpZGViYXIge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHotaW5kZXggMHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjRUVFO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIGhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIG1haW4ge1xuICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI3NnB4KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBtYWluIHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncpO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgYXBwLXNpZGViYXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBhcHAtc2lkZWJhciB7XG4gICAgei1pbmRleDogLTE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB0cmFuc2l0aW9uOiB6LWluZGV4IDFzIGVhc2U7XG4gIH1cbn1cblxuYnV0dG9uLmhhbWJ1cmdlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICBidXR0b24uaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGJ1dHRvbi5oYW1idXJnZXI6Zm9jdXMgfiBhcHAtc2lkZWJhciB7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IHotaW5kZXggMHMgZWFzZTtcbiAgfVxuICBidXR0b24uaGFtYnVyZ2VyOmZvY3VzIH4gYXBwLXNpZGViYXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
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

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/sidebar.component/index.ts"); // Base dependencies.
    // App dependencies.


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          })],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar.component/index.ts":
  /*!********************************************!*\
    !*** ./src/app/sidebar.component/index.ts ***!
    \********************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarComponentIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/sidebar.component/sidebar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return _sidebar_component__WEBPACK_IMPORTED_MODULE_0__["SidebarComponent"];
    });
    /***/

  },

  /***/
  "./src/app/sidebar.component/sidebar.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/sidebar.component/sidebar.component.ts ***!
    \********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSidebarComponentSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Angular dependencies.


    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "onClick",
        value: function onClick($event) {
          $event.target.focus();
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      decls: 10,
      vars: 0,
      consts: [["role", "navigation"], ["routerLink", "/posts", "routerLinkActive", "--active"], ["routerLink", "/menu", "routerLinkActive", "--active"], ["routerLink", "/text", "routerLinkActive", "--active"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["[_nghost-%COMP%] {\n  min-width: 240px;\n  padding: 16px 0;\n  border-right: 1px solid #FFF;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  transition: background 0.3s ease;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\nli[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 1px solid #FFF;\n}\n\na[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 24px;\n}\n\na.--active[_ngcontent-%COMP%] {\n  position: relative;\n}\n\na.--active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  width: 12px;\n  height: 12px;\n  border-top: 1px solid #FFF;\n  border-radius: 50%;\n  background: #0095ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci5jb21wb25lbnQvQzpcXFVzZXJzXFxkbWl0cml5ZmZcXFByb2plY3RzXFxAbWluZVxcYW5ndWxhcjktcHdhL3NyY1xcYXBwXFxzaWRlYmFyLmNvbXBvbmVudFxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZWJhci5jb21wb25lbnQvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxnQ0FBQTtBQ0RKOztBREdJO0VBQ0ksOEJBQUE7QUNEUjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJSTtFQUNJLGtCQUFBO0FDRlI7O0FESVE7RUFDSSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyLmNvbXBvbmVudC9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgIHBhZGRpbmc6IDE2cHggMDtcclxuXHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRkZGO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxpICsgbGkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRkY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcblxyXG4gICAgJi4tLWFjdGl2ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGRjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5NWZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0ZGRjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5saTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxubGkgKyBsaSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGO1xufVxuXG5hIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbmEuLS1hY3RpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5hLi0tYWN0aXZlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDk1ZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\dmitriyff\Projects\@mine\angular9-pwa\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map