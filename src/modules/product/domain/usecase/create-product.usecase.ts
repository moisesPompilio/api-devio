import { CreateProductDto } from '../../aplication/dto/create-product.dto';
import { Product } from '../entities/product.entity';
// eslint-disable-next-line import/extensions
import { IProductRepository } from '../port/product-repository.port';

export class CreateProductUseCase {
  constructor(private readonly productRepositorie: IProductRepository) {}

  async handle(inputProductDTO: CreateProductDto): Promise<Product> {
    const product = new Product(inputProductDTO);
    await this.productRepositorie.create(product);
    return product;
  }
}
