import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { Request } from 'express';
import { covertQueryInInputPageProductDTO } from 'src/shared/util/covertQueryInInputPageProductDTO';
import { IsFuncionarioRule } from 'src/auth/decorators/is-funcionario-rule.decorator';
import {
  ApiQuery,
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Product } from 'src/modules/product/domain/entities/product.entity';
import { typeException } from 'src/shared/exception/type-http.exception';
import { OutputPageProductDto } from 'src/modules/product/aplication/dto/output-page-product.dto';
import { ProductService } from '../../../aplication/service/product.service';
import { CreateProductDto } from '../../../aplication/dto/create-product.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    summary: 'responsible for doing all the CRUD of the product',
  })
  @ApiResponse({
    status: 201,
    description: 'Save product correct and return product',
    type: Product,
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
  @ApiBearerAuth()
  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.productService.create(createProductDto);
  }

  @ApiResponse({
    status: 200,
    description: 'pick up the product and return it in page format',
    type: OutputPageProductDto,
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
  @ApiQuery({
    name: 'categoryId',
    required: false,
    type: String,
    description: 'id of the category',
  })
  @ApiQuery({
    name: 'searchByName',
    required: false,
    type: String,
    description: 'name of the product to be searched',
  })
  @ApiQuery({
    name: 'pageNumber',
    required: false,
    type: Number,
    description: 'page number',
  })
  @ApiQuery({
    name: 'pageSize',
    required: false,
    type: Number,
    description: 'number of products to display per page',
  })
  @ApiQuery({
    name: 'sortDirection',
    required: false,
    enum: ['asc', 'desc'],
    description:
      'check in which direction the items will be displayed, ascending or descending order',
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    enum: ['name', 'price'],
    description: 'which item to order, name or price',
  })
  @Get()
  @IsPublic()
  findAll(@Req() request: Request) {
    const categoryId =
      typeof request.query.categoryId === 'string'
        ? request.query.categoryId
        : undefined;
    const searchByName =
      typeof request.query.searchByName === 'string'
        ? request.query.searchByName
        : undefined;
    const inputCategoryDTO = covertQueryInInputPageProductDTO(request.query);
    return this.productService.findAll(
      inputCategoryDTO,
      categoryId,
      searchByName,
    );
  }

  @ApiResponse({
    status: 200,
    description: 'successfully changed product',
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
  @ApiBearerAuth()
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @ApiResponse({
    status: 200,
    description: 'successfully deleted product',
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
  @ApiBearerAuth()
  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(@Param('id') id: string, @IsFuncionarioRule() _: undefined) {
    return this.productService.remove(id);
  }
}
