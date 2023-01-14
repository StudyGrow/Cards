import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 4444,
  },
  cors: {
    enabled: true,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '4w',
    refreshIn: '4w',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
