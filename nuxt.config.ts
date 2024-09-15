export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  srcDir: 'src/',
  ssr: true,
  routeRules: {
    '/**': { prerender: true },
  },
  compatibilityDate: '2024-09-15'
})
