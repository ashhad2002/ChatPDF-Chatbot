/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");






const App = () => {
  const [newQuestion, setNewQuestion] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [chatLog, setChatLog] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(["Enter your questions here"]);
  const [gettingResponse, setGettingResponse] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const logContainerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [chatopen, setChatopen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const toggle = e => {
    setChatopen(!chatopen);
    if (window.innerWidth <= 430 && chatopen) {}
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
  }, [chatLog]);
  const sendMessage = data => {
    return new Promise((resolve, reject) => {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: 'v1/chat',
        method: 'POST',
        data: data
      }).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      });
    });
  };
  function constructMessages(messages) {
    const roles = ['assistant', 'user'];
    let constructedMessages = [];
    for (let i = 0; i < messages.length; i++) {
      const index = i % 2;
      const message = messages[i];
      const constructedMessage = {
        role: roles[index],
        content: message
      };
      constructedMessages.push(constructedMessage);
    }
    return constructedMessages;
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    setGettingResponse(true);
    inputRef.current.value = '';
    const data = {
      sourceId: "cha_" + chatpdf_chatbot_settings.api_key
    };
    let lastSixMessages = chatLog.slice(-5);
    data.messages = constructMessages([...lastSixMessages, newQuestion]);
    setChatLog(prevLog => [...prevLog, newQuestion]);
    // sendMessage(data)
    // .then((result) => {
    //     if(result.content) setChatLog(prevLog => [...prevLog, result.content]);
    //     else if(result.error) setChatLog(prevLog => [...prevLog, result.error]);
    //     else {
    //         console.error("Error:", error);
    //         setChatLog(prevLog => [...prevLog, "Error getting response"]);
    //     }
    // })
    // .catch((error) => {
    //     console.error("Error:", error);
    //     setChatLog(prevLog => [...prevLog, "Error getting response"]);
    // })
    // .finally(() => {
    //     setGettingResponse(false);
    // })
    setGettingResponse(false); //useful for testing, after commenting out above block
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter' && !event.shiftKey && !gettingResponse && inputRef.current.value) {
      handleSubmit(event);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "chatCon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `chat-box ${chatopen ? 'visible' : 'hidden'}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "header"
  }, "Chatbot", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: toggle,
    className: "fa fa-times fa-lg chatbot-toggler-mobile"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "msg-area",
    ref: logContainerRef
  }, chatLog.map((msg, i) => i % 2 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "usrmsg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "userspan"
  }, msg)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, msg)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    placeholder: "Send your message here...",
    onKeyDown: handleKeyDown,
    onChange: e => setNewQuestion(e.target.value),
    rows: 1,
    ref: inputRef,
    className: "chatinput"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    disabled: gettingResponse,
    onClick: handleSubmit
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa fa-paper-plane"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: toggle,
    class: "pop"
  }, chatopen ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-times fa-lg chatbot-toggler"
  }) // Close icon
  : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-comment fa-lg chatbot-toggler"
  }) // Chat icon
  ));
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  const container = document.querySelector('#app');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), container);
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map