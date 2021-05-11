module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // 强制数组方法的回调函数中有 return 语句
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // treat var statements as if they were block scoped
    // 把 var 语句看作是在块级作用域范围之内
    'block-scoped-var': 'error',

    // specify the maximum cyclomatic complexity allowed in a program
    // 指定程序中允许的最大环路复杂度
    complexity: ['off', 11],

    // enforce that class methods use "this"
    // 强制类方法使用 this
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    // require return statements to either always or never specify values
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 'error',

    // specify curly brace conventions for all control statements
    // 强制所有控制语句使用一致的括号风格,(允许在单行中省略大括号)
    curly: ['error', 'multi-line'],

    // require default case in switch statements
    // 要求所有的switch语句都必须要有一个default分支
    'default-case': ['error', { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    // 推荐使用.号获取对象属性
    'dot-notation': ['error', { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // 强制在点号之前或之后换行
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // require the use of === and !==
    // 要求使用 === 和 !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // make sure for-in loops have an if statement
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'error',

    // // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    // TODO: semver-major (eslint 5): enable
    'max-classes-per-file': ['off', 1],

    // disallow the use of alert, confirm, and prompt
    // 禁用 alert、confirm 和 prompt
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // 不允许在 case 子句中使用词法声明
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow else after a return in an if
    // 禁止 if 语句中 return 语句之后有 else 块
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // disallow empty functions, except for standalone funcs/arrows
    // 禁止出现空函数
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // 禁止使用空解构模式
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 'off',

    // disallow use of eval()
    // 禁用 eval()
    'no-eval': 'error',

    // disallow adding to native types
    // 禁止扩展原生类型
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    // 禁用不必要的标签
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    // 禁止 case 语句落空
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // 禁止数字字面量中使用前导和末尾小数点
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    // 禁止对原生对象或只读的全局对象进行赋值
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // // 已弃用
    // // deprecated in favor of no-global-assign
    // // 不赞成使用no-global-assign
    // 'no-native-reassign': 'off',

    // disallow implicit type conversions
    // 禁止使用短符号进行类型转换
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow var and named functions in global scope
    // 禁止在全局范围内使用变量声明和 function 声明
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    // 禁止使用类似 eval() 的方法
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    // 禁止 this 关键字出现在类和类对象之外
    // https://eslint.org/docs/rules/no-implied-eval
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    // 禁用迭代器 __iterator__ 属性
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    // 禁用标签语句
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',

    // disallow magic numbers
    // 禁用魔术数字(代码中多次出现的没有明确含义的数字)
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    // 禁止使用多个空格
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],

    // disallow use of multiline strings
    // 禁止使用多行字符串
    'no-multi-str': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    // 禁止使用 new 以避免产生副作用
    'no-new': 'error',

    // disallow use of new operator for Function object
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',

    // disallow use of (old style) octal literals
    // 禁用八进制字面量
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // 禁止对函数参数再赋值
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': ['error', {
      props: false, // 可以修改参数的属性
    }],

    // disallow usage of __proto__ property
    // 禁用 __proto__ 属性
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    // 禁止多次声明同一变量
    'no-redeclare': 'error',

    // disallow certain object properties
    // 禁止使用对象的某些属性
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // disallow use of assignment in return statement
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error', 'always'],

    // disallow redundant `return await`
    // 禁用不必要的 return await(在 async function， return await 是没有用的)
    'no-return-await': 'error',

    // disallow use of `javascript:` urls.
    // 禁止使用 javascript: url(比如a标签的href属性)
    'no-script-url': 'off',

    // disallow self assignment
    // 禁止自我赋值
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', {
      props: false,
    }],

    // disallow comparisons where both sides are exactly the same
    // 禁止自身比较
    'no-self-compare': 'error',

    // disallow use of comma operator
    // 禁用逗号操作符
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    // 禁止抛出异常字面量
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // 禁用一成不变的循环条件
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    // 禁止出现未使用过的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: false, // 不允许在表达式中使用逻辑短路求值
      allowTernary: true, // 允许在表达式中使用类似逻辑短路求值的三元运算符
      allowTaggedTemplates: false, // 不允许在表达式中使用带标签的模板字面量
    }],

    // disallow unused labels
    // 禁用出现未使用过的标签
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'off',

    // Disallow unnecessary catch clauses
    // 避免没有必要的catch子句(如finally)
    // https://eslint.org/docs/rules/no-useless-catch
    // TODO: enable, semver-major
    'no-useless-catch': 'off',

    // disallow useless string concatenation
    // 禁止不必要的字符串字面量或模板字面量的连接
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // 禁用不必要的转义字符
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // disallow redundant return; keywords
    // 禁止没有任何内容的return
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // disallow use of void operator
    // 禁用 void 操作符
    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    // 禁用 with 语句
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Suggest using named capture group in regular expression
    // 建议在正则表达式中使用命名捕获组
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // require use of the second argument for parseInt()
    // 强制在parseInt()使用基数参数(如：parseInt("071", 10))
    radix: 'error',

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // 禁止使用不带 await 表达式的 async 函数
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // Enforce the use of u flag on RegExp
    // 在RegExp上强制使用u标志
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // requires to declare all vars on top of their containing scope
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // 立即执行函数需要通过圆括号包围
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    // 要求或禁止 “Yoda” 条件
    yoda: 'error'
  }
};
