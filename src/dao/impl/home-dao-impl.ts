import { Repository } from "typeorm";

import HomeDao from "../home-dao";
import { TypeEntity } from "../../entity/type-entity";
import { HeroImageEntity } from "../../entity/hero-image-entity";
import { GenderCategoryEntity } from "../../entity/gender-category-entity";

export class HomeDaoImpl implements HomeDao {
    
    async getHeroImg(heroImgRepo: Repository<HeroImageEntity>): Promise<HeroImageEntity> {
        let query = heroImgRepo.createQueryBuilder("heroImg")
        .where("heroImg.id > 0")

        return query.getOne();
    }
    
    async getCategories(typeRepo: Repository<TypeEntity>): Promise<TypeEntity[]> {
        let query = typeRepo.createQueryBuilder("type")
        .where("type.id > 0")
        .orderBy("type.id","ASC")

        return query.getMany();
    }

    async getGenders(genRepo: Repository<GenderCategoryEntity>): Promise<GenderCategoryEntity[]> {
        let query = genRepo.createQueryBuilder("gender")
        .where("gender.id > 0")
        .orderBy("gender.id","ASC")

        return query.getMany();
    }

}