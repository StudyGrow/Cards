import { ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import {
  FirebaseAuthStrategy,
  FirebaseUser,
} from '@erdzan/nestjs-firebase-auth';
import { UserService } from 'src/users/services/user.service';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(
  FirebaseAuthStrategy,
  'firebase',
) {
  public constructor(private readonly userService: UserService) {
    super({
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: FirebaseUser): Promise<User> {
    const user = await this.userService.getUserByFirebaseId(payload.uid);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
