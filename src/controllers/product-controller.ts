import express from "express";
import { CommonResponse } from "../common/dto/common-response";
import { ProductReqDto } from "../dto/product/product-req-dto";

// let weatherDataService: WeatherDataService = new WeatherDataServiceImpl();

exports.loadProducts = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
let cr = new CommonResponse();
try {

    let reqDto:ProductReqDto = new ProductReqDto()
    reqDto.fillViaRequest(req.body);

    // cr = await weatherDataService.saveData(reqDto);

    // res.send(cr.getExtra());

    let prod1 = { title: "Bear Appeal - Black Women’s Crop top", price: 990, description: "Black Crop Top with best premium cotton", images: ["https://i.postimg.cc/Gtz4jMzX/temp-Image-VSIyv-W.avif", "https://i.postimg.cc/50VjWcRP/temp-Image0-Dk-Duj.avif"], category:1, gender: 2, isTrending: true}
    let prod2 = { title: "Bear Appeal - Brown Men’s Oversized TShirt", price: 1090, description: "Brow Oversized Crew Neck TShirt with premiuim cotton", images: ["https://i.postimg.cc/xCBQVL89/temp-Imagea5-Gi-BW.avif", "https://i.postimg.cc/c4yWD7Pm/temp-Image-JCUSWj.avif"], category:1, gender: 1, isTrending: true}
    let prod3 = { title: "Bear Appeal - Navy Blue Casual Pants", price: 1500, description: "Navy blue casual pants makes you comfortable in casual dress code", images: ["https://i.postimg.cc/4yvS2chL/temp-Image-BDxldj.avif", "https://i.postimg.cc/t44MDYRk/temp-Image0w-DHt-X.avif"], category:2, gender: 2, isTrending: true}
    let prod4 = { title: "Bear Appeal - Salmon Crew Short Sleeve Neck TShirt", price: 990, description: "Salmon coloured short sleeve premmium cotton crew neck makes you comfy on hot days", images: ["https://i.postimg.cc/3RNrTKZF/temp-Image-Jfr3-YT.avif", "https://i.postimg.cc/J0B1sPvy/temp-Image-Soip31.avif"], category:1, gender: 1, isTrending: false}
    
    let products = [prod1,prod2,prod3,prod4];
    
    if(reqDto.getSearchText() !== ""){
      products = products.filter(prd => prd.title.toLowerCase().includes(reqDto.getSearchText().toLowerCase()));
    }

    if(reqDto.getGender() !== 0){
      products = products.filter(prd => prd.gender === reqDto.getGender());
    }

    if(reqDto.getType() !== 0){
      products = products.filter(prd => prd.category === reqDto.getType())
    }

    if(reqDto.getSortType() === 0){
      products.sort((a,b) => a.price - b.price);
    }else{
      products.sort((a,b) => b.price - a.price);
    }

    cr.setStatus(true);
    cr.setExtra(products);

    res.send(cr);

  } catch (error) {
    cr.setStatus(false);
    cr.setExtra(error);
    next(error);
  }
};