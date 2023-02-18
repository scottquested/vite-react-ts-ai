module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier'
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'react-func',
    'eslint-plugin-react-hooks'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'max-len': [
      2,
      {
        ignorePattern: 'd="([\\s\\S]*?)"',
        code: 120
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'multiline-block-like',
          'multiline-expression',
          'multiline-const',
          'multiline-let',
          'const',
          'let'
        ],
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if'
      }
    ],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-restricted-exports': ['off'],
    'react/react-in-jsx-scope': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'max-lines-per-function': ['error', 260],
    'react-func/max-lines-per-function': [
      'error',
      {
        max: 40,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],
    'no-var': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '18.1.0'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
        alias: {
          components: './src/components'
        }
      }
    }
  }
};
