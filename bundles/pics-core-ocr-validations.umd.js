(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/router'), require('rxjs/operators'), require('@angular/common/http'), require('rxjs/internal/observable/throwError'), require('rxjs/internal/operators'), require('ngxf-uploader'), require('primeng/card')) :
    typeof define === 'function' && define.amd ? define('@pics-core/ocr-validations', ['exports', '@angular/core', 'rxjs', '@angular/router', 'rxjs/operators', '@angular/common/http', 'rxjs/internal/observable/throwError', 'rxjs/internal/operators', 'ngxf-uploader', 'primeng/card'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["ocr-validations"] = {}), global.ng.core, global.rxjs, global.ng.router, global.rxjs.operators, global.ng.common.http, global.rxjs["internal/observable/throwError"], global.rxjs["internal/operators"], global.ngxfUploader, global.i3));
})(this, (function (exports, i0, rxjs, i1, operators$1, i1$1, throwError, operators, ngxfUploader, i3) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    var OcrValidationsService = /** @class */ (function () {
        function OcrValidationsService() {
        }
        return OcrValidationsService;
    }());
    OcrValidationsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OcrValidationsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var OcrValidationServiceConfig = /** @class */ (function () {
        function OcrValidationServiceConfig() {
        }
        return OcrValidationServiceConfig;
    }());
    OcrValidationServiceConfig.EndPoint = {
        OCRValidate: {
            GetNewOcrData: '/ocr/analyzeDocument',
            CreateReferral: '/ref/referral/create',
            SaveClientDetail: '/ref/client/create',
            SaveContactDetail: '/ref/contact/create',
            SaveProviderDetail: '/ref/provider/search',
            SaveReferralProvider: '/ref/referral-provider/create',
            CreateAttachment: '/ref/attachment/create',
            UpdateImgaCatogory: '/ocr/imageCategory/',
            CancelRefferral: '/file/delete-file'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data, type) {
            if (type === void 0) { type = 'P'; }
            var permissionMap = {};
            if (type === 'P') {
                var flatData = __spreadArray([], __read(this.flat(data)));
                flatData.forEach(function (permission) {
                    permissionMap[permission.name] = permission.allowed;
                });
                this.setState(Object.assign(Object.assign({}, this.state), permissionMap));
            }
            else {
                data.forEach(function (permission) {
                    permissionMap['GALKP_' + permission.key] = permission.lookuprolepermissions;
                });
                this.setState(Object.assign(Object.assign({}, this.state), permissionMap));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state.permissions);
            else
                return rxjs.of(this.state.lookupPermissions);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            array.forEach(function (item) {
                result.push(item);
                if (item.permissions && Array.isArray(item.permissions)) {
                    result = result.concat(_this.flat(item.permissions));
                }
            });
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next();
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });

    var AuthURL = /** @class */ (function () {
        function AuthURL() {
        }
        return AuthURL;
    }());
    AuthURL.EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/page/organisation/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser'
            },
            permission: {
                permissionRoleById: '/app/permission/role/{id}',
                pagePermission: '/app/permission/page',
                pageLookupPermission: '/app/permission/page/lookup'
            },
            microstrategy: {
                login: '/microstrategy/login',
                getLibrary: '/microstrategy/library'
            }
        }
    };

    var HttpService = /** @class */ (function () {
        function HttpService(http, _storeservice) {
            var _this = this;
            this.http = http;
            this._storeservice = _storeservice;
            this.overrideUrl = true;
            this.baseUrl = '';
            this.headers = new i1$1.HttpHeaders()
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .set('role', 'role=CP_PUBLIC');
            this.showSpinner = new rxjs.BehaviorSubject(false);
            this.outsideShowSpinner = new rxjs.BehaviorSubject(false);
            // this.url = environment.apiHost; //url from config file or environments
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.url = _this.RBACORG['apiHost'] ? _this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                    _this.tokenKey = _this.RBACORG['tokenKey'];
                }
            });
            this.url1 = '';
        }
        HttpService.prototype.get = function (apiRoute) {
            return this.http.get("" + (this.url + apiRoute), {
                headers: this.getHttpHeaders()
            });
        };
        HttpService.prototype.post = function (apiRoute, body) {
            return this.http.post("" + (this.url + apiRoute), body, {
                headers: this.getHttpHeaders()
            });
        };
        HttpService.prototype.put = function (apiRoute, body) {
            return this.http.put("" + (this.url + apiRoute), body, {
                headers: this.getHttpHeaders()
            });
        };
        HttpService.prototype.patch = function (apiRoute, body) {
            return this.http.patch("" + (this.url + apiRoute), body, {
                headers: this.getHttpHeaders()
            });
        };
        HttpService.prototype.delete = function (apiRoute) {
            return this.http.delete("" + (this.url + apiRoute), {
                headers: this.getHttpHeaders()
            });
        };
        HttpService.prototype.getHttpHeaders = function () {
            return new i1$1.HttpHeaders().set('key', 'value');
        };
        HttpService.prototype.getAttachmentHttpHeaders = function (contentType) {
            return new i1$1.HttpHeaders().set('Content-Type', contentType);
        };
        HttpService.prototype.putUpload = function (apiRoute, body, contentType) {
            return this.http.put("" + apiRoute, body, { headers: this.getAttachmentHttpHeaders(contentType) });
        };
        HttpService.prototype.putupload2 = function (apiRoute, body, contenttype) {
            return this.http
                .put("" + (this.url1 + apiRoute), body, {
                headers: this.getAttachmentHttpHeaders(contenttype),
                observe: 'response'
            })
                .pipe(operators.map(function (data) {
                return data;
            }));
        };
        HttpService.prototype.getAutosuggest = function (url) {
            return this.http.get("" + url);
        };
        /**
         *
         * @param apiRoute
         * This function will download the stream file from the API service.
         * No HTTP required for this stream. So used Window.location.href to download the file
         */
        HttpService.prototype.getFormDownloaded = function (apiRoute) {
            window.location.href = "" + (this.url + apiRoute);
        };
        //common http service(optional)
        HttpService.prototype.handleError = function (error) {
            var _a, _b;
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Client-side errors
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // Server-side errors
                errorMessage = "Error Code: " + error.status + "\nMessage: " + (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message);
            }
            return throwError.throwError(errorMessage);
        };
        HttpService.prototype.getToken = function () {
            var token = this.tokenKey ? this.tokenKey : 'jwt-token';
            return sessionStorage.getItem(token);
        };
        return HttpService;
    }());
    HttpService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, deps: [{ token: i1__namespace$1.HttpClient }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HttpService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: HttpService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.HttpClient }, { type: DataStoreService }]; } });

    var AuthState = /** @class */ (function () {
        function AuthState() {
        }
        return AuthState;
    }());

    var AuthStore = /** @class */ (function (_super) {
        __extends(AuthStore, _super);
        function AuthStore(httpService) {
            var _this = _super.call(this, new AuthState()) || this;
            _this.httpService = httpService;
            return _this;
        }
        AuthStore.prototype.addAuthInfo = function (user) {
            this.setState(Object.assign(Object.assign({}, this.state), { user: user }));
        };
        AuthStore.prototype.getAuthInfo = function () {
            console.log(this.state);
            if (this.state.user) {
                return rxjs.of(this.state.user);
            }
            else {
                return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators$1.tap(function (_a) {
                    var _b = __read(_a, 1), user = _b[0];
                    return user;
                }));
            }
        };
        return AuthStore;
    }(Store));
    AuthStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

    var credentialsKey = 'jwt-token';
    /**
     * Provides storage for authentication credentials.
     * The Credentials interface should be replaced with proper implementation.
     */
    var CredentialsService = /** @class */ (function () {
        function CredentialsService() {
            this.token = null;
            var savedCredentials = sessionStorage.getItem(credentialsKey);
            if (savedCredentials) {
                this.token = savedCredentials;
            }
        }
        /**
         * Checks is the user is authenticated.
         * @return True if the user is authenticated.
         */
        CredentialsService.prototype.isAuthenticated = function () {
            return !!this.credentials;
        };
        Object.defineProperty(CredentialsService.prototype, "credentials", {
            /**
             * Gets the user credentials.
             * @return The user credentials or null if the user is not authenticated.
             */
            get: function () {
                return this.token;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Sets the user credentials.
         * The credentials may be persisted across sessions by setting the `remember` parameter to true.
         * Otherwise, the credentials are only persisted for the current session.
         * @param credentials The user credentials.
         * @param remember True to remember credentials across sessions.
         */
        CredentialsService.prototype.setCredentials = function (credentials) {
            this.token = credentials || null;
            if (credentials) {
                sessionStorage.setItem(credentialsKey, credentials);
            }
            else {
                sessionStorage.clear();
            }
        };
        return CredentialsService;
    }());
    CredentialsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CredentialsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var StorageService = /** @class */ (function () {
        function StorageService(Storage) {
            this.Storage = Storage;
        }
        StorageService.prototype.getItem = function (key) {
            return this.Storage.getItem(key);
        };
        StorageService.prototype.setItem = function (key, item) {
            return this.Storage.setItem(key, item);
        };
        StorageService.prototype.getObj = function (key, safe) {
            if (safe === void 0) { safe = true; }
            try {
                var item = this.getItem(key);
                return JSON.parse(item);
            }
            catch (e) {
                if (!safe) {
                    throw e;
                }
            }
        };
        StorageService.prototype.setObj = function (key, item) {
            return this.setItem(key, JSON.stringify(item));
        };
        StorageService.prototype.removeItem = function (key) {
            this.Storage.removeItem(key);
        };
        StorageService.prototype.clear = function () {
            this.Storage.clear();
        };
        return StorageService;
    }());

    var LocalService = /** @class */ (function (_super) {
        __extends(LocalService, _super);
        function LocalService() {
            return _super.call(this, window.sessionStorage) || this;
        }
        return LocalService;
    }(StorageService));
    LocalService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthService = /** @class */ (function () {
        function AuthService(injector, httpService, _router, store, credentialsService, localstore) {
            this.httpService = httpService;
            this._router = _router;
            this.store = store;
            this.credentialsService = credentialsService;
            this.localstore = localstore;
            this.orgInfo = new rxjs.BehaviorSubject('');
            this.currentOrgInfo = this.orgInfo.asObservable();
            this.currentMenu = new rxjs.BehaviorSubject('');
            this.currentMenuInfo = this.currentMenu.asObservable();
            this.alertService = injector.get(AlertService);
        }
        AuthService.prototype.feedOrgInfo = function (data) {
            this.orgInfo.next(data);
        };
        AuthService.prototype.getCurrentMenu = function (data) {
            this.currentMenu.next(data);
        };
        AuthService.prototype.getUserOrgList = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
        };
        AuthService.prototype.getUnNotified = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
        };
        AuthService.prototype.updateUnNotified = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
        };
        AuthService.prototype.updateWorkerAvailability = function (data) {
            return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
        };
        AuthService.prototype.getWorkerAvailability = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
        };
        AuthService.prototype.getMstrToken = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.login = function (email, password, otp) {
            var _this = this;
            var body = {
                email: email,
                password: password,
                secret: otp ? otp : ''
            };
            return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(operators$1.mergeMap(function (res) {
                if (res['data'] === 'MFA_CODE_SEND') {
                    return rxjs.of(res['data']);
                }
                _this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                return _this.getUserInfo();
            }));
        };
        AuthService.prototype.refreshToken = function () {
            var _this = this;
            var email = sessionStorage.getItem('email');
            var refreshToken = sessionStorage.getItem('refreshToken');
            var body = {
                email: email,
                refreshToken: refreshToken
            };
            return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(operators$1.mergeMap(function (res) {
                _this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                console.log('new token generated...', res['data'].idToken.jwtToken);
                return [res['data'].idToken.jwtToken];
            }));
        };
        AuthService.prototype.resetLoggedIn = function () {
            this.httpService
                .post(AuthURL.EndPoints.auth.user.logout, {
                email: sessionStorage.getItem('email')
            })
                .subscribe(function () {
                console.log('Logged in flag reset successful.');
            });
        };
        AuthService.prototype.logout = function () {
            this._router.navigate(['/login']);
            sessionStorage.clear();
            localStorage.clear();
        };
        AuthService.prototype.getUserInfo = function () {
            return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators$1.tap(function (_a) {
                var _b = __read(_a, 1), user = _b[0];
                // this.store.addAuthInfo(user['data']);
                return user;
            }));
        };
        AuthService.prototype.getUserRole = function (id) {
            return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.routeToDynamicPage = function (orgid) {
            return this.httpService
                .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
                .pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.getAuthMe = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
        };
        AuthService.prototype.ResetPassword = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
        };
        AuthService.prototype.getRoleKey = function () {
            var user = this.localstore.getObj('user');
            if (user && user.role) {
                return user.role.rolekey;
            }
        };
        AuthService.prototype.isAdmin = function () {
            return 'ADM' === this.getRoleKey();
        };
        AuthService.prototype.getOrgID = function () {
            var user = this.localstore.getObj('user');
            if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
                return user.userWorkInfo.organization.id;
            }
            else {
                return '';
            }
        };
        AuthService.prototype.conformMail = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
        };
        AuthService.prototype.changePassword = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
        };
        AuthService.prototype.setSharedMessage = function (data) {
            this.sharedInfo = data;
        };
        AuthService.prototype.getSharedMessage = function () {
            return this.sharedInfo;
        };
        // async checkDynamicPagePermission(pageId: any) {
        //   const dynamicPages = await this.getAuthorizedPages();
        //   // if (pageId) {
        //   //   this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
        //   //     if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
        //   //       this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
        //   //     } else {
        //   //       this.alertService.error(
        //   //         `You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`
        //   //       );
        //   //     }
        //   //   });
        //   // } else {
        //   //   this.alertService.error(
        //   //     'You don\'t have permissions to perform the following operations .Please Contact Administrator'
        //   //   );
        //   // }
        // }
        AuthService.prototype.getCurrentOrg = function () {
            return this.getUserOrgList()
                .toPromise()
                .then(function (response) {
                return response['data'][0].id;
            });
        };
        // async getAuthorizedPages() {
        //   const orgId = await this.getCurrentOrg();
        //   return this.pageHeaderService
        //     .getAuthorizedPages(orgId)
        //     .toPromise()
        //     .then(
        //       response => {
        //         const dynamicPage = response['data'].filter(page => {
        //           return (
        //             page.activeVersion &&
        //             (page.activeVersion.gridconfig || page.activeVersion.templatejson || this.getCustomPage(page))
        //           );
        //         });
        //         return dynamicPage.map(page => ({
        //           id: page.activeVersion.id,
        //           name: page.activeVersion.pagename,
        //           activeVersion: page.activeVersion
        //         }));
        //       },
        //       _error => this.alertService.error(AppConstants.errorMessage)
        //     );
        // }
        AuthService.prototype.getCustomPage = function (page) {
            if (page.activeVersion.tabconfig) {
                var routingTab = JSON.parse(page.activeVersion.tabconfig).filter(function (x) { return x.type === 'ROUTING'; });
                return routingTab.length && page;
            }
        };
        return AuthService;
    }());
    AuthService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, deps: [{ token: i0__namespace.Injector }, { token: HttpService }, { token: i1__namespace.Router }, { token: AuthStore }, { token: CredentialsService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: HttpService }, { type: i1__namespace.Router }, { type: AuthStore }, { type: CredentialsService }, { type: LocalService }]; } });

    var OcrValidationService = /** @class */ (function () {
        function OcrValidationService(httpService) {
            this.httpService = httpService;
            console.log('log');
        }
        OcrValidationService.prototype.getUpload = function (obj) {
            return this.httpService.post(OcrValidationServiceConfig.EndPoint.OCRValidate.GetNewOcrData, JSON.parse(obj));
        };
        return OcrValidationService;
    }());
    OcrValidationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationService, deps: [{ token: HttpService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OcrValidationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: HttpService }]; } });

    var OcrvalidationComponent = /** @class */ (function () {
        function OcrvalidationComponent(injector, ocrValidationService, _storeservice) {
            this.ocrValidationService = ocrValidationService;
            this._storeservice = _storeservice;
            this.isformIO = false;
            // formIO!: FormioComponent;
            this.formJson = [];
            this.RBACORG = new RBACINFO();
            this.isReadOnly = false;
            this.contentArray = [];
            this.ocrResponse = new i0.EventEmitter();
            this.authService = injector.get(AuthService);
            this.localstorage = injector.get(LocalService);
            this.dataStore = injector.get(DataStoreService);
            this.uploadService = injector.get(ngxfUploader.NgxfUploaderService);
            this.alertService = injector.get(AlertService);
            this.triggerRefresh = new i0.EventEmitter();
        }
        OcrvalidationComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Profile');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    if (_this.environment) {
                        var obj = _this.localstorage.getObj('OCRObj');
                        _this.getTemplate(_this.currenttemplateResult);
                        _this.getUpload(obj);
                    }
                }
            });
        };
        OcrvalidationComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        OcrvalidationComponent.prototype.getTemplate = function (result) {
            var _a, _b;
            if (result) {
                this.fromTitle = ((_a = result.data) === null || _a === void 0 ? void 0 : _a.pagename) ? (_b = result.data) === null || _b === void 0 ? void 0 : _b.pagename : '';
                this.dataStore.setData('title', this.fromTitle);
                if (result.data.templatejson) {
                    this.isformIO = true;
                    result.data.templatejson = result.data.templatejson.replaceAll('{sourceid}', this.sourceid);
                    this.tableschemaconfig = JSON.parse(result.data.tableschemaconfig);
                    this.duplicateTableSchemaconfig = Object.assign({}, this.tableschemaconfig);
                    this.isOcrForm = this.tableschemaconfig.ocrchecked;
                    this.documentType = this.tableschemaconfig.selectedDocumentType;
                    this.jsonForm = {
                        components: JSON.parse(result.data.templatejson).components.filter(function (component) { return component.key !== 'submit'; })
                    };
                }
            }
        };
        OcrvalidationComponent.prototype.getUpload = function (obj) {
            var _this = this;
            this.ocrValidationService.getUpload(obj).subscribe(function (res) {
                if (res && res.data) {
                    var resData = res.data;
                    var imageCategory = resData === null || resData === void 0 ? void 0 : resData.imageCategory;
                    _this.ocrDocumentDetails = imageCategory === null || imageCategory === void 0 ? void 0 : imageCategory.id_json[0];
                    var fileUrl = resData === null || resData === void 0 ? void 0 : resData.fileUrl;
                    _this.imgUrl = fileUrl === null || fileUrl === void 0 ? void 0 : fileUrl.source.url;
                    _this.ocrFormPatching();
                }
                else {
                    _this.alertService.error('Something Went Wrong!');
                }
            }, function (err) { return console.log(err); });
        };
        OcrvalidationComponent.prototype.ocrFormPatching = function () {
            var _this = this;
            var ArrayOCR = this.tableschemaconfig.fieldmapping.filter(function (element) { return element.ocrkey; });
            ArrayOCR === null || ArrayOCR === void 0 ? void 0 : ArrayOCR.forEach(function (res) {
                if (_this.ocrDocumentDetails) {
                    var documentValue = Object.keys(_this.ocrDocumentDetails);
                    documentValue === null || documentValue === void 0 ? void 0 : documentValue.forEach(function (element) {
                        if (element.toLowerCase() == res.ocrkey.toLowerCase()) {
                            _this.submitionData.data[res.field] =
                                res.ocrkey == 'date_of_birth'
                                    ? new Date(_this.ocrDocumentDetails[element])
                                    : _this.ocrDocumentDetails[element];
                        }
                    });
                }
            });
            var json = this.jsonForm.components[0].components;
            // ArrayOCR.forEach(({ field }) => {
            //   const formJson = json.filter(res => res.key.includes(field));
            //   this.formJson.push(...formJson);
            // });
            this.jsonForm.components[0].components = this.formJson;
            this.triggerRefresh.emit({
                property: 'form',
                value: this.jsonForm
            });
        };
        OcrvalidationComponent.prototype.backToForm = function () {
            this.ocrResponse.emit(this.submitionData);
        };
        return OcrvalidationComponent;
    }());
    OcrvalidationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrvalidationComponent, deps: [{ token: i0__namespace.Injector }, { token: OcrValidationService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OcrvalidationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: { formResponseData: "formResponseData", currenttemplateResult: "currenttemplateResult", submitionData: "submitionData" }, outputs: { ocrResponse: "ocrResponse" }, viewQueries: [{ propertyName: "formJson", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0__namespace, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <!-- <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"></formio> -->\n          </div>\n          <button type=\"button\" class=\"btn btn-cancel\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], components: [{ type: i3__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrvalidationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ocrvalidation',
                        templateUrl: './ocrvalidation.component.html',
                        styleUrls: ['./ocrvalidation.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: OcrValidationService }, { type: DataStoreService }]; }, propDecorators: {
            // formIO!: FormioComponent;
            formJson: [{
                    type: i0.ViewChild,
                    args: ['formIO']
                }], formResponseData: [{
                    type: i0.Input
                }], currenttemplateResult: [{
                    type: i0.Input
                }], submitionData: [{
                    type: i0.Input
                }], ocrResponse: [{
                    type: i0.Output
                }]
        } });

    var OcrValidationsComponent = /** @class */ (function () {
        function OcrValidationsComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        OcrValidationsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.ocrEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
            });
        };
        return OcrValidationsComponent;
    }());
    OcrValidationsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OcrValidationsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrValidationsComponent, selector: "lib-ocr-validations", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", ocrEvent: "ocrEvent" }, ngImport: i0__namespace, template: "\n   <lib-ocrvalidation></lib-ocrvalidation>\n  ", isInline: true, components: [{ type: OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: ["formResponseData", "currenttemplateResult", "submitionData"], outputs: ["ocrResponse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ocr-validations',
                        template: "\n   <lib-ocrvalidation></lib-ocrvalidation>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], ocrEvent: [{
                    type: i0.Input
                }] } });

    var OcrValidationsModule = /** @class */ (function () {
        function OcrValidationsModule() {
        }
        return OcrValidationsModule;
    }());
    OcrValidationsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    OcrValidationsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsModule, declarations: [OcrValidationsComponent,
            OcrvalidationComponent], imports: [i3.CardModule], exports: [OcrValidationsComponent] });
    OcrValidationsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsModule, providers: [HttpService, PermissionStore, DataStoreService, AuthService, AuthStore, AlertService], imports: [[
                i3.CardModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OcrValidationsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            OcrValidationsComponent,
                            OcrvalidationComponent
                        ],
                        imports: [
                            i3.CardModule,
                        ],
                        providers: [HttpService, PermissionStore, DataStoreService, AuthService, AuthStore, AlertService],
                        exports: [
                            OcrValidationsComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of ocr-validations
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OcrValidationsComponent = OcrValidationsComponent;
    exports.OcrValidationsModule = OcrValidationsModule;
    exports.OcrValidationsService = OcrValidationsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-ocr-validations.umd.js.map
