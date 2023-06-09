import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // useSoftDelete(modelName: string) {
  //   this.$use(async (params, next) => {
  //     if (params.model == modelName) {
  //       if (['findUnique', 'findFirst'].includes(params.action)) {
  //         params.action = 'findFirst';
  //         params.args.where['deleted'] = false;
  //       }

  //       if (params.action == 'findMany') {
  //         if (params.args.where != undefined) {
  //           if (params.args.where.deleted == undefined) {
  //             params.args.where['deleted'] = false;
  //           }
  //         } else {
  //           params.args['where'] = { deleted: false };
  //         }
  //       }
  //     }
  //     return next(params);
  //   });

  //   this.$use(async (params, next) => {
  //     if (params.model == modelName) {
  //       if (params.action == 'delete') {
  //         params.action = 'update';
  //         params.args['data'] = { deleted: true };
  //       }
  //       if (params.action == 'deleteMany') {
  //         params.action = 'updateMany';
  //         if (params.args.data != undefined) {
  //           params.args.data['deleted'] = true;
  //         } else {
  //           params.args['data'] = { deleted: true };
  //         }
  //       }
  //     }
  //     return next(params);
  //   });
  // }
}
