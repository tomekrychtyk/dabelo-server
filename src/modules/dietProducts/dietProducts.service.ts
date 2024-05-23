import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../common/services/DatabaseService';
import { DietProduct } from './models';
import { DietProductsArgs } from './dto';

export const DIET_PRODUCTS_COLLECTION = 'dietProducts';

@Injectable()
export class DietProductsService extends DatabaseService {
  async findAll(dietProductsArgs: DietProductsArgs): Promise<DietProduct[]> {
    const db = await this.getDb();
    const collection = db.collection(DIET_PRODUCTS_COLLECTION);
    const products = collection.find();

    return (await products.toArray()) as DietProduct[];
  }

  async create() {}
}
