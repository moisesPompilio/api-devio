import { IsEnum, IsInt } from 'class-validator';
import { InputPageProductDto } from '../../aplication/dto/input-page-product.dto';

enum sortDirection {
  desc = 'desc',
  asc = 'asc',
}

enum orderBy {
  name = 'name',
  price = 'price',
}

export class PageProduct {
  @IsInt()
  pageNumber: number;

  @IsInt()
  pageSize: number;

  @IsEnum(sortDirection)
  sortDirection: 'desc' | 'asc';

  @IsEnum(orderBy)
  orderBy: 'name' | 'price';

  constructor(input?: InputPageProductDto) {
    this.pageNumber = input?.pageNumber ?? 1;
    this.pageSize = input?.pageSize ?? 20;
    if (
      input?.sortDirection === 'asc' ||
      input?.sortDirection === 'desc' ||
      input?.sortDirection === undefined
    ) {
      this.sortDirection = input?.sortDirection === 'desc' ? 'desc' : 'asc';
    } else {
      throw new Error("Invalid sortDirection. Can be either 'desc' or 'asc'");
    }
    if (
      input?.orderBy === 'name' ||
      input?.orderBy === 'price' ||
      input?.orderBy === undefined
    ) {
      this.orderBy = input?.orderBy === 'price' ? 'price' : 'name';
    } else {
      throw new Error("Invalid orderBy. Can be either 'name' or 'price'");
    }
  }
}
