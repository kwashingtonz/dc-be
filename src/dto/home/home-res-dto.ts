import { ProductDto } from "../product/product-dto";
import { GenderDto } from "./gender-dto";
import { TypeDto } from "./type-dto";

export class HomeResDto {

    private heroImg: String;
    private products: ProductDto[] = new Array();
    private categories: TypeDto[] = new Array();
    private genderCategories: GenderDto[] = new Array();
    private cartItems: any[] = new Array();

    public getHeroImg(): String {
        return this.heroImg;
    }

    public setHeroImg(heroImage: String): void {
        this.heroImg = heroImage;
    }

    public getProducts(): ProductDto[] {
        return this.products;
    }

    public setProducts(products: ProductDto[]): void {
        this.products = products;
    }

    public getCategories(): TypeDto[] {
        return this.categories;
    }

    public setCategories(categories: TypeDto[]): void {
        this.categories = categories;
    }

    public getGenderCategories(): GenderDto[] {
        return this.genderCategories;
    }

    public setGenderCategories(genderCategories: GenderDto[]): void {
        this.genderCategories = genderCategories;
    }

    public getCartItems(): any[] {
        return this.cartItems;
    }

    public setCartItems(cartItems: any[]): void {
        this.cartItems = cartItems;
    }


  }
  