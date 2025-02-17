const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  transpileDependencies: true,
  lintOnSave: false,

  chainWebpack: (config) => {
    config.module
      .rule('ts')
      .use('babel-loader')
      .loader('babel-loader')
      .tap((options) => {
        return {
          ...options,
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }]
          ]
        };
      });
  },

  pluginOptions: {
    vuetify: {},
  },
});
