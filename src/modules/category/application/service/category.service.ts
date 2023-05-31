import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { CategoryRepository } from '../../adapter/repository/category.repository';
import { CreateCategoryUsecase } from '../../domain/usecase/create-category.usecase';
import { Category } from '../../domain/entities/category.entity';
import { GetAllCategoryUsecase } from '../../domain/usecase/get-all-category.usecase';
import { UpdateByIdCategoryUsecase } from '../../domain/usecase/update-category.usecase';
import { DeleteCategoryUseCse } from '../../domain/usecase/delete-category.usecase';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createCategoryUsecase = new CreateCategoryUsecase(
      this.categoryRepository,
    );
    const category = await createCategoryUsecase.handle(createCategoryDto);
    return category;
  }

  getAll() {
    const getAllCategoryUsecase = new GetAllCategoryUsecase(
      this.categoryRepository,
    );
    const categories = getAllCategoryUsecase.handle();
    return categories;
  }

  async update(id: string, updateCategoryDto: CreateCategoryDto) {
    const updateCategoryUsecase = new UpdateByIdCategoryUsecase(
      this.categoryRepository,
    );
    await updateCategoryUsecase.handle(updateCategoryDto, id);
  }

  async delete(id: string) {
    const deleteCategoryUseCse = new DeleteCategoryUseCse(
      this.categoryRepository,
    );
    await deleteCategoryUseCse.handle(id);
  }
}
