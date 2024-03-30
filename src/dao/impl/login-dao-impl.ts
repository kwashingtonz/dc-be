import { Repository } from "typeorm";
import { LoginReqDto } from "../../dto/login/login-req-dto";
import LoginDao from "../login-dao";
import { UserEntity } from "../../entity/user-entity";

export class LoginDaoImpl implements LoginDao {
    
    async checkUser(loginReqDto: LoginReqDto,wsRepo:Repository<UserEntity>):Promise<UserEntity>{

        let query = wsRepo.createQueryBuilder("user")
        .where("user.username = :username",{username:loginReqDto.getUsername()})
        .andWhere("user.password = :password",{password:loginReqDto.getPassword()})

        let result = query.getOne();

        return result;
    }

}