#!/bin/bash
npm install
echo "Server install done"
cd angular-cards 
if [ "$NODE_ENV" == "development" ]; then
  npm install && cd angular-cards && npm install --force && ng build --configuration=develop
else
 npm uninstall @angular-devkit/build-angular --force && npm install @angular-devkit/build-angular --save-dev --legacy-peer-deps && echo "Angular install done" && npm build --configuration=production
fi