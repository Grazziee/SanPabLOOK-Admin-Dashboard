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

/***/ "./src/bookings.js":
/*!*************************!*\
  !*** ./src/bookings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchBookings: () => (/* binding */ fetchBookings)\n/* harmony export */ });\n/* harmony import */ var _firebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.js */ \"./src/firebase.js\");\n\r\n\r\n  var db = _firebase_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\r\n  \r\n  function fetchBookings() {\r\n    return db.collection(\"BookingPending\")\r\n        .get()\r\n        .then((querySnapshot) => {\r\n            let Bookings = [];\r\n            querySnapshot.forEach((doc) => {\r\n                const data = doc.data();\r\n                Bookings.push({\r\n                    hotelName: data.place,\r\n                    hotelNumber: data.bookingID,\r\n                    paymentStatus: \"Due\",\r\n                    status: data.status\r\n                });\r\n            });\r\n            return Bookings;\r\n        });\r\n}\n\n//# sourceURL=webpack://sanpablook-admin-dashboard/./src/bookings.js?");

/***/ }),

/***/ "./src/firebase.js":
/*!*************************!*\
  !*** ./src/firebase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyDeRZzGLD9Klav-eCIlHzmMn0nu0zNg4j4\",\r\n    authDomain: \"sanpablook-project.firebaseapp.com\",\r\n    projectId: \"sanpablook-project\",\r\n    storageBucket: \"sanpablook-project.appspot.com\",\r\n    messagingSenderId: \"121974656262\",\r\n    appId: \"1:121974656262:web:6dbf77f2ed680aa7b42287\",\r\n    measurementId: \"G-TR3TKQFRQ9\"\r\n  };\r\n\r\n  firebase.initializeApp(firebaseConfig);\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase);\n\n//# sourceURL=webpack://sanpablook-admin-dashboard/./src/firebase.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bookings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.js */ \"./src/bookings.js\");\nconst sideMenu = document.querySelector(\"aside\");\r\nconst menuBtn = document.querySelector(\"#menu-btn\");\r\nconst closeBtn = document.querySelector(\"#close-btn\");\r\n\r\n\r\n\r\nmenuBtn.addEventListener('click', () =>{\r\n    sideMenu.style.display = 'block';\r\n})\r\n\r\ncloseBtn.addEventListener('click', () =>{\r\n    sideMenu.style.display = 'none';\r\n})\r\n\r\n;\r\n\r\n\r\n(0,_bookings_js__WEBPACK_IMPORTED_MODULE_0__.fetchBookings)().then(Bookings => {\r\n    Bookings.forEach(booking => {\r\n        const tr = document.createElement('tr');\r\n        const trContent = `\r\n                            <td>${booking.hotelName}</td>\r\n                            <td>${booking.hotelNumber}</td>\r\n                            <td>${booking.paymentStatus}</td>\r\n                            <td class=\"${booking.status ===\r\n                            'Cancelled' ? 'danger' : booking.status === 'Pending' ? 'warning'\r\n                            : 'success'}\">${booking.status}</td>\r\n                            <td class=\"primary\">Details</td>\r\n                            `\r\n\r\n        tr.innerHTML = trContent;\r\n        document.querySelector('table tbody').appendChild(tr);\r\n    })\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://sanpablook-admin-dashboard/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;