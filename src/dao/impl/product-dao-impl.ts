import { Repository } from "typeorm";
import { ProductReqDto } from "../../dto/product/product-req-dto";
import { ProductEntity } from "../../entity/product-entity";
import ProductDao from "../product-dao";

export class ProductDaoImpl implements ProductDao {
    
    searchProducts(productsReq: ProductReqDto, prodRepo: Repository<ProductEntity>): Promise<ProductEntity[]> {
        let query = prodRepo.createQueryBuilder("product")
        .leftJoinAndSelect("product.type","type")
        .leftJoinAndSelect("product.gender","gender")
        .leftJoinAndSelect("product.images","images")
        .where("product.id > 0")

        if(productsReq){
            if(productsReq.getSearchText() && productsReq.getSearchText() !== ""){
                query = query.andWhere("LOWER(product.title) like LOWER(:searchText)",{searchText:"%"+productsReq.getSearchText()+"%"})
            }

            if(productsReq.getGender() > 0){
                query = query.andWhere("gender.id = :genderId",{genderId:productsReq.getGender()})
            }
    
            if(productsReq.getType() > 0){
                query = query.andWhere("type.id = :typeId",{typeId:productsReq.getType()})
            }
    
            if(productsReq.getSortType() === 0){
                query = query.orderBy("product.price","ASC")
            }else{
                query = query.orderBy("product.price","DESC")
            }
        }

        return query.getMany();
    }
    
}