#!/bin/bash
npm install
echo "Server install done"
cd angular-cards
npm install --force --only=dev
echo "Angular install done"
if [ "$NODE_ENV" == "development" ]; then
  ng build --configuration=develop
else
  npm run build-ng
fi