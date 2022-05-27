#!/bin/bash
npm install
echo "Server install done"
cd angular-cards 
npm ci --force
cat package-lock.json
echo "Angular install done"
if [ "$NODE_ENV" == "development" ]; then
  ng build --configuration=develop
else
  npm run build 
fi