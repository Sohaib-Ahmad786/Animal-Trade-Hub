import { Module } from '@nestjs/common';
import { SellAnimalsController } from './sell-animals.controller';
import { SellAnimalsService } from './sell-animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animals } from './sell-Animals.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Animals])],
  controllers: [SellAnimalsController],
  providers: [SellAnimalsService]
})
export class SellAnimalsModule {}
