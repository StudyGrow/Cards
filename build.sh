#!/bin/bash
npm install
echo "Server install done"
cd angular-cards
if [ "$NODE_ENV" == "development" ]; then
  ng build --configuration=develop
else
  export NODE_ENV=development
  npm install --force --only=dev
  echo "Angular install done"
  npm run build-ng
  export NODE_ENV=prodcution
fi
