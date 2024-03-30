// import { Repository } from "typeorm";

import { Repository } from "typeorm";
import { UserEntity } from "../entity/user-entity";
import { LoginReqDto } from "../dto/login/login-req-dto";

export default interface LoginDao {
    checkUser(loginReqDto: LoginReqDto,userRepo:Repository<UserEntity>):Promise<UserEntity>;
}