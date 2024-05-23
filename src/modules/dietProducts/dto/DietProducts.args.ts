import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@ArgsType()
export class DietProductsArgs {
  @Field({ nullable: true })
  name: string;

  @Field(() => Int)
  @Min(0)
  skip = 0;

  @Field(() => Int)
  @Max(50)
  take = 10;
}
