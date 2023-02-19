import { Module } from '@nestjs/common';
import { LecturesResolver } from './lectures.resolver';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  imports: [],
  providers: [LecturesResolver, PrismaService],
})
export class LecturesModule {}
