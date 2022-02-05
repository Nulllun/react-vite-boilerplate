module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'prettier',
        'simple-import-sort',
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      rules: {
        'no-use-before-define': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'linebreak-style': 'off',
        'eol-last': 'off',
        'max-len': ['error', { code: 80 }],
        'import/extensions': ['error', 'never', { svg: 'always' }],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              // Packages
              ['^\\w'],
              // Internal packages.
              ['^(@|config/)(/*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
        'import/no-anonymous-default-export': [
          'error',
          {
            allowArrowFunction: true,
            allowAnonymousFunction: true,
          },
        ],
        'arrow-parens': ['error', 'as-needed'],
        '@typescript-eslint/explicit-function-return-type': [
          // I suggest this setting for requiring return types on functions only where usefull
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        'react/jsx-key': [
          'error',
          {
            'checkKeyMustBeforeSpread': true,
            'checkFragmentShorthand': false
          }
        ],
        'import/prefer-default-export': 'off',
        'arrow-body-style': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
          {
            usePrettierrc: true
          }
        ],
      },
    }
  ],
}
