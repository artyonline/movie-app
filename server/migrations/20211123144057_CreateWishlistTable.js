exports.up = function (knex) {
  return knex.schema.createTable("wishlist", (table) => {
    table.uuid("wishlistId").primary();
    table.uuid("userId").references("id").inTable("user");
    table.string("movieId");
    table.string("timestamp");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("wishlist");
};
