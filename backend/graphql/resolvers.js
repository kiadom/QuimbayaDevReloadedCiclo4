import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversInscripcion } from "../models/inscripcion/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import { resolversAutenticacion } from './autenticacion/resolvers.js';

export const resolvers = [resolversUsuario, resolversProyecto, resolversInscripcion, resolversAvance, resolversAutenticacion];