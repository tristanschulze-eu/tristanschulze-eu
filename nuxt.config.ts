export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate(titleChunk) {
          return titleChunk
            ? `${titleChunk
            } - Site Title` : 'Site Title';
      }
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-easy-lightbox'
  ],
  srcDir: 'src/',
  ssr: true,
  routeRules: {
    '/**': { prerender: true },
  },
  css: ["@/assets/scss/main.scss", "@/assets/scss/utils.scss"],
  compatibilityDate: '2024-09-15',
  plugins: [
    '~/plugins/panel'
  ],
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