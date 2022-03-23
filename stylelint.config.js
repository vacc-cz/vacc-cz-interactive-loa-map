module.exports = {
  extends: [
    '@visionappscz/stylelint-config',
    '@visionappscz/stylelint-config/order',
    '@visionappscz/stylelint-config/scss',
    '@visionappscz/stylelint-config/cssModules',
  ],
  rules: {
    'at-rule-no-unknown': [
      true, {
        ignoreAtRules: [
          'at-root',
          'content',
          'debug',
          'each',
          'else',
          'else if',
          'error',
          'extend',
          'for',
          'forward',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'use',
          'warn',
          'while',
        ],
      },
    ],
    indentation: 2,
  },
};
