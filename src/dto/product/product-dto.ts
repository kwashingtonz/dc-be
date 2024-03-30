import { ProductEntity } from "../../entity/product-entity";

export class ProductDto {

    private title: string;
    private price: number;
    private description: string;
    private images: string[];
    private category: number;
    private gender: number;
    private isTrending: boolean;

    public fillViaObject(obj: ProductEntity){
        this.title = obj.title;
        this.price = obj.price;
        this.description = obj.description;
        this.images = obj.images.map((img: any) => img.url);
        this.gender = obj.gender.id
        this.category = obj.type.id;
        this.isTrending = obj.isTrending;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getImages(): string[] {
        return this.images;
    }

    public setImages(images: string[]): void {
        this.images = images;
    }

    public getCategory(): number {
        return this.category;
    }

    public setCategory(category: number): void {
        this.category = category;
    }

    public getGender(): number {
        return this.gender;
    }

    public setGender(gender: number): void {
        this.gender = gender;
    }

    public isIsTrending(): boolean {
        return this.isTrending;
    }

    public setIsTrending(isTrending: boolean): void {
        this.isTrending = isTrending;
    }

  }
  