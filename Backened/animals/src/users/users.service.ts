import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,
){}
async signUp(name:string, email:string, password:string){
    const hashedpass=await bcrypt.hash(password, 10);

const newUser=this.userRepository.create({
    name,
    email,
    password:hashedpass
});
return await this.userRepository.save(newUser) ;
}


async login(email:string,password:string){
    const user=await this.userRepository.findOne({where:{email}});
    if(!user){
        return {message:"User Not Found"}
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return{ message:"Invalid Password"};
    }
    const payload = { id: user.id, email: user.email };
    return{
        message:"Login Successful",
        user:{
            id:user.id,
            name:user.name,
            email:user.email,
        }
    };
}

async getUsersCount(){
    return this.userRepository.count();
}

}
