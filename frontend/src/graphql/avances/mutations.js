import { gql } from '@apollo/client';

const CREAR_AVANCE = gql`
mutation CrearAvance(
    $titulo: String! 
    $descripcion: String!
    $proyecto: String!
) {
    crearAvance(
        titulo: $titulo 
        descripcion: $descripcion 
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
        $_id: String 
        $descripcion: String 
        $observacionesLider: String
        ) {
        editarAvance(
          _id: $_id 
          descripcion: $descripcion 
          observacionesLider: $observacionesLider
          ) {
          _id
          descripcion
          observacionesLider
        }
    }
`;

const EDITAR_OBSERVACION = gql `
    mutation EditarObservacion(
        $id: String, 
        $observacionesLider: String
    ) {
        editarAvance(
            _id: $id, 
            observacionesLider: $descripcion,
        ) {
            _id
            observacionesLider
        }
    }
`;

export {CREAR_AVANCE, EDITAR_AVANCE, EDITAR_OBSERVACION};