/* eslint-disable class-methods-use-this */
import { CreateProductDto } from '../../aplication/dto/create-product.dto';
import { OutputPageProductDto } from '../../aplication/dto/output-page-product.dto';
import { PageProduct } from '../entities/page-product.entity';
import { Product } from '../entities/product.entity';
// eslint-disable-next-line import/extensions
import { IProductRepository } from '../port/product-repository.port';
import { CreateProductUseCase } from './create-product.usecase';

// Mock implementation of the product repository
class ProductRepositoryMock implements IProductRepository {
  products: Product;

  deleteById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getByName(
    name: string,
    pageProductRequest: PageProduct,
  ): Promise<OutputPageProductDto> {
    throw new Error('Method not implemented.');
  }

  getPageByCategory(
    categoryId: string,
    pageProduct: PageProduct,
  ): Promise<OutputPageProductDto> {
    throw new Error('Method not implemented.');
  }

  getPage(pageProduct: PageProduct): Promise<OutputPageProductDto> {
    throw new Error('Method not implemented.');
  }

  updateById(produtc: Product): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async create(product: Product): Promise<void> {
    this.products = product;
  }
}

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productRepository: ProductRepositoryMock;

  beforeEach(() => {
    productRepository = new ProductRepositoryMock();
    createProductUseCase = new CreateProductUseCase(productRepository);
  });

  it('should create a product successfully', async () => {
    // Arrange
    const createProductDto: CreateProductDto = {
      name: 'Product Name',
      description: 'Product Description',
      price: 9.99,
      categoryId: 'sdas',
      code: 'dsddsa',
      extras: ['sad'],
      image: 'sda',
    };

    // Act
    const createdProduct = await createProductUseCase.handle(createProductDto);

    // Assert
    expect(createdProduct).toBeDefined();
    expect(createdProduct.id).toBeDefined();
    expect(createdProduct.name).toBe(createProductDto.name);
    expect(createdProduct.description).toBe(createProductDto.description);
    expect(createdProduct.price).toBe(createProductDto.price);
  });
});
