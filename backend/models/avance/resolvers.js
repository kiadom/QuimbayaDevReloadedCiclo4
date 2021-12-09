import { ModeloAvance } from "./avance.js";

const resolversAvance = {

    Query: {
        Avances: async (parent, args) => {
          const avances = await ModeloAvance.find().populate('proyecto')
          .populate('lider')
          .populate('creadoPor');
          return avances;
        },

        DetalleAvances: async (parent, args) => {
          const detalleAvances = await ModeloAvance.findOne({_id:args._id})
          .populate('proyecto')  
          .populate('creadoPor');
          return detalleAvances;
        },

        AvancesPorProyecto: async (parent, args) => {
          const avancesPorProyecto = await ModeloAvance.find({proyecto:args.proyecto})
          .populate('lider')
          .populate('creadoPor')
          .populate('proyecto');
          return avancesPorProyecto;
        },
        
        filtrarObservacionesLider: async (parents, args) => {
          const observacionesLiderFiltrado = await ModeloAvance.find({ proyecto: args.idProyecto })
            .populate('proyecto')
            .populate('lider')
            .populate('creadoPor');
          return observacionesLiderFiltrado;
        
      }
      },

    Mutation: {
        crearAvance: async(parent,args)=> {
            const avanceCreado = ModeloAvance.create({
                fecha: args.fecha,
                titulo: args.titulo,
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

        registrarObservacion: async (parent, args) => {
          const observacionesLider = await ModeloAvance.findByIdAndUpdate(args._id, {
            fechaObservaciones: args.fechaObservaciones,
            observacionesLider: args.observacionesLider,
            lider: args.lider,
          }, { new: true });
          return observacionesLider;
        },


    }
};

export {resolversAvance};