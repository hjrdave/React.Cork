"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useNonInitialEffect = function useNonInitialEffect(effect, deps) {
  var initialRender = _react["default"].useRef(true);
  _react["default"].useEffect(function () {
    var effectReturns = function effectReturns() {};
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }
    if (effectReturns && typeof effectReturns === "function") {
      return effectReturns;
    }
  }, deps);
};
var _default = useNonInitialEffect;
exports["default"] = _default;
module.exports = exports.default;