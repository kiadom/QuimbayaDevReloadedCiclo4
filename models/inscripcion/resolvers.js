import { ModeloInscripcion } from "./inscripcion.js";

const resolversInscripcion = {

    Query:{

        
        Inscripciones: 

        async (parent, args) =>{
            const inscripciones = await ModeloInscripcion.find();

        return inscripciones;
        },

    },

    Mutation:{
        crearInscripcion: async(parent, args) =>{
            const inscripcionCreada = await ModeloInscripcion.create({
                fecha_ingreso: args.fecha_ingreso,
                estado: args.estado,
                proyecto: args.proyecto,
                estudianteInscrito: args.estudianteInscrito,
            })
            return inscripcionCreada;
        },

        aprobarInscripcion: async(parent, args) =>{
            const inscripcionAprobada = await ModeloInscripcion.findByIdAndUpdate(args.id, {
                estado: "Aprobado",
                fecha_ingreso: Date.now(),
            },
            {new: true});
            return inscripcionAprobada;
        }
    }
};

export {resolversInscripcion};