export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
  modules: ["@nuxt/content"],
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
