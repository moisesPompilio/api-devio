import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { calculateTotalPages } from 'src/shared/util/calculate-total-pages.util';
import { Prisma } from '@prisma/client';
import { covertProdutDbInProductEntityc } from 'src/shared/util/covert-produtDb-in-productEntity.util';
import { Product } from '../../domain/entities/product.entity';
import { OutputPageProductDto } from '../../aplication/dto/output-page-product.dto';
import { PageProduct } from '../../domain/entities/page-product.entity';
// eslint-disable-next-line import/extensions
import { IProductRepository } from '../../domain/port/product-repository.port';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: Product): Promise<void> {
    const extras: Prisma.ExtraWhereUniqueInput[] = createProductDto.extras.map(
      (extraId: string) => {
        return { id: extraId };
      },
    );
    await this.prisma.product.create({
      data: {
        ...createProductDto,
        extras: { connect: extras },
      },
      include: { extras: true },
    });
  }

  async updateById(createProductDto: Product): Promise<void> {
    const extras: Prisma.ExtraWhereUniqueInput[] = createProductDto.extras.map(
      (extraId: string) => {
        return { id: extraId };
      },
    );
    const data: Prisma.ProductUpdateInput = {
      ...createProductDto,
      extras: { connect: extras },
    };
    await this.prisma.product.update({
      where: { id: createProductDto.id },
      data,
    });
  }

  async findAll(): Promise<Product[]> {
    const productsDB = await this.prisma.product.findMany({
      include: { extras: true },
    });
    const productResponse: Product[] = await covertProdutDbInProductEntityc(
      productsDB,
    );
    return productResponse;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }

  async getByName(
    name: string,
    pageProductRequest: PageProduct,
  ): Promise<OutputPageProductDto> {
    const skip =
      (pageProductRequest.pageNumber - 1) * pageProductRequest.pageSize;
    const coutProduct = await this.prisma.product.count({
      where: {
        name: {
          startsWith: name,
        },
      },
    });
    const productsDB = await this.prisma.product.findMany({
      include: { extras: true },
      where: {
        name: {
          startsWith: name,
        },
      },
      skip,
      take: pageProductRequest.pageSize,
      orderBy: {
        [pageProductRequest.orderBy]: pageProductRequest.sortDirection,
      },
    });
    const productResponse: Product[] = await covertProdutDbInProductEntityc(
      productsDB,
    );
    return {
      totalPages: calculateTotalPages(coutProduct, pageProductRequest.pageSize),
      products: productResponse,
    };
  }

  async getPageByCategory(
    categoryId: string,
    pageProductRequest: PageProduct,
  ): Promise<OutputPageProductDto> {
    const skip =
      (pageProductRequest.pageNumber - 1) * pageProductRequest.pageSize;
    const coutProduct = await this.prisma.product.count({
      where: { categoryId },
    });
    const productsDB = await this.prisma.product.findMany({
      include: { extras: true },
      where: { categoryId },
      skip,
      take: pageProductRequest.pageSize,
      orderBy: {
        [pageProductRequest.orderBy]: pageProductRequest.sortDirection,
      },
    });
    const productResponse: Product[] = await covertProdutDbInProductEntityc(
      productsDB,
    );
    return {
      totalPages: calculateTotalPages(coutProduct, pageProductRequest.pageSize),
      products: productResponse,
    };
  }

  async getPage(
    pageProductRequest: PageProduct,
  ): Promise<OutputPageProductDto> {
    const skip =
      (pageProductRequest.pageNumber - 1) * pageProductRequest.pageSize;
    const coutProduct = await this.prisma.product.count();
    const productsDB = await this.prisma.product.findMany({
      include: { extras: true },
      skip,
      take: pageProductRequest.pageSize,
      orderBy: {
        [pageProductRequest.orderBy]: pageProductRequest.sortDirection,
      },
    });
    const productResponse: Product[] = await covertProdutDbInProductEntityc(
      productsDB,
    );
    return {
      totalPages: calculateTotalPages(coutProduct, pageProductRequest.pageSize),
      products: productResponse,
    };
  }
}
