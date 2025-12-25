import { Animals } from "src/sell-animals/sell-Animals.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";

@Entity("User")
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;

    @OneToMany(()=>Animals,(animal)=>animal.user)
    animals:Animals[];
}