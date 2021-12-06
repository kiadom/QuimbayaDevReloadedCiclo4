import { gql } from '@apollo/client';

const APROBAR_INSCRIPCION = gql`
  mutation aprobarInscripcion(
      $aprobarInscripcionId: String!
      ) {
        aprobarInscripcion(
            id: $aprobarInscripcionId
            ) {
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
            }
        }
        }
`;
const RECHAZAR_INSCRIPCION = gql`
    mutation rechazarInscripcion($rechazarInscripcionId: String!){
        rechazarInscripcion(id: $rechazarInscripcionId) {
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
        }
        }
    }
`;

export { APROBAR_INSCRIPCION, RECHAZAR_INSCRIPCION};