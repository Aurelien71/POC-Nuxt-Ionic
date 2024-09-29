// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss"],
  ionic: {
    integrations: {
      //
    },
    css: {
      utilities: true,
    },
    config: {
      //
    },
  },
  ssr: false,
  css: ["~/assets/css/ionic.css"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
});
