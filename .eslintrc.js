const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const imports = require('./rules/imports');
const node = require('./rules/node');
const reactA11y = require('./rules/react-a11y');
const react = require('./rules/react');
const strict = require('./rules/strict');
const style = require('./rules/style');
const variables = require('./rules/variables');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    ...bestPractices.rules,
    ...errors.rules,
    ...es6.rules,
    ...imports.rules,
    ...node.rules,
    ...reactA11y.rules,
    ...react.rules,
    ...strict.rules,
    ...style.rules,
    ...variables.rules,

    'func-names': 0,
  },
};
