#!/bin/bash
npm install
echo "Server install done"
npm run heroku-ng-build
echo "Angular install done"
# if [ "$NODE_ENV" == "development" ]; then
#   ng build --configuration=develop
# else
#   npm run build 
# fi