/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const { init: initApm } = require('elastic-apm-js-base');
const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: process.env.NODE_ENV === 'production' ? 'legrego-dev-site' : 'legrego-develop-dev-site',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://ccee39cfca7c4ac882530a0bf6d3f604.apm.us-east-1.aws.cloud.es.io:443',

  // Set service version (required for sourcemap feature)
  serviceVersion: '0.1.0',

  pageLoadTransactionName: window.location.pathname,
});
apm.addTags([{
  referer: document.referer,
}])

exports.onRouteUpdate = ({ location, prevLocation }) => {
  apm.startTransaction(location.pathname, 'browse');
}