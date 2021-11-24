import { ModeloObjetivo } from "./objetivo.js";

const resolversObjetivo = {

    Query: {

        Objetivos: async (parent, args) => {
            const objetivos = await ModeloObjetivo.find();
            return objetivos;
        },

        Objetivo: async (parent, args) => {
            const objetivo = await ModeloObjetivo.findOne({_id:args._id});
            return objetivo;
        }
    },

    Mutation: {

        crearObjetivo: async (parent, args) => {
            const objetivoCreado = await ModeloObjetivo.create({
                descripcion: args.descripcion,
                tipo: args.tipo,
            });
            return objetivoCreado;
        },

        editarObjetivo: async (parent, args) => {
            const objetivoEditado = await ModeloObjetivo.findByIdAndUpdate(args._id, {
                descripcion: args.descripcion,
                tipo: args.tipo,
            }, { new: true });
            return objetivoEditado;
        },

        eliminarObjetivo: async (panrent, args) => {
            const objetivoEliminado = await ModeloObjetivo.findOneAndDelete({ 
                _id: args._id 
            });
            return objetivoEliminado;
        },
    }
};

export { resolversObjetivo };