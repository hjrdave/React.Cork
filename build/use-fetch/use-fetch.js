"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFetch;
var _react = _interopRequireDefault(require("react"));
var _useNonInitialEffect = _interopRequireDefault(require("../use-non-initial-effect"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function useFetch(url, options) {
  var _Object$entries;
  var processRes = function processRes(res, bodyType) {
    var _resBody;
    var resBody = (_resBody = {}, _defineProperty(_resBody, 'arrayBuffer', function arrayBuffer() {
      return res.arrayBuffer();
    }), _defineProperty(_resBody, 'blob', function blob() {
      return res.blob();
    }), _defineProperty(_resBody, 'formData', function formData() {
      return res.formData();
    }), _defineProperty(_resBody, 'json', function json() {
      return res.json();
    }), _defineProperty(_resBody, 'text', function text() {
      return res.text();
    }), _resBody);
    return resBody[bodyType ? bodyType : 'json']();
  };
  var parseBody = function parseBody(body, type) {
    if (type === 'json' || type === undefined) {
      var bodyData = JSON.stringify(body);
      return bodyData;
    }
    ;
    return body;
  };
  var _React$useState = _react["default"].useState(function () {
      return options === null || options === void 0 ? void 0 : options.interceptor;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    interceptor = _React$useState2[0];
  var _React$useState3 = _react["default"].useState(options !== null && options !== void 0 && options.method ? options.method : 'GET'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    method = _React$useState4[0],
    setMethod = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(parseBody(options === null || options === void 0 ? void 0 : options.body, options === null || options === void 0 ? void 0 : options.bodyType)),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    body = _React$useState6[0],
    setBody = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(options === null || options === void 0 ? void 0 : options.headers),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    headers = _React$useState8[0],
    setHeaders = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(headers ? Object.fromEntries((_Object$entries = Object.entries(headers)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];
      return k !== 'Content-Type';
    })) : headers),
    _React$useState10 = _slicedToArray(_React$useState9, 1),
    postHeaders = _React$useState10[0];
  var _React$useState11 = _react["default"].useState((options === null || options === void 0 ? void 0 : options.timeout) !== undefined ? options.timeout : 20000),
    _React$useState12 = _slicedToArray(_React$useState11, 1),
    fetchTimeout = _React$useState12[0];
  var _React$useState13 = _react["default"].useState([]),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    triggerFetch = _React$useState14[0],
    setTriggerFetch = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(url),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    mainURL = _React$useState16[0],
    setMainURL = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(''),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    routeURL = _React$useState18[0],
    setRouteURL = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(options === null || options === void 0 ? void 0 : options.defaultRes),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    response = _React$useState20[0],
    setResponse = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    error = _React$useState22[0],
    setError = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(false),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    loading = _React$useState24[0],
    setLoading = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(new AbortController()),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    abortController = _React$useState26[0],
    setAbortController = _React$useState26[1];
  var onTimeout = function onTimeout() {
    return options !== null && options !== void 0 && options.onTimeout ? options.onTimeout() : null;
  };
  var _fetch = function () {
    var _ref3 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(params) {
      var fetchHeaders, data, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fetchHeaders = (params === null || params === void 0 ? void 0 : params.method) === 'POST' ? postHeaders : headers;
            data = fetch("".concat(mainURL).concat(params.route ? params.route : ''), _objectSpread(_objectSpread({}, options), {}, {
              signal: params === null || params === void 0 ? void 0 : params.signal,
              method: params === null || params === void 0 ? void 0 : params.method,
              body: params === null || params === void 0 ? void 0 : params.body,
              headers: fetchHeaders
            }));
            _context.next = 4;
            return data;
          case 4:
            res = _context.sent;
            return _context.abrupt("return", res);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function _fetch(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var fetchEvent = function () {
    var _ref4 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(params) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!interceptor) {
              _context2.next = 4;
              break;
            }
            _context2.next = 3;
            return interceptor(url, options);
          case 3:
            return _context2.abrupt("return", _fetch(params));
          case 4:
            return _context2.abrupt("return", _fetch(params));
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function fetchEvent(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var request = {
    get: function () {
      var _get = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(route, options) {
        var res, processedRes;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetchEvent({
                route: route,
                method: 'GET'
              });
            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return processRes(res, options !== null && options !== void 0 && options.bodyType ? options.bodyType : 'json');
            case 5:
              processedRes = _context3.sent;
              return _context3.abrupt("return", processedRes);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function get(_x4, _x5) {
        return _get.apply(this, arguments);
      }
      return get;
    }(),
    post: function () {
      var _post = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4(route, body, options) {
        var res, processedRes;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetchEvent({
                route: route,
                method: 'POST',
                body: body
              });
            case 2:
              res = _context4.sent;
              _context4.next = 5;
              return processRes(res, options !== null && options !== void 0 && options.bodyType ? options.bodyType : 'json');
            case 5:
              processedRes = _context4.sent;
              return _context4.abrupt("return", processedRes);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function post(_x6, _x7, _x8) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  };
  var reset = function reset(setRouteTo) {
    abort();
    setMethod(options !== null && options !== void 0 && options.method ? options === null || options === void 0 ? void 0 : options.method : 'GET');
    setRouteURL(setRouteTo ? setRouteTo : '');
    setBody(parseBody(options === null || options === void 0 ? void 0 : options.body, options === null || options === void 0 ? void 0 : options.bodyType));
  };
  var fetchData = function fetchData() {
    reset(typeof (options === null || options === void 0 ? void 0 : options.fetchOnMount) === 'string' ? options === null || options === void 0 ? void 0 : options.fetchOnMount : '');
    setTriggerFetch([]);
  };
  var get = function get(route) {
    abort();
    setMethod('GET');
    setRouteURL(route ? route : '');
    setBody(parseBody(options === null || options === void 0 ? void 0 : options.body, options === null || options === void 0 ? void 0 : options.bodyType));
    setTriggerFetch([]);
  };
  var post = function post(route, body) {
    abort();
    setMethod('POST');
    setRouteURL(route);
    setBody(parseBody(body ? body : options === null || options === void 0 ? void 0 : options.body, options === null || options === void 0 ? void 0 : options.bodyType));
    setTriggerFetch([]);
  };
  var abort = function abort() {
    return abortController.abort();
  };
  var modelResponseData = function modelResponseData(res) {
    if (options !== null && options !== void 0 && options.modelResData && res) {
      var mapResDataTo = options !== null && options !== void 0 && options.mapResDataTo ? options === null || options === void 0 ? void 0 : options.mapResDataTo : 'mappedResult';
      var mappedData = options.modelResData(res);
      return _objectSpread(_objectSpread({}, res), _defineProperty({}, mapResDataTo, mappedData));
    }
    return res;
  };
  var getFetch = function () {
    var _ref5 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(signal) {
      var res, processedRes;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setLoading(true);
            setError(null);
            _context5.next = 5;
            return fetchEvent({
              route: routeURL,
              method: method,
              signal: signal,
              body: body,
              bodyType: options === null || options === void 0 ? void 0 : options.bodyType
            });
          case 5:
            res = _context5.sent;
            _context5.next = 8;
            return processRes(res, options !== null && options !== void 0 && options.bodyType ? options.bodyType : 'json');
          case 8:
            processedRes = _context5.sent;
            if (res.ok) {
              setResponse(modelResponseData(processedRes));
              setLoading(false);
            } else if (res.ok === false) {
              setLoading(false);
              if ((res === null || res === void 0 ? void 0 : res.statusText.length) > 0) {
                setError(res === null || res === void 0 ? void 0 : res.statusText);
              } else {
                setError("Server returned status ".concat(res === null || res === void 0 ? void 0 : res.status));
              }
            }
            _context5.next = 17;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            setError(_context5.t0);
            setLoading(false);
            console.error(_context5.t0);
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 12]]);
    }));
    return function getFetch(_x9) {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _useNonInitialEffect["default"])(function () {
    var abortInstance = new AbortController();
    setAbortController(abortInstance);
    getFetch(abortInstance.signal);
    if (typeof fetchTimeout === 'number') {
      setTimeout(function () {
        abortInstance.abort();
        onTimeout();
      }, fetchTimeout);
    }
    return function cleanup() {
      abortInstance.abort();
    };
  }, [triggerFetch]);
  (0, _useNonInitialEffect["default"])(function () {
    setMainURL(mainURL);
  }, [mainURL]);
  (0, _useNonInitialEffect["default"])(function () {
    setHeaders(options === null || options === void 0 ? void 0 : options.headers);
    setBody(parseBody(options === null || options === void 0 ? void 0 : options.body, options === null || options === void 0 ? void 0 : options.bodyType));
  }, [options === null || options === void 0 ? void 0 : options.body, options === null || options === void 0 ? void 0 : options.headers]);
  _react["default"].useEffect(function () {
    if (options !== null && options !== void 0 && options.onMount) {
      options === null || options === void 0 ? void 0 : options.onMount();
    }
    if (options !== null && options !== void 0 && options.fetchOnMount) {
      if (typeof (options === null || options === void 0 ? void 0 : options.fetchOnMount) === 'string') {
        setRouteURL(options === null || options === void 0 ? void 0 : options.fetchOnMount);
      }
      fetchData();
    }
  }, []);
  return {
    response: response,
    error: error,
    loading: loading,
    fetchData: fetchData,
    get: get,
    post: post,
    abort: abort,
    request: request
  };
}
;
module.exports = exports.default;