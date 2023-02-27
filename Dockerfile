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

# Copy frontend build
COPY --from=build /app/frontend/dist/ ../frontend/dist/

COPY ./backend/.env ./ba

# replace localhost with db
RUN sed -i 's/localhost/db/g' .env

COPY ./docker-entrypoint.sh ./

# copy env.sample file
# COPY ./backend/.env.sample ./

# # replace env.sample with .env
# RUN mv .env.sample .env

# Expose application port
EXPOSE 4444

ENTRYPOINT [ "./docker-entrypoint.sh" ]