import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { LoginResolver } from "./resolvers/user/resolvers/login.resolver";
import { RegisterResolver } from "./resolvers/user/resolvers/register.resolver";

export default async function makeApolloServer(registerResolver: any = RegisterResolver): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers: [LoginResolver, registerResolver],
  });
  return new ApolloServer({
    schema,
    context: ({ req, res }) => {
      const context = {
        req,
        res,
      };
      return context;
    },
  });
}
