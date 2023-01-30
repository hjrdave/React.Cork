"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var useNumber = function useNumber() {
  var isInRange = function isInRange(value, range) {
    var min = range[0];
    var max = range[1];
    if (value !== undefined) {
      if (max !== undefined && min !== undefined) {
        return value >= min && value <= max ? true : false;
      } else if (max !== undefined) {
        return value <= max ? true : false;
      } else if (min !== undefined) {
        return value >= min ? true : false;
      } else {
        return true;
      }
    }
    return false;
  };
  var trimFloat = function trimFloat(value, _float) {
    var parsedFloat = Number(Number(value.toString()).toFixed(_float));
    if (!Number.isNaN(parsedFloat)) {
      return parsedFloat;
    }
    return 0;
  };
  var convertToNum = function convertToNum(value) {
    if (typeof value === 'number') {
      return value;
    } else if (typeof value === 'string') {
      var parsedNum = Number(value);
      if (!Number.isNaN(parsedNum)) {
        return parsedNum;
      }
      return 0;
    }
    ;
    return 0;
  };
  var countDigits = function countDigits(value) {
    var stringify = String(Math.floor(value));
    return stringify.length;
  };
  return {
    isInRange: isInRange,
    trimFloat: trimFloat,
    convertToNum: convertToNum,
    countDigits: countDigits
  };
};
var _default = useNumber;
exports["default"] = _default;
module.exports = exports.default;