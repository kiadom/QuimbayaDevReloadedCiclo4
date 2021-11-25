import { ModeloAvance } from "./avance.js";

const resolversAvance = {

    Query: {
        Advances: async(parent,args)=>{
            const advances = await ModeloAvance.find()
            .populate('proyecto')
            .populate('creadoPor');
            return advances;
        },
        filtrarAvance: async(parent,args)=> {
            const avanceFiltrado = await ModeloAvance.find({proyecto: args.idProyecto})
            .populate('proyecto')
            .populate('creadoPor');
            return avanceFiltrado
        }
    },

    Mutation: {
        crearAvance: async(parent,args)=> {
            const avanceCreado = ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
                
            });
            return avanceCreado;
        },
    },
};

export { resolversAvance };