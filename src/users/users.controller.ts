import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';
import { authtoken } from '@ngrok/ngrok';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-profile')
  async create(@Body() createUserProfileDto: CreateUserProfileDto) {
    const userProfile = await this.usersService.createUserProfile(createUserProfileDto);
    return { message: 'User profile created successfully', userProfile };
  }

  // @Post('login')
  // async loginOrRegister (@Body() loginDto: LoginDto){
  //   console.log(loginDto);
  //   return this.usersService.loginOrRegister(loginDto)
  // } 

  @Get("/profiles")
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get('/findOne/:id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch('/update-profile/:id')
  async update(@Param('id') id: string ,@Param("authtoken") authtoken:string,
   @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateProfile(id, updateUserDto);
  }

  @Delete('/remove/:id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
