module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    // enable additional rules
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    // quotes: ["error", "double",],
    semi: ["error", "always"],

    // override default options for rules from base configurations
    // 'comma-dangle': ['error', 'always',],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
  },
};
