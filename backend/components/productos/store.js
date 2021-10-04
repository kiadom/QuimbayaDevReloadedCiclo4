//Controller comprueba que este bien todo y pasa la informacion a Store.
//Archivo encargado de gestionar las bases de datos.
//Archivo que dice donde y como se guarda la informacion

const db = require('mongoose');
const Model= require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://QuimbayaDev-admin:7QWbDsJNaJGZIskx@clusterdbquimbayadev.upwen.mongodb.net/quimbaya-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});
console.log('[db] Conectada con exito');

function addProducto(producto){
    const miProducto = new Model(producto);
    miProducto.save();
}

async function getProductos(){
    const productos = await Model.find();
    return productos;
}

module.exports = {
    add: addProducto,
    list: getProductos,
    //get
    //update
    //delete
}