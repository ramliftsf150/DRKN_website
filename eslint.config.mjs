import js from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import hooks from "eslint-plugin-react-hooks";
export default tseslint.config(
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.tsx"],
    plugins: { "jsx-a11y": jsxA11y, "react-hooks": hooks },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      globals: { process: "readonly", console: "readonly", fetch: "readonly" },
    },
  },
);
