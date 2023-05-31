import { IProductRepository } from '../port/product-repository.port';

export class DeleteProductUseCse {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(id: string): Promise<void> {
    await this.productRepository.deleteById(id);
  }
}
