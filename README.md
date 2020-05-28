# Cards Project

This project provides the code for frontend and backend of our cards website currently hosted on https://rwth-aachen.tk/

## Getting Started

To test this project locally you should download the project from the noHttps branch.

### Prerequisites

To run this project you need to have the Node Package Manager installed, which can be downloaded here: https://www.npmjs.com/get-npm/

### Installing

Using the command line navigate to the projects folder and type in the following command:

```
npm install
```

npm will install all the dependencies for you. After that use the following command to start the server:

```
npm run start
```

The server will tell you on which port it will be running in the console (3000 by default). Navigate to `http://localhost:port`, where port is the port provdided by the server.

## Modifiying the frontend

The frontend is built using Angular. The Angular project folder is located in angular-cards. Download and install Angular with:

```
npm install -g @angular/cli
```

Then navigate to the angular-cards folder and start the Angular Dev Server with the following command:

```
ng serve --proxy-config proxy.conf.json --open
```

We use proxy config to bypass CORS problem, caused by angular, when communicating with our server.\
After you are done modifying the frontend you can use the following command to build your project:

```
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

- **Erdzan Rastoder** - _Original idea, Initial work_ - [GitLab](https://git.rwth-aachen.de/jungerjunge2)
- **Ben Lakhoune** - _Initial work_ - [GitLab](https://git.rwth-aachen.de/lakhoune)

## License

This project is licensed under the MIT License

## Acknowledgments

- [stackoverflow](https://stackoverflow.com/) for guiding us in our ignorance
