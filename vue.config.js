const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

const name = "移动端h5模板";


module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/common/css/common.less")],
    },
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,

  devServer: {
    port: 3001,
    open: false,
    https: false,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:8311/',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': '/',
    //     },
    //   },
    // },
  },

  css: {
    sourceMap: true, // 开启 CSS source maps
  },

  configureWebpack: (config) => {
    Object.assign(config, {
      name,
      resolve: {
        alias: {
          "@": resolve("src"),
          Api: resolve("src/api/"),
          Components: resolve("src/components/"),
          Utils: resolve("src/utils/"),
          Views: resolve("src/views/"),
        },
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      },
    });
  },
};
