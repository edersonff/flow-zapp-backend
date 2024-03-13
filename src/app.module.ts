import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { NumbersModule } from './numbers/numbers.module';
import { LogsModule } from './logs/logs.module';
import { FlowModule } from './flow/flow.module';
import { DiagramModule } from './diagram/diagram.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      entities: [User],
      database: 'flow-zapp',
      synchronize: true,
      logging: true,
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    NumbersModule,
    LogsModule,
    FlowModule,
    DiagramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
