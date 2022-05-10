#!/bin/bash

if [ "$NODE_ENV" == "development" ]; then
  npm install && cd angular-cards && npm install --force && ng build --configuration=develop
else
  npm install && cd angular-cards && npm uninstall @angular-devkit/build-angular --force && npm install --legacy-peer-deps && ng build --configuration=production
fi