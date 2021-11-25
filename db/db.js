import mongoose from 'mongoose';

const conectarBD = async() => {

<<<<<<< HEAD:db/db.ts
    return await connect (
        process.env.DATABASE_URL)
=======
    return await mongoose.
    connect (process.env.DATABASE_URL)
>>>>>>> development:db/db.js
    .then(()=> {
        console.log("Conexion Exitosa");
    })
    .catch((e) => {
        console.error("Error en la conexion a la bd", e);
    });
};

export { conectarBD };