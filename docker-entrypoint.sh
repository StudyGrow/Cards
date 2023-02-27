#!/bin/sh
cd backend  

npx prisma db push 

npx prisma generate

node dist/prisma/seed.js

node dist/src/main.js