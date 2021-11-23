
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
      table.uuid('id').primary();
      table.string('name');
      table.string('email');
      table.string('hashedPassword');
      table.string('salt');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
