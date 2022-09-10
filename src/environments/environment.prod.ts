export const environment = {
  production: true,
  baseUrl: 'https://haunt-capstone-app.herokuapp.com/',
  apiServerUrl: 'https://haunt-fe-castone-app.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'dev-a5eeh4cq.us', // the auth0 domain prefix
    audience: 'CapStone-app', // the audience set for the auth0 app
    clientId: 'm7nDjkojNjC0zumBAGZG9tkBBLXwOX5F', // the client id generated for the auth0 app
    callbackURL: 'https://haunt-fe-castone-app.herokuapp.com', // the base url of the running ionic application.
  }
};
