import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
    query Inscripciones {
        Inscripciones {
            _id
            proyecto {
                nombre
                lider {
                    nombre
                    apellido
                }
            }
            estudianteInscrito {
                _id
                nombre
                apellido
                correo
            }

            fecha_ingreso
            fecha_egreso
            estadoInscripcion
        }
        }
`;

const GET_INSCRIPCIONESESTUDIANTE = gql`
query InscripcionPorEstudiante($estudianteInscrito: String!) {
  InscripcionPorEstudiante(estudianteInscrito: $estudianteInscrito) {
    _id
    proyecto {
      nombre
    }
    fecha_ingreso
    fecha_egreso
    estadoInscripcion
  }
}
`;

const GET_INSCRIPCIONPROYECTO = gql`
query Query($proyecto: String!) {
  InscripcionPorProyecto(proyecto: $proyecto) {
    _id
    fecha_ingreso
    fecha_egreso
    estadoInscripcion
    proyecto {
      nombre
    }
    estudianteInscrito {
      nombre
      apellido
      correo
    }
  }}

`;

const GET_PROYECTOSLIDER = gql`
query ProyectosPorLider($lider: String!) {
  ProyectosPorLider(lider: $lider) {
    _id
    nombre
    estado
    fase
  }
}
`;

export { GET_INSCRIPCIONES, GET_INSCRIPCIONESESTUDIANTE, GET_INSCRIPCIONPROYECTO, GET_PROYECTOSLIDER};