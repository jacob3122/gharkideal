import { PartialType } from '@nestjs/swagger';
import { ServiceProviderProfileDto } from './create-service-provider.dto';

export class UpdateServiceProviderDto extends PartialType(ServiceProviderProfileDto) {}
