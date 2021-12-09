import { gql } from '@apollo/client';

const GET_AVANCES2 = gql`
  query DetalleAvances($_id: String!) {
    DetalleAvances(_id: $_id) {
    _id
    fecha
    titulo
    descripcion
    creadoPor {
      nombre
      apellido
    }
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