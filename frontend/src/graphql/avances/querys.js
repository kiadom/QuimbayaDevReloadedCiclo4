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
      titulo
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
    lider {
      nombre
      apellido
    }
  }
}
`
const GET_AVANCESPORPROYECTO = gql`
query AvancesPorProyecto($proyecto: String!) {
  AvancesPorProyecto(proyecto: $proyecto) {
    _id
    fecha
    creadoPor {
      nombre
      apellido
    }
    titulo
  }
}
`


export { GET_AVANCES2, GET_PROYECTOSMODAVANCE, GET_AVANCESPORPROYECTO };