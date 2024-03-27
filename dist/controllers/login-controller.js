"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_response_1 = require("../common/dto/common-response");
const login_service_impl_1 = require("../services/login/impl/login-service-impl");
const login_req_dto_1 = require("../dto/login/login-req-dto");
let loginService = new login_service_impl_1.LoginServiceImpl();
exports.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let cr = new common_response_1.CommonResponse();
    try {
        let reqDto = new login_req_dto_1.LoginReqDto();
        reqDto.setUsername(req.body.username);
        reqDto.setPassword(req.body.password.toString());
        cr = yield loginService.checkLogin(reqDto);
        res.send(cr.isStatus());
    }
    catch (error) {
        cr.setStatus(false);
        cr.setExtra(error);
        next(error);
    }
});
