import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  eslintPluginPrettierRecommended, // Sets up both eslint-plugin-prettier and eslint-config-prettier
  eslintConfigPrettier,            // Double-checks that formatting conflicts are disabled
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Use "commonjs" if you are using require() instead of import
      globals: {
        // Defines common Node environment variables so ESLint doesn't flag them as undefined
        process: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly"
      }
    },
    rules: {
      "no-console": "warn", // Warns you if you leave console.logs behind
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }] // Errors on unused variables unless prefixed with an underscore
    }
  }
];