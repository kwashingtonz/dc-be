import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "gender_category" })
export class GenderCategoryEntity {

    @PrimaryGeneratedColumn()
    id: number

    // @ManyToOne(() => DistrictEntity)
    // district: DistrictEntity
}