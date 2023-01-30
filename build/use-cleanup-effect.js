"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useCleanupEffect = function useCleanupEffect(effect) {
  _react["default"].useEffect(function () {
    return function () {
      effect();
    };
  }, []);
};
var _default = useCleanupEffect;
exports["default"] = _default;
module.exports = exports.default;