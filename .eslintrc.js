module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    indent: ["error", 4],
    semi: ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    quotes: ["error", "single", { allowTemplateLiterals: true }],
  },
};
