import { Repository } from "typeorm";

import { TypeEntity } from "../entity/type-entity";
import { HeroImageEntity } from "../entity/hero-image-entity";
import { GenderCategoryEntity } from "../entity/gender-category-entity";

export default interface HomeDao {
    getHeroImg(heroImgRepo: Repository<HeroImageEntity>): Promise<HeroImageEntity>;
    getCategories(typeRepo: Repository<TypeEntity>):Promise<TypeEntity[]>;
    getGenders(genRepo: Repository<GenderCategoryEntity>):Promise<GenderCategoryEntity[]>;
}