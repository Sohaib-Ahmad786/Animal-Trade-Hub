import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(name: string, email: string, password: string) {
    return this.usersService.signUp(name, email, password);
  }
  
  async login(email: string, password: string) {
  const result = await this.usersService.login(email, password);

  if(!result.user){
    throw new UnauthorizedException(result.message);
  }

  const payload={id:result.user.id, email:result.user.email};
  const token=this.jwtService.sign(payload);

  return{
    message:"Login Successful",
    token,
    user:result.user,
  }
  }
}
