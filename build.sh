#!/bin/bash
npm install
echo "Server install done"
cd angular-cards 
npm install --legacy-peer-deps
echo "Angular install done"
ng update @angular/cli @angular/core --allow-dirty --force
if [ "$NODE_ENV" == "development" ]; then
  ng build --configuration=develop
else
  npm run build --configuration=production
fi