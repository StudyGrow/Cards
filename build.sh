#!/bin/bash

if [ "$NODE_ENV" == "development" ]; then
  npm install && cd angular-cards && npm install && ng build --configuration=develop
else
  npm install && cd angular-cards && npm install && ng build --configuration=production
fi