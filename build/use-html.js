"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _server = _interopRequireDefault(require("react-dom/server"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _dompurify = _interopRequireDefault(require("dompurify"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useHTML = function useHTML() {
  var bindData = function bindData(htmlString, data, fallbackData) {
    var _htmlString$match, _htmlString$match$map;
    var bindedHtmlString = htmlString;
    var params = (_htmlString$match = htmlString.match(/{{([^{{}}]+)}}/g)) === null || _htmlString$match === void 0 ? void 0 : (_htmlString$match$map = _htmlString$match.map(function (param) {
      return param.replace(/[{{}}]/g, '');
    })) === null || _htmlString$match$map === void 0 ? void 0 : _htmlString$match$map.filter(function (param) {
      return Object.hasOwn(data, param);
    });
    params === null || params === void 0 ? void 0 : params.map(function (param) {
      var value = data[param].length > 0 ? data[param] : fallbackData[param];
      var regex = new RegExp("({{".concat(param, "}})"), 'g');
      bindedHtmlString = bindedHtmlString.replace(regex, value);
    });
    return bindedHtmlString;
  };
  var parseHTMLString = function parseHTMLString(htmlString) {
    var cleanHtmlString = _dompurify["default"].sanitize(htmlString, {
      USE_PROFILES: {
        html: true
      }
    });
    var html = (0, _htmlReactParser["default"])(cleanHtmlString);
    return html;
  };
  var placeHolderHTMLFrom = function placeHolderHTMLFrom(htmlString, placeHolder) {
    var bindedHtmlString = htmlString;
    var regex = new RegExp("{{([^{{}}]+)}}", 'g');
    bindedHtmlString = bindedHtmlString.replace(regex, placeHolder);
    return parseHTMLString(bindedHtmlString);
  };
  var htmlFrom = function htmlFrom(htmlString, options) {
    if (options !== null && options !== void 0 && options.bindData) {
      var bindedString = bindData(htmlString, options === null || options === void 0 ? void 0 : options.bindData, options !== null && options !== void 0 && options.fallBackBindData ? options === null || options === void 0 ? void 0 : options.fallBackBindData : options === null || options === void 0 ? void 0 : options.bindData);
      return parseHTMLString(bindedString);
    } else {
      return parseHTMLString(htmlString);
    }
  };
  var JSXToHTML = function JSXToHTML(Comp, props) {
    if (Comp && props !== undefined) {
      return _server["default"].renderToStaticMarkup(Comp(props));
    }
    return '';
  };
  return {
    htmlFrom: htmlFrom,
    placeHolderHTMLFrom: placeHolderHTMLFrom,
    bindData: bindData,
    parseHTMLString: parseHTMLString,
    JSXToHTML: JSXToHTML
  };
};
var _default = useHTML;
exports["default"] = _default;
module.exports = exports.default;