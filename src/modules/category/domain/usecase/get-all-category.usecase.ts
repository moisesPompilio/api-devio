import { ICategoryRepository } from '../port/category-repository.port';

export class GetAllCategoryUsecase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async handle() {
    const categories = await this.categoryRepository.getAll();
    return categories;
  }
}
