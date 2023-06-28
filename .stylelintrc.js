module.exports = {
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
}