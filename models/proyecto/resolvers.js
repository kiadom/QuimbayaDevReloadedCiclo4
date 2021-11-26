import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {

    Query: {

        Proyectos: async (parent, args) => {
            //const proyectos = await ModeloProyecto.find().populate('lider').populate('objetivo');
            const proyectos = await ModeloProyecto.find().populate('lider').populate('objetivo').populate('avances');
            return proyectos;
        },

        Proyecto: async (parent, args) => {
            //const proyecto = await ModeloProyecto.findOne({_id:args._id}).populate('lider').populate('objetivo');
            const proyecto = await ModeloProyecto.findOne({_id:args._id}).populate('lider').populate('objetivo').populate('avances');
            return proyecto;
        }
    },

    Mutation: {

        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ModeloProyecto.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivo: args.objetivo,
            });
            return proyectoCreado;
        },

        editarProyecto: async (parent, args) => {
            const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivo: args.objetivo,
            }, { new: true });
            return proyectoEditado;
        },

        eliminarProyecto: async (panrent, args) => {
            if (Object.keys(args).includes("_id")){
                const proyectoEliminado = await ModeloProyecto.findOneAndDelete({ 
                    _id: args._id 
                });
                return proyectoEliminado;
            }
            
            if (Object.keys(args).includes("nombre")){
                const proyectoEliminado = await ModeloProyecto.findOneAndDelete({ 
                    nombre: args.nombre 
                });
                return proyectoEliminado;
            }
        },
    },
};

export { resolversProyecto };