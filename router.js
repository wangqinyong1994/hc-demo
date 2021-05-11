/* eslint-disable */
const config = require('./config');
const app = require('./app');
const Proxy = require('hc-proxy');
const proxyInstance = new Proxy({
  service: {
    baseLayerProxy: {
      endpoint: config.mapServer.baseLayerPrefix,
      client: 'http',
      api: ['/*'],
    },
    requestProxy: {
      endpoint: config.services.requestUrl,
      client: 'http',
      api: ['/*'],
    },
  },
  headers: ['x-csrf-token', 'X-Operator'],
});

proxyInstance.setProxyPrefix('/api/proxy');

module.exports = function (router) {
  proxyInstance.mount(router, app);
};
