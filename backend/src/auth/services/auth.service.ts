import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from 'src/config/config.interface';
import { Token } from '../auth.entity';
import { PasswordService } from 'src/common/password.service';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
  ) {}

  async login(email: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password,
    );
    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    return this.generateToken({
      userId: user.id,
    });
  }

  validateUser(userId: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateToken(payload: { userId: string }): Token {
    const accessToken = this.jwtService.sign(payload);

    const securityConfig = this.configService.get<SecurityConfig>('security');
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: securityConfig.refreshIn,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token);
      return this.generateToken({ userId });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
