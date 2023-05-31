import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { IsFuncionarioRule } from 'src/auth/decorators/is-funcionario-rule.decorator';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { typeException } from 'src/shared/exception/type-http.exception';
import { Category } from 'src/modules/category/domain/entities/category.entity';
import { CategoryService } from '../../../application/service/category.service';
import { CreateCategoryDto } from '../../../application/dto/create-category.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiResponse({
    status: 201,
    description: 'save extra sucess',
    type: Category,
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
    @Body() createCategoryDto: CreateCategoryDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiResponse({
    status: 200,
    description: 'get extra sucess',
    isArray: true,
    type: Category,
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
  @Get()
  @IsPublic()
  findAll() {
    return this.categoryService.getAll();
  }

  @ApiResponse({
    status: 200,
    description: 'update extra sucess',
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
    @Body() updateCategoryDto: CreateCategoryDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Delete extra sucess',
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
    return this.categoryService.delete(id);
  }
}
