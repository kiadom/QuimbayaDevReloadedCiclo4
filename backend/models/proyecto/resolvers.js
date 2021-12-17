import { ModeloProyecto } from "./proyecto.js";

const resolversProyecto = {

    Query: {

        Proyectos: async (parent, args) => {
            const proyectos = await ModeloProyecto.find().populate('lider').populate('avance').populate('inscripciones');
            return proyectos;
        },

        Proyecto: async (parent, args) => {
            const proyecto = await ModeloProyecto.findOne({_id:args._id}).populate('lider')
            .populate('avance');
            return proyecto;
        },

        Inscripciones: async (parent, args) => {
            const inscripciones = await ModeloInscripcion.find().populate('estudianteInscrito')
            .populate({path:'proyecto', populate: {path:'lider'}});
            return inscripciones;
        },

        ProyectosPorLider: async (parent, args) => {
            const proyectosPorLider = await ModeloProyecto.find({lider:args.lider}).populate('lider').populate('avance');
            return proyectosPorLider;
        },

        InscripcionesLider: async (parent, args) => {
            const inscripcionesPorLider = await ModeloProyecto.find({lider:args.lider}).populate('lider').populate('inscripciones');
            return inscripcionesPorLider;
        }
    },

    Mutation: {

        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ModeloProyecto.create({
                nombre: args.nombre,
                objetivoGeneral: args.objetivoGeneral,
                objetivoEspecifico1: args.objetivoEspecifico1,
                objetivoEspecifico2: args.objetivoEspecifico2,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider,
                estado: args.estado,
                fase: args.fase,
            });
            return proyectoCreado;
        },

        editarProyecto: async (parent, args) => {
            const proyectoEditado = await ModeloProyecto.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                objetivoGeneral: args.objetivoGeneral,
                objetivoEspecifico1: args.objetivoEspecifico1,
                objetivoEspecifico2: args.objetivoEspecifico2,
                presupuesto: args.presupuesto,
                estado: args.estado,
                fase: args.fase,
            }, { new: true });
            return proyectoEditado;
        },
    },
};

export { resolversProyecto };