import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { DietProductsService } from './dietProducts.service';
import { DietProduct } from './models';
import { DietProductsArgs } from './dto';

@Resolver(() => DietProduct)
export class DietProductsResolver {
  constructor(private readonly dietProductsService: DietProductsService) {}

  @Query(() => [DietProduct])
  dietProducts(
    @Args() dietProductArgs: DietProductsArgs,
  ): Promise<DietProduct[]> {
    return this.dietProductsService.findAll(dietProductArgs);
  }

  @Mutation(() => DietProduct)
  addDietProduct() {
    return this.dietProductsService.create();
  }
}
