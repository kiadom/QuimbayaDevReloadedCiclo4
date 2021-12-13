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

export { GET_INSCRIPCIONES };