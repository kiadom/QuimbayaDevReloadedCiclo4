import { gql } from 'apollo-server-express';

const tiposProyecto = gql`

    type Proyecto {
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: Usuario!
        objetivo: [Objetivo]!
    }

    type Query {
        
        Proyectos: [Proyecto]
        
        Proyecto(
            _id: String!
        ): Proyecto
    }

    type Mutation {
        
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            lider: String!
            objetivo: [String]!
        ): Proyecto

        editarProyecto(
            _id: String!
            nombre: String!
            presupuesto: Float!
            estado: Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            objetivo: String!
        ): Proyecto

        eliminarProyecto(
            _id: String
            nombre: String
        ): Proyecto
    }
`;

export { tiposProyecto };