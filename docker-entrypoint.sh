#!/bin/sh
cd backend  

npx prisma db push 

npx prisma generate

npx prisma db seed

node dist/main.js