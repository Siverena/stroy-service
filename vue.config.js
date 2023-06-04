// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/stroy_service/',
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/' }],
    },
  },
  // configureWebpack: {
  //   plugins: [new NodePolyfillPlugin()],
  //   resolve: {
  //     fallback: {
  //       fs: false,
  //       path: false,
  //       os: false,
  //       net: false,
  //     },
  //   },
  // },
});
