import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderController } from './service-provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvider } from './entities/service-provider.entity';
import { ServiceProviderProfile } from './entities/service-provider-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceProvider,ServiceProviderProfile])],
  controllers: [ServiceProviderController],
  providers: [ServiceProviderService], 
})
export class ServiceProviderModule {}
