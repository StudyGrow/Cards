# Building layer
FROM node:16-alpine as build

# Optional NPM automation (auth) token build argument
# ARG NPM_TOKEN

# Optionally authenticate NPM registry
# RUN npm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}

WORKDIR /app

COPY . .

WORKDIR /app/backend

RUN npm i --force

RUN npm run build

WORKDIR /app/frontend

RUN npm i 

# Build application (produces dist/ folder)
RUN npm run build:prod


# Runtime (production) layer
FROM node:16-alpine as production

# Optional NPM automation (auth) token build argument
# ARG NPM_TOKEN

# Optionally authenticate NPM registry
# RUN npm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}

WORKDIR /app

RUN mkdir backend

# Copy backend files
COPY ./backend/* ./backend

WORKDIR /app/backend

# Install runtime dependecies (without dev/test dependecies)
RUN npm i --only=production --force

# Copy backend build
COPY --from=build /app/backend/dist/ ./dist/

WORKDIR /app/frontend

# Copy frontend build
COPY --from=build /app/frontend/dist/ ./dist/


# replace localhost with db  (docker-compose service name for db container) Note: this might also replace localhost in other places in the .env file
RUN sed -i 's/localhost/db/g' .env


WORKDIR /app

# copy env.sample file
# COPY ./backend/.env.sample ./

# # replace env.sample with .env
# RUN mv .env.sample .env

COPY ./docker-entrypoint.sh ./

# Expose application port
EXPOSE 4444

ENTRYPOINT [ "./docker-entrypoint.sh" ]