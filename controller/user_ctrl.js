/**
 * @api /api/getUserInfo
 */
exports.getUserInfo = function (req, callback) {
  callback(null, req.session.user, 'json');
};

/**
 * @api /api/logout
 * @nowrap
 */
exports.logout = function (req, res) {
  req.session = {};
  res.redirect('/event-handle-v2');
};

/**
 * @api /api/getCookies
 */
exports.getCookies = function (req, callback) {
  callback(null, req.cookies[req.query.cookiesName], 'json');
};

/**
 * @api /api/setCookies
 */
exports.setCookies = function (req, callback) {
  req.cookies[req.query.cookiesName] = req.query.cookiesData;
  callback();
};
