import { AuthService } from './services/auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/config/config.interface';
import { PasswordService } from 'src/common/password.service';
import { PrismaService } from 'src/common/prisma.service';
import { UserService } from 'src/users/services/user.service';
import { FirebaseStrategy } from './strategies/jwt/firebase.strategy';
import { FirebaseAdminModule } from '@tfarras/nestjs-firebase-admin';
import * as admin from 'firebase-admin';
import { FirebaseOkStrategy } from './strategies/jwt/firebase.only.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'firebase' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.applicationDefault(),
      }),
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    FirebaseOkStrategy,
    FirebaseStrategy,
    PasswordService,
    PrismaService,
    UserService,
  ],
  exports: [],
})
export class AuthModule {}
