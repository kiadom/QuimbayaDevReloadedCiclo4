import { gql } from '@apollo/client';

//Esta primera consulta no la está ejecutando
const GET_AVANCES = gql`
  query Avances {
    Avances {
      descripcion
      observacionesLider
  }
}
`;

const GET_AVANCES2 = gql`
  query AvancesDetallado {
    Avances {
      _id
      fecha
      proyecto {
        _id
        nombre
      }
      descripcion
      observacionesLider
    }
  }
`;

export { GET_AVANCES, GET_AVANCES2 };