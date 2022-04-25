module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "choose-gif",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Choosy" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  /*
   ** Build configuration
   */
  buildModules: [
    // Simple usage
    "@nuxtjs/eslint-module",

    // With options
    [
      "@nuxtjs/eslint-module",
      {
        /* module options */
      },
    ],
  ],
};
