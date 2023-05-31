import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { ExtraModule } from './modules/extra/extra.module';
import { OrderModule } from './modules/order/order.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './config/prisma/prisma.module';
import { PrismaService } from './config/prisma/prisma.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    UserModule,
    CategoryModule,
    ProductModule,
    ExtraModule,
    OrderModule,
    AuthModule,
    PrismaModule,
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
