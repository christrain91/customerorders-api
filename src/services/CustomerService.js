const _ = require('lodash')
const customers = require('../../data/customers')

module.exports = {
  getCustomer,
  listCustomers
}

/**
 * Get customer by id
 *
 * @param {Number} id The id of the customer to get
 *
 * @return {Object} The customer that has an id that matches the id param
 */
function getCustomer (id) {
  if (!_.isNumber(id)) {
    throw new Error('No ID specified')
  }

  const customer = _.find(customers, (customer) => customer.id === id)

  if (!customer) {
    throw new Error(`Can not find customer with id: ${id}`)
  }

  return customer
}

/**
 * List customers
 *
 * @return {Object[]} The customers
 */
function listCustomers () {
  return customers
}
