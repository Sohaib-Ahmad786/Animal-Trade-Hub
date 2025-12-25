import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animals } from './sell-Animals.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SellAnimalsService {
    constructor (@InjectRepository(Animals) private animalsRepository:Repository<Animals>){}
    
    async sell(category:string, age:number, gender:string, quantity:number, price:number, location:string, description:string, image:string){
    
    const newAnimals=this.animalsRepository.create({
        category,
        age,
        gender,
        quantity,
        price,
        location,
        description,
        image
    })
    try{
        message:"Animal Listed Successfully";
    return await this.animalsRepository.save(newAnimals);
    
    }catch(error){
        throw new Error("Error saving animal: " + error.message);
    }
}
getAllAnimals(){
    return this.animalsRepository.find();
}

countAllAnimals(){
    return this.animalsRepository.count();
}

getAnimalById(id:number){
    return this.animalsRepository.findOneBy({id});
}

countPendingAnimals(){
    return this.animalsRepository.count({where:{status:"Pending"}});
}

async getPendingAnimals(){
    return await this.animalsRepository.find({
        where:{status:"Pending"},
    });
}


async getAnimalsPerDay(){
    return this.animalsRepository
    .createQueryBuilder("animal")
    .select("Date(animal.createdAt)", "date")
    .addSelect("COUNT(*)", "count")
    .groupBy("date")
    .orderBy("date", "ASC")
    .getRawMany();
}


async updateStatus(id:number, status:string){
    await this.animalsRepository.update({id}, {status});
    return {message : `Animal ${status} successfully`};
}


updateAnimal(id:number, category:string, age:number, gender:string, quantity:number,price:number, location:string, description:string, image:string){
    return this.animalsRepository.update(id, {
        category,
        age,
        gender,
        quantity,
        price,
        location,
        description,
        image,
    })
}

deleteAnimal(id:number){
    return this.animalsRepository.delete(id);
}
}
