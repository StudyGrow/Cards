import { LoginInput } from './models/login.input';
import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AuthService } from './services/auth.service';
import { Auth, Token } from './auth.entity';
import { Public } from './decorators/public.decorator';
import { UserService } from 'src/users/services/user.service';
import { CreateUserInput } from 'src/users/models/create.user.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Mutation(() => Auth)
  async login(@Args('data') { email, password }: LoginInput) {
    const { accessToken, refreshToken } = await this.auth.login(
      email.toLowerCase(),
      password,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Public()
  @Mutation(() => Auth)
  async register(@Args('data') input: CreateUserInput) {
    await this.userService.createUser(input);

    const { accessToken, refreshToken } = await this.auth.login(
      input.email.toLowerCase(),
      input.password,
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Public()
  @Mutation(() => Token)
  async refreshToken(@Args('token') token: string) {
    return this.auth.refreshToken(token);
  }

  @ResolveField('user')
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
