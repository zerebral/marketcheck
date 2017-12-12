const express = require('express')
const next = require('next')
const routes = require('./routes')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use(cors()).use(handler).listen(PORT)
  console.log(`> Ready on http://localhost:${PORT}`)
})
