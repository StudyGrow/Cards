import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/common/prisma.service';
import { User } from '../users/user.entity';
import { UserEntity } from '../users/decorators/user.decorator';
import { PaginationArgs } from 'src/common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { OrderDirection } from 'src/common/order/order.direction';
import { Card, CardEdges } from './card.entity';
import { AddCardInput } from './models/add.card.input';
import { CardOrder, CardOrderField } from './models/card.order.entity';
import { UpdateCardInput } from './models/update.card.input';

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

@Resolver(() => Card)
export class CardsResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Card)
  async addCard(
    @Args('data') data: AddCardInput,
    @UserEntity() user: User,
  ): //

  Promise<Card> {
    const lecture = await this.prisma.lecture.findFirst({
      where: { abrv: data.lectureAbbreviation, userId: user.id },
    });

    return this.prisma.card.create({
      data: {
        content: data.content,
        thema: data.thema,
        authorId: user.id,
        lectureId: lecture.id,
      },
      include: {
        author: true,
        lecture: true,
      },
    });
  }

  @Query(() => CardEdges, { name: 'cards' })
  async findAll(
    @Args({ nullable: true })
    paginationArgs: PaginationArgs = { first: 100 },
    @Args('orderBy', { nullable: true })
    orderBy: CardOrder = {
      field: CardOrderField.title,
      direction: OrderDirection.asc,
    },
    @UserEntity() user: User,
  ) {
    return findManyCursorConnection(
      (args) =>
        this.prisma.card.findMany({
          select: DEFAULT_SELECT,
          where: { authorId: user.id },
          orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : null,
          ...args,
        }),
      () =>
        this.prisma.card.count({
          where: { authorId: user.id },
        }),
      paginationArgs,
    );
  }

  @Query(() => Card, { name: 'card' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.prisma.card.findFirst({
      select: DEFAULT_SELECT,
      where: { id: id },
    });
  }

  @Mutation(() => Card)
  async updateCard(@Args('input') input: UpdateCardInput) {
    const result = await this.prisma.card.update({
      where: { id: input.id },
      data: {
        thema: input.thema,
        content: input.content,
        tags: input.tags,
        latex: input.latex,
      },
      include: {
        author: true,
        lecture: true,
      },
    });

    return result;
  }
}
