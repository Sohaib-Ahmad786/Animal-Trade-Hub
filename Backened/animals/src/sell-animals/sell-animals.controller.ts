import { Body, Controller ,Get,Param,Post, Put,Delete} from '@nestjs/common';
import { SellAnimalsService } from './sell-animals.service';

@Controller('sell-animals')
export class SellAnimalsController {
    constructor (private readonly sellAnimalsService:SellAnimalsService){}
    @Post("sell")
    sell(
        @Body("category") category:string,
        @Body("age") age:number,
        @Body("gender") gender:string,
        @Body("quantity") quantity:number,
        @Body("price") price:number,
        @Body("location") location:string,
        @Body("description") description:string,
        @Body("image") image:string,
     ){
        return this.sellAnimalsService.sell(category,age,gender,quantity,price,location,description,image);
     }

     @Get()
     getAllAnimals(){
        return this.sellAnimalsService.getAllAnimals();
     }

      @Get("count")
         getUsersCount(){
             return this.sellAnimalsService.countAllAnimals();
         }

        
         @Get("per_day")
         getAnimalsPerDay(){
            return this.sellAnimalsService.getAnimalsPerDay();
         }

         @Get("Pending")
       async  getPendingAnimals(){
            return this.sellAnimalsService.getPendingAnimals();
         }

         @Put("approve/:id")
async approveAnimal(@Param("id") id: number) {
  return this.sellAnimalsService.updateStatus(id, "approved");
}

@Put("reject/:id")
async rejectAnimal(@Param("id") id: number) {
  return this.sellAnimalsService.updateStatus(id, "rejected");
}

@Get("pendingCount")
getPendingAnimalsCount(){
   return this.sellAnimalsService.countPendingAnimals();
}

 @Get(":id")
         getAnimalById(@Param("id") id:number){
            return this.sellAnimalsService.getAnimalById(id);
         }

         
         @Put(":id")
         updateAnimal(@Param("id") id:number, @Body("category") category:string,
         @Body("age") age:number,
         @Body("gender") gender:string,
         @Body("quantity") quantity:number,
         @Body("price") price:number,
         @Body("location") location:string,
         @Body("description") description:string,
         @Body("image") image:string,
      ){
         return this.sellAnimalsService.updateAnimal(id, category,age,gender,quantity,price,location,description,image);
      }

      @Delete(":id")
      deleteAnimal(@Param("id") id:number){
         return this.sellAnimalsService.deleteAnimal(id);
      }
}
