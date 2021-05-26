module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier', 'promise'],
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
    'promise/valid-params': 'warn'
  },
  globals: {
    $: true,
    Vue: true,
    jQuery: true,
    AMap: true
  }
};
