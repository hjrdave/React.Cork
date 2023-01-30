"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var useObject = function useObject() {
  var isFile = function isFile(param) {
    return 'File' in window && param instanceof File ? true : false;
  };
  var isBlob = function isBlob(param) {
    return 'Blob' in window && param instanceof Blob ? true : false;
  };
  var isObjectLiteral = function isObjectLiteral(param) {
    return !!param && param.constructor === Object;
  };
  var chunkArray = function chunkArray(arr, count) {
    return Array.from({
      length: Math.ceil(arr.length / count)
    }, function (v, i) {
      return arr.slice(i * count, i * count + count);
    });
  };
  var windowArray = function windowArray(chunkedArr, activeIndex) {
    var active = activeIndex ? activeIndex : 0;
    var count = chunkedArr.length !== 0 ? chunkedArr.length - 1 : 0;
    var previous = chunkedArr[active - 1];
    var current = chunkedArr[active];
    var next = chunkedArr[active + 1];
    if (!(active > count)) {
      if (active > 0) {
        return [].concat(_toConsumableArray(previous), _toConsumableArray(current));
        ;
      }
      if (activeIndex === 0 && chunkedArr.length > 1) {
        return [].concat(_toConsumableArray(current), _toConsumableArray(next));
      }
    }
    return current;
  };
  var areEqualShallow = function areEqualShallow(obj1, obj2) {
    for (var key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };
  var isEmpty = function isEmpty(obj) {
    if (obj === null) {
      return true;
    }
    if (Array.isArray(obj)) {
      return obj.length === 0 ? true : false;
    }
    return Object.keys(obj).length === 0 ? true : false;
  };
  return {
    isObjectLiteral: isObjectLiteral,
    chunkArray: chunkArray,
    windowArray: windowArray,
    areEqualShallow: areEqualShallow,
    isEmpty: isEmpty,
    isFile: isFile,
    isBlob: isBlob
  };
};
var _default = useObject;
exports["default"] = _default;
module.exports = exports.default;