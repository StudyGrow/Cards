# Building layer
FROM node:16-alpine as build

WORKDIR /app

COPY . .

# _________________________________________________________ Backend _________________________________________________________
WORKDIR /app/backend

RUN npm i --force

RUN npm run build

# _________________________________________________________ Frontend _________________________________________________________

WORKDIR /app/frontend

RUN npm i 

RUN npm run build:prod

# _________________________________________________________ Step 2: Production _________________________________________________________
# Runtime (production) layer
FROM node:16-alpine as production

# install dos2unix (for docker-entrypoint.sh)
RUN apk add --no-cache dos2unix

# ___________________________________________________________ Backend _____________________________________________________________

WORKDIR /app/backend

# Copy backend files
COPY ./backend .

# replace localhost with db  (docker-compose service name for db container) Note: this might also replace localhost in other places in the .env file
RUN sed -i 's/localhost/db/g' .env

# Install runtime dependecies (without dev/test dependecies)
RUN npm i --only=production --force

# Copy backend build
COPY --from=build /app/backend/dist/ ./dist/

# ___________________________________________________________ Frontend _____________________________________________________________
# Frontend served under /app/backend/frontend/dist/frontend/*
RUN mkdir -p /app/backend/frontend

# Copy frontend build files
# Note that they will be 
COPY --from=build /app/frontend ./frontend/

# ___________________________________________________________ Step 3: Entrypoint _________________________________________________________

WORKDIR /app

COPY ./docker-entrypoint.sh /app

RUN dos2unix /app/docker-entrypoint.sh

# Expose application port
EXPOSE 4444

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]