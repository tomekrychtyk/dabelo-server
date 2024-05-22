import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {
      id: 'abcdef',
      title: 'Recipe title-2',
      creationDate: new Date(),
      ingredients: ['milk', 'banana', 'yogurt'],
    };
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    console.log(recipesArgs);
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
