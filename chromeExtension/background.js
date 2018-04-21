/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _headerMod = __webpack_require__(3);

	var _headerMod2 = _interopRequireDefault(_headerMod);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.hm = new _headerMod2.default(); /* eslint-disable */

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint-disable */
	var configurationHandler = function () {
	  function configurationHandler() {
	    _classCallCheck(this, configurationHandler);

	    this.events = {
	      'change': []
	    };
	    this.services = [{
	      name: 'flights-core',
	      value: 'flights-multi-staging',
	      enabled: true,
	      data: ['flights-multi-staging']
	    }];

	    this.urlFilters = { urls: ['<all_urls>'] };

	    this.extraInfoSpec = ['requestHeaders', 'blocking'];

	    chrome.runtime.onMessage.addListener(this.onMessageHandler.bind(this));
	  }

	  _createClass(configurationHandler, [{
	    key: 'setServices',
	    value: function setServices(services) {
	      this.services = services;
	    }
	  }, {
	    key: 'getServices',
	    value: function getServices() {
	      return this.services;
	    }
	  }, {
	    key: 'setUrlFilters',
	    value: function setUrlFilters(urlFilters) {
	      this.urlFilters = urlFilters;
	      this.emit('change');
	    }
	  }, {
	    key: 'getUrlFilters',
	    value: function getUrlFilters() {
	      return this.urlFilters;
	    }
	  }, {
	    key: 'setExtraInfoSpec',
	    value: function setExtraInfoSpec(extraInfoSpec) {
	      this.extraInfoSpec = extraInfoSpec;
	      this.emit('change');
	    }
	  }, {
	    key: 'getExtraInfoSpec',
	    value: function getExtraInfoSpec() {
	      return this.extraInfoSpec;
	    }
	    /*
	     request: {
	        id: 'bgs/configurationHandler',
	        action: functionName,
	        parameters :[array of parameters],
	        expectingResponse: Boolean
	    }
	     */

	  }, {
	    key: 'onMessageHandler',
	    value: function onMessageHandler(request, sender, handleResponse) {
	      if (request.id !== 'bgs/configurationHandler') {
	        return;
	      }

	      var action = request.action,
	          parameters = request.parameters,
	          expectingResponse = request.expectingResponse;


	      if (!action) {
	        return;
	      }

	      var returnValue = this[action].apply(this, _toConsumableArray(parameters));

	      if (expectingResponse && handleResponse) {
	        handleResponse(returnValue);
	      }
	    }
	  }, {
	    key: 'on',
	    value: function on(eventName, action) {
	      if (!this.events[eventName]) {
	        return;
	      }

	      this.events[eventName].push(action);
	    }
	  }, {
	    key: 'emit',
	    value: function emit(eventName) {
	      if (!this.events[eventName]) {
	        return;
	      }

	      for (var i = 0; i < this.events[eventName].length; i++) {
	        this.events[eventName][i]();
	      }
	    }
	  }]);

	  return configurationHandler;
	}();

	exports.default = configurationHandler;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */


	var _configurationHandler = __webpack_require__(1);

	var _configurationHandler2 = _interopRequireDefault(_configurationHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderMod = function () {
		function HeaderMod() {
			_classCallCheck(this, HeaderMod);

			this.config = new _configurationHandler2.default();
			this.eventListener = this.onBeforeSendHeadersListener.bind(this);
			this.config.on('change', this.addListeners);

			this.addListeners();
		}

		_createClass(HeaderMod, [{
			key: 'addListeners',
			value: function addListeners() {
				this.removeListeners();

				chrome.webRequest.onBeforeSendHeaders.addListener(this.eventListener, this.config.getUrlFilters(), this.config.getExtraInfoSpec());
			}
		}, {
			key: 'removeListeners',
			value: function removeListeners() {
				chrome.webRequest.onBeforeSendHeaders.removeListener(this.eventListener);
			}
		}, {
			key: 'onBeforeSendHeadersListener',
			value: function onBeforeSendHeadersListener(details) {

				var requestHeaders = details.requestHeaders;

				var services = this.config.getServices();

				for (var i = 0; i < services.length; i++) {
					var service = services[i];

					if (!service.enabled) {
						continue;
					}

					requestHeaders.push({ name: service.name, value: service.value });
				}

				return { requestHeaders: requestHeaders };
			}
		}]);

		return HeaderMod;
	}();

	exports.default = HeaderMod;

/***/ })
/******/ ]);