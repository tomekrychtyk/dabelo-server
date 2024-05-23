import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../common/services/DatabaseService';
import { DietProduct } from './models';
import { DietProductsArgs, CreateDietProductInput } from './dto';

export const DIET_PRODUCTS_COLLECTION = 'dietProducts';

@Injectable()
export class DietProductsService extends DatabaseService {
  async findAll(dietProductsArgs: DietProductsArgs): Promise<DietProduct[]> {
    const db = await this.getDb();
    const collection = db.collection(DIET_PRODUCTS_COLLECTION);

    const products = collection.find({
      name: {
        $regex: `/*${dietProductsArgs.name.toLowerCase()}/*`,
        $options: 'i',
      },
    });

    return (await products.toArray()) as DietProduct[];
  }

  async create(
    createDietProductInput: CreateDietProductInput,
  ): Promise<DietProduct> {
    const id: string = uuidv4();

    const db = await this.getDb();
    const collection = db.collection(DIET_PRODUCTS_COLLECTION);

    await collection.insertOne({ id, ...createDietProductInput });

    return {
      id,
      ...createDietProductInput,
    };
  }
}
