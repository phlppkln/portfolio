// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss', 'animate.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      path: '~/src/pages',
      pathPrefix: false
    },
    '~/components'
  ]
});
