/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobile-nav.js":
/*!*************************************!*\
  !*** ./src/assets/js/mobile-nav.js ***!
  \*************************************/
/***/ (function() {

eval("const body = document.body;\r\nconst burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\n\r\nconst mask = document.createElement('div');\r\nmask.classList.add('page__mask');\r\n\r\nburger.addEventListener('click', (evt) => {\r\n  body.classList.contains('show-sidebar') ? closeSidebar() : showSidebar();\r\n});\r\n\r\nfunction showSidebar() {\r\n  body.classList.add('show-sidebar');\r\n  mask.addEventListener('click', closeSidebar);\r\n  page.append(mask);\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove('show-sidebar');\r\n  mask.remove();\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobile-nav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\nconst body = document.body;\r\n\r\nmodalBtn.forEach((item) => {\r\n  item.addEventListener('click', (evt) => {\r\n    let btn = evt.currentTarget;\r\n    let modalId = btn.getAttribute('data-modal');\r\n    let modal = document.getElementById(modalId);\r\n    let modalContent = modal.querySelector('.modal__content');\r\n\r\n    modalContent.addEventListener('click', (evt) => {\r\n      evt.stopPropagation();\r\n    });\r\n\r\n    modal.classList.add('show');\r\n    body.classList.add('no-scroll');\r\n\r\n    setTimeout(() => {\r\n      modalContent.style.transform = 'none';\r\n      modalContent.style.opacity = '1';\r\n    }, 1);\r\n  })\r\n});\r\n\r\nmodalClose.forEach((item) => {\r\n  item.addEventListener('click', (evt) => {\r\n    let currentModal = evt.currentTarget.closest('.modal');\r\n\r\n    closeModal(currentModal);\r\n  })\r\n});\r\n\r\nmodal.forEach((item) => {\r\n  item.addEventListener('click', (evt) => {\r\n    let currentModal = evt.currentTarget;\r\n\r\n    closeModal(currentModal);\r\n  })\r\n});\r\n\r\nfunction closeModal(currentModal) {\r\n  let modalContent = currentModal.querySelector('.modal__content');\r\n  modalContent.removeAttribute('style');\r\n\r\n  setTimeout(() => {\r\n    currentModal.classList.remove('show');\r\n    body.classList.remove('no-scroll');\r\n  }, 200);\r\n};\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach((item) => {\r\n  let textAreaHeight = item.offsetHeight;\r\n  item.addEventListener('input', (evt) => {\r\n    let element = evt.target;\r\n\r\n    element.style.height = textAreaHeight + 'px';\r\n    element.style.height = element.scrollHeight + 'px';\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobile-nav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;