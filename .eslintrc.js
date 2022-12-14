module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off", // 변수 선언후 안썻을 때
    "import/no-unresolved": "off", // import후 안썻을 때
    "vue/no-unused-components": "off", // 컴포넌트 사용후 안썻을 때
  },
};
