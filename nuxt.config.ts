export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  srcDir: 'src/',
  ssr: true,
  routeRules: {
    '/**': { prerender: true },
  },
  css: ["@/assets/scss/main.scss", "@/assets/scss/utils.scss"],
  compatibilityDate: '2024-09-15',
  content: {
    documentDriven: true,
    markdown: { 
      anchorLinks: false
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['de', 'en'],
    defaultLocale: 'de',
    strategy: "prefix"
  }
})