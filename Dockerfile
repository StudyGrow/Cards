# Building layer
FROM node:16-alpine as build

# Add these lines at the top of your Dockerfile
ARG DB_URL

ARG JWT_SECRET

ARG FIREBASE_TYPE
ARG FIREBASE_PROJECT_ID
ARG PRIVATE_KEY_ID
ARG PRIVATE_KEY
ARG CLIENT_EMAIL
ARG CLIENT_ID
ARG AUTH_URI
ARG TOKEN_URI
ARG AUTH_PROVIDER_X509_CERT_URL
ARG CLIENT_X509_CERT_URL

# And then use them like this
ENV DB_URL=${DB_URL}

ENV JWT_SECRET=${JWT_SECRET}

ENV FIREBASE_TYPE=${FIREBASE_TYPE}
ENV FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}
ENV PRIVATE_KEY_ID=${PRIVATE_KEY_ID}
ENV PRIVATE_KEY=${PRIVATE_KEY}
ENV CLIENT_EMAIL=${CLIENT_EMAIL}
ENV CLIENT_ID=${CLIENT_ID}
ENV AUTH_URI=${AUTH_URI}
ENV TOKEN_URI=${TOKEN_URI}
ENV AUTH_PROVIDER_X509_CERT_URL=${AUTH_PROVIDER_X509_CERT_URL}
ENV CLIENT_X509_CERT_URL=${CLIENT_X509_CERT_URL}


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
RUN chmod +x /app/docker-entrypoint.sh

# Expose application port
EXPOSE 4444

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]