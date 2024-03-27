import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "types" })
export class TypeEntity {

    @PrimaryGeneratedColumn()
    id: number

}