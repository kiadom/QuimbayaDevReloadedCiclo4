import mongoose from "mongoose";
import { ProjectModel } from "../project/project.js";
import { ModeloUsuario } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

//definir el esquema:
const inscriptionSchema = new Schema ({
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
        ref: ProjectModel,
        reequired: true,        
    },
    estudianteInscrito: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        reequired: true,        
    },
});

// se define el modelo:
const InscriptionModel = model("Inscription", inscriptionSchema, "Inscriptions");

export { InscriptionModel } ;