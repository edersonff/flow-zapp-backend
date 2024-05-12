import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NumbersModule } from './numbers/numbers.module';
import { LogsModule } from './logs/logs.module';
import { FlowModule } from './flow/flow.module';
import { DiagramModule } from './diagram/diagram.module';
import { JobsModule } from './jobs/jobs.module';
import { dataSourceOptions } from './db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    UsersModule,
    NumbersModule,
    LogsModule,
    FlowModule,
    DiagramModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
