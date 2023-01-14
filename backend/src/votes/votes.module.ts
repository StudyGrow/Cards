import { Module } from '@nestjs/common';

import { PrismaService } from 'src/common/prisma.service';
import { VotesResolver } from './votes.resolver';

@Module({
  imports: [],
  providers: [VotesResolver, PrismaService],
})
export class VotesModule {}
