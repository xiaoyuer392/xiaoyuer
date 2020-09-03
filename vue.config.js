const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src/components"))
      .set("assets", path.resolve(__dirname, "./src/assets"))
      .set("views", path.resolve(__dirname, "./src/views"))
      .set("spots", path.resolve(__dirname, "./src/components/spots"))
      .set("utils", path.resolve(__dirname, "./src/utils"));
  },

  devServer: {
    proxy: {
      "/api": {
        target: "https://www.yixi.tv",
        changeOrigin: true,
      },
      "/datalist": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
      "/yanjiangdata": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
      "/zhiya": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
};