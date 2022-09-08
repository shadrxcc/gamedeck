/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gamesAction\": () => (/* binding */ gamesAction),\n/* harmony export */   \"showActionGames\": () => (/* binding */ showActionGames)\n/* harmony export */ });\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\nvar gamesAction = function gamesAction() {\n  fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f&genres=4').then(function (response) {\n    response.json().then(function (data) {\n      console.log(data.results);\n      showActionGames(data.results);\n    });\n  })[\"catch\"](function (error) {\n    console.log('Fetch Error:', error);\n  });\n};\nvar showActionGames = function showActionGames(data) {\n  var cont = document.getElementById('category2');\n  var ul = document.createElement(\"div\");\n  ul.classList.add('row', 'mx-auto');\n\n  var _loop = function _loop(i) {\n    var game = data[i];\n    var li = document.createElement(\"div\");\n    li.classList.add('col-md-3', 'py-3');\n    var row = \"<div>\\n            <div class=\\\"card id='\".concat(game.id, \" rounded border-0 w-100\\\">\\n        <img src=\\\"\").concat(game.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n        <div class=\\\"card-body bg\\\">\\n          <h5 class=\\\"card-title\\\">\").concat(game.name, \"</h5>\\n\\n          \\n        </div>\\n        </div>\\n        </div>\");\n    var overlay = document.getElementById('overlay');\n    var down = document.getElementById('category2');\n    li.innerHTML = row;\n\n    li.onclick = function () {\n      (0,_details__WEBPACK_IMPORTED_MODULE_0__.getDetails)(game.id);\n      overlay.style.display = 'block';\n      down.style.display = 'none';\n    };\n\n    ul.appendChild(li);\n  };\n\n  for (var i = 0; i < data.length; i++) {\n    _loop(i);\n  }\n\n  ;\n  cont.appendChild(ul);\n};\n\n//# sourceURL=webpack://gamedeck/./src/action.js?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\nvar counter = function counter(item) {\n  return item.length;\n};\n\n//# sourceURL=webpack://gamedeck/./src/counter.js?");

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameDetails\": () => (/* binding */ gameDetails),\n/* harmony export */   \"getDetails\": () => (/* binding */ getDetails)\n/* harmony export */ });\nvar getDetails = function getDetails(gameID) {\n  if (gameID) {\n    fetch(\"https://api.rawg.io/api/games/\".concat(gameID, \"?key=6e3446bcac6d4b9b9e33e75472a09c4f\")).then(function (response) {\n      response.json().then(function (data) {\n        console.log([data]);\n        gameDetails([data]);\n      });\n    })[\"catch\"](function (error) {\n      console.log('Fetch Error:', error);\n    });\n  }\n};\nvar gameDetails = function gameDetails(data) {\n  var more = document.getElementById('info');\n\n  for (var i = 0; i < data.length; i++) {\n    var game = data[i];\n    var rows = \"\\n          \\n\\n            <div class=\\\"card bg mx-lg-5 mb-3 mx-4\\\"\\\">\\n             \\n  <img src=\\\"\".concat(game.background_image, \"\\\" class=\\\"card-img\\\" alt=\\\"...\\\">\\n  <div class=\\\"card-body bg\\\">\\n    <h5 class=\\\"card-title\\\">\").concat(game.name, \"</h5>\\n    <p class=\\\"card-text\\\">\").concat(game.description, \"</p>\\n  </div>\\n  <ul class=\\\"list-group list-group-flush\\\">\\n    <li class=\\\"list-group-item text-white bg\\\">Genres: \").concat(game.genres[0].name, \", \").concat(game.genres[1].name, \"</li>\\n    <li class=\\\"list-group-item text-white bg\\\">Platforms: \").concat(game.platforms[0].platform.name, \", \").concat(game.platforms[1].platform.name, \", \").concat(game.platforms[2].platform.name, \", \").concat(game.platforms[3].platform.name, \"</li>\\n    <li class=\\\"list-group-item text-white bg\\\">Publishers: \").concat(game.publishers[0].name, \"</li>\\n  </ul>\\n  <div class=\\\"card-body bg\\\">\\n    <a href=\\\"#\\\" class=\\\"card-link\\\">Card link</a>\\n    <a href=\\\"#\\\" class=\\\"card-link\\\">Another link</a>\\n  </div>\\n</div>   \\n      \");\n    more.innerHTML += rows;\n  }\n\n  ;\n};\n\n//# sourceURL=webpack://gamedeck/./src/details.js?");

/***/ }),

/***/ "./src/games.js":
/*!**********************!*\
  !*** ./src/games.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayGames\": () => (/* binding */ displayGames),\n/* harmony export */   \"getGames\": () => (/* binding */ getGames)\n/* harmony export */ });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./src/counter.js\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\n\nvar getGames = function getGames() {\n  fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f').then(function (response) {\n    response.json().then(function (data) {\n      console.log(data.results);\n      displayGames(data.results);\n    });\n  })[\"catch\"](function (error) {\n    console.log('Fetch Error:', error);\n  });\n};\nvar displayGames = function displayGames(data) {\n  var cont = document.getElementById('category');\n  var ul = document.createElement(\"div\");\n  ul.classList.add('row', 'mx-auto');\n\n  var _loop = function _loop(i) {\n    var game = data[i];\n    var li = document.createElement(\"div\");\n    li.classList.add('col-md-3', 'py-3');\n    var row = \"<div>\\n            <div class=\\\"card id='\".concat(game.id, \" rounded border-0 w-100\\\">\\n        <img src=\\\"\").concat(game.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n        <div class=\\\"card-body bg\\\">\\n          <h5 class=\\\"card-title\\\">\").concat(game.name, \"</h5>\\n\\n          \\n        </div>\\n        </div>\\n        </div>\");\n    var overlay = document.getElementById('overlay');\n    var down = document.getElementById('category');\n    li.innerHTML = row;\n\n    li.onclick = function () {\n      (0,_details__WEBPACK_IMPORTED_MODULE_1__.getDetails)(game.id);\n      overlay.style.display = 'block';\n      down.style.display = 'none';\n    };\n\n    ul.appendChild(li);\n  };\n\n  for (var i = 0; i < data.length; i++) {\n    _loop(i);\n  }\n\n  ;\n  cont.appendChild(ul);\n};\n/* eslint-enable import/no-cycle, consistent-return */\n\n//# sourceURL=webpack://gamedeck/./src/games.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./games */ \"./src/games.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* harmony import */ var _racing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./racing */ \"./src/racing.js\");\n/* harmony import */ var _sports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sports */ \"./src/sports.js\");\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\n\n\n\n\n\n(0,_games__WEBPACK_IMPORTED_MODULE_1__.getGames)();\nvar saction = document.getElementById('gaction');\nvar actiongames = document.getElementById('category2');\nvar tgames = document.querySelector('.actgames');\nvar wrapper = document.getElementById('category');\nvar racingbtn = document.getElementById('racing');\nvar racinggames = document.getElementById('category3');\nvar sportsbtn = document.getElementById('sports');\nvar sportgames = document.getElementById('category4');\nvar homebtn = document.getElementById('home');\nhomebtn.addEventListener('click', function () {\n  wrapper.style.display = 'inline-flex';\n  racinggames.style.display = 'none';\n  sportgames.style.display = 'none';\n  actiongames.style.display = 'none';\n  (0,_games__WEBPACK_IMPORTED_MODULE_1__.getGames)();\n});\nsaction.addEventListener('click', function () {\n  wrapper.style.display = 'none';\n  actiongames.style.display = 'inline-flex';\n  (0,_action__WEBPACK_IMPORTED_MODULE_2__.gamesAction)();\n});\nracingbtn.addEventListener('click', function () {\n  wrapper.style.display = 'none';\n  actiongames.style.display = 'none';\n  racinggames.style.display = 'inline-flex';\n  sportgames.style.display = 'none';\n  (0,_racing__WEBPACK_IMPORTED_MODULE_3__.racingGames)();\n});\nsportsbtn.addEventListener('click', function () {\n  wrapper.style.display = 'none';\n  actiongames.style.display = 'none';\n  racinggames.style.display = 'none';\n  sportgames.style.display = 'inline-flex';\n  (0,_sports__WEBPACK_IMPORTED_MODULE_4__.sportGames)();\n});\nvar close = document.getElementById('closeUp');\nvar overlay = document.getElementById('overlay');\nclose.addEventListener('click', function () {\n  overlay.style.display = 'none';\n  location.reload();\n});\n\n//# sourceURL=webpack://gamedeck/./src/index.js?");

/***/ }),

/***/ "./src/racing.js":
/*!***********************!*\
  !*** ./src/racing.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"racingGames\": () => (/* binding */ racingGames),\n/* harmony export */   \"showRacingGames\": () => (/* binding */ showRacingGames)\n/* harmony export */ });\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\nvar racingGames = function racingGames() {\n  fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f&genres=1').then(function (response) {\n    response.json().then(function (data) {\n      console.log(data.results);\n      showRacingGames(data.results);\n    });\n  })[\"catch\"](function (error) {\n    console.log('Fetch Error:', error);\n  });\n};\nvar showRacingGames = function showRacingGames(data) {\n  var cont = document.getElementById('category3');\n  var ul = document.createElement(\"div\");\n  ul.classList.add('row', 'mx-auto');\n\n  var _loop = function _loop(i) {\n    var game = data[i];\n    var li = document.createElement(\"div\");\n    li.classList.add('col-md-3', 'py-3');\n    var row = \"<div>\\n            <div class=\\\"card id='\".concat(game.id, \" rounded border-0 w-100\\\">\\n        <img src=\\\"\").concat(game.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n        <div class=\\\"card-body bg\\\">\\n          <h5 class=\\\"card-title\\\">\").concat(game.name, \"</h5>\\n\\n          \\n        </div>\\n        </div>\\n        </div>\");\n    var overlay = document.getElementById('overlay');\n    var down = document.getElementById('category3');\n    li.innerHTML = row;\n\n    li.onclick = function () {\n      (0,_details__WEBPACK_IMPORTED_MODULE_0__.getDetails)(game.id);\n      overlay.style.display = 'block';\n      down.style.display = 'none';\n    };\n\n    ul.appendChild(li);\n  };\n\n  for (var i = 0; i < data.length; i++) {\n    _loop(i);\n  }\n\n  ;\n  cont.appendChild(ul);\n};\n\n//# sourceURL=webpack://gamedeck/./src/racing.js?");

/***/ }),

/***/ "./src/sports.js":
/*!***********************!*\
  !*** ./src/sports.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSportGames\": () => (/* binding */ showSportGames),\n/* harmony export */   \"sportGames\": () => (/* binding */ sportGames)\n/* harmony export */ });\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n\nvar sportGames = function sportGames() {\n  fetch('https://api.rawg.io/api/games?key=6e3446bcac6d4b9b9e33e75472a09c4f&genres=15').then(function (response) {\n    response.json().then(function (data) {\n      console.log(data.results);\n      showSportGames(data.results);\n    });\n  })[\"catch\"](function (error) {\n    console.log('Fetch Error:', error);\n  });\n};\nvar showSportGames = function showSportGames(data) {\n  var cont = document.getElementById('category4');\n  var ul = document.createElement(\"div\");\n  ul.classList.add('row', 'mx-auto');\n\n  var _loop = function _loop(i) {\n    var game = data[i];\n    var li = document.createElement(\"div\");\n    li.classList.add('col-md-3', 'py-3');\n    var row = \"<div>\\n            <div class=\\\"card id='\".concat(game.id, \" rounded border-0 w-100\\\">\\n        <img src=\\\"\").concat(game.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n        <div class=\\\"card-body bg\\\">\\n          <h5 class=\\\"card-title\\\">\").concat(game.name, \"</h5>\\n\\n          \\n        </div>\\n        </div>\\n        </div>\");\n    var overlay = document.getElementById('overlay');\n    var down = document.getElementById('category4');\n    li.innerHTML = row;\n\n    li.onclick = function () {\n      (0,_details__WEBPACK_IMPORTED_MODULE_0__.getDetails)(game.id);\n      overlay.style.display = 'block';\n      down.style.display = 'none';\n    };\n\n    ul.appendChild(li);\n  };\n\n  for (var i = 0; i < data.length; i++) {\n    _loop(i);\n  }\n\n  ;\n  cont.appendChild(ul);\n};\n\n//# sourceURL=webpack://gamedeck/./src/sports.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #0b0c0c;\\n  font-family: \\\"General Sans\\\", sans-serif;\\n  color: whitesmoke;\\n}\\n\\n.bg {\\n  background-color: #16191f;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.nav {\\n  display: flex;\\n  list-style: none;\\n}\\n\\na {\\n  color: whitesmoke;\\n  text-decoration: none;\\n}\\n\\na:hover {\\n  color: purple;\\n}\\n\\n.list {\\n  margin-right: 20px;\\n}\\n\\n.card {\\n  box-shadow: 0 4px 8px 0 rgba(222, 219, 223, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  transition: 0.5s ease-in-out;\\n}\\n\\n.card-img-top {\\n  height: 150px;\\n}\\n\\n.card-img {\\n  height: 30vh;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 200ms ease-in-out;\\n  border: 1px solid black;\\n  border-radius: 10px;\\n  z-index: 10;\\n  background-color: white;\\n  width: 500px;\\n  max-width: 80%;\\n}\\n\\n.modal.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n\\n.overlay {\\n  position: absolute;\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  z-index: 2;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gamedeck/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://gamedeck/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gamedeck/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gamedeck/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gamedeck/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gamedeck/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gamedeck/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gamedeck/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gamedeck/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gamedeck/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;