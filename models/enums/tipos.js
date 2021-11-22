import { gql } from 'apollo-server-express';

const tiposEnums = gql`

    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }

    enum Enum_FaseProyecto{
        INICIADO
        EN_DESARROLLO
        TERMINADO
        NULA
    }

    enum Enum_TipoObjetivo{
        GENERAL
        ESPECIFICO
    }
`;

export { tiposEnums };