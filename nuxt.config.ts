// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['@builder.io/sdk-vue']
  },
  runtimeConfig: {
    public: {
      builderApiKey: "",
    },
  },
});
