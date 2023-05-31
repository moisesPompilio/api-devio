import { InputPageProductDto } from '../../aplication/dto/input-page-product.dto';
import { OutputPageProductDto } from '../../aplication/dto/output-page-product.dto';
import { PageProduct } from '../entities/page-product.entity';
import { IProductRepository } from '../port/product-repository.port';

export class GetPageProductUsecase {
  constructor(private readonly productRepository: IProductRepository) {}

  async handle(
    inputPageProduct?: InputPageProductDto,
    categoryId?: string,
    searchByName?: string,
  ): Promise<OutputPageProductDto> {
    const pageProductRequest = new PageProduct(inputPageProduct);
    if (categoryId !== undefined) {
      const product = await this.productRepository.getPageByCategory(
        categoryId,
        pageProductRequest,
      );
      return product;
    }
    if (searchByName !== undefined) {
      const products = await this.productRepository.getByName(
        searchByName,
        pageProductRequest,
      );
      return products;
    }
    const products = await this.productRepository.getPage(pageProductRequest);
    return products;
  }
}
