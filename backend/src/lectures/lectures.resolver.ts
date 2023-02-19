import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddLectureInput } from './models/add.lecture.input';
import { Lecture, LectureEdges } from './lecture.entity';
import { PrismaService } from 'src/common/prisma.service';
import { User } from '../users/user.entity';
import { UserEntity } from '../users/decorators/user.decorator';
import { PaginationArgs } from 'src/common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { OrderDirection } from 'src/common/order/order.direction';
import { LectureOrder, LectureOrderField } from './models/lecture.entity';
import { Public } from 'src/auth/decorators/public.decorator';
import { UseGuards } from '@nestjs/common';
import { GqlFirebaseAuthGuard } from 'src/auth/strategies/jwt/firebase.guard';

// We use this to make sure that the "document" field isn't selected, by default
// (see https://github.com/prisma/prisma-client-js/issues/649)
const DEFAULT_SELECT = {
  id: true,
  createdAt: true,
  updatedAt: true,
  name: true,
  abrv: true,
  tagList: true,
  totalCards: true,
};

@UseGuards(GqlFirebaseAuthGuard)
@Resolver(() => Lecture)
export class LecturesResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Lecture)
  async addLecture(
    @Args('data') data: AddLectureInput,
    @UserEntity() user: User,
  ): Promise<Lecture> {
    return this.prisma.lecture.create({
      data: {
        name: data.name,
        abrv: data.abrv,
        userId: user.id,
      },
    });
  }

  @Public()
  @Query(() => LectureEdges, { name: 'lectures' })
  async findAll(
    @Args({ nullable: true })
    paginationArgs: PaginationArgs = { first: 100 },
    @Args('orderBy', { nullable: true })
    orderBy: LectureOrder = {
      field: LectureOrderField.title,
      direction: OrderDirection.asc,
    },
    @UserEntity() user: User,
  ) {
    return findManyCursorConnection(
      (args) =>
        this.prisma.lecture.findMany({
          select: DEFAULT_SELECT,
          where: user ? { userId: user.id } : {},
          orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.lecture.count({
          where: user ? { userId: user.id } : {},
        }),
      paginationArgs,
    );
  }

  @Query(() => Lecture, { name: 'lecture', nullable: true })
  async findOne(
    @Args('id', { nullable: true, type: () => ID }) id?: string,
    @Args('abrv', { nullable: true }) abrv?: string,
  ) {
    return this.prisma.lecture.findFirst({
      // select: DEFAULT_SELECT,
      where: { id: id, abrv: abrv },
      include: {
        cards: true,
      },
    });
  }
}
