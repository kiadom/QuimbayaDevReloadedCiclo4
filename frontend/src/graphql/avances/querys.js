import { gql } from '@apollo/client';

const GET_AVANCES = gql`
    query Avances {
    Avances {
      proyecto {nombre}
      fecha
      descripcion
      creadoPor {nombre}
      lider {nombre}
    }
  }
`;

export {GET_AVANCES};