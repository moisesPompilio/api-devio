import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateCategoryDto } from '../../application/dto/create-category.dto';
import { Category } from '../../domain/entities/category.entity';
import { ICategoryRepository } from '../../domain/port/category-repository.port';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string): Promise<Category> {
    const category = await this.prisma.category.findUnique({ where: { id } });
    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const data: Prisma.CategoryCreateInput = { ...createCategoryDto };
    const newCategory = await this.prisma.category.create({ data });

    return newCategory;
  }

  async updateById(category: Category): Promise<void> {
    const data: Prisma.CategoryUpdateInput = { ...category };
    await this.prisma.category.update({
      where: { id: category.id },
      data,
    });
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.category.delete({ where: { id } });
  }
}
