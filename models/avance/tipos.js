import { gql } from 'apollo-server-express';

const tiposAvance = gql`

  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    proyecto: Proyecto!
    observaciones: [String]
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    filtrarAvance(idProyecto: String!): [Avance]
    }

  type Mutation {
    crearAvance(
        fecha: Date! 
        descripcion: String!
        proyecto: String!, 
        creadoPor: String!
        ): Avance
  }
`;

export { tiposAvance };