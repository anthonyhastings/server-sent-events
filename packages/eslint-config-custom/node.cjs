/** @type { import('eslint').Linter.Config } */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
  },
  extends: ['turbo', 'plugin:n/recommended', 'prettier'],
  settings: {
    node: {
      version: '>=20.0.0',
    },
  },
  rules: {},
};
