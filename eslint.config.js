import js from "@eslint/js";
import ts from "typescript-eslint";
// import eslintPluginVue from "eslint-plugin-vue";
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

const conf = createConfigForNuxt()
  .prepend(
    {
      ignores: [".nuxt", "dist", "node_modules", "playground"]
    }
  )
  .prepend(ts.config(
    js.configs.recommended,
    // ...ts.configs.stylistic,
    // ...eslintPluginVue.configs['flat/recommended'],
    {
      files: ['*.vue', '**/*.vue'],
      languageOptions: {
        parserOptions: {
          parser: '@typescript-eslint/parser'
        }
      }
    }
  )).override('nuxt/typescript/rules', {
    rules: {
      "import/no-duplicates": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }
      ],
    }
  }).override('nuxt/vue/rules', {
    rules: {
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
    }
  })

export default conf