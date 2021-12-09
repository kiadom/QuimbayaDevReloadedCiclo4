const Enum_Rol = {
  ADMINISTRADOR: 'Administrador',
  ESTUDIANTE: 'Estudiante',
  LIDER: 'Líder',
};

const Enum_EstadoUsuario = {
  PENDIENTE: 'Pendiente',
  AUTORIZADO: 'Autorizado',
  NO_AUTORIZADO: 'No autorizado',
};

const Enum_EstadoProyecto = {
  ACTIVO: 'Activo',
  INACTIVO: 'Inactivo',
};

const Enum_FaseProyecto = {
  INICIADO: 'Iniciado',
  EN_DESARROLLO: 'En Desarrollo',
  TERMINADO: 'Terminado',
  NULA: 'Nula',
};

const Enum_TipoObjetivo = {
  GENERAL: 'General',
  ESPECIFICO: 'Especifico',
};

const Enum_EstadoInscripcion = {
  ACEPTADA: 'Aceptada',
  RECHAZADA: 'Rechazada',
  PENDIENTE: 'Pendiente',
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo, Enum_EstadoInscripcion };