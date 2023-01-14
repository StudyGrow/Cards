import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserEntity } from './decorators/user.decorator';
import { User } from './user.entity';
import { ChangePasswordInput } from './models/change.password.input';
import { UserService } from 'src/users/services/user.service';
import { UpdateUserInput } from './models/update.user.input';
import { PrismaService } from 'src/common/prisma.service';

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

  @Mutation(() => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput,
  ) {
    return this.userService.changePassword(
      user.id,
      user.password,
      changePassword,
    );
  }
}
