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

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      token
      error
    }
  }
`;

export { REGISTRO, LOGIN, REFRESH_TOKEN };