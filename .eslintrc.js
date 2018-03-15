module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^src'],
      },
    ],
  },
};
