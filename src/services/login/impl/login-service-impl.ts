import { CommonResponse } from "../../../common/dto/common-response";
import { LoginReqDto } from "../../../dto/login/login-req-dto";

import { LoginService } from "../login-service";

export class LoginServiceImpl implements LoginService {

  async checkLogin(loginReqDto : LoginReqDto): Promise<CommonResponse> {
    let cr = new CommonResponse();
    try {

        if((loginReqDto.getUsername() === "abc") && (loginReqDto.getPassword() === "123")){
          cr.setExtra("Success");
          cr.setStatus(true);
        } else {
          cr.setExtra("Fail");
          cr.setStatus(false);
        }
        
    } catch (error) {
        cr.setStatus(false);
        cr.setExtra(error);
        throw error;
    }
    return cr;
  }
}
