import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class UserProfile {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    zone: string;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User;

}