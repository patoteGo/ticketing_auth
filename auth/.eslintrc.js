module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
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
  },
};
