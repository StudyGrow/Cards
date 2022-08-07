# Cards Backend

To start the backend create an .env file in the backend folder with following entries, where MONGO_URL_TEST and MONGO_URL_TEST_DB are urls to a mongo db which can be created for free on mongodb.com:

```
PORT=4444
API_ENDPOINT=/graphql
APP_AUTH_SECRET=some_secret
AUTH_TOKEN_EXPIRATION=15m
REFRESH_TOKEN_EXPIRATION=1d
MONGO_URL_TEST=
MONGO_URL_TEST_DB=
MAIL_HOST=smtp.ionos.de
MAIL_PORT=587
MAIL_USER=info@renergi.de
MAIL_PASS=
MAIL_WEBSITE=https://www.app.renergi.de
MAIL_PASSWORD_RESET_PATH=reset_password
```

## **<ins>There are two main possibilities to start the backend:**

## 1. You install redis and nodejs on your pc, and start redis. Then you can run the backend with

```
npm run start
```

If you wish to develop you can start the backend with

```
npm run dev
```

## 2. You install docker and run the docker image of the backend.

## **Only starting docker image**

To build the docker image you should run:

```
docker build -t cardsbackend .
```

Then you can run the backend with:

```
docker run -p 4444:4444 cardsbackend
```

## **Developing with docker**

To develop using the docker image build the image with:

```
docker build -f Dockerfile_dev -t cardsbackend .
```

Then run the image and mount your local backend folder to the container by using the -v option, where you set YOUR_PATH_TO_THE_BACKEND_FOLDER to the path of your backend folder like for example: `"/Users/username/Documents/backendcards/backend"`:

```
docker run -v "YOUR_PATH_TO_THE_BACKEND_FOLDER:/backend" -p 4444:4444 cardsbackend
```

Now when you edit some files in the backend folder, the server should pick these changes up and update.

![Image](overview.drawio.png)
