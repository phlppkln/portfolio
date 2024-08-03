import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    const p5 = await import('p5')
    nuxtApp.provide('p5', p5.default)
  }
})
