import { gql } from '@apollo/client';




const GET_AVANCES2 = gql`
  query DetalleAvances($_id: String!) {
    DetalleAvances(_id: $_id) {
    _id
    proyecto {
      nombre
    }
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

const GET_INSCRIPCIONESDELESTUDIANTE = gql`
query InscripcionPorEstudiante($estudianteInscrito: String!) {
  InscripcionPorEstudiante(estudianteInscrito: $estudianteInscrito) {
    proyecto {
      _id
      nombre
    }
  }
}
`;


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
    descripcion
    proyecto {
      _id
      nombre
    }
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
`;






export { GET_AVANCES2, GET_PROYECTOSMODAVANCE, GET_AVANCESPORPROYECTO, GET_INSCRIPCIONESDELESTUDIANTE };