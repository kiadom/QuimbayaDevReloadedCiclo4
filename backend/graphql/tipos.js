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


<<<<<<< HEAD:graphql/tipos.js
export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposObjetivo, tiposInscripcion, tiposAvance]
=======
export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposObjetivo, tiposInscripcion, tiposAvance]
>>>>>>> c29da4692f5e514f1a5c97fed2f9dfb4700975bd:backend/graphql/tipos.js
