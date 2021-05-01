#!/bin/bash

if [ "$NODE_ENV" == "development" ]; then
  npm run start
else
  npm run watch
fi