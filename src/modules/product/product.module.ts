import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { ProductService } from './aplication/service/product.service';
import { ProductController } from './adapter/http/rest/product.controller';
// eslint-disable-next-line import/extensions
import { ProductRepository } from './adapter/repository/productRepository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  imports: [PrismaModule],
})
export class ProductModule {}
