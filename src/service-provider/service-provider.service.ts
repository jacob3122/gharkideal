import { Injectable } from '@nestjs/common';
import { ServiceProviderProfileDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceProviderProfile } from './entities/service-provider-profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceProviderService {
  create(createServiceProviderDto: ServiceProviderProfileDto) {
    throw new Error('Method not implemented.');
  }
  constructor (
    @InjectRepository(ServiceProviderProfile)
    private readonly serviceProviderRepository: Repository<ServiceProviderProfile>,
  ){}


  async createServiceProviderProfile(serviceProfileDto: ServiceProviderProfileDto): Promise<ServiceProviderProfile> {
    const serviceProviderProfile = this.serviceProviderRepository.create(serviceProfileDto);
    return this.serviceProviderRepository.save(serviceProviderProfile);
  }

  findAll() {
    return `This action returns all serviceProvider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceProvider`;
  }

  update(id: number, updateServiceProviderDto: UpdateServiceProviderDto) {
    return `This action updates a #${id} serviceProvider`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceProvider`;
  }
}
