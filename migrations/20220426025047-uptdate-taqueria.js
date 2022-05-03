'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db,callback) {
  //AQUI SE AGREGA LA COLUMNA pagina_fb
   db.addColumn('taqueria', 'pagina_fb', {
   type: 'string',
   length: 250
   }, function(err) {
   if (err) return callback(err);
   return callback();
   });
  };

  exports.down = function(db,callback) {
  //EN CASO DE QUERER REGRESAR ESTE METODO BORRA LA COLUMNA
   db.removeColumn('taqueria', 'pagina_fb', function(err) {
   if (err) return callback(err);
   return callback();
   });
  };

exports._meta = {
  "version": 1
};
