import { Schema, model } from "mongoose";
import { AdvanceModel } from "./advance";
import { UserModel } from "./user";

interface Observation {
    fechaObservacion: Date;
    observacionesLider: string;
    avance: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}

//definir el esquema:
const observationSchema = new Schema <Observation>({
    fechaObservacion: {
        type: Date,
        required: true,
    },
    observacionesLider: {
        type: String,
        required: true,
    },
    avance: {
        type: Schema.Types.ObjectId,
        ref: AdvanceModel,
        required: true
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
})

// se define el modelo:
const ObservationModel = model("Observation", observationSchema, "Observations");

export { ObservationModel } ;