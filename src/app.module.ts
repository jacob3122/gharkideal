import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { AuthModule } from './auth/auth.module';
import { ServiceProvider } from './service-provider/entities/service-provider.entity';
import { UserProfile } from './users/entities/user-profile.entity';
import { CreateUserProfileDto } from './users/dto/create-user-profile.dto';
import { ServiceProviderProfile } from './service-provider/entities/service-provider-profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2024',
      database: 'garkideal',
      entities: [User,ServiceProvider,UserProfile,ServiceProviderProfile],
      synchronize: true,
    }),
    UsersModule,
    ServiceProviderModule,
    AuthModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
