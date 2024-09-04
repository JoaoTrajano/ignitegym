import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    env: {
      es2021: true
    },
    ignorePatterns: ["**/*.test.js", "**/*.spec.js", "**/*.test.ts", "**/*.spec.ts"],
    plugins: ["@typescript-eslint"],
    overrides: [
      {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        extends: [
          "eslint:recommended",
          "plugin:@typescript-eslint/recommended",
          "prettier",
          pluginJs.configs.recommended,
          pluginReactConfig,
        ],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          tsconfigRootDir: "./",
          project: ["./tsconfig.json"],
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2018,
          sourceType: "module",
        },
        rules: {
          "@typescript-eslint/no-unused-vars": [
            "error",
            {
              vars: "all",
              args: "after-used",
              ignoreRestSiblings: false,
              argsIgnorePattern: "^_"
            }
          ],
          "@typescript-eslint/consistent-type-definitions": ["off"],
          "@typescript-eslint/no-explicit-any": "error",
          "prettier/prettier": "error",
          "react/jsx-filename-extension": [
            "warn",
            {
              extensions: [".jsx", ".js"]
            }
          ],
          "import/prefer-default-export": "off",
          "react/state-in-constructor": "off",
          "react/static-property-placement": "off",
          "react/jsx-props-no-spreading": "off",
          "react/prop-types": "off",
          "no-param-reassign": "off",
          "no-console": "on"
        }
      }
    ]
  }
];
