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
      identificacion
      nombre
      apellido
      correo
      estado
      rol
    }
  }
`;

const EDITAR_PERFIL = gql`
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
      identificacion
      nombre
      apellido
      correo
      estado
      rol
    }
  }
`;

export { EDITAR_USUARIO, EDITAR_PERFIL };