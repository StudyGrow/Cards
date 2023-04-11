// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domain: 'localhost',
  port: '80',
  graphqlEndpoint: 'http://localhost:4200/graphql',
  firebase: {
    apiKey: 'AIzaSyDT3WcXxwWKzJAunov2mhScrX1oWrU-qbg',
    authDomain: 'studygrow-9dff5.firebaseapp.com',
    projectId: 'studygrow-9dff5',
    storageBucket: 'studygrow-9dff5.appspot.com',
    messagingSenderId: '625159524048',
    appId: '1:625159524048:web:5b734e98a5044c5ae858d5',
    measurementId: 'G-K47D697P0J',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
