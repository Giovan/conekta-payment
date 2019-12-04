const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
var bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

var asyncFunctions = require('./asyncFunctions.js')

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Add POST - /api/payment
  app.post('/api/payment', async (req, res) => {
    if (typeof req.body !== 'undefined' && req.body !== null) {
      let data = JSON.stringify({
        card_token: req.body.card_token
      })
      // Do async job
      try {
        let userResponse = await asyncFuncs.data.userPayment(data)
        if (typeof userResponse !== 'undefined') {
          res.status(201).json({
            data: {
              "user_created" : userResponse
            }
          })
        } else {
          res.status(401).json({ message: 'Error in user register' })
        }
      } catch (e) {
        this.formError = e.message
      }
    }
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
