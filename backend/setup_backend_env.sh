#!/bin/sh

echo PORT=$PORT >> .env
echo API_ENDPOINT=$API_ENDPOINT >> .env
echo APP_AUTH_SECRET=$APP_AUTH_SECRET >> .env
echo AUTH_TOKEN_EXPIRATION=$AUTH_TOKEN_EXPIRATION >> .env
echo REFRESH_TOKEN_EXPIRATION=$REFRESH_TOKEN_EXPIRATION >> .env
echo MONGO_URL_TEST=$MONGO_URL_TEST >> .env
echo MONGO_URL_TEST_DB=$MONGO_URL_TEST_DB >> .env
echo MAIL_HOST=$MAIL_HOST >> .env
echo MAIL_PORT=$MAIL_PORT >> .env
echo MAIL_USER=$MAIL_USER >> .env
echo MAIL_PASS=$MAIL_PASS >> .env
