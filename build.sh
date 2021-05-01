#!/bin/bash

if [ "$NODE_ENV" == "develop" ]; then
  npm install && cd angular-cards && npm install && ng build --configuration=develop
else
  npm install && cd angular-cards && npm install && ng build --configuration=production
fi