import { gql } from '@apollo/client';

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

export { GET_AVANCES2 };