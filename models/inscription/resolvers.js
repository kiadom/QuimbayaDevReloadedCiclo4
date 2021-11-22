import { InscriptionModel } from "./inscription.js";

const resolversInscripcion = {
    Query:{
        Inscripciones: 

        async (parent, args) =>{
            const inscripciones = await InscriptionModel.find();

        return inscripciones;
        },

    },

    Mutation:{
        crearInscripcion: async(parent, args) =>{
            const inscripcionCreada = await InscriptionModel.create({
                fecha_ingreso: args.fecha_ingreso,
                estado: args.estado,
                proyecto: args.proyecto,
                estudianteInscrito: args.estudianteInscrito,
            })
            return inscripcionCreada;
        }
    }
};

export {resolversInscripcion};