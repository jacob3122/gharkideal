import { PartialType } from '@nestjs/swagger';
import { CreateUserProfileDto } from './create-user-profile.dto';

export class UpdateUserDto extends PartialType(CreateUserProfileDto) {}
