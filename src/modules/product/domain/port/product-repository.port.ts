import { Product } from '@prisma/client';
import { PageProduct } from '../entities/page-product.entity';
import { OutputPageProductDto } from '../../aplication/dto/output-page-product.dto';

export interface IProductRepository {
  create(produtc: Product): Promise<void>;
  deleteById(id: string): Promise<void>;
  getByName(
    name: string,
    pageProductRequest: PageProduct,
  ): Promise<OutputPageProductDto>;
  getPageByCategory(
    categoryId: string,
    pageProduct: PageProduct,
  ): Promise<OutputPageProductDto>;
  getPage(pageProduct: PageProduct): Promise<OutputPageProductDto>;
  updateById(produtc: Product): Promise<void>;
}
