import { connect } from 'mongoose';

const conectarBD = async() => {

    return await connect (
        process.env.DATABASE_URL)
    .then(()=> {
        console.log("Conexion Exitosa");
    })
    .catch((e) => {
        console.error("Error en la conexion a la bd", e);
    });
};

export { conectarBD };