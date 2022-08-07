import "reflect-metadata";
import { PluginDefinition } from "apollo-server-core";

import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import { GraphQLError } from "graphql";
import { buildSchema } from "type-graphql";

import env from "./env";
import { RegisterResolver } from "../graphql/resolvers/user/resolvers/register.resolver";
import { LoginResolver } from "../graphql/resolvers/user/resolvers/login.resolver";
import { UserResolver } from "../graphql/resolvers/user/resolvers/user.resolver";
import { LectureResolver } from "../graphql/resolvers/lecture/resolvers/lecture.resolver";
import { CardResolver } from "../graphql/resolvers/card/resolvers/card.resolver";

declare global {
  namespace Express {
    export interface Request {
      user: {
        _id: string;
      };
    }
  }
}

const handleErrors = (response: any, errors: readonly GraphQLError[]): void => {
  errors?.forEach((error) => {
    response.data = undefined;
    if (checkError(error, "UserInputError")) {
      response.http.status = 400;
    } else if (checkError(error, "AuthenticationError")) {
      response.http.status = 401;
    } else if (checkError(error, "ForbiddenError")) {
      response.http.status = 403;
    } else {
      response.http.status = 500;
    }
  });
};

const checkError = (error: GraphQLError, errorName: string): boolean => {
  return [error.name, error.originalError?.name].some(
    (name) => name === errorName
  );
};

export default async (app: Express) => {
  const schema = await buildSchema({
    resolvers: [
      LoginResolver,
      RegisterResolver,
      UserResolver,
      LectureResolver,
      CardResolver,
    ],
  });

  const plugins: PluginDefinition[] = [
    {
      requestDidStart: () => ({
        willSendResponse: ({ response, errors }) =>
          handleErrors(response, errors!),
      }),
    },
  ];
  if (process.env.NODE_ENV == "development") {
    plugins.push(require("apollo-tracing").plugin());
  }
  const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    formatError: (err) => {
      return err;
    },

    context: ({ req, res }) => {
      const context = {
        req,
        res,
      };
      return context;
    },
    plugins: plugins,
  });
  server.applyMiddleware({ app, path: env.app.prefix });
};
