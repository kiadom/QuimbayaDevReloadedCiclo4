import { gql } from '@apollo/client';

const REGISTRO = gql`
mutation Registro(
    $nombre: String!, 
    $apellido: String!, 
    $identificacion: String!, 
    $correo: String!, 
    $rol: Enum_Rol!, 
    $contrasena: String!
    ) {
    registro(
        nombre: $nombre, 
        apellido: $apellido, 
        identificacion: $identificacion, 
        correo: $correo, 
        rol: $rol, 
        contrasena: $contrasena
        ) {
      token
      error
    }
  }
`;
const LOGIN = gql`
  mutation Login($correo: String!, $contrasena: String!) {
    login(correo: $correo, contrasena: $contrasena) {
      token
      error
    }
  }
`;

const EDITAR_PERFIL = gql`
  mutation EditarPerfilUsuario(
    $id: String
    $nombre: String
    $apellido: String
    $identificacion: String
    $correo: String
    $contrasena: String
  ) {
    editarPerfilUsuario(
      _id: $id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      contrasena: $contrasena
    ) {
      token
      error
    }
  }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      token
      error
    }
  }
`;

export { REGISTRO, LOGIN, REFRESH_TOKEN, EDITAR_PERFIL };