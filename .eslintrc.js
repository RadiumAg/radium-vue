module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    // js/ts
    "eol-last": "error",
    "no-trailing-spaces": "error",
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    camelcase: ["error", { properties: "never" }],
    semi: ["error", "always"],
    indent: ["off", 2, { SwitchCase: 2 }],
    "object-curly-spacing": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/member-delimiter-style": ["off"],
    // vue
    "vue/no-v-html": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "never",
        },
      },
    ],
    "vue/max-attributes-per-line": [
      'off',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/require-default-prop": "off",
    "vue/html-closing-bracket-spacing": "off",
    "prettier/prettier": ["error",{
       singleQuote: true,
       endOfLine: "auto",
       tabWidth: undefined,
       trailingComma: "all",
       arrowParens: "avoid"
    },{
      "usePrettierrc": true
    }],
  },
};
