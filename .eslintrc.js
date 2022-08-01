module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
    "react/jsx-wrap-multilines": ["warn", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "ignore",
      "prop": "ignore"
    }],
    'object-curly-spacing': ["warn", "always"],
    'eol-last': ['warn', 'always'],
    'react/jsx-indent' : ["warn", 2],
    "react/react-in-jsx-scope": "off",
    'indent': [
      'warn',
      2
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'always'
    ],
    "max-len": ["warn", {
      "code": 120
    }]
  }
};
