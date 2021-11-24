// import { gql } from 'apollo-server-express';

// const tiposInscripcion = gql`

// type Inscripcion{
//     _id: ID!
//     fecha_ingreso: Date!
//     fecha_egreso: Date!
//     estado: Enum_EstadoInscripcion!
//     proyecto: Proyecto!
//     estudianteInscrito: Usuario!
// }

// type Query{
//     Inscripciones: [Inscripcion] 

// }

// type Mutation{
//     crearInscripcion(
//     fecha_ingreso: Date!
//     estado: Enum_EstadoInscripcion!
//     proyecto: String!
//     estudianteInscrito: String!
//     ): Inscripcion

//     aprobarInscripcion(id: String!): Inscripcion
// }

// `;

// export {tiposInscripcion};