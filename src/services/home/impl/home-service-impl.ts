import { CommonResponse } from "../../../common/dto/common-response";
import { AppDataSource } from "../../../configuration/database-configuration";
import HomeDao from "../../../dao/home-dao";
import { HomeDaoImpl } from "../../../dao/impl/home-dao-impl";
import { ProductDaoImpl } from "../../../dao/impl/product-dao-impl";
import ProductDao from "../../../dao/product-dao";
import { GenderDto } from "../../../dto/home/gender-dto";
import { HomeResDto } from "../../../dto/home/home-res-dto";
import { TypeDto } from "../../../dto/home/type-dto";
import { ProductDto } from "../../../dto/product/product-dto";
import { GenderCategoryEntity } from "../../../entity/gender-category-entity";
import { HeroImageEntity } from "../../../entity/hero-image-entity";
import { ProductEntity } from "../../../entity/product-entity";
import { TypeEntity } from "../../../entity/type-entity";

import { HomeService } from "../home-service";

export class HomeServiceImpl implements HomeService {

  productDao : ProductDao = new ProductDaoImpl();
  homeDao : HomeDao = new HomeDaoImpl();

  async getHomeObj(): Promise<CommonResponse> {
    let cr = new CommonResponse();
    try {

        let heroImgRepo = AppDataSource.getRepository(HeroImageEntity);
        let prodRepo = AppDataSource.getRepository(ProductEntity);
        let typeRepo = AppDataSource.getRepository(TypeEntity);
        let genderRepo = AppDataSource.getRepository(GenderCategoryEntity);

        let resHomeObj : HomeResDto = new HomeResDto();
      
        //heroImg
        let heroImg: HeroImageEntity = await this.homeDao.getHeroImg(heroImgRepo);

        if(heroImg){
          resHomeObj.setHeroImg(heroImg.url);
        }else{
          resHomeObj.setHeroImg("https://i.postimg.cc/13H30ZqZ/temp-Imagep-Lv4-VY.avif");
        }

        //products
        let products: ProductEntity[] = await this.productDao.searchProducts(null, prodRepo);

        let prods: ProductDto[] = new Array();

        for (const product of products) {
            let prod: ProductDto = new ProductDto();
            prod.fillViaObject(product);

            prods.push(prod);
        }

        resHomeObj.setProducts(prods);

        //categories
        let categories: TypeEntity[] = await this.homeDao.getCategories(typeRepo);

        let cats: TypeDto[] = new Array();

        for (const category of categories) {
            let cat: TypeDto = new TypeDto();
            cat.fillViaObject(category);

            cats.push(cat);
        }

        resHomeObj.setCategories(cats);

        //genders
        let genders: GenderCategoryEntity[] = await this.homeDao.getGenders(genderRepo);

        let gens: GenderDto[] = new Array();

        for (const gender of genders) {
            let gen: GenderDto = new GenderDto();
            gen.fillViaObject(gender);

            gens.push(gen);
        }

        resHomeObj.setGenderCategories(gens);
     
        cr.setStatus(true);
        cr.setExtra(resHomeObj);
    } catch (error) {
        cr.setStatus(false);
        cr.setExtra(error);
        throw error;
    }
    return cr;
  }
}
