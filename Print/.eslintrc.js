module.exports = {
  env: {
    es2017: true,
  },
  globals: {
    kintone: 'readonly',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': 0,
  },
  extends: [
    '@cybozu/eslint-config/lib/kintone.js',
    '@cybozu/eslint-config/globals/kintone.js',
    '@cybozu/eslint-config/presets/react',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
};
