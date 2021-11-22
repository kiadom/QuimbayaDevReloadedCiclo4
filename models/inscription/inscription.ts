import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from "./enums";
import { ProjectModel } from "./project";
import { UserModel } from "./user";

interface Inscription {
    fecha_ingreso: Date;
    fecha_engreso: Date;
    estadoInscripcion: Enum_EstadoInscripcion;
    proyecto: Schema.Types.ObjectId;
    estudianteInscrito: Schema.Types.ObjectId;
}

//definir el esquema:
const inscriptionSchema = new Schema <Inscription>({
    fecha_ingreso: {
        type: Date,
        required: true,
    },
    fecha_engreso: {
        type: Date,
        required: true,
    },
    estadoInscripcion: {
        type: String,
        enum: Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.pendiente // esto lo adioné dado que puse estado inscripc. pendiente
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        reequired: true,        
    },
    estudianteInscrito: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        reequired: true,        
    },
});

// se define el modelo:
const InscriptionModel = model("Inscription", inscriptionSchema, "Inscriptions");

export { InscriptionModel } ;