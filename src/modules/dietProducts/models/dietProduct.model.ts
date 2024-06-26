import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

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

  @Field({ nullable: true })
  @Field(() => Int)
  vitC?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB1?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB2?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB3?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB5?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB6?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB7?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB9?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  vitB12?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  potassium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  calcium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  phosphorus?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  magnessium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  iron?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  zinc?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  copper?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  manganium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  selenium?: number;
}
