import { CommonResponse } from "../../common/dto/common-response";
import { ProductReqDto } from "../../dto/product/product-req-dto";

export interface ProductService{
  searchProducts(prodDto: ProductReqDto): Promise<CommonResponse>;
}
