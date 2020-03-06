const routes = require('express').Router();
const Animal = require('../services/animal.service')

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});
routes.get('/animals', (req, res) => {
  console.log('inside the animal routes')
  Animal.listAll().then(result => {
    res.status(200).json({data: result})
  })  
  
})
module.exports = routes;