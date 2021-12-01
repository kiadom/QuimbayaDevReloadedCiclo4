import mongoose from 'mongoose';

const { Schema, model} = mongoose;

//definir el esquema:
const esquemaUsuario = 
    new Schema(
        {
            correo:{
                type: String,
                required: true,
                unique: true,
                validate: {
                    validator: (email) => {
                        // Expresion regular, valida el correo electrónico
                        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                    },
                    message: 'El formato del correo electronico no es el correcto.'
                },
            },
            identificacion:{
                type: String,
                required: true,
                unique: true,
            },
            nombre:{
                type: String,
                required: true,
            },
            apellido:{
                type: String,
                required: true,
            },
            contrasena:{
                type: String,
                required: true,
                unique: true,
            },
            rol:{
                type: String,
                required: true,
                enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
            },
            estado:{
                type: String,
                enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
                default: "PENDIENTE",
            },
        },
        {
            toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
            toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
        }
    );

    esquemaUsuario.virtual('proyectos',{
        ref: 'Proyecto',
        localField:'_id',
        foreignField:'lider',
    });

    esquemaUsuario.virtual('avances',{
        ref: 'Avance',
        localField:'_id',
        foreignField:'creadoPor',
    });

   esquemaUsuario.virtual('inscripciones',{
        ref: 'Inscripcion',
        localField:'_id',
        foreignField:'estudianteInscrito',
    });

// se define el modelo:
const ModeloUsuario = model("Usuario", esquemaUsuario, "Usuarios");

export { ModeloUsuario } ;