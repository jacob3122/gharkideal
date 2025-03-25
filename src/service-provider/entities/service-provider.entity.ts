import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ServiceProviderProfile } from "./service-provider-profile.entity";

@Entity()
export class ServiceProvider {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, length: 10 })
  phoneNumber: string;

  @Column({ nullable: true }) // ✅ Make OTP nullable
  otp: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true }) // ✅ Fix aadharCard issue by making it nullable
  aadharCard: string;

  @OneToOne(() => ServiceProviderProfile, (profile) => profile.serviceProvider, { cascade: true })
  profile: ServiceProviderProfile;
}
