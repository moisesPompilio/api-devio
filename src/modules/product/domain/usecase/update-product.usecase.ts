import { CreateProductDto } from '../../aplication/dto/create-product.dto';
import { Product } from '../entities/product.entity';
// eslint-disable-next-line import/extensions
import { IProductRepository } from '../port/product-repository.port';

export class UpdateByIdProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(inputProductDTO: CreateProductDto, id: string): Promise<void> {
    const product = new Product(inputProductDTO, id);
    await this.productRepository.updateById(product);
  }
}
