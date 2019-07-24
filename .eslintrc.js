module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "generator-star-spacing": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "quotes": "off",
    "indent": "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
