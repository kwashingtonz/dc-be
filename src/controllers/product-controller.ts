import express from "express";
import { CommonResponse } from "../common/dto/common-response";
import { ProductReqDto } from "../dto/product/product-req-dto";
import { ProductService } from "../services/product/product-service";
import { ProductServiceImpl } from "../services/product/impl/product-service-impl";

let productService: ProductService = new ProductServiceImpl();

exports.loadProducts = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
let cr = new CommonResponse();
try {

    let reqDto:ProductReqDto = new ProductReqDto()
    reqDto.fillViaRequest(req.body);

    cr = await productService.searchProducts(reqDto);

    res.send(cr);

  } catch (error) {
    cr.setStatus(false);
    cr.setExtra(error);
    next(error);
  }
};