import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/modules/user/entities/user.entity';
import { IsFuncionarioRule } from 'src/auth/decorators/is-funcionario-rule.decorator';
import { typeException } from 'src/shared/exception/type-http.exception';
import { Order } from 'src/modules/order/domain/schema/order.entity';
import { OrderService } from '../../../aplication/service/order.service';
import { CreateOrderDto } from '../../../aplication/dto/create-order.dto';

@ApiBearerAuth()
@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiResponse({
    status: 201,
    description: 'save order sucess',
    type: Order,
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
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. access denied',
    type: typeException,
  })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @CurrentUser() user: User) {
    return this.orderService.create(createOrderDto, user);
  }

  @ApiResponse({
    status: 200,
    description: 'get order sucess',
    type: Order,
    isArray: true,
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
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. access denied',
    type: typeException,
  })
  @Get()
  findAll(@CurrentUser() user: User) {
    return this.orderService.findAll(user);
  }

  @ApiResponse({
    status: 200,
    description: 'placing order with status Pronto',
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
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. access denied',
    type: typeException,
  })
  @Get('pronto/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  orderPronto(@Param('id') id: string, @IsFuncionarioRule() _: undefined) {
    return this.orderService.orderPronto(id);
  }

  @ApiResponse({
    status: 200,
    description: 'placing order with status Retirada',
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
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. access denied',
    type: typeException,
  })
  @Get('retirada/:id')
  orderRetirada(@Param('id') id: string) {
    return this.orderService.orderRetirada(id);
  }
}
