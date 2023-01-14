import { Injectable, BadRequestException } from '@nestjs/common';
import { ChangePasswordInput } from '../models/change.password.input';
import { UpdateUserInput } from '../models/update.user.input';
import { PrismaService } from 'src/common/prisma.service';
import { PasswordService } from 'src/common/password.service';
import { CreateUserInput } from '../models/create.user.input';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async createUser(newUserData: CreateUserInput) {
    const hashedPassword = await this.passwordService.hashPassword(
      newUserData.password,
    );
    return this.prisma.user.create({
      data: {
        confirmed: false,
        email: newUserData.email,
        password: hashedPassword,
        status: 'ACTIVE',
        username: newUserData.username,
        firstname: newUserData.firstname,
        lastname: newUserData.lastname,
      },
    });
  }

  updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput,
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword,
    );
    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword,
    );
    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }
}
