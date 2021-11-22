import mongoose from 'mongoose';

const { Schema, model} = mongoose;

//definir el esquema:
const userSchema = new Schema({
    correo:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                // Expresion regular, valida el correo electrónico
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: 'El formato del correo está mal.',
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
});

// se define el modelo:
const UserModel = model("User", userSchema, "Users");

export { UserModel } ;