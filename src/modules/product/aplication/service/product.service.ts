import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
// eslint-disable-next-line import/extensions
import { ProductRepository } from '../../adapter/repository/productRepository';
import { CreateProductUseCase } from '../../domain/usecase/create-product.usecase';
import { Product } from '../../domain/entities/product.entity';
import { UpdateByIdProductUseCase } from '../../domain/usecase/update-product.usecase';
import { GetPageProductUsecase } from '../../domain/usecase/get-page-product.usecase';
import { InputPageProductDto } from '../dto/input-page-product.dto';
import { DeleteProductUseCse } from '../../domain/usecase/delete-product.usecase';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createProductUseCase = new CreateProductUseCase(
      this.productRepository,
    );
    const product = await createProductUseCase.handle(createProductDto);
    return product;
  }

  async findAll(
    inputPageProduct?: InputPageProductDto,
    categoryId?: string,
    searchByName?: string,
  ) {
    const getPageProductUsecase = new GetPageProductUsecase(
      this.productRepository,
    );
    return getPageProductUsecase.handle(
      inputPageProduct,
      categoryId,
      searchByName,
    );
  }

  async update(id: string, updateProductDto: CreateProductDto) {
    const updateByIdProductUseCase = new UpdateByIdProductUseCase(
      this.productRepository,
    );
    await updateByIdProductUseCase.handle(updateProductDto, id);
  }

  async remove(id: string) {
    const deleteProductUseCse = new DeleteProductUseCse(this.productRepository);
    await deleteProductUseCse.handle(id);
  }
}
