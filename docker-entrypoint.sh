#!/bin/sh

npx prisma db push 

npx prisma generate

node dist/main.js