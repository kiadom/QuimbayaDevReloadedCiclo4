import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
mutation EditarUsuario(
    $id: String!
    $correo: String!
    $identificacion: String!
    $nombre: String!
    $apellido: String!
    $estado: Enum_EstadoUsuario!
  ) {
    editarUsuario(
      _id: $id
      correo: $correo
      identificacion: $identificacion
      nombre: $nombre
      apellido: $apellido
      estado: $estado
    ) {
      _id
      correo
      identificacion
      nombre
      apellido
      estado
    }
  }
`;

export { EDITAR_USUARIO };