import { Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { ConfigModule } from '@nestjs/config';
import { LogsModule } from './logs/logs.module';
import { UserModule } from './user/user.module';

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
  ],
  controllers: [],
})
export class AppModule {}
