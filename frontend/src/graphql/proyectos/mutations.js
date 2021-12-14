import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`

    mutation CrearProyecto(
        $nombre: String!, 
        $objetivoGeneral: String!,
        $objetivoEspecifico1: String!,
        $objetivoEspecifico2: String!,
        $presupuesto: Float!,
        $fechaInicio: Date!,
        $fechaFin: Date!,
        $lider: String!,
    ) {
        crearProyecto(
            nombre: $nombre, 
            objetivoGeneral: $objetivoGeneral,
            objetivoEspecifico1: $objetivoEspecifico1,
            objetivoEspecifico2: $objetivoEspecifico2,
            presupuesto: $presupuesto, 
            fechaInicio: $fechaInicio,
            fechaFin: $fechaFin,
            lider: $lider,
        ) {
            _id
            nombre
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            presupuesto
            fechaInicio
            fechaFin
            lider {
                _id
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
        $objetivoGeneral: String,
        $objetivoEspecifico1: String,
        $objetivoEspecifico2: String,
        $presupuesto: Float,
        $estado: Enum_EstadoProyecto,
        $fase: Enum_FaseProyecto,
    ) {
        editarProyecto(
            _id: $_id, 
            nombre: $nombre,
            objetivoGeneral: $objetivoGeneral,
            objetivoEspecifico1: $objetivoEspecifico1,
            objetivoEspecifico2: $objetivoEspecifico2,
            presupuesto: $presupuesto, 
            estado: $estado,
            fase: $fase,
        ) {
            _id
            nombre
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            presupuesto
            fechaInicio
            fechaFin
            lider {
                _id
            }
            estado
            fase
        }
    }
`;

export { CREAR_PROYECTO, EDITAR_PROYECTO };