import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { CategoryService } from './application/service/category.service';
import { CategoryController } from './adapter/http/rest/category.controller';
import { CategoryRepository } from './adapter/repository/category.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  imports: [PrismaModule],
})
export class CategoryModule {}
