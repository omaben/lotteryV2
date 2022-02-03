module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    proxy: {
      "/": {
        target: "http://184.168.122.58:9501",
        secure: true,
        changeOrigin: true
      }
    }
  }
}