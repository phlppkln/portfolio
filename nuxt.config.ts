// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss', '~/assets/styles/components.scss', 'animate.css', 'bootstrap-vue/dist/bootstrap-vue.css', 'bootstrap/dist/css/bootstrap.css', 'bootstrap-icons/font/bootstrap-icons.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/_mixins.scss" as *; @use "~/assets/styles/_colors_new.scss" as *; @use "~/assets/styles/projects.scss" as *;`,
        },
      },
    },
  },
  components: [
    '~/components'
  ],
  modules: ['nuxt-bootstrap-icons', "@nuxt/image", "@nuxt/ui"],
  plugins: ['~/plugins/p5.js']
});