import { gql } from 'apollo-server-express';

const tiposUsuario = gql`

    type Usuario {
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        apellido: String!
        rol: Enum_Rol
        estado: Enum_EstadoUsuario
        proyectos:[Proyecto]
        avances:[Avance]
        inscripciones:[Inscripcion]
    }

    # query por correo para evidenciar HU2 clave encriptada
    type Correo{
        _id: ID!
        nombre:String!
        correo: String!
        estado: Enum_EstadoUsuario
    }

    type Query {
        Usuarios: [Usuario]
        Usuario(_id:String!): Usuario
        Correo(correo:String!):Correo
    }

    type Mutation {
        crearUsuario(
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario
        ):Usuario

        editarUsuario(
            _id: String!
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            estado: Enum_EstadoUsuario!
        ): Usuario

        eliminarUsuario(
            _id:String
            correo:String
            identificacion:String
        ):Usuario
    }
`;

export { tiposUsuario };