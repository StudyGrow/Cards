import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './services/auth.service';
import { UserService } from 'src/users/services/user.service';
import { CreateUserInput } from 'src/users/models/create.user.input';
import { User } from 'src/users/user.entity';
import { UserEntity } from 'src/users/decorators/user.decorator';
import { FirebaseUser } from '@erdzan/nestjs-firebase-auth';
import { UseGuards } from '@nestjs/common';
import { GqlFirebaseOnlyAuthGuard } from './strategies/jwt/firebase.only.guard';

@Resolver(() => User)
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => User)
  @UseGuards(GqlFirebaseOnlyAuthGuard)
  async register(
    @Args('data') input: CreateUserInput,
    @UserEntity() user: FirebaseUser,
  ) {
    return await this.userService.createUser(input, user.uid);
  }
}
