// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/apollo", "@element-plus/nuxt"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:8080/v1/graphql",
      },
    },
  },
});
