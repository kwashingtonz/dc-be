import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "gender_categories" })
export class GenderCategoryEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "name" })
    name: string
    
}