import { ModeloUsuario } from '../../models/usuario/usuario.js';
import bcrypt from 'bcryptjs';
import { generarToken } from '../../util/tokenUtil.js';

const resolversAutenticacion = {
  Mutation: {
    registro: async (parent, args) =>{
        const salt = await bcrypt.genSalt(10);
        const hashedContrasena= await bcrypt.hashSync(args.contrasena, salt)
        const nuevoUsuario = await ModeloUsuario.create({
            correo:args.correo,
            identificacion:args.identificacion,
            nombre:args.nombre,
            apellido:args.apellido,
            contrasena:hashedContrasena,
            rol:args.rol
      });
      if (Object.keys(args).includes('estado')){
        nuevoUsuario.estado = args.estado;
      }
      //console.log('Nuevo usuario', nuevoUsuario);
      return {
        token: generarToken({
          _id: nuevoUsuario._id,
          nombre: nuevoUsuario.nombre,
          apellido: nuevoUsuario.apellido,
          identificacion: nuevoUsuario.identificacion,
          correo: nuevoUsuario.correo,
          rol: nuevoUsuario.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const usuarioEcontrado = await ModeloUsuario.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.contrasena, usuarioEcontrado.contrasena)) {
        return {
          token: generarToken({
            _id: usuarioEcontrado._id,
            nombre: usuarioEcontrado.nombre,
            apellido: usuarioEcontrado.apellido,
            identificacion: usuarioEcontrado.identificacion,
            correo: usuarioEcontrado.correo,
            rol: usuarioEcontrado.rol,
          }),
        };
      }
    },

    refreshToken: async (parent, args, context) => {
      console.log('contexto', context);
      if (!context.userData) {
        return {
          error: 'token no valido',
        };
      } else {
        return {
          token: generarToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            correo: context.userData.correo,
            rol: context.userData.rol,
          }),
        };
      }
      // valdiar que el contexto tenga info del usuario. si si, refrescar el token
      // si no devolver null para que en el front redirija al login.
    },
  },
};

export { resolversAutenticacion };