module.exports = {
  env: {
    browser: true,
    node: true
    //es6: true
  },
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'spaced-comment': ['error', 'always']
  }
};
