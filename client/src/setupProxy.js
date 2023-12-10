/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://127.0.0.1/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    }),
  )
}
