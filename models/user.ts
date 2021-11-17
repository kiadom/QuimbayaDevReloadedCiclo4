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
            //Las lineas de abajo equivalen a una validacion pobre
            //de que se cumpla el formato del correo electrónico:
            //validator: (email)=>{
            //    if ( email.includes("@") && email.includes(".") ){
            //        return true;
            //    }
            //    else {
            //       return false; 
            //    }
            //},
            //message:"El formato de correo está mal",
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                // esto se llama expresion reegular, la de arriba es para correo electrónico
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
const UserModel = model("User", userSchema, "UsersRocio");

export {UserModel} ;
// tambien se puede así: export default UserModel, pero de esta forma, 
//cualquiera del grupo puede cambiar en nombre de la variable