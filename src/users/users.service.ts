import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';
import { UserProfile } from './entities/user-profile.entity';
import { retry } from 'rxjs';
import { profile } from 'console';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,
    @InjectRepository(User)
    private userRepository:Repository<User>
  ) { }


  // async createUserProfile(createUserDto: CreateUserProfileDto): Promise<UserProfile> {
  //   const userProfile = this.userProfileRepository.create(createUserDto);
  //   return this.userProfileRepository.save(userProfile);
  // }

  async createUser(createUserDto:CreateUserProfileDto ): Promise<UserProfile> {
   // Create new user
    const user = new User()
    user.email = createUserDto.email;
    user.address = createUserDto.address;
    user.fullname = createUserDto.fullName;
    user.zone =  createUserDto.zone;

  }


  async findAll(): Promise<UserProfile[]> {
    const profile = await this.userProfileRepository.find();
    return await profile;
  }

  async findOne(id: string): Promise<UserProfile> {
    const profile = await this.userProfileRepository.findOne({ where: { id }, relations: ['profile'] });
    if (!profile) {
      throw new HttpException(
        'User Not Found',
        404,
      );
    }
    return profile;
  }

  // async update(id: string, updateUserDto: UpdateUserDto): Promise<UserProfile> {
  //   const existingUser = await this.findOne(id);
  //   const userData = this.userProfileRepository.merge(
  //     existingUser,
  //     updateUserDto,
  //   );
  //   return await this.userProfileRepository.save(
  //     userData,
  //   );
  // }

  async updateProfile(id: string, updateUserDto:UpdateUserDto):Promise<UserProfile>{
    //find the user 
    const user = await this.userRepository.findOne({
      where: {id:id},
      relations:['profile']
    }) 
    if(!user){
      throw new NotFoundException('User not found');
    }

    //update profile
    if(!user.profile){
      user.profile = new Profi le()
    }
   }

  async remove(id: string) {
    const existingUser = await this.findOne(id);
    return await this.userProfileRepository.remove(
      existingUser,
    );
  }


}

// async generateOtp(): Promise<string> {
//   return Math.floor(1000 + Math.random() * 90000).toString();
// }

// async loginOrRegister(loginDto: LoginDto): Promise<{ message: string; otp: string }> {
//   const { phoneNumber } = loginDto;
//   let user = await this.userRepository.findOne({ where: { phoneNumber } });
//   const otp = await this.generateOtp();

//   if (!user) {
//     user = this.userRepository.create({ phoneNumber, otp })
//     await this.userRepository.save(user)
//     return { message: "User registered Successfully. OTP sent.", otp }
//   }

//   user.otp = otp;
//   await this.userRepository.save(user)
//   return { message: "OTP sent for login.", otp }
// }



