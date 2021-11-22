import mongoose from 'mongoose';
import { UserModel } from "../user/user.js";
import { ObjectiveModel } from "../objective/objective.js";

const { Schema, model} = mongoose;

//definir el esquema:
const projectSchema = new Schema({
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
        enum: ["ACTIVO", "INACTIVO"],
        default: ["INACTIVO"],
    },
    fase:{
        type: String,
        enum: ["INICIADO", "EN_DESARROLLO", "TERMINADO"],
        default: ["NULA"],
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivo: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: ObjectiveModel,
    }]
});

// se define el modelo:
const ProjectModel = model("Proyecto", projectSchema, "Projects");

export { ProjectModel } ;