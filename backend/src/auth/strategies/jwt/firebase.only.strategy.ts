import { ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import {
  FirebaseAuthStrategy,
  FirebaseUser,
} from '@tfarras/nestjs-firebase-auth';
import { UserService } from 'src/users/services/user.service';

@Injectable()
export class FirebaseOkStrategy extends PassportStrategy(
  FirebaseAuthStrategy,
  'firebase-only',
) {
  public constructor(private readonly userService: UserService) {
    super({
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: FirebaseUser): Promise<FirebaseUser> {
    return payload;
  }
}
