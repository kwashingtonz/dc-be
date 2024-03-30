import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "users" })
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: "username" })
    username: string

    @Column({ name: "password" })
    password: string

}