import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums";
import { ProjectModel } from "./project";

interface Objective {
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    proyecto: Schema.Types.ObjectId; //si la relación se hace en el One no va esta linea)
}

//definir el esquema:
const objectivesSchema = new Schema <Objective>({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String, 
        enum: Enum_TipoObjetivo,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,        
    },
});

// se define el modelo:
const ObjectiveModel = model("Objective", objectivesSchema, "Objectives");

export { ObjectiveModel } ;