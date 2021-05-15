module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // indent: ['warn', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'], offsetTernaryExpressions: false }],
    'no-console': 'warn',
    // 'prettier/prettier': 'error',
  },
  globals: {
    module: false,
  },
};
