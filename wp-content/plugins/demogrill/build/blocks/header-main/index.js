/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/header-main/main.css"
/*!*****************************************!*\
  !*** ./src/blocks/header-main/main.css ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/blocks/header-main/block.json"
/*!*******************************************!*\
  !*** ./src/blocks/header-main/block.json ***!
  \*******************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"demogrill/header-main","title":"DemoGrill Header Main","icon":"cover-image","description":"Main Header block in DemoGrill Project.","category":"demogrill","keywords":["header","wide","fancy"],"version":"1","textdomain":"demogrill","editorScript":"file:./index.js","style":"file:./index.css","attributes":{"title":{"type":"string","source":"html","selector":"h1"},"titleSize":{"type":"number","default":48},"subtitle":{"type":"string","source":"html","selector":"h2"},"headImg":{"type":"string"},"btnText":{"type":"string","default":"Click Button"},"buttonBgColor":{"type":"string","default":"#cc8f15"},"buttonTextColor":{"type":"string","default":"#ffffff"},"buttonRadius":{"type":"number","default":5},"textColor":{"type":"string","default":"#000000"},"heroOverlay":{"type":"number","default":0.3},"heroPadding":{"type":"number","default":"50"},"heroTextAlign":{"type":"string","default":"left"},"heroButtonUrl":{"type":"string","default":""}}}');

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/blocks/header-main/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/header-main/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ "./src/blocks/header-main/main.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
    const {
      title,
      subtitle,
      headImg,
      btnText,
      textColor,
      titleSize,
      heroOverlay,
      heroPadding,
      heroTextAlign,
      heroButtonUrl,
      buttonBgColor,
      buttonTextColor,
      buttonRadius
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        ...blockProps,
        style: {
          'padding': `${heroPadding}` + "px",
          'backgroundSize': "cover",
          'backgroundImage': headImg ? `url(${headImg})` : "none",
          "position": "relative",
          "textAlign": `${heroTextAlign}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "hero__overlay",
          style: {
            "background": `rgba(0,0,0,${heroOverlay})`
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Header Settings", "demogrill"),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
              label: "Choose Hero text color",
              colors: [{
                name: "white",
                color: "#FFFFFF"
              }, {
                name: "orange",
                color: "#cc8f15"
              }],
              value: textColor,
              onChange: newTextColor => setAttributes({
                textColor: newTextColor
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: "Overlay",
              value: heroOverlay,
              onChange: newHeroOverlay => setAttributes({
                heroOverlay: newHeroOverlay
              }),
              min: 0,
              max: 1,
              step: 0.1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: "Padding",
              value: heroPadding,
              onChange: newHeroPadding => setAttributes({
                heroPadding: newHeroPadding
              }),
              min: 0,
              max: 200,
              step: 5
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              label: "Text Alignment",
              options: [{
                label: "Left",
                value: "left"
              }, {
                label: "Right",
                value: "right"
              }, {
                label: "Center",
                value: "center"
              }],
              value: heroTextAlign,
              onChange: newAlign => setAttributes({
                heroTextAlign: newAlign
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: "Hero Title Size",
              value: titleSize,
              onChange: newTitleSize => setAttributes({
                titleSize: newTitleSize
              }),
              min: 20,
              max: 100,
              step: 5
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
              label: "Change button text",
              value: btnText,
              onChange: newBtnText => setAttributes({
                btnText: newBtnText
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
              label: "Change button URL",
              value: heroButtonUrl,
              onChange: newUrl => setAttributes({
                heroButtonUrl: newUrl
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              children: "Button Background"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
              value: buttonBgColor,
              onChange: color => setAttributes({
                buttonBgColor: color
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              children: "Button Text Color"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
              value: buttonTextColor,
              onChange: color => setAttributes({
                buttonTextColor: color
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: "Button Border Radius",
              value: buttonRadius,
              onChange: value => setAttributes({
                buttonRadius: value
              }),
              min: 0,
              max: 50
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "hero__front",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => setAttributes({
              headImg: media.url
            }),
            allowedTypes: "image",
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              onClick: open,
              variant: "primary",
              children: "Select the Header Image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h1",
            className: "hero__title",
            style: {
              "color": textColor,
              "text-shadow": "2px 2px 2px #fff",
              "fontSize": titleSize
            },
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Enter Title", "demogrill"),
            value: title,
            onChange: newTitle => setAttributes({
              title: newTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            className: "hero__subtitle",
            style: {
              "color": textColor,
              "text-shadow": "2px 2px 1px #fff"
            },
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Enter Subtitle"),
            value: subtitle,
            onChange: newSubtitle => setAttributes({
              subtitle: newSubtitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "hero__button1",
            style: {
              "backgroundColor": buttonBgColor,
              "borderRadius": buttonRadius
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              type: "button",
              href: heroButtonUrl,
              style: {
                "color": buttonTextColor
              },
              children: btnText
            })
          })]
        })]
      })
    });
  },
  save({
    attributes
  }) {
    const {
      title,
      subtitle,
      headImg,
      btnText,
      textColor,
      titleSize,
      heroOverlay,
      heroPadding,
      heroTextAlign,
      heroButtonUrl,
      buttonBgColor,
      buttonTextColor,
      buttonRadius
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        ...blockProps,
        style: {
          'padding': `${heroPadding}` + "px",
          'backgroundSize': "cover",
          'backgroundImage': headImg ? `url(${headImg})` : "none",
          "position": "relative",
          "textAlign": `${heroTextAlign}`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "hero__overlay",
          style: {
            "background": `rgba(0,0,0,${heroOverlay})`
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "hero__front",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "h1",
            className: "hero__title",
            style: {
              "color": textColor,
              "fontSize": titleSize
            },
            value: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "h2",
            className: "hero__subtitle",
            style: {
              "color": textColor
            },
            value: subtitle
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "hero__button1",
            style: {
              "backgroundColor": buttonBgColor,
              "borderRadius": buttonRadius
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              type: "button",
              href: heroButtonUrl,
              style: {
                "color": buttonTextColor
              },
              children: btnText
            })
          })]
        })]
      })
    });
  }
});
console.log("header main");
})();

/******/ })()
;
//# sourceMappingURL=index.js.map