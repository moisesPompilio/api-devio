import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { ExtraService } from './aplication/service/extra.service';
import { ExtraController } from './adapter/http/rest/extra.controller';
import { ExtraRepository } from './adapter/repository/extra.repository';

@Module({
  controllers: [ExtraController],
  providers: [ExtraService, ExtraRepository],
  imports: [PrismaModule],
})
export class ExtraModule {}
