import mongoose from "mongoose";
import { ModeloProyecto } from "../proyecto/proyecto.js";
import { ModeloUsuario } from "../usuario/usuario.js";

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
const esquemaAvance = new Schema ({
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
        ref: ModeloProyecto,
        required: true,        
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: ModeloUsuario,
        required: true,
    },
    observaciones: [
        {
          type: String,
        },
      ],
});

// se define el modelo:
const ModeloAvance = model("Avance", esquemaAvance, "Avances");

export { ModeloAvance } ;