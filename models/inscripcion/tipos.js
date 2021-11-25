import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`

type Inscripcion{
    _id: ID!
    fecha_ingreso: Date
    fecha_egreso: Date
    estadoInscripcion: Enum_EstadoInscripcion!
    proyecto: Proyecto!
    estudianteInscrito: Usuario!
}

type Query{
    Inscripciones: [Inscripcion] 

    Inscripcion(
            _id: String!
        ): Inscripcion

}

type Mutation{
    crearInscripcion(
    fecha_ingreso: Date!
    estadoInscripcion: Enum_EstadoInscripcion!
    proyecto: String!
    estudianteInscrito: String!
    ): Inscripcion

    aprobarInscripcion(id: String!): Inscripcion

    rechazarInscripcion(id: String!): Inscripcion
}

`;

export {tiposInscripcion};