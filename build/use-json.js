"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _xmltojson = _interopRequireDefault(require("xmltojson"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useJSON = function useJSON() {
  var convertFromXML = function convertFromXML(xmlString) {
    return JSON.stringify(_xmltojson["default"].parseString(xmlString, {}));
  };
  return {
    convertFromXML: convertFromXML
  };
};
var _default = useJSON;
exports["default"] = _default;
module.exports = exports.default;