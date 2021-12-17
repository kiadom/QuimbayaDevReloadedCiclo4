import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";
import { ModeloAvance } from "../avance/avance.js";

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


}
,{
    toJSON: { virtuals: true }, //parte del virtual populate para avances
    toObject: {virtuals: true }, //parte del virtual populate para avances
}
);

//VirtualPopulate para traer todos los avances del proyecto:
esquemaInscripcion.virtual("avance",{
    ref:"Avance",
    localField:"_id",
    foreignField: "inscripcion"
})

// // se define el modelo:
const ModeloInscripcion = model("Inscripcion", esquemaInscripcion, "Inscripciones");

export { ModeloInscripcion } ;