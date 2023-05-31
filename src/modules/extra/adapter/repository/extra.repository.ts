import { Extra, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { IExtraRepository } from '../../domain/port/extra-repository.port';
import { CreateExtraDto } from '../../aplication/dto/create-extra.dto';

@Injectable()
export class ExtraRepository implements IExtraRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string): Promise<Extra> {
    const extra = await this.prisma.extra.findUnique({ where: { id } });
    return extra;
  }

  async create(createExtraDto: CreateExtraDto): Promise<Extra> {
    const data: Prisma.ExtraCreateInput = { ...createExtraDto };
    const newExtra = await this.prisma.extra.create({ data });

    return newExtra;
  }

  async updateById(extra: Extra): Promise<void> {
    const data: Prisma.ExtraUpdateInput = { ...extra };
    await this.prisma.extra.update({
      where: { id: extra.id },
      data,
    });
  }

  async getAll(): Promise<Extra[]> {
    const categories = await this.prisma.extra.findMany();
    return categories;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.extra.delete({ where: { id } });
  }
}
