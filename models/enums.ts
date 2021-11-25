enum Enum_Rol{
    ESTUDIANTE = "ESTUDIANTE",
    LIDER = "LIDER",
    ADMINISTRADOR = "ADMINISTRADOR"


enum Enum_EstadoUsuario{
    PENDIENTE = "PENDIENTE", 
    AUTORIZADO = "AUTORIZADO",
    NO_AUTORIZADO = "NO_AUTORIZADO",
}

enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo = "Inactivo" 
}

enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    en_desarrollo = "En_Desarrollo",
    terminado = "Terminado",
    nulo = ""
}

enum Enum_EstadoInscripcion{
    aceptada = "Aceptada",
    rechazada = "Rechazado",
    pendiente = "Pendiente" //adicioné este estado para que sea el inicial
}

enum Enum_TipoObjetivo{
    general = "General",
    especifico = "Especifico" ,
}

export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_EstadoInscripcion, Enum_TipoObjetivo };