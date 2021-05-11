module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // 强制 for 循环中更新子句的计数器朝着正确的方向移动
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Enforces that a return statement is present in property getters
    // 强制 getter 函数中出现 return 语句
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    // 禁止使用异步函数作为Promise执行程序
    // https://eslint.org/docs/rules/no-async-promise-executor
    // TODO: enable, semver-major
    'no-async-promise-executor': 'off',

    // Disallow await inside of loops
    // 禁止在循环中出现 await
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // Disallow comparisons to negative zero
    // 禁止与 -0 进行比较
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment in conditional expressions
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    // 禁用 console
    'no-console': 'warn',

    // disallow use of constant expressions in conditions
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',

    // disallow use of debugger
    // 禁用 debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 'error',

    // disallow duplicate keys when creating object literals
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'error',

    // disallow empty statements
    // 禁止出现空语句块
    'no-empty': 'error',

    // disallow the use of empty character classes in regular expressions
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 'error',

    // disallow assigning to the exception in a catch block
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    // 禁止不必要的布尔转换
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    // 禁止不必要的括号
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true, // 不允许在条件语句的测试表达式中的赋值语句周围出现额外的圆括号
      nestedBinaryExpressions: false, // 允许在嵌套的二元表达式中出现额外的圆括号
      returnAssign: false, // 允许在 return 语句中的赋值语句周围出现额外的圆括号
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false, // 允许在箭头函数体中的三元表达式周围出现额外的圆括号
    }],

    // disallow unnecessary semicolons
    // 禁止不必要的分号
    'no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',

    // disallow function or variable declarations in nested blocks
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': 'error',

    // disallow invalid regular expression strings in the RegExp constructor
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // 禁止在字符类语法中使用多个代码点生成的字符
    // https://eslint.org/docs/rules/no-misleading-character-class
    // TODO: enable, semver-major
    'no-misleading-character-class': 'off',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 'error',

    // disallow use of Object.prototypes builtins directly
    // 禁止直接调用 Object.prototypes 的内置属性
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in a regular expression literal
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    // 禁用稀疏数组
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // 禁止在常规字符串中出现模板字面量占位符语法
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Avoid code that looks like two expressions but is actually one
    // 禁止出现令人困惑的多行表达式
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'error',

    // disallow return/throw/break/continue inside finally blocks
    // 禁止在 finally 语句块中出现控制流语句
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // disallow negating the left operand of relational operators
    // 禁止对关系运算符的左操作数使用否定操作符
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // 已弃用
    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    // 不允许否定表达式的左操作数
    'no-negated-in-lhs': 'off',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // 禁止因使用await或yeild而导致竞争条件的分配
    // https://eslint.org/docs/rules/require-atomic-updates
    // TODO: enable, semver-major
    'require-atomic-updates': 'off',

    // disallow comparisons with the value NaN
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',

    // ensure JSDoc comments are valid
    // 强制使用有效的 JSDoc 注释
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // ensure that the results of typeof are compared against a valid string
    // 强制 typeof 表达式与有效的字符串进行比较
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error',{
      requireStringLiterals: true // 要求 typeof 表达式只与字符串字面量或其它 typeof 表达式 进行比较，禁止与其它值进行比较
    }],
  }
};
