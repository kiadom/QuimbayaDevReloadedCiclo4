import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposUsuario } from '../models/usuario/tipos.js';
import { tiposProyecto } from '../models/proyecto/tipos.js';
import { tiposObjetivo } from '../models/objetivo/tipos.js';
import { tiposInscripcion } from '../models/inscripcion/tipos.js';
import { tiposAvance } from '../models/avance/tipos.js';

const tiposGlobales = gql`
    scalar Date
`;


<<<<<<< HEAD:backend/graphql/tipos.js
export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposObjetivo, tiposInscripcion, tiposAvance]
=======
export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposObjetivo, tiposInscripcion, tiposAvance]
>>>>>>> a88278ea4064b56f0e77e8c64cb0300b8711c94a:graphql/tipos.js
