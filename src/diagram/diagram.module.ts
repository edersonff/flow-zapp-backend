import { Module } from '@nestjs/common';
import { DiagramsService } from './diagram.service';
import { DiagramController } from './diagram.controller';
import { Diagram } from './entities/diagram.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Diagram])],
  controllers: [DiagramController],
  providers: [DiagramsService],
})
export class DiagramModule {}
