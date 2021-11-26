import { ModeloAvance } from "./avance.js";

const resolversAvance = {

    Query: {
        Avances: async (parent, args) => {
          const avances = await ModeloAvance.find().populate('proyecto')
          .populate('creadoPor');
          return avances;
        },
        filtrarAvance: async (parents, args) => {
          const avanceFiltrado = await ModeloAvance.find({ proyecto: args.idProyecto })
            .populate('proyecto')
            .populate('creadoPor');
          return avanceFiltrado;
        },
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

        editarAvance: async (parent, args) => {
          const avanceEditado = await ModeloAvance.findByIdAndUpdate(args._id, {
            descripcion: args.descripcion,
            creadoPor: args.creadoPor,
          }, { new: true });
          return avanceEditado;
        },

        eliminarAvance: async (parent, args) => {
            const avanceEliminado = await ModeloAvance.findOneAndDelete({ 
              _id: args._id 
            });
            return avanceEliminado;
        },

        adicionarObservacion: async (parent, args) => {
          const observacionesRealizadas = await ModeloAvance.findByIdAndUpdate(args._id, {
            observacionesRealizadas: args.adicionarObservacion
          }, { new: true });
          return observacionesRealizadas;
        },


    }
};

export {resolversAvance};