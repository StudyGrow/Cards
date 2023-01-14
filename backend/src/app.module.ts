import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphqlConfig } from './config/config.interface';
import config from './config/config';
import { LecturesModule } from './lectures/lectures.module';
import { CardsModule } from './cards/cards.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        const graphqlConfig = config.get<GraphqlConfig>('graphql');
        return {
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          introspection: graphqlConfig.playgroundEnabled,
          playground: graphqlConfig.playgroundEnabled,
          subscriptions: {
            'graphql-ws': true,
          },
          context: ({ req, connectionParams }) => {
            return connectionParams
              ? { req: { headers: connectionParams } }
              : { req };
          },
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    LecturesModule,
    VotesModule,
    CardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
