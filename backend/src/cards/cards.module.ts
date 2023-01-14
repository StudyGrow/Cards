import { Module } from '@nestjs/common';

import { PrismaService } from 'src/common/prisma.service';
import { CardsResolver } from './cards.resolver';

@Module({
  imports: [],
  providers: [CardsResolver, PrismaService],
})
export class CardsModule {}
