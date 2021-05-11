module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    // enforces no braces where they can be omitted
    // 要求箭头函数体使用大括号
    // https://esslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // require parens in arrow function arguments
    // 要求箭头函数的参数使用圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],

    // require space before/after arrow function's arrow
    // 强制箭头函数的箭头前后使用一致的空格
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    // 要求在构造函数中有 super() 的调用
    'constructor-super': 'error',

    // enforce the spacing around the * in generator functions
    // 强制 generator 函数中 * 号周围使用一致的空格
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['off', { before: false, after: true }],

    // disallow modifying variables of class declarations
    // 禁止修改类声明的变量
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['off', {
      allowParens: true,
    }],

    // disallow modifying variables that are declared using const
    // 禁止修改 const 声明的变量
    'no-const-assign': 'error',

    // disallow duplicate class members
    // 禁止类成员中出现重复的名称
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // disallow importing from the same path more than once
    // 禁止重复模块导入
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // disallow symbol constructor
    // 禁止 Symbolnew 操作符和 new 一起使用
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // disallow specific imports
    // 禁止使用指定的 import 加载的模块
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ['off', {
      paths: [],
      patterns: []
    }],

    // disallow to use this/super before super() calling in constructors.
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // disallow useless computed property keys
    // 禁止在对象中使用不必要的计算属性
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    // 禁用不必要的构造函数
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // require let or const instead of var
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // 要求或禁止对象字面量中方法和属性使用简写语法
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // suggest using arrow functions as callbacks
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false, // 禁止使用命名的函数作为回调函数或函数参数
      allowUnboundThis: true, // 许包含 this 的函数表达式被用作回调函数
    }],

    // suggest using of const declaration for variables that are never modified after declared
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // Prefer destructuring from arrays and objects
    // 优先使用数组和对象解构
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      VariableDeclarator: { // 在变量声明中的对象解构
        array: false,
        object: true,
      },
      AssignmentExpression: { // 赋值表达式的数组解构
        array: true,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // 已弃用
    // suggest using Reflect methods where applicable
    // 建议在适用的地方使用Reflect方法
    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // use rest parameters instead of arguments
    // 要求使用剩余参数而不是 arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    // 要求使用扩展运算符而非 .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    // 要求使用模板字面量而非字符串连接
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    // 要求 generator 函数内有 yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // enforce spacing between object rest-spread
    // 强制剩余和扩展运算符及其表达式之间有空格
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    // 强制模块内的 import 排序
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // require a Symbol description
    // 要求 symbol 描述
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // enforce spacing around the * in yield* expressions
    // 强制在 yield* 表达式中 * 周围使用空格
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['off', 'after']
  }
};
