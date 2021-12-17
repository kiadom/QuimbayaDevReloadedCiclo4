import { gql } from '@apollo/client';

//Esta primera consulta no la está ejecutando
const GET_AVANCES2 = gql`
  query AvancesProyectos {
    Proyectos {
      nombre
      avances {
        descripcion
        }
      lider {
        nombre
        apellido
      }
    }

    } 
`;



export { GET_AVANCES2 };