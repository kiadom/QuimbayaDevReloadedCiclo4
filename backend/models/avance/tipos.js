import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    proyecto: Proyecto!
    creadoPor: Usuario!
    lider: Usuario
    observacionesLider: String
  }
  type Query {
    Avances: [Avance]
    filtrarAvance(idProyecto: String!): [Avance]
    filtrarObservacionesLider(idProyecto: String!): [Avance]
    AvancesPorProyecto(proyecto: String!): [Avance]
    }
    
<<<<<<< HEAD:backend/models/avance/tipos.js
=======


>>>>>>> a88278ea4064b56f0e77e8c64cb0300b8711c94a:models/avance/tipos.js
  type Mutation {
    
    crearAvance(
        fecha: Date! 
        descripcion: String!
        proyecto: String! 
        creadoPor: String!
        ): Avance
    editarAvance(
        _id: String!
        descripcion: String!
        creadoPor: String!
        ): Avance
<<<<<<< HEAD:backend/models/avance/tipos.js
    eliminarAvance(
        _id:String!
        ): Avance
=======

    eliminarAvance(
        _id:String!
        ): Avance

>>>>>>> a88278ea4064b56f0e77e8c64cb0300b8711c94a:models/avance/tipos.js
    registrarObservacion(
        _id: String!
        fechaObservaciones: Date!
        observacionesLider: String!
        lider: String!
        ): Avance
  }
`;

export {tiposAvance};