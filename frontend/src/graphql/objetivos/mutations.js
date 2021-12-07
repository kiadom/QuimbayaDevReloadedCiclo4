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

export { CREAR_OBJETIVO };