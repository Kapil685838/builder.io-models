// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@builder.io/sdk-vue/vue3/css"],
  runtimeConfig: {
    public: {
      builderApiKey: "",
    },
  },
});
