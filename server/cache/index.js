const renderAndCache = require('./renderAndCache')

const cacheHandler = ({
  app,
  server,
  dev,
  handle
}) => {
  server.get('/', (req, res) => {
    return dev
      ? handle(req, res)
      : renderAndCache({
        app,
        req,
        res,
        pagePath: '/'
      })
  })
}

module.exports = cacheHandler
