import { Module } from '@nestjs/common';
import { DietProductsResolver } from './dietProducts.resolver';
import { DietProductsService } from './dietProducts.service';

@Module({
  providers: [DietProductsResolver, DietProductsService],
})
export class DietProductsModule {}
