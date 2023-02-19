import { Injectable } from '@nestjs/common';
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

  async createUser(newUserData: CreateUserInput, firebaseId: string) {
    return this.prisma.user.create({
      data: {
        confirmed: false,
        email: newUserData.email,
        firebaseId: firebaseId,
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

  async getUserByFirebaseId(firebaseId: string) {
    return this.prisma.user.findUnique({
      where: {
        firebaseId,
      },
    });
  }
}
