import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post("signup")
    signUp(
        @Body("name") name:string,
        @Body("email") email:string,
        @Body("password") password:string, 
    ){
        return this.usersService.signUp(name,email,password)
    }


    @Post("login")
    login(
        @Body("email") email:string,
        @Body("password") password:string,
    ){
        return this.usersService.login(email,password);
    }

    @Get("count")
    getUsersCount(){
        return this.usersService.getUsersCount();
    }
}


