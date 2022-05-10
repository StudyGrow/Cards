#!/bin/bash
npm install
echo "Server install done"
cd angular-cards 
npm install --legacy-peer-deps
echo "Angular install done"
cat package.json
cat package-lock.json
if [ "$NODE_ENV" == "development" ]; then
  ng build --configuration=develop
else
  npm run build --configuration=production
fi