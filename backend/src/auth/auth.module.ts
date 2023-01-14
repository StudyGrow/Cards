import { AuthService } from './services/auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt/jwt.strategy';
import { GqlJwtAuthGuard } from './strategies/jwt/jwt.guard';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/config/config.interface';
import { APP_GUARD } from '@nestjs/core';
import { PasswordService } from 'src/common/password.service';
import { PrismaService } from 'src/common/prisma.service';
import { UserService } from 'src/users/services/user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
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
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    PasswordService,
    PrismaService,
    UserService,
    {
      provide: APP_GUARD,
      useClass: GqlJwtAuthGuard,
    },
  ],
  exports: [],
})
export class AuthModule {}
