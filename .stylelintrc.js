module.exports = {
  extends: ['@shopify/stylelint-plugin', '@shopify/stylelint-plugin/prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'screen', 'layer'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['model-viewer'],
      },
    ],
  },
};
