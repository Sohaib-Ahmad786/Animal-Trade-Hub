import { User } from "src/users/users.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm";

@Entity("Animals")
export class Animals{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    category:string;

    @Column()
    age:number;

    @Column()
    gender: string;

    @Column()
    quantity:number;

    @Column()
    price:number;

    @Column()
    location:string;

    @Column()
    description:string;

    @Column()
    image:string;

    @Column({default:"Pending"})
    status:string;


    @Column({type:"timestamp", default:()=>"CURRENT_TIMESTAMP"})
    createdAt:Date;

    @ManyToOne(()=>User,(user)=>user.animals, {onDelete:"CASCADE"})
    user:User;
}