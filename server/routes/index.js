const express = require('express')
const Knex = require('knex');
const knexConfig = require('../../knexfile');
const { Model } = require('objection');

const app = express()
const Animal = require('../services/animal.service')
console.log(`process node env IS ${process.env.NODE_ENV}`)
console.log(`process.env.NODE_ENV !== 'production'`)
let knex = {}
if (process.env.NODE_ENV !== 'production') {
  knex = Knex(knexConfig.development);
} else {
  knex = Knex(knexConfig.production)
}
console.log(knex)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
Model.knex(knex);

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