"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var useRegex = function useRegex(options) {
  var _options$noSpecialCha;
  var allow = options === null || options === void 0 ? void 0 : (_options$noSpecialCha = options.noSpecialChars) === null || _options$noSpecialCha === void 0 ? void 0 : _options$noSpecialCha.allow;
  var noSpecialChars = allow ? new RegExp("[^" + allow + "a-zA-Z0-9]", 'gm') : new RegExp("[^a-zA-Z0-9]", 'gm');
  var noLeadingZero = /\b0+/g;
  var escapeRegExp = function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
  return {
    noSpecialChars: noSpecialChars,
    noLeadingZero: noLeadingZero,
    escapeRegExp: escapeRegExp
  };
};
var _default = useRegex;
exports["default"] = _default;
module.exports = exports.default;