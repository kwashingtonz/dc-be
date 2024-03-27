import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "products" })
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

}