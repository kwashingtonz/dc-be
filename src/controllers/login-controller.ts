import express from "express";
import { CommonResponse } from "../common/dto/common-response";
import { LoginService } from "../services/login/login-service";
import { LoginServiceImpl } from "../services/login/impl/login-service-impl";
import { LoginReqDto } from "../dto/login/login-req-dto";

let loginService: LoginService = new LoginServiceImpl();

exports.login = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
let cr = new CommonResponse();
try {

    let reqDto : LoginReqDto = new LoginReqDto()
    reqDto.setUsername(req.body.username);
    reqDto.setPassword(req.body.password.toString());

    cr = await loginService.checkLogin(reqDto);

    res.send(cr);
  } catch (error) {
    cr.setStatus(false);
    cr.setExtra(error);
    next(error);
  }
};