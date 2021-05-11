module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforce that anchors have content
    // 强制锚点有内容
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': ['error', { components: [] }],

    // Require ARIA roles to be valid and non-abstract
    // 要求ARIA角色有效且不抽象
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': ['error', { ignoreNonDom: false }],

    // Enforce all aria-* props are valid.
    // 强制所有aria-开头的属性都有效。
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 'error',

    // Enforce ARIA state and property values are valid.
    // 强制ARIA状态和属性值有效
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 'error',

    // Enforce that elements that do not support ARIA roles, states, and
    // properties do not have those attributes.
    // 强制不支持ARIA角色，状态和属性的元素不具有这些属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 'error',

    // Enforce that all elements that require alternative text have meaningful information
    // 强制所有需要替代文本的元素都具有有意义的信息
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': ['error', {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': [],
    }],

    // Prevent img alt text from containing redundant words like "image", "picture", or "photo"
    // 禁止img alt文本包含多余的单词，如"image", "picture", "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': 'error',

    // require that JSX labels use "htmlFor"
    // 要求JSX标签使用“htmlFor”
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': ['error', {
      components: [],
      required: {
        every: ['nesting', 'id'],
      },
      allowChildren: false,
    }],

    // Enforce that a label tag has a text label and an associated control.
    // 强制标签标签具有文本标签和关联控件
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'both',
      depth: 25
    }],

    // require that mouseover/out come with focus/blur, for keyboard-only users
    // 对于仅限键盘的用户，要求鼠标悬停/输出具有焦点/模糊
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // Prevent use of `accessKey`
    // 禁止使用accessKey
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 'error',

    // require onBlur instead of onChange
    // 使用onBlur而不是onChange
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
    'jsx-a11y/no-onchange': 'off',

    // Elements with an interactive role and interaction handlers must be focusable
    // 具有交互角色和交互处理程序的元素必须是可关注的
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
    'jsx-a11y/interactive-supports-focus': 'error',

    // Enforce that elements with ARIA roles must have all required attributes
    // for that role.
    // 强制使用ARIA角色的元素必须具有该角色的所有必需属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with explicit or implicit roles defined contain
    // only aria-* properties supported by that role.
    // 强制定义显式或隐式角色的元素仅包含该角色支持的aria- *属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 'error',

    // Enforce tabIndex value is not greater than zero.
    // 强制tabIndex值<=0
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
    'jsx-a11y/tabindex-no-positive': 'error',

    // ensure <hX> tags have content and are not aria-hidden
    // 确保<hX> 标签有内容并且不是aria-hidden
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': ['error', { components: [''] }],

    // require HTML elements to have a "lang" prop
    // 要求HTML元素具有"lang"属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
    'jsx-a11y/html-has-lang': 'error',

    // require HTML element's lang prop to be valid
    // 要求HTML元素的lang prop有效
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
    'jsx-a11y/lang': 'error',

    // prevent distracting elements, like <marquee> and <blink>
    // 禁止表意不明的元素的元素，如<marquee>和<blink>
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': ['error', {
      elements: ['marquee', 'blink'],
    }],

    // only allow <th> to have the "scope" attr
    // 只允许<th>使用scope属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
    'jsx-a11y/scope': 'error',

    // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
    // 要求onClick伴随onKeyUp / onKeyDown / onKeyPress
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'off',

    // Enforce that DOM elements without semantic behavior not have interaction handlers
    // 强制没有语义行为的DOM元素没有交互处理程序
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': ['off', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],

    // A non-interactive element does not support event handlers (mouse and key handlers)
    // 非交互元素不支持事件处理程序
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': ['off', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],

    // ensure emoji are accessible
    // 确保表情符号可访问
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
    'jsx-a11y/accessible-emoji': 'error',

    // elements with aria-activedescendant must be tabbable
    // 具有aria-activedescendant的元素必须是可列表的
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    // ensure iframe elements have a unique title
    // 确保iframe元素具有唯一标题
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
    'jsx-a11y/iframe-has-title': 'error',

    // prohibit autoFocus prop
    // 禁止autoFocus属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    // 'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
    'jsx-a11y/no-autofocus': ['off', { ignoreNonDOM: true }],

    // ensure HTML elements do not specify redundant ARIA roles
    // 确保HTML元素不指定冗余的ARIA角色
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
    'jsx-a11y/no-redundant-roles': 'error',

    // media elements must have captions
    // 媒体元素必须写captions属性
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
    'jsx-a11y/media-has-caption': ['error', {
      audio: [],
      video: [],
      track: [],
    }],

    // WAI-ARIA roles should not be used to convert an interactive element to non-interactive
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
      tr: ['none', 'presentation'],
    }],

    // WAI-ARIA roles should not be used to convert a non-interactive element to interactive
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],

    // Tab key navigation should be limited to elements on the page that can be interacted with.
    // WAI-ARIA角色不应用于将交互式元素转换为非交互式元素
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
    'jsx-a11y/no-noninteractive-tabindex': ['error', {
      tags: [],
      roles: ['tabpanel'],
    }],

    // ensure <a> tags are valid
    // 确保a标签有效
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
