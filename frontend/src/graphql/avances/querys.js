import { gql } from '@apollo/client';


const GET_AVANCES = gql`
    query Proyectos {
        Proyectos {
            _id
            nombre
            objetivo {
                descripcion
                tipo
            }
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

export { GET_AVANCES };