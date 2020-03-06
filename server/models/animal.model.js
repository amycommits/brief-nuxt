const { Model } = require('objection')

class Animal extends Model {
  static tableName = 'animals';
  static jsonSchema = {
    type: Object,
    properties: {
      id: {type: 'integer'}, 
      name: {type: 'string'}
    }
  }
}
module.exports = Animal