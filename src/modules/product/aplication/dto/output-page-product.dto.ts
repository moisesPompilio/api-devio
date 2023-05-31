import { Product } from '@prisma/client';

export class OutputPageProductDto {
  totalPages: number;

  products: Product[];
}
