import { UserResolver } from './user.resolver';
import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { PasswordService } from 'src/common/password.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  providers: [UserResolver, UserService, PasswordService, PrismaService],
})
export class UserModule {}
