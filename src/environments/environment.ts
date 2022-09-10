// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiServerUrl: 'https://haunt-fe-castone-app.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'dev-a5eeh4cq.us', // the auth0 domain prefix
    audience: 'CapStone-app', // the audience set for the auth0 app
    clientId: 'm7nDjkojNjC0zumBAGZG9tkBBLXwOX5F', // the client id generated for the auth0 app
    callbackURL: 'https://haunt-fe-castone-app.herokuapp.com', // the base url of the running ionic application.
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
