import { ModeloAvance } from "./avance.js";

const resolversAvance = {

    Query: {
        Avance: async (parent, args) => {
          const avance = await ModeloAvance.find().populate('proyecto')
          .populate('lider')
         ;
          return avance;
        },

        DetalleAvance: async (parent, args) => {
          const detalleAvance = await ModeloAvance.findOne({_id:args._id})
          .populate('proyecto')  
          ;
          return detalleAvance;
        },

        AvancesPorProyecto: async (parent, args) => {
          const avancesPorProyecto = await ModeloAvance.find({proyecto:args.proyecto})
          .populate('lider')
          .populate('proyecto');
          return avancesPorProyecto;
        },
        
        filtrarObservacionesLider: async (parents, args) => {
          const observacionesLiderFiltrado = await ModeloAvance.find({ proyecto: args.idProyecto })
            .populate('proyecto')
            .populate('lider')
            ;
          return observacionesLiderFiltrado;
        
      }
      },

    Mutation: {
        crearAvance: async(parent,args)=> {
            const avanceCreado = ModeloAvance.create({
                
                titulo: args.titulo,
                fechaAvance: args.fechaAvance,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
            });
            return avanceCreado;
        },

        editarAvance: async (parent, args) => {
          const avanceEditado = await ModeloAvance.findByIdAndUpdate(args._id, {
            descripcion: args.descripcion,
            observacionesLider: args.observacionesLider,
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