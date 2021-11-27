import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {

    Query: {

        Proyectos: async (parent, args) => {
            const proyectos = await ModeloProyecto.find().populate('lider').populate('objetivo').populate('avances');
            return proyectos;
        },

        ProyectosPorLider: async (parent, args) => {
            const proyectosPorLider = await ModeloProyecto.find({lider:args.lider}).populate('objetivo').populate('avances');
            return proyectosPorLider;
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
                objetivo: args.objetivo,
            }, { new: true });
            return proyectoEditado;
        },
        
    },
};

export { resolversProyecto };