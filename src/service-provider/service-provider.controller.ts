import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderProfileDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Controller('service-provider')
export class ServiceProviderController {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  @Post('/create-service-provider')
  async createServiceProvider(@Body() createServiceProviderProfileDto: ServiceProviderProfileDto) {
    const serviceProviderProfile = await this.serviceProviderService.createServiceProviderProfile(createServiceProviderProfileDto);
    return { message: 'Service Provider profile created successfully', serviceProviderProfile };
  }

  @Get()
  findAll() {
    return this.serviceProviderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceProviderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceProviderDto: UpdateServiceProviderDto) {
    return this.serviceProviderService.update(+id, updateServiceProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProviderService.remove(+id);
  }
}
