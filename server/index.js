const express = require("express")
const consola = require("consola")
const Knex = require('knex');
const knexConfig = require('../knexfile');
const { Model } = require('objection');

const { Nuxt, Builder } = require("nuxt")
const internalRoutes = require('./routes')
const app = express()

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js")
config.dev = process.env.NODE_ENV !== "production"

const knex = Knex(knexConfig.development);
Model.knex(knex);

async function start() {
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
  app.use('/api', internalRoutes)
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
