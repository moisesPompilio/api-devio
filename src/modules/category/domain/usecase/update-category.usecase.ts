import { CreateCategoryDto } from '../../application/dto/create-category.dto';
import { Category } from '../entities/category.entity';
import { ICategoryRepository } from '../port/category-repository.port';

export class UpdateByIdCategoryUsecase {
  constructor(
    private readonly categoryRepository: ICategoryRepository, // private readonly getByIdCategoryUseCase: GetByIdCategoryUseCase,
  ) {}

  async handle(inputCategoryDTO: CreateCategoryDto, id: string) {
    // uuidIsInvalid(id, 'id');
    // await this.getByIdCategoryUseCase.handle(id);
    // const categoryToCheckForDuplicates =
    //   await this.categoryRepository.getByName(inputCategoryDTO.name);
    // if (
    //   this.isCategoryNameDuplicated(
    //     categoryToCheckForDuplicates,
    //     inputCategoryDTO,
    //     id,
    //   )
    // ) {
    //   return Promise.reject(
    //     new Error('Category name is already being used by another category'),
    //   );
    // }
    const category = new Category(inputCategoryDTO, id);
    await this.categoryRepository.updateById(category);
  }

  //   private isCategoryNameDuplicated(
  //     categoryToCheckForDuplicates: Category,
  //     inputCategoryDTO: IInputCategoryDTO,
  //     id: string,
  //   ): boolean {
  //     return (
  //       categoryToCheckForDuplicates !== null &&
  //       categoryToCheckForDuplicates.name === inputCategoryDTO.name &&
  //       categoryToCheckForDuplicates.id !== id
  //     );
  //   }
}
