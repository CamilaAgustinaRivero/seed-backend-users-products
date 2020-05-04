exports.up = function(knex) {
    return knex.schema
    //CREO TABLA PRODUCTS
      .createTable('products', function (table) {
        table.string('id').primary();
        table.string('name', 255);
        table.string('price');
        table.string('stock');
        //Parametros que requiere sqlite3
        table.string('code');
        table.string('iso2', 2);
        table.boolean('deleted');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
        table.timestamp('deletedAt');
        table.integer('__v');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("products");
  };
  
  exports.config = { transaction: false };