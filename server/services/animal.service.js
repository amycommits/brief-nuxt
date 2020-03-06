const Animal = require('../models/animal.model')

exports.list = function() {
  return {data: 'it got here'}
}

exports.listAll = function() {
  return Animal.query().then(animals => {
    console.log('inside the listAll')
    console.log(animals)
    console.log('#####################################')
    return animals
  })
}