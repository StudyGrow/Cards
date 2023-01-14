import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/common/prisma.service';
import { User } from '../users/user.entity';
import { UserEntity } from '../users/decorators/user.decorator';
import { CastVoteInput } from './models/cast.vote.input';
import { Vote } from './vote.entity';

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

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Vote)
  async castVote(
    @Args('data') data: CastVoteInput,
    @UserEntity() user: User,
  ): Promise<Vote> {
    const card = await this.prisma.card.findFirst({
      where: { id: data.cardId },
    });

    return this.prisma.vote.upsert({
      create: {
        value: data.value,
        cardId: data.cardId,
        lectureId: card.lectureId,
        userId: user.id,
      },
      update: {
        value: data.value,
        cardId: data.cardId,
        lectureId: card.lectureId,
        userId: user.id,
      },
      where: {
        userId_cardId: {
          userId: user.id,
          cardId: data.cardId,
        },
      },
      include: {
        card: {
          include: {
            author: true,
            lecture: true,
          },
        },
        lecture: true,
        user: true,
      },
    });
  }

  @Query(() => [Vote], { name: 'votes', nullable: true })
  async findOne(
    @Args('lectureAbbreviation', { nullable: true }) abrv?: string,
  ) {
    return this.prisma.vote.findMany({
      // select: DEFAULT_SELECT,
      where: { lecture: { abrv: abrv } },
      include: {
        card: {
          include: {
            author: true,
            lecture: true,
          },
        },
        lecture: true,
        user: true,
      },
    });
  }

  // @Query(() => CardEdges, { name: 'cards' })
  // async findAll(
  //   @Args({ nullable: true })
  //   paginationArgs: PaginationArgs = { first: 100 },
  //   @Args('orderBy', { nullable: true })
  //   orderBy: CardOrder = {
  //     field: CardOrderField.title,
  //     direction: OrderDirection.asc,
  //   },
  //   @UserEntity() user: User,
  // ) {
  //   return findManyCursorConnection(
  //     (args) =>
  //       this.prisma.card.findMany({
  //         select: DEFAULT_SELECT,
  //         where: { authorId: user.id },
  //         orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : null,
  //         ...args,
  //       }),
  //     () =>
  //       this.prisma.card.count({
  //         where: { authorId: user.id },
  //       }),
  //     paginationArgs,
  //   );
  // }
}
