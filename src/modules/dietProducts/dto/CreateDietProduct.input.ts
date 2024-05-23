import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateDietProductInput {
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
  @IsOptional()
  vitA?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitD?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitE?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitK?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitC?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB1?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB2?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB3?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB5?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB6?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB7?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB9?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  vitB12?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  potassium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  calcium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  phosphorus?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  magnesium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  iron?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  zinc?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  copper?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  manganium?: number;

  @Field({ nullable: true })
  @Field(() => Int)
  @IsOptional()
  selenium?: number;
}
