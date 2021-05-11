/* eslint-disable */
const pathIgnore = require('path-ignore');
const config = require('../config');
module.exports = function (app, options) {
  const tester = pathIgnore(options.ignore);

  return (req, res, next) => {
    if (tester(req.path)) {
      return next();
    }
    const userInfo = req.session.user;

    res.render('index.html', {
      isDebug: config.debug,
      csrfToken: req.csrfToken(),
      prefix: config.staticPath || (config.prefix === '/' ? '' : config.prefix),
      env: config.env,
      title: '交通决策系统',
      mapServer: escape(JSON.stringify(config.mapServer || {})),
      userInfo: escape(JSON.stringify(userInfo || {})),
      gisServerPrefix: config.services.gisServerPrefix,
      serviceUrl: config.services.serviceUrl,
      requestUrl: config.services.requestUrl,
      websocketServiceUrl: config.services.websocketServiceUrl,
    });
  };
};
