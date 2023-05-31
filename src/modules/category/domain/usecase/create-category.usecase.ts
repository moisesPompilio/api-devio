import { CreateCategoryDto } from '../../application/dto/create-category.dto';
import { Category } from '../entities/category.entity';
import { ICategoryRepository } from '../port/category-repository.port';

export class CreateCategoryUsecase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async handle(inputCategoryDTO: CreateCategoryDto): Promise<Category> {
    // const existingCategory = await this.categoryRepository.getByName(
    //   inputCategoryDTO.name,
    // );
    // if (this.categoryNameExists(existingCategory, inputCategoryDTO)) {
    //   return Promise.reject(new Error('Category name already exists'));
    // }
    const category = new Category(inputCategoryDTO);
    await this.categoryRepository.create(category);
    return category;
  }

  //   private categoryNameExists(
  //     existingCategory: Category,
  //     inputCategoryDTO: IInputCategoryDTO,
  //   ): boolean {
  //     return (
  //       existingCategory !== null &&
  //       existingCategory.name === inputCategoryDTO.name
  //     );
  //   }
}
