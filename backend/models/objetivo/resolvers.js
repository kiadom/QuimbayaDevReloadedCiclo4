import { ModeloObjetivo } from "./objetivo.js";

const resolversObjetivo = {

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
    }
};

export { resolversObjetivo };
