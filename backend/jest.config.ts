import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "@shelf/jest-mongodb",
  rootDir: "src",
  coverageProvider: "babel",
  collectCoverageFrom: ["**/**.{ts,tsx}", "!**/node_modules/**"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageReporters: ["html"],
};
export default config;
