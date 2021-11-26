import { gql } from 'apollo-server-express';

const tiposAvance = gql`

  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    proyecto: Proyecto!
    creadoPor: Usuario!
    observaciones: [String]
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

    editarAvance(
        _id: String!
        descripcion: String!
    ): Proyecto

    eliminarAvance(
        _id: String
        descripcion: String!
    ): Avance
  }
`;

export {tiposAvance};

//adicionarObservacion(
//  _id: String
//  observaciones: String!
//  comentadoPor: String!
//)