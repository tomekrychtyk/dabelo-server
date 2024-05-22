import { ObjectId } from 'mongodb';
import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';
import { DatabaseService } from '../common/services/DatabaseService';

@Injectable()
export class RecipesService extends DatabaseService {
  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    const db = await this.getDb();
    const products = db.collection('nutritionProducts');

    const product = await products.findOne({
      _id: new ObjectId(id),
    });

    console.log(product);

    return {
      id: 'abcdef',
      title: 'Recipe title-2',
      creationDate: new Date(),
      ingredients: ['milk', 'banana', 'yogurt'],
    };
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
