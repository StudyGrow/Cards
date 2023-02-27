# Cards Project

This project provides the code for frontend and backend of our cards website currently hosted on <https://studygrow.tech/>

## Prerequisites

To run this project you need to have the Node Package Manager installed, which can be downloaded here: <https://www.npmjs.com/get-npm/>

### Backend

Using the command line navigate to the `./backend` folder and run:

```shell
npm install
```

Additionally, some environment variables should be contained in the `backend/.env` file. Here is an example with some default values:

```.env
DB_USER=postgres
DB_PASSWORD=mysecretpassword
DB_PORT=5432
DB_HOST=localhost:${DB_PORT}
DB_NAME=studycards
DB_SCHEMA=studycards
# DB_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?schema=${DB_SCHEMA}&sslmode=prefer
DB_URL=postgresql://postgres:mysecretpassword@localhost:5432/studycards?schema=studycards&sslmode=prefer
JWT_SECRET=myJWTsecret
PORT=4444
HOST=localhost

# Firebase config
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER_X509_CERT_URL=
CLIENT_X509_CERT_URL=
```

```shell
docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=studycards -d postgres
```

```shell
npx prisma db push
```

```shell
npx prisma generate
```

If you want to have some sample data, you can run

```shell
npx prisma db seed
```

### Frontend

Download and install Angular with:

```shell
npm install -g @angular/cli
```

Navigate to `./frontend`. Run:

```shell
npm install
```

## Starting the backend

The database is started using the following command:

```bash
docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=studycards -d postgres
```

After that use the following command to start the server:

```shell
npm run start
```

A graphql playground is available at `localhost:4444/graphql`

## Starting the frontend

Navigate to the frontend folder and start the Angular Dev Server with the following command:

```shell
npm run start
```

We use proxy config to bypass CORS problem, caused by angular, when communicating with our server.

## Building for production

After you are done modifying the frontend you can use the following command to build your project:

```shell
npm run build
```

After the process has finished you can stop the Angular Dev Server and navigate to `http://localhost:port`, where port is the port provdided by the server.

## Built With

- [PostgreSQL](https://www.postgresql.org/) - Database
- [NestJS](https://expressjs.com/) - Backend
- [Prisma](https://www.prisma.io/) - database toolkit
- [GraphQL](https://graphql.org/) query language
- [Angular](https://angular.io/) - Frontend
- [Passport](http://www.passportjs.org/) - Middleware for Authentication
- and much more

## Authors

- **Erdzan Rastoder** - _Original idea, Initial work_, _Maintainer_ - [Github](https://github.com/orgs/StudyGrow/people/erdzan12)
- **Ben Lakhoune** - _Initial work_, _Maintainer_ - [Github](https://github.com/lakhoune) - [Website](http://lakhoune.com)

## License

This project is licensed under the MIT License

## Acknowledgments

- [stackoverflow](https://stackoverflow.com/) for guiding us in our ignorance
