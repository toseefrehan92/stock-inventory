module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    "ignorePatterns": ["server.test.ts"],
    rules: {
      // Additional rules or overrides if needed
    },
  };
  