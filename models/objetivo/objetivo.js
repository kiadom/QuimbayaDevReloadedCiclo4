import mongoose from 'mongoose';

const { Schema, model} = mongoose;

//definir el esquema:
const esquemaObjetivo = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String, 
        enum: ["GENERAL", "ESPECIFICO"],
        required: true,
    },
});

// se define el modelo:
const ModeloObjetivo = model("Objetivo", esquemaObjetivo, "Objetivos");

export { ModeloObjetivo } ;
