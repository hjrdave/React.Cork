"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var useDateTime = function useDateTime() {
  var formatDate = function formatDate(date) {
    if (date instanceof Date) {
      var _month = (date === null || date === void 0 ? void 0 : date.getMonth()) + 1;
      var _day = date === null || date === void 0 ? void 0 : date.getDate();
      var _year = date === null || date === void 0 ? void 0 : date.getUTCFullYear().toString();
      var formattedMonth = _month < 10 ? "0".concat(_month) : _month;
      var formattedDay = _day < 10 ? "0".concat(_day) : _day;
      var formattedDate = "".concat(formattedMonth, "/").concat(formattedDay, "/").concat(_year);
      return formattedDate;
    }
    return undefined;
  };
  var today = new Date();
  var month = new Date().getMonth();
  var day = new Date().getDate();
  var year = new Date().getUTCFullYear();
  return {
    formatDate: formatDate,
    today: today,
    month: month,
    day: day,
    year: year
  };
};
var _default = useDateTime;
exports["default"] = _default;
module.exports = exports.default;