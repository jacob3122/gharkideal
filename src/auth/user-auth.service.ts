import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from 'src/users/dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { generateAuthToken } from 'src/utils/auth-token';

@Injectable()
export class UserAuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // Generate OTP (5-digit)
  private generateotp(): string {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  async loginOrRegister(loginDto: LoginDto): Promise<{ message: string; otp?: string }> {
    const { phoneNumber } = loginDto;
    let user = await this.userRepository.findOne({ where: { phoneNumber } });

    if (!user) {
        user = this.userRepository.create({ phoneNumber });
        await this.userRepository.save(user);
        return { message: 'User registered successfully.' };
    }

    const otp = this.generateotp();
    user.otp = otp;
    await this.userRepository.save(user);

    return { message: 'OTP sent for login.', otp };
}



async verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{ message: string; authToken: string; role: string }> {
  const { otp } = verifyOtpDto;

  const user = await this.userRepository.findOne({ where: { otp } });
  // if (!user) throw new BadRequestException('Invalid OTP');

  if (user.otp !== otp) throw new BadRequestException('Invalid OTP.');

  console.log("user-------->", user.otp, otp);

  //  Generate and save new auth token
  const authToken = generateAuthToken();
  user.authToken = authToken;
  await this.userRepository.save(user);

  console.log("user after auth -------->", user);
  return { message: 'OTP verified successfully.', authToken, role: "user" };
}
}






// create(createAuthDto: CreateAuthDto) {
//   return 'This action adds a new auth';
// }

// findAll() {
//   return `This action returns all auth`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} auth`;
// }

// update(id: number, updateAuthDto: UpdateAuthDto) {
//   return `This action updates a #${id} auth`;
// }

// remove(id: number) {
//   return `This action removes a #${id} auth`;
// }

