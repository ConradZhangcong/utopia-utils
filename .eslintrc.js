module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  globals: {
    module: false,
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'time', 'timeEnd'] }],
    'no-explicit-any': 'off',
  },
};
