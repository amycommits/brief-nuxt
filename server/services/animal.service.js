const Animal = require('../models/animal.model')
export default {
  list: () => {
    return {data: 'it got here'}
  },
  listAll: () => {
    return Animal.query()
  }
}