const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const cacheHandler = require('./cache')

app.prepare()
.then(() => {
  const server = express()

  cacheHandler({
    app,
    server,
    dev,
    handle
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
