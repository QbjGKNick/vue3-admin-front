module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier"
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        endOfLine: "auto"
      }
    ]
  }
}
