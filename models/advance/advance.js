import mongoose from "mongoose";
import { ProjectModel } from "../project/project.js";
import { UserModel } from "../user/user.js";

const { Schema, model } = mongoose;

//interface Advance {
//    fechaAvance: Date;
//    descripcion: string;
//    proyecto: Schema.Types.ObjectId; 
//    creadoPor: Schema.Types.ObjectId;
//    observaciones: [string]; //luego se eliminará
//}
// Las linesa de arriba ya no van porque ahora ya no es con Typescript
// Sino javascript

//definir el esquema:
const advanceSchema = new Schema ({
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
    observaciones: [
        {
          type: String,
        },
      ],
});

// se define el modelo:
const AdvanceModel = model("Advance", advanceSchema, "Advances");

export { AdvanceModel } ;