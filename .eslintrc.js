module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'prefer-arrow'],
  root: true,
  rules: {
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-void': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_|type|of|returns',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'unused-imports/no-unused-imports-ts': 'warn',
    'sort-imports': 0,
    '@typescript-eslint/no-floating-promises': 0,
  },
  settings: {
    'import/ignore': ['.*csv-parse.*'],
  },
}
