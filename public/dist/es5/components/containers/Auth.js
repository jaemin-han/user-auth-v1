"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Auth = (function (Component) {
    function Auth() {
        _classCallCheck(this, Auth);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Auth, Component);

    _prototypeProperties(Auth, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-6" },
                            React.createElement(
                                "h1",
                                null,
                                "Register"
                            ),
                            React.createElement(
                                "form",
                                null,
                                React.createElement("input", { className: "form-control", type: "text", placeholder: "Username" }),
                                React.createElement("br", null),
                                React.createElement("input", { className: "form-control", type: "passworld", placeholder: "Password" }),
                                React.createElement("br", null),
                                React.createElement(
                                    "button",
                                    null,
                                    "Join"
                                )
                            ),
                            React.createElement(
                                "h1",
                                null,
                                "Login"
                            ),
                            React.createElement(
                                "form",
                                null,
                                React.createElement("input", { className: "form-control", type: "text", placeholder: "Username" }),
                                React.createElement("br", null),
                                React.createElement("input", { className: "form-control", type: "passworld", placeholder: "Password" }),
                                React.createElement("br", null),
                                React.createElement(
                                    "button",
                                    null,
                                    "Login"
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Auth;
})(Component);

module.exports = Auth;