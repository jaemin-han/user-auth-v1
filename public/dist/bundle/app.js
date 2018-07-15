/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Intro.js":
/*!*********************************!*\
  !*** ./src/components/Intro.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		"div",
		{ className: "row" },
		_react2.default.createElement(
			"div",
			{ className: "col-md-6 col-md-offset-3", style: { textAlign: 'center', marginBottom: 48 } },
			_react2.default.createElement(
				"h1",
				null,
				"Welcome to Turbo"
			),
			_react2.default.createElement("hr", null),
			_react2.default.createElement(
				"div",
				{ style: { background: '#f9f9f9', border: '1px solid #ddd', borderRadius: 3, padding: 12 } },
				"You are currently looking at the ",
				_react2.default.createElement(
					"strong",
					{ style: { color: 'red' } },
					"Intro.js"
				),
				" file in the '/src/components/presentation' directory of your project. This template is rendered with the Mustache templating engine."
			),
			_react2.default.createElement(
				"h3",
				{ style: { marginTop: 48 } },
				"Routes"
			),
			_react2.default.createElement("hr", null),
			_react2.default.createElement(
				"p",
				null,
				"The routes are stored in the 'routes' directory. This scaffold comes with two sample routes out of the box: index and api. To test each route, click the following links:"
			),
			_react2.default.createElement(
				"div",
				{ className: "row" },
				_react2.default.createElement(
					"div",
					{ className: "col-md-6 col-md-offset-0" },
					_react2.default.createElement(
						"div",
						{ style: localStyle.grayBox },
						_react2.default.createElement(
							"h4",
							null,
							"Index Route"
						),
						_react2.default.createElement(
							"ul",
							{ style: { paddingLeft: 16 } },
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									"a",
									{ href: "/json" },
									"JSON Response"
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									"a",
									{ href: "/send" },
									"Text Response"
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									"a",
									{ href: "/redirect" },
									"Redirect"
								)
							)
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "col-md-6" },
					_react2.default.createElement(
						"div",
						{ style: localStyle.grayBox },
						_react2.default.createElement(
							"h4",
							null,
							"API Route"
						),
						_react2.default.createElement(
							"ul",
							{ style: { paddingLeft: 16 } },
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									"a",
									{ href: "/api/profile" },
									"Resource Request"
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									"a",
									{ href: "/api/profile?team=cavaliers" },
									"With Query Params"
								)
							),
							_react2.default.createElement(
								"li",
								null,
								_react2.default.createElement(
									"a",
									{ href: "/api/profile/lebron_james" },
									"With ID"
								)
							)
						)
					)
				)
			),
			_react2.default.createElement(
				"h3",
				{ style: { marginTop: 48 } },
				"Static Assets"
			),
			_react2.default.createElement("hr", null),
			_react2.default.createElement(
				"p",
				null,
				"Static assets (images, js, css, etc) are located in the \"public\" directory. The image below is rendered from the 'images' directory of the public folder:",
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				_react2.default.createElement("img", { src: "/images/turbo.png" }),
				_react2.default.createElement("br", null),
				_react2.default.createElement("br", null),
				"When deployed on Turbo Vertex, static assets are ",
				_react2.default.createElement(
					"em",
					null,
					"automatically"
				),
				" distributed to a global CDN so there is no need to set that up. If you decide to eject and deploy this project on your own architecture, you will have to configure a CDN distribution (or at least you should)."
			),
			_react2.default.createElement(
				"h3",
				{ style: { marginTop: 48 } },
				"Deployment"
			),
			_react2.default.createElement("hr", null),
			_react2.default.createElement(
				"p",
				null,
				"To deploy, connect the project to a Turbo 360 project using the APP_ID (from root directory):",
				_react2.default.createElement(
					"pre",
					{ style: localStyle.pre },
					_react2.default.createElement(
						"code",
						null,
						"$ turbo app APP_ID"
					)
				),
				"Then deploy by simply entering the deploy command:",
				_react2.default.createElement(
					"pre",
					{ style: localStyle.pre },
					_react2.default.createElement(
						"code",
						null,
						"$ turbo deploy"
					)
				),
				"When deployment is complete, you will see a live link where you can access the project on the internet!"
			)
		)
	);
};

var localStyle = {
	grayBox: {
		textAlign: 'left',
		background: '#f9f9f9',
		border: '1px solid #ddd',
		borderRadius: 3,
		padding: 12
	},
	pre: {
		textAlign: 'left',
		marginTop: 8,
		background: '#333',
		color: '#fff'
	}
};

/***/ }),

/***/ "./src/components/containers/Auth.js":
/*!*******************************************!*\
  !*** ./src/components/containers/Auth.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_Component) {
    _inherits(Auth, _Component);

    function Auth() {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

        _this.state = {
            vistor: {
                username: "",
                password: ""
            }
        };
        return _this;
    }

    _createClass(Auth, [{
        key: "updateVisitor",
        value: function updateVisitor(attr, event) {
            console.log(attr + ' == ' + event.target.value);
            var updatedVisitor = Object.assign({}, this.state.vistor);
            updatedVisitor[attr] = event.target.value;

            this.setState({
                vistor: updatedVisitor
            });
        }
    }, {
        key: "register",
        value: function register(event) {
            event.preventDefault();
            console.log('REGISTER: ' + JSON.stringify(this.state.vistor));
        }
    }, {
        key: "login",
        value: function login(event) {
            event.preventDefault();
            console.log('LOGIN: ' + JSON.stringify(this.state.vistor));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "div",
                    { className: "row" },
                    _react2.default.createElement(
                        "div",
                        { className: "col-md-6" },
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Register"
                        ),
                        _react2.default.createElement(
                            "form",
                            null,
                            _react2.default.createElement("input", { onChange: this.updateVisitor.bind(this, 'username'), className: "form-control", type: "text", placeholder: "Username" }),
                            _react2.default.createElement("br", null),
                            _react2.default.createElement("input", { onChange: this.updateVisitor.bind(this, 'password'), className: "form-control", type: "passworld", placeholder: "Password" }),
                            _react2.default.createElement("br", null),
                            _react2.default.createElement(
                                "button",
                                { onClick: this.register.bind(this) },
                                "Join"
                            )
                        ),
                        _react2.default.createElement("hr", null),
                        _react2.default.createElement(
                            "h1",
                            null,
                            "Login"
                        ),
                        _react2.default.createElement(
                            "form",
                            null,
                            _react2.default.createElement("input", { onChange: this.updateVisitor.bind(this, 'username'), className: "form-control", type: "text", placeholder: "Username" }),
                            _react2.default.createElement("br", null),
                            _react2.default.createElement("input", { onChange: this.updateVisitor.bind(this, 'password'), className: "form-control", type: "passworld", placeholder: "Password" }),
                            _react2.default.createElement("br", null),
                            _react2.default.createElement(
                                "button",
                                { onClick: this.login.bind(this) },
                                "Login"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Auth;
}(_react.Component);

exports.default = Auth;

/***/ }),

/***/ "./src/components/containers/index.js":
/*!********************************************!*\
  !*** ./src/components/containers/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Auth = undefined;

var _Auth = __webpack_require__(/*! ./Auth */ "./src/components/containers/Auth.js");

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Auth = _Auth2.default;

// Exporting 'Auth' component

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	USERS_RECEIVED: 'USERS_RECEIVED',
	USER_CREATED: 'USER_CREATED',
	USER_LOGGED_IN: 'USER_LOGGED_IN',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED'

};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(/*! ./stores */ "./src/stores/index.js");

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Intro = __webpack_require__(/*! ./components/Intro */ "./src/components/Intro.js");

var _Intro2 = _interopRequireDefault(_Intro);

var _containers = __webpack_require__(/*! ./components/containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app =
// Provider is a component that glues my project to React architecture.
// Attaches project to Redux architecture
_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_containers.Auth, null)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userReducer = undefined;

var _userReducer = __webpack_require__(/*! ./userReducer */ "./src/reducers/userReducer.js");

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.userReducer = _userReducer2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             	Export your reducers here
                                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             */

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.data;
			return newState;

		case _constants2.default.USERS_RECEIVED:
			newState['all'] = action.data;
			return newState;

		case _constants2.default.USER_CREATED:
			var array = newState.all ? Object.assign([], newState.all) : [];
			array.unshift(action.data);
			newState['all'] = array;
			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ "./src/stores/index.js":
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ })

/******/ });
//# sourceMappingURL=app.map