const LRUCache = require('lru-cache')
// Setup cache
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1 hour
})

module.exports = ssrCache
