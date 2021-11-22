import { ProjectModel } from "./project.js";

const resolversProyecto = {

    Query: {

        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate('lider').populate('objetivo');
            return proyectos;
        },

        Proyecto: async (parent, args) => {
            const proyecto = await ProjectModel.findOne({_id:args._id}).populate('lider').populate('objetivo');
            return proyecto;
        }
    },

    Mutation: {

        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
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
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivo: args.objetivo,
            });
            return proyectoEditado;
        },

        eliminarProyecto: async (panrent, args) => {
            if (Object.keys(args).includes("_id")){
                const proyectoEliminado = await ProjectModel.findOneAndDelete({ 
                    _id: args._id 
                });
                return proyectoEliminado;
            }
            
            if (Object.keys(args).includes("nombre")){
                const proyectoEliminado = await ProjectModel.findOneAndDelete({ 
                    nombre: args.nombre 
                });
                return proyectoEliminado;
            }
        },
    },
};

export { resolversProyecto };