import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
      $_id: String
      $correo: String
      $identificacion: String
      $nombre: String
      $apellido: String
      $estado: Enum_EstadoUsuario
    ) {
      editarUsuario(
        _id: $_id
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
mutation EditarPerfil($_id: String!, $campos: CamposEditarPerfil!) {
  editarPerfil(_id: $_id, campos: $campos) {
    _id
    apellido
  }
}
`;

export { EDITAR_USUARIO, EDITAR_PERFIL };