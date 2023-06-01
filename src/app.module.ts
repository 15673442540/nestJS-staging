import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import configuration from '../config/configuration';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './logs/logs.module';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';
import { UserMiddleware } from './middleware/userMiddleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,         //注册为全局模块
      cache: true,            //添加缓存
      load: [configuration]
    }),
    LogsModule,
    UserModule,
    ConfigModule,
    CatsModule
  ],
  controllers: [],
})

export class AppModule  {




}
