// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: [
      '~/components/layout',
      '~/components/composables',

      '~/components/page-specific/home',
      '~/components/page-specific/detail',
    ]
  },
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
