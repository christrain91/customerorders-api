const _ = require('lodash')
const orders = require('../../data/orders')

module.exports = {
  listOrders
}

/**
 * List orders
 *
 * @param {Object} options The function options
 * @param {Number} options.customer The id of the customer to filter the orders by
 *
 * @return {Object[]} The retrieved orders
 */
function listOrders ({ customer }) {
  if (customer) {
    return _.filter(orders, (order) => order.customer === customer)
  }

  return orders
}
