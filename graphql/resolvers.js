import { resolversProyecto } from "../models/project/resolvers.js";
import { resolversObjetivo } from "../models/objective/resolvers.js";
import { resolversInscripcion } from "../models/inscription/resolvers.js";

export const resolvers = [resolversProyecto, resolversObjetivo, resolversInscripcion];