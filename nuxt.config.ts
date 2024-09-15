export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  ssr: true,
  routeRules: {
    '/**': { prerender: true },
  },
  css: ["@/assets/scss/fonts.scss", "@/assets/scss/utils.scss"],
  compatibilityDate: '2024-09-15'
})
