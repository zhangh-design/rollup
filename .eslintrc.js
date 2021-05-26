module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier', 'promise', 'import', 'standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'error', // 被prettier标记的地方抛出错误信息，vue CLI 默认是 warn
    'no-console': 'off',
    semi: ['error', 'always'],
    /* 'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never' // 和 prettierrc 格式化插件会冲突，主要是 function 后和()之间的空格问题
      }
    ], */
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // semi: 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    // eslint-plugin-promise 规则
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': ['error', { allowFinally: true }],
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    // eslint-plugin-import
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-absolute-path': 2,
    'import/no-self-import': 2,
    'import/export': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-relative-parent-imports': 2,
    'import/no-useless-path-segments': 2,
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/no-dynamic-require': 2,
    'import/no-relative-packages': 0,
    'import/no-restricted-paths': 0,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 1,
    'import/no-unused-modules': [
      1,
      { unusedExports: true, ignoreExports: ['./src/index.js'] }
    ], // 排除 src/index.js 不进行这个校验，因为这是入口文件
    'import/newline-after-import': 2,
    'import/order': 2,
    'import/group-exports': 2,
    'import/no-namespace': 2,
    'import/extensions': [
      'error',
      { js: 'always', json: 'always', vue: 'always', jsx: 'always' }
    ],
    'import/first': 2,
    // eslint-plugin-standard
    'standard/no-callback-literal': [2, ['cb', 'callback']]
  },
  globals: {
    $: true,
    Vue: true,
    jQuery: true,
    AMap: true
  }
};
