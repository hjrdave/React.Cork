"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useDebounce = function useDebounce(fn, delay) {
  var debouncedFn = function debouncedFn(fn, delay) {
    var timeout;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        fn.apply(context, args);
      }, delay);
    };
  };
  return _react["default"].useCallback(debouncedFn(function () {
    return fn.apply(void 0, arguments);
  }, delay), [delay]);
};
var _default = useDebounce;
exports["default"] = _default;
module.exports = exports.default;