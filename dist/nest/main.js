/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_7__);








function bootstrap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        console.log('开始启动环境 ====》', process.env.NODE_ENV);
        const server = express__WEBPACK_IMPORTED_MODULE_5__();
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_3__.NestFactory.create(_app_module__WEBPACK_IMPORTED_MODULE_4__.AppModule, new _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_7__.ExpressAdapter(server));
        app.use(compression__WEBPACK_IMPORTED_MODULE_6__());
        app.useStaticAssets(path__WEBPACK_IMPORTED_MODULE_2__.resolve('./dist/angular'));
        app.useStaticAssets(path__WEBPACK_IMPORTED_MODULE_2__.resolve('./upload'));
        app.set('etag', false);
        app.enableCors();
        yield app.init();
        http__WEBPACK_IMPORTED_MODULE_1__.createServer(server).listen(8002);
        // if (process.env.NODE_ENV === 'production') {
        //     https.createServer({
        //         // key: fs.readFileSync(path.resolve('./static/ssl/zugeliang.com.key')),
        //         // cert: fs.readFileSync(path.resolve('./static/ssl/zugeliang.com.crt')),
        //     }, server).listen(8002);
        // }
    });
}
bootstrap();


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");;

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("http");;

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("path");;

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/core");;

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => /* binding */ AppModule
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filter_not_found_exceptions_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [
            _common_common_module__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigModule.forRoot({
                envFilePath: path__WEBPACK_IMPORTED_MODULE_3__.resolve(`./static/env/${process.env.NODE_ENV || 'development'}.env`),
                isGlobal: true
            })
        ],
        controllers: [],
        providers: [
            {
                provide: _nestjs_core__WEBPACK_IMPORTED_MODULE_4__.APP_FILTER,
                useClass: _filter_not_found_exceptions_filter__WEBPACK_IMPORTED_MODULE_5__.NotFoundExceptionFilter,
            },
        ],
    })
], AppModule);



/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/common");;

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/config");;

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundExceptionFilter": () => /* binding */ NotFoundExceptionFilter
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



let NotFoundExceptionFilter = class NotFoundExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.setHeader('Cache-Control', 'no-cache');
        response.status(200);
        // response.location('/pages/404');
        response.sendFile(path__WEBPACK_IMPORTED_MODULE_2__.resolve('./dist/angular/index.html'));
    }
};
NotFoundExceptionFilter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Catch)(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.NotFoundException)
], NotFoundExceptionFilter);



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonModule": () => /* binding */ CommonModule
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_api_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _service_format_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _controller_mock_mock_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _controller_login_login_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var _controller_upload_upload_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_11__);












let CommonModule = class CommonModule {
};
CommonModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpModule,
            _nestjs_config__WEBPACK_IMPORTED_MODULE_11__.ConfigModule,
            _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5__.MulterModule.register({
                dest: './upload',
            }),
        ],
        controllers: [
            _controller_api_controller__WEBPACK_IMPORTED_MODULE_2__.ApiController,
            _controller_mock_mock_controller__WEBPACK_IMPORTED_MODULE_8__.MockController,
            _controller_login_login_controller__WEBPACK_IMPORTED_MODULE_9__.LoginController,
            _controller_upload_upload_controller__WEBPACK_IMPORTED_MODULE_10__.UploadController
        ],
        providers: [
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
            _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__.ReadWriteService,
            _service_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService,
            _service_format_service__WEBPACK_IMPORTED_MODULE_7__.FormatService
        ],
        exports: [
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
            _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__.ReadWriteService,
            _service_message_service__WEBPACK_IMPORTED_MODULE_6__.MessageService,
            _service_format_service__WEBPACK_IMPORTED_MODULE_7__.FormatService
        ],
    })
], CommonModule);



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiController": () => /* binding */ ApiController
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _interceptor_zgl_api_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _service_read_write_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;








let ApiController = class ApiController {
    constructor(api, rw, messageService) {
        this.api = api;
        this.rw = rw;
        this.messageService = messageService;
    }
    // 兼容下原请求
    loginGet(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$get(request).toPromise();
            return res && res.data || res;
        });
    }
    bossGet(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$get(request).toPromise();
            return res && res.data || res;
        });
    }
    bossPost(postParams, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$post(request, postParams).toPromise();
            if (res && res.data && res.data.code === 0) {
                const reqUrl = request.header('X-Url') || request.header('X-Code');
            }
            return res && res.data || res;
        });
    }
    putPost(postParams, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$put(request, postParams).toPromise();
            return res && res.data || res;
        });
    }
    deleteBoss(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$delete(request).toPromise();
            return res && res.data || res;
        });
    }
    formPost(postParams, request, files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$form(request, postParams, files).toPromise();
            return res && res.data || res;
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)('api/loginIn'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _a : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], ApiController.prototype, "loginGet", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)('api/boss'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _b : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], ApiController.prototype, "bossGet", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('api/boss'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object, typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _c : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], ApiController.prototype, "bossPost", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Put)('api/boss'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object, typeof (_d = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _d : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], ApiController.prototype, "putPost", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Delete)('api/boss'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_e = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _e : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], ApiController.prototype, "deleteBoss", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('api/forms'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UseInterceptors)((0,_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_5__.FilesInterceptor)('file')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(2, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UploadedFiles)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object, typeof (_f = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _f : Object, Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], ApiController.prototype, "formPost", null);
ApiController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UseInterceptors)(new _interceptor_zgl_api_interceptor__WEBPACK_IMPORTED_MODULE_4__.ZglApiInterceptor()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Inject)(_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_g = typeof _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService !== "undefined" && _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService) === "function" ? _g : Object, typeof (_h = typeof _service_read_write_service__WEBPACK_IMPORTED_MODULE_6__.ReadWriteService !== "undefined" && _service_read_write_service__WEBPACK_IMPORTED_MODULE_6__.ReadWriteService) === "function" ? _h : Object, typeof (_j = typeof _service_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService !== "undefined" && _service_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService) === "function" ? _j : Object])
], ApiController);



/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => /* binding */ ApiService
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qiniu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var qiniu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qiniu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_9__);
var _a, _b, _c;










// 基础service---不允许调用其他除config外的service
let ApiService = class ApiService {
    constructor(httpService, configService, messageService) {
        this.httpService = httpService;
        this.configService = configService;
        this.messageService = messageService;
    }
    handerError(postInfo, err = {}, user) {
        const status = err.response && err.response.status;
        const response = err.response && err.response.data;
        const messageConfig = Object.assign(Object.assign({}, postInfo), { status: status, badRequestBack: response, user: user || '' });
        // this.messageService.$errorWarn(messageConfig,  status).subscribe(res => {
        //     console.log('错误信息---》', new Date(), JSON.stringify(postInfo));
        //     console.log('错误信息---》', new Date(), JSON.stringify(response || err));
        //     console.log('机器人信息---》', new Date(), JSON.stringify(res.data));
        // });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err);
    }
    getRequestConfig(request, opt = {}) {
        const api = opt.server || request.headers['x-api'] || request.headers['X-Api'] || '';
        let serverUrl = api ? this.configService.get(api.toUpperCase()) : '';
        /**
         * 发新版本。换服务器地址。prod的路径改过。有些有缓存的就拿不到新路径。暂时兼容 后续会删除以下代码块
         */
        let url = serverUrl +
            (opt.url || request.headers['x-url'] || request.headers['X-Url'] || request.headers['X-Code'] || request.headers['x-code']);
        const query = opt.query || request.query;
        if (query && Object.keys(query).length) {
            const arrString = Object.keys(query).map(key => key + '=' + encodeURIComponent(query[key])).join('&');
            url += '?' + arrString;
        }
        const headers = opt.headers || {
            'X-Auth-Token': request.headers['x-auth-token'] || request.headers['X-Auth-Token'] || 'RdZ5X60QSt4YT4+YCFVDCA=='
        };
        const userName = request.headers ? (request.headers['x-user'] || request.headers['X-User'] || '') : '';
        return { url, headers, userName };
    }
    $url(opt) {
        let url = opt.url;
        if (opt.query) {
            const arrString = Object.keys(opt.query).map(key => key + '=' + encodeURIComponent(opt.query[key])).join('&');
            url += '?' + arrString;
        }
        const options = {
            url: url,
            method: 'get',
            headers: opt.headers
        };
        return this.httpService.get(url, {
            headers: opt.headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => this.handerError(options, err)));
    }
    $get(request, opt) {
        const reqInfo = this.getRequestConfig(request, opt);
        const options = {
            url: reqInfo.url,
            method: 'get',
            headers: reqInfo.headers
        };
        return this.httpService.get(reqInfo.url, {
            headers: reqInfo.headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => this.handerError(options, err, reqInfo.userName)));
    }
    $post(request, params, opt) {
        const reqInfo = this.getRequestConfig(request, opt);
        const options = {
            url: reqInfo.url,
            params,
            method: 'post',
            headers: reqInfo.headers
        };
        return this.httpService.post(reqInfo.url, params, {
            headers: reqInfo.headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => this.handerError(options, err, reqInfo.userName)));
    }
    $put(request, params, opt) {
        const reqInfo = this.getRequestConfig(request, opt);
        const options = {
            url: reqInfo.url,
            params: params,
            method: 'put',
            headers: reqInfo.headers
        };
        return this.httpService.put(reqInfo.url, params, {
            headers: reqInfo.headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => this.handerError(options, err, reqInfo.userName)));
    }
    $delete(request, opt) {
        const reqInfo = this.getRequestConfig(request, opt);
        const options = {
            url: reqInfo.url,
            method: 'get',
            headers: reqInfo.headers
        };
        return this.httpService.delete(reqInfo.url, {
            headers: reqInfo.headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => this.handerError(options, err, reqInfo.userName)));
    }
    $form(request, params, files, opt) {
        const reqInfo = this.getRequestConfig(request, opt);
        let formData = {};
        if (Object.keys(params).length) {
            for (const paramsKey in params) {
                if (Object.prototype.hasOwnProperty.call(params, paramsKey)) {
                    formData[paramsKey] = params[paramsKey];
                }
            }
        }
        if (files) {
            for (const file of files) {
                formData[file.fieldname] = {
                    value: fs__WEBPACK_IMPORTED_MODULE_5__.createReadStream(file.path),
                    options: {
                        filename: file.filename
                    }
                };
            }
        }
        const options = {
            url: reqInfo.url,
            method: 'post',
            params: qs__WEBPACK_IMPORTED_MODULE_6__.stringify(formData),
            headers: reqInfo.headers
        };
        return this.httpService.post(reqInfo.url, qs__WEBPACK_IMPORTED_MODULE_6__.stringify(formData), {
            headers: reqInfo.headers
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => this.handerError(options, err, reqInfo.userName)));
    }
    $qiniu(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const ACCESS_KEY = '_ioX8mMk5AKI62zE9iw2fxF1tuzg87UDI5D6Ldf0';
            const SECRET_KEY = '6MD06XdPEb9Iw-vd8GORZhpTcsiNmStAWOHNLOiI';
            const formatZero = (str) => ('00' + str).substr((str + '').length);
            const _uploadFile = (localFile, key) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
                const putPolicy = new qiniu__WEBPACK_IMPORTED_MODULE_3__.rs.PutPolicy({
                    scope: 'zgl20181208',
                    returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
                });
                const token = putPolicy.uploadToken(new qiniu__WEBPACK_IMPORTED_MODULE_3__.auth.digest.Mac(ACCESS_KEY, SECRET_KEY));
                const formUploader = new qiniu__WEBPACK_IMPORTED_MODULE_3__.form_up.FormUploader(new qiniu__WEBPACK_IMPORTED_MODULE_3__.conf.Config({
                    zone: qiniu__WEBPACK_IMPORTED_MODULE_3__.zone.Zone_z0,
                    useHttpsDomain: true,
                    useCdnDomain: true
                }));
                const putExtra = new qiniu__WEBPACK_IMPORTED_MODULE_3__.form_up.PutExtra();
                return new Promise(resolve => {
                    formUploader.putFile(token, key, localFile, putExtra, function (err, ret) {
                        return resolve({
                            err: err,
                            ret: ret
                        });
                    });
                });
            });
            let res;
            const date = new Date();
            const str = date.getFullYear() + formatZero(date.getMonth() + 1) + formatZero(date.getDate());
            const fileType = file.originalname.split('.');
            const retPath = path__WEBPACK_IMPORTED_MODULE_4__.join(str + '/', file.filename + (fileType.length > 1 ? '.' + fileType[fileType.length - 1] : ''));
            const { ret, err } = yield _uploadFile(file.path, retPath);
            fs__WEBPACK_IMPORTED_MODULE_5__.unlink(file.path, function () { });
            if (ret) {
                const resData = ret || {};
                resData.fullUrl = 'https://static2.zugeliang.com/' + resData.key;
                res = {
                    code: 0,
                    object: resData
                };
            }
            else {
                res = {
                    code: 50017,
                    msg: JSON.stringify(err)
                };
            }
            return res;
        });
    }
};
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpService !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpService) === "function" ? _a : Object, typeof (_b = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_9__.ConfigService !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_9__.ConfigService) === "function" ? _b : Object, typeof (_c = typeof _message_service__WEBPACK_IMPORTED_MODULE_8__.MessageService !== "undefined" && _message_service__WEBPACK_IMPORTED_MODULE_8__.MessageService) === "function" ? _c : Object])
], ApiService);



/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("rxjs");;

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("qiniu");;

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("qs");;

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("rxjs/operators");;

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => /* binding */ MessageService
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _read_write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
var _a, _b;



let MessageService = class MessageService {
    constructor(httpService, rw) {
        this.httpService = httpService;
        this.rw = rw;
        this.accessToken = {
            technology: '766771ff7fe9bddfc1551b8499076102561506c62299c2bf59fc01a7f968a5ca',
            finance: '85bd8f0d95e5f5abb214132a02ed9b0001115b1bf3f8edc9381c09e0887ec54b',
            test: '4aaf026fe0ef94d6d50d3db5324639e24d7240c67f4e55b222b686406e59e39b',
            error: '2882d0ece8eebac7f1d8bbf5a062c41d5681cceb203c31583ace7d63ff9d7ec0'
        };
    }
    $errorWarn(infoArr, errorCode) {
        let pushInfo;
        if (infoArr && Array.isArray(infoArr)) {
            pushInfo = infoArr.map(item => "> " + item + "\n\n").join('');
        }
        else {
            pushInfo = Object.keys(infoArr).map(key => "> " + key + ':' + JSON.stringify(infoArr[key]) + "\n\n").join('');
        }
        const info = {
            "msgtype": "markdown",
            "markdown": {
                "title": "crm报警",
                "text": "#### crm报错" + (errorCode ? ',错误状态码:' + errorCode : '') + " \n" + pushInfo
            },
            "at": {
                "atMobiles": [],
                "isAtAll": false
            }
        };
        return this.$dingTalkPost('error', info);
    }
    $apiWarn(rebotName, warnInfo) {
        const nameSpace = this.rw.readJson('./static/zgl-api-json/api-params-name.json');
        const postDetail = Object.keys(warnInfo.requestParams)
            .map(key => "> " + (nameSpace[key] || key) + ':' + warnInfo.requestParams[key] + "\n\n").join('');
        const message = {
            msgtype: 'markdown',
            markdown: {
                "title": "(" + warnInfo.operatorName + ")" + warnInfo.apiName,
                "text": "#### " + warnInfo.operatorName + "进行了操作 --> " + warnInfo.apiName + "  \n" + postDetail
            },
            at: {}
        };
        return this.$dingTalkPost(rebotName, message);
    }
    // 基础服务
    $dingTalkPost(rebotName, message) {
        // 格式 文档链接 https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq
        // message {
        //      msgtype:  text / link / markdown / actionCard / feedCard,
        //      at { isAtAll: true / false, atMobiles: Array[string] }
        // }
        // text { content }
        // link { text, title, picUrl, messageUrl }
        // markdown { title, text }
        // actionCard { title, text, hideAvatar, btnOrientation, singleTitle, singleURL, btns }
        // FeedCard { links[ { title, messageURL, picURL } ] }
        return this.httpService.post('https://oapi.dingtalk.com/robot/send?access_token=' + this.accessToken[rebotName], message, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
MessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpService !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpService) === "function" ? _a : Object, typeof (_b = typeof _read_write_service__WEBPACK_IMPORTED_MODULE_2__.ReadWriteService !== "undefined" && _read_write_service__WEBPACK_IMPORTED_MODULE_2__.ReadWriteService) === "function" ? _b : Object])
], MessageService);



/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadWriteService": () => /* binding */ ReadWriteService
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var node_xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_5__);






let ReadWriteService = class ReadWriteService {
    constructor() {
    }
    readJson(filePath) {
        let bin = fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync(path__WEBPACK_IMPORTED_MODULE_3__.resolve(filePath));
        if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
            bin = bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF ? bin.slice(3) : bin;
        }
        return JSON.parse(bin.toString('utf-8'));
    }
    writeJson(filePath, data) {
        return new Promise(resolve => {
            fs__WEBPACK_IMPORTED_MODULE_2__.writeFile(path__WEBPACK_IMPORTED_MODULE_3__.resolve(filePath), data, function (err) {
                if (err) {
                    resolve({ code: 0, data: null, msg: JSON.stringify(err) });
                }
                else {
                    resolve({ code: 0, data: null, msg: 'OK' });
                }
            });
        });
    }
    readExcel(file, isDel = true) {
        return new Promise((resolve, reject) => {
            try {
                let obj = node_xlsx__WEBPACK_IMPORTED_MODULE_4__.parse(file.path);
                obj.forEach(item => item.data = item.data.filter(v => v.length));
                isDel && fs__WEBPACK_IMPORTED_MODULE_2__.unlink(file.path, function () { });
                resolve({ data: obj });
            }
            catch (e) {
                isDel && fs__WEBPACK_IMPORTED_MODULE_2__.unlink(file.path, function () { });
                reject({ msg: '解析文件失败' });
            }
        });
    }
    downFile(url, definedName) {
        return new Promise((resolve) => {
            const arr = url.split('/');
            const fileName = definedName || arr[arr.length - 1];
            let stream = fs__WEBPACK_IMPORTED_MODULE_2__.createWriteStream(path__WEBPACK_IMPORTED_MODULE_3__.resolve('./upload/' + fileName));
            request__WEBPACK_IMPORTED_MODULE_5__(url).pipe(stream).on("close", function (err) {
                resolve({
                    path: path__WEBPACK_IMPORTED_MODULE_3__.resolve('./upload/' + fileName),
                    filename: fileName.split('.')[0],
                    originalname: fileName
                });
            });
        });
    }
    createExcel(fileName, data) {
        let address = path__WEBPACK_IMPORTED_MODULE_3__.resolve('./upload/' + fileName);
        const result = __webpack_require__(22).execute({
            stylesXmlFile: address,
            name: "mySheet",
            cols: data.cols,
            rows: data.rows
        });
        return new Buffer(result, 'binary');
    }
    writeFile(name, data) {
        return new Promise(resolve => {
            fs__WEBPACK_IMPORTED_MODULE_2__.writeFile(path__WEBPACK_IMPORTED_MODULE_3__.resolve('./upload/' + name), data, { encoding: 'binary' }, (err) => {
                if (err) {
                    resolve({
                        code: 50017,
                        data: null,
                        msg: JSON.stringify(err)
                    });
                }
                else {
                    resolve({
                        code: 0,
                        data: '/' + name,
                        msg: 'ok'
                    });
                }
            });
        });
    }
};
ReadWriteService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])
], ReadWriteService);



/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("node-xlsx");;

/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("request");;

/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("excel-export");;

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZglApiInterceptor": () => /* binding */ ZglApiInterceptor
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var colors_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var colors_console__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(colors_console__WEBPACK_IMPORTED_MODULE_3__);




let ZglApiInterceptor = class ZglApiInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let responseBack = data;
            try {
                if (data && !data.success) {
                    console.log(colors_console__WEBPACK_IMPORTED_MODULE_3__, 'colorscolorscolors');
                    const req = context.switchToHttp().getRequest();
                    console.error('错误时间---->', new Date());
                    console.log('请求接口---->', "\x1b[40m " + req.headers['x-url'] + " \x1b[0m", req.headers['x-api']);
                    console.log('用户---->', req.headers['x-user']);
                    console.log('token--->', req.headers['x-auth-token']);
                    console.log('来源--->', req.headers['referer']);
                    console.log('query---->', req.query);
                    console.log('params--->', req.params);
                    console.error('错误信息---->', JSON.stringify(data && data.message || data || '').substr(0, 300));
                }
            }
            catch (e) {
                console.log(e);
            }
            return responseBack;
        })));
    }
};
ZglApiInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], ZglApiInterceptor);



/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("colors-console");;

/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");;

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatService": () => /* binding */ FormatService
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zgl_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var zgl_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zgl_utils_js__WEBPACK_IMPORTED_MODULE_2__);



// 基础service---不允许调用其他service
let FormatService = class FormatService {
    constructor() { }
    getAreaName(code) {
        const arr = Array.from(zgl_utils_js__WEBPACK_IMPORTED_MODULE_2__.position);
        let newArr = [];
        arr.forEach(item => {
            item.value = item.label;
        });
        return newArr;
    }
    dateFormat(date, format = 'yyyy-MM-dd hh:mm:ss') {
        if (date) {
            const padLeftZero = (str) => {
                return ('00' + str).substr(str.length);
            };
            let $date = new Date(date);
            if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, ($date.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            let dateKey = {
                'M+': $date.getMonth() + 1,
                'd+': $date.getDate(),
                'h+': $date.getHours(),
                'm+': $date.getMinutes(),
                's+': $date.getSeconds()
            };
            for (let key in dateKey) {
                if (new RegExp(`(${key})`).test(format)) {
                    let str = dateKey[key].toString();
                    format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
                }
            }
            return format;
        }
        return '';
    }
    priceFormat(s) {
        if (/[^0-9\.]/.test(s)) {
            return '0.00';
        }
        s = s.toString().replace(/^(\d*)$/, '$1.');
        s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1');
        s = s.replace('.', ',');
        const re = /(\d)(\d{3},)/;
        while (re.test(s)) {
            s = s.replace(re, '$1,$2');
        }
        s = s.replace(/,(\d\d)$/, '.$1');
        return s.replace(/^\./, '0.');
    }
    leaseModeFormat(value) {
        if (value) {
            try {
                const leaseModeInfo = JSON.parse(value);
                if (leaseModeInfo.leaseWay === 5) {
                    if (leaseModeInfo.carefree && Object.keys(leaseModeInfo.carefree).length) {
                        return '无忧购: 无忧购价￥' + leaseModeInfo.carefree.fixedPrice + '<br>'
                            + '保质期:' + leaseModeInfo.carefree.expPeriod + '<br>个月'
                            + '保底价:' + leaseModeInfo.carefree.securityPrice;
                    }
                    else {
                        return '无忧购信息缺失';
                    }
                }
                else {
                    const unitName = leaseModeInfo.unit === 2 ? '周周付' : leaseModeInfo.unit === 1 ? '日租' : '月租';
                    const unitDesc = leaseModeInfo.unit === 2 ? '周' : leaseModeInfo.unit === 1 ? '天' : '个月';
                    let price;
                    if (leaseModeInfo.periodsPriceCollectStr) {
                        const arr = leaseModeInfo.periodsPriceCollectStr.split(',');
                        let savePrice;
                        const secArr = [];
                        arr.forEach((item, index) => {
                            if (item !== savePrice || !secArr.length) {
                                secArr.push({
                                    start: index + 1,
                                    value: item
                                });
                                savePrice = item;
                            }
                            else {
                                secArr[secArr.length - 1].end = index + 1;
                            }
                        });
                        if (secArr.length === 1) {
                            price = '￥' + this.priceFormat(secArr[0].value);
                        }
                        else {
                            price = secArr
                                .map(v => '￥' + this.priceFormat(v.value) + '(第' + (v.end ? v.start + '~' + v.end : v.start) + '期)')
                                .join() + '(阶梯)';
                        }
                    }
                    else {
                        price = '￥' + this.priceFormat(leaseModeInfo.leasePrice);
                    }
                    return unitName + ':' + price + ''
                        + '周期:' + (leaseModeInfo.period || leaseModeInfo.leaseMonth) + unitDesc + ''
                        + '租赁模式:' + (leaseModeInfo.leaseTagDesc || '到期归还');
                }
            }
            catch (e) {
                return '租赁模式解析失败';
            }
        }
        return '没有租赁模式！';
    }
};
FormatService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [])
], FormatService);



/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("zgl-utils-js");;

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockController": () => /* binding */ MockController
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_read_write_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
var _a;



let MockController = class MockController {
    constructor(rw) {
        this.rw = rw;
    }
    getData(params) {
        const res = this.rw.readJson('./static/mock-data/' + params.mk + '.json');
        return res;
    }
    getCenter(params) {
        const res = this.rw.readJson('./static/mock-data/' + params.mk + '.json');
        res.result[0].layout = this.rw.readJson('./static/mock-data/layout.json');
        return res;
    }
    setPrice(params) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const data = this.rw.readJson('./static/mock-data/hp-price.json');
            if (data.some(item => item.goodsSn === params.goodsSn)) {
                data.forEach(item => {
                    if (item.goodsSn === params.goodsSn) {
                        item = params;
                    }
                });
            }
            else {
                data.push(params);
            }
            return yield this.rw.writeJson('./static/mock-data/hp-price.json', JSON.stringify(data));
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('data'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], MockController.prototype, "getData", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('center'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], MockController.prototype, "getCenter", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('set_price'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], MockController.prototype, "setPrice", null);
MockController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)('mock'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _service_read_write_service__WEBPACK_IMPORTED_MODULE_2__.ReadWriteService !== "undefined" && _service_read_write_service__WEBPACK_IMPORTED_MODULE_2__.ReadWriteService) === "function" ? _a : Object])
], MockController);



/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginController": () => /* binding */ LoginController
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
var _a, _b, _c, _d;





let LoginController = class LoginController {
    constructor(api, rw) {
        this.api = api;
        this.rw = rw;
    }
    bossGet(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$get(request).toPromise();
            return res && res.data || res;
        });
    }
    bossPost(postParams, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.api.$post(request, postParams).toPromise();
            return res && res.data || res;
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)('login'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _a : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], LoginController.prototype, "bossGet", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('login'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Req)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object, typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_2__.Request !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__.Request) === "function" ? _b : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], LoginController.prototype, "bossPost", null);
LoginController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)('api'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Inject)(_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_c = typeof _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService !== "undefined" && _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService) === "function" ? _c : Object, typeof (_d = typeof _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__.ReadWriteService !== "undefined" && _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__.ReadWriteService) === "function" ? _d : Object])
], LoginController);



/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadController": () => /* binding */ UploadController
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
var _a, _b;





let UploadController = class UploadController {
    constructor(api, rw) {
        this.api = api;
        this.rw = rw;
    }
    uploadFile(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const uploadSuc = [];
            const uploadErr = [];
            let sucNum = 0;
            let errorNum = 0;
            for (let i = 0; i < files.length; i++) {
                let res = yield this.api.$qiniu(files[i]);
                if (res.code === 0) {
                    uploadSuc.push(res.object);
                    sucNum++;
                }
                else {
                    uploadErr.push(res.msg);
                    errorNum++;
                }
            }
            const msg = '成功上传' + sucNum + '个图片' + (errorNum ? '上传失败' + errorNum + '个文件!' : '!');
            return {
                code: errorNum ? 50017 : 0,
                object: uploadSuc[0],
                uploadSuc,
                uploadErr,
                msg
            };
        });
    }
    uploadExcel(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const excelSuc = [];
            const excelErr = [];
            let sucNum = 0;
            let errorNum = 0;
            for (let i = 0; i < files.length; i++) {
                let res = yield this.rw.readExcel(files[i]);
                if (res.msg) {
                    excelErr.push(res.msg);
                    errorNum++;
                }
                else {
                    excelSuc.push(res.data);
                    sucNum++;
                }
            }
            return { code: errorNum ? 50017 : 0, excelSuc, excelErr, msg: errorNum ? '解析失败文件数:' + errorNum : 'ok' };
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('upload'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UseInterceptors)((0,_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__.FilesInterceptor)('file')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UploadedFiles)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], UploadController.prototype, "uploadFile", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('excel'),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UseInterceptors)((0,_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__.FilesInterceptor)('file')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UploadedFiles)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], UploadController.prototype, "uploadExcel", null);
UploadController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)('api'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Inject)(_service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService)),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService !== "undefined" && _service_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService) === "function" ? _a : Object, typeof (_b = typeof _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__.ReadWriteService !== "undefined" && _service_read_write_service__WEBPACK_IMPORTED_MODULE_4__.ReadWriteService) === "function" ? _b : Object])
], UploadController);



/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("compression");;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;