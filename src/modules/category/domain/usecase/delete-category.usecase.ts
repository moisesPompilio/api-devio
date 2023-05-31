import { ICategoryRepository } from '../port/category-repository.port';

export class DeleteCategoryUseCse {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async handle(id: string) {
    // uuidIsInvalid(id, 'id');
    // await this.getByIdCategoryUseCase.handle(id);
    await this.categoryRepository.deleteById(id);
  }
}
