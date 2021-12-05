import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`

    mutation CrearProyecto(
        $nombre: String!, 
        $presupuesto: Float!, 
        $fechaInicio: Date!, 
        $fechaFin: Date!, 
        $estado: Enum_EstadoProyecto, 
        $fase: Enum_FaseProyecto, 
        $lider: String!, 
        $objetivo: [String]!
    ) {
        crearProyecto(
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            fechaInicio: $fechaInicio, 
            fechaFin: $fechaFin, 
            estado: $estado, 
            fase: $fase, 
            lider: $lider, 
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