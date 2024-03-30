import { Repository } from "typeorm";
import { ProductEntity } from "../entity/product-entity";
import { ProductReqDto } from "../dto/product/product-req-dto";

export default interface ProductDao {
    searchProducts(productsReq: ProductReqDto,prodRepo:Repository<ProductEntity>):Promise<ProductEntity[]>;
}