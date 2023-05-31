import { Product } from 'src/modules/product/domain/entities/product.entity';
import { formatterExtraProduct } from './formatador-extra-product.util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function covertProdutDbInProductEntityc(productsDB: any[]) {
  const productResponse: Product[] = [];
  productsDB.forEach(async productDb => {
    const product = new Product(
      {
        ...productDb,
        extras: await formatterExtraProduct(productDb.extras),
      },
      productDb.id,
    );
    productResponse.push(product);
  });
  return productResponse;
}
