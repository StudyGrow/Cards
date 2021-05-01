#!/bin/bash

if [ "$NODE_ENV" == "development" ]; then
  npm run watch
else
  npm run start
fi