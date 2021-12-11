import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
    query ConsutaProyectos {
        Proyectos {
            _id
            nombre
            presupuesto
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
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
    query Proyecto($_id: String!) {
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
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

export { GET_PROYECTOS, GET_PROYECTO };