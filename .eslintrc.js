module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2017: true,
    es2020: true,
    es6: true,
    jest: true,
    node: true,
    serviceworker: true
  },
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'spaced-comment': ['error', 'always']
  }
};
