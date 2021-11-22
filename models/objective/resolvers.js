import { ObjectiveModel } from "./objective.js";

const resolversObjetivo = {

    Query: {

        Objetivos: async (parent, args) => {
            const objetivos = await ObjectiveModel.find();
            return objetivos;
        },

        Objetivo: async (parent, args) => {
            const objetivo = await ObjectiveModel.findOne({_id:args._id});
            return objetivo;
        }
    },

    Mutation: {

        crearObjetivo: async (parent, args) => {
            const objetivoCreado = await ObjectiveModel.create({
                descripcion: args.descripcion,
                tipo: args.tipo,
            });
            return objetivoCreado;
        },

        editarObjetivo: async (parent, args) => {
            const objetivoEditado = await ObjectiveModel.findByIdAndUpdate(args._id, {
                descripcion: args.descripcion,
                tipo: args.tipo,
            });
            return objetivoEditado;
        },

        eliminarObjetivo: async (panrent, args) => {
            const objetivoEliminado = await ObjectiveModel.findOneAndDelete({ 
                _id: args._id 
            });
            return objetivoEliminado;
        },
    }
};

export { resolversObjetivo };