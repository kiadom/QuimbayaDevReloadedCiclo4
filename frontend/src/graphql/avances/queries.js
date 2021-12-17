import { gql } from '@apollo/client';

const GET_AVANCESPORPROYECTO = gql`
query AvancesPorProyecto($proyecto: String!) {
  AvancesPorProyecto(proyecto: $proyecto) {
    _id
    titulo
    fechaAvance
    descripcion
    observacionesLider
    proyecto {
      nombre
      _id
    }
  }
}
`;


const GET_AVANCES2 = gql`
  query DetalleAvance($_id: String!) {
    DetalleAvance(_id: $_id) {
    _id
    proyecto {
      nombre
    }
    titulo
    descripcion
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
      objetivoGeneral
      
    }
  }
}
`;

const GET_PROYECTOSPORLIDER = gql`
query ProyectosPorLider($lider: String!) {
  ProyectosPorLider(lider: $lider) {
    _id
    nombre
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






export { GET_AVANCES2, GET_PROYECTOSMODAVANCE, GET_AVANCESPORPROYECTO, GET_INSCRIPCIONESDELESTUDIANTE, GET_PROYECTOSPORLIDER };