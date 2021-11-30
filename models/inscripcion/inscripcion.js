import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

//definir el esquema:
const esquemaInscripcion = new Schema ({
    fecha_ingreso: {
        type: Date,
        required: false,
    },
    fecha_egreso: {
        type: Date,
        required: false,
    },
    estadoInscripcion: {
        type: String,
        enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE' ],
        default: 'PENDIENTE',
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        required: true,  
             
    },
    estudianteInscrito: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: ModeloUsuario,        
    },
});

// // se define el modelo:
const ModeloInscripcion = model("Inscripcion", esquemaInscripcion, "Inscripciones");

export { ModeloInscripcion } ;