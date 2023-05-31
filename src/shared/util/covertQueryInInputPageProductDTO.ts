import { InputPageProductDto } from 'src/modules/product/aplication/dto/input-page-product.dto';

export function covertQueryInInputPageProductDTO(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any,
): InputPageProductDto {
  return {
    pageNumber:
      query.pageNumber === undefined ? undefined : Number(query.pageNumber),
    pageSize: query.pageSize === undefined ? undefined : Number(query.pageSize),
    sortDirection:
      typeof query.sortDirection === 'string' ? query.sortDirection : undefined,
    orderBy: typeof query.orderBy === 'string' ? query.orderBy : undefined,
  };
}
