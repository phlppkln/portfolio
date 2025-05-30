// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-29",
	typsescript: {
		typeCheck: true,
	},
	devtools: { enabled: true },
	css: [
		"~/assets/styles/main.scss",
		"animate.css",
		"bootstrap/dist/css/bootstrap.css",
		"bootstrap-icons/font/bootstrap-icons.css",
	],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "~/assets/styles/_colors.scss" as *; @use "~/assets/styles/_mixins-fadein.scss" as *; `,
					api: "modern-compiler",
				},
			},
		},
	},

	modules: ["nuxt-bootstrap-icons", "@nuxt/image", "@nuxt/ui"],
	plugins: ["~/plugins/p5.js"],
	image: {
		dir: "assets/images",
	},
});
