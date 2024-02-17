export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
      ],
    },
  },
  modules: ["@nuxt/content"],
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
