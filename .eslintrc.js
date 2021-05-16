module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`
  },
  plugins: [
    '@typescript-eslint',
    'baseui'
  ],
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['warn', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/prefer-nullish-coalescing': ['off'],
    '@typescript-eslint/prefer-ts-expect-error': ['off'],
    '@typescript-eslint/default-param-last': ['off'],
    '@typescript-eslint/promise-function-async': ['off'],
    'react/prop-types': ['off'],
    'import/order': ['error', {
        'newlines-between': 'always-and-inside-groups'
    }],
    'react/react-in-jsx-scope': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'baseui/deprecated-theme-api': ['warn'],
    'baseui/deprecated-component-api': ['warn'],
    'baseui/no-deep-imports': ['warn'],
  }
}
