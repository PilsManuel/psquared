export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
