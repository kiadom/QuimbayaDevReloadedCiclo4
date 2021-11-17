import {connect} from 'mongoose';
// const {connect } = require('mongoose'); -> Forma vieja de conectarse

const conectarBD = async() => {
    return await connect (
        //"mongodb+srv://AdminRocioPacheco:RocioPacheco@bdgestionproyectosu.xa13k.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
        "mongodb+srv://AdminRocioPacheco:RocioPacheco@proyectociclo4.cq67b.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
        
    )
    .then(()=> {
        console.log("Conexion Exitosa");
    })
    .catch((e) => {
        console.error("Error en la conexion a la bd",e);
    });
};

export default conectarBD;
