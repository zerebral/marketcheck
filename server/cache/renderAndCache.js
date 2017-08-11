const ssrCache = require('./ssrCache')
const getCacheKey = require('./getCacheKey')

const renderAndCache = ({
  app,
  req,
  res,
  pagePath,
  queryParams
}) => {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

module.exports = renderAndCache
