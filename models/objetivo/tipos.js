import { gql } from 'apollo-server-express';

const tiposObjetivo = gql`

    type Objetivo {
        _id: ID!
        descripcion: String!
        tipo: Enum_TipoObjetivo!
    }

    type Mutation {
        
        crearObjetivo(
            descripcion: String!
            tipo: Enum_TipoObjetivo!
        ): Objetivo

        editarObjetivo(
            _id: String!
            descripcion: String!
            tipo: Enum_TipoObjetivo!
        ): Objetivo
    }
`;

export { tiposObjetivo };