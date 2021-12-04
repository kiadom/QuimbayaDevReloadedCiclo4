import { gql } from '@apollo/client';

const GET_PROYECTOS = gql`
    query Proyectos {
        Proyectos {
            _id
            nombre
            presupuesto
            fechaInicio
            fechaFin
            estado
            fase
            lider {
            nombre
            }
        }
    }
`;

export { GET_PROYECTOS };