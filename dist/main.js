/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dashboard/dashstyle.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dashboard/dashstyle.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".background{\n    font-family: expressway, sans-serif;\n    background: linear-gradient(140deg, #FFE18D, #FFB8B8);\n    height:100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#settings-button{\n    opacity: .7;\n    padding: 10px;\n    border-radius: 8px;\n    font-weight: 700;\n    text-shadow: 4px 4px 4px grey;\n    align-self: flex-end;\n    margin-right: 80px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n#container{\n    background: rgba(255, 255, 255, .4);\n    box-shadow: 16px 16px 30px grey;\n    border-radius: 50px;\n    height: 75vh;\n    width: 75vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n#welcome{\n    font-size: 72px;\n    font-weight: 800;\n    text-shadow: 6px 6px 16px grey;\n    letter-spacing: -4px;\n    opacity: 1;\n}\n#timeStats{\n    display: flex;\n    gap: 10px\n}\n#linksAndToday{\n    display: flex;\n    gap: 10px;\n}\n#weekly-stats, #monthly-stats,\n#links, #today-interface{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    background-color: rgba(255, 255, 255, .4);\n    border-radius: 16px;\n    box-shadow: 8px 8px 16px grey;\n}\n.timer-description{\n    color: blue;\n}\n.today-buttons{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}", "",{"version":3,"sources":["webpack://./src/dashboard/dashstyle.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;IACnC,qDAAqD;IACrD,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,8BAA8B;IAC9B,oBAAoB;IACpB,UAAU;AACd;AACA;IACI,aAAa;IACb;AACJ;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yCAAyC;IACzC,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":[".background{\n    font-family: expressway, sans-serif;\n    background: linear-gradient(140deg, #FFE18D, #FFB8B8);\n    height:100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#settings-button{\n    opacity: .7;\n    padding: 10px;\n    border-radius: 8px;\n    font-weight: 700;\n    text-shadow: 4px 4px 4px grey;\n    align-self: flex-end;\n    margin-right: 80px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n#container{\n    background: rgba(255, 255, 255, .4);\n    box-shadow: 16px 16px 30px grey;\n    border-radius: 50px;\n    height: 75vh;\n    width: 75vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n#welcome{\n    font-size: 72px;\n    font-weight: 800;\n    text-shadow: 6px 6px 16px grey;\n    letter-spacing: -4px;\n    opacity: 1;\n}\n#timeStats{\n    display: flex;\n    gap: 10px\n}\n#linksAndToday{\n    display: flex;\n    gap: 10px;\n}\n#weekly-stats, #monthly-stats,\n#links, #today-interface{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    background-color: rgba(255, 255, 255, .4);\n    border-radius: 16px;\n    box-shadow: 8px 8px 16px grey;\n}\n.timer-description{\n    color: blue;\n}\n.today-buttons{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/library/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/library/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.typekit.net/vtc3wtu.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Initial Layout*/\n.background{\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    user-select: none;\n}\n#library-container{\n    background: rgba(255, 255, 255, .4);\n    box-shadow: 16px 16px 30px grey;\n    border-radius: 50px;\n    height: 90vh;\n    width: 90vw;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n#banner{\n    margin: 16px;\n    height: 140px;\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n#left-banner-div{\n    font-weight: 700;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 10px;\n}\n#category-select{\n    padding: 10px;\n    display: flex;\n    background-color: rgba(255, 255, 255, .4);\n    overflow: auto;\n    flex-grow: 1;\n    align-items: center;\n    gap: 20px;\n    width: 70%;\n    border: 10px solid rgba(255, 255, 255, 0);\n}\n#return-to-dash{\n    background-color: rgba(255, 255, 255, .4);\n    padding: 10px;\n    text-align: center;\n    border-radius: 10px;\n    font-weight: 700;\n    box-shadow: 10px 10px 10px rgb(190, 190, 190);\n    align-self: center;\n    height: 40px;\n    width: 100px;\n    margin-right: 100px;\n}\n#library-background{\n    padding: 10px;\n    background-color:rgba(255, 255, 255, .4);\n    border-radius: 30px;\n    display: flex;\n    height: 1000px;\n    overflow:hidden;\n    margin: 20px;\n}\n\n#add-category{\n    font-weight: 600;\n    background:rgba(255, 255, 255, .4);\n    border-radius: 16px;\n    padding: 10px;\n    box-shadow: 6px 6px 20px rgb(163, 162, 162);\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.category{\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    height: 70%;\n    width: 300px;\n    font-size: 24px;\n    box-shadow: 6px 6px 10px rgb(190, 190, 190);\n    background-color: rgba(255, 255, 255, .6);\n}\n.deleting{\n    background-color: red;\n}\n\n\n#category-title{\n    text-shadow: 6px 6px 10px grey;\n    font-size: 36px;\n}\n#library-content{\n    margin: 16px;\n    align-self: stretch;\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n    overflow: auto;\n    padding: 16px;\n}\n.book{\n    display: flex;\n    font-size: 32px;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(255, 255, 255, .4);\n    box-shadow: 8px 8px 20px rgb(165, 165, 165);\n    width: 100%;\n    height: 300px;\n}\n.title{\n    align-self: center;\n}\n.subtitle{\n    align-self: center;\n}\n.expand-button{\n    align-self: center;\n    text-align: center;\n    width: 95%;\n    font-size: 14px;\n    background-color: rgba(224, 196, 104, 0.4);\n    cursor: pointer;\n}\n.book-buttons-div{\n    display: flex;\n    font-size: 14px;\n    justify-content: space-around;\n}\n/* Book Table of Contents */\n.booktablecontents{\n    height:auto;\n    overflow: hidden; \n    align-self: center;\n    background-color: rgba(224, 196, 104, 0.2);\n    width: 95%;\n    text-align: center;\n    transition: height 1s;\n}\n.content-add-button{\n    text-align: start;\n    font-size: 16px;\n    margin-left: 30px;\n}\n.adddelete{\n    display: flex;\n    gap: 10px;\n}\n.content{\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n}\n.content > text{\n    cursor: pointer;\n}\n.content > div {\n    margin-left: 10px;\n}\n.top-content{\n    padding-left: 20px;\n    padding-right: 30px;\n    display: flex;\n    justify-content: space-between;\n}\n.toc-text{\n    color: black;\n}\ndiv.toc-text:hover{\n    color: grey;\n    text-decoration: line-through;\n}", "",{"version":3,"sources":["webpack://./src/library/style.css"],"names":[],"mappings":"AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;AACjB;AACA;IACI,aAAa;IACb,aAAa;IACb,yCAAyC;IACzC,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,yCAAyC;AAC7C;AACA;IACI,yCAAyC;IACzC,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,6CAA6C;IAC7C,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,wCAAwC;IACxC,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kCAAkC;IAClC,mBAAmB;IACnB,aAAa;IACb,2CAA2C;IAC3C,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,YAAY;IACZ,eAAe;IACf,2CAA2C;IAC3C,yCAAyC;AAC7C;AACA;IACI,qBAAqB;AACzB;;;AAGA;IACI,8BAA8B;IAC9B,eAAe;AACnB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,cAAc;IACd,aAAa;AACjB;AACA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,oBAAoB;IACpB,yCAAyC;IACzC,2CAA2C;IAC3C,WAAW;IACX,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,0CAA0C;IAC1C,eAAe;AACnB;AACA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;AACA,2BAA2B;AAC3B;IACI,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,0CAA0C;IAC1C,UAAU;IACV,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;IACX,6BAA6B;AACjC","sourcesContent":["@import url(https://use.typekit.net/vtc3wtu.css);\n\n/*Initial Layout*/\n.background{\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    user-select: none;\n}\n#library-container{\n    background: rgba(255, 255, 255, .4);\n    box-shadow: 16px 16px 30px grey;\n    border-radius: 50px;\n    height: 90vh;\n    width: 90vw;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n#banner{\n    margin: 16px;\n    height: 140px;\n    display: flex;\n    align-content: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n#left-banner-div{\n    font-weight: 700;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 10px;\n}\n#category-select{\n    padding: 10px;\n    display: flex;\n    background-color: rgba(255, 255, 255, .4);\n    overflow: auto;\n    flex-grow: 1;\n    align-items: center;\n    gap: 20px;\n    width: 70%;\n    border: 10px solid rgba(255, 255, 255, 0);\n}\n#return-to-dash{\n    background-color: rgba(255, 255, 255, .4);\n    padding: 10px;\n    text-align: center;\n    border-radius: 10px;\n    font-weight: 700;\n    box-shadow: 10px 10px 10px rgb(190, 190, 190);\n    align-self: center;\n    height: 40px;\n    width: 100px;\n    margin-right: 100px;\n}\n#library-background{\n    padding: 10px;\n    background-color:rgba(255, 255, 255, .4);\n    border-radius: 30px;\n    display: flex;\n    height: 1000px;\n    overflow:hidden;\n    margin: 20px;\n}\n\n#add-category{\n    font-weight: 600;\n    background:rgba(255, 255, 255, .4);\n    border-radius: 16px;\n    padding: 10px;\n    box-shadow: 6px 6px 20px rgb(163, 162, 162);\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.category{\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    height: 70%;\n    width: 300px;\n    font-size: 24px;\n    box-shadow: 6px 6px 10px rgb(190, 190, 190);\n    background-color: rgba(255, 255, 255, .6);\n}\n.deleting{\n    background-color: red;\n}\n\n\n#category-title{\n    text-shadow: 6px 6px 10px grey;\n    font-size: 36px;\n}\n#library-content{\n    margin: 16px;\n    align-self: stretch;\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n    overflow: auto;\n    padding: 16px;\n}\n.book{\n    display: flex;\n    font-size: 32px;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(255, 255, 255, .4);\n    box-shadow: 8px 8px 20px rgb(165, 165, 165);\n    width: 100%;\n    height: 300px;\n}\n.title{\n    align-self: center;\n}\n.subtitle{\n    align-self: center;\n}\n.expand-button{\n    align-self: center;\n    text-align: center;\n    width: 95%;\n    font-size: 14px;\n    background-color: rgba(224, 196, 104, 0.4);\n    cursor: pointer;\n}\n.book-buttons-div{\n    display: flex;\n    font-size: 14px;\n    justify-content: space-around;\n}\n/* Book Table of Contents */\n.booktablecontents{\n    height:auto;\n    overflow: hidden; \n    align-self: center;\n    background-color: rgba(224, 196, 104, 0.2);\n    width: 95%;\n    text-align: center;\n    transition: height 1s;\n}\n.content-add-button{\n    text-align: start;\n    font-size: 16px;\n    margin-left: 30px;\n}\n.adddelete{\n    display: flex;\n    gap: 10px;\n}\n.content{\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n}\n.content > text{\n    cursor: pointer;\n}\n.content > div {\n    margin-left: 10px;\n}\n.top-content{\n    padding-left: 20px;\n    padding-right: 30px;\n    display: flex;\n    justify-content: space-between;\n}\n.toc-text{\n    color: black;\n}\ndiv.toc-text:hover{\n    color: grey;\n    text-decoration: line-through;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dashboard/dashstyle.css":
/*!*************************************!*\
  !*** ./src/dashboard/dashstyle.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dashstyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dashstyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/dashboard/dashstyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dashstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dashstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dashstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dashstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/library/style.css":
/*!*******************************!*\
  !*** ./src/library/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/library/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dashboard/dashscript.js":
/*!*************************************!*\
  !*** ./src/dashboard/dashscript.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashstyle.css */ "./src/dashboard/dashstyle.css");


let background = document.createElement("div");
background.setAttribute('class','background');

let settingsButton = document.createElement('div');
settingsButton.setAttribute('id', 'settings-button');
settingsButton.textContent = "SETTINGS";
background.appendChild(settingsButton);

let container = document.createElement("div");
container.setAttribute('id', 'container')
background.appendChild(container);
//container.style.overflow = "scroll"; commented because it trims the radius

let welcome = document.createElement("div");
welcome.setAttribute('id', 'welcome');
welcome.textContent = "Hello, Khabera";
container.appendChild(welcome);

let timeStats = document.createElement("div");
timeStats.setAttribute('id', 'timeStats');
container.appendChild(timeStats);

    let weeklyStats = document.createElement('div');
    weeklyStats.setAttribute('id', 'weekly-stats');
    timeStats.appendChild(weeklyStats);

    function addInterface(content){
        let temp = document.createElement(content.type || 'div');
        temp.classList.add(content.class);
        temp.textContent = content.textContent;
        content["appendTo"].appendChild(temp);
        return temp;
    }
        addInterface({class: "timer", appendTo: weeklyStats, textContent: "32 HRS 29 MINS"});
        addInterface({class: "timer-description", appendTo: weeklyStats, textContent: "WEEKLY   TOTAL"});
        addInterface({class: "timer", appendTo: weeklyStats, textContent: "7 HRS 30 MINS"});
        addInterface({class: "timer-description", appendTo: weeklyStats, textContent: "WEEKLY MAX"});


    let monthlyStats = document.createElement('div');
    monthlyStats.setAttribute('id', 'monthly-stats');
    timeStats.appendChild(monthlyStats);

        addInterface({class: "timer", appendTo: monthlyStats, textContent: "129 HRS 12 MINS"});
        addInterface({class: "timer-description", appendTo: monthlyStats, textContent: "MONTHLY TOTAL"});
        addInterface({class: "timer", appendTo: monthlyStats, textContent: "35 HRS 9 MINS"});
        addInterface({class: "timer-description", appendTo: monthlyStats, textContent: "WEEK MAX"});

let linksAndToday = document.createElement("div");
linksAndToday.setAttribute('id', 'linksAndToday');
container.appendChild(linksAndToday);

    let linkBlock = document.createElement('div');
    linkBlock.setAttribute('id', 'links')
    linksAndToday.appendChild(linkBlock);

        addInterface({class: "link-title", appendTo: linkBlock, textContent: "LINK TREE"});
        let projectsButton = addInterface({class: "link-button", appendTo: linkBlock, textContent: "Project Gallery", type: 'button'});
        addInterface({class: "link-button", appendTo: linkBlock, textContent: "Calander", type: 'button'});
        let libraryButton = addInterface({class: "link-button", appendTo: linkBlock, textContent: "Readings Library", type: 'button'});
    
    let todayInterface = document.createElement('div');
    todayInterface.setAttribute('id', 'today-interface');
    linksAndToday.appendChild(todayInterface);
    
        addInterface({class: "today-title", appendTo: todayInterface, textContent: "Work Today"});
        addInterface({class: "timer", appendTo: todayInterface, textContent: "0 HRS 0 MINS 0 SECS"});
        let buttonGrid = addInterface ({class: 'today-buttons', appendTo: todayInterface})
        addInterface({class: "button", appendTo: buttonGrid, textContent: "Start", type: "button"});
        addInterface({class: "button", appendTo: buttonGrid, textContent: "Stop", type: "button"});
        addInterface({class: "button", appendTo: buttonGrid, textContent: "See Tasks", type: "button"});
        addInterface({class: "button", appendTo: buttonGrid, textContent: "???", type: "button"});
       
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({background, projectsButton, libraryButton});

/***/ }),

/***/ "./src/library/refactor.js":
/*!*********************************!*\
  !*** ./src/library/refactor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ "./src/library/script.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/library/style.css");



//STANDARD FUNCTION TO CREATE DOM ELEMENTS
//REPLACE "createDomElement" with cDM
function createDomElement(element){
    let temp = document.createElement(element.type || 'div');
    if(element.id){temp.setAttribute('id', element.id)};
    if(element.class){temp.classList.add(element.class)};
    if(element.object){temp.object = element.object};
    if(element.onclick){temp.onclick = element.onclick};
    if(element.text)temp.textContent = element.text;
    if(element.appendTo){element['appendTo'].appendChild(temp)};
    return temp;
}

//DOM MODULE CONTROLS 
const DOM = (function(){
    /*STATICLAYOUT 
      CREATES INITIAL LAYOUT OF LIBRARY PAGE
      RETURNING: ~BACKGROUND PAGE--TO WHICH EVERYTHING IS APPENDED
                 ~BOOKS CONTAINER & CATEGORIES CONTAINER
                 ~UI DIVS OCCURING ON INITIAL LAYOUT--ADD CATEGORY, REMOVE CATEGORY, RETURN TO DASH*/
    const STATICLAYOUT = (function(){
        let background = createDomElement({class: 'background'});
        let firstContainer = createDomElement({id: 'library-container', appendTo: background});
        let topBanner = createDomElement({id: 'banner', appendTo: firstContainer});
            let leftBannerDiv = createDomElement({id: 'left-banner-div', appendTo: topBanner});
                let categoryTitle = createDomElement({id: "category-title", text: "CATEGORIES", appendTo: leftBannerDiv});
                let addCategoryButton = createDomElement({id: "add-category", text: "ADD NEW CATEGORY", appendTo: leftBannerDiv});
                let deleteCategoryButton = createDomElement({id: "delete-category", text: "REMOVE CATEGORY", appendTo: leftBannerDiv});
            let categoriesDiv = createDomElement({id: "category-select", appendTo: topBanner});
            let returnToDash = createDomElement({id: "return-to-dash", appendTo: topBanner, text: "RETURN TO DASHBOARD"});
        let libraryBackground = createDomElement({id: "library-background", appendTo: firstContainer})
        let libraryContentDiv = createDomElement({id: "library-content", appendTo: libraryBackground});
            let addBookButton = createDomElement({class: 'book', appendTo: libraryContentDiv, text: "ADD BOOK"})
        return {
            background, 
            addCategoryButton, deleteCategoryButton, returnToDash, addBookButton,
            categoriesDiv, libraryContentDiv
        }
    })();
    //CATEGORY CONTAINER MODULE -- INCLUDES FUNCTIONS TO ADD A CATEGORY CARD OR REMOVE CATEGORY CARD
    const CATEGORIES = (function(){
        let categoriesDiv = STATICLAYOUT.categoriesDiv;
        function addCategoryCard(categoryObject){
            //how do I do onclick for this?
            let card = createDomElement({class: "category", appendTo: categoriesDiv, text: categoryObject.categoryname, object: categoryObject})
            let trashCan = createDomElement({class: 'trash', appendTo: card, text: 'D'})
            return{card, trashCan, categoryObject}
        }
        function removeCategoryCard(card){
            card.parentElement.removeChild(card)
        }
        //Selected Category Functionality -- Primarily for Add Book Button
        let selectedCategory;
        function setCurrentCategory(categoryDiv){selectedCategory = categoryDiv}
        function getCurrentCategoryObject(){return(selectedCategory.categoryObject)}
            //should be getting Object from UI distributor
            //let object = categoryManager.addCategory(categoryPrompt);
            //addCategoryCard(categoryPrompt, object);         
        return {
            addCategoryCard, removeCategoryCard, getCurrentCategoryObject, setCurrentCategory
        }
    })();
    //LIBRARY CONTAINER MODULES
    const LIBRARY = (function(){

        let libraryContentDiv = STATICLAYOUT.libraryContentDiv;

        function addBookCard(book){
            let bookCard = createDomElement({class: 'book', appendTo: libraryContentDiv, object: book});
            let title = createDomElement({class: 'title', appendTo: bookCard, text: book.title});
            let subtitle = createDomElement({class: 'subtitle', appendTo: bookCard, text: book.subtitle});
            let buttonsDiv = createDomElement({class: 'book-buttons-div', appendTo: bookCard});
            let deleteButton = createDomElement({class: 'delete', appendTo: buttonsDiv, text: 'DELETE'});
            let completeButton = createDomElement({class: 'complete', appendTo: buttonsDiv, text: 'COMPLETE'});
            let expandContainer = createDomElement({class: 'expand-button', appendTo: bookCard, text: '⤈⤈ TABLE OF CONTENTS ⤈⤈'});
            let tocContainer = createDomElement({class: 'booktablecontents', appendTo: bookCard});
            bookCard.toc = tocContainer
            let addTOCButton = createDomElement({class: 'content-add-button', appendTo: tocContainer, text: 'ADD'});
            addTOCButton.onclick = () => INTERFACE.addTOC(tocContainer);
            let category = CATEGORIES.getCurrentCategoryObject();

            return {
                bookCard, book, category,
                deleteButton, completeButton, expandContainer, addTOCButton,
                tocContainer
            }
        }

        function addTOC(appendTarget, contentText){
            console.log(appendTarget);
            let test = document.createElement('div')
            test.classList.add('test');
            appendTarget.appendChild(test);
            //appendTarget||tocContainer allows add button on top banner to be operable
            let fullContainer = createDomElement({class: 'content', appendTo: appendTarget})
            let container = createDomElement({class: 'top-content', appendTo: fullContainer})
            let content = createDomElement({class: 'toc-text', appendTo: container, text: contentText});
            content.completed = false;
            let adddeleteDiv = createDomElement({class: 'adddelete', appendTo: container});
            let subAdd = createDomElement({class: 'booktoc-add', appendTo: adddeleteDiv, appendTarget: fullContainer, text: 'ADD'});
            let deleteButton = createDomElement({appendTo: adddeleteDiv,class: 'booktoc-delete', text: 'DELETE'});
            appendTarget.appendChild(fullContainer);
            return{
                content, subAdd, deleteButton, fullContainer
            }
        }

        //Clears the visual book cards leaving the Add Book Card
        function clearLibrary(){
            while(libraryContentDiv.lastElementChild != STATICLAYOUT.addBookButton){
                libraryContentDiv.removeChild(libraryContentDiv.lastElementChild);
            }
        }
        //Adds book cards for Relevant category
        function populateCategory(categoryArray){
            categoryArray.forEach((book) => {
                let card = addBookCard(book)
                INTERFACE.attatchBookCardInterface(card);
            })
        }

        return{ addBookCard, addTOC, clearLibrary, populateCategory }
    })();

    return { STATICLAYOUT, CATEGORIES, LIBRARY }
})();

const INTERFACE = (function(){
    // ------- MAIN LAYOUT -------- //
    //addCategoryButton, deleteCategoryButton, returnToDash, addBookButton,

    //Add Category Button
    DOM.STATICLAYOUT.addCategoryButton.onclick = () => {
        let name = prompt('What is the name of the category you would like to add?', 'Category');
        if((name == null) || (name == '')){return}
        //Sends name to script, script returns an object
        let categoryObject = _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.addCategory(name);
        //Send object to DOM manager, returns the object with the card and delete button
        let domObject = DOM.CATEGORIES.addCategoryCard(categoryObject);
        assignCategoryCardInterface(domObject);
    }

    //Defines Catogory Card Onclick and Remove Button functionality
    const assignCategoryCardInterface = (domObject) => {
        domObject.card.onclick = () => onclickSwitchContent(domObject);
        domObject.trashCan.onclick = (event) => {
            event.cancelBubble = true;
            if(confirm("Are you sure you would like to delete this category?")){
                DOM.CATEGORIES.removeCategoryCard(domObject.card);
                //IF the currently selected card is removed, set it to transition to the next card
                _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.removeCategory(domObject.categoryObject);
            }
        }    
    }

    //Switch Library Content -- Defined Onclick During CategoryCard
    const onclickSwitchContent = (categoryDomObject) => {
        let category = categoryDomObject.categoryObject
        DOM.CATEGORIES.setCurrentCategory(categoryDomObject);
        DOM.LIBRARY.clearLibrary();
        DOM.LIBRARY.populateCategory(category.books);
    }

    //Manages Table of Contents of Book Cards
    //Defined onclick above in DOM controller (but I probaly should move that to the ADD book button in this interface controller);
    const addTOC = (appendTarget) => {
        let name = prompt("What is the name?")
        if(name == ( false||'')){return}
        let returnedContent = DOM.LIBRARY.addTOC(appendTarget, name);
        // Below attatches a book object whether it a parent or a child
        returnedContent.fullContainer.book = (appendTarget.parentElement.object||appendTarget.book);
        returnedContent.book = returnedContent.fullContainer.book;
        console.log(returnedContent.book);
        applyTOCFunctionality(returnedContent);
        let category = DOM.CATEGORIES.getCurrentCategoryObject();
        let book = returnedContent.book;
        let content = name;
        let parents = '';
        _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.updateTOC(category, book, content, parents);
        //CATEGORYMANAGER.updateTOC(category, returnedContent.book, content, 'parents')
    }
    function applyTOCFunctionality(tocDiv){
        tocDiv.subAdd.onclick = () => addTOC(tocDiv.fullContainer);
        tocDiv.deleteButton.onclick = () => tocDiv.fullContainer.remove();
        tocDiv.content.onclick = () => {
            console.log('contentclick');    
            if(tocDiv.content.completed == false){
                tocDiv.content.completed = true;
                tocDiv.content.style.text0Decoration = 'line-through';
                tocDiv.content.style.color = 'rgba(24, 190, 9, 0.5)';
            }else{
                tocDiv.content.completed = false;
                tocDiv.content.style.textDecoration = '';
                tocDiv.content.style.color = '';
            }
        }
    }
    function updateTOCJSON(category, book){
        _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.updateTOC(catergory, book, content, parents);
    }

    //Library Add Book Button
    DOM.STATICLAYOUT.addBookButton.onclick = () => {
        let category = DOM.CATEGORIES.getCurrentCategoryObject()
        let title = prompt("What is the name of the book?");
        let subtitle = prompt("Is there a subtitle?");
        let book = _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.addBook(category, {title, subtitle});
        console.log(book);
        let card = DOM.LIBRARY.addBookCard(book);
        attatchBookCardInterface(card);
    }

    //Book Card Interface
    function attatchBookCardInterface(card){
        card.deleteButton.onclick = () => removeBookCard(card);
        card.completeButton.onclick = () => completeBookCard(card);
        card.expandContainer.onclick = () => expandContainer(card.tocContainer)
    }
    function removeBookCard(card){
        card.bookCard.remove();
        console.log(card.category)
        _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.removeBook(card.category, card.book)
    }
    function completeBookCard(card){
        if(card.book.completed == false||card.book.completed == undefined){
            card.book.completed = true;
            card.bookCard.style.backgroundColor = 'green';
        }else{
            card.book.completed = false;
            card.bookCard.style.backgroundColor = '';
        }
    }
    function expandContainer(tocContainer){
        if(tocContainer.style.height == 'auto'||tocContainer.style.height == ''){
            tocContainer.style.height = '0';
        }else{
            tocContainer.style.height = 'auto';                    
        }
    }

    return{
        assignCategoryCardInterface, addTOC, attatchBookCardInterface
    }
})();

const INITIALIZEPAGE = (function(){
    //Initializes Categories
    if(_script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.categories.length>0){
        let firstCategoryObject = _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.categories[0];
        let firstCategoryDiv;
        _script_js__WEBPACK_IMPORTED_MODULE_0__.CATEGORYMANAGER.categories.forEach((categoryObject, index) => {
            let card = DOM.CATEGORIES.addCategoryCard(categoryObject);
            INTERFACE.assignCategoryCardInterface(card);
            if(index == 0){
                firstCategoryDiv = card;
            }
        });
        //Set Content to that of First Category
        console.log(firstCategoryDiv)
        DOM.CATEGORIES.setCurrentCategory(firstCategoryDiv);
        DOM.LIBRARY.populateCategory(firstCategoryObject.books);
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({DOM});

/***/ }),

/***/ "./src/library/script.js":
/*!*******************************!*\
  !*** ./src/library/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "libraryStorage": () => (/* binding */ libraryStorage),
/* harmony export */   "myStorage": () => (/* binding */ myStorage),
/* harmony export */   "testCategoryArray": () => (/* binding */ testCategoryArray),
/* harmony export */   "testBookArray": () => (/* binding */ testBookArray),
/* harmony export */   "CATEGORYMANAGER": () => (/* binding */ CATEGORYMANAGER)
/* harmony export */ });
//Going to run everything in here with IIFE, could be split?
const myStorage = window.localStorage;

const bookLibrary = (function(){
    books = new Array();
})

const libraryStorage = (function(){
    function Book(title, category, subtitle){
        this.title = title;
        this.subtitle = subtitle;
        this.progress = 0;
        this.toc = [];
        this.category = category;
    }
    Book.prototype = {
        changeTitle: function(title, subtitle){
            this.title = title;
            this.subtitle = subtitle;
            }, 
        updateProgress: function(progress){
            this.progress = progress;
        }
    }
    function addBook(title, category){
        let temp = new Book(title, category);
        storageJS.push(temp);
        return temp;
    }
    //looks through array, but if I just use the object itself, I can use the protype function
    function changeTitle(oldTitle, newTitle){
        let target = storageJS.find((book) => book.title == oldTitle)
        target.title = newTitle;
    }

    return{
        addBook,
        changeTitle
    }
})();
// const jsonStorage = (function(){
//     if(localStorage.length>0){
//         myStorage = JSON.parse(localStorage);
//     }else{
//         const myStorage = new Array();
//     }
//     function addBookToStorage(book){
//         myStorage.push(book);
//         localStorage = JSON.stringify(myStorage);
//     }
//     return addBookToStorage;
// })();

const CATEGORYMANAGER = (function(){
    function Category(categoryname){
        this.categoryname = categoryname,
        this.books = []
        //I KNOW THIS IS REALLY FUCKING LAZY, but fuck it, for now...
    }
    function updateJSON(){
        myStorage.categories = JSON.stringify(categories);
    }
    function addBook(category, book){
        category.books.push(book)
        book.categoryname = category.categoryname;
        book.toc = [];
        updateJSON();
        return book;
    }
    function updateTOC(category, book, content, parents){
        console.log(category.books[book]);
        console.log(category);
        console.log(book);
        console.log(content);
        updateJSON();
    }
    function removeBook(bookCategory, book){
        console.log(bookCategory.books);
        let index = bookCategory.books.findIndex((item) => item == book);
        bookCategory.books.splice(index, 1);
        updateJSON();
    }
    console.log(typeof myStorage.categories === 'undefined')
    let categories = [];
    //possible naming issue with category being both the local name and class name?
    categories.forEach((category) => console.log(category.protoype));
    if(typeof myStorage.categories !== 'undefined'){
        categories = JSON.parse(myStorage.categories);
        //categories.forEach((category) => Object.setPrototypeOf(category, Category))
    }
    console.log(categories);
    function addCategory(categoryname){
        let temp = new Category(categoryname);
        categories.push(temp);
        myStorage.categories = JSON.stringify(categories);  
        return temp;
    }
    function removeCategory(categoryObject){
        let index = categories.findIndex((item) => item.categoryname == categoryObject.categoryname);
        categories.splice(index, 1);
        myStorage.categories = JSON.stringify(categories);
    }
    //I THINK THERE MIGHT BE A PROBLEM WITH THE "CATEGORIES" EXPORT, IN THE WHEN ONE IS ADDED IT WONT BE PRESENT IN CATEGORIES, UNTIL THE WEBPAGE IS REFRESHED, AND WHAT IS PRESENT IN JSON IS EXPORTED AS "categories"
    return {addCategory, categories, removeCategory, addBook, removeBook, updateTOC}
})();
// const thalamus = (function(){

// })();
let testCategoryArray = ["Current Reads", "Example 1", "Example 2", "Example 3", "Example 4"]
let testBookArray = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8", "Book 9", "Book 10"]





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_dashscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashscript.js */ "./src/dashboard/dashscript.js");
/* harmony import */ var _library_refactor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/refactor.js */ "./src/library/refactor.js");



document.body.style.margin = 0;
console.log(_library_refactor_js__WEBPACK_IMPORTED_MODULE_1__["default"])

document.body.appendChild(_library_refactor_js__WEBPACK_IMPORTED_MODULE_1__["default"].DOM.STATICLAYOUT.background);
_library_refactor_js__WEBPACK_IMPORTED_MODULE_1__["default"].DOM.STATICLAYOUT.returnToDash.onclick = () => {
    document.body.removeChild(_library_refactor_js__WEBPACK_IMPORTED_MODULE_1__["default"].DOM.STATICLAYOUT.background);
    document.body.appendChild(_dashboard_dashscript_js__WEBPACK_IMPORTED_MODULE_0__["default"].background)
}

_dashboard_dashscript_js__WEBPACK_IMPORTED_MODULE_0__["default"].libraryButton.onclick = () => {
    document.body.removeChild(_dashboard_dashscript_js__WEBPACK_IMPORTED_MODULE_0__["default"].background);
    document.body.appendChild(_library_refactor_js__WEBPACK_IMPORTED_MODULE_1__["default"].DOM.STATICLAYOUT.background)
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNKOztBQUU5QztBQUNBLFlBQVksNERBQVM7O0FBRXJCLDBCQUEwQix3RkFBcUM7QUFDL0Qsa0dBQStDO0FBQy9DLDhCQUE4Qix3RkFBcUM7QUFDbkUsOEJBQThCLDJFQUFvQjtBQUNsRDs7QUFFQSxzRkFBK0I7QUFDL0IsOEJBQThCLDJFQUFvQjtBQUNsRCw4QkFBOEIsd0ZBQXFDO0FBQ25FLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyLy4vc3JjL2Rhc2hib2FyZC9kYXNoc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvLi9zcmMvbGlicmFyeS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvLi9zcmMvZGFzaGJvYXJkL2Rhc2hzdHlsZS5jc3M/MWM0OSIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyLy4vc3JjL2xpYnJhcnkvc3R5bGUuY3NzPzBlODMiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtdHJhY2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyLy4vc3JjL2Rhc2hib2FyZC9kYXNoc2NyaXB0LmpzIiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvLi9zcmMvbGlicmFyeS9yZWZhY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyLy4vc3JjL2xpYnJhcnkvc2NyaXB0LmpzIiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9ncmVzcy10cmFja2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvZ3Jlc3MtdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2dyZXNzLXRyYWNrZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYmFja2dyb3VuZHtcXG4gICAgZm9udC1mYW1pbHk6IGV4cHJlc3N3YXksIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNGRkUxOEQsICNGRkI4QjgpO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3NldHRpbmdzLWJ1dHRvbntcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IGdyZXk7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbiNjb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgICBib3gtc2hhZG93OiAxNnB4IDE2cHggMzBweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDc1dmg7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbiN3ZWxjb21le1xcbiAgICBmb250LXNpemU6IDcycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDE2cHggZ3JleTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC00cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbiN0aW1lU3RhdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweFxcbn1cXG4jbGlua3NBbmRUb2RheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4jd2Vla2x5LXN0YXRzLCAjbW9udGhseS1zdGF0cyxcXG4jbGlua3MsICN0b2RheS1pbnRlcmZhY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDE2cHggZ3JleTtcXG59XFxuLnRpbWVyLWRlc2NyaXB0aW9ue1xcbiAgICBjb2xvcjogYmx1ZTtcXG59XFxuLnRvZGF5LWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Rhc2hib2FyZC9kYXNoc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYjtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhY2tncm91bmR7XFxuICAgIGZvbnQtZmFtaWx5OiBleHByZXNzd2F5LCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjRkZFMThELCAjRkZCOEI4KTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNzZXR0aW5ncy1idXR0b257XFxuICAgIG9wYWNpdHk6IC43O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCBncmV5O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4jY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgYm94LXNoYWRvdzogMTZweCAxNnB4IDMwcHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgaGVpZ2h0OiA3NXZoO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4jd2VsY29tZXtcXG4gICAgZm9udC1zaXplOiA3MnB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAxNnB4IGdyZXk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtNHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4jdGltZVN0YXRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHhcXG59XFxuI2xpbmtzQW5kVG9kYXl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuI3dlZWtseS1zdGF0cywgI21vbnRobHktc3RhdHMsXFxuI2xpbmtzLCAjdG9kYXktaW50ZXJmYWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAxNnB4IGdyZXk7XFxufVxcbi50aW1lci1kZXNjcmlwdGlvbntcXG4gICAgY29sb3I6IGJsdWU7XFxufVxcbi50b2RheS1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VzZS50eXBla2l0Lm5ldC92dGMzd3R1LmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qSW5pdGlhbCBMYXlvdXQqL1xcbi5iYWNrZ3JvdW5ke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuI2xpYnJhcnktY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgYm94LXNoYWRvdzogMTZweCAxNnB4IDMwcHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4jYmFubmVye1xcbiAgICBtYXJnaW46IDE2cHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcbiNsZWZ0LWJhbm5lci1kaXZ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbiNjYXRlZ29yeS1zZWxlY3R7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG4jcmV0dXJuLXRvLWRhc2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG59XFxuI2xpYnJhcnktYmFja2dyb3VuZHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAwcHg7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4jYWRkLWNhdGVnb3J5e1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggcmdiKDE2MywgMTYyLCAxNjIpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5e1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4IHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XFxufVxcbi5kZWxldGluZ3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4jY2F0ZWdvcnktdGl0bGV7XFxuICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDEwcHggZ3JleTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG4jbGlicmFyeS1jb250ZW50e1xcbiAgICBtYXJnaW46IDE2cHg7XFxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuLmJvb2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDIwcHggcmdiKDE2NSwgMTY1LCAxNjUpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG59XFxuLnRpdGxle1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zdWJ0aXRsZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uZXhwYW5kLWJ1dHRvbntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDE5NiwgMTA0LCAwLjQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib29rLWJ1dHRvbnMtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4vKiBCb29rIFRhYmxlIG9mIENvbnRlbnRzICovXFxuLmJvb2t0YWJsZWNvbnRlbnRze1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDE5NiwgMTA0LCAwLjIpO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcztcXG59XFxuLmNvbnRlbnQtYWRkLWJ1dHRvbntcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcbi5hZGRkZWxldGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNvbnRlbnQgPiB0ZXh0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250ZW50ID4gZGl2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi50b3AtY29udGVudHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2MtdGV4dHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYudG9jLXRleHQ6aG92ZXJ7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpYnJhcnkvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQSwyQkFBMkI7QUFDM0I7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdXNlLnR5cGVraXQubmV0L3Z0YzN3dHUuY3NzKTtcXG5cXG4vKkluaXRpYWwgTGF5b3V0Ki9cXG4uYmFja2dyb3VuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbiNsaWJyYXJ5LWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7XFxuICAgIGJveC1zaGFkb3c6IDE2cHggMTZweCAzMHB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuI2Jhbm5lcntcXG4gICAgbWFyZ2luOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG4jbGVmdC1iYW5uZXItZGl2e1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jY2F0ZWdvcnktc2VsZWN0e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuI3JldHVybi10by1kYXNoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcbiNsaWJyYXJ5LWJhY2tncm91bmR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwMHB4O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuI2FkZC1jYXRlZ29yeXtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAyMHB4IHJnYigxNjMsIDE2MiwgMTYyKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeXtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggMTBweCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xcbn1cXG4uZGVsZXRpbmd7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuI2NhdGVnb3J5LXRpdGxle1xcbiAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAxMHB4IGdyZXk7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuI2xpYnJhcnktY29udGVudHtcXG4gICAgbWFyZ2luOiAxNnB4O1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxufVxcbi5ib29re1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAyMHB4IHJnYigxNjUsIDE2NSwgMTY1KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxufVxcbi50aXRsZXtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uc3VidGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmV4cGFuZC1idXR0b257XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAxOTYsIDEwNCwgMC40KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYm9vay1idXR0b25zLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLyogQm9vayBUYWJsZSBvZiBDb250ZW50cyAqL1xcbi5ib29rdGFibGVjb250ZW50c3tcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAxOTYsIDEwNCwgMC4yKTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXM7XFxufVxcbi5jb250ZW50LWFkZC1idXR0b257XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4uYWRkZGVsZXRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5jb250ZW50ID4gdGV4dHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29udGVudCA+IGRpdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4udG9wLWNvbnRlbnR7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG9jLXRleHR7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuZGl2LnRvYy10ZXh0OmhvdmVye1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFzaHN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFzaHN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2Rhc2hzdHlsZS5jc3NcIjtcblxubGV0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYmFja2dyb3VuZCcpO1xuXG5sZXQgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNldHRpbmdzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0dGluZ3MtYnV0dG9uJyk7XG5zZXR0aW5nc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiU0VUVElOR1NcIjtcbmJhY2tncm91bmQuYXBwZW5kQ2hpbGQoc2V0dGluZ3NCdXR0b24pO1xuXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpXG5iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4vL2NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7IGNvbW1lbnRlZCBiZWNhdXNlIGl0IHRyaW1zIHRoZSByYWRpdXNcblxubGV0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xud2VsY29tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlbGNvbWUnKTtcbndlbGNvbWUudGV4dENvbnRlbnQgPSBcIkhlbGxvLCBLaGFiZXJhXCI7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cbmxldCB0aW1lU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudGltZVN0YXRzLnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZVN0YXRzJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVN0YXRzKTtcblxuICAgIGxldCB3ZWVrbHlTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtseVN0YXRzLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2Vla2x5LXN0YXRzJyk7XG4gICAgdGltZVN0YXRzLmFwcGVuZENoaWxkKHdlZWtseVN0YXRzKTtcblxuICAgIGZ1bmN0aW9uIGFkZEludGVyZmFjZShjb250ZW50KXtcbiAgICAgICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbnRlbnQudHlwZSB8fCAnZGl2Jyk7XG4gICAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZChjb250ZW50LmNsYXNzKTtcbiAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGNvbnRlbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnRlbnRbXCJhcHBlbmRUb1wiXS5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcInRpbWVyXCIsIGFwcGVuZFRvOiB3ZWVrbHlTdGF0cywgdGV4dENvbnRlbnQ6IFwiMzIgSFJTIDI5IE1JTlNcIn0pO1xuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcInRpbWVyLWRlc2NyaXB0aW9uXCIsIGFwcGVuZFRvOiB3ZWVrbHlTdGF0cywgdGV4dENvbnRlbnQ6IFwiV0VFS0xZICAgVE9UQUxcIn0pO1xuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcInRpbWVyXCIsIGFwcGVuZFRvOiB3ZWVrbHlTdGF0cywgdGV4dENvbnRlbnQ6IFwiNyBIUlMgMzAgTUlOU1wifSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwidGltZXItZGVzY3JpcHRpb25cIiwgYXBwZW5kVG86IHdlZWtseVN0YXRzLCB0ZXh0Q29udGVudDogXCJXRUVLTFkgTUFYXCJ9KTtcblxuXG4gICAgbGV0IG1vbnRobHlTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vbnRobHlTdGF0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vbnRobHktc3RhdHMnKTtcbiAgICB0aW1lU3RhdHMuYXBwZW5kQ2hpbGQobW9udGhseVN0YXRzKTtcblxuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcInRpbWVyXCIsIGFwcGVuZFRvOiBtb250aGx5U3RhdHMsIHRleHRDb250ZW50OiBcIjEyOSBIUlMgMTIgTUlOU1wifSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwidGltZXItZGVzY3JpcHRpb25cIiwgYXBwZW5kVG86IG1vbnRobHlTdGF0cywgdGV4dENvbnRlbnQ6IFwiTU9OVEhMWSBUT1RBTFwifSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwidGltZXJcIiwgYXBwZW5kVG86IG1vbnRobHlTdGF0cywgdGV4dENvbnRlbnQ6IFwiMzUgSFJTIDkgTUlOU1wifSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwidGltZXItZGVzY3JpcHRpb25cIiwgYXBwZW5kVG86IG1vbnRobHlTdGF0cywgdGV4dENvbnRlbnQ6IFwiV0VFSyBNQVhcIn0pO1xuXG5sZXQgbGlua3NBbmRUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5saW5rc0FuZFRvZGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlua3NBbmRUb2RheScpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtzQW5kVG9kYXkpO1xuXG4gICAgbGV0IGxpbmtCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmtCbG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpbmtzJylcbiAgICBsaW5rc0FuZFRvZGF5LmFwcGVuZENoaWxkKGxpbmtCbG9jayk7XG5cbiAgICAgICAgYWRkSW50ZXJmYWNlKHtjbGFzczogXCJsaW5rLXRpdGxlXCIsIGFwcGVuZFRvOiBsaW5rQmxvY2ssIHRleHRDb250ZW50OiBcIkxJTksgVFJFRVwifSk7XG4gICAgICAgIGxldCBwcm9qZWN0c0J1dHRvbiA9IGFkZEludGVyZmFjZSh7Y2xhc3M6IFwibGluay1idXR0b25cIiwgYXBwZW5kVG86IGxpbmtCbG9jaywgdGV4dENvbnRlbnQ6IFwiUHJvamVjdCBHYWxsZXJ5XCIsIHR5cGU6ICdidXR0b24nfSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwibGluay1idXR0b25cIiwgYXBwZW5kVG86IGxpbmtCbG9jaywgdGV4dENvbnRlbnQ6IFwiQ2FsYW5kZXJcIiwgdHlwZTogJ2J1dHRvbid9KTtcbiAgICAgICAgbGV0IGxpYnJhcnlCdXR0b24gPSBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcImxpbmstYnV0dG9uXCIsIGFwcGVuZFRvOiBsaW5rQmxvY2ssIHRleHRDb250ZW50OiBcIlJlYWRpbmdzIExpYnJhcnlcIiwgdHlwZTogJ2J1dHRvbid9KTtcbiAgICBcbiAgICBsZXQgdG9kYXlJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheUludGVyZmFjZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5LWludGVyZmFjZScpO1xuICAgIGxpbmtzQW5kVG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJbnRlcmZhY2UpO1xuICAgIFxuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcInRvZGF5LXRpdGxlXCIsIGFwcGVuZFRvOiB0b2RheUludGVyZmFjZSwgdGV4dENvbnRlbnQ6IFwiV29yayBUb2RheVwifSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwidGltZXJcIiwgYXBwZW5kVG86IHRvZGF5SW50ZXJmYWNlLCB0ZXh0Q29udGVudDogXCIwIEhSUyAwIE1JTlMgMCBTRUNTXCJ9KTtcbiAgICAgICAgbGV0IGJ1dHRvbkdyaWQgPSBhZGRJbnRlcmZhY2UgKHtjbGFzczogJ3RvZGF5LWJ1dHRvbnMnLCBhcHBlbmRUbzogdG9kYXlJbnRlcmZhY2V9KVxuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcImJ1dHRvblwiLCBhcHBlbmRUbzogYnV0dG9uR3JpZCwgdGV4dENvbnRlbnQ6IFwiU3RhcnRcIiwgdHlwZTogXCJidXR0b25cIn0pO1xuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcImJ1dHRvblwiLCBhcHBlbmRUbzogYnV0dG9uR3JpZCwgdGV4dENvbnRlbnQ6IFwiU3RvcFwiLCB0eXBlOiBcImJ1dHRvblwifSk7XG4gICAgICAgIGFkZEludGVyZmFjZSh7Y2xhc3M6IFwiYnV0dG9uXCIsIGFwcGVuZFRvOiBidXR0b25HcmlkLCB0ZXh0Q29udGVudDogXCJTZWUgVGFza3NcIiwgdHlwZTogXCJidXR0b25cIn0pO1xuICAgICAgICBhZGRJbnRlcmZhY2Uoe2NsYXNzOiBcImJ1dHRvblwiLCBhcHBlbmRUbzogYnV0dG9uR3JpZCwgdGV4dENvbnRlbnQ6IFwiPz8/XCIsIHR5cGU6IFwiYnV0dG9uXCJ9KTtcbiAgICAgICBcbiAgICBleHBvcnQgZGVmYXVsdCB7YmFja2dyb3VuZCwgcHJvamVjdHNCdXR0b24sIGxpYnJhcnlCdXR0b259IiwiaW1wb3J0IHsgdGVzdENhdGVnb3J5QXJyYXksIHRlc3RCb29rQXJyYXksIENBVEVHT1JZTUFOQUdFUiB9IGZyb20gXCIuL3NjcmlwdC5qc1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5cbi8vU1RBTkRBUkQgRlVOQ1RJT04gVE8gQ1JFQVRFIERPTSBFTEVNRU5UU1xuLy9SRVBMQUNFIFwiY3JlYXRlRG9tRWxlbWVudFwiIHdpdGggY0RNXG5mdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KGVsZW1lbnQpe1xuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnR5cGUgfHwgJ2RpdicpO1xuICAgIGlmKGVsZW1lbnQuaWQpe3RlbXAuc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnQuaWQpfTtcbiAgICBpZihlbGVtZW50LmNsYXNzKXt0ZW1wLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jbGFzcyl9O1xuICAgIGlmKGVsZW1lbnQub2JqZWN0KXt0ZW1wLm9iamVjdCA9IGVsZW1lbnQub2JqZWN0fTtcbiAgICBpZihlbGVtZW50Lm9uY2xpY2spe3RlbXAub25jbGljayA9IGVsZW1lbnQub25jbGlja307XG4gICAgaWYoZWxlbWVudC50ZXh0KXRlbXAudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHQ7XG4gICAgaWYoZWxlbWVudC5hcHBlbmRUbyl7ZWxlbWVudFsnYXBwZW5kVG8nXS5hcHBlbmRDaGlsZCh0ZW1wKX07XG4gICAgcmV0dXJuIHRlbXA7XG59XG5cbi8vRE9NIE1PRFVMRSBDT05UUk9MUyBcbmNvbnN0IERPTSA9IChmdW5jdGlvbigpe1xuICAgIC8qU1RBVElDTEFZT1VUIFxuICAgICAgQ1JFQVRFUyBJTklUSUFMIExBWU9VVCBPRiBMSUJSQVJZIFBBR0VcbiAgICAgIFJFVFVSTklORzogfkJBQ0tHUk9VTkQgUEFHRS0tVE8gV0hJQ0ggRVZFUllUSElORyBJUyBBUFBFTkRFRFxuICAgICAgICAgICAgICAgICB+Qk9PS1MgQ09OVEFJTkVSICYgQ0FURUdPUklFUyBDT05UQUlORVJcbiAgICAgICAgICAgICAgICAgflVJIERJVlMgT0NDVVJJTkcgT04gSU5JVElBTCBMQVlPVVQtLUFERCBDQVRFR09SWSwgUkVNT1ZFIENBVEVHT1JZLCBSRVRVUk4gVE8gREFTSCovXG4gICAgY29uc3QgU1RBVElDTEFZT1VUID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gY3JlYXRlRG9tRWxlbWVudCh7Y2xhc3M6ICdiYWNrZ3JvdW5kJ30pO1xuICAgICAgICBsZXQgZmlyc3RDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KHtpZDogJ2xpYnJhcnktY29udGFpbmVyJywgYXBwZW5kVG86IGJhY2tncm91bmR9KTtcbiAgICAgICAgbGV0IHRvcEJhbm5lciA9IGNyZWF0ZURvbUVsZW1lbnQoe2lkOiAnYmFubmVyJywgYXBwZW5kVG86IGZpcnN0Q29udGFpbmVyfSk7XG4gICAgICAgICAgICBsZXQgbGVmdEJhbm5lckRpdiA9IGNyZWF0ZURvbUVsZW1lbnQoe2lkOiAnbGVmdC1iYW5uZXItZGl2JywgYXBwZW5kVG86IHRvcEJhbm5lcn0pO1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeVRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCh7aWQ6IFwiY2F0ZWdvcnktdGl0bGVcIiwgdGV4dDogXCJDQVRFR09SSUVTXCIsIGFwcGVuZFRvOiBsZWZ0QmFubmVyRGl2fSk7XG4gICAgICAgICAgICAgICAgbGV0IGFkZENhdGVnb3J5QnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCh7aWQ6IFwiYWRkLWNhdGVnb3J5XCIsIHRleHQ6IFwiQUREIE5FVyBDQVRFR09SWVwiLCBhcHBlbmRUbzogbGVmdEJhbm5lckRpdn0pO1xuICAgICAgICAgICAgICAgIGxldCBkZWxldGVDYXRlZ29yeUJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoe2lkOiBcImRlbGV0ZS1jYXRlZ29yeVwiLCB0ZXh0OiBcIlJFTU9WRSBDQVRFR09SWVwiLCBhcHBlbmRUbzogbGVmdEJhbm5lckRpdn0pO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3JpZXNEaXYgPSBjcmVhdGVEb21FbGVtZW50KHtpZDogXCJjYXRlZ29yeS1zZWxlY3RcIiwgYXBwZW5kVG86IHRvcEJhbm5lcn0pO1xuICAgICAgICAgICAgbGV0IHJldHVyblRvRGFzaCA9IGNyZWF0ZURvbUVsZW1lbnQoe2lkOiBcInJldHVybi10by1kYXNoXCIsIGFwcGVuZFRvOiB0b3BCYW5uZXIsIHRleHQ6IFwiUkVUVVJOIFRPIERBU0hCT0FSRFwifSk7XG4gICAgICAgIGxldCBsaWJyYXJ5QmFja2dyb3VuZCA9IGNyZWF0ZURvbUVsZW1lbnQoe2lkOiBcImxpYnJhcnktYmFja2dyb3VuZFwiLCBhcHBlbmRUbzogZmlyc3RDb250YWluZXJ9KVxuICAgICAgICBsZXQgbGlicmFyeUNvbnRlbnREaXYgPSBjcmVhdGVEb21FbGVtZW50KHtpZDogXCJsaWJyYXJ5LWNvbnRlbnRcIiwgYXBwZW5kVG86IGxpYnJhcnlCYWNrZ3JvdW5kfSk7XG4gICAgICAgICAgICBsZXQgYWRkQm9va0J1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnYm9vaycsIGFwcGVuZFRvOiBsaWJyYXJ5Q29udGVudERpdiwgdGV4dDogXCJBREQgQk9PS1wifSlcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQsIFxuICAgICAgICAgICAgYWRkQ2F0ZWdvcnlCdXR0b24sIGRlbGV0ZUNhdGVnb3J5QnV0dG9uLCByZXR1cm5Ub0Rhc2gsIGFkZEJvb2tCdXR0b24sXG4gICAgICAgICAgICBjYXRlZ29yaWVzRGl2LCBsaWJyYXJ5Q29udGVudERpdlxuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvL0NBVEVHT1JZIENPTlRBSU5FUiBNT0RVTEUgLS0gSU5DTFVERVMgRlVOQ1RJT05TIFRPIEFERCBBIENBVEVHT1JZIENBUkQgT1IgUkVNT1ZFIENBVEVHT1JZIENBUkRcbiAgICBjb25zdCBDQVRFR09SSUVTID0gKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBjYXRlZ29yaWVzRGl2ID0gU1RBVElDTEFZT1VULmNhdGVnb3JpZXNEaXY7XG4gICAgICAgIGZ1bmN0aW9uIGFkZENhdGVnb3J5Q2FyZChjYXRlZ29yeU9iamVjdCl7XG4gICAgICAgICAgICAvL2hvdyBkbyBJIGRvIG9uY2xpY2sgZm9yIHRoaXM/XG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiBcImNhdGVnb3J5XCIsIGFwcGVuZFRvOiBjYXRlZ29yaWVzRGl2LCB0ZXh0OiBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeW5hbWUsIG9iamVjdDogY2F0ZWdvcnlPYmplY3R9KVxuICAgICAgICAgICAgbGV0IHRyYXNoQ2FuID0gY3JlYXRlRG9tRWxlbWVudCh7Y2xhc3M6ICd0cmFzaCcsIGFwcGVuZFRvOiBjYXJkLCB0ZXh0OiAnRCd9KVxuICAgICAgICAgICAgcmV0dXJue2NhcmQsIHRyYXNoQ2FuLCBjYXRlZ29yeU9iamVjdH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVDYXRlZ29yeUNhcmQoY2FyZCl7XG4gICAgICAgICAgICBjYXJkLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2FyZClcbiAgICAgICAgfVxuICAgICAgICAvL1NlbGVjdGVkIENhdGVnb3J5IEZ1bmN0aW9uYWxpdHkgLS0gUHJpbWFyaWx5IGZvciBBZGQgQm9vayBCdXR0b25cbiAgICAgICAgbGV0IHNlbGVjdGVkQ2F0ZWdvcnk7XG4gICAgICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRDYXRlZ29yeShjYXRlZ29yeURpdil7c2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5RGl2fVxuICAgICAgICBmdW5jdGlvbiBnZXRDdXJyZW50Q2F0ZWdvcnlPYmplY3QoKXtyZXR1cm4oc2VsZWN0ZWRDYXRlZ29yeS5jYXRlZ29yeU9iamVjdCl9XG4gICAgICAgICAgICAvL3Nob3VsZCBiZSBnZXR0aW5nIE9iamVjdCBmcm9tIFVJIGRpc3RyaWJ1dG9yXG4gICAgICAgICAgICAvL2xldCBvYmplY3QgPSBjYXRlZ29yeU1hbmFnZXIuYWRkQ2F0ZWdvcnkoY2F0ZWdvcnlQcm9tcHQpO1xuICAgICAgICAgICAgLy9hZGRDYXRlZ29yeUNhcmQoY2F0ZWdvcnlQcm9tcHQsIG9iamVjdCk7ICAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRDYXRlZ29yeUNhcmQsIHJlbW92ZUNhdGVnb3J5Q2FyZCwgZ2V0Q3VycmVudENhdGVnb3J5T2JqZWN0LCBzZXRDdXJyZW50Q2F0ZWdvcnlcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgLy9MSUJSQVJZIENPTlRBSU5FUiBNT0RVTEVTXG4gICAgY29uc3QgTElCUkFSWSA9IChmdW5jdGlvbigpe1xuXG4gICAgICAgIGxldCBsaWJyYXJ5Q29udGVudERpdiA9IFNUQVRJQ0xBWU9VVC5saWJyYXJ5Q29udGVudERpdjtcblxuICAgICAgICBmdW5jdGlvbiBhZGRCb29rQ2FyZChib29rKXtcbiAgICAgICAgICAgIGxldCBib29rQ2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnYm9vaycsIGFwcGVuZFRvOiBsaWJyYXJ5Q29udGVudERpdiwgb2JqZWN0OiBib29rfSk7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KHtjbGFzczogJ3RpdGxlJywgYXBwZW5kVG86IGJvb2tDYXJkLCB0ZXh0OiBib29rLnRpdGxlfSk7XG4gICAgICAgICAgICBsZXQgc3VidGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KHtjbGFzczogJ3N1YnRpdGxlJywgYXBwZW5kVG86IGJvb2tDYXJkLCB0ZXh0OiBib29rLnN1YnRpdGxlfSk7XG4gICAgICAgICAgICBsZXQgYnV0dG9uc0RpdiA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnYm9vay1idXR0b25zLWRpdicsIGFwcGVuZFRvOiBib29rQ2FyZH0pO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnZGVsZXRlJywgYXBwZW5kVG86IGJ1dHRvbnNEaXYsIHRleHQ6ICdERUxFVEUnfSk7XG4gICAgICAgICAgICBsZXQgY29tcGxldGVCdXR0b24gPSBjcmVhdGVEb21FbGVtZW50KHtjbGFzczogJ2NvbXBsZXRlJywgYXBwZW5kVG86IGJ1dHRvbnNEaXYsIHRleHQ6ICdDT01QTEVURSd9KTtcbiAgICAgICAgICAgIGxldCBleHBhbmRDb250YWluZXIgPSBjcmVhdGVEb21FbGVtZW50KHtjbGFzczogJ2V4cGFuZC1idXR0b24nLCBhcHBlbmRUbzogYm9va0NhcmQsIHRleHQ6ICfipIjipIggVEFCTEUgT0YgQ09OVEVOVFMg4qSI4qSIJ30pO1xuICAgICAgICAgICAgbGV0IHRvY0NvbnRhaW5lciA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnYm9va3RhYmxlY29udGVudHMnLCBhcHBlbmRUbzogYm9va0NhcmR9KTtcbiAgICAgICAgICAgIGJvb2tDYXJkLnRvYyA9IHRvY0NvbnRhaW5lclxuICAgICAgICAgICAgbGV0IGFkZFRPQ0J1dHRvbiA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnY29udGVudC1hZGQtYnV0dG9uJywgYXBwZW5kVG86IHRvY0NvbnRhaW5lciwgdGV4dDogJ0FERCd9KTtcbiAgICAgICAgICAgIGFkZFRPQ0J1dHRvbi5vbmNsaWNrID0gKCkgPT4gSU5URVJGQUNFLmFkZFRPQyh0b2NDb250YWluZXIpO1xuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gQ0FURUdPUklFUy5nZXRDdXJyZW50Q2F0ZWdvcnlPYmplY3QoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBib29rQ2FyZCwgYm9vaywgY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLCBjb21wbGV0ZUJ1dHRvbiwgZXhwYW5kQ29udGFpbmVyLCBhZGRUT0NCdXR0b24sXG4gICAgICAgICAgICAgICAgdG9jQ29udGFpbmVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRUT0MoYXBwZW5kVGFyZ2V0LCBjb250ZW50VGV4dCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcHBlbmRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgdGVzdC5jbGFzc0xpc3QuYWRkKCd0ZXN0Jyk7XG4gICAgICAgICAgICBhcHBlbmRUYXJnZXQuYXBwZW5kQ2hpbGQodGVzdCk7XG4gICAgICAgICAgICAvL2FwcGVuZFRhcmdldHx8dG9jQ29udGFpbmVyIGFsbG93cyBhZGQgYnV0dG9uIG9uIHRvcCBiYW5uZXIgdG8gYmUgb3BlcmFibGVcbiAgICAgICAgICAgIGxldCBmdWxsQ29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCh7Y2xhc3M6ICdjb250ZW50JywgYXBwZW5kVG86IGFwcGVuZFRhcmdldH0pXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gY3JlYXRlRG9tRWxlbWVudCh7Y2xhc3M6ICd0b3AtY29udGVudCcsIGFwcGVuZFRvOiBmdWxsQ29udGFpbmVyfSlcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gY3JlYXRlRG9tRWxlbWVudCh7Y2xhc3M6ICd0b2MtdGV4dCcsIGFwcGVuZFRvOiBjb250YWluZXIsIHRleHQ6IGNvbnRlbnRUZXh0fSk7XG4gICAgICAgICAgICBjb250ZW50LmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGFkZGRlbGV0ZURpdiA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnYWRkZGVsZXRlJywgYXBwZW5kVG86IGNvbnRhaW5lcn0pO1xuICAgICAgICAgICAgbGV0IHN1YkFkZCA9IGNyZWF0ZURvbUVsZW1lbnQoe2NsYXNzOiAnYm9va3RvYy1hZGQnLCBhcHBlbmRUbzogYWRkZGVsZXRlRGl2LCBhcHBlbmRUYXJnZXQ6IGZ1bGxDb250YWluZXIsIHRleHQ6ICdBREQnfSk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCh7YXBwZW5kVG86IGFkZGRlbGV0ZURpdixjbGFzczogJ2Jvb2t0b2MtZGVsZXRlJywgdGV4dDogJ0RFTEVURSd9KTtcbiAgICAgICAgICAgIGFwcGVuZFRhcmdldC5hcHBlbmRDaGlsZChmdWxsQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBjb250ZW50LCBzdWJBZGQsIGRlbGV0ZUJ1dHRvbiwgZnVsbENvbnRhaW5lclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9DbGVhcnMgdGhlIHZpc3VhbCBib29rIGNhcmRzIGxlYXZpbmcgdGhlIEFkZCBCb29rIENhcmRcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJMaWJyYXJ5KCl7XG4gICAgICAgICAgICB3aGlsZShsaWJyYXJ5Q29udGVudERpdi5sYXN0RWxlbWVudENoaWxkICE9IFNUQVRJQ0xBWU9VVC5hZGRCb29rQnV0dG9uKXtcbiAgICAgICAgICAgICAgICBsaWJyYXJ5Q29udGVudERpdi5yZW1vdmVDaGlsZChsaWJyYXJ5Q29udGVudERpdi5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0FkZHMgYm9vayBjYXJkcyBmb3IgUmVsZXZhbnQgY2F0ZWdvcnlcbiAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVDYXRlZ29yeShjYXRlZ29yeUFycmF5KXtcbiAgICAgICAgICAgIGNhdGVnb3J5QXJyYXkuZm9yRWFjaCgoYm9vaykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkID0gYWRkQm9va0NhcmQoYm9vaylcbiAgICAgICAgICAgICAgICBJTlRFUkZBQ0UuYXR0YXRjaEJvb2tDYXJkSW50ZXJmYWNlKGNhcmQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybnsgYWRkQm9va0NhcmQsIGFkZFRPQywgY2xlYXJMaWJyYXJ5LCBwb3B1bGF0ZUNhdGVnb3J5IH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgU1RBVElDTEFZT1VULCBDQVRFR09SSUVTLCBMSUJSQVJZIH1cbn0pKCk7XG5cbmNvbnN0IElOVEVSRkFDRSA9IChmdW5jdGlvbigpe1xuICAgIC8vIC0tLS0tLS0gTUFJTiBMQVlPVVQgLS0tLS0tLS0gLy9cbiAgICAvL2FkZENhdGVnb3J5QnV0dG9uLCBkZWxldGVDYXRlZ29yeUJ1dHRvbiwgcmV0dXJuVG9EYXNoLCBhZGRCb29rQnV0dG9uLFxuXG4gICAgLy9BZGQgQ2F0ZWdvcnkgQnV0dG9uXG4gICAgRE9NLlNUQVRJQ0xBWU9VVC5hZGRDYXRlZ29yeUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IHByb21wdCgnV2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgY2F0ZWdvcnkgeW91IHdvdWxkIGxpa2UgdG8gYWRkPycsICdDYXRlZ29yeScpO1xuICAgICAgICBpZigobmFtZSA9PSBudWxsKSB8fCAobmFtZSA9PSAnJykpe3JldHVybn1cbiAgICAgICAgLy9TZW5kcyBuYW1lIHRvIHNjcmlwdCwgc2NyaXB0IHJldHVybnMgYW4gb2JqZWN0XG4gICAgICAgIGxldCBjYXRlZ29yeU9iamVjdCA9IENBVEVHT1JZTUFOQUdFUi5hZGRDYXRlZ29yeShuYW1lKTtcbiAgICAgICAgLy9TZW5kIG9iamVjdCB0byBET00gbWFuYWdlciwgcmV0dXJucyB0aGUgb2JqZWN0IHdpdGggdGhlIGNhcmQgYW5kIGRlbGV0ZSBidXR0b25cbiAgICAgICAgbGV0IGRvbU9iamVjdCA9IERPTS5DQVRFR09SSUVTLmFkZENhdGVnb3J5Q2FyZChjYXRlZ29yeU9iamVjdCk7XG4gICAgICAgIGFzc2lnbkNhdGVnb3J5Q2FyZEludGVyZmFjZShkb21PYmplY3QpO1xuICAgIH1cblxuICAgIC8vRGVmaW5lcyBDYXRvZ29yeSBDYXJkIE9uY2xpY2sgYW5kIFJlbW92ZSBCdXR0b24gZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IGFzc2lnbkNhdGVnb3J5Q2FyZEludGVyZmFjZSA9IChkb21PYmplY3QpID0+IHtcbiAgICAgICAgZG9tT2JqZWN0LmNhcmQub25jbGljayA9ICgpID0+IG9uY2xpY2tTd2l0Y2hDb250ZW50KGRvbU9iamVjdCk7XG4gICAgICAgIGRvbU9iamVjdC50cmFzaENhbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgdGhpcyBjYXRlZ29yeT9cIikpe1xuICAgICAgICAgICAgICAgIERPTS5DQVRFR09SSUVTLnJlbW92ZUNhdGVnb3J5Q2FyZChkb21PYmplY3QuY2FyZCk7XG4gICAgICAgICAgICAgICAgLy9JRiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNhcmQgaXMgcmVtb3ZlZCwgc2V0IGl0IHRvIHRyYW5zaXRpb24gdG8gdGhlIG5leHQgY2FyZFxuICAgICAgICAgICAgICAgIENBVEVHT1JZTUFOQUdFUi5yZW1vdmVDYXRlZ29yeShkb21PYmplY3QuY2F0ZWdvcnlPYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIC8vU3dpdGNoIExpYnJhcnkgQ29udGVudCAtLSBEZWZpbmVkIE9uY2xpY2sgRHVyaW5nIENhdGVnb3J5Q2FyZFxuICAgIGNvbnN0IG9uY2xpY2tTd2l0Y2hDb250ZW50ID0gKGNhdGVnb3J5RG9tT2JqZWN0KSA9PiB7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGNhdGVnb3J5RG9tT2JqZWN0LmNhdGVnb3J5T2JqZWN0XG4gICAgICAgIERPTS5DQVRFR09SSUVTLnNldEN1cnJlbnRDYXRlZ29yeShjYXRlZ29yeURvbU9iamVjdCk7XG4gICAgICAgIERPTS5MSUJSQVJZLmNsZWFyTGlicmFyeSgpO1xuICAgICAgICBET00uTElCUkFSWS5wb3B1bGF0ZUNhdGVnb3J5KGNhdGVnb3J5LmJvb2tzKTtcbiAgICB9XG5cbiAgICAvL01hbmFnZXMgVGFibGUgb2YgQ29udGVudHMgb2YgQm9vayBDYXJkc1xuICAgIC8vRGVmaW5lZCBvbmNsaWNrIGFib3ZlIGluIERPTSBjb250cm9sbGVyIChidXQgSSBwcm9iYWx5IHNob3VsZCBtb3ZlIHRoYXQgdG8gdGhlIEFERCBib29rIGJ1dHRvbiBpbiB0aGlzIGludGVyZmFjZSBjb250cm9sbGVyKTtcbiAgICBjb25zdCBhZGRUT0MgPSAoYXBwZW5kVGFyZ2V0KSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gcHJvbXB0KFwiV2hhdCBpcyB0aGUgbmFtZT9cIilcbiAgICAgICAgaWYobmFtZSA9PSAobnVsbHx8JycpKXtyZXR1cm59XG4gICAgICAgIGxldCByZXR1cm5lZENvbnRlbnQgPSBET00uTElCUkFSWS5hZGRUT0MoYXBwZW5kVGFyZ2V0LCBuYW1lKTtcbiAgICAgICAgLy8gQmVsb3cgYXR0YXRjaGVzIGEgYm9vayBvYmplY3Qgd2hldGhlciBpdCBhIHBhcmVudCBvciBhIGNoaWxkXG4gICAgICAgIHJldHVybmVkQ29udGVudC5mdWxsQ29udGFpbmVyLmJvb2sgPSAoYXBwZW5kVGFyZ2V0LnBhcmVudEVsZW1lbnQub2JqZWN0fHxhcHBlbmRUYXJnZXQuYm9vayk7XG4gICAgICAgIHJldHVybmVkQ29udGVudC5ib29rID0gcmV0dXJuZWRDb250ZW50LmZ1bGxDb250YWluZXIuYm9vaztcbiAgICAgICAgY29uc29sZS5sb2cocmV0dXJuZWRDb250ZW50LmJvb2spO1xuICAgICAgICBhcHBseVRPQ0Z1bmN0aW9uYWxpdHkocmV0dXJuZWRDb250ZW50KTtcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gRE9NLkNBVEVHT1JJRVMuZ2V0Q3VycmVudENhdGVnb3J5T2JqZWN0KCk7XG4gICAgICAgIGxldCBib29rID0gcmV0dXJuZWRDb250ZW50LmJvb2s7XG4gICAgICAgIGxldCBjb250ZW50ID0gbmFtZTtcbiAgICAgICAgbGV0IHBhcmVudHMgPSAnJztcbiAgICAgICAgQ0FURUdPUllNQU5BR0VSLnVwZGF0ZVRPQyhjYXRlZ29yeSwgYm9vaywgY29udGVudCwgcGFyZW50cyk7XG4gICAgICAgIC8vQ0FURUdPUllNQU5BR0VSLnVwZGF0ZVRPQyhjYXRlZ29yeSwgcmV0dXJuZWRDb250ZW50LmJvb2ssIGNvbnRlbnQsICdwYXJlbnRzJylcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlUT0NGdW5jdGlvbmFsaXR5KHRvY0Rpdil7XG4gICAgICAgIHRvY0Rpdi5zdWJBZGQub25jbGljayA9ICgpID0+IGFkZFRPQyh0b2NEaXYuZnVsbENvbnRhaW5lcik7XG4gICAgICAgIHRvY0Rpdi5kZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHRvY0Rpdi5mdWxsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB0b2NEaXYuY29udGVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlbnRjbGljaycpOyAgICBcbiAgICAgICAgICAgIGlmKHRvY0Rpdi5jb250ZW50LmNvbXBsZXRlZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgdG9jRGl2LmNvbnRlbnQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0b2NEaXYuY29udGVudC5zdHlsZS50ZXh0MERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgICAgICAgICB0b2NEaXYuY29udGVudC5zdHlsZS5jb2xvciA9ICdyZ2JhKDI0LCAxOTAsIDksIDAuNSknO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdG9jRGl2LmNvbnRlbnQuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9jRGl2LmNvbnRlbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcbiAgICAgICAgICAgICAgICB0b2NEaXYuY29udGVudC5zdHlsZS5jb2xvciA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRPQ0pTT04oY2F0ZWdvcnksIGJvb2spe1xuICAgICAgICBDQVRFR09SWU1BTkFHRVIudXBkYXRlVE9DKGNhdGVyZ29yeSwgYm9vaywgY29udGVudCwgcGFyZW50cyk7XG4gICAgfVxuXG4gICAgLy9MaWJyYXJ5IEFkZCBCb29rIEJ1dHRvblxuICAgIERPTS5TVEFUSUNMQVlPVVQuYWRkQm9va0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBET00uQ0FURUdPUklFUy5nZXRDdXJyZW50Q2F0ZWdvcnlPYmplY3QoKVxuICAgICAgICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJXaGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBib29rP1wiKTtcbiAgICAgICAgbGV0IHN1YnRpdGxlID0gcHJvbXB0KFwiSXMgdGhlcmUgYSBzdWJ0aXRsZT9cIik7XG4gICAgICAgIGxldCBib29rID0gQ0FURUdPUllNQU5BR0VSLmFkZEJvb2soY2F0ZWdvcnksIHt0aXRsZSwgc3VidGl0bGV9KTtcbiAgICAgICAgY29uc29sZS5sb2coYm9vayk7XG4gICAgICAgIGxldCBjYXJkID0gRE9NLkxJQlJBUlkuYWRkQm9va0NhcmQoYm9vayk7XG4gICAgICAgIGF0dGF0Y2hCb29rQ2FyZEludGVyZmFjZShjYXJkKTtcbiAgICB9XG5cbiAgICAvL0Jvb2sgQ2FyZCBJbnRlcmZhY2VcbiAgICBmdW5jdGlvbiBhdHRhdGNoQm9va0NhcmRJbnRlcmZhY2UoY2FyZCl7XG4gICAgICAgIGNhcmQuZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiByZW1vdmVCb29rQ2FyZChjYXJkKTtcbiAgICAgICAgY2FyZC5jb21wbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gY29tcGxldGVCb29rQ2FyZChjYXJkKTtcbiAgICAgICAgY2FyZC5leHBhbmRDb250YWluZXIub25jbGljayA9ICgpID0+IGV4cGFuZENvbnRhaW5lcihjYXJkLnRvY0NvbnRhaW5lcilcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQm9va0NhcmQoY2FyZCl7XG4gICAgICAgIGNhcmQuYm9va0NhcmQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmQuY2F0ZWdvcnkpXG4gICAgICAgIENBVEVHT1JZTUFOQUdFUi5yZW1vdmVCb29rKGNhcmQuY2F0ZWdvcnksIGNhcmQuYm9vaylcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGxldGVCb29rQ2FyZChjYXJkKXtcbiAgICAgICAgaWYoY2FyZC5ib29rLmNvbXBsZXRlZCA9PSBmYWxzZXx8Y2FyZC5ib29rLmNvbXBsZXRlZCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY2FyZC5ib29rLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICBjYXJkLmJvb2tDYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2FyZC5ib29rLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FyZC5ib29rQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBleHBhbmRDb250YWluZXIodG9jQ29udGFpbmVyKXtcbiAgICAgICAgaWYodG9jQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9PSAnYXV0byd8fHRvY0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPT0gJycpe1xuICAgICAgICAgICAgdG9jQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0b2NDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGFzc2lnbkNhdGVnb3J5Q2FyZEludGVyZmFjZSwgYWRkVE9DLCBhdHRhdGNoQm9va0NhcmRJbnRlcmZhY2VcbiAgICB9XG59KSgpO1xuXG5jb25zdCBJTklUSUFMSVpFUEFHRSA9IChmdW5jdGlvbigpe1xuICAgIC8vSW5pdGlhbGl6ZXMgQ2F0ZWdvcmllc1xuICAgIGlmKENBVEVHT1JZTUFOQUdFUi5jYXRlZ29yaWVzLmxlbmd0aD4wKXtcbiAgICAgICAgbGV0IGZpcnN0Q2F0ZWdvcnlPYmplY3QgPSBDQVRFR09SWU1BTkFHRVIuY2F0ZWdvcmllc1swXTtcbiAgICAgICAgbGV0IGZpcnN0Q2F0ZWdvcnlEaXY7XG4gICAgICAgIENBVEVHT1JZTUFOQUdFUi5jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5T2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhcmQgPSBET00uQ0FURUdPUklFUy5hZGRDYXRlZ29yeUNhcmQoY2F0ZWdvcnlPYmplY3QpO1xuICAgICAgICAgICAgSU5URVJGQUNFLmFzc2lnbkNhdGVnb3J5Q2FyZEludGVyZmFjZShjYXJkKTtcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDApe1xuICAgICAgICAgICAgICAgIGZpcnN0Q2F0ZWdvcnlEaXYgPSBjYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy9TZXQgQ29udGVudCB0byB0aGF0IG9mIEZpcnN0IENhdGVnb3J5XG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0Q2F0ZWdvcnlEaXYpXG4gICAgICAgIERPTS5DQVRFR09SSUVTLnNldEN1cnJlbnRDYXRlZ29yeShmaXJzdENhdGVnb3J5RGl2KTtcbiAgICAgICAgRE9NLkxJQlJBUlkucG9wdWxhdGVDYXRlZ29yeShmaXJzdENhdGVnb3J5T2JqZWN0LmJvb2tzKTtcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHtET019OyIsIi8vR29pbmcgdG8gcnVuIGV2ZXJ5dGhpbmcgaW4gaGVyZSB3aXRoIElJRkUsIGNvdWxkIGJlIHNwbGl0P1xuY29uc3QgbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuY29uc3QgYm9va0xpYnJhcnkgPSAoZnVuY3Rpb24oKXtcbiAgICBib29rcyA9IG5ldyBBcnJheSgpO1xufSlcblxuY29uc3QgbGlicmFyeVN0b3JhZ2UgPSAoZnVuY3Rpb24oKXtcbiAgICBmdW5jdGlvbiBCb29rKHRpdGxlLCBjYXRlZ29yeSwgc3VidGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc3VidGl0bGUgPSBzdWJ0aXRsZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgIHRoaXMudG9jID0gW107XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB9XG4gICAgQm9vay5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNoYW5nZVRpdGxlOiBmdW5jdGlvbih0aXRsZSwgc3VidGl0bGUpe1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgdGhpcy5zdWJ0aXRsZSA9IHN1YnRpdGxlO1xuICAgICAgICAgICAgfSwgXG4gICAgICAgIHVwZGF0ZVByb2dyZXNzOiBmdW5jdGlvbihwcm9ncmVzcyl7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQm9vayh0aXRsZSwgY2F0ZWdvcnkpe1xuICAgICAgICBsZXQgdGVtcCA9IG5ldyBCb29rKHRpdGxlLCBjYXRlZ29yeSk7XG4gICAgICAgIHN0b3JhZ2VKUy5wdXNoKHRlbXApO1xuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG4gICAgLy9sb29rcyB0aHJvdWdoIGFycmF5LCBidXQgaWYgSSBqdXN0IHVzZSB0aGUgb2JqZWN0IGl0c2VsZiwgSSBjYW4gdXNlIHRoZSBwcm90eXBlIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gY2hhbmdlVGl0bGUob2xkVGl0bGUsIG5ld1RpdGxlKXtcbiAgICAgICAgbGV0IHRhcmdldCA9IHN0b3JhZ2VKUy5maW5kKChib29rKSA9PiBib29rLnRpdGxlID09IG9sZFRpdGxlKVxuICAgICAgICB0YXJnZXQudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGFkZEJvb2ssXG4gICAgICAgIGNoYW5nZVRpdGxlXG4gICAgfVxufSkoKTtcbi8vIGNvbnN0IGpzb25TdG9yYWdlID0gKGZ1bmN0aW9uKCl7XG4vLyAgICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aD4wKXtcbi8vICAgICAgICAgbXlTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UpO1xuLy8gICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zdCBteVN0b3JhZ2UgPSBuZXcgQXJyYXkoKTtcbi8vICAgICB9XG4vLyAgICAgZnVuY3Rpb24gYWRkQm9va1RvU3RvcmFnZShib29rKXtcbi8vICAgICAgICAgbXlTdG9yYWdlLnB1c2goYm9vayk7XG4vLyAgICAgICAgIGxvY2FsU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KG15U3RvcmFnZSk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBhZGRCb29rVG9TdG9yYWdlO1xuLy8gfSkoKTtcblxuY29uc3QgQ0FURUdPUllNQU5BR0VSID0gKGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gQ2F0ZWdvcnkoY2F0ZWdvcnluYW1lKXtcbiAgICAgICAgdGhpcy5jYXRlZ29yeW5hbWUgPSBjYXRlZ29yeW5hbWUsXG4gICAgICAgIHRoaXMuYm9va3MgPSBbXVxuICAgICAgICAvL0kgS05PVyBUSElTIElTIFJFQUxMWSBGVUNLSU5HIExBWlksIGJ1dCBmdWNrIGl0LCBmb3Igbm93Li4uXG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUpTT04oKXtcbiAgICAgICAgbXlTdG9yYWdlLmNhdGVnb3JpZXMgPSBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQm9vayhjYXRlZ29yeSwgYm9vayl7XG4gICAgICAgIGNhdGVnb3J5LmJvb2tzLnB1c2goYm9vaylcbiAgICAgICAgYm9vay5jYXRlZ29yeW5hbWUgPSBjYXRlZ29yeS5jYXRlZ29yeW5hbWU7XG4gICAgICAgIGJvb2sudG9jID0gW107XG4gICAgICAgIHVwZGF0ZUpTT04oKTtcbiAgICAgICAgcmV0dXJuIGJvb2s7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRPQyhjYXRlZ29yeSwgYm9vaywgY29udGVudCwgcGFyZW50cyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5LmJvb2tzW2Jvb2tdKTtcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xuICAgICAgICBjb25zb2xlLmxvZyhib29rKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIHVwZGF0ZUpTT04oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQm9vayhib29rQ2F0ZWdvcnksIGJvb2spe1xuICAgICAgICBjb25zb2xlLmxvZyhib29rQ2F0ZWdvcnkuYm9va3MpO1xuICAgICAgICBsZXQgaW5kZXggPSBib29rQ2F0ZWdvcnkuYm9va3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09IGJvb2spO1xuICAgICAgICBib29rQ2F0ZWdvcnkuYm9va3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlSlNPTigpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgbXlTdG9yYWdlLmNhdGVnb3JpZXMgPT09ICd1bmRlZmluZWQnKVxuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG4gICAgLy9wb3NzaWJsZSBuYW1pbmcgaXNzdWUgd2l0aCBjYXRlZ29yeSBiZWluZyBib3RoIHRoZSBsb2NhbCBuYW1lIGFuZCBjbGFzcyBuYW1lP1xuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IGNvbnNvbGUubG9nKGNhdGVnb3J5LnByb3RveXBlKSk7XG4gICAgaWYodHlwZW9mIG15U3RvcmFnZS5jYXRlZ29yaWVzICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKG15U3RvcmFnZS5jYXRlZ29yaWVzKTtcbiAgICAgICAgLy9jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2F0ZWdvcnksIENhdGVnb3J5KSlcbiAgICB9XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gICAgZnVuY3Rpb24gYWRkQ2F0ZWdvcnkoY2F0ZWdvcnluYW1lKXtcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgQ2F0ZWdvcnkoY2F0ZWdvcnluYW1lKTtcbiAgICAgICAgY2F0ZWdvcmllcy5wdXNoKHRlbXApO1xuICAgICAgICBteVN0b3JhZ2UuY2F0ZWdvcmllcyA9IEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpOyAgXG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVDYXRlZ29yeShjYXRlZ29yeU9iamVjdCl7XG4gICAgICAgIGxldCBpbmRleCA9IGNhdGVnb3JpZXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5bmFtZSA9PSBjYXRlZ29yeU9iamVjdC5jYXRlZ29yeW5hbWUpO1xuICAgICAgICBjYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIG15U3RvcmFnZS5jYXRlZ29yaWVzID0gSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcyk7XG4gICAgfVxuICAgIC8vSSBUSElOSyBUSEVSRSBNSUdIVCBCRSBBIFBST0JMRU0gV0lUSCBUSEUgXCJDQVRFR09SSUVTXCIgRVhQT1JULCBJTiBUSEUgV0hFTiBPTkUgSVMgQURERUQgSVQgV09OVCBCRSBQUkVTRU5UIElOIENBVEVHT1JJRVMsIFVOVElMIFRIRSBXRUJQQUdFIElTIFJFRlJFU0hFRCwgQU5EIFdIQVQgSVMgUFJFU0VOVCBJTiBKU09OIElTIEVYUE9SVEVEIEFTIFwiY2F0ZWdvcmllc1wiXG4gICAgcmV0dXJuIHthZGRDYXRlZ29yeSwgY2F0ZWdvcmllcywgcmVtb3ZlQ2F0ZWdvcnksIGFkZEJvb2ssIHJlbW92ZUJvb2ssIHVwZGF0ZVRPQ31cbn0pKCk7XG4vLyBjb25zdCB0aGFsYW11cyA9IChmdW5jdGlvbigpe1xuXG4vLyB9KSgpO1xubGV0IHRlc3RDYXRlZ29yeUFycmF5ID0gW1wiQ3VycmVudCBSZWFkc1wiLCBcIkV4YW1wbGUgMVwiLCBcIkV4YW1wbGUgMlwiLCBcIkV4YW1wbGUgM1wiLCBcIkV4YW1wbGUgNFwiXVxubGV0IHRlc3RCb29rQXJyYXkgPSBbXCJCb29rIDFcIiwgXCJCb29rIDJcIiwgXCJCb29rIDNcIiwgXCJCb29rIDRcIiwgXCJCb29rIDVcIiwgXCJCb29rIDZcIiwgXCJCb29rIDdcIiwgXCJCb29rIDhcIiwgXCJCb29rIDlcIiwgXCJCb29rIDEwXCJdXG5leHBvcnQge2xpYnJhcnlTdG9yYWdlLCBteVN0b3JhZ2UsIHRlc3RDYXRlZ29yeUFycmF5LCB0ZXN0Qm9va0FycmF5LCBDQVRFR09SWU1BTkFHRVJ9XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hzY3JpcHQuanNcIjtcbmltcG9ydCBsaWJyYXJ5VUkgZnJvbSBcIi4vbGlicmFyeS9yZWZhY3Rvci5qc1wiO1xuXG5kb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9IDA7XG5jb25zb2xlLmxvZyhsaWJyYXJ5VUkpXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGlicmFyeVVJLkRPTS5TVEFUSUNMQVlPVVQuYmFja2dyb3VuZCk7XG5saWJyYXJ5VUkuRE9NLlNUQVRJQ0xBWU9VVC5yZXR1cm5Ub0Rhc2gub25jbGljayA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpYnJhcnlVSS5ET00uU1RBVElDTEFZT1VULmJhY2tncm91bmQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGFzaGJvYXJkLmJhY2tncm91bmQpXG59XG5cbmRhc2hib2FyZC5saWJyYXJ5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkYXNoYm9hcmQuYmFja2dyb3VuZCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaWJyYXJ5VUkuRE9NLlNUQVRJQ0xBWU9VVC5iYWNrZ3JvdW5kKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==