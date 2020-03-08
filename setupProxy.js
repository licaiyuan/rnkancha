const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', createProxyMiddleware({ target: 'http://ops.xmrtc.com/api', changeOrigin: true })
    )
}