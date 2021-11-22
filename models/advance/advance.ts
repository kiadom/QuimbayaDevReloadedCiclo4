import { Schema, model } from "mongoose";
import { ProjectModel } from "./project";
import { UserModel } from "./user";

interface Advance {
    fechaAvance: Date;
    descripcion: string;
    proyecto: Schema.Types.ObjectId; 
    creadoPor: Schema.Types.ObjectId;
}

//definir el esquema:
const advanceSchema = new Schema <Advance>({
    fechaAvance: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,        
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

// se define el modelo:
const AdvanceModel = model("Advance", advanceSchema, "Advances");

export { AdvanceModel } ;