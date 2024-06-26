"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_response_1 = require("../common/dto/common-response");
// let setupService: SetupService = new SetupServiceImpl();
exports.loadHomeObj = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let cr = new common_response_1.CommonResponse();
    try {
        // cr = await setupService.initialSetup();
        // res.send(cr.getExtra()
        let prod1 = { title: "Bear Appeal - Black Women’s Crop top", price: 990, description: "Black Crop Top with best premium cotton", images: ["https://i.postimg.cc/Gtz4jMzX/temp-Image-VSIyv-W.avif", "https://i.postimg.cc/50VjWcRP/temp-Image0-Dk-Duj.avif"], category: "tshirt", gender: "women", isTrending: true };
        let prod2 = { title: "Bear Appeal - Brown Men’s Oversized TShirt", price: 1090, description: "Brow Oversized Crew Neck TShirt with premiuim cotton", images: ["https://i.postimg.cc/xCBQVL89/temp-Imagea5-Gi-BW.avif", "https://i.postimg.cc/c4yWD7Pm/temp-Image-JCUSWj.avif"], category: "tshirt", gender: "men", isTrending: true };
        let prod3 = { title: "Bear Appeal - Navy Blue Casual Pants", price: 1500, description: "Navy blue casual pants makes you comfortable in casual dress code", images: ["https://i.postimg.cc/4yvS2chL/temp-Image-BDxldj.avif", "https://i.postimg.cc/t44MDYRk/temp-Image0w-DHt-X.avif"], category: "pants", gender: "women", isTrending: true };
        let prod4 = { title: "Bear Appeal - Salmon Crew Short Sleeve Neck TShirt", price: 990, description: "Salmon coloured short sleeve premmium cotton crew neck makes you comfy on hot days", images: ["https://i.postimg.cc/3RNrTKZF/temp-Image-Jfr3-YT.avif", "https://i.postimg.cc/J0B1sPvy/temp-Image-Soip31.avif"], category: "tshirt", gender: "men", isTrending: false };
        let cat1 = { id: 1, name: "Tshirt" };
        let cat2 = { id: 2, name: "Pants" };
        let cat3 = { id: 3, name: "Shorts" };
        let gen1 = { id: 1, name: "MEN" };
        let gen2 = { id: 2, name: "WOMEN" };
        let gen3 = { id: 3, name: "KIDS" };
        var homeObj = { heroImg: "https://i.postimg.cc/13H30ZqZ/temp-Imagep-Lv4-VY.avif", products: [prod1, prod2, prod3, prod4], categories: [cat1, cat2, cat3], genderCategories: [gen1, gen2, gen3], cartItems: [] };
        res.send(homeObj);
    }
    catch (error) {
        cr.setStatus(false);
        cr.setExtra(error);
        next(error);
    }
});
