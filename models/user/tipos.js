import { gql } from 'apollo-server-express';

const tiposUsuario = gql`

    type Usuario {
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        apellido: String!
    }
`;

export { tiposUsuario };