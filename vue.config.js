const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      
      // sass: {
      //   prependData: '@import "@/assets/styles/style.scss";'
      // }

      sass: {
        additionalData: '@import "@/assets/styles/style.scss";'
      },

      // sass: {
      //   additionalData: `@import "~@/variables.sass"`
      // },

      // scss: {
      //   additionalData: `@import "~@/variables.scss";`
      // },

    }
  }
})
