import { Category } from '@prisma/client';

export interface ICategoryRepository {
  create(category: Category): Promise<Category>;
  deleteById(id: string): Promise<void>;
  getAll(): Promise<Category[]>;
  getById(name: string): Promise<Category>;
  updateById(category: Category): Promise<void>;
}
