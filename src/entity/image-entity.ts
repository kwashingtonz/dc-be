import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { ProductEntity } from "./product-entity"

@Entity({ name: "images" })
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "url" })
    url: string

    @ManyToOne(() => ProductEntity)
    product: ProductEntity
    
}