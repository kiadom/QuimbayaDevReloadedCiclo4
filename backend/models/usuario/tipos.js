import { gql } from 'apollo-server-express';

const tiposUsuario = gql`

    type Usuario {
        _id: ID!
        identificacion: String!
        nombre: String!
        apellido: String!
        correo: String!
        rol: Enum_Rol
        estado: Enum_EstadoUsuario
        proyectos:[Proyecto]
        avances:[Avance]
        inscripciones:[Inscripcion]
    }

    type Query {
        Usuarios: [Usuario]
        Usuario(_id:String!): Usuario
    }

    type Mutation {
        crearUsuario(
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            contrasena: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario
        ):Usuario

        editarUsuario(
            _id: String
            identificacion: String
            nombre: String
            apellido: String
            correo: String
            estado: Enum_EstadoUsuario
        ): Usuario

        eliminarUsuario(
            _id:String
            correo:String
            identificacion:String
        ):Usuario
    }
`;

export { tiposUsuario };