
exports.up = function(knex) {
  return knex.schema.createTable('animals', function (table) {
    table.increments('id');
    table.string('name', 50);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at');
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('animals')
};
