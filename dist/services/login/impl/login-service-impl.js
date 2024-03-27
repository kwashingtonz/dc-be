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
exports.LoginServiceImpl = void 0;
const common_response_1 = require("../../../common/dto/common-response");
class LoginServiceImpl {
    checkLogin(loginReqDto) {
        return __awaiter(this, void 0, void 0, function* () {
            let cr = new common_response_1.CommonResponse();
            try {
                if ((loginReqDto.getUsername() === "abc@xyz.com") && (loginReqDto.getPassword() === "123")) {
                    cr.setExtra("Success");
                    cr.setStatus(true);
                }
                else {
                    cr.setExtra("Fail");
                    cr.setStatus(false);
                }
            }
            catch (error) {
                cr.setStatus(false);
                cr.setExtra(error);
                throw error;
            }
            return cr;
        });
    }
}
exports.LoginServiceImpl = LoginServiceImpl;
