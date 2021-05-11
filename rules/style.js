module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // 在数组开括号后和闭括号前强制换行
    // https://eslint.org/docs/rules/array-bracket-newline
    // TODO: enable? semver-major
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // enforce line breaks between array elements
    // 强制数组元素间出现换行
    // https://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'never'],

    // enforce spacing inside single-line blocks
    // 强制在代码块中开括号前和闭括号后有空格
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camel case names
    // 强制使用骆驼拼写法命名约定
    // TODO: semver-major (eslint 5): add ignoreDestructuring: false option
    camelcase: ['error', { properties: 'never' }],

    // enforce or disallow capitalization of the first letter of a comment
    // 规定在注释开头是否要以大写字母开头
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // require trailing commas in multiline object literals
    // 要求或禁止末尾逗号
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],

    // enforce spacing before and after comma
    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    // 强制使用一致的逗号风格
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    // disallow padding inside computed properties
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    // 要求文件末尾存在空行
    'eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // 要求或禁止在函数标识符和其调用之间有空格
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    // https://eslint.org/docs/rules/func-name-matching
    // TODO: semver-major (eslint 5): add considerPropertyDescriptor: true
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false
    }],

    // require function expressions to have a name
    // 要求或禁止使用命名的 function 表达式
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // 强制一致地使用 function 声明或表达式
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    'func-style': ['off', 'expression'],

    // enforce consistent line breaks inside function parentheses
    // 强制在函数括号内使用一致的换行
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // Blacklist certain identifiers to prevent them being used
    // 禁用指定的标识符
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // 强制标识符的最小和最大长度
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    // 要求标识符匹配一个指定的正则表达式
    'id-match': 'off',

    // Enforce the location of arrow function bodies with implicit returns
    // 强制隐式返回的箭头函数体的位置
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['off', 'beside'], // beside:禁止在箭头函数体之前出现换行。

    // this option sets a specific tab width for your code
    // 强制使用一致的缩进，默认值是2 spaces
    // https://eslint.org/docs/rules/indent
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],

    // specify whether double or single quotes should be used in JSX attributes
    // 强制在 JSX 属性中一致地使用双引号
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // 强制行注释的位置
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // 规定换行的方式，可选用Unix行结尾方式LF或Windows行结尾方式CRLF。
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',

    // require or disallow an empty line between class members
    // 要求类成员之间出现空行
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // enforces empty lines around comments
    // 要求在注释周围有空行
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      allowBlockStart: true
    }],

    // // 已弃用
    // // require or disallow newlines around directives
    // // 要求在语句间填充空行
    // // https://eslint.org/docs/rules/lines-around-directive
    // 'lines-around-directive': ['off', {
    //   before: 'always',
    //   after: 'always',
    // }],

    // specify the maximum depth that blocks can be nested
    // 强制可嵌套的块的最大深度
    'max-depth': ['off', 4],

    // specify the maximum length of a line in your program
    // 强制一行的最大长度
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 150, 2, {
      ignoreUrls: true, // 忽略含有链接的行
      ignoreComments: true, // 忽略所有拖尾注释和行内注释
      ignoreRegExpLiterals: true, // 忽略包含正则表达式的行
      ignoreStrings: true, // 忽略含有双引号或单引号字符串的行
      ignoreTemplateLiterals: true, // 忽略包含模板字面量的行
    }],

    // specify the max number of lines in a file
    // 强制最大行数
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // enforce a maximum function length
    // 强制函数的最大长度
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': ['off', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // specify the maximum depth callbacks can be nested
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    // 强制函数定义中最多允许的参数数量
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    // 强制函数块最多允许的的语句数量
    'max-statements': ['off', 10],

    // restrict the number of statements per line
    // 强制每一行中所允许的最大语句数量
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['off', { max: 1 }],

    // enforce a particular style for multiline comments
    // 强制对多行注释使用特定风格
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // 要求或禁止在三元操作数中间换行
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    // 要求构造函数首字母大写
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // 要求调用无参构造函数时有圆括号
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // 已弃用
    // allow/disallow an empty newline after var statement
    // 要求或禁止在语句间填充空行
    'newline-after-var': 'off',

    // 已弃用
    // https://eslint.org/docs/rules/newline-before-return
    // 要求或禁止在语句间填充空行
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // 要求方法链中每个调用都有一个换行符, 允许在同一行成链的深度为4
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // 禁用 Array 构造函数
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // 禁用按位运算符
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // 禁用 continue 语句
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    // 禁止在代码后使用内联注释
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // 禁止 if 作为唯一的语句出现在 else 语句中
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // 禁止混合使用不同的操作符
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['error', {
      // the list of arthmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['**', '+'],
        ['**', '-'],
        ['**', '*'],
        ['**', '/'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    // 禁止连续赋值
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error'],

    // disallow multiple empty lines and only one newline at the end
    // 禁止出现多行空行,最大连续空行数：2
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    // disallow negated conditions
    // 禁用否定的表达式
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // 禁用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    // 禁用 Object 的构造函数
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // 禁用一元操作符 ++ 和 --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // disallow certain syntax forms
    // 禁用特定的语法
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow space between function identifier and application
    // 求或禁止在函数标识符和其调用之间有空格
    'no-spaced-func': 'error',

    // disallow tab characters entirely
    // 禁用 tab
    'no-tabs': 'error',

    // disallow the use of ternary operators
    // 禁用三元操作符
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    // 禁用行尾空白
    'no-trailing-spaces': ['error', {
      skipBlankLines: true, // 允许在空行使用空白符
      ignoreComments: false, // 禁止在注释块中使用空白符
    }],

    // disallow dangling underscores in identifiers
    // 禁止标识符中有悬空下划线
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['off', {
      allow: [],
      allowAfterThis: false, // 禁止在 this 对象的成员变量上使用悬空下划线
      allowAfterSuper: false, // 禁止在 super 对象的成员变量上使用悬空下划线
      enforceInMethodNames: true, // 禁止在方法名中使用悬空下划线
    }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // 禁止属性前有空白
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    // 强制单个语句的位置
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',
    // 'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // require padding inside curly braces
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // enforce line breaks between braces
    // 强制大括号内换行符的一致性
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // enforce "same line" or "multiple line" on object properties.
    // 强制将对象的属性放在不同的行上
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true, // 允许对象字面量在同一行
    }],

    // allow just one var statement per function
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // 要求在变量声明周围换行
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // 要求在可能的情况下使用简化的赋值操作符
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Requires operator at the beginning of the line in multiline statements
    // 强制操作符使用一致的换行符
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['off', 'before', { overrides: { '=': 'none' } }],

    // disallow padding within blocks
    // 禁止块内填充
    // TODO, semver-major: uncomment option
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
      // allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    // 要求或禁止在语句间填充空行
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Prefer use of an object spread over Object.assign
    // 推荐在Object.assign中使用对象解构
    // https://eslint.org/docs/rules/prefer-object-spread
    // TODO: semver-major (eslint 5): enable
    'prefer-object-spread': 'off',

    // require quotes around object literal property names
    // 要求对象字面量属性名称用引号括起来
    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    // 强制使用一致的反勾号、双引号或单引号
    quotes: ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // 要求使用 JSDoc 注释
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    // 要求或禁止使用分号代替 ASI
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['off', { before: false, after: true }],

    // Enforce location of semicolons
    // 强制分号的位置
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // requires object keys to be sorted
    // 要求对象属性按序排列
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': 'off',

    // require or disallow space before blocks
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // 强制在 function的左括号之前使用一致的空格
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    // require or disallow spaces inside parentheses
    // 强制在圆括号内使用一致的空格
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    // 要求操作符周围有空格
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // 强制在一元操作符前后使用一致的空格
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // 强制在注释中 // 或 /* 使用一致的空格
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
        balanced: true,
      }
    }],

    // Enforce spacing around colons of switch statements
    // 强制在 switch 的冒号左右有空格
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // 要求或禁止在模板标记和它们的字面量之间有空格
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['off', 'never'],

    // require or disallow the Unicode Byte Order Mark
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    // 要求正则表达式被括号括起来
    'wrap-regex': 'off'
  }
};
