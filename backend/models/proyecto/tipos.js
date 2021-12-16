import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
type Proyecto {
        _id: ID!
        nombre: String!
        objetivoGeneral: String!
        objetivoEspecifico1: String!
        objetivoEspecifico2: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        lider: Usuario!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        avance: [Avance] 
        inscripciones: [Inscripcion] 
    }
    type Query {
        
        Proyectos: [Proyecto]
        Proyecto(
            _id: String!
        ): Proyecto
        ProyectosPorLider(
            lider: String!
        ): [Proyecto]
        InscripcionesLider(
            lider: String!
        ): [Proyecto]
    }
    type Mutation {
        
        crearProyecto(
            nombre: String!
            objetivoGeneral: String!
            objetivoEspecifico1: String!
            objetivoEspecifico2: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            lider: String!
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
        ): Proyecto
        
        editarProyecto(
            _id: String
            nombre: String
            objetivoGeneral: String
            objetivoEspecifico1: String
            objetivoEspecifico2: String
            presupuesto: Float
            estado: Enum_EstadoProyecto
            fase: Enum_FaseProyecto
            
        ): Proyecto
    }
`;

export { tiposProyecto };