# Cards Project

This project provides the code for frontend and backend of our cards website currently hosted on <https://studydrive.me/>

## Getting Started

To test this project locally you should clone this repository.

### Prerequisites

To run this project you need to have the Node Package Manager installed, which can be downloaded here: <https://www.npmjs.com/get-npm/>

Additionally, following environment variables should be present in the `./backend` folder:  

```txt
PORT=
API_ENDPOINT=
APP_AUTH_SECRET=
AUTH_TOKEN_EXPIRATION=
REFRESH_TOKEN_EXPIRATION=
MONGO_URL_TEST=
MONGO_URL_TEST_DB=
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
MAIL_WEBSITE=
MAIL_PASSWORD_RESET_PATH=
```

### Postgresql

```bash
docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=studycards -d postgres 
```

## Backend installation

Using the command line navigate to the `./backend` folder and type in the following command:

```shell
npm install
```

npm will install all the dependencies for you. After that use the following command to start the server:

```shell
npm run start
```

### Redis
The server also requires a redis connection to manage user session. Run 
```sh
docker run redis/redis-stack-server:latest
```

The server will tell you on which port it will be running in the console (80 by default). Navigate to `http://localhost:<port>`, where port is the port provdided by the server.

You can checkout the graphql playground by navigatin to `http://localhost:<port>/<API_ENDPOINT>` , where port is the port provdided by the server and ``API_ENDPOINT`` being the API endpoint provided in `./backend/.env`.

## Frontend installation

The frontend is built using Angular. The Angular project folder is located in ``./frontend``. Download and install Angular with:

```shell
npm install -g @angular/cli
```

Then navigate to the frontend folder and start the Angular Dev Server with the following command:

```shell
ng serve --proxy-config proxy.conf.json --open
```

We use proxy config to bypass CORS problem, caused by angular, when communicating with our server.\
After you are done modifying the frontend you can use the following command to build your project:

```shell
ng build
```

After the process has finished you can stop the Angular Dev Server and navigate to `http://localhost:port`, where port is the port provdided by the server.

## Built With

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Middleware for handling HTTP requests
- [Angular](https://angular.io/) - Frontend
- [NodeJs](https://nodejs.org/) - Backend Server
- [Passport](http://www.passportjs.org/) - Middleware for Authentication
- and much more

## Authors

- **Erdzan Rastoder** - _Original idea, Initial work_ - [Github](https://github.com/orgs/StudyGrow/people/erdzan12)
- **Ben Lakhoune** - _Initial work_ - [Github](https://github.com/lakhoune) - [Website](http://lakhoune.com)

## License

This project is licensed under the MIT License

## Acknowledgments

- [stackoverflow](https://stackoverflow.com/) for guiding us in our ignorance
