import { UserModel } from "../../models/user"

const reesolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const Usuarios = await UserModel.find();
            return Usuarios;
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            console.log("estoy ejecuntando la mutación de creación de usuario")
        },
    },
};

export {reesolvers};