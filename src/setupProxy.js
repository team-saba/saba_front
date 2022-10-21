import {createProxyMiddleware} from 'http-proxy-middleware'

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
    "/api",
    {
      target: "http://react.seungwook.me/",
      changeOrigin: true,
    })
  );
};


