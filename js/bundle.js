/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/libs/active.js":
/*!***************************!*\
  !*** ./js/libs/active.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function get(url){
    let rem = await fetch(url);

    if(!rem){
        throw new Error(`Error, url: ${url}`);
    }

    return await rem.json();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);

/***/ }),

/***/ "./js/modulse/backed.js":
/*!******************************!*\
  !*** ./js/modulse/backed.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/active */ "./js/libs/active.js");


function backed(){

    console.log('Hello')

    ;(0,_libs_active__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:3000/backed")
        .then(data => {
            data.forEach(data => {
                const elem = document.createElement('div'),
                      wrapper = document.querySelector('.backed_wrapper');
                
                elem.classList.add('backed_wrapper_list');

                elem.innerHTML = `
                <img src=${data.img} alt="backed">
                    <h2 class="backed_wrapper_list-title">${data.title}</h2>
                    <div class="backed_wrapper_list-in">
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1.65415C11.5486 1.85103 11.0712 1.98187 10.5825 2.04265C11.0975 1.73712 11.4826 1.25332 11.6648 0.6829C11.1825 0.968903 10.6549 1.17031 10.1047 1.2784C9.76743 0.918235 9.32959 0.66784 8.84812 0.559746C8.36664 0.451653 7.86379 0.490858 7.40488 0.672269C6.94598 0.853679 6.55224 1.16891 6.27482 1.577C5.9974 1.9851 5.84912 2.46719 5.84925 2.96065C5.84925 3.15565 5.86575 3.34315 5.90625 3.52165C4.92756 3.47367 3.97002 3.21966 3.09623 2.77624C2.22243 2.33282 1.45207 1.70996 0.8355 0.948401C0.519614 1.48979 0.421957 2.13123 0.562412 2.7421C0.702868 3.35297 1.07088 3.88734 1.5915 4.2364C1.20207 4.22596 0.820855 4.12204 0.48 3.9334V3.9604C0.480652 4.52847 0.676999 5.07898 1.03599 5.51925C1.39498 5.95951 1.89469 6.26266 2.451 6.37765C2.24054 6.43312 2.02364 6.46036 1.806 6.45865C1.64969 6.46143 1.49354 6.44735 1.34025 6.41665C1.49921 6.90492 1.80562 7.33191 2.2173 7.63882C2.62897 7.94573 3.12567 8.11747 3.639 8.1304C2.7682 8.81143 1.69423 9.18087 0.58875 9.17965C0.387 9.17965 0.1935 9.17065 0 9.1459C1.12491 9.87081 2.43576 10.2543 3.774 10.2499C8.301 10.2499 10.776 6.4999 10.776 3.2494C10.776 3.14065 10.7723 3.03565 10.767 2.9314C11.2522 2.58414 11.6701 2.15131 12 1.65415Z" fill="#5E5C6C"/>
                        </svg>    
                        <a href="#" class="backed_wrapper_list-in-text">in</a>
                 </div>
                `;
                
                wrapper.appendChild(elem);
            })
        })
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backed);

/***/ }),

/***/ "./js/modulse/gamburger.js":
/*!*********************************!*\
  !*** ./js/modulse/gamburger.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function gamburger(){
    const popUp = document.querySelector('.popup'),
          nav = document.querySelector('.nav'),
          header = document.querySelector('.header'),
          logoText = document.querySelector('.header_logo-text');

    function openBar(e){
        logoText.style.color = '#fff';
        popUp.classList.remove('open');
        popUp.classList.add('close');
        popUp.style.left = 0;
        header.style.height = '373px';

        nav.classList.add('active'); 
    }

    function closeBar(e){
        popUp.classList.add('open');
        popUp.classList.remove('close');
        setTimeout(() => {
            header.style.height = '71px';
        }, 200)

        logoText.style.color = '#000';

        popUp.style.left = '-100%';
        nav.classList.remove('active');
    }

    nav.addEventListener('click', function(e){
        e.preventDefault();

        if(popUp.classList.contains('open')){
            openBar();
        } else if(popUp.classList.contains('close')){
            closeBar();
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamburger);

/***/ }),

/***/ "./js/modulse/makes.js":
/*!*****************************!*\
  !*** ./js/modulse/makes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/active */ "./js/libs/active.js");


function makes(){
    (0,_libs_active__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:3000/makes")
        .then(data => {
            data.forEach(item => {
                const elem = document.createElement('div'),
                      wrapper = document.querySelector('.makes_wrapper');
                elem.classList.add('makes_wrapper-list');

                elem.innerHTML = `
                <div class="makes_wrapper-list-ellips">
                    <img src=${item.img} alt="step">
                </div>
                <h3>${item.title}</h3>
                <p class="makes_wrapper-list-sibtitle">${item.subtitle}</p> 
                `;

                wrapper.appendChild(elem);
            })  
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makes);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulse_gamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulse/gamburger */ "./js/modulse/gamburger.js");
/* harmony import */ var _modulse_makes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulse/makes */ "./js/modulse/makes.js");
/* harmony import */ var _modulse_backed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulse/backed */ "./js/modulse/backed.js");




document.addEventListener('DOMContentLoaded', function(){
    (0,_modulse_gamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modulse_makes__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modulse_backed__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map