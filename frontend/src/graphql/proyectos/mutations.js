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

const EDITAR_PROYECTO = gql`

    mutation EditarProyecto(
        $_id: String, 
        $nombre: String,
        # $presupuesto: Float,
    ) {
        editarProyecto(
            _id: $_id, 
            nombre: $nombre,
            # presupuesto: $presupuesto, 
        ) {
            _id
            nombre
            # objetivo {
            #     _id
            # }
            # presupuesto
            # fechaInicio
            # fechaFin
            # lider {
            #     _id
            # }
            # estado
            # fase
        }
    }
`;

export { CREAR_PROYECTO, EDITAR_PROYECTO };