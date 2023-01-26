// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@nuxtjs/apollo"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:8080/v1/graphql",
      },
    },
  },
});
