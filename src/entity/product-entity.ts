import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { TypeEntity } from "./type-entity"
import { GenderCategoryEntity } from "./gender-category-entity"
import { ImageEntity } from "./image-entity"

@Entity({ name: "products" })
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "title" })
    title: string

    @Column({ name: "description" })
    description: string

    @Column({ name: "price" })
    price: number

    @Column({ name: "isTrending" })
    isTrending: boolean

    @ManyToOne(() => TypeEntity)
    type: TypeEntity

    @ManyToOne(() => GenderCategoryEntity)
    gender: GenderCategoryEntity

    @OneToMany((type) => ImageEntity, (img) => img.product)
    images: ImageEntity[];    

}