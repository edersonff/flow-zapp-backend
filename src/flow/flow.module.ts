import { Module } from '@nestjs/common';
import { FlowsService } from './flow.service';
import { FlowController } from './flow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flow } from './entities/flow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flow])],
  controllers: [FlowController],
  providers: [FlowsService],
})
export class FlowModule {}
