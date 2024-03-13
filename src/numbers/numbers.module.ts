import { Module } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberEntity } from './entities/number.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NumberEntity])],
  controllers: [NumbersController],
  providers: [NumbersService],
})
export class NumbersModule {}
