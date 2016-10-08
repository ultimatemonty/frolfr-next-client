/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frolfr-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      authorizer: 'simple-auth-authorizer:jwt',
      authenticator: 'simple-auth-authenticator:auth0-lock',
      authenticationRoute: 'application',
      routeIfAlreadyAuthenticated: 'app.home',
      routeAfterAuthentication: 'app.home',
      'auth0': {
        clientID: "LgNGQR3Lkr6LAxQhMhDFfIoD3OImBhXH",
        domain: "ultimatemonty.auth0.com"
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
