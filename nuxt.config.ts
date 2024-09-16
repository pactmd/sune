export default defineNuxtConfig({
  compatibilityDate: '2024-07-11',
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    srcDir: "src",
    manifest: {
      name: "Sune",
      theme_color: "#000000",
      icons: [
        {
          src: "icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  }
});