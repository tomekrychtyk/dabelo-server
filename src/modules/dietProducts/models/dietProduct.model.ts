import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { IntegerType } from 'mongodb';

@ObjectType({ description: 'dietProduct' })
export class DietProduct {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  kcal: number;

  @Field(() => Int)
  proteins: number;

  @Field(() => Int)
  carbs: number;

  @Field(() => Int)
  fat: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitA?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitD?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitE?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitK?: number;
}
