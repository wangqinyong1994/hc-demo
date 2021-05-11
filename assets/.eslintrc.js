module.exports = {
  rules: {
    'react/self-closing-comp': 'off',
    'react/jsx-closing-tag-location': 'off',
    'prefer-template': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-empty': 'off',
    'import/extensions': 'off',
  },
  parser: 'babel-eslint',
  globals: {
    platformCode: false,
    mapServer: false,
    CSRF_TOKEN: false,
    mainMap: false,
    serviceUrl: false,
    requestUrl: false,
    websocketServiceUrl: false,
    Z: false,
  },
};
