import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { DietProductsService } from './dietProducts.service';
import { DietProduct } from './models';
import { DietProductsArgs, CreateDietProductInput } from './dto';

@Resolver(() => DietProduct)
export class DietProductsResolver {
  constructor(private readonly dietProductsService: DietProductsService) {}

  @Query(() => [DietProduct])
  async dietProducts(
    @Args() dietProductArgs: DietProductsArgs,
  ): Promise<DietProduct[]> {
    return this.dietProductsService.findAll(dietProductArgs);
  }

  @Mutation(() => DietProduct)
  async addDietProduct(
    @Args('CreateDietProductInput')
    createDietProductInput: CreateDietProductInput,
  ) {
    return this.dietProductsService.create(createDietProductInput);
  }
}
