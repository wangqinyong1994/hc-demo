const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    // 禁止删除变量
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // 不允许标签与变量同名
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'error',

    // disallow specific globals
    // 禁用特定的全局变量
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // disallow declaration of variables already declared in the outer scope
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',

    // disallow shadowing of names such as arguments
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // 禁止将 undefined 作为标识符
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    // 禁止出现未使用过的变量
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // disallow use of variables before they are defined
    // 禁止在变量定义之前使用它们
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  }
};
