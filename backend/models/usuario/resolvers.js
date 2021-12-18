import { ModeloUsuario } from "./usuario.js"
import bcrypt from 'bcrypt';

const resolversUsuario = {
    Query: {
        // Usuarios: async (parent, args) => {
        //     const usuarios = await ModeloUsuario.find().populate('proyectos').populate('avance').populate('inscripciones');
        //     return usuarios;
        // },

        Usuarios: async (parent, args, context) => {
            console.log("context", context);
            if(context.userData.rol==="ADMINISTRADOR"){
                const usuarios = await ModeloUsuario.find().populate('proyectos').populate('avance').populate('inscripciones');
                return usuarios;
            }
            else if(context.userData.rol==="LIDER"){
                const usuarios = await ModeloUsuario.find({rol:"ESTUDIANTE"});
                return usuarios;
            }
        },

        Usuario: async (parent, args) => {
            const usuario = await ModeloUsuario.findOne({
                _id: args._id
            });
            return usuario;
        },

        // query por correo para evidenciar HU2 clave encriptada
        Correo: async (parent, args) => {
            const correo = await ModeloUsuario.findOne({ correo: args.correo });
            return correo;
        },
    },

    Mutation: {
        crearUsuario: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedContrasena = await bcrypt.hashSync(args.contrasena, salt)
            const usuarioCreado = await ModeloUsuario.create({
                correo: args.correo,
                identificacion: args.identificacion,
                nombre: args.nombre,
                apellido: args.apellido,
                contrasena: hashedContrasena,
                rol: args.rol
            });
            if (Object.keys(args).includes('estado')) {
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await ModeloUsuario.findByIdAndUpdate(args._id, {
                /* correo: args.correo,
                identificacion: args.identificacion,
                nombre: args.nombre,
                apellido: args.apellido, */
                // // contrasena: args.contrasena,
                estado: args.estado
            },
                { new: true } //esto se utiliza para traer los datos nuevos al actualizar
            );
            return usuarioEditado;
        },

        editarPerfil: async (parent, args) => {
            
            const perfilEditado = await ModeloUsuario.findByIdAndUpdate(args._id,{...args.campos},{ new: true });
            return perfilEditado;
        },

        eliminarUsuario: async (paent, args) => {
            if (Object.keys(args).includes('_id')) {
                const usuarioEliminado = await ModeloUsuario.findOneAndDelete({ _id: args._id });
                return usuarioEliminado;
            } else if (Object.keys(args).includes('correo')) {
                const usuarioEliminado = await ModeloUsuario.findOneAndDelete({ correo: args.correo });
                return usuarioEliminado;
            } else if (Object.keys(args).includes('identificacion')) {
                const usuarioEliminado = await ModeloUsuario.findOneAndDelete({ identificacion: args.identificacion });
                return usuarioEliminado;
            };
        },
    },
};

export { resolversUsuario }