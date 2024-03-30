import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "hero_image" })
export class HeroImageEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "url" })
    url: string

}