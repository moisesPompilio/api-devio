import { Body, Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { typeException } from 'src/shared/exception/type-http.exception';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: 201,
    description: 'Save Extra correct and return Extra',
    type: User,
  })
  @ApiResponse({
    status: 500,
    description: 'internal error when doing the operation',
    type: typeException,
  })
  @ApiResponse({
    status: 400,
    description: 'request has an error',
    type: typeException,
  })
  @Post()
  @IsPublic()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
