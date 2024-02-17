// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 1337
  },
  modules: [
      '@nuxt/content',
      '@nuxthq/studio',
      '@unocss/nuxt'
  ],
  css: [
    '@/assets/css/global.css'
  ]
});