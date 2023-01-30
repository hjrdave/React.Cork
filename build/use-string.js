"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _useRegex2 = _interopRequireDefault(require("./use-regex"));
var _useObject2 = _interopRequireDefault(require("./use-object"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useString = function useString() {
  var _useObject = (0, _useObject2["default"])(),
    isFile = _useObject.isFile;
  var _useRegex = (0, _useRegex2["default"])(),
    escapeRegExp = _useRegex.escapeRegExp,
    noLeadingZero = _useRegex.noLeadingZero;
  var convertToSrcString = function convertToSrcString(param) {
    return isFile(param) ? URL.createObjectURL(param) : typeof param === 'string' ? param : '';
  };
  var removeLeadingZero = function removeLeadingZero(value) {
    if (typeof value === 'string') {
      var _value$split = value.split("."),
        _value$split2 = _slicedToArray(_value$split, 2),
        wholeNumSeg = _value$split2[0],
        floatSeg = _value$split2[1];
      var trimmedNum = String(Number(wholeNumSeg));
      return floatSeg !== undefined ? "".concat(trimmedNum, ".").concat(floatSeg) : trimmedNum;
    }
    ;
    return '';
  };
  var isEqual = function isEqual(string1, string2) {
    return (string1 === null || string1 === void 0 ? void 0 : string1.toLocaleLowerCase()) === (string2 === null || string2 === void 0 ? void 0 : string2.toLocaleLowerCase()) ? true : false;
  };
  var removeSpecialChars = function removeSpecialChars(value, options) {
    var allow = options !== null && options !== void 0 && options.allow ? escapeRegExp(options.allow) : '';
    var regex = new RegExp("[^" + allow + "a-zA-Z0-9]", 'gm');
    return value.replace(regex, '');
  };
  var hasSpecialChars = function hasSpecialChars(value, options) {
    var ignore = options !== null && options !== void 0 && options.ignore ? escapeRegExp(options.ignore) : '';
    var regex = new RegExp("[^" + ignore + "a-zA-Z0-9]", 'gm');
    var doSpecialCharsExist = regex.test(value);
    return doSpecialCharsExist;
  };
  var trunicate = function trunicate(value, maxLength) {
    var newValue = value.substring(0, maxLength !== undefined ? maxLength : 100);
    return value.length !== newValue.length ? "".concat(newValue, "...") : newValue;
  };
  var trimFloat = function trimFloat(value, _float) {
    if (typeof value === 'string') {
      var _value$split3 = value.split("."),
        _value$split4 = _slicedToArray(_value$split3, 2),
        wholeNumSeg = _value$split4[0],
        floatSeg = _value$split4[1];
      if (floatSeg !== undefined) {
        var joinedValue = "".concat(wholeNumSeg, ".").concat(floatSeg.substring(0, _float));
        return joinedValue;
      }
      return wholeNumSeg;
    }
    return '';
  };
  return {
    removeLeadingZero: removeLeadingZero,
    isEqual: isEqual,
    convertToSrcString: convertToSrcString,
    removeSpecialChars: removeSpecialChars,
    hasSpecialChars: hasSpecialChars,
    trunicate: trunicate,
    trimFloat: trimFloat
  };
};
var _default = useString;
exports["default"] = _default;
module.exports = exports.default;