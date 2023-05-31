import { Extra } from '../entities/extra.entity';

export interface IExtraRepository {
  create(category: Extra): Promise<Extra>;
  deleteById(id: string): Promise<void>;
  getAll(): Promise<Extra[]>;
  getById(id: string): Promise<Extra>;
  updateById(category: Extra): Promise<void>;
}
