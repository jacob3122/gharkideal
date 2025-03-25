import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ServiceProvider } from "./service-provider.entity";


@Entity()
export class ServiceProviderProfile {
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
  
    @OneToOne(() => ServiceProvider, (provider) => provider.profile)
    @JoinColumn() // ✅ Ensures the foreign key is stored in this entity
    serviceProvider: ServiceProvider;

}
