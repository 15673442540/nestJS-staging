
###介绍
Nest (NestJS) 是一个用于构建高效、可扩展的Node.js服务器端应用程序的框架。使用 TypeScript 构建并完全支持TypeScript，并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式反应式编程）的框架。内置了Express(默认)和Fastify等Node.js框架


###nestJs与koa，express的区别
koa，express本身不带任何其他的库，如果需要使用路由、错误处理、认证等功能需要自己安装并引入，什么都需要自己DIY。而nestJs他是一个企业级框架，他的规范很多，提供了各种开箱即用的技术，如认证、数据库、路由、http状态码、安全、配置、请求等等


###安装
要求：node.js version>10.x  
我的版本是v16.13.0,建议大家大版本跟我一致，因为后面配置typeorm时，node版本不一致容易出问题

```javascript
npm i -g @nestjs/cli
nest new project-name
npm run  install
npm run  start:dev
```

###目录结构
src
 ├── app.controller.spec.ts   (测试文件)
 ├── app.controller.ts   (控制器)
 ├── app.module.ts   (应用程序的根模块)
 ├── app.service.ts   (编写后端业务文件)
 └── main.ts   (应用程序的入口文件)


###mian.js
```javascript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //创建一个 Nest 应用实例
  const app = await NestFactory.create(AppModule);

 //如果想使用其他的Http框架，有两个开箱即用的框架express 和 fastify。只需要传递类型给NestFactory.create() 函数
 //const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}


bootstrap();
```










