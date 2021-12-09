import { ModeloUsuario } from "./usuario.js"

const resolversUsuario = {
    Query:{
        Usuarios: async (parent, args) => {
            const usuarios = await ModeloUsuario.find().populate('proyectos').populate('avances').populate('inscripciones');
            return usuarios;
        },

        Usuario: async (parent, args) => {
            const usuario = await ModeloUsuario.findOne({
                _id: args._id
            });
            return usuario;
        },

        // query por correo para evidenciar HU2 clave encriptada
        Correo: async (parent, args)=>{
            const correo = await ModeloUsuario.findOne({correo:args.correo});
            return correo;
        },
    },

    Mutation:{
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await ModeloUsuario.create({
                correo:args.correo,
                identificacion:args.identificacion,
                nombre:args.nombre,
                apellido:args.apellido,
                contrasena: args.contrasena,
                rol:args.rol
            });            
            if (Object.keys(args).includes('estado')){
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await ModeloUsuario.findByIdAndUpdate(args._id,{
                correo:args.correo,
                identificacion:args.identificacion,
                nombre:args.nombre,
                apellido:args.apellido,
                // contrasena: args.contrasena,
                estado: args.estado
            },
                {new:true} //esto se utiliza para traer los datos nuevos al actualizar
            );
            return usuarioEditado;
        },

        eliminarUsuario: async (paent, args) => {
            if(Object.keys(args).includes('_id')){
                const usuarioEliminado = await ModeloUsuario.findOneAndDelete({_id:args._id});
                return usuarioEliminado;
            }else if(Object.keys(args).includes('correo')){
                const usuarioEliminado = await ModeloUsuario.findOneAndDelete({correo:args.correo});
                return usuarioEliminado;
            }else if(Object.keys(args).includes('identificacion')){
                const usuarioEliminado = await ModeloUsuario.findOneAndDelete({identificacion:args.identificacion});
                return usuarioEliminado;
            };
        },
    },
};

export {resolversUsuario}