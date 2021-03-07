/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: doSomething, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doSomething\", function() { return doSomething; });\nfunction doSomething() {};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n      // this.element.parentElement.removeChild(this.element);\n    }\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? 'afterbegin' : 'beforeend',\n      this.element\n    );\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL0NvbXBvbmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAvQ29tcG9uZW50LmpzP2VmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRvU29tZXRoaW5nKCkge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdEVsZW1lbnRJZCwgaW5zZXJ0QmVmb3JlID0gZmFsc2UpIHtcbiAgICBpZiAoaG9zdEVsZW1lbnRJZCkge1xuICAgICAgdGhpcy5ob3N0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhvc3RFbGVtZW50SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmU7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgLy8gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2goKSB7XG4gICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgICB0aGlzLmluc2VydEJlZm9yZSA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLFxuICAgICAgdGhpcy5lbGVtZW50XG4gICAgKTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/Component.js\n");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.js */ \"./src/App/Tooltip.js\");\n\r\n\r\n\r\nclass ProjectItem {  \r\n\r\n  constructor(id, updateProjectListsFunction, type) {\r\n    this.id = id;\r\n    this.hasActiveTooltip = false;\r\n    this.updateProjectListsHandler = updateProjectListsFunction;\r\n    this.connectMoreInfoButton();\r\n    this.connectSwitchButton(type);\r\n    this.connectDrag();\r\n  }\r\n\r\n  showMoreInfoHandler() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const projectElement = document.getElementById(this.id);\r\n    const tooltipText = projectElement.dataset.extraInfo;\r\n    const tooltip = new _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"](\r\n      () => {\r\n        this.hasActiveTooltip = false;\r\n      },\r\n      tooltipText,\r\n      this.id\r\n    );\r\n    tooltip.attach();\r\n    this.hasActiveTooltip = true;\r\n  }\r\n\r\n  connectDrag() {\r\n    const item = document.getElementById(this.id);\r\n    item.addEventListener('dragstart', (event) => {\r\n      event.dataTransfer.setData('text/plain', this.id);\r\n      event.dataTransfer.effectAllowed = 'move';\r\n    });\r\n    item.addEventListener('dragend', (event) => {\r\n      console.log(event);\r\n    });\r\n  }\r\n\r\n  connectMoreInfoButton() {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    const moreInfoBtn = projectItemElement.querySelector(\r\n      'button:first-of-type'\r\n    );\r\n    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\r\n  }\r\n\r\n  connectSwitchButton(type) {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    let switchBtn = projectItemElement.querySelector('button:last-of-type');\r\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\r\n    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\r\n    switchBtn.addEventListener(\r\n      'click',\r\n      this.updateProjectListsHandler.bind(null, this.id)\r\n    );\r\n  }\r\n\r\n  update(updateProjectListsFn, type) {\r\n    this.updateProjectListsHandler = updateProjectListsFn;\r\n    this.connectSwitchButton(type);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gJy4uL1V0aWxpdHkvRE9NSGVscGVyLmpzJztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcC5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0geyAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkLCB1cGRhdGVQcm9qZWN0TGlzdHNGdW5jdGlvbiwgdHlwZSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZVByb2plY3RMaXN0c0hhbmRsZXIgPSB1cGRhdGVQcm9qZWN0TGlzdHNGdW5jdGlvbjtcclxuICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XHJcbiAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XHJcbiAgICB0aGlzLmNvbm5lY3REcmFnKCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9yZUluZm9IYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzQWN0aXZlVG9vbHRpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmV4dHJhSW5mbztcclxuICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcChcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICB0b29sdGlwVGV4dCxcclxuICAgICAgdGhpcy5pZFxyXG4gICAgKTtcclxuICAgIHRvb2x0aXAuYXR0YWNoKCk7XHJcbiAgICB0aGlzLmhhc0FjdGl2ZVRvb2x0aXAgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdERyYWcoKSB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIHRoaXMuaWQpO1xyXG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcclxuICAgIH0pO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdE1vcmVJbmZvQnV0dG9uKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICBjb25zdCBtb3JlSW5mb0J0biA9IHByb2plY3RJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnYnV0dG9uOmZpcnN0LW9mLXR5cGUnXHJcbiAgICApO1xyXG4gICAgbW9yZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dNb3JlSW5mb0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgbGV0IHN3aXRjaEJ0biA9IHByb2plY3RJdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b246bGFzdC1vZi10eXBlJyk7XHJcbiAgICBzd2l0Y2hCdG4gPSBET01IZWxwZXIuY2xlYXJFdmVudExpc3RlbmVycyhzd2l0Y2hCdG4pO1xyXG4gICAgc3dpdGNoQnRuLnRleHRDb250ZW50ID0gdHlwZSA9PT0gJ2FjdGl2ZScgPyAnRmluaXNoJyA6ICdBY3RpdmF0ZSc7XHJcbiAgICBzd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJyxcclxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodXBkYXRlUHJvamVjdExpc3RzRm4sIHR5cGUpIHtcclxuICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlciA9IHVwZGF0ZVByb2plY3RMaXN0c0ZuO1xyXG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\n\n\n// const ProjectItem = 'abc';\n\n// console.log(DEFAULT_VALUE);\n\nclass ProjectList {\n  // projects = [];\n\n  constructor(type) {\n    this.type = type;\n    this.projects = [];\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(\n        new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type)\n      );\n    }\n    console.log(this.projects);\n    this.connectDroppable();\n  }\n\n  connectDroppable() {\n    // console.log(globalThis);\n    const list = document.querySelector(`#${this.type}-projects ul`);\n\n    list.addEventListener('dragenter', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        list.parentElement.classList.add('droppable');\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragover', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragleave', event => {\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n\n    list.addEventListener('drop', event => {\n      const prjId = event.dataTransfer.getData('text/plain');\n      if (this.projects.find(p => p.id === prjId)) {\n        return;\n      }\n      document\n        .getElementById(prjId)\n        .querySelector('button:last-of-type')\n        .click();\n      list.parentElement.classList.remove('droppable');\n      // event.preventDefault(); // not required\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n    _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__[\"moveElement\"](project.id, `#${this.type}-projects ul`);\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId) {\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n    // this.projects.splice(projectIndex, 1);\n    this.switchHandler(this.projects.find(p => p.id === projectId));\n    this.projects = this.projects.filter(p => p.id !== projectId);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC9Qcm9qZWN0TGlzdC5qcz8wZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RJdGVtIGFzIFByakl0ZW0gfSBmcm9tICcuL1Byb2plY3RJdGVtJztcbmltcG9ydCAqIGFzIERPTUggZnJvbSAnLi4vVXRpbGl0eS9ET01IZWxwZXInO1xuXG4vLyBjb25zdCBQcm9qZWN0SXRlbSA9ICdhYmMnO1xuXG4vLyBjb25zb2xlLmxvZyhERUZBVUxUX1ZBTFVFKTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IHtcbiAgLy8gcHJvamVjdHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgY29uc3QgcHJqSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt0eXBlfS1wcm9qZWN0cyBsaWApO1xuICAgIGZvciAoY29uc3QgcHJqSXRlbSBvZiBwcmpJdGVtcykge1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKFxuICAgICAgICBuZXcgUHJqSXRlbShwcmpJdGVtLmlkLCB0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy50eXBlKVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XG4gICAgdGhpcy5jb25uZWN0RHJvcHBhYmxlKCk7XG4gIH1cblxuICBjb25uZWN0RHJvcHBhYmxlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGdsb2JhbFRoaXMpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcHBhYmxlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKHAgPT4gcC5pZCA9PT0gcHJqSWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChwcmpJZClcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuICAgICAgICAuY2xpY2soKTtcbiAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIG5vdCByZXF1aXJlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKHN3aXRjaEhhbmRsZXJGdW5jdGlvbikge1xuICAgIHRoaXMuc3dpdGNoSGFuZGxlciA9IHN3aXRjaEhhbmRsZXJGdW5jdGlvbjtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBET01ILm1vdmVFbGVtZW50KHByb2plY3QuaWQsIGAjJHt0aGlzLnR5cGV9LXByb2plY3RzIHVsYCk7XG4gICAgcHJvamVjdC51cGRhdGUodGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSk7XG4gIH1cblxuICBzd2l0Y2hQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIC8vIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICAvLyB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIHRoaXMuc3dpdGNoSGFuZGxlcih0aGlzLnByb2plY3RzLmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpKTtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nconsole.log('Tooltip running');\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement('div');\n    tooltipElement.className = 'card';\n    const tooltipTemplate = document.getElementById('tooltip');\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector('p').textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n    tooltipElement.style.position = 'absolute';\n    tooltipElement.style.left = x + 'px'; // 500px\n    tooltipElement.style.top = y + 'px';\n\n    tooltipElement.addEventListener('click', this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Rvb2x0aXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwL1Rvb2x0aXAuanM/ZDNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ21wLCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5jb25zb2xlLmxvZygnVG9vbHRpcCBydW5uaW5nJyk7XG5cbmV4cG9ydCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgQ21wIHtcbiAgY29uc3RydWN0b3IoY2xvc2VOb3RpZmllckZ1bmN0aW9uLCB0ZXh0LCBob3N0RWxlbWVudElkKSB7XG4gICAgc3VwZXIoaG9zdEVsZW1lbnRJZCk7XG4gICAgdGhpcy5jbG9zZU5vdGlmaWVyID0gY2xvc2VOb3RpZmllckZ1bmN0aW9uO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5jbG9zZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgdGhpcy5jbG9zZU5vdGlmaWVyKCk7XG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHRvb2x0aXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIGNvbnN0IHRvb2x0aXBUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b29sdGlwJyk7XG4gICAgY29uc3QgdG9vbHRpcEJvZHkgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvb2x0aXBUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICB0b29sdGlwQm9keS5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQgPSB0aGlzLnRleHQ7XG4gICAgdG9vbHRpcEVsZW1lbnQuYXBwZW5kKHRvb2x0aXBCb2R5KTtcblxuICAgIGNvbnN0IGhvc3RFbFBvc0xlZnQgPSB0aGlzLmhvc3RFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgY29uc3QgaG9zdEVsUG9zVG9wID0gdGhpcy5ob3N0RWxlbWVudC5vZmZzZXRUb3A7XG4gICAgY29uc3QgaG9zdEVsSGVpZ2h0ID0gdGhpcy5ob3N0RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudFNjcm9sbGluZyA9IHRoaXMuaG9zdEVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICBjb25zdCB4ID0gaG9zdEVsUG9zTGVmdCArIDIwO1xuICAgIGNvbnN0IHkgPSBob3N0RWxQb3NUb3AgKyBob3N0RWxIZWlnaHQgLSBwYXJlbnRFbGVtZW50U2Nyb2xsaW5nIC0gMTA7XG5cbiAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdG9vbHRpcEVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyAncHgnOyAvLyA1MDBweFxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXG4gICAgdG9vbHRpcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlVG9vbHRpcCk7XG4gICAgdGhpcy5lbGVtZW50ID0gdG9vbHRpcEVsZW1lbnQ7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/Tooltip.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper, clearEventListeners, moveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearEventListeners\", function() { return clearEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveElement\", function() { return moveElement; });\nclass DOMHelper {\r\n  static clearEventListeners(element) {\r\n    const clonedElement = element.cloneNode(true);\r\n    element.replaceWith(clonedElement);\r\n    return clonedElement;\r\n  }\r\n\r\n  static moveElement(elementId, newDestinationSelector) {\r\n    const element = document.getElementById(elementId);\r\n    const destinationElement = document.querySelector(newDestinationSelector);\r\n    destinationElement.append(element);\r\n    element.scrollIntoView({ behavior: 'smooth' });\r\n  }\r\n}\r\n\r\nfunction clearEventListeners(element) {\r\n  const clonedElement = element.cloneNode(true);\r\n  element.replaceWith(clonedElement);\r\n  return clonedElement;\r\n}\r\n\r\nfunction moveElement(elementId, newDestinationSelector) {\r\n  const element = document.getElementById(elementId);\r\n  const destinationElement = document.querySelector(newDestinationSelector);\r\n  destinationElement.append(element);\r\n  element.scrollIntoView({ behavior: 'smooth' });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanM/NTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRE9NSGVscGVyIHtcclxuICBzdGF0aWMgY2xlYXJFdmVudExpc3RlbmVycyhlbGVtZW50KSB7XHJcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBlbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZEVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGNsb25lZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbW92ZUVsZW1lbnQoZWxlbWVudElkLCBuZXdEZXN0aW5hdGlvblNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XHJcbiAgICBkZXN0aW5hdGlvbkVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcclxuICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcclxuICByZXR1cm4gY2xvbmVkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG4gIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XHJcbiAgZGVzdGluYXRpb25FbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\n\n\n// eslint-disable-next-line no-undef\nglobalThis.DEFAULT_VALUE = 'MAX';\n\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('active');\n    const finishedProjectsList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('finished');\n\n    activeProjectsList.setSwitchHandlerFunction(\n      finishedProjectsList.addProject.bind(finishedProjectsList)\n    );\n    finishedProjectsList.setSwitchHandlerFunction(\n      activeProjectsList.addProject.bind(activeProjectsList)\n    );\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n\n  static startAnalytics() {\n    const analyticsScript = document.createElement('script');\n\n    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\nApp.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9BcHAvUHJvamVjdExpc3QnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmdsb2JhbFRoaXMuREVGQVVMVF9WQUxVRSA9ICdNQVgnO1xuXG5jbGFzcyBBcHAge1xuICBzdGF0aWMgaW5pdCgpIHtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0c0xpc3QgPSBuZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xuICAgIGNvbnN0IGZpbmlzaGVkUHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RMaXN0KCdmaW5pc2hlZCcpO1xuXG4gICAgYWN0aXZlUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChmaW5pc2hlZFByb2plY3RzTGlzdClcbiAgICApO1xuICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGFjdGl2ZVByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUHJvamVjdHNMaXN0KVxuICAgICk7XG5cbiAgICAvLyBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5hbHl0aWNzLCAzMDAwKTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wLWFuYWx5dGljcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydEFuYWx5dGljcygpIHtcbiAgICBjb25zdCBhbmFseXRpY3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIGFuYWx5dGljc1NjcmlwdC5zcmMgPSAnYXNzZXRzL3NjcmlwdHMvVXRpbGl0eS9BbmFseXRpY3MuanMnO1xuICAgIGFuYWx5dGljc1NjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoYW5hbHl0aWNzU2NyaXB0KTtcbiAgfVxufVxuXG5BcHAuaW5pdCgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });