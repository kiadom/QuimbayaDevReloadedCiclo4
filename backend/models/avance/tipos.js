import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!

    titulo: String!
    descripcion: String!
    proyecto: Proyecto!
    fechaAvance: Date
    lider: Usuario
    observacionesLider: String
  }
  type Query {
    
    Avance: [Avance]

    DetalleAvance(
      _id: String!
    ): Avance

    AvancesPorProyecto(
      proyecto: String!
    ): [Avance]

    filtrarObservacionesLider(
      idProyecto: String!
    ): [Avance]
    }
    
  type Mutation {
    
    crearAvance(
        fechaAvance: Date
        titulo: String!
        descripcion: String!
        proyecto: String!
        ): Avance

    editarAvance(
        _id: String
        descripcion: String
        observacionesLider: String
        ): Avance

    eliminarAvance(
        _id:String!
        ): Avance

    registrarObservacion(
        _id: String!
        fechaObservaciones: Date!
        observacionesLider: String!
        lider: String!
        ): Avance
  }
`;

export {tiposAvance};