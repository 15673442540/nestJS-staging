import { Controller, Get, Post, Body, Patch, Param, Delete, LoggerService, Inject, HttpException, NotFoundException, Res, MiddlewareConsumer, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from '../enum/config.enum';
import { Response } from 'express';
import { CatsService } from '../cats/cats.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private config: ConfigService,
    private catsService: CatsService
  ) { }

  @Get('getCatsService')
  getCatsService() {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto,@Res() response: Response) {
    // return this.userService.create(createUserDto);
    response.status(200).send('delete')
  }

  @Get('ab*cd')
  findAll() {
    console.log(this.config.get(ConfigEnum.HOST, '9999'))
    console.log(this.config.get(ConfigEnum.USERNAME, '张三'))
    
    this.logger.log('info',`手动log${new Date().getTime()}`);
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
