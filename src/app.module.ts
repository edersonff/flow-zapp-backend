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
import { User } from './users/entities/user.entity';
import { Diagram } from './diagram/entities/diagram.entity';
import { Flow } from './flow/entities/flow.entity';
import { Log } from './logs/entities/log.entity';
import { NumberEntity } from './numbers/entities/number.entity';
import { JobsModule } from './jobs/jobs.module';
import { Job } from './jobs/entities/job.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: (process.env.DB_TYPE as 'mysql') || 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root',
      entities: [User, Diagram, Flow, Job, Log, NumberEntity],
      database: process.env.DB_NAME || 'flow-zapp',
      synchronize: false,
      logging: true,
      ssl: process.env.DB_SSL === 'true',
    }),
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
