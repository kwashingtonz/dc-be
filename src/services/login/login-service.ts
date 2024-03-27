import { CommonResponse } from "../../common/dto/common-response";

import { LoginReqDto } from "../../dto/login/login-req-dto";

export interface LoginService{
  checkLogin(loginReqDto : LoginReqDto): Promise<CommonResponse>;
}
