exports.up = function(knex) {
    return knex.schema
    //CREO TABLA USERS
      .createTable('users', function (table) {
         table.string('id').primary();
         table.string('first_name', 255);
         table.string('last_name', 255);
         table.string('username', 255);
         table.string('email', 255);
         //Como es de prueba guardo la pass sin hash
         table.string('password', 255);
         table.string('avatar', 255);
         //Parametros que requiere sqlite3
         table.string('code', 255);
         table.string('iso2', 2);
         table.boolean('deleted');
         table.timestamp('createdAt');
         table.timestamp('updatedAt');
         table.timestamp('deletedAt');
         table.integer('__v');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("users")
  };
  
  exports.config = { transaction: false };