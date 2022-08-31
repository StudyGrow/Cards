// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domain: 'localhost',
  port: '80',
  graphqlEndpoint: 'http://localhost:4200/graphql',
  firebase: {
    apiKey: 'AIzaSyCFoT9ClcyHA5m3I08dtqxTJwqaUdoXros',
    authDomain: 'cards-f14d3.firebaseapp.com',
    projectId: 'cards-f14d3',
    storageBucket: 'cards-f14d3.appspot.com',
    messagingSenderId: '470230281052',
    appId: '1:470230281052:web:2f7f7a0f9c1196b0866f99',
    measurementId: 'G-ZVDR8L04S6',
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
