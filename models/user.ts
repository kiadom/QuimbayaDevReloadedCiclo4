import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_EstadoUsuario } from "./enums";

interface User {
    correo:string;
    identificacion:string;
    nombre:string;
    apellido:string;
    rol: Enum_Rol;
    estado: Enum_EstadoUsuario;
}

//definir el esquema:
const userSchema = new Schema<User>({
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
        enum: Enum_Rol,
    },
    estado:{
        type: String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.pendiente
    },
});

// se define el modelo:
const UserModel = model("User", userSchema, "Users");

export { UserModel } ;