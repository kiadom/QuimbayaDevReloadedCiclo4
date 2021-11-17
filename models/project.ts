import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto } from "./enums";
import { ObjectiveModel } from "./objective";
import { UserModel } from "./user";

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider: Schema.Types.ObjectId;
    //objetivos: [Schema.Types.ObjectId]; (ESta linea no va xq La relación se hizo en el One)
    //documento_lider: ;
    //inscripciones: ;
    //avances: ;
}


//definir el esquema:
const projectSchema = new Schema <Proyecto>({
    
    nombre: {
        type: String,
        required: true,
        unique: true,
    },

    presupuesto: {
        type: Number,
        required: true,
    },

    fechaInicio: {
        type: Date,
        required: true,
    },

    fechaFin:{
        type: Date,
        required: true,
    },

    estado:{
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.inactivo,
    },
    
    fase:{
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.nulo,
    },

    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },

    //Este objetivos no va xq la relación se hizo en el Many(objetivos)
    //objetivos: [
    //    {
    //        type: Schema.Types.ObjectId,
    //        ref: ObjectiveModel,
    //    },
    //],
});

// se define el modelo:
const ProjectModel = model("Proyecto", projectSchema, "ProjectsRocio");

export {ProjectModel} ;