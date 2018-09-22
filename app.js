const express = require('express')
const routes = require('./src/routes')
const logger = require('./src/util/logger')
const _ = require('lodash')

const app = express()

routes.createRoutes(app)

const port = 8085
app.listen(port, () => {
  logger.info(`App listening on port: ${port}`)

  logger.info('Registered routes: ', getRegisteredRoutes(app))
})

function getRegisteredRoutes (app) {
  return _.compact(_.map(app._router.stack, (r) => {
    if (r.route && r.route.path) {
      return r.route.path
    }
  }))
}
