import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './decorators/user.decorator';
import { User } from './user.entity';
import { UserService } from 'src/users/services/user.service';
import { UpdateUserInput } from './models/update.user.input';
import { PrismaService } from 'src/common/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlFirebaseAuthGuard } from 'src/auth/strategies/jwt/firebase.guard';

@UseGuards(GqlFirebaseAuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
  ) {}

  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput,
  ) {
    return this.userService.updateUser(user.id, newUserData);
  }

  @Mutation(() => Boolean)
  async deleteUser(@UserEntity() user: User) {
    await this.prisma.user.delete({
      where: {
        id: user.id,
      },
    });
    return true;
  }
}
