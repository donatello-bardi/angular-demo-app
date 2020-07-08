function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["example-posts-module"], {
  /***/
  "./src/app/example-posts.module/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/example-posts.module/index.ts ***!
    \***********************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppExamplePostsModuleIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _posts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./posts.module */
    "./src/app/example-posts.module/posts.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return _posts_module__WEBPACK_IMPORTED_MODULE_0__["PostsModule"];
    });
    /***/

  },

  /***/
  "./src/app/example-posts.module/posts.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/example-posts.module/posts.component.ts ***!
    \*********************************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppExamplePostsModulePostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Angular dependencies.


    function PostsComponent_article_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.body, "\n");
      }
    }

    var PostsComponent = function PostsComponent(_route) {
      _classCallCheck(this, PostsComponent);

      this._route = _route;
      this.posts = [];
      this.posts = this._route.snapshot.data.posts;
    };

    PostsComponent.ɵfac = function PostsComponent_Factory(t) {
      return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostsComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function PostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostsComponent_article_0_Template, 5, 2, "article", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["article[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS1wb3N0cy5tb2R1bGUvQzpcXFVzZXJzXFxkbWl0cml5ZmZcXFByb2plY3RzXFxAbWluZVxcYW5ndWxhcjktcHdhL3NyY1xcYXBwXFxleGFtcGxlLXBvc3RzLm1vZHVsZVxccG9zdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4YW1wbGUtcG9zdHMubW9kdWxlL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtcG9zdHMubW9kdWxlL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXJ0aWNsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsImFydGljbGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './posts.component.html',
          styleUrls: ['./posts.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-posts.module/posts.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-posts.module/posts.module.ts ***!
    \******************************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppExamplePostsModulePostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return PostsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts.component */
    "./src/app/example-posts.module/posts.component.ts");
    /* harmony import */


    var _posts_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./posts.resolver */
    "./src/app/example-posts.module/posts.resolver.ts");
    /* harmony import */


    var _posts_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts.routes */
    "./src/app/example-posts.module/posts.routes.ts"); // Module dependencies.


    var PostsModule = function PostsModule() {
      _classCallCheck(this, PostsModule);
    };

    PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PostsModule
    });
    PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PostsModule_Factory(t) {
        return new (t || PostsModule)();
      },
      providers: [_posts_resolver__WEBPACK_IMPORTED_MODULE_4__["PostsResolver"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_posts_routes__WEBPACK_IMPORTED_MODULE_5__["routes"])], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, {
        declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_posts_routes__WEBPACK_IMPORTED_MODULE_5__["routes"])],
          declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          providers: [_posts_resolver__WEBPACK_IMPORTED_MODULE_4__["PostsResolver"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-posts.module/posts.resolver.ts":
  /*!********************************************************!*\
    !*** ./src/app/example-posts.module/posts.resolver.ts ***!
    \********************************************************/

  /*! exports provided: PostsResolver */

  /***/
  function srcAppExamplePostsModulePostsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsResolver", function () {
      return PostsResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // Angular dependencies


    var API_POSTS = 'https://jsonplaceholder.typicode.com/posts';

    var PostsResolver = /*#__PURE__*/function () {
      function PostsResolver(_http) {
        _classCallCheck(this, PostsResolver);

        this._http = _http;
      }

      _createClass(PostsResolver, [{
        key: "resolve",
        value: function resolve() {
          return this._http.get(API_POSTS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (list) {
            return list.filter(function (_ref) {
              var title = _ref.title;
              return ['d', 'l', 'f', 'i'].includes(title[0]);
            });
          })).toPromise();
        }
      }]);

      return PostsResolver;
    }();

    PostsResolver.ɵfac = function PostsResolver_Factory(t) {
      return new (t || PostsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PostsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostsResolver,
      factory: PostsResolver.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-posts.module/posts.routes.ts":
  /*!******************************************************!*\
    !*** ./src/app/example-posts.module/posts.routes.ts ***!
    \******************************************************/

  /*! exports provided: routes */

  /***/
  function srcAppExamplePostsModulePostsRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _posts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./posts.component */
    "./src/app/example-posts.module/posts.component.ts");
    /* harmony import */


    var _posts_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./posts.resolver */
    "./src/app/example-posts.module/posts.resolver.ts"); // Module dependencies.


    var routes = [{
      path: '',
      component: _posts_component__WEBPACK_IMPORTED_MODULE_0__["PostsComponent"],
      resolve: {
        posts: _posts_resolver__WEBPACK_IMPORTED_MODULE_1__["PostsResolver"]
      }
    }];
    /***/
  }
}]);
//# sourceMappingURL=example-posts-module-es5.js.map