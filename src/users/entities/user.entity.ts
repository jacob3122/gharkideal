import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./user-profile.entity";

@Entity()

export class User {

    @PrimaryGeneratedColumn()
    id : string;

    @Column({unique: true, length: 10})
    phoneNumber: string;

    @Column({nullable : true})
    otp: string;
 
    @Column({nullable : true})
    authToken:string;

    // @OneToOne(()=> UserProfile, userProfile=> userProfile.profile)
    // user:User;

    @OneToOne(() => UserProfile, profile => profile.user, { cascade: true})
    profile: UserProfile;
}
