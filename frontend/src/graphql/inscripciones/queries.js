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

const GET_INSCRIPCIONLIDER = gql`
query InscripcionesLider($lider: String!) {
  InscripcionesLider(lider: $lider) {
          nombre
          lider {
            nombre
            apellido
          }
          inscripciones {
            estudianteInscrito {
              nombre
              apellido
              correo
            }
            estadoInscripcion
            fecha_ingreso
            fecha_egreso
            
          }
        }
      }

`;

export { GET_INSCRIPCIONES, GET_INSCRIPCIONESESTUDIANTE, GET_INSCRIPCIONLIDER};