import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

//definir el esquema:
const esquemaAvance = new Schema ({
    fecha: {
        type: Date,
        required: true,
    },

    titulo: {
    type: String,
        required: true,
    },

    descripcion: {
    type: String,
        required: true,
    },

    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,        
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: true,
    },
    observacionesLider: {
        type: String,
        required: false,
    },

    lider: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: false,
    },

});

// se define el modelo:
const ModeloAvance = model("Avance", esquemaAvance, "Avances");

export { ModeloAvance } ;