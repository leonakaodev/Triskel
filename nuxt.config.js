// import colors from "vuetify/es5/util/colors";

require("dotenv").config();

export default {
    mode: "universal",
    /*
  ** Headers of the page
  */
    head: {
        titleTemplate: "Triskel",
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: process.env.npm_package_description || "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },
    /*
  ** Customize the progress-bar color
  */
    loading: { color: "#fff" },
    /*
  ** Global CSS
  */
    css: [
    ],
    /*
  ** Plugins to load before mounting the App
  */
    plugins: [
    ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
        "@nuxtjs/vuetify",
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
        "@nuxtjs/dotenv"
    ],
    /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {

        }
    },
    /*
  ** Build configuration
  */
    build: {
    /*
    ** You can extend webpack config here
    */
        extend (config, ctx) {
            // Fix eslint erros on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                    options: {
                        fix: true,
                    },
                });
            }
        }
    },
    server: {
        port: process.env.VUE_APP_PORT || 3000,
        host: process.env.VUE_APP_HOST || "localhost"
    }
};
