const boom = require('@hapi/boom');
const db = require('./db.service');

class TaqueriasService {

constructor() {
  this.generate();
}

generate() {
}

async create(data) {
  console.log(data);
  const result= await db.query(
    `INSERT INTO tacolizador.taqueria (nombre, calidad, precio, comentario, latitud, longitud, pagina_fb) VALUES
    ( '${data.nombre}',
       ${data.calidad},
        ${data.precio},
        ' ${data.comentario}',
        ${data.latitud},
        ${data.longitud},
        '${data.pagina_fb}')`
  );
  return result;
}

async find() {
  const result = await db.query( `SELECT * FROM taqueria`);
  return [result];
}

async findOne(id) {
  const result = await db.query(`SELECT * FROM taqueria WHERE idtaqueria=${id}`);
  return result;
}

async update(id, changes) {
  const result = await db.query( `UPDATE tacolizador.taqueria SET nombre='${changes.nombre}',calidad=${changes.calidad},precio =${changes.precio},comentario=' ${changes.comentario}',latitud=${changes.latitud},longitud=${changes.longitud},pagina_fb='${changes.pagina_fb}' WHERE idtaqueria = ${id}`);
}

async delete(id) {
  const result = await db.query(`DELETE FROM taqueria WHERE idtaqueria=${id}`);
}

}

module.exports = TaqueriasService;
