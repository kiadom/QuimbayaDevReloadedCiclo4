import { gql } from '@apollo/client';

const CREAR_AVANCE = gql`
mutation CrearAvance(
    $fecha: Date!, 
    $titulo: String!, 
    $descripcion: String!, 
    $proyecto: String!
) {
    crearAvance(
        fecha: $fecha, 
        titulo: $titulo, 
        descripcion: $descripcion, 
        proyecto: $proyecto
    ) {
        _id
        titulo
        descripcion
    }
}

`;

const EDITAR_AVANCE = gql `
    mutation EditarAvance(
        $id: String, 
        $titulo: String, 
        $descripcion: String
    ) {
        editarAvance(
            _id: $id, 
            titulo: $titulo, 
            descripcion: $descripcion
        ) {
            _id
            titulo
            descripcion
        }
    }
`;

export {CREAR_AVANCE, EDITAR_AVANCE};