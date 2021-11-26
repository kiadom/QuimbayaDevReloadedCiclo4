import { gql } from 'apollo-server-express';

const tiposAvance = gql`

  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    proyecto: Proyecto!
    creadoPor: Usuario!
    comentadoPor: Usuario
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
        creadoPor: String!
    ): Avance

    eliminarAvance(
        _id:String!
    ): Avance


    adicionarObservacion(
        _id: String
        observaciones: String!
        comentadoPor: String!
    ): Avance

  }
`;

export {tiposAvance};

