import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";
import { ModeloInscripcion } from "../inscripcion/inscripcion.js";

const { Schema, model } = mongoose;


const esquemaAvance = new Schema ({
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
    
    observacionesLider: {
        type: String,
        required: false,
    },
    
    fechaAvance: {
        type: Date,
        required: false,
    },

    lider: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: false,
    },


});

// se define el modelo:
const ModeloAvance = model("Avance", esquemaAvance, "Avance");

export { ModeloAvance } ;