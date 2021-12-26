import { NuxtOptions } from '@nuxt/types';
import ENV from "./env.config";

const config = {
  // https://nuxtjs.org/guides/configuration-glossary/configuration-target
  target: 'static',

  // https://nuxtjs.org/guides/configuration-glossary/configuration-components
  components: false,

  // https://nuxtjs.org/guides/configuration-glossary/configuration-head
  head: {
    title: 'NX1 - NetrixOne - IT professionals',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'author', content: 'NX1' },
      { name: 'googlebot', content: ENV.NX1_DEV ? 'nosnippet,noarchive' : 'snippet,archive' },
      { name: 'robots', content: ENV.NX1_DEV ? 'noindex,nofollow' : 'index,follow' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    htmlAttrs: {
      lang: 'en',
      class: 'transition-opacity bg-white mode-dark transition-delay-250'
    },
    bodyAttrs: {
      class: 'text-base bg-white font-roboto dark:bg-black transition-bg'
    },
    /*

     <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png"/>
    <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicon/favicon-32x32.png"
    />
    <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="./favicon/site.webmanifest"/>
    <link
        rel="mask-icon"
        href="./favicon/safari-pinned-tab.svg"
        color="#5bbad5"
    />
    <link rel="shortcut icon" href="./favicon/favicon.ico"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>

     */
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // https://nuxtjs.org/guides/configuration-glossary/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules
  modules: [],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-build
  build: {},

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules#buildmodules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  // https://tailwindcss.nuxtjs.org/
  tailwindcss: {
    exposeConfig: true
  },

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {}
} as Partial<NuxtOptions>;

// Production config
if (ENV.NX1_PROD) {
  // https://google-analytics.nuxtjs.org/setup
  // config.buildModules!.push('@nuxtjs/google-analytics');
  // config.googleAnalytics = {
  //   id: 'UA-151663889-1'
  // };

  // https://github.com/f00b4r/nuxt-smartlook
  // config.modules!.push('nuxt-smartlook');
  // config.smartlook = {
  //   id: "XXXXX",
  //   // enabled: process.env.NODE_ENV === 'production',
  // }

  // https://sentry.nuxtjs.org/options/
  // config.modules!.push('@nuxtjs/sentry');
  // config.sentry = {
  //   dsn: ENV.SENTRY_DSN,
  //   // disabled: process.env.NODE_ENV !== 'production',
  // }

  // https://github.com/nuxt-community/gtm-module
  // config.modules!.push('@nuxtjs/gtm');
  // config.gtm = {
  //   id: 'GTM-XXX'
  // }
}

export default config;
