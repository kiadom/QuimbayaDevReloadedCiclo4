//Archivo para gestionar las rutas, archivo exclusivo de red
//Va a ver hacia donde quiere ir la peticion y va a llamar al componente adecuado
//Cuando el routes.js detecte que tenemos una peticion que viene hacia los mensajes, se la pasa al componente
//Routes no tendria que hacer nada porque el componente es quien debe determinar si esta bien

const producto = require('../components/productos/network')

//Responde las peticiones /registro_productos. Ruta que queremos que escuche para que genere una respuesta
const routes = function(server){
    server.use('/registro_productos', producto)
}

module.exports = routes;