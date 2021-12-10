import { gql } from '@apollo/client';

const CREAR_OBJETIVO = gql`

    mutation CrearObjetivo(
        $descripcion: String!, 
        $tipo: Enum_TipoObjetivo!
    ) {
        crearObjetivo(
            descripcion: $descripcion, 
            tipo: $tipo
        ) {
            _id
            descripcion
            tipo
        
        }
    }
`;

const EDITAR_OBJETIVO = gql`
    mutation EditarObjetivo(
        $_id: String!, 
        $descripcion: String!, 
        $tipo: Enum_TipoObjetivo!
    ) {
        editarObjetivo(
            _id: $_id, 
            descripcion: $descripcion, 
            tipo: $tipo
        ) {
            _id
            descripcion
            tipo
        }
    }
`;

export { CREAR_OBJETIVO, EDITAR_OBJETIVO };