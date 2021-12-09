import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`

    mutation CrearProyecto(
        $nombre: String!, 
        $presupuesto: Float!, 
        $objetivo: [String]!
    ) {
        crearProyecto(
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            objetivo: $objetivo
        ) {
            _id
            nombre
            objetivo {
                descripcion
                tipo
            }
            presupuesto
            fechaInicio
            fechaFin
            lider {
                identificacion
                nombre
            }
            estado
            fase
        }
    }
`;

export { CREAR_PROYECTO };