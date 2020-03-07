var express = require('express')
var app = express()
const Animal = require('../services/animal.service')

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Connected to the index of the routes folder!' });
});
app.get('/animals', (req, res) => {
  console.log('inside the animal routes')
  Animal.listAll().then(result => {
    console.log('made it to the inner animal')
    console.log('result')
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    res.status(200).json({data: result})
  })  
  
})
module.exports = {
  path: '/api',
  handler: app
}