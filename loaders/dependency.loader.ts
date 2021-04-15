import {
  asValue,
  asClass,
  asFunction,
  createContainer,
  Lifetime,
} from "awilix";

import path from "path";
export default async () => {
  const container = createContainer();
  container.loadModules(
    [
      [
        path.join(__dirname, '../models/*.model.ts'),
        { lifetime: Lifetime.SINGLETON, register: asValue },
      ],
      [
        path.join(__dirname, '../services/*.service.ts'),
        {
          lifetime: Lifetime.SCOPED,
          register: asClass,
        },
      ],
      [
        path.join(__dirname, '../middleware/*.factory.ts'),
        {
          lifetime: Lifetime.SCOPED,
          register: asClass,
        },
      ],
      [
        path.join(__dirname, '../middleware/*.middleware.ts'),
        {
          lifetime: Lifetime.SCOPED,
          register: asFunction,
        },
      ],
    ],
    {
      formatName: (name, descriptor) => {
        let prefix = name.split(".")[0];
        let suffix = name.split(".")[1];
        suffix = suffix.charAt(0).toUpperCase() + suffix.slice(1);
        return prefix + suffix;
      },
    }
  );
  console.log("Dependency Injector loaded.");
  return container;
};
