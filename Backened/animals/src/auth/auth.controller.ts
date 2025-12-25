import { Controller, Post, Body,Get, UseGuards, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { Request } from 'express';
@Controller('users')
export class UsersController {}
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

 @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    return this.authService.login(email, password);
  }

  @Post('signup')
  signUp(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.signUp(name, email, password);
  }

  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user; // payload from JWT validate
  }
}
