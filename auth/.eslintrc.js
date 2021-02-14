module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'consistent-return': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'linebreak-style': 0,
    'no-new': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    '@typescript-eslint/indent': ['error', 2],
  },
};
