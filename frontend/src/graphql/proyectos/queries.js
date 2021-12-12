import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
    query ConsultaProyectos {
        Proyectos {
            _id
            nombre
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            presupuesto
            fechaInicio
            fechaFin
            lider {
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

const GET_PROYECTO = gql`
    query ConsultaProyecto($_id: String!) {
        Proyecto(_id: $_id) {
            _id
            nombre
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            presupuesto
            fechaInicio
            fechaFin
            lider {
                _id
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

const GET_PROYECTOS_POR_LIDER = gql`
    query ConsultaProyectosPorLider($lider: String!) {
        ProyectosPorLider(lider: $lider) {
            _id
            nombre
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            presupuesto
            fechaInicio
            fechaFin
            lider {
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

export { GET_PROYECTOS, GET_PROYECTO, GET_PROYECTOS_POR_LIDER };