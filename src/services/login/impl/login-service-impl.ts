import { CommonResponse } from "../../../common/dto/common-response";
import { AppDataSource } from "../../../configuration/database-configuration";
import { LoginDaoImpl } from "../../../dao/impl/login-dao-impl";
import LoginDao from "../../../dao/login-dao";
import { LoginReqDto } from "../../../dto/login/login-req-dto";
import { UserEntity } from "../../../entity/user-entity";

import { LoginService } from "../login-service";

export class LoginServiceImpl implements LoginService {

  loginDao : LoginDao = new LoginDaoImpl()

  async checkLogin(loginReqDto : LoginReqDto): Promise<CommonResponse> {
    let cr = new CommonResponse();
    try {

        let userRepo = AppDataSource.getRepository(UserEntity);

        let user : UserEntity = await this.loginDao.checkUser(loginReqDto, userRepo);

        if(user){
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
