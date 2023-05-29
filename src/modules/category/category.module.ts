import { Module } from '@nestjs/common';
import { CategoryService } from './application/service/category.service';
import { CategoryController } from './adapter/http/category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
