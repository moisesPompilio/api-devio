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
import { ApiBearerAuth } from '@nestjs/swagger';
import { CategoryService } from '../../../application/service/category.service';
import { CreateCategoryDto } from '../../../application/dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiBearerAuth()
  @Post()
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @IsPublic()
  findAll() {
    return this.categoryService.getAll();
  }

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

  @ApiBearerAuth()
  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(@Param('id') id: string, @IsFuncionarioRule() _: undefined) {
    return this.categoryService.delete(id);
  }
}
