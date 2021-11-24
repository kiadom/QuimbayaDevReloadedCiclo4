// import { InscriptionModel } from "./inscription.js";

// const resolversInscripcion = {

//     Query:{

        
//         Inscripciones: 

//         async (parent, args) =>{
//             const inscripciones = await InscriptionModel.find();

//         return inscripciones;
//         },

//     },

//     Mutation:{
//         crearInscripcion: async(parent, args) =>{
//             const inscripcionCreada = await InscriptionModel.create({
//                 fecha_ingreso: args.fecha_ingreso,
//                 estado: args.estado,
//                 proyecto: args.proyecto,
//                 estudianteInscrito: args.estudianteInscrito,
//             })
//             return inscripcionCreada;
//         },

//         aprobarInscripcion: async(parent, args) =>{
//             const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id, {
//                 estado: "Aprobado",
//                 fecha_ingreso: Date.now(),
//             })
//             return inscripcionAprobada;
//         }
//     }
// };

// export {resolversInscripcion};