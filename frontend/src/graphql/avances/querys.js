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

const GET_PROYECTOSMODAVANCE = gql`
  query ProyectosModAvances {
  Proyectos {
    _id
    nombre
  }
}
`

export { GET_AVANCES2, GET_PROYECTOSMODAVANCE };