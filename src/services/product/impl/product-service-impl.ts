import { CommonResponse } from "../../../common/dto/common-response";
import { ProductReqDto } from "../../../dto/product/product-req-dto";
import { ProductService } from "../product-service";
import { AppDataSource } from "../../../configuration/database-configuration";
import { ProductEntity } from "../../../entity/product-entity";
import ProductDao from "../../../dao/product-dao";
import { ProductDaoImpl } from "../../../dao/impl/product-dao-impl";
import { ProductDto } from "../../../dto/product/product-dto";

export class ProductServiceImpl implements ProductService {

  productDao: ProductDao = new ProductDaoImpl();

    async searchProducts(prodDto: ProductReqDto): Promise<CommonResponse> {
        let cr = new CommonResponse();
        try {
            let productRepo = AppDataSource.getRepository(ProductEntity);

            let products: ProductEntity[] = await this.productDao.searchProducts(prodDto, productRepo);

            let prodResDtos: ProductDto[] = new Array();

            for (const product of products) {
                let prodResDto: ProductDto = new ProductDto();
                prodResDto.fillViaObject(product)
                prodResDtos.push(prodResDto);
            }

            cr.setExtra(prodResDtos);
            cr.setStatus(true);
        }catch (error) {
            cr.setStatus(false);
            cr.setExtra(error);
            throw error;
        }
        return cr;
    }

}
