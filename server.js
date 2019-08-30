// server.js
const next = require('next')
const app = next({dev: false})

const port = process.env.PORT || 3000

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(port)
})