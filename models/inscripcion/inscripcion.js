import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

//definir el esquema:
const esquemaInscripcion = new Schema ({
    fecha_ingreso: {
        type: Date,
        required: true,
    },
    fecha_egreso: {
        type: Date,
        required: true,
    },
    estadoInscripcion: {
        type: String,
        enum: ['ACEPTADA', 'RECHAZADA', 'PENDIENTE' ],
        default: 'PENDIENTE', // esto lo adioné dado que puse estado inscripc. pendiente
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ModeloProyecto,
        reequired: true,        
    },
    estudianteInscrito: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        reequired: true,        
    },
});

// // se define el modelo:
const ModeloInscripcion = model("Inscripcion", esquemaInscripcion, "Inscripciones");

export { ModeloInscripcion } ;