import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversObjetivo } from "../models/objetivo/resolvers.js";
import { resolversInscripcion } from "../models/inscripcion/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";

//export const resolvers = [resolversUsuario, resolversProyecto, resolversObjetivo, resolversInscripcion];
export const resolvers = [resolversUsuario, resolversProyecto, resolversObjetivo, resolversInscripcion, resolversAvance];