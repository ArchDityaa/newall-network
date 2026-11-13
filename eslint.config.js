{
  "$schema": "https://json.schemastore.org/eslintrc.json",
  "root": true,
  "env": { "browser": true, "es2022": true },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  "ignorePatterns": ["dist", ".eslintrc.json", "node_modules", "*.config.*"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"],
    "tsconfigRootDir": "."
  },
  "plugins": ["react-refresh", "@typescript-eslint", "react"],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { "allowConstantExport": true }
    ],
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/consistent-type-imports": "error",
    "react/no-unknown-property": ["error", { "ignore": ["css"] }]
  }
}