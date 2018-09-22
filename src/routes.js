const _ = require('lodash')

const CustomerService = require('./services/CustomerService')
const OrderService = require('./services/OrderService')

module.exports = {
  createRoutes
}

/**
 * Create routes for the app
 *
 * @param {Object} app The express app to create the routes for
 */
function createRoutes (app) {
  createCustomerRoutes(app)
  createOrderRoutes(app)
}

/**
 * Create the order routes
 *
 * @param {Object} app The express app to create the routes for
 */
function createCustomerRoutes (app) {
  app.get('/customer/list', (req, res) => {
    const customers = CustomerService.listCustomers()
    res.send(customers)
  })

  app.get('/customer/get', (req, res) => {
    const id = getNumberParamFromRequest(req, 'id')
    const customer = CustomerService.getCustomer(id)
    res.send(customer)
  })
}

/**
 * Create the order routes
 *
 * @param {Object} app The express app to create the routes for
 */
function createOrderRoutes (app) {
  app.get('/order/list', (req, res) => {
    const params = {
      customer: getNumberParamFromRequest(req, 'customer')
    }

    const orders = OrderService.listOrders(params)
    res.send(orders)
  })
}

/**
 * Get number param from the passed request
 *
 * @param {Object} req The request to extract the param from
 * @param {String} paramName The name of the param to extract from the request
 *
 * @return {Number} The number value that was extracted from the request
 */
function getNumberParamFromRequest (req, paramName) {
  const value = parseInt(req.query[paramName], 10)

  if (!isNaN(value) && _.isNumber(value)) {
    return value
  }
}
