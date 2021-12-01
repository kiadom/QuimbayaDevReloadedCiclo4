import { ModeloInscripcion } from "./inscripcion.js";

const resolversInscripcion = {

    Query:{

        Inscripciones: async (parent, args) => {
            const inscripciones = await ModeloInscripcion.find().populate('estudianteInscrito').populate('proyecto');
            return inscripciones;
        },

        Inscripcion: async (parent, args) => {
            const inscripcion = await ModeloInscripcion.findOne({_id:args._id}).populate('estudianteInscrito').populate('proyecto');
            return inscripcion;
        },

        InscripcionPorEstudiante: async (parent, args) => {
            const inscripcionPorEstudiante = await ModeloInscripcion.find({estudianteInscrito:args.estudianteInscrito}).populate('proyecto');
            return inscripcionPorEstudiante;
        }

    },

    Mutation:{
        crearInscripcion: async(parent, args) =>{
            const inscripcionCreada = await ModeloInscripcion.create({
                
                estadoInscripcion: args.estadoInscripcion,
                proyecto: args.proyecto,
                estudianteInscrito: args.estudianteInscrito,
            })
            return inscripcionCreada;
        },

        aprobarInscripcion: async(parent, args) =>{
            const inscripcionAprobada = await ModeloInscripcion.findByIdAndUpdate(args.id, {
                estadoInscripcion: "ACEPTADA",
                fecha_ingreso: Date.now(),
            },
            {new: true});
            return inscripcionAprobada;
        },
        rechazarInscripcion: async(parent, args) =>{
            const inscripcionRechazada = await ModeloInscripcion.findByIdAndUpdate(args.id, {
                estadoInscripcion: "RECHAZADA",
                fecha_ingreso: Date.now(),
                fecha_egreso: Date.now(),
            },
            {new: true});
            return inscripcionRechazada;
        }
    }
};

export {resolversInscripcion};